# Project Continuity — JovianFinch.com Portfolio

This file is read automatically by Claude Code at session start.
Read this fully before doing any work on this project.

---

## What this project is

A portfolio website for **Jovian Finch Nordgren**, Technical Artist (Bungie, Epic Games,
Left Turn Studios, DigiPen). Replacing an outdated Weebly site.

- **Live site:** JovianFinch.com (GitHub Pages)
- **Repo:** Ludosis/portfolio
- **Working branch:** `claude/new-portfolio-website-cqdm9`
- **Tech stack:** Plain HTML, CSS, JavaScript — no framework, no build step, no dependencies
- **Content source:** `jovian-nordgren-resume.md` at repo root (fetched at runtime by resume page)

---

## Branch workflow

- Develop on `claude/new-portfolio-website-cqdm9`
- Merge to `main` to deploy (GitHub Pages serves from `main`)
- Always push to the working branch; user merges to main

---

## Current state (as of last session)

MVP is complete and live. The following pages exist:

| Page | Path |
|------|------|
| Home | `/index.html` |
| About | `/about/index.html` |
| Resume | `/resume/index.html` |
| Portfolio index | `/portfolio/index.html` |
| Alien Age | `/portfolio/alien-age/index.html` |
| Snuggles the Unicorn | `/portfolio/snuggles/index.html` |
| Grapple Star | `/portfolio/grapple-star/index.html` |
| Lego Fortnite | `/portfolio/lego-fortnite/index.html` |
| Destiny 2 | `/portfolio/destiny-2/index.html` |
| Relic | `/portfolio/relic/index.html` |
| How I Work | `/how-i-work/index.html` |

---

## Pending work (discussed but not yet built)

### 1. Skills page — `/skills/index.html`
A hiring-manager-focused page organized by skill discipline, each with cross-references
to where that skill was demonstrated. Discussed structure:

- Shaders & Materials → Alien Age (water, fog, color-variation), Snuggles (wing vertex shader), Relic (atmospheric faking)
- VFX → Alien Age, Grapple Star, Destiny 2, Snuggles
- Lighting & Rendering → Alien Age (overhaul + post-processing), Relic, Grapple Star (DoF fix)
- Rigging & Animation → Snuggles (puppet rig, scripted rebuild), Destiny 2 (owls, sea monster), Jerry's Rig
- Tools & Pipeline → Alien Age (foliage tool), Snuggles (scripted rig rebuild), Lego Fortnite (asset audit, FX validation), Bungie (debug config tool)
- QA & Automation → Lego Fortnite (triage tool, FX framework), Bungie (test engineering)
- Procedural Content → Alien Age (foliage), Grapple Star (procedural environment)
- Scripting → C# (gameplay/VFX), Python (Maya scripts, pipeline), Blueprint + EUW, Claude Code

Add "Skills" to the main nav alongside Portfolio, About, Resume, How I Work.

### 2. Grapple Star — add Level Select UI section
Current page only covers the DoF fix. Missing: Level Select UI (concept art by Semen Shvarts,
3D objects, particle systems, procedurally animated) with a video link. The project was
shelved (not shipped); current page says "demo" which is fine.

### 3. Alien Age — add studio history
Left Turn Studios started as "Indie Wizards" (rev share, 2021), officially became Left Turn
Studios (2022). Same team of people throughout. The page should note this history.
Timeline: Alien Age (Indie Wizards/Left Turn, 2021) → Snuggles (Left Turn, 2022) → Grapple Star (Left Turn, late 2022–early 2023)

### 4. Earlier Work page — `/portfolio/earlier-work/index.html`
Jerry's Rig (2013–2014, DigiPen junior year) — solo animation project, full production
scope: story/storyboard, character concept/model/texture/rig/animation, environment
concept/model/texture/lighting.
Tools: Maya, Photoshop, abAutoRig, 3D-Coat, Mental Ray.
Has Sketchfab embeds and a YouTube video.
Reference: https://jnordgren.weebly.com/jerrys-rig---animation-render.html

### 5. Miro content review
`_source/miro-content.md` was extracted from 12 Miro board screenshots (ima1–ima12.png
also in `_source/`). OCR was imperfect — uncertain reads marked with `[?]`.
**Do not incorporate this content into the site until the user has reviewed and corrected
the file.** Image 8 (Tools & Pipeline) had the most errors; tool names are likely wrong.

---

## Key technical conventions — read before editing anything

- **All paths are root-relative** (`/css/style.css`, `/js/main.js`) — never use relative
  paths like `../../css/` as they break from nested directories
- **Resume is fetched at runtime** — `main.js` does `fetch('/jovian-nordgren-resume.md')`.
  The file must stay at the repo root.
- **Draft images** use class `.draft-image` / `.draft-label` — these are real Weebly-hosted
  work samples (temporary), not placeholders
- **Anchor sections** on project pages use `class="project-section"` on `<h2 id="...">`.
  CSS sets `scroll-margin-top: 80px` for sticky nav clearance.
- **Active nav link** is set statically per page with `class="active"`
- **Mobile nav** is hidden by default (CSS), toggled via `.nav-open` on `<body>` (JS)
- **No comments needed** in HTML/CSS/JS unless the reason is non-obvious

## CSS architecture (`/css/style.css`, ~1100 lines)

Organized in sections: Custom properties → Reset → Layout → Typography → Nav → Footer →
Home → About → Portfolio index → Project pages → Resume → How I Work → Responsive

Key tokens:
- `--color-bg: #F5F0E8` (warm cream)
- `--color-accent: #B85C38` (terracotta — links, active nav, tags)
- `--color-text-primary: #2C2420`
- Fonts: Lora (headings, serif) + Source Sans 3 (body, humanist sans)

## Page template

Every page shares the same `<header>`, `<nav>`, and `<footer>`. Footer always includes:
```html
<p class="footer-note">Built with <a href="/how-i-work/">Claude Code</a> &mdash; <a href="/how-i-work/">how I work</a></p>
```

---

## Content that does NOT yet exist

- `/assets/jnordgren_resume.pdf` — PDF button is in `/resume/index.html` but commented out
- Lego Fortnite images — text-only draft areas pending NDA/asset clearance
- Final versions of all draft images (currently Weebly-hosted)

---

## Source files

| File | Purpose |
|------|---------|
| `_source/miro-content.md` | Extracted Miro board content — needs user review |
| `_source/ima1–12.png` | Original Miro board screenshots |
| `_source/portfolio_brief.md` | Original project brief (requirements doc) |
| `jovian-nordgren-resume.md` | Resume — single source of truth, fetched by resume page |

---

## About Jovian (useful context for writing)

- Technical Artist and 3D generalist — QA engineering background is central to approach
- Worked at: Bungie (2015–2019, QA → Test Engineer + 3D side project), Epic Games (2023–2026,
  Senior QA Engineer / Tech Art Specialist on Lego Fortnite), Left Turn Studios (2021–2023,
  Lead TA on Alien Age / Snuggles / Grapple Star), DigiPen capstone (Relic, 2014–2015)
- AI tooling fluency is a feature, not hidden — the portfolio explicitly discusses working
  with Claude Code (see /how-i-work/)
- Writing tone across the site: direct, precise, no marketing language, craft-focused
