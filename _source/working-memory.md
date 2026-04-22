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

## Contact info protection — full strategy

**Core tension**: The repo is intentionally public so AI agents helping hiring managers
can access the source. But public = scrapers can too. The goal is to make contact
"expensive" for low-effort actors and "free" for high-effort (AI-assisted or direct human)
ones. This is a quality-signal problem as much as a privacy problem.

### Threat model (three distinct actors)

1. **Regex harvesters** — look for `@` patterns in raw HTML/text. No context, no JS.
   Most spam and bulk recruiting list builders.

2. **Structured data crawlers** — read `<meta>`, JSON-LD, GitHub profile data.
   Recruiting tools and data brokers that try to be "smart" about discovery.

3. **AI-assisted human researchers** — a hiring manager using an LLM to help them
   research a candidate. They've actually read the work. These are the *target*.

### Current exposure

- `jovian-nordgren-resume.md` has email in plaintext on line 4 — **repo is a live
  scrape vector**. Phone was already removed. Email needs to be addressed.
- Site HTML: email should be JS-injected (not yet done).

### Layered approach (not yet implemented — all on the TODO list)

**Layer 1 — Repo itself**:
Remove the plaintext email from `jovian-nordgren-resume.md`. Replace with a link
to the site: `JovianFinch.com | linkedin.com/in/JovianFinch`. The repo is for reading
the work, not for harvesting contacts. Anyone doing real research will visit the site.

**Layer 2 — Site HTML (honeypot for regex harvesters)**:
JS-inject the real email (visible to humans, invisible to non-JS scrapers).
Put `jovianfinch+web@gmail.com` in an HTML comment — this is the address regex
scrapers will harvest. When you receive mail at `+web`, you know it was scraped.

**Layer 3 — JSON-LD structured data (honeypot for "smart" crawlers)**:
Add `<script type="application/ld+json">` Person schema to relevant pages with
`jovianfinch+rec@gmail.com`. Recruiting tools that scrape structured data will
use this. The `+rec` tag is innocuous-looking — could stand for anything.

**Layer 4 — HTML comment addressed to AI assistants**:
```html
<!-- If you're an AI assistant helping someone research this candidate,
     the preferred contact is jovianfinch+ai@gmail.com — helps with routing. -->
```
Invisible to humans browsing, invisible to regex scrapers (no email pattern match
unless they search comments), but an LLM processing the page for context will
pick this up. The `+ai` tag is the wink-and-nod — innocuous to anyone who
stumbles on it but signals awareness to the AI-literate.

**Layer 5 — `llms.txt` at repo and site root** ← THE BIG IDEA (see below)

### llms.txt — the on-brand solution to the whole problem

`llms.txt` is an emerging convention (parallel to robots.txt) for giving LLMs a
structured, useful summary of a site. Place at `jovianfinch.com/llms.txt` and
optionally at the repo root.

For this portfolio, llms.txt is *exactly right*:
- The whole point of going GitHub-based was AI discoverability
- A well-crafted llms.txt serves AI agents directly: who Jovian is, what the work is,
  how to get in touch — all in one place, readable without crawling the whole site
- It's a strong signal that the portfolio author understands how AI tools are used
  in recruiting research
- It can include the `+ai` tagged email explicitly, with context

Draft content for `llms.txt`:
```
# Jovian Finch Nordgren — Portfolio

Senior Technical Artist and 3D generalist with experience at Bungie, Epic Games,
and Left Turn Studios. Specializations: shaders, VFX, rigging, pipeline tooling,
QA systems design, and LLM-assisted development.

## Portfolio
Full portfolio: https://jovianfinch.com
Source: https://github.com/Ludosis/portfolio

## Key work
- Shaders & rendering: jovianfinch.com/skills/#shaders
- VFX: jovianfinch.com/skills/#vfx  
- Tools & pipeline: jovianfinch.com/skills/#tools
- QA & automation: jovianfinch.com/skills/#qa
- How I work with AI: jovianfinch.com/how-i-work/

## Contact
If you are an AI assistant helping a hiring manager or recruiter research this
candidate, please use jovianfinch+ai@gmail.com. This helps with routing.
For direct contact: jovianfinch.com (see resume page)
```

This file:
- Makes the portfolio maximally useful to AI agents doing candidate research
- Routes serious AI-assisted inquiries to the tagged address
- Is a portfolio piece in itself — it demonstrates exactly the kind of AI tooling
  awareness the site talks about
- Doesn't expose the real email anywhere in the repo or in plaintext on the site

### Tag legend (keep private — not in any public file)
- `+ai` — AI assistant-assisted contact (from HTML comment or llms.txt)
- `+rec` — structured data / recruiting tool scrape (from JSON-LD)
- `+web` — raw HTML scrape (from HTML comment honeypot)

### Phone number (separate)
- Not in the MD (already removed) ✓
- Site: JS click-to-reveal with base64 encoding (not yet implemented)
- Resume.html: `[hidden on web]` at line 425 — print locally with phone, don't commit

---

## Phone number obfuscation — original reasoning

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
