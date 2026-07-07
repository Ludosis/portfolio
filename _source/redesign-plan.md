# 2026 Redesign — Migration Plan

Finalized July 2026. Decisions behind this plan: `working-memory.md` § "2026 Redesign".
Mockups: `design-archive/`. Design direction: **pure Drafting Table** (blend archived
as a possible later tweak — the "blueprint well" treatment can be reintroduced per-media
via a front-matter flag without rework).

---

## Goals

1. Content-as-data architecture: Eleventy chassis + custom pipeline code
2. Drafting Table visual identity, replacing the current Anthropic-default palette
3. WebGL shader hero (wing-flap sine displacement) in first pass
4. AI-discoverability layer generated at build: llms.txt, JSON-LD, sitemap
5. Contact protection: phone never in the repo, email routed via tagged addresses
6. URL structure unchanged — no broken links, no redirects
7. Site stays hand-editable in spirit: content is markdown, edits on GitHub web
   trigger rebuild automatically

---

## Target repo layout

```
portfolio/
├── content/
│   ├── projects/               # one .md per project — THE source of truth
│   │   ├── alien-age.md
│   │   ├── snuggles.md
│   │   ├── grapple-star.md
│   │   ├── lego-fortnite.md
│   │   ├── destiny-2.md
│   │   ├── relic.md
│   │   └── earlier-work.md     # built in new model (never existed in old site)
│   ├── pages/
│   │   ├── about.md
│   │   └── how-i-work.md
│   ├── skills.yaml             # skill taxonomy: id, name, summary, nav order
│   ├── site.yaml               # name, title, nav, footer, contact routing config
│   └── resume.md               # current jovian-nordgren-resume.md moves here
├── _includes/                  # Nunjucks layouts + partials (nav, footer, figure, card)
├── pipeline/                   # custom build code — the showpiece
│   ├── skills-inversion.js     # projects[].skills → skills page data
│   ├── llms-txt.js             # generates /llms.txt from site + project data
│   ├── json-ld.js              # Person/ProfilePage schema per page
│   ├── figures.js              # auto-numbering FIG. shortcode (per-page counter)
│   └── contact.js              # build-time contact injection (see § Contact)
├── assets/
│   ├── css/                    # new design system (tokens → components)
│   ├── js/                     # nav toggle, reveal widget, hero shader
│   ├── fonts/                  # self-hosted woff2 (see § Fonts)
│   └── img/
├── eleventy.config.js
├── .github/workflows/deploy.yml
├── jovian-nordgren-resume.md   # KEPT at root during transition (external consumers)
├── CNAME
└── _site/                      # build output — gitignored, never committed
```

## Project front-matter schema

```yaml
title: Snuggles the Unicorn
slug: snuggles                  # → /portfolio/snuggles/ (unchanged URL)
studio: Left Turn Studios
role: Lead Technical Artist
dates: 2021–2023 (canceled)
engine: Unity
order: 2                        # portfolio index + pagination order
card:
  blurb: One-sentence card description for the portfolio index.
  image: wing-demo.gif          # draft images keep Weebly URLs for now
skills:                         # keys into skills.yaml — DRIVES THE SKILLS PAGE
  - id: shaders
    highlight: Wing Vertex Shader System
    anchor: wing-shader         # /portfolio/snuggles/#wing-shader
    detail: >
      32 bones per enemy replaced with a GPU sine-wave vertex shader...
  - id: rigging
    highlight: Puppet Rig Retargeting
    anchor: puppet-rig
    detail: ...
media:
  - src: https://jnordgren.weebly.com/uploads/.../wing-demo_orig.gif
    caption: shader-driven wing flap, independent per instance
    draft: true                 # renders the "Draft — final asset TBD" label
videos:
  - url: https://vimeo.com/827089176
    label: Watch the cinematic sequence on Vimeo
---
Body markdown — the narrative sections, with {% fig %} shortcodes for plates.
```

The **skills page is never written by hand again**: `skills-inversion.js` walks all
projects, groups `skills[]` entries by taxonomy id, and emits the skill-discipline
sections with backlinks. Adding a skill entry to a project front matter automatically
updates the skills page, the project's tag list, and llms.txt.

---

## Contact protection (supersedes the earlier base64-in-repo idea)

**Requirement sharpened by user**: the phone number must not exist in the repo at
all — base64 is trivially reversible by anyone browsing GitHub source.

**Mechanism: build-time secret injection.**

1. Phone stored as a **GitHub Actions repository secret** (`CONTACT_PHONE`).
   It exists nowhere in git — not encoded, not encrypted, simply absent.
2. At build, `pipeline/contact.js` reads `process.env.CONTACT_PHONE`, encodes it
   (XOR with a build-generated key + base64 — defeats pattern-matching and casual
   base64 decoding), and emits it as a `data-` attribute with a click-to-reveal
   button on the resume page and print-resume page.
3. The deployed site (Pages artifact, not a git commit) contains only the encoded
   blob. Regex scrapers see nothing; a human clicks "Show phone" and the inline
   script decodes it. Once revealed it persists into the print flow, so an
   employer can print the resume WITH the phone number.
4. Local builds: `.env` (gitignored) can hold the phone for testing; if the env
   var is absent the build emits the button-less "[contact via email]" fallback —
   builds never fail on a missing secret.

**Why this is better than the old plan**: the old plan kept the phone out of the
repo by keeping it out of the *site* entirely (manual PDF editing). This puts the
phone ON the deployed site behind a reveal, with the repo still clean. The print
resume workflow changes from "edit line 425 locally, print, don't commit" to
"click reveal, print" — no manual editing, nothing to accidentally commit.

**Email routing** (unchanged from prior session decisions, now build-generated):
- Real address: JS-injected on the rendered pages (invisible to non-JS scrapers)
- `+web` tagged address in an HTML comment (regex-scraper honeypot)
- `+rec` tagged address in JSON-LD Person schema (structured-data consumers)
- `+ai` tagged address in llms.txt + an HTML comment addressed to AI assistants
- All four generated by the pipeline from `site.yaml` config — the tag legend
  stays out of public files (it lives in working-memory.md only)

---

## Design system — Drafting Table

**Tokens** (CSS custom properties, one file):
- Paper: bone `#F2EDE0`, card paper `#F6F2E7`
- Ink: `#211E18`; secondary `#4A443A`; muted `#6B6353`; hairline `#CDC4B0`
- Accents: prussian `#29506D` (links, active nav, tags, rules),
  red pencil `#A6402A` (kickers, FIG labels, crop marks — annotation only, never body)
- Blueprint well `#10161B` reserved — unused in pure Drafting Table, available if
  the blend treatment is revisited (per-media `presentation: well` flag)

**Type**: Fraunces (display serif) · IBM Plex Sans (body) · IBM Plex Mono
(annotations, captions, nav, tags). **Self-hosted woff2** in `/assets/fonts/` —
no Google Fonts dependency (faster, no third-party calls, on-brand for a
no-dependencies site). Both families are OFL-licensed; subsetting via fontsource
packages at build setup time.

**Signature components**:
- **Plate figure**: bordered figure with auto-numbered mono caption
  (`FIG. 03 — dof-after.png · dual-camera composite`). Numbering per page via
  the `figures.js` shortcode — impossible to misnumber.
- **Section head**: serif heading + mono eyebrow + measurement-tick ruler
- **Card**: paper panel, ink border, red-pencil crop marks at two corners
- **Nav**: mono small-caps links, prussian active state, ink baseline rule
- **Hero grid**: faint prussian graph-paper grid on the hero band only

**WebGL hero**: a ribbon/plane with vertex sine displacement — the actual wing-flap
math from the Snuggles story, running as a real vertex shader (three.js is overkill;
raw WebGL ~150 lines, or regl if we want brevity). Fallbacks: 2D canvas (the mockup
sketch) → static SVG → nothing, and `prefers-reduced-motion` renders a single frame.
HUD caption: `wing_flap.vert · verts N · draws 1 · phase: per-instance`.

---

## Build & deploy

- **GitHub Action** on push to `main`: checkout → npm ci → eleventy build
  (secrets injected) → deploy via `actions/deploy-pages` (Pages source switches
  from "branch" to "GitHub Actions" — one-time settings change at cutover).
- Development stays on `claude/new-portfolio-website-cqdm9`; user merges to main
  as before. Site rebuilds in ~1 minute on any merge, including content edits
  made directly on GitHub web.
- Rollback path: switch Pages source back to branch and the old static HTML
  (still in git history at the pre-cutover commit) redeploys.

---

## Phases

**Phase 1 — Scaffold + design system** (one session)
Eleventy config, pipeline stubs, tokens/components CSS, self-hosted fonts,
base layout (nav/footer), home page + ONE project (Snuggles) ported.
Local verification: `npx @11ty/eleventy --serve`, URL parity for ported pages.

**Phase 2 — Content port** (one session)
All projects into front-matter model, about/how-i-work/portfolio-index/resume
pages, skills taxonomy + inversion generating the skills page, **Earlier Work
page built new** (Jerry's Rig + 221B Baker Street — pending item lands here).
Verification: every current URL resolves, generated skills page content-matches
the hand-built one.

**Phase 3 — Pipeline outputs + contact layer** (one session)
llms.txt, JSON-LD, sitemap.xml, robots.txt generators; contact.js with secret
injection + reveal widget; email honeypot layers; remove plaintext email from
resume source. User action required: add `CONTACT_PHONE` repo secret.

**Phase 4 — Hero + polish** (one session)
WebGL wing-flap hero with fallback chain, responsive pass, accessibility pass
(focus states, contrast check on prussian/red-pencil over bone), print check.

**Phase 5 — Cutover**
Deploy workflow, merge to main, flip Pages source to Actions, verify CNAME +
HTTPS + all URLs live, Lighthouse pass. Old site retrievable from git history.

**Phase 6 — Later** (not blocking cutover)
Resume unification: single structured source → web resume + print resume
(replacing manually-synced Resume.html) → phone via reveal on both. Blend
"well" treatment as per-media option if the user wants it after living with
pure Drafting Table.

---

## Content-preservation rules

- All existing prose ports verbatim — this is a re-skin/re-architecture, not a rewrite
- `jovian-nordgren-resume.md` stays at repo root until Phase 6 (runtime-fetch
  consumers + it's linked as the canonical source); Phase 2 renders resume at
  build instead of client-side fetch, but the file remains
- Draft images keep Weebly URLs + draft labels until final assets exist
- Footer keeps: Built with Claude Code — how I work
- URL map is 1:1 with the table in CLAUDE.md — zero changes

## Verification checklist (run at each phase)

1. `npx @11ty/eleventy` builds clean, no warnings
2. Local serve: click through every page, check console for 404s
3. URL parity: every path in CLAUDE.md's page table returns 200
4. JS disabled: all content readable (reveal button degrades to email-only line)
5. Print preview on resume pages
6. Schema validator on JSON-LD; fetch /llms.txt
7. Mobile viewport: nav toggle, card stacking, hero canvas sizing
8. `prefers-reduced-motion`: hero renders static frame
