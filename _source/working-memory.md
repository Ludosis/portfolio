# Working Memory — JovianFinch.com Portfolio

Current in-progress context. Update during active sessions; commit before ending.
For durable project state, see `CLAUDE.md`. For Miro source content, see `_source/Miro/miro-content.md`.

---

## Current status

Site is live at JovianFinch.com. HTTPS cert provisioning in progress (DNS check passed,
Let's Encrypt pending). Working branch: `claude/new-portfolio-website-cqdm9`.

All project pages have been expanded with content from the corrected Miro file.

---

## Just completed this session

- Expanded Grapple Star: Level Select UI section (Rowan Sherwin credit), dynamic reticle, skill tags
- Expanded Alien Age: Indie Wizards → Left Turn history, game jam origin, Tree Sizer/Rotator/Tinter
- Expanded Snuggles: URP rendering refactor, mech kitbash detail, Status FX shader, cinematic + Vimeo link
- Expanded Lego Fortnite: EUW animation range validator, playblast investigation, ReplayRun process
- Renamed resume file to jovian-nordgren-resume.md, removed phone number from public version
- Updated title to "Senior Technical Artist" across site and resume
- Added CLAUDE.md session hygiene section, working-memory.md established

---

## Next up: Skills page (agreed approach)

Skills front and center, backlink to project pages. Add "Skills" to main nav.

**Sections and their project links:**
- Shaders & Materials → Alien Age (water, fog, color-variation, world-pos seed), Snuggles (wing vertex, status FX), Relic (atmospheric)
- VFX → Alien Age, Grapple Star (ship trails, collectibles), Destiny 2 (beehive, sea monster), Snuggles
- Lighting & Rendering → Alien Age (URP overhaul), Relic, Grapple Star (DoF fix)
- Rigging & Animation → Snuggles (puppet rig, mech kitbash, scripted rebuild), Destiny 2 (owls, sea monster, reactive NPC), Jerry's Rig
- Tools & Pipeline → Alien Age (foliage tool, tree script), Snuggles (puppet rig connector, Maya compositing helper), Lego Fortnite (EUW range validator, asset audit, FX validation), Bungie (debug config tool)
- QA & Automation → Lego Fortnite (triage tool, FX framework, ReplayRun guidelines), Bungie (test engineering)
- Procedural Content → Alien Age (foliage placement, tree sizer), Grapple Star (procedural environment)
- UI → Grapple Star (level select screen, dynamic reticle)
- Scripting → C# (gameplay, VFX/shader control), Python (Maya scripts, EUW CSV), Blueprint + EUW, Claude Code

Nav addition needed: add "Skills" link to every page header and footer nav.
CSS: needs `.skills-page` section added to stylesheet.

---

## Also pending

### Earlier Work page (`/portfolio/earlier-work/index.html`)
- Jerry's Rig (2013–2014, DigiPen junior year): Sketchfab embeds, YouTube video
  Reference: https://jnordgren.weebly.com/jerrys-rig---animation-render.html
- 221B Baker Street interior: single image, prop modeling sample
- Add pagination link from Relic page (currently last in chain)

### Grapple Star Level Select video
Placeholder text in the page. User needs to provide the video URL.

### Portfolio index card for Grapple Star
Currently doesn't mention Level Select UI. May want to update card description.

### Resume PDF
PDF button in resume/index.html is commented out pending the file.
Claude Design prompt was drafted — user to generate PDF with phone number added back.

---

## Git workflow note

User works directly on main for quick changes (auto-deploys via GitHub Pages).
Before each work session, rebase working branch on main:
  GitHub Desktop → Branch → Rebase Current Branch → main
This avoids merge commit bounce. Force-push after rebase is safe (sole collaborators).
