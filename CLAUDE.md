# Project Continuity: JovianFinch.com Portfolio

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
4. **Commit after any significant work block.** Don't let a session end with uncommitted
   decisions or half-documented states.

### What belongs in CLAUDE.md for this project

- Current state of the site (which pages exist, what's live)
- Pending work items with enough detail to resume without asking the user to re-explain
- Any content decisions (tone, framing, attribution) that were discussed and settled
- Technical conventions that must not be broken (paths, CSS architecture, fetch behavior)
- Context about Jovian that informs writing tone and content choices

### Decisions are the user's currency (standing rule, Oct 2026)

- **Never replace something the user wrote, or worked out closely with Claude, without a
  good reason and the user's explicit agreement.** Changing copy Claude wrote first is
  fine; replacing the user's hand-written or collaborated copy with new copy is not.
  "Build a new site" did not mean "rewrite the copy".
- A decision made once stands. Don't quietly reverse it later (for example, the resume
  source format, or content the user chose to keep).
- When a change touches the user's words or past decisions, propose it with the
  original quoted, and wait.
- `_source/version-audit-2026-10-06.md` records what was changed without asking, what
  was restored, and what is still open for the user's review.

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
| Static pages | `content/pages/*.njk`, `content/index.njk`, `content/skills.njk` | Skills page is 100% generated; never edit skill examples by hand. |
| Global data | `content/_data/site.yaml` (identity, nav, contact parts), `content/_data/skillsTaxonomy.yaml` (skill ids/names/summaries) | |
| Templates | `_includes/base.njk`, `_includes/project.njk`, `_includes/partials/` | |
| Pipeline code | `pipeline/`: skills-inversion, figures (auto-numbered plates), llms-txt, json-ld, contact | The custom showpiece; described on /how-i-work/. |
| Design system | `assets/css/style.css`: Drafting Table tokens (bone/ink/prussian/red-pencil), Fraunces + IBM Plex self-hosted in `assets/fonts/` | |
| JS | `assets/js/`: main (nav), hero-wave (WebGL vertex-shader hero, 2D fallback), reveal (contact) | |
| Resume source | `jovian-nordgren-resume.md` (repo root): the SINGLE source, hand-edited by the user, often from a phone. Parsed by `pipeline/resume-markdown.js` (via `content/_data/resume.js`) into the web resume, the print `resume/Resume.html` (phone injected, auto-prints with `?print`), and the served markdown (comment tags stripped). | **The markdown is the source because the user edits it from their phone. Never move the source to another format.** Print controls are comment tags: `<!-- print: page 2 starts here -->` between jobs, `<!-- print: hide -->` on a bullet. The parser fails the build with a line number on bad structure. Print layout: sheet 1 is two columns (experience 74%, sidebar 26% with Profile + Skills); sheet 2 full width with Education at the bottom. Verify the print is exactly 2 sheets after any resume edit. |
| Deploy | `.github/workflows/deploy.yml`: push to main → build (CONTACT_PHONE secret) → Pages | `.github/workflows/print-check.yml` runs separately on resume changes: it emails the user if the print resume exceeds two sheets but never blocks the deploy (user's choice). Checker: `pipeline/check-print-fit.mjs`. |
| Build | `npm ci && npx @11ty/eleventy` → `_site/` (gitignored) | Optional `.env` with CONTACT_PHONE locally. |

### Project front-matter contract

- `skills:` entries reference `skillsTaxonomy.yaml` ids; **a typo'd id fails the build**.
  The Skills page is generated from these. On the six original projects each entry
  carries the user's own `label`, `href`, `rank` (their hand-set order) and `detail`,
  restored verbatim from the hand-built site; keep them. New entries may use
  `highlight` + `anchor` instead. Non-project examples (the Claude Code entry) live in
  `skillsTaxonomy.yaml` under `extraExamples`.
- **User-written fields (restored Oct 2026, do not regenerate or rewrite):** `meta`
  (header meta row), `headerTags` (header tags; not `tags`, which Eleventy reserves for
  collections), `sidebar` (Tools / Skills / Role blocks), and the `card` block's
  `label`, `blurb`, `tags`, `alt`, `pending`. Projects without them (Earlier Work) fall
  back to generated versions.
- `anchor:` values must match `<h2 id="...">` headings in the body (headings are raw
  HTML in the markdown, e.g. `<h2 id="wing-shader" class="project-section">`).
- `order:` drives portfolio index order and prev/next pagination.
- Figures in body: `{% fig "src", "caption", "meta", true %}` (true = draft label),
  auto-numbered FIG. 01+ per page; the hero from front matter is always FIG. 00.
  `{% figblock %}...{% endfigblock %}` for pending/embed plates.

### Contact protection (implemented, do not regress)

- **Phone is NEVER in the repo in any form.** It lives in the `CONTACT_PHONE` Actions
  secret, is XOR+base64-encoded at build, and revealed client-side on click (site
  resume page + print resume). No secret → builds fine, phone row simply absent.
- **Email is click-to-reveal everywhere** (about, resume, print resume), using the same
  XOR+base64 payload as the phone. No address material appears in any served HTML.
- **No plus-tagged address is ever published in plaintext** (spammers strip tags and
  get the base address). The `+web` comment honeypot and the JSON-LD email field were
  removed deliberately; do not reintroduce them.
- **AI-agent channel:** `/llms.txt` publishes the `+ai` address base64-encoded with a
  decode instruction (a comprehension gate: LLMs decode it, regex harvesters can't).
- Planned upgrade: domain-alias forwarding (see the comment in `site.yaml`).

## Pages (all URLs unchanged from the legacy site)

Home `/` · About `/about/` · Resume `/resume/` · Portfolio `/portfolio/` ·
projects at `/portfolio/{alien-age,snuggles,grapple-star,lego-fortnite,destiny-2,relic,earlier-work}/` ·
How I Work `/how-i-work/` · Skills `/skills/` · print resume `/resume/Resume.html`

---

## Branch workflow

- Develop on `claude/new-portfolio-website-cqdm9`; user merges to main (often squash).
- **Merge to main = deploy** (Actions builds and publishes).
- After a squash merge, reset the working branch onto origin/main
  (`git checkout -B <branch> origin/main`). GitHub auto-deletes the remote branch
  on merge, so push recreates it.

---

## Pending work

1. **User to supply:** Jerry's Rig final animation video URL; 221B Baker Street image;
   verify Earlier Work figure captions (they're educated guesses from filenames);
   final replacements for Weebly-hosted draft images; Lego Fortnite captures
   (pending Epic clearance).
2. **Blend design variant** (blueprint media wells), archived in
   `_source/design-archive/`; can return as per-media front-matter flag if wanted.
3. Full plan: `_source/redesign-plan.md`. In-progress detail: `_source/working-memory.md`.

---

## Source files

| File | Purpose |
|------|---------|
| `_source/Miro/miro-content.md` | Miro board content, user-corrected source of truth. Do NOT re-extract from the images. |
| `_source/Miro/ima1–12.png` | Original Miro board screenshots |
| `_source/portfolio_brief.md` | Original project brief |
| `_source/redesign-plan.md` | 2026 redesign migration plan |
| `_source/design-archive/` | Design studies (three directions + blend mockup) |
| `_source/working-memory.md` | In-progress session scratchpad |

---

## About Jovian (useful context for writing)

- Senior Technical Artist and 3D generalist; QA engineering background is central
- **Current:** Riot Games (May 2026 – present), contract Senior Technical Artist via
  Innovative Employee Solutions on Teamfight Tactics during its move to UE5; built an
  agentic AI assistant framework, batch fix tools, and a known-bug database for TAs.
  On the resume only so far; NOT yet in the site's employer mentions (hero, About,
  Skills intro, site.yaml summary, OG card). Ask the user before adding it there.
- Bungie (2015–2019, QA → Test Engineer + 3D ambient-life side project), Epic Games
  (2023–2026, Senior QA Engineer (Tech Art) on Lego Fortnite), Indie Wizards →
  Left Turn Studios (2021–2023: Alien Age shipped 2021 under Indie Wizards, which
  incorporated as Left Turn Studios in 2022; then Snuggles, Grapple Star),
  DigiPen capstone (Relic, 2014–2015)
- AI tooling fluency is a feature, not hidden; /how-i-work/ describes the site's
  own pipeline as evidence
- Writing tone: direct, precise, no marketing language, craft-focused. Don't oversell
  (e.g. management or leadership claims)
- **Editorial calls are the user's.** When the user says they're "open to suggestions",
  that means discuss first: bring options with measured costs, don't pick and apply.
  This applies especially to cutting resume content or trading layout for fit.
- **Relevance is not age.** Items the user considers most relevant to current work:
  the Bungie workflow-guides bullet (core TA documentation work) and the DigiPen
  Animation Instructor bullet (shows teaching). The Riot entry is intentionally the
  longest: most current, most meaningful, most likely to be read.
- Some jargon is deliberate. "counteracting benchmark optimization" (Riot bullet) is
  intentional: recruiters skim past it, practitioners recognize it. Don't simplify
  the user's chosen technical phrasing without asking.
- **No em dashes, anywhere** (site, resume, code comments, docs). The user dislikes them;
  the site, resume, code, CLAUDE.md, and EDITING.md were swept in Oct 2026
  (historical notes under `_source/` were left as written). Rewrite with commas, colons, semicolons,
  parentheses, or a new sentence. Separator conventions: figure captions
  `FIG. 01: caption`, skill labels `Project / Highlight`, page titles `Page | Name`,
  eyebrows `Sheet A · biography`, date ranges use an en dash (`2014 – Present`)
- Don't list an engine as a "project" in a resume project line (UE5 belongs in skills,
  unless the work itself is about the engine, as in the Riot migration intro)
- Epic title is "Senior QA Engineer (Tech Art)", never "Tech Art Specialist"
  (Specialist reads as a QA level at Epic)
