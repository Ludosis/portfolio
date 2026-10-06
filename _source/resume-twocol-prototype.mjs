// Prototype the two-column print resume (experience 2/3, sidebar 1/3) by
// restructuring the built page in the browser. Nothing in the repo changes.
// Reports sheet heights for several variants and screenshots the best ones.
import { chromium } from "playwright-core";

const COMPRESSED = {
  "Real-Time & Rendering": "Shader authoring, VFX, lighting, rendering, optimization",
  "3D Art": "Modeling, sculpting, UVs, texturing, rigging, skinning, animation",
  "Tools & Pipeline": "Asset validation, pipeline tooling, workflow documentation, Perforce, Git",
  "Scripting": "Python, C#, HLSL, Lua",
  "AI & Automation": "Claude Code, agentic AI frameworks, LLM tooling, MCP / API integration",
  "Software": "Unreal Engine, Unity, Maya, 3ds Max, ZBrush, Substance 3D, Adobe Creative Suite",
};

const SIDE_CSS = `
  .twocol { display: grid; grid-template-columns: minmax(0, 2fr) minmax(0, 1fr); gap: 0.28in; align-items: start; }
  .twocol > .col-main > .section:first-child { margin-top: 0; }
  .col-side .section { margin-top: 0 !important; }
  .col-side .section + .section { margin-top: 14px !important; }
  .col-side .skills-grid { grid-template-columns: 1fr !important; row-gap: 0 !important; }
  .col-side .skills-grid dt { padding-top: 6px; }
  .col-side .skills-grid dd { font-size: 9.2pt; line-height: 1.36; }
  .col-side .edu-block { grid-template-columns: 1fr !important; gap: 8px !important; }
  .col-side .edu-item .edu-degree { font-size: 10pt; }
  .col-side .edu-extra { display: block; }
  .col-side .profile { font-size: 9.2pt; line-height: 1.38; margin: 0; }
`;

async function variant(name, { sideOnPage2, compress, shot, profileSide, ratio = '2fr 1fr', eduToP2 = false, gap = '0.28in', reword = null, skillsPatch = null }) {
  const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
  const page = await browser.newPage({ viewport: { width: 850, height: 1100 } });
  await page.goto("http://localhost:8899/resume/Resume.html", { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.addStyleTag({ content: SIDE_CSS.replace('gap: 0.28in', `gap: ${gap}`).replace('minmax(0, 2fr) minmax(0, 1fr)', ratio.split(' ').map(x => `minmax(0, ${x})`).join(' ')) });
  await page.evaluate(({ sideOnPage2, compress, COMPRESSED, profileSide, eduToP2 }) => {
    const [p1, p2] = document.querySelectorAll(".page");
    const sections2 = [...p2.querySelectorAll(":scope > .section")];
    const skills = sections2.find((s) => s.querySelector(".skills-grid"));
    const edu = sections2.find((s) => s.querySelector(".edu-block"));
    if (compress) {
      const dl = skills.querySelector(".skills-grid");
      dl.innerHTML = Object.entries(COMPRESSED).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("");
    }
    const wrap = (pageEl, sideContent) => {
      const exp = pageEl.querySelector(":scope > .section");
      const grid = document.createElement("div");
      grid.className = "twocol";
      const main = document.createElement("div");
      main.className = "col-main";
      const side = document.createElement("aside");
      side.className = "col-side";
      exp.parentNode.insertBefore(grid, exp);
      main.appendChild(exp);
      sideContent.forEach((n) => side.appendChild(n));
      grid.append(main, side);
    };
    const side1 = eduToP2 ? [skills] : [skills, edu];
    if (eduToP2) p2.insertBefore(edu, p2.querySelector('.foot'));
    if (profileSide) {
      const prof = p1.querySelector(".profile");
      const sec = document.createElement("div");
      sec.className = "section";
      sec.innerHTML = '<h2 class="section-title">Profile</h2>';
      sec.appendChild(prof);
      side1.unshift(sec);
    }
    wrap(p1, side1);
    p1.querySelectorAll(".col-main .job").forEach((job) => {
      const loc = job.querySelector(".job-title .loc");
      const pl = job.querySelector(".project-line");
      if (!loc || !pl) return;
      const sep = loc.previousElementSibling;
      pl.textContent = pl.textContent.trim() + " · " + loc.textContent.trim();
      loc.remove();
      if (sep && sep.classList.contains("sep")) sep.remove();
    });
    if (sideOnPage2) wrap(p2, []);
  }, { sideOnPage2, compress, COMPRESSED, profileSide, eduToP2 });
  if (skillsPatch) await page.evaluate(([from, to]) => {
    const dd = [...document.querySelectorAll(".skills-grid dd")].find((e) => e.textContent.includes(from));
    dd.textContent = dd.textContent.replace(from, to);
  }, skillsPatch);
  if (reword) await page.evaluate(([from, to]) => {
    const li = [...document.querySelectorAll("li, p")].find((e) => e.textContent.includes(from));
    li.textContent = li.textContent.replace(/\s+/g, " ").replace(from, to);
  }, reword);
  await page.emulateMedia({ media: "print" });
  const m = await page.evaluate(() => {
    const px = (el) => (el ? +(el.getBoundingClientRect().height / 96).toFixed(2) : 0);
    const [p1, p2] = document.querySelectorAll(".page");
    return {
      sheet1: px(p1), sheet2: px(p2),
      p1main: px(p1.querySelector(".col-main")), p1side: px(p1.querySelector(".col-side")),
    };
  });
  const fmt = (x) => `${x}in${x > 11 ? ` (+${(x - 11).toFixed(2)} OVER)` : ` (${(11 - x).toFixed(2)} spare)`}`;
  console.log(`${name}\n   sheet 1 ${fmt(m.sheet1)}  [experience column ${m.p1main}in, sidebar ${m.p1side}in]\n   sheet 2 ${fmt(m.sheet2)}\n`);
  if (shot) {
    const wins = await page.evaluate(() => {
      const out = [];
      document.querySelectorAll(".col-main .job-intro, .col-main ul.bullets li, .col-side .profile").forEach((el) => {
        const r = document.createRange(); r.selectNodeContents(el);
        const rects = [...r.getClientRects()].filter((x) => x.width > 0);
        const tops = [...new Set(rects.map((x) => Math.round(x.top)))];
        const last = Math.max(...tops);
        const right = Math.max(...rects.filter((x) => Math.round(x.top) === last).map((x) => x.right));
        const box = el.getBoundingClientRect();
        out.push({ lines: tops.length, fill: Math.round((right - box.left) / box.width * 100),
          job: el.closest(".job")?.querySelector(".co").textContent || "Profile", end: el.textContent.trim().split(/\s+/).slice(-6).join(" ") });
      });
      return out;
    });
    const cheap = wins.filter((w) => w.fill < 35);
    console.log(`   sheet-1 column: ${wins.reduce((a, w) => a + w.lines, 0)} lines total; ${cheap.length} blocks end on a line under 35% full:`);
    for (const w of cheap.sort((a, b) => a.fill - b.fill)) console.log(`     ${w.job.padEnd(11)} ${w.lines} lines, last ${String(w.fill).padStart(2)}% full  ...${w.end}`);

    let i = 1;
    for (const p of await page.locator(".page").all()) await p.screenshot({ path: `shots/twocol-${shot}-${i++}.png` });
  }
  await browser.close();
}

const base = { sideOnPage2: false, compress: true, profileSide: true, ratio: "37fr 13fr", eduToP2: true };
const rw = ["in a single day, integrating APIs and MCPs to generate an HTML report", "in one day, integrating APIs and MCPs into an HTML report"];
await variant("Epic reword + AI row without 'LLM tooling'", { ...base, reword: rw, skillsPatch: ["LLM tooling, ", ""] });
await variant("Epic reword + 3D Art row as 'Modeling, sculpting, UVs, texturing, rigging, animation'", { ...base, reword: rw, skillsPatch: ["rigging, skinning, animation", "rigging, animation"], shot: "K" });
