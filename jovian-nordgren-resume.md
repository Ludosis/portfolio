# Jovian Finch Nordgren
### Senior Technical Artist | 3D Generalist

JovianFinch.com | linkedin.com/in/JovianFinch

---

## Profile

Technical Artist and 3D generalist with a decade of experience in AAA and indie game development, in both Unity and Unreal Engine. Best suited for small teams with broad scope: shaders, VFX, animation pipelines, asset optimization, tooling, procedural content, and any technical challenge the project surfaces. Years of QA work on large productions built a habit of asking why a problem exists, not just fixing it, and building processes so it doesn't recur. Picks up new tools, techniques, and codebases fast; currently using Claude Code and LLM workflows for tooling and pipeline problems. Comfortable at the deep end of a codebase or in a creative review.

---

## Experience

### Senior Technical Artist | Riot Games | Remote
**May 2026 – Present**
*Teamfight Tactics*
*Contract via Innovative Employee Solutions*

Technical Artist on Teamfight Tactics during the game's move from Riot's in-house engine to Unreal Engine 5, fixing edge-case bugs left by the conversion import across the legacy and UE5 projects in parallel. Focus is on repeatable fixes, automating tedious manual conversion tasks, and better detection and review of hand fixes, resolving issues before content reaches QA and removing the downstream cost of testing, reporting, and triage.

- Engineered an agentic AI assistant framework to accelerate bug investigation and fixes for Tech Artists, built on context packs, skills, MCP connections to team domain knowledge, and a base rule set.
- Authored the framework's base rule set to address common LLM failures at the root, counteracting benchmark optimization for better-calibrated confidence and stronger context discovery; persistent context and carried-forward corrections let each user's workspace improve over time for them.
- Developed systemic batch fix tools for recurring issues in converted assets, using legacy engine data as the source for equivalent UE5 properties.
- Designed collaborative batch fixers that resolve procedural issues automatically and generate an interactive HTML guide for the rest, pinpointing each issue, proposing the specific fix, and completing the automatable steps, so unavoidable manual fixes skip the search and start at the solution.
- Built a database of known bug causes and fixes that serves as a library for the team's other AI triage and investigation tools; audited hand fixes on cosmetics shipped with the UE5 launch against it to rank automation opportunities for unreleased content.

### Senior QA Engineer (Tech Art) | Epic Games | Remote
**July 2023 – March 2026**
*Lego Fortnite*

Embedded across multiple Tech Art and content teams on Lego Fortnite, owning pipeline integrity and quality across FX, animation, content optimization, world/terrain, and procedural content. Served as animation domain liaison, coordinating test coverage, communicating risk, and keeping distributed QA teams in sync across a large-scale live project.

- Root-caused a critical anim review video exporter (playblast) failure; identified working mitigation and contributed to requirements for the in-house replacement.
- Identified root causes and solutions for multiple rare Switch-only rendering bugs, isolating platform-specific material and animation interactions through deep content investigation.
- Recognized a pattern in escaped defects tracing back to untested FX across platforms and scalability settings; developed test cases and distributed them as team-specific guides so each content team could fold FX validation into their own workflows, scaling coverage without adding centralized overhead.
- Built asset audit tools using Unreal Editor Utility Widgets and extended an existing C++ submit validator to enforce mesh LOD and triangle count standards at check-in.
- Built an automation triage tool with Claude Code in one day, integrating APIs and MCPs into an HTML report with cross-platform comparison, trend tracking, and Jira-linked failure notes.

<!-- print: page 2 starts here -->

### Technical Artist | Left Turn Studios | Seattle, WA / Remote
**October 2021 – January 2023**
*Alien Age (Steam, 2021) | Snuggles the Unicorn (canceled) | Grapple Star (demo)*

Revenue-share contributor on Alien Age before Left Turn Studios incorporated in January 2022. Lead Technical Artist across all three Unity projects, with a second TA joining later on Snuggles.

- Owned all shaders, VFX, lighting, and materials on Alien Age: custom water, volumetric fog, and world-position-seeded color variation shaders; full asset optimization including retopology, indexed textures, and reduced texture lookups.
- Collaborated with an engineer to build a procedural foliage placement tool running in-editor to avoid runtime cost; documented it for level designers to regenerate independently.
- Developed a vertex shader system for enemy wings on Snuggles, replacing a 32-bone-per-enemy rig with a shader-driven flap; used Material Property Blocks to randomize phase per instance so wings moved independently.
- Built a puppet rig system to retarget existing animations onto a redesigned player model, preserving the existing animation investment without recreating them; scripted the constraint reconnection to rebuild automatically after asset updates.
- Solved a Unity depth-of-field transparency issue on Grapple Star with a dual-camera Cinemachine composite: background rendered with post-processing, foreground VFX rendered sharp.

### Freelance & Independent Work | Seattle, WA
**May 2019 – September 2021**

Freelance creative work including graphic design and web projects. Used the period for self-directed technical study, including a crash course in Unity, real-time VFX, and shader development to stay current with industry tools.

### Test Engineer | Bungie, Inc. | Bellevue, WA
**May 2015 – May 2019**
*Destiny: The Taken King | Destiny 2 | D2: Curse of Osiris | D2: Forsaken*
*Test Engineer (Nov 2017 – May 2019) | QA Tester (Mar 2016 – Nov 2017) | Embedded Contract via Randstad USA (May 2015 – Mar 2016)*

- Mapped content workflows to identify systemic failure points, improving fix rates and overall product quality.
- Analyzed runtime memory in high-risk areas, helping steer the project into memory budget for launch.
- Built a debug config tool that triggered public event completion conditions on demand at any reward tier; the audio team adopted it independently for bucket testing that had been too time-consuming to run manually.
- Established and documented workflow guides to accelerate onboarding and help the team operate independently.

**3D Generalist: Destiny 2 Ambient Life Project (2017 – 2018)**

Modeled, rigged, and animated shipped ambient life characters: owls in the Farm social space and the sea monster on Titan. Also developed a reactive NPC with custom animations and VFX, and prototyped an interactive beehive obstacle in a demo environment.

### Technical Artist, Capstone | DigiPen Institute of Technology | Redmond, WA
**July 2014 – May 2015**
*Relic | 3D action adventure | DigiPen Zero Engine*

One of the most technically ambitious projects attempted in Zero Engine at the time. Owned all visual technical work and pushed the engine well past its documented limits.

- Delivered FX, lighting, atmospherics (faked via custom shaders since the engine had no atmosphere system), materials, rendering and asset pipelines, rigging, character model, and environment art placement.
- Identified engine constraints blocking the project's visual goals and worked directly with the chief engineer to understand and propose solutions rather than working around them; he implemented several engine-level changes as a result.
- Led a mid-production strike team to re-evaluate scope; helped transition to a collaborative department-leads structure that stabilized a large team struggling with unified direction.
- Won First Place for Best Spoken Dialog and Best Characters at the 2015 DigiPen Student Showcase; exhibited at PAX West 2015.
- Also served as Animation Instructor for DigiPen's Project FUN (Summer 2013 & 2014), teaching traditional and digital animation workflows to students at varied skill levels.

---

## Skills

**Real-Time & Rendering:** Shader authoring, VFX, lighting, rendering, optimization
**3D Art:** Modeling, sculpting, UVs, texturing, rigging, animation
**Tools & Pipeline:** Asset validation, pipeline tooling, workflow documentation, Perforce, Git
**Scripting:** Python, C#, HLSL, Lua
**AI & Automation:** Claude Code, agentic AI frameworks, LLM tooling, MCP / API integration
**Software:** Unreal Engine, Unity, Maya, 3ds Max, ZBrush, Substance 3D, Adobe Creative Suite

---

## Education

**BFA, Digital Art and Animation**
DigiPen Institute of Technology | Redmond, WA

**AA, General Studies | Certificate: Digital Illustration**
Everett Community College | Everett, WA
