# Project Continuity — JovianFinch.com Portfolio

This file is read automatically by Claude Code at session start.
Read this fully before doing any work on this project.

---

## Claude Code Session Hygiene

**Cloud sessions have a confirmed ~7-day TTL and terminate silently with no warning.**
All session context that isn't committed to the repo is unrecoverable when a session ends.

### Rules

1. **Update `CLAUDE.md`** whenever a key decision is made, a design direction is settled,
   or a significant new constraint is discovered. This file is the durable project memory.
2. **Keep `_source/working-memory.md`** for in-progress context: what's actively being
   worked on, what's blocked, what was decided mid-session but not yet reflected in code.
3. **Never rely on session history** to carry forward important context. If it's not in
   the repo, assume it's gone.
4. **Commit after any significant work block** — don't let a session end with uncommitted
   decisions or half-documented states.

### What belongs in CLAUDE.md for this project

- Current state of the site (which pages exist, what's live)
- Pending work items with enough detail to resume without asking the user to re-explain
- Any content decisions (tone, framing, attribution) that were discussed and settled
- Technical conventions that must not be broken (paths, CSS architecture, fetch behavior)
- Context about Jovian that informs writing tone and content choices

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

MVP is complete and live. All project pages have been expanded with Miro content.
The following pages exist:

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

### Recent content additions (from Miro review)
- **Alien Age**: Added Indie Wizards → Left Turn Studios studio history; game jam origin;
  Tree Sizer/Rotator/Tinter script detail
- **Snuggles**: Added URP rendering system refactor section; expanded mech kitbash detail;
  added Character Status FX Shader section; added in-game cinematic section with Vimeo link
- **Grapple Star**: Added Level Select UI section (Rowan Sherwin concept art credit);
  dynamic reticle detail; UI Scripting skill tag
- **Lego Fortnite**: Added EUW animation range validator; playblast TSR investigation;
  ReplayRun scalability comparison tool

---

## Pending work (discussed but not yet built)

### 1. Skills page — `/skills/index.html` ← NEXT PRIORITY
Hiring-manager-focused page organized by skill discipline, skills front and center,
backlinks to project pages for full context. Agreed approach: skills as the entry point,
projects as the depth. Add "Skills" to main nav.

Confirmed structure:
- Shaders & Materials → Alien Age (water, fog, color-variation, world-pos seed), Snuggles
  (wing vertex shader, status FX overlay), Relic (atmospheric faking)
- VFX → Alien Age, Grapple Star (ship trails), Destiny 2 (beehive, sea monster), Snuggles
- Lighting & Rendering → Alien Age (URP overhaul, post-processing), Relic, Grapple Star (DoF fix)
- Rigging & Animation → Snuggles (puppet rig, mech kitbash, scripted rebuild), Destiny 2
  (owls, sea monster, reactive NPC), Jerry's Rig
- Tools & Pipeline → Alien Age (foliage tool, tree script), Snuggles (puppet rig connector,
  Maya compositing helper), Lego Fortnite (EUW range validator, asset audit, FX validation),
  Bungie (debug config tool)
- QA & Automation → Lego Fortnite (triage tool, FX framework, ReplayRun), Bungie (test engineering)
- Procedural Content → Alien Age (foliage, tree sizer), Grapple Star (procedural environment)
- UI → Grapple Star (level select, dynamic reticle)
- Scripting → C# (gameplay/VFX/shader control), Python (Maya scripts), Blueprint + EUW, Claude Code

### 2. Earlier Work page — `/portfolio/earlier-work/index.html`
Two items:
- **Jerry's Rig** (2013–2014, DigiPen junior year) — solo animation project, full production
  scope: story/storyboard, character concept/model/texture/rig/animation, environment
  concept/model/texture/lighting. Tools: Maya, Photoshop, abAutoRig, 3D-Coat, Mental Ray.
  Has Sketchfab embeds and a YouTube video.
  Reference: https://jnordgren.weebly.com/jerrys-rig---animation-render.html
- **221B Baker Street interior** — single prop modeling/texturing sample image

### 3. Grapple Star Level Select video link
Video link URL not yet provided. Placeholder text in the page. User to provide URL.

### 4. Miro screenshots moved
Images are now at `_source/Miro/ima1–12.png`. The corrected text is at
`_source/Miro/miro-content.md` — this is the source of truth, user has reviewed it.

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
| `_source/Miro/miro-content.md` | Miro board content — reviewed and corrected by user, use as source of truth |
| `_source/Miro/ima1–12.png` | Original Miro board screenshots |
| `_source/portfolio_brief.md` | Original project brief (requirements doc) |
| `_source/working-memory.md` | In-progress session scratchpad |
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
