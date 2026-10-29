// Renders the hand-drawn HTML sources in pipeline/ to PNGs in assets/img/, plus one
// link preview per project (assets/img/og/<slug>.png) from its front matter.
// Run after editing a source, or a project's title, studio, role, dates, or images:
//   node pipeline/render-images.mjs
import { chromium } from "playwright-core";
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";
import * as yaml from "js-yaml";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, "..");
const images = [
  { src: "og-card.html", out: "og-card.png", width: 1200, height: 630 },
  { src: "tft-fixers-diagram.html", out: "tft-guided-fixers.png", width: 1200, height: 600 },
];

// Preview image per project: ogImage if set, else the page hero, else the card image.
// No image at all gives a text-only card. ogFit: contain shows a diagram uncropped.
function projectCards() {
  const dir = path.join(root, "content", "projects");
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md")).map((f) => {
    const fm = yaml.load(fs.readFileSync(path.join(dir, f), "utf8").split(/^---$/m)[1]);
    const img = fm.ogImage || (fm.hero && fm.hero.src) || (fm.card && fm.card.image) || "";
    const params = new URLSearchParams({
      title: fm.title,
      eyebrow: fm.studio || "Portfolio",
      meta: [fm.role, fm.dates].filter(Boolean).join(" · "),
      img: img ? "../" + img.replace(/^\//, "") : "",
      fit: fm.ogFit || "cover",
    });
    return { src: "og-project.html?" + params, out: "og/" + f.replace(/\.md$/, ".png"), width: 1200, height: 630 };
  });
}

// Fixed seed for Math.random, so the generated hero map in og-card stays the same.
const seedRandom = () => {
  let s = 20261029;
  Math.random = () => ((s = Math.imul(s ^ (s >>> 15), 2246822507) + 0x9e3779b9 | 0) >>> 0) / 4294967296;
};

const executablePath = process.env.CHROME_PATH || process.env.CHROME_BIN || "/usr/bin/google-chrome";
const browser = await chromium.launch({ executablePath });
fs.mkdirSync(path.join(root, "assets", "img", "og"), { recursive: true });
for (const img of [...images, ...projectCards()]) {
  // Reduced motion makes the hero script draw its finished layout at once.
  const page = await browser.newPage({ viewport: { width: img.width, height: img.height }, reducedMotion: "reduce" });
  await page.addInitScript(seedRandom);
  await page.goto("file://" + path.join(here, img.src));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForFunction(() => [...document.images].every((i) => i.complete));
  await page.locator(".card").screenshot({ path: path.join(root, "assets", "img", img.out) });
  await page.close();
  console.log("wrote assets/img/" + img.out);
}
await browser.close();
