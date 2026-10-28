// Renders the hand-drawn HTML sources in pipeline/ to PNGs in assets/img/.
// Run after editing one: node pipeline/render-images.mjs
import { chromium } from "playwright-core";
import { fileURLToPath } from "url";
import path from "path";

const here = path.dirname(fileURLToPath(import.meta.url));
const images = [
  { src: "og-card.html", out: "og-card.png", width: 1200, height: 630 },
  { src: "tft-fixers-diagram.html", out: "tft-guided-fixers.png", width: 1200, height: 600 },
];

const executablePath = process.env.CHROME_PATH || process.env.CHROME_BIN || "/usr/bin/google-chrome";
const browser = await chromium.launch({ executablePath });
for (const img of images) {
  const page = await browser.newPage({ viewport: { width: img.width, height: img.height } });
  await page.goto("file://" + path.join(here, img.src));
  await page.evaluate(() => document.fonts.ready);
  await page.locator(".card").screenshot({ path: path.join(here, "..", "assets", "img", img.out) });
  await page.close();
  console.log("wrote assets/img/" + img.out);
}
await browser.close();
