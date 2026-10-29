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
- **Fix proportionately.** When asked to undo overreach, fix the egregious cases, not
  everything. Small wording tweaks that help readability are welcome. Never change the
  user's wording to make a checker or test pass; fix the checker instead.
- `_source/audits/version-audit-2026-10-06.md` records what was changed without asking, what
  was restored, and what is still open for the user's review. Its companion
  `..._copy-comparison.md` lists each restored item next to the rebuild version, so the
  user can bring back any rebuild wording they prefer.

---

## What this project is

A portfolio website for **Jovian Finch Nordgren**, Senior Technical Artist (Riot Games, Bungie, Epic
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
| Design system | `assets/css/style.css`: Drafting Table tokens (bone/ink/prussian/red-pencil), Newsreader (display; replaced Fraunces in Oct 2026, the user disliked its J) + IBM Plex self-hosted in `assets/fonts/` | |
| JS | `assets/js/`: main (nav), hero-foliage (2D-canvas sketch of the Alien Age foliage generator, Oct 2026; replaced the wing-flap wave), reveal (contact) | |
| Resume source | `jovian-nordgren-resume.md` (repo root): the SINGLE source, hand-edited by the user, often from a phone. Parsed by `pipeline/resume-markdown.js` (via `content/_data/resume.js`) into the web resume, the print `resume/Resume.html` (phone injected; a screen-only "Print with contact info" button reveals email + phone and opens the print dialog in one click; no auto-print), and the served markdown (comment tags stripped). | **The markdown is the source because the user edits it from their phone. Never move the source to another format.** Print controls are comment tags: `<!-- print: page 2 starts here -->` between jobs, `<!-- print: hide -->` on a bullet. The parser fails the build with a line number on bad structure. Print layout: sheet 1 is two columns (experience 74%, sidebar 26% with Profile + Skills); sheet 2 full width with Education at the bottom. Verify the print is exactly 2 sheets after any resume edit. **Print gotchas (Oct 2026):** print dialogs drop backgrounds by default, so any printed mark (bullets, rules) must be a border, never a background; the user reveals email + phone before printing, which makes the header taller, so measure with them revealed; never add bottom padding to a printed sheet (invisible, but it pushed sheet 1 onto an extra page); headless Chromium lays text out slightly shorter than the user's machine, so keep 0.2in+ of slack per sheet (the print check enforces this). |
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
- Figures in body: `{% fig "src", "caption", "meta", true %}` (the `true` draft flag no
  longer renders a label: placeholder wording was removed site-wide in Oct 2026),
  auto-numbered FIG. 01+ per page; the hero from front matter is always FIG. 00.
  **Media is self-hosted (Oct 2026):** files live in `assets/img/<project-slug>/`, never
  hotlinked. Animated clips are muted looping H.264 `.mp4` (the old Weebly GIFs,
  converted: about 1/20 the size); any `.mp4` src in a figure, hero, or card renders as
  `<video autoplay muted loop playsinline>` via `mediaTag` in `pipeline/figures.js` (the
  `media` filter in templates). Convert new GIFs the same way rather than committing
  them. Playwright's bundled Chromium can't play H.264, so check video in a real browser.
  Diagrams drawn in HTML (e.g. `pipeline/tft-fixers-diagram.html`) and the link-preview
  card render to PNG with `node pipeline/render-images.mjs`.
  `{% figblock %}...{% endfigblock %}` for embed plates. **No placeholder plates or
  "pending"/"tbd" text on the live site** (it reads as unfinished): add a plate only
  when the asset exists. Cards without an image show the project title.

### Contact protection (implemented, do not regress)

- **Phone is NEVER in the repo in any form.** It lives in the `CONTACT_PHONE` Actions
  secret, is XOR+base64-encoded at build, and revealed client-side on click (site
  resume page + print resume). No secret → builds fine, phone row simply absent.
- **Email is click-to-reveal everywhere** (about, resume, print resume), using the same
  XOR+base64 payload as the phone. No address material appears in any served HTML.
- **No plus-tagged address is ever published in plaintext** (spammers strip tags and
  get the base address). That includes repo files that aren't served, such as notes
  under `_source/`: the repo is public. Refer to addresses as "the +ai address" etc. The `+web` comment honeypot and the JSON-LD email field were
  removed deliberately; do not reintroduce them.
- **AI agents:** `/llms.txt` carries no address in any form (Oct 2026, user's call: the
  old base64 `+ai` "comprehension gate" read like a prompt injection). It tells agents to
  have their human click Show on /resume/ or /about/.
- Planned upgrade: domain-alias forwarding (see the comment in `site.yaml`).

## Pages (all URLs unchanged from the legacy site)

Home `/` · About `/about/` · Resume `/resume/` · Portfolio `/portfolio/` ·
projects at `/portfolio/{teamfight-tactics,alien-age,snuggles,grapple-star,lego-fortnite,destiny-2,relic,earlier-work}/` ·
How I Work `/how-i-work/` · Skills `/skills/` · print resume `/resume/Resume.html`

---

## Branch workflow

- Develop on `claude/new-portfolio-website-cqdm9`. Small iterative commits belong on
  the working branch; that noise never goes to main.
- **Main is always squash-merged, one change per piece of work** (e.g. "Resume
  iteration", "Add Riot page"), so main reads as a clean change list. The user either
  merges the PR themselves or asks Claude to open and merge it.
- **Squash PR titles and descriptions:** short and succinct, saying what the work was.
  Never a list of every commit. **Main and the repo are public:** no line-by-line
  details or private reasons (job applications, workplace details) in commit messages,
  PR text, or branch commits.
- **Pushing straight to main:** only when the user says so for that change. Claude can,
  but asks first and uses the strictest judgment (a small fix to something broken on
  the live site is the kind of case where it might be offered).
- **Merge to main = deploy** (Actions builds and publishes).
- After every squash merge, reset the working branch onto origin/main
  (`git checkout -B <branch> --no-track origin/main`, then `git push -u origin <branch>`, forcing if needed). Without `--no-track` the branch tracks main and a bare `git push` targets main.
  The user keeps a local copy of the branch to review work in GitHub Desktop; after a
  squash merge that copy goes stale (it still holds the pre-squash commits). Fix in
  GitHub Desktop, in this order: Fetch origin FIRST, then while ON the working branch use
  Branch > Delete (local only; Desktop deletes the current branch and switches to main),
  then select the branch again from the branch list. Without the
  fetch, Desktop recreates it from its stale remote ref. Never tell the user to
  "Pull origin" on a stale copy: it merges the old commits back. Never ask the user to merge a stale local copy.

---

## Pending work

1. **User to supply:** Jerry's Rig final animation video URL; 221B Baker Street image;
   verify Earlier Work figure captions (they're educated guesses from filenames);
   better replacements for the images copied from Weebly; Lego Fortnite captures
   (pending Epic clearance).
2. **Blend design variant** (blueprint media wells), archived in
   `_source/design-archive/`; can return as per-media front-matter flag if wanted.
3. **The live to-do list is `_source/audits/review-queue.md`** (user review items,
   things needing the user's files, later decisions, and Claude's ideas). Keep it
   current: when work lands, update or check off its entry in the same commit.
4. Original plan: `_source/redesign-plan.md`. In-progress detail: `_source/working-memory.md`.

---

## Source files

| File | Purpose |
|------|---------|
| `_source/Miro/miro-content.md` | Miro board content, user-corrected source of truth for wording. Do NOT re-extract from the images. **Caution (Oct 2026):** the board grouped items into project blocks and skill blocks; the text conversion flattened that, so which project an item belongs to is unreliable (e.g. the Maya compositing helper was a Jerry's Rig tool, not Alien Age). Check attribution with the user. A re-structured version is planned. |
| `_source/Miro/ima1–12.png` | Original Miro board screenshots |
| Old Weebly site (`jnordgren.weebly.com`, project pages) | **Written by the user: ground truth for project facts** (roles, who made what, how things worked). Pages were rebuilt from it in Oct 2026 after earlier generated copy had invented technical detail. It rate-limits scripted requests; retry with a browser user agent. Don't publish the old name that appears in image credits there. |
| `_source/portfolio_brief.md` | Original project brief |
| `_source/redesign-plan.md` | 2026 redesign migration plan |
| `_source/design-archive/` | Design studies (three directions + blend mockup) |
| `_source/working-memory.md` | In-progress session scratchpad |
| `_source/audits/` | Audits and reviews (not source files). Put new audit or review docs here, not in the `_source/` root. |
| `_source/audits/review-queue.md` | **Everything parked for the user to review at a computer.** Add to it instead of scattering review notes; the user checks items off. |
| `_source/drafts/` | Unpublished drafts for the user to rewrite (e.g. How I Work with AI). Never live. |

---

## About Jovian (useful context for writing)

- Senior Technical Artist and 3D generalist; QA engineering background is central
- **Current:** Riot Games (May 2026 – present), contract Senior Technical Artist via
  Innovative Employee Solutions on Teamfight Tactics during its move to UE5; built an
  agentic AI assistant framework, batch fix tools, and a known-bug database for TAs.
  In the site's employer mentions since Oct 2026 (About, Skills intro, site.yaml
  summary) and with its own project page, `/portfolio/teamfight-tactics/` (Oct 2026).
  Never publish internal tool names there (e.g. the timeline tool), people's names,
  ticket keys, or asset names. Numbers are fine (user's call).
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
- **No em dashes, anywhere** (site, resume, code comments, docs). Not a taste preference:
  em dashes are now widely read as a sign of AI-generated slop, and the user won't have
  their work perceived that way. It's a brown-M&Ms canary: if a reviewer spots one,
  they wonder what else was missed. So treat a stray em dash as a quality failure;
  the site, resume, code, CLAUDE.md, and EDITING.md were swept in Oct 2026
  (historical notes under `_source/` were left as written). Rewrite with commas, colons, semicolons,
  parentheses, or a new sentence. Separator conventions: figure captions
  `FIG. 01: caption`, skill labels `Project / Highlight`, page titles `Page | Name`,
  eyebrows `Sheet A · biography`, date ranges use an en dash (`2014 – Present`)
- Don't list an engine as a "project" in a resume project line (UE5 belongs in skills,
  unless the work itself is about the engine, as in the Riot migration intro)
- Epic title is "Senior QA Engineer (Tech Art)", never "Tech Art Specialist"
  (Specialist reads as a QA level at Epic)
