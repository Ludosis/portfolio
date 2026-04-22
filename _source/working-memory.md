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

### Resume.html TODOs (not urgent, do in one pass)

1. **Remove JS switch artifact** — there's a JS toggle in Resume.html (~lines 695–713)
   for experimenting with Bungie/Freelance ordering. That was a Claude Design working
   artifact, not intentional production code. Delete it once ordering is finalized.

2. **Print button** — add a "Print" or "Save as PDF" button to `/resume/index.html` that
   links to `/resume/Resume.html` and auto-triggers `window.print()` on load. Means the
   user clicks one button and the browser print dialog opens directly. Button should
   be visually distinct from the main resume content (perhaps in the sidebar or above
   the fold), not buried.

3. **Fix 4-page print bleed** — Resume.html currently bleeds onto a 3rd page (last line)
   plus a blank 4th page, so it prints as 4 pages instead of 2. Need to audit the
   layout — likely a margin, padding, or line-height issue in the second `.page` div.
   Fix: open in browser, use print preview, tighten spacing until content fits clean.
   Watch: job descriptions, skills section spacing, and the footer/meta line on page 2.

4. **Phone number obfuscation** — see reasoning section below.

---

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

## Phone number obfuscation — reasoning and recommendation

**Goal**: Phone visible to hiring managers visiting the site, invisible to scrapers/bots.

**Why captcha is awkward here**: Requires server-side validation to be meaningful
(otherwise the JS to validate is visible too). GitHub Pages is static — no server.
Could use reCAPTCHA v3 (invisible) or hCaptcha but adds a Google/third-party dependency
and the UX friction on a professional portfolio feels off.

**Why phone-as-image is bad**: Can't be copied, bad accessibility, looks like a workaround.

**Why CSS-only tricks are weak**: Splitting a number across reversed spans etc. can stop
regex scrapers but modern crawlers render CSS. Not worth the implementation weirdness.

**Recommended approach: JS click-to-reveal with base64 encoding**

Store the phone number as a base64-encoded value in a `data-` attribute:
```html
<span class="phone-reveal" data-v="BASE64ENCODED">
  <button class="reveal-btn">Show phone</button>
</span>
```
Small inline script decodes on button click and replaces the button with the number.
~10 lines of JS, no external dependencies, works on GitHub Pages.

Why this works: harvesting bots are regex scrapers or simple DOM walkers — they look
for patterns like `(\d{3})[\s.-](\d{3})[\s.-](\d{4})` and don't simulate clicks.
A base64-encoded blob in a data attribute is invisible to them. Sophisticated bots
that execute JS AND simulate clicks exist but are rare and economically motivated
toward high-value targets, not personal portfolios.

**Where this applies**: The interactive resume at `/resume/index.html` (rendered from MD).
Resume.html (print version) keeps `[hidden on web]` — that file is for Jovian to print
locally with the phone filled in manually.

**Implementation note**: The resume MD (`jovian-nordgren-resume.md`) omits the phone
entirely. The click-to-reveal would be added as a UI element in `resume/index.html`
itself, not in the MD — hardcoded with the encoded value.

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
