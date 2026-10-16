// Checks that the print resume still fits on exactly two sheets, printed the way
// the owner prints it: email and phone revealed first, background graphics off.
// Sheets must also keep a safety margin, because other machines lay text out a
// little taller than headless Chromium does.
// Run against a served build: node pipeline/check-print-fit.mjs http://localhost:8899
// Exits 1 when it doesn't fit. The print-check workflow runs this separately
// from the deploy, so a failure warns (GitHub emails you) but never blocks a deploy.
import { chromium } from "playwright-core";
import fs from "fs";

const base = process.argv[2] || "http://localhost:8899";
const executablePath = process.env.CHROME_PATH || process.env.CHROME_BIN || "/usr/bin/google-chrome";
const SHEET_IN = 11;
const SAFE_IN = 10.8; // warn above this: 0.2in of slack is where real printers started tipping over

const browser = await chromium.launch({ executablePath });
const page = await browser.newPage();
await page.goto(`${base}/resume/Resume.html`, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
// Reveal email and phone, as you do before printing (it adds rows to the header).
while (await page.locator(".reveal-btn").count()) await page.locator(".reveal-btn").first().click();
await page.emulateMedia({ media: "print" });

const sheets = await page.evaluate(() =>
  [...document.querySelectorAll(".page")].map((p) => +(p.getBoundingClientRect().height / 96).toFixed(2))
);
const pdf = await page.pdf({ printBackground: false, preferCSSPageSize: true });
const pdfPages = (pdf.toString("latin1").match(/\/Type\s*\/Page[^s]/g) || []).length;
await browser.close();

const over = sheets.map((h, i) => ({ sheet: i + 1, h })).filter((s) => s.h > SAFE_IN);
const ok = pdfPages === 2 && over.length === 0;

const lines = [
  ok ? "Print resume fits on two sheets, with a safety margin." : "**Print resume is too close to (or past) two sheets.** It may print an extra page. The site deployed normally; only the printout is affected.",
  "",
  ...sheets.map((h, i) => `- Sheet ${i + 1}: ${h}in of ${SHEET_IN}in${h > SAFE_IN ? ` (over the ${SAFE_IN}in safety line by ${(h - SAFE_IN).toFixed(2)}in)` : ""}`),
  `- Printed PDF pages: ${pdfPages}`,
];
if (!ok) lines.push("", "Usually one line wrapped. Trimming a few words from a bullet on the overflowing sheet fixes it.");
console.log(lines.join("\n"));
if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, lines.join("\n") + "\n");
process.exit(ok ? 0 : 1);
