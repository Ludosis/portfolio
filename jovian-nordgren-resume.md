# Jovian Finch Nordgren
### Senior Technical Artist | 3D Generalist

JovianFinch.com | linkedin.com/in/JovianFinch

---

## Profile

Technical Artist and 3D generalist with a decade in AAA and indie games across Tech Art and QA Engineering, in Unity and Unreal Engine. Success in both comes from the same habit: asking why a problem exists, then solving it at the root instead of patching it. Works best in a broad role on a small team: shaders, VFX, animation pipelines, asset optimization, tooling, and procedural content. Most driven by helping others do their best work. Approaches tools as an artist first: knows the workflows hands-on, is quick to take on new skills, tools, and codebases, and uses agentic coding to support good design and usability, not replace it.

---

## Experience

### Senior Technical Artist | Riot Games | Remote
**May 2026 – Present**
*Teamfight Tactics*
*Contract via Innovative Employee Solutions*

Technical Artist on Teamfight Tactics during its move from Riot's in-house engine to Unreal Engine 5, patching conversion import issues and mitigating architectural differences between engines. Focus is on repeatable fixes: automating tedious manual conversion work so artist time goes to the tasks that need an artist's eye, and catching issues before content reaches QA, removing the downstream cost of testing, reporting, triage, and investigation.

- Built Unreal Python batch fixers that restore properties the import dropped (such as emote audio) from legacy engine data, run from the editor's right-click menu and safe to rerun without overwriting artists' hand-set values.
- Designed guided fixers for VFX and materials: AI reasoning on human-authored criteria makes clear-cut fixes the way an artist would, and the rest go to an interactive guide listing each issue and proposed fix, so manual fixes skip the search and start at the solution.
- Dug into every layer of the game's timeline-based animation state system, from gameplay triggers through animation, VFX, and audio clips, to fix conversion bugs inside it; built right-click reimport helpers for assets that imported incorrectly.
- Developed an agentic AI framework and starter kit that helps artists and Tech Artists bring agentic workflows into their work: context packs, skills, and MCP connectors let it find what it needs from a plain-language question, and base rules fix common LLM failures at the root, counteracting benchmark optimization for more reliable answers; carried-forward corrections let each user's workspace improve.
- Built a Python/SQLite bug patterns system: a shared library that people and AI tools match new tickets against to reach the probable fix fast, and an audit of past bugs, with a browsable dashboard, that turns recurring patterns into importer fixes, batch fixers, or other systemic fixes before unreleased content ships.

### Senior QA Engineer (Tech Art) | Epic Games | Remote
**July 2023 – March 2026**
*Lego Fortnite*

Embedded across multiple Tech Art and content teams on Lego Fortnite, owning pipeline integrity and quality across FX, animation, content optimization, world/terrain, and procedural content. Served as animation domain liaison, mapping the full pipeline from DCC to in-engine setup to running game and every handoff between, coordinating test coverage, communicating risk, and keeping distributed QA teams in sync across a large-scale live project.

- Root-caused TSR smearing that obscured animation quality in the anim review playblast exporter; found a mitigation and helped set requirements for the in-house replacement.
- Diagnosed multiple rare Switch-only rendering bugs by isolating platform-specific interactions between materials and animation.
- Recognized a pattern in escaped defects tracing back to untested FX across platforms and scalability settings; developed test cases and distributed them as team-specific guides so each content team could fold FX validation into their own workflows.
- Built Unreal Editor Utility Widget tools for animation range validation and asset audits; extended a C++ submit validator to enforce LOD and triangle limits at check-in.
- Created an automation triage tool with Claude Code in one day, putting over a dozen report pages into one trend-tracking view; daily triage went from hours to minutes.

<!-- print: page 2 starts here -->

### Technical Artist | Left Turn Studios | Seattle, WA / Remote
**October 2021 – January 2023**
*Alien Age (Steam, 2021) | Snuggles the Unicorn (canceled) | Grapple Star (demo)*

Revenue-share contributor on Alien Age before Left Turn Studios incorporated in January 2022. Technical Artist across all three Unity projects, solo until a second TA joined on Snuggles.

- Converted Snuggles from Unity's standard renderer to URP: rebuilt every shader from scratch, scripted batch material conversion, reworked outsourced store assets to match the pipeline, and rebuilt lighting and post-processing.
- Owned all shaders, VFX, lighting, and materials on Alien Age: custom water, volumetric fog, and world-position-seeded color variation shaders; full asset optimization including retopology, indexed textures, and reduced texture lookups.
- Designed a procedural foliage placement tool and set its requirements for the engineer who built it, then tested it against production needs; runs in-editor to avoid runtime cost, documented for level designers to regenerate independently.
- Developed a vertex shader system for enemy wings on Snuggles, replacing a heavy skeletal rig with a shader-driven mesh; used Material Property Blocks to offset each enemy's flap timing, so on-screen enemies didn't all flap in unison.
- Built the animation state machines for all characters and a puppet rig system to retarget existing animations onto a redesigned player model, so existing animations didn't have to be redone; scripted the constraint reconnection to rebuild automatically after asset updates.

### Freelance & Independent Work | Seattle, WA
**May 2019 – September 2021**

Freelance creative work including graphic design and web projects. Self-directed technical study, including a crash course in Unity, real-time VFX, and shader development.

### Test Engineer | Bungie, Inc. | Bellevue, WA
**May 2015 – May 2019**
*Destiny: The Taken King | Destiny 2 | D2: Curse of Osiris | D2: Forsaken*
*Test Engineer (Nov 2017 – May 2019) | QA Tester (Mar 2016 – Nov 2017) | Embedded Contract via Randstad USA (May 2015 – Mar 2016)*

- Traced content through each production step to identify systemic failure points, improving fix rates and preventing issues before they became bugs.
- Analyzed runtime memory in high-risk areas, helping steer the project into memory budget for launch.
- Built a debug tool for rapid testing of gameplay events that were too time-consuming to run manually; adopted by multiple teams.
- Created team workflows and wrote their guides, speeding up onboarding and helping the team work independently.

**3D Generalist: Destiny 2 Ambient Life Project (2017 – 2018)**

Modeled, rigged, and animated shipped ambient life characters in Maya: owls in the Farm social space and the sea monster on Titan. Also built a reactive NPC with custom animation and VFX, and prototyped an interactive beehive obstacle.

### Technical Artist, Capstone | DigiPen Institute of Technology | Redmond, WA
**July 2014 – May 2015**
*Relic | 3D action adventure | DigiPen Zero Engine*

Owned all visual technical work, getting creative within the engine's limits to realize the project's ambitious vision.

- Authored the FX, lighting, materials, rendering, and asset pipelines.
- Composed the environments in engine, with atmospherics simulated in custom shaders.
- Modeled and rigged the player character in Maya and established its animation import pipeline.
- Identified engine constraints blocking the project's visual goals and worked with the chief engineer on solutions, leading to several engine-level changes.
- Rallied the most engaged teammates mid-production to redefine the project's direction and take it to leadership; the team moved from a single director to a collaborative department-leads structure.
- Wrote PyMEL tools for other projects: batch render-pass assignment and procedural asset scattering.
- Taught a Project FUN animation class for high school credit at a DigiPen satellite location (Summer 2013 & 2014), developing its curriculum for traditional and digital animation.

---

## Skills

**Real-Time & Rendering:** Shaders, VFX, lighting, rendering, optimization, platform scalability
**3D Art:** Modeling, sculpting, UVs, texturing, rigging, animation
**Tools & Pipeline:** Asset validation, import and conversion, editor tools, scripted actions, procedural generation
**Scripting:** Python, C#, HLSL
**AI & Automation:** Agentic coding, agent-assisted workflow development, harness customization, context management, MCP / API integration
**Software:** Unreal Engine, Unity, Maya, Photoshop, 3ds Max, Substance 3D, Adobe Creative Suite

---

## Education

**BFA, Digital Art and Animation**
DigiPen Institute of Technology | Redmond, WA

**AA, General Studies | Certificate: Digital Illustration**
Everett Community College | Everett, WA
