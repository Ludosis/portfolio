// Renders pipeline/og-card.html to assets/img/og-card.png (1200x630 link preview).
// Run after editing the card: node pipeline/make-og-card.mjs
import { chromium } from "playwright-core";
import { fileURLToPath } from "url";
import path from "path";

const here = path.dirname(fileURLToPath(import.meta.url));
const executablePath = process.env.CHROME_PATH || process.env.CHROME_BIN || "/usr/bin/google-chrome";
const browser = await chromium.launch({ executablePath });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto("file://" + path.join(here, "og-card.html"));
await page.evaluate(() => document.fonts.ready);
await page.locator(".card").screenshot({ path: path.join(here, "..", "assets", "img", "og-card.png") });
await browser.close();
console.log("wrote assets/img/og-card.png");
