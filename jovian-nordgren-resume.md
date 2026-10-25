# Jovian Finch Nordgren
### Senior Technical Artist | 3D Generalist

JovianFinch.com | linkedin.com/in/JovianFinch

---

## Profile

Technical Artist and 3D generalist with a decade in AAA and indie games across Tech Art and QA Engineering, in Unity and Unreal Engine. Success in both comes from the same habit: asking why a problem exists, not just fixing it, and building processes so it doesn't recur. Works best in a broad role on a small team: shaders, VFX, animation pipelines, asset optimization, tooling, and procedural content. Most driven by work that lets others do their best work. Approaches tools as an artist first: knows the workflows hands-on, is quick to take on new skills, tools, and codebases, and uses agentic coding to support good design and usability, not replace it.

---

## Experience

### Senior Technical Artist | Riot Games | Remote
**May 2026 – Present**
*Teamfight Tactics*
*Contract via Innovative Employee Solutions*

Technical Artist on Teamfight Tactics during its move from Riot's in-house engine to Unreal Engine 5, patching conversion import issues and mitigating architectural differences between engines. Focus is on repeatable fixes: automating tedious manual conversion work so artist time goes to the fixes that need an artist's eye, and catching issues before content reaches QA, removing the downstream cost of testing, reporting, and triage.

- Built Unreal Python batch fixers that restore properties the import dropped (such as emote audio) from legacy engine data, run from the editor's right-click menu and safe to rerun without overwriting artists' hand-set values.
- Designed guided fixers for VFX and materials: AI reasoning on human-authored criteria makes the safe fixes the way an artist would, and the rest go to an interactive guide listing each issue and a fix to validate, so manual fixes skip the search and start at the solution.
- Dug into every layer of the game's timeline-based animation state system, from gameplay triggers through animation, VFX, and audio clips, to fix conversion bugs inside it; built right-click reimport helpers for assets that imported incorrectly.
- Developed an agentic AI framework and starter kit that helps artists and Tech Artists bring agentic workflows into their work: context packs, skills, and MCP connectors let it find what it needs from a plain-language question, and base rules fix common LLM failures at the root, counteracting benchmark optimization for more reliable answers; carried-forward corrections let each user's workspace improve.
- Built a two-layer Python/SQLite bug patterns system: a shared library of known causes and fixes that anyone can add to and the team's other AI tools can query, and an audit of past bugs and hand fixes, with a browsable dashboard, that ranks recurring patterns into importer fixes, batch fixers, or other systemic fixes before unreleased content ships.

### Senior QA Engineer (Tech Art) | Epic Games | Remote
**July 2023 – March 2026**
*Lego Fortnite*

Embedded across multiple Tech Art and content teams on Lego Fortnite, owning pipeline integrity and quality across FX, animation, content optimization, world/terrain, and procedural content. Served as animation domain liaison, mapping the full pipeline from DCC to in-engine setup to running game and every handoff between, coordinating test coverage, communicating risk, and keeping distributed QA teams in sync across a large-scale live project.

- Root-caused TSR smearing that obscured animation quality in the anim review playblast exporter; found a mitigation and helped set requirements for the in-house replacement.
- Root-caused and solved multiple rare Switch-only rendering bugs, isolating platform-specific interactions between materials and animation.
- Recognized a pattern in escaped defects tracing back to untested FX across platforms and scalability settings; developed test cases and distributed them as team-specific guides so each content team could fold FX validation into their own workflows.
- Built Unreal Editor Utility Widget tools for animation range validation and asset audits; extended a C++ submit validator to enforce LOD and triangle limits at check-in.
- Built an automation triage tool with Claude Code in one day, integrating APIs and MCPs into an HTML report with cross-platform comparison, trend tracking, and Jira-linked failure notes.

<!-- print: page 2 starts here -->

### Technical Artist | Left Turn Studios | Seattle, WA / Remote
**October 2021 – January 2023**
*Alien Age (Steam, 2021) | Snuggles the Unicorn (canceled) | Grapple Star (demo)*

Revenue-share contributor on Alien Age before Left Turn Studios incorporated in January 2022. Technical Artist across all three Unity projects, solo until a second TA joined on Snuggles.

- Owned all shaders, VFX, lighting, and materials on Alien Age: custom water, volumetric fog, and world-position-seeded color variation shaders; full asset optimization including retopology, indexed textures, and reduced texture lookups.
- Designed a procedural foliage placement tool and set its requirements for the engineer who built it, then tested it against production needs; runs in-editor to avoid runtime cost, documented for level designers to regenerate independently.
- Converted Snuggles from Unity's standard renderer to URP: rebuilt every shader from scratch, scripted batch material conversion, reworked outsourced store assets to match the pipeline, and rebuilt lighting and post-processing.
- Developed a vertex shader system for enemy wings on Snuggles, replacing a 32-bone-per-enemy rig with a shader-driven flap; used Material Property Blocks to offset each enemy's flap timing, so on-screen enemies didn't all flap in unison.
- Built the animation state machines for all characters and a puppet rig system to retarget existing animations onto a redesigned player model, so existing animations didn't have to be redone; scripted the constraint reconnection to rebuild automatically after asset updates.

### Freelance & Independent Work | Seattle, WA
**May 2019 – September 2021**

Freelance creative work including graphic design and web projects. Used the period for self-directed technical study, including a crash course in Unity, real-time VFX, and shader development.

### Test Engineer | Bungie, Inc. | Bellevue, WA
**May 2015 – May 2019**
*Destiny: The Taken King | Destiny 2 | D2: Curse of Osiris | D2: Forsaken*
*Test Engineer (Nov 2017 – May 2019) | QA Tester (Mar 2016 – Nov 2017) | Embedded Contract via Randstad USA (May 2015 – Mar 2016)*

- Traced content through each production step to identify systemic failure points, improving fix rates and preventing issues before they became bugs.
- Analyzed runtime memory in high-risk areas, helping steer the project into memory budget for launch.
- Built a debug config tool that triggered public event completion conditions on demand at any reward tier; the audio team adopted it independently for bucket testing that had been too time-consuming to run manually.
- Created workflows for the team and wrote guides for them, speeding up onboarding and helping the team work independently.

**3D Generalist: Destiny 2 Ambient Life Project (2017 – 2018)**

Modeled, rigged, and animated shipped ambient life characters in Maya: owls in the Farm social space and the sea monster on Titan. Also built a reactive NPC with custom animation and VFX, and prototyped an interactive beehive obstacle.

### Technical Artist, Capstone | DigiPen Institute of Technology | Redmond, WA
**July 2014 – May 2015**
*Relic | 3D action adventure | DigiPen Zero Engine*

Owned all visual technical work, pushing the engine past its documented limits to realize the project's ambitious vision.

- Built the FX, lighting, materials, and rendering and asset pipelines, with atmospherics simulated in custom shaders.
- Modeled and rigged the player character in Maya, and composed the environments.
- Identified engine constraints blocking the project's visual goals and worked directly with the chief engineer to understand and propose solutions rather than working around them; he implemented several engine-level changes as a result.
- Led a mid-production strike team to re-evaluate scope; helped transition to a collaborative department-leads structure that stabilized a large team struggling with unified direction.
- Wrote PyMEL tools for other projects: batch render-pass assignment and procedural asset scattering.
- Served as Animation Instructor for DigiPen's Project FUN (Summer 2013 & 2014), teaching traditional and digital animation workflows to students at varied skill levels.

---

## Skills

**Real-Time & Rendering:** Shader authoring, VFX, lighting, rendering, optimization
**3D Art:** Modeling, sculpting, UVs, texturing, rigging, animation
**Tools & Pipeline:** Asset validation, pipeline tooling, workflow documentation, Perforce, Git
**Scripting:** Python, C#, HLSL
**AI & Automation:** Agentic coding, agent-assisted workflow development, harness customization, context management, MCP / API integration
**Software:** Unreal Engine, Unity, Maya, Photoshop, 3ds Max, Substance 3D, Adobe Creative Suite

---

## Education

**BFA, Digital Art and Animation**
DigiPen Institute of Technology | Redmond, WA

**AA, General Studies | Certificate: Digital Illustration**
Everett Community College | Everett, WA
