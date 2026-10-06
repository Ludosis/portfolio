# Review list: decisions made without your input

Compiled Oct 2026 by comparing every page of the legacy site (commit `339d4e2`) with
the current site, plus what I know I decided in sessions. Already-settled items are
excluded: em dash rewrites, contact/email handling, Indie Wizards wording, the Epic
title, the reconciled resume wording, the Riot entry, the print layout, and the
markdown resume source (restored).

Each item is something I changed, removed, or wrote myself. Nothing here is broken;
these are judgment calls that were yours to make. Severity: **HIGH** = your own words
changed or removed, or prominent copy I invented; **MED** = invented captions, tags,
labels; **LOW** = cosmetic.

---

## Check before applying (things a Riot reviewer may see)

- **LinkedIn handle.** Your old About page linked `linkedin.com/in/Ludosis`; your
  resume and the current site use `linkedin.com/in/JovianFinch`. Confirm which is
  live. It's on the resume, the About page, and the site footer data.
- **HIGH: Skills page lost its "Claude Code" entry** (under Scripting). Your old text:
  "Automation triage tool built in one day; this portfolio site; context and memory
  management across sessions; framing problems clearly enough that implementation can
  be delegated; see How I Work". Very relevant for a Tools and Pipeline role.
- **HIGH: Home page hero line rewritten.** Yours: "Technical Artist and 3D generalist
  with a decade of AAA and indie game dev. Shaders, VFX, animation pipelines,
  tooling, wherever the project needs depth." Mine: "Shaders, rigs, and the tooling
  between art and engineering. Ten years across AAA and indie at Bungie, Epic Games,
  and Left Turn Studios." (Also reused in llms.txt.)
- **HIGH: How I Work, your "This site" paragraph replaced.** Yours described plain
  HTML/CSS/JS with no build step (no longer true after the rebuild), so it needed
  updating, but the new paragraph is entirely my wording. Sidebar "This site" box and
  "Tools used for this site" list were also rewritten.
- **Riot not yet in site-wide employer mentions** (hero, About, Skills intro, link
  preview card). Your call whether to add it before applying.

## Home page

- **HIGH:** About blurb rewritten. Dropped "in both Unity and Unreal Engine. Best
  suited for small teams with broad scope: shaders, VFX, ... any technical challenge
  the project surfaces." Added "including this site." Link "More about Jovian" became
  "More about me".
- **MED:** All 4 featured card blurbs rewritten. Lost, for example, "turning hours of
  manual triage into a scan" (triage card). Card title "Puppet Rig Retargeting System"
  shortened to "Puppet Rig Retargeting".
- **MED:** Card tags cut from 4 to 3 and renamed. Lost: Unity, Material Property
  Blocks, Performance, C#, VFX, API / MCP, Jira.
- **MED:** Invented labels: "Portfolio · est. 2014 · rev 3.0", "Selected work · 04 of
  12 plates" (the 12 is made up), heading "The unusual combination", and the hero
  animation's readouts and caption ("amplitude 24", "zero bone cost"). "Featured Work"
  became "Selected Work". The "See all projects" link was removed.
- **LOW:** Card images lost their alt text. Meta description rewritten. "© 2026"
  added to the footer.

## Portfolio index

- **HIGH:** All 6 card blurbs rewritten. Specifics lost include Alien Age's "Custom
  water, fog, and color-variation shaders; retopology and indexed texture atlases;
  procedural foliage placement tool", Snuggles' "Lead TA on a Unity action title", and
  Relic's specific award (now just "Award winner").
- **MED:** Card tags are now generated from the skills categories instead of your
  hand-picked tags. Lost: Shader Graph, HLSL, Material Property Blocks, Cinemachine,
  Unreal Engine 5, Claude Code, Maya, and others. Relic now shows only 2 tags.
- **MED:** Invented label "Index of plates · 07 projects"; cards say "Plate 0N".
- **LOW:** Date lines reformatted (e.g. "2023–2026" became "July 2023 – March 2026").

## Project pages

Body prose is unchanged apart from punctuation. The surrounding elements changed:

- **HIGH: Your hand-written "Skills" sidebar list is gone from every project page**,
  replaced by a generated "Key work" list. Lost items include "Texture atlas
  optimization", "Pipeline documentation" (Alien Age), "Rendering pipeline
  conversion", "Cinematic sequencing" (Snuggles), "QA systems design", "Root cause
  analysis", "LLM-assisted development", "Cross-team coordination" (Lego), "Character
  modeling", "Rigging & skinning" (Destiny), "Pipeline design", "Engine collaboration"
  (Relic).
- **HIGH: Destiny 2 sidebar lost your Bungie tenure.** Was "Bungie, Inc. / May 2015 –
  May 2019 / Test Engineer / 3D Generalist"; now "Bungie / 2017–2018 / 3D Generalist
  (embedded in QA)". The Lego sidebar heading "Role" became "Project".
- **MED:** Header tag rows replaced by category names. Lego lost all 9 of its tags
  (UE5, QA Systems Design, FX Validation, Asset Audit Tools, Claude Code, Python, API /
  MCP, Jira, Pipeline) and gained an invented "Live Service".
- **MED:** Every figure caption and its tools line ("Unity · URP", "Maya · full
  character pipeline") is my wording, written from the image alt text.
- **MED: Earlier Work page copy is mine**, including the claim "the generalist habit
  ... started with this project". Its figure captions are guesses from filenames.
- **LOW:** Draft labels now lowercase; alt text shortened; Relic "Team" became
  "Studio"; "Sole Technical Artist" became "Technical Artist (sole TA)".

## Skills page

- **HIGH:** The Claude Code entry is gone (see the top section).
- **HIGH:** Your Bungie entries were relabelled and rewritten, e.g. "Debug config tool
  for internal use; test engineering infrastructure on live service titles" became
  specific text pulled from the Destiny page.
- **MED:** Detail trimmed: Lego Tools lost "FX validation test suite distributed as
  team-specific guides"; Snuggles Rigging lost "that survived repeated model updates
  in seconds" and "controller aim script".
- **MED:** Example labels I invented where yours showed just the project name ("Water,
  Fog & Tile Shaders", "Beam & Lightning VFX", "All Visual Systems", ...), and some of
  yours renamed ("Depth-of-Field Fix" became "...Transparency Fix").
- **MED:** Examples are now ordered by project instead of your hand ordering.

## About page

- **MED:** Meta description lost "combining deep QA systems thinking, artistic
  training, and AI tooling fluency".
- LinkedIn handle: see the top section.

## Print resume (original design features)

- **MED:** Your "Tweaks" panel (Chronological / Reverse-chron order toggle for page 2)
  is removed. The fixed order matches your saved "reverse" choice.
- **MED:** Page-2 running header changed from "Technical Artist" to "Senior Technical
  Artist".

## Machine-facing copy (read by AI tools and link previews)

- **MED:** llms.txt is all my wording, including the site summary in `site.yaml`.
- **MED:** Structured data lists skills I chose: "Technical Art, Shader Development,
  VFX, Rigging and Animation, Game Development Pipelines, QA Automation, LLM-assisted
  Development".
- **MED: Link preview card image** repeats "est. 2014 · rev 3.0", uses my tagline
  "shaders · rigs · pipelines", and **still contains an em dash** after "FIG. 00". It's
  an image, so my text sweep missed it. Needs regenerating once you decide its copy.
- **LOW:** 404 page copy is mine. Every page's meta description was rewritten.
