// Checks that the print resume still fits on exactly two sheets.
// Run against a served build: node pipeline/check-print-fit.mjs http://localhost:8899
// Exits 1 when it doesn't fit. The print-check workflow runs this separately
// from the deploy, so a failure warns (GitHub emails you) but never blocks a deploy.
import { chromium } from "playwright-core";
import fs from "fs";

const base = process.argv[2] || "http://localhost:8899";
const executablePath = process.env.CHROME_PATH || process.env.CHROME_BIN || "/usr/bin/google-chrome";
const SHEET_IN = 11;

const browser = await chromium.launch({ executablePath });
const page = await browser.newPage();
await page.goto(`${base}/resume/Resume.html`, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.emulateMedia({ media: "print" });

const sheets = await page.evaluate(() =>
  [...document.querySelectorAll(".page")].map((p) => +(p.getBoundingClientRect().height / 96).toFixed(2))
);
const pdf = await page.pdf({ format: "Letter", printBackground: true });
const pdfPages = (pdf.toString("latin1").match(/\/Type\s*\/Page[^s]/g) || []).length;
await browser.close();

const over = sheets.map((h, i) => ({ sheet: i + 1, h, over: +(h - SHEET_IN).toFixed(2) })).filter((s) => s.over > 0);
const ok = pdfPages === 2 && over.length === 0;

const lines = [
  ok ? "Print resume fits on two sheets." : "**Print resume no longer fits on two sheets.** The site deployed normally; only the printout is affected.",
  "",
  ...sheets.map((h, i) => `- Sheet ${i + 1}: ${h}in of ${SHEET_IN}in${h > SHEET_IN ? ` (over by ${(h - SHEET_IN).toFixed(2)}in)` : ""}`),
  `- Printed PDF pages: ${pdfPages}`,
];
if (!ok) lines.push("", "Usually one line wrapped. Trimming a few words from a bullet on the overflowing sheet fixes it.");
console.log(lines.join("\n"));
if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, lines.join("\n") + "\n");
process.exit(ok ? 0 : 1);
