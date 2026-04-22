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

### Resume.html — printable resume (NEEDS INTEGRATION)

`/resume/Resume.html` is a Claude Design-generated print-quality HTML resume.
**What it is**: Two 8.5×11in pages, self-contained CSS, same color palette and fonts as
the site (Lora + Source Sans 3, terracotta accent). Designed to print to PDF from browser.

**Current content state**: Largely in sync. Verified:
- Title: "Senior Technical Artist · 3D Generalist" ✓
- Experience order: Epic (2023–26), Left Turn, Bungie, DigiPen — reverse-chron ✓
- Contact: email, web, LinkedIn all current ✓
- Phone: line 425 shows `[hidden on web]` — intentional placeholder for web version
- Has JS toggle at bottom (lines ~695–713) for Bungie/Freelance order experimentation

**Phone number situation**: Resume.html is the web-public version — phone intentionally omitted.
To produce a PDF with phone number: open locally, edit line 425, print to PDF. Don't commit
the phone number to the repo.

**Integration plan (not yet done)**:
Option A (simplest): Uncomment the PDF button in `/resume/index.html` and point it at
`/resume/Resume.html` instead of a PDF file. Browser can print-to-PDF from there.
Option B: Move to `/resume/print/index.html` for cleaner URL, then link from resume page.

Leaning toward Option A — less structural change, still works. The button is currently
commented out at the bottom of the resume page's main content area.

**Sync strategy**: Resume.html is NOT auto-generated from the MD — it's manually maintained.
When `jovian-nordgren-resume.md` changes, Resume.html needs updating too.
Claude can do this: read the MD and update the corresponding sections in Resume.html.
The HTML structure is: `.masthead` (name/contact), `.profile` (summary), `.section > .job`
entries for each role.

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
CSS class structure: `.skill-discipline` > `.skill-discipline__title` + `.skill-discipline__summary`
+ `.skill-examples` > `.skill-example` > `.skill-example__link` > `.skill-example__project`
+ `.skill-example__detail`

Jump nav is sticky at `top: 64px` (below fixed site header).

---

## Key decisions made in earlier sessions (not to re-litigate)

- **Skills-first approach**: `/skills/index.html` is the hiring-manager entry point;
  project pages remain intact as narrative depth. This mirrors the Miro board structure.
- **Studio naming**: "Left Turn Studios" for Snuggles + Grapple Star;
  "Indie Wizards → Left Turn Studios" history noted in Alien Age intro.
- **Phone number**: Public resume MD and Resume.html (web version) omit phone.
  PDF with phone is produced manually from Resume.html by editing line 425 locally.
- **Grapple Star**: "demo" is fine for the project status label.
- **Earlier Work**: Agreed — separate `/portfolio/earlier-work/` page, not part of main portfolio index.
- **Nav order**: Portfolio > Skills > About > Resume > How I Work (Skills sits right after Portfolio)
- **Resume.html**: Keep as-is at `/resume/Resume.html`, link to it from the resume page.
  It is NOT a placeholder or artifact — it's a maintained print document.
- **Draft images**: `.draft-image` / `.draft-label` classes — real Weebly work samples, temporary.
  Don't remove or replace until user provides final assets.

---

## Git workflow note

User works directly on main for quick changes (auto-deploys via GitHub Pages).
Before each work session, rebase working branch on main:
  GitHub Desktop → Branch → Rebase Current Branch → main
This avoids merge commit bounce. Force-push after rebase is safe (sole collaborators).

Fetch main first: `git fetch origin main`
Then rebase: `git rebase origin/main`
