# Working Memory — JovianFinch.com Portfolio

Current in-progress context. Update during active sessions; commit before ending.
For durable project state, see `CLAUDE.md`. For Miro source content, see `_source/Miro/miro-content.md`.

---

## Current status

Site is live at JovianFinch.com. HTTPS cert provisioned and working.
Working branch: `claude/new-portfolio-website-cqdm9`.

Skills page is complete. All project pages fully expanded. All nav updated.

---

## Just completed this session

- Built `/skills/index.html` — 9 skill discipline sections with jump nav and project backlinks
- Added "Skills" to header and footer nav on all 11 existing pages
- Added Grapple Star Level Select video link: https://vimeo.com/827111068
- Added skills page CSS to `/css/style.css` (section 12)
- Committed and pushed all work

---

## Pending work

### Earlier Work page (`/portfolio/earlier-work/index.html`)
- Jerry's Rig (2013–2014, DigiPen junior year): Sketchfab embeds, YouTube video
  Reference: https://jnordgren.weebly.com/jerrys-rig---animation-render.html
  Tools: Maya, Photoshop, abAutoRig, 3D-Coat, Mental Ray
  Full production scope: story, storyboard, character concept/model/texture/rig/animation, environment
- 221B Baker Street interior: single image, prop modeling sample
- Add pagination link from Relic page (currently last in chain)
- Add Earlier Work card to `/portfolio/index.html`

### Portfolio index card for Grapple Star
Currently doesn't mention Level Select UI. May want to update card description.

### Resume PDF
PDF button in resume/index.html is commented out pending the file.
Claude Design prompt was drafted — user to generate PDF with phone number added back.

### Lego Fortnite images
Text-only draft areas, pending NDA/asset clearance from Epic.

### Miro content review
`_source/Miro/miro-content.md` was user-corrected and is source of truth.
Image 8 (Tools & Pipeline) had the most OCR errors in original extraction.
DO NOT re-extract from images — use the corrected file only.

---

## Skills page decisions (for reference)

Sections in order: Shaders & Materials, VFX, Lighting & Rendering, Rigging & Animation,
Tools & Pipeline, QA & Automation, Procedural Content, UI, Scripting.

Each skill-example card links to the specific project page (or anchor within it).
CSS class structure: `.skill-discipline` > `.skill-discipline__title` + `.skill-discipline__summary` + `.skill-examples` > `.skill-example` > `.skill-example__link` > `.skill-example__project` + `.skill-example__detail`

Jump nav is sticky at `top: 64px` (below fixed site header).

---

## Git workflow note

User works directly on main for quick changes (auto-deploys via GitHub Pages).
Before each work session, rebase working branch on main:
  GitHub Desktop → Branch → Rebase Current Branch → main
This avoids merge commit bounce. Force-push after rebase is safe (sole collaborators).

Fetch main first: `git fetch origin main`
Then rebase: `git rebase origin/main`
