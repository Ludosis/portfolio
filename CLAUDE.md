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

---

## What this project is

A portfolio website for **Jovian Finch Nordgren**, Senior Technical Artist (Bungie, Epic
Games, Left Turn Studios, DigiPen). Replaced an outdated Weebly site.

- **Live site:** JovianFinch.com (GitHub Pages, deployed via Actions)
- **Repo:** Ludosis/portfolio
- **Working branch:** `claude/new-portfolio-website-cqdm9`
- **Architecture (July 2026 redesign, "Drafting Table" design):** Eleventy + custom
  pipeline. Content is markdown + YAML data; pages, skills index, llms.txt, JSON-LD,
  and sitemap are all generated at build. No client-side framework in the output.

## Architecture map

| Piece | Where | Notes |
|-------|-------|-------|
| Project content | `content/projects/*.md` | One file per project. Front matter drives everything (see below). |
| Static pages | `content/pages/*.njk`, `content/index.njk`, `content/skills.njk` | Skills page is 100% generated — never edit skill examples by hand. |
| Global data | `content/_data/site.yaml` (identity, nav, contact parts), `content/_data/skillsTaxonomy.yaml` (skill ids/names/summaries) | |
| Templates | `_includes/base.njk`, `_includes/project.njk`, `_includes/partials/` | |
| Pipeline code | `pipeline/` — skills-inversion, figures (auto-numbered plates), llms-txt, json-ld, contact | The custom showpiece; described on /how-i-work/. |
| Design system | `assets/css/style.css` — Drafting Table tokens (bone/ink/prussian/red-pencil), Fraunces + IBM Plex self-hosted in `assets/fonts/` | |
| JS | `assets/js/` — main (nav), hero-wave (WebGL vertex-shader hero, 2D fallback), reveal (contact) | |
| Print resume | `resume/Resume.html` — processed as a template (front matter permalink); phone injected at build; auto-prints with `?print` | |
| Resume source | `jovian-nordgren-resume.md` at repo root — build-rendered into /resume/, also passthrough-copied | |
| Deploy | `.github/workflows/deploy.yml` — push to main → build (CONTACT_PHONE secret) → Pages | |
| Build | `npm ci && npx @11ty/eleventy` → `_site/` (gitignored) | Optional `.env` with CONTACT_PHONE locally. |

### Project front-matter contract

- `skills:` entries reference `skillsTaxonomy.yaml` ids — **a typo'd id fails the build**.
  Each entry: `id`, `highlight`, `anchor`, `detail`. The skills page, project tag list,
  and llms.txt are all generated from these.
- `anchor:` values must match `<h2 id="...">` headings in the body (headings are raw
  HTML in the markdown, e.g. `<h2 id="wing-shader" class="project-section">`).
- `order:` drives portfolio index order and prev/next pagination.
- Figures in body: `{% fig "src", "caption", "meta", true %}` (true = draft label) —
  auto-numbered FIG. 01+ per page; the hero from front matter is always FIG. 00.
  `{% figblock %}...{% endfigblock %}` for pending/embed plates.

### Contact protection (implemented, do not regress)

- **Phone is NEVER in the repo in any form.** It lives in the `CONTACT_PHONE` Actions
  secret, is XOR+base64-encoded at build, and revealed client-side on click (site
  resume page + print resume). No secret → builds fine, phone row simply absent.
- **Plain email is never in repo or output.** Assembled client-side from
  `data-eu`/`data-ed` parts. Tagged routing addresses (generated from site.yaml):
  `+web` in an HTML comment, `+rec` in JSON-LD, `+ai` in llms.txt + AI-addressed
  comment. Tag legend lives only in working-memory.
- `/llms.txt` is generated — part of the deliberate AI-discoverability strategy.

## Pages (all URLs unchanged from the legacy site)

Home `/` · About `/about/` · Resume `/resume/` · Portfolio `/portfolio/` ·
projects at `/portfolio/{alien-age,snuggles,grapple-star,lego-fortnite,destiny-2,relic,earlier-work}/` ·
How I Work `/how-i-work/` · Skills `/skills/` · print resume `/resume/Resume.html`

---

## Branch workflow

- Develop on `claude/new-portfolio-website-cqdm9`; user merges to main (often squash).
- **Merge to main = deploy** (Actions builds and publishes).
- After a squash merge, reset the working branch onto origin/main
  (`git checkout -B <branch> origin/main`) — GitHub auto-deletes the remote branch
  on merge, so push recreates it.

---

## Pending work

1. **User to supply:** Jerry's Rig final animation video URL; 221B Baker Street image;
   verify Earlier Work figure captions (they're educated guesses from filenames);
   final replacements for Weebly-hosted draft images; Lego Fortnite captures
   (pending Epic clearance).
2. **Resume unification (plan Phase 6):** single structured source → web resume +
   print resume, replacing the manually-synced Resume.html. Until then Resume.html
   is manually maintained — when `jovian-nordgren-resume.md` changes, update it too.
3. **Blend design variant** (blueprint media wells) — archived in
   `_source/design-archive/`; can return as per-media front-matter flag if wanted.
4. Full plan: `_source/redesign-plan.md`. In-progress detail: `_source/working-memory.md`.

---

## Source files

| File | Purpose |
|------|---------|
| `_source/Miro/miro-content.md` | Miro board content — user-corrected source of truth. Do NOT re-extract from the images. |
| `_source/Miro/ima1–12.png` | Original Miro board screenshots |
| `_source/portfolio_brief.md` | Original project brief |
| `_source/redesign-plan.md` | 2026 redesign migration plan |
| `_source/design-archive/` | Design studies (three directions + blend mockup) |
| `_source/working-memory.md` | In-progress session scratchpad |

---

## About Jovian (useful context for writing)

- Senior Technical Artist and 3D generalist — QA engineering background is central
- Bungie (2015–2019, QA → Test Engineer + 3D ambient-life side project), Epic Games
  (2023–2026, Senior QA Engineer (Tech Art) on Lego Fortnite), Indie Wizards →
  Left Turn Studios (2021–2023: Alien Age shipped 2021 under Indie Wizards, which
  incorporated as Left Turn Studios in 2022; then Snuggles, Grapple Star),
  DigiPen capstone (Relic, 2014–2015)
- AI tooling fluency is a feature, not hidden — /how-i-work/ describes the site's
  own pipeline as evidence
- Writing tone: direct, precise, no marketing language, craft-focused
- Epic title is "Senior QA Engineer (Tech Art)" — never "Tech Art Specialist"
  (Specialist reads as a QA level at Epic)
