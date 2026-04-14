# Portfolio Site — Claude Code Project Brief
## For: Jovian Finch Nordgren | JovianFinch.com

---

## Who You're Building For

Jovian is a Technical Artist and 3D generalist with a decade of experience across AAA and indie game development (Bungie, Epic Games, Left Turn Studios). The work spans shader authoring, VFX, animation pipelines, asset optimization, tooling, and procedural content. The defining characteristic of this work is the intersection of engineering precision and artistic craft — not one or the other.

The resume is attached as `jnordgren_resume.md` and is the primary source of truth for content, dates, titles, and project descriptions. Treat it as canonical.

---

## Goals

1. Replace an outdated Weebly portfolio (jnordgren.weebly.com) with a custom site hosted on GitHub Pages at JovianFinch.com
2. Present Jovian's work in a way that signals intentional, skilled AI collaboration — not AI-generated content. The site being built with Claude Code should be a feature, not hidden. The difference between "wow, they used AI thoughtfully" and "ew, AI slop" is specificity, craft, and clear human direction.
3. Make the site easily updatable via Claude Code without requiring a build step or framework expertise
4. Structure content so it's readable by both humans and AI screening tools (clean semantic HTML, structured markdown-compatible content, descriptive alt text, clear metadata)

---

## Tech Stack

- **Plain HTML, CSS, JavaScript** — no frameworks, no build step, no dependencies
- **GitHub Pages** for hosting — the repo itself is part of the portfolio
- **JovianFinch.com** as the domain (currently redirects to Weebly — DNS update comes later)
- Claude Code will be doing all development; keep the codebase clean and well-commented so Jovian can make manual edits without needing to re-engage Claude Code for every small change

---

## Design Direction

Warm, craft-oriented, and precise. This is not a dark hacker portfolio or a minimalist white tech portfolio. Think: a craftsperson's workshop that also happens to run on code. 

Reference points to hold in mind:
- Natural warmth (earth tones, craft textures as accents, not garish)
- Technical precision in layout and typography (clean grid, readable hierarchy)
- Let the visual work breathe — screenshots, gifs, and video captures will be the primary visual content
- Nothing should look template-generated. Every design decision should feel like someone made a choice.

Typography: one serif or humanist sans for headings (something with personality), one clean sans for body. No system font stacks that look like defaults.

Color: warm neutrals as base, one accent color with some saturation. Avoid the typical dev portfolio palette (pure black background, neon accent).

---

## Site Structure (MVP)

### Pages

**`/` — Home**
- Name, title (Technical Artist), one-line summary drawn from the resume profile
- Navigation to all other pages
- Featured work: 3–4 project cards linking to portfolio entries (choose the strongest technical stories: the wing vertex shader system, the puppet rig retargeting, the depth-of-field dual-camera fix, and the Claude Code triage tool)
- Brief "about" section pulling from the resume profile — keep it short, link to full About page

**`/about`**
- Expanded version of the resume profile
- The "unusual combination" framing: Tech Artist with deep QA background, artistic training, and AI tooling fluency
- Link to resume (the resume.md or a styled HTML version)
- Contact info

**`/portfolio`**
- Project index with cards/thumbnails
- Each card: project name, studio, brief description, key skills/tools used
- For MVP: placeholder cards with descriptions drawn from the resume for projects without full writeups yet. Mark these clearly as "full writeup coming" if needed — honest placeholders are better than fake content

**Individual project pages** (one per project, linked from portfolio index):
Each project page should have:
- Project name, studio, dates, role
- Description (from resume bullets, expanded slightly)
- Technical breakdown: what the problem was, what the solution was, why it mattered
- Visuals: placeholder image slots clearly marked for assets to be dropped in later
- Tools/skills used (as tags or a clean list)

Projects to stub out for MVP (descriptions from resume):
1. **Wing Vertex Shader System** (Snuggles the Unicorn / Left Turn Studios)
2. **Puppet Rig Retargeting System** (Snuggles the Unicorn / Left Turn Studios)
3. **Depth-of-Field Transparency Fix** (Grapple Star / Left Turn Studios)
4. **FX Coverage Framework** (Lego Fortnite / Epic Games)
5. **Automation Triage Tool** (Lego Fortnite / Epic Games) — this one is also part of the AI collaboration showcase
6. **Alien Age — Full Visual Build** (Alien Age / Left Turn Studios / Indie Wizards)
7. **Destiny 2 Ambient Life** (Bungie) — owl, sea monster, reactive NPC
8. **Relic — Engine Limits and Visual Systems** (DigiPen) — placeholder, assets to come

**`/how-i-work`** (not `/ai-philosophy` — that's too manifesto-y)
- Explain Jovian's approach to AI-assisted development: intentional collaboration, not generation
- Specific description of the Claude Code collaboration framework: context/memory management across sessions, the orientation protocols, the unfocus/ponder/lessons structure — without jargon, in plain language
- This page is itself a portfolio piece. It should demonstrate the thinking, not just describe it.
- Reference the resume writing skill document as an example of the framework in action (it exists as a file)
- Small footer note on every page: "Built with Claude Code" — links to this page

**`/resume`**
- Clean HTML rendering of the resume content
- Downloadable PDF link (placeholder for now)
- Keep it styled consistently with the site

---

## Content Principles

- **No lorem ipsum.** Every placeholder should be a real description, even if brief, drawn from the resume. If a project page isn't ready, use a one-paragraph description and mark visuals as "coming soon."
- **No generic statements.** Every piece of copy should be specific to Jovian's actual work. If you find yourself writing something that could appear on any TA's portfolio, rewrite it.
- **No AI tells.** No em dashes as clause connectors, no "leveraging," no "proven track record," no robotic parallel structure throughout. Write the way someone would describe their work to a colleague.
- **Specificity over completeness.** A tight, specific description of two projects is better than thin coverage of eight. For MVP, depth on the featured projects matters more than breadth.

---

## What Success Looks Like for MVP

A recruiter or hiring manager who opens JovianFinch.com should:
1. Immediately understand what Jovian does and what makes the profile distinctive
2. Be able to navigate to a project and read a clear technical story within 30 seconds
3. Find the resume without hunting for it
4. Leave with the impression that this person is both technically sharp and has genuine craft sensibility — and that they use AI as a skilled collaborator, not a shortcut

An AI screening tool that parses the site should:
1. Extract the correct skills, tools, and project titles from clean semantic markup
2. Find clear role descriptions and dates that match the resume
3. Index the "how I work" content as evidence of AI tooling fluency

---

## Files Available

- `jnordgren_resume.md` — canonical source for all content
- Visual assets will be provided as local files for Claude Code to reference
- The existing Weebly site (jnordgren.weebly.com) has project screenshots and gifs that can be referenced for content context — do not copy its design

---

## Working Notes for Claude Code

This project will be developed iteratively. Start with structure and navigation, then fill content, then refine design. Don't try to finish everything in one session.

When making design decisions, explain your reasoning briefly. Jovian has HTML/CSS/JS familiarity and will want to understand and be able to modify the output — not just receive it.

Flag any content gaps clearly (missing images, unwritten project descriptions, etc.) rather than filling them with placeholder text that obscures what's still needed.

The goal is a site that looks like a craftsperson made it with good tools — not a site that looks like a tool made it without a craftsperson.
