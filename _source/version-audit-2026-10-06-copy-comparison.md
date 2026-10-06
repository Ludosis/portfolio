# Copy comparison, 2026-10-06

Every item restored to your original wording on 2026-10-06, next to the version the
rebuild had written. Only items whose words differ are listed (punctuation-only
differences are skipped). 63 items.

Nothing here is lost either way: the rebuild versions live in commit `c196204`. To
bring any of them back, tell me which ones (for example "use the rebuild wording
for the Snuggles card and the Skills page shaders section") and I'll apply just
those.

## Home page

- **Hero line**
  - Your original (live now): Technical Artist and 3D generalist with a decade of AAA and indie game dev. Shaders, VFX, animation pipelines, tooling: wherever the project needs depth.
  - Rebuild version: Shaders, rigs, and the tooling between art and engineering. Ten years across AAA and indie at Bungie, Epic Games, and Left Turn Studios.
- **Featured heading**
  - Your original (live now): Featured Work
  - Rebuild version: Selected Work
- **Featured card: Wing Vertex Shader System, label**
  - Your original (live now): Fig. 01: Left Turn Studios · Snuggles the Unicorn
  - Rebuild version: Fig. 01: Snuggles the Unicorn / Left Turn Studios · Unity
- **Featured card: Wing Vertex Shader System, description**
  - Your original (live now): Replaced a 32-bone-per-enemy rig with a shader-driven wing flap. Material Property Blocks randomize the phase per instance so every enemy moves independently.
  - Rebuild version: 32 bones per enemy replaced with a GPU sine-wave vertex shader. Per-instance phase via Material Property Blocks keeps every wing out of sync, with zero additional draw calls.
- **Featured card: Wing Vertex Shader System, tags**
  - Your original (live now): Unity Shader Graph · HLSL · Material Property Blocks · Performance
  - Rebuild version: Shader Graph · HLSL · Optimization
- **Featured card: Puppet Rig Retargeting System, title**
  - Your original (live now): Puppet Rig Retargeting System
  - Rebuild version: Puppet Rig Retargeting
- **Featured card: Puppet Rig Retargeting System, label**
  - Your original (live now): Fig. 02: Left Turn Studios · Snuggles the Unicorn
  - Rebuild version: Fig. 02: Snuggles the Unicorn / Left Turn Studios · Unity
- **Featured card: Puppet Rig Retargeting System, description**
  - Your original (live now): Built a constraint-based retargeting system to reuse all existing animations on a redesigned player model, with scripted constraint reconnection that rebuilds automatically after asset updates.
  - Rebuild version: Constraint-based retargeting that survived a mid-production character redesign, and a scripted rebuild utility that survived every model update after it.
- **Featured card: Puppet Rig Retargeting System, tags**
  - Your original (live now): Unity · C# · Rigging · Editor Scripting
  - Rebuild version: Rigging · Animation · Editor Scripting
- **Featured card: Depth-of-Field Transparency Fix, label**
  - Your original (live now): Fig. 03: Left Turn Studios · Grapple Star
  - Rebuild version: Fig. 03: Grapple Star / Left Turn Studios · Unity
- **Featured card: Depth-of-Field Transparency Fix, description**
  - Your original (live now): Unity's depth-of-field pass was eating foreground VFX. Solved it with a dual-camera Cinemachine composite: background renders with post-processing, foreground VFX renders sharp.
  - Rebuild version: Dual-camera Cinemachine composite: background rendered with full post-processing, foreground VFX rendered sharp on top.
- **Featured card: Depth-of-Field Transparency Fix, tags**
  - Your original (live now): Unity · Cinemachine · Post-Processing · VFX
  - Rebuild version: Rendering · Cinemachine · Post-Processing
- **Featured card: Automation Triage Tool, label**
  - Your original (live now): Fig. 04: Epic Games · Lego Fortnite
  - Rebuild version: Fig. 04: Lego Fortnite / Epic Games · UE5
- **Featured card: Automation Triage Tool, description**
  - Your original (live now): Built with Claude Code in a single day: an HTML report generator that pulls test results across platforms, tracks trends, and attaches Jira-linked failure notes, turning hours of manual triage into a scan.
  - Rebuild version: Cross-platform test triage built with Claude Code in a day: API pulls, trend tracking, Jira-linked failures rendered as one scannable report.
- **Featured card: Automation Triage Tool, tags**
  - Your original (live now): Claude Code · Python · API / MCP · Jira
  - Rebuild version: Python · Claude Code · QA Systems
- **About blurb**
  - Your original (live now): Senior Technical Artist and 3D generalist with a decade of experience in AAA and indie game development, in both Unity and Unreal Engine. Best suited for small teams with broad scope: shaders, VFX, animation pipelines, asset optimization, tooling, procedural content, and any technical challenge the project surfaces. Years of QA work on large productions built a habit of asking why a problem exists, not just fixing it, and building processes so it doesn't recur.
  - Rebuild version: Senior Technical Artist and 3D generalist with a decade in AAA and indie game development. Years of QA work on large productions built a habit of asking why a problem exists, not just fixing it, and building processes so it doesn't recur. Currently using Claude Code and LLM workflows for tooling and pipeline problems, including this site .
- **About link**
  - Your original (live now): More about Jovian →
  - Rebuild version: More about me →
- **"See all projects" button**
  - Your original (live now): present
  - Rebuild version: removed

## Portfolio index cards

- **Alien Age: label**
  - Your original (live now): Plate 01: Left Turn Studios · 2021
  - Rebuild version: Plate 01: Indie Wizards → Left Turn Studios / 2021 · Released on Steam
- **Alien Age: description**
  - Your original (live now): Sole TA on a shipped Steam title. Custom water, fog, and color-variation shaders; full asset pipeline including retopology and indexed texture atlases; procedural foliage placement tool.
  - Rebuild version: Sole TA on a shipped Steam title, owning all shaders, VFX, lighting, and the full asset pipeline from raw geometry to in-engine.
- **Alien Age: tags**
  - Your original (live now): Shader Graph · VFX · Lighting · Asset Optimization
  - Rebuild version: Shaders & Materials · VFX · Lighting & Rendering · Tools & Pipeline · Procedural Content · Scripting
- **Snuggles the Unicorn: label**
  - Your original (live now): Plate 02: Left Turn Studios · 2021–2023
  - Rebuild version: Plate 02: Left Turn Studios / 2021–2023 (canceled)
- **Snuggles the Unicorn: description**
  - Your original (live now): Lead TA on a Unity action title. Vertex shader system replacing 32-bone enemy rigs; constraint-based animation retargeting system for a redesigned player model.
  - Rebuild version: Wing vertex shaders, a constraint-based retargeting rig that survived repeated model redesigns, and a full URP conversion on a Unity action game.
- **Snuggles the Unicorn: tags**
  - Your original (live now): HLSL · Material Property Blocks · Rigging · C#
  - Rebuild version: Shaders & Materials · Lighting & Rendering · Rigging & Animation · Tools & Pipeline · VFX · Scripting
- **Grapple Star: label**
  - Your original (live now): Plate 03: Left Turn Studios · 2021–2023
  - Rebuild version: Plate 03: Left Turn Studios / 2021–2023 (demo)
- **Grapple Star: description**
  - Your original (live now): Unity space action demo. Solved a depth-of-field transparency issue with a dual-camera Cinemachine composite that keeps foreground VFX sharp without disabling post-processing.
  - Rebuild version: A dual-camera fix for Unity's depth-of-field transparency problem, a from-scratch Level Select UI, and gameplay VFX on a space action demo.
- **Grapple Star: tags**
  - Your original (live now): Cinemachine · Post-Processing · VFX · Unity
  - Rebuild version: Lighting & Rendering · UI · Procedural Content · VFX
- **Lego Fortnite: label**
  - Your original (live now): Plate 04: Epic Games · 2023–2026
  - Rebuild version: Plate 04: Epic Games / July 2023 – March 2026
- **Lego Fortnite: description**
  - Your original (live now): Embedded tech art QA across FX, animation, content optimization, and procedural content on UE5. Built FX validation framework and an automation triage tool with Claude Code.
  - Rebuild version: An FX validation framework that scaled coverage without scaling QA, and an automation triage tool built with Claude Code in a single day.
- **Lego Fortnite: tags**
  - Your original (live now): Unreal Engine 5 · QA Systems · Claude Code · Pipeline
  - Rebuild version: QA & Automation · Tools & Pipeline · Scripting
- **Destiny 2: Ambient Life: description**
  - Your original (live now): 3D generalist work embedded in QA: modeled, rigged, and animated the owls in the Farm social space and the sea monster on Titan. Shipped in Destiny 2.
  - Rebuild version: Shipped ambient life characters (the Farm owls and the Titan sea monster), modeled, rigged, and animated alongside QA engineering work.
- **Destiny 2: Ambient Life: tags**
  - Your original (live now): Maya · Rigging · Character Animation · VFX
  - Rebuild version: Rigging & Animation · VFX · Tools & Pipeline · QA & Automation
- **Relic: label**
  - Your original (live now): Plate 06: Synaptic Sugar / DigiPen · 2014–2015
  - Rebuild version: Plate 06: Synaptic Sugar (DigiPen capstone) / July 2014 – May 2015
- **Relic: description**
  - Your original (live now): DigiPen capstone in Zero Engine. Owned all visual technical work and pushed the engine past its documented limits. First Place at 2015 DigiPen Student Showcase; exhibited at PAX West.
  - Rebuild version: All visual technical work on a DigiPen capstone that pushed Zero Engine past its documented limits. Award winner, exhibited at PAX West 2015.
- **Relic: tags**
  - Your original (live now): Shader Authoring · Lighting · VFX · Technical Direction
  - Rebuild version: Shaders & Materials · Lighting & Rendering
- **Earlier Work: label**
  - Your original (live now): Plate 07: DigiPen Institute of Technology
  - Rebuild version: Plate 07: DigiPen Institute of Technology / 2013–2014

## Project pages (header tags, meta row, sidebar)

- **Alien Age: header tags**
  - Your original (live now): Shader Graph · HLSL · VFX · Lighting · Asset Optimization · Retopology · Texturing · Unity · Python
  - Rebuild version: Shaders & Materials · VFX · Lighting & Rendering · Tools & Pipeline · Procedural Content · Scripting · Retopology · Texture Atlases
- **Alien Age: meta row**
  - Your original (live now): Studio Left Turn Studios · Role Technical Artist (sole TA) · Released 2021 · Steam · Engine Unity
  - Rebuild version: Studio Indie Wizards → Left Turn Studios · Role Technical Artist (sole TA) · Dates 2021 · Released on Steam · Engine Unity
- **Alien Age: sidebar**
  - Your original (live now): Tools: Unity 2020 · Shader Graph · Unity Particle System · Maya · ZBrush · Substance Painter · Photoshop | Skills: Shader authoring · VFX · Lighting · Retopology · Texture atlas optimization · Editor tooling · Pipeline documentation | Project: Left Turn Studios / Released on Steam, 2021 / Sole Technical Artist
  - Rebuild version: Tools: Unity 2020 · Shader Graph · Unity Particle System · Maya · ZBrush · Substance Painter · Photoshop | Key work: Water, Fog & Tile Shaders · Beam & Lightning VFX · Full Lighting & Post · Foliage Placement Tool · Tree Sizer/Rotator/Tinter · Python (Maya & Pipeline) | Project: Indie Wizards → Left Turn Studios / 2021 · Released on Steam / Technical Artist (sole TA)
- **Snuggles the Unicorn: header tags**
  - Your original (live now): Unity Shader Graph · HLSL · Material Property Blocks · Rigging · C# · Editor Scripting · VFX · Animation Pipeline
  - Rebuild version: Shaders & Materials · Lighting & Rendering · Rigging & Animation · Tools & Pipeline · VFX · Scripting · Material Property Blocks · HLSL
- **Snuggles the Unicorn: sidebar**
  - Your original (live now): Tools: Unity · Shader Graph · Unity Animation Rigging · C# editor scripting · Maya · Substance Painter | Skills: Rendering pipeline conversion · Vertex shader authoring · Material Property Blocks · Gameplay-driven shaders · Constraint-based rigging · Animation retargeting · Editor scripting · VFX · Cinematic sequencing | Project: Left Turn Studios / 2021–2023 / Lead Technical Artist
  - Rebuild version: Tools: Unity · Shader Graph · Unity Animation Rigging · C# editor scripting · Maya · Substance Painter | Key work: Wing Vertex Shader System · Character Status FX Shader · URP Rendering Conversion · Puppet Rig & Retargeting · Rig Rebuild Utility · Gameplay VFX · C# (Unity) | Project: Left Turn Studios / 2021–2023 (canceled) / Lead Technical Artist
- **Grapple Star: header tags**
  - Your original (live now): Unity · Cinemachine · Post-Processing · VFX · Rendering · UI Scripting · C#
  - Rebuild version: Lighting & Rendering · UI · Procedural Content · VFX · C#
- **Grapple Star: sidebar**
  - Your original (live now): Tools: Unity · Cinemachine · Unity Post-Processing Stack · Unity Particle System | Skills: Rendering pipeline · Camera compositing · Post-processing · VFX · UI scripting · Technical problem-solving | Project: Left Turn Studios / 2021–2023 (demo) / Lead Technical Artist
  - Rebuild version: Tools: Unity · Cinemachine · Unity Post-Processing Stack · Unity Particle System | Key work: Depth-of-Field Transparency Fix · Level Select Screen · Dynamic Targeting Reticle · Procedural UI Animation · Ship & Pickup VFX | Project: Left Turn Studios / 2021–2023 (demo) / Lead Technical Artist
- **Lego Fortnite: header tags**
  - Your original (live now): Unreal Engine 5 · QA Systems Design · FX Validation · Asset Audit Tools · Claude Code · Python · API / MCP · Jira · Pipeline
  - Rebuild version: QA & Automation · Tools & Pipeline · Scripting · Live Service
- **Lego Fortnite: sidebar**
  - Your original (live now): Tools: Unreal Engine 5 · Editor Utility Widgets · C++ (extend existing) · Python · Claude Code · Jira API · MCP integration | Skills: QA systems design · FX validation · Test case development · Pipeline tooling · LLM-assisted development · Cross-team coordination · Root cause analysis | Role: Epic Games / July 2023 – March 2026 / Senior QA Engineer (Tech Art)
  - Rebuild version: Tools: Unreal Engine 5 · Editor Utility Widgets · C++ (extend existing) · Python · Claude Code · Jira API · MCP integration | Key work: Automation Triage Tool · FX Coverage Framework · EUW Editor Tools · Blueprint & EUW (UE5) | Project: Epic Games / July 2023 – March 2026 / Senior QA Engineer (Tech Art)
- **Destiny 2: Ambient Life: header tags**
  - Your original (live now): Maya · 3DS Max · Modeling · Rigging · Skinning · Character Animation · VFX
  - Rebuild version: Rigging & Animation · VFX · Tools & Pipeline · QA & Automation · Modeling · Skinning · UV Layout
- **Destiny 2: Ambient Life: sidebar**
  - Your original (live now): Tools: Maya · 3DS Max · Photoshop · Bungie internal tools | Skills: Character modeling · Rigging & skinning · Character animation · VFX · UV layout | Role: Bungie, Inc. / May 2015 – May 2019 / Test Engineer / 3D Generalist
  - Rebuild version: Tools: Maya · 3DS Max · Photoshop · Bungie internal tools | Key work: Shipped Ambient Characters · Beehive & Ambient VFX · Debug Config Tool · Test Engineering | Project: Bungie / 2017–2018 / 3D Generalist (embedded in QA)
- **Relic: header tags**
  - Your original (live now): Shader Authoring · Lighting · VFX · Rigging · Environment Art · Technical Direction · Engine Collaboration
  - Rebuild version: Shaders & Materials · Lighting & Rendering · Environment Art · Technical Direction
- **Relic: meta row**
  - Your original (live now): Team Synaptic Sugar (DigiPen capstone) · Role Technical Artist · Dates July 2014 – May 2015 · Engine DigiPen Zero Engine
  - Rebuild version: Studio Synaptic Sugar (DigiPen capstone) · Role Technical Artist · Dates July 2014 – May 2015 · Engine DigiPen Zero Engine
- **Relic: sidebar**
  - Your original (live now): Tools: DigiPen Zero Engine · Maya · 3DS Max · ZBrush · Photoshop | Skills: Shader authoring · Lighting · VFX · Rigging · Environment art · Pipeline design · Engine collaboration | Recognition: First Place: Best Spoken Dialog / First Place: Best Characters / 2015 DigiPen Student Showcase / Exhibited at PAX West 2015 | Project: Synaptic Sugar / DigiPen capstone / July 2014 – May 2015
  - Rebuild version: Tools: DigiPen Zero Engine · Maya · 3DS Max · ZBrush · Photoshop | Key work: Atmosphere Shaders in Zero Engine · All Visual Systems | Recognition: First Place: Best Spoken Dialog / First Place: Best Characters / 2015 DigiPen Student Showcase / Exhibited at PAX West 2015 | Project: Synaptic Sugar (DigiPen capstone) / July 2014 – May 2015 / Technical Artist

## Skills page entries

- **Intro**
  - Your original (live now): Senior Technical Artist: Bungie, Epic Games, Left Turn Studios. Each section links to the project pages where the work appears.
  - Rebuild version: Senior Technical Artist, with work at Bungie, Epic Games, and Left Turn Studios. Each section links to the project pages where the work appears. This page is generated from project metadata, so it can't drift out of sync.
- **shaders section** (order shown)
  - Your original (live now):
    1. Alien Age: Water surface (world-space UV, eliminates tiling artifacts on irregular terrain); volumetric fog (depth texture sampling, height-responsive density); environment tile color-variation (world-position seeded, eight tileset varieties from three source meshes)
    2. Snuggles the Unicorn / Wing Vertex Shader: Replaced 32-bone-per-enemy wing rig with a GPU vertex shader; per-instance phase randomization via Material Property Blocks so every enemy flaps independently, with zero extra draw calls
    3. Snuggles the Unicorn / Status FX Shader: Single overlay shader handling all character status states (burning, frozen, impact flash); toggled by bools from gameplay script via a helper component; multiple states simultaneously active
    4. Relic: Atmospheric and visual shading in Zero Engine; pushed past documented engine limits by working directly with the chief engineer on engine-level changes
  - Rebuild version:
    1. Alien Age / Water, Fog & Tile Shaders: Water surface (world-space UV, eliminates tiling artifacts on irregular terrain); volumetric fog (depth texture sampling, height-responsive density); environment tile color-variation (world-position seeded, eight tileset varieties from three source meshes)
    2. Snuggles the Unicorn / Wing Vertex Shader System: Replaced 32-bone-per-enemy wing rig with a GPU vertex shader; per-instance phase randomization via Material Property Blocks so every enemy flaps independently, with zero extra draw calls
    3. Snuggles the Unicorn / Character Status FX Shader: Single overlay shader handling all character status states (burning, frozen, impact flash); toggled by bools from gameplay script via a helper component; multiple states simultaneously active
    4. Relic / Atmosphere Shaders in Zero Engine: Atmospheric scattering faked with depth values and fog density curves in an engine with no atmosphere or post-processing system; pushed past documented engine limits by working directly with the chief engineer on engine-level changes
- **lighting section** (order shown)
  - Your original (live now):
    1. Snuggles the Unicorn / URP Conversion: Full standard-renderer-to-URP conversion: every shader rebuilt from scratch, batch material conversion scripted, lighting and post-processing rebuilt, outsourced store assets cleaned up to match pipeline
    2. Grapple Star / Depth-of-Field Fix: Dual-camera Cinemachine composite: background renders with full post-processing including DoF, foreground camera renders VFX layer with post-processing disabled: sharp foreground particles over blurred background, correct depth relationships preserved
    3. Alien Age: Full lighting and post-processing setup; all environment materials and lighting authored from scratch
    4. Relic: All visual technical systems in Zero Engine; worked with chief engineer on engine-level rendering changes
  - Rebuild version:
    1. Alien Age / Full Lighting & Post: Full lighting and post-processing setup; all environment materials and lighting authored from scratch
    2. Snuggles the Unicorn / URP Rendering Conversion: Full standard-renderer-to-URP conversion: every shader rebuilt from scratch, batch material conversion scripted, lighting and post-processing rebuilt, outsourced store assets cleaned up to match pipeline
    3. Grapple Star / Depth-of-Field Transparency Fix: Dual-camera Cinemachine composite: background renders with full post-processing including DoF, foreground camera renders VFX layer with post-processing disabled, for sharp foreground particles over a blurred background with correct depth relationships preserved
    4. Relic / All Visual Systems: All visual technical systems in Zero Engine: FX, lighting, atmospherics, materials, rendering and asset pipelines; worked with chief engineer on engine-level rendering changes
- **tools section** (order shown)
  - Your original (live now):
    1. Alien Age / Foliage Placement Tool: Editor-time placement tool (collaborated with engineer): runs distribution logic in-editor, bakes as placed instances for zero runtime cost. Documented so level designers could regenerate placements independently after level changes
    2. Snuggles the Unicorn / Rig Rebuild Utility: Scripted constraint reconnection that rebuilt the full rig from saved configuration in seconds; Maya compositing helper scripts
    3. Lego Fortnite / Editor Tools: EUW animation range validation tool (batching, progress indicator, CSV export, configurable options); asset audit EUW with mesh LOD and triangle count enforcement at check-in via extended C++ submit validator; FX validation test suite distributed as team-specific guides
    4. Bungie: Debug config tool for internal use; test engineering infrastructure on live service titles
  - Rebuild version:
    1. Alien Age / Foliage Placement Tool: Editor-time placement tool (collaborated with engineer): runs distribution logic in-editor, bakes as placed instances for zero runtime cost. Documented so level designers could regenerate placements independently after level changes
    2. Snuggles the Unicorn / Rig Rebuild Utility: Scripted constraint reconnection that rebuilt the full rig from saved configuration in seconds; Maya compositing helper scripts
    3. Lego Fortnite / EUW Editor Tools: EUW animation range validation tool (batching, progress indicator, CSV export, configurable options); asset audit EUW with mesh LOD and triangle count enforcement at check-in via extended C++ submit validator
    4. Destiny 2: Ambient Life / Debug Config Tool: Debug config tool letting testers trigger public event completion at any reward tier on demand; adopted independently by the audio team
- **procedural section** (order shown)
  - Your original (live now):
    1. Alien Age: Editor-time foliage placement tool with Tree Sizer/Rotator/Tinter: randomized position, scale, rotation, and color at placement time; three rock meshes and three tree meshes produced eight distinct tileset varieties with no additional asset authoring
    2. Grapple Star: Procedurally animated 2D elements in the Level Select UI scene
  - Rebuild version:
    1. Alien Age / Tree Sizer/Rotator/Tinter: Editor-time foliage placement with randomized position, scale, rotation, and color at placement time; three rock meshes and three tree meshes produced eight distinct tileset varieties with no additional asset authoring
    2. Grapple Star / Procedural UI Animation: Procedurally animated 2D elements in the Level Select UI scene
- **scripting section** (order shown)
  - Your original (live now):
    1. C# / Unity: Puppet rig constraint rebuild utility; controller aim script; status FX helper component; gameplay-to-shader parameter bridge; batch material conversion script for URP migration
    2. Python / Maya & pipeline: Maya scripts for compositing and asset pipeline tasks; foliage placement tool (collaborated with engineer); Tree Sizer/Rotator/Tinter script
    3. Blueprint & EUW / Unreal Engine 5: Animation range validation EUW with batching, progress indicator, and CSV export; asset audit EUW with LOD/poly enforcement; extended existing C++ submit validator, with no prior UE5 Blueprint or EUW experience before building these
    4. Claude Code: Automation triage tool built in one day; this portfolio site; context and memory management across sessions; framing problems clearly enough that implementation can be delegated; see How I Work
  - Rebuild version:
    1. Alien Age / Python (Maya & Pipeline): Maya scripts for compositing and asset pipeline tasks; foliage placement tool (collaborated with engineer); Tree Sizer/Rotator/Tinter script
    2. Snuggles the Unicorn / C# (Unity): Puppet rig constraint rebuild utility; controller aim script; status FX helper component; gameplay-to-shader parameter bridge; batch material conversion script for URP migration
    3. Lego Fortnite / Blueprint & EUW (UE5): Animation range validation EUW with batching, progress indicator, and CSV export; asset audit EUW with LOD/poly enforcement; extended existing C++ submit validator, with no prior UE5 Blueprint or EUW experience before building these

## Page descriptions (search results and link previews)

- **/**
  - Your original (live now): Jovian Finch Nordgren, Senior Technical Artist and 3D generalist with a decade of experience in AAA and indie game development. Shaders, VFX, animation pipelines, tooling.
  - Rebuild version: Jovian Finch Nordgren, Senior Technical Artist. Shaders, VFX, rigging, pipeline tooling, and QA systems across Bungie, Epic Games, and Left Turn Studios.
- **/about/**
  - Your original (live now): About Jovian Finch Nordgren, Senior Technical Artist combining deep QA systems thinking, artistic training, and AI tooling fluency.
  - Rebuild version: About Jovian Finch Nordgren, Senior Technical Artist and 3D generalist with experience at Bungie, Epic Games, and Left Turn Studios.
- **/how-i-work/**
  - Your original (live now): How I Work: Jovian Finch Nordgren. On working with people, technology, and Claude Code as a skilled collaborator.
  - Rebuild version: How Jovian Finch Nordgren works with people, with technology, and with Claude Code. Process, collaboration, and what AI tooling doesn't replace.
- **/portfolio/**
  - Your original (live now): Portfolio: Jovian Finch Nordgren. Technical art, shaders, VFX, animation pipelines, and tooling across AAA and indie game development.
  - Rebuild version: Game projects by Jovian Finch Nordgren: shaders, VFX, animation pipelines, asset optimization, and tooling across AAA and indie development.
- **/resume/**
  - Your original (live now): Resume: Jovian Finch Nordgren, Technical Artist and 3D generalist.
  - Rebuild version: Resume of Jovian Finch Nordgren, Senior Technical Artist. Bungie, Epic Games, Left Turn Studios, DigiPen.
- **/portfolio/snuggles/**
  - Your original (live now): Snuggles the Unicorn: technical art work by Jovian Finch Nordgren. Wing vertex shader system and puppet rig retargeting on a Unity action game.
  - Rebuild version: Snuggles the Unicorn: technical art work by Jovian Finch Nordgren. Wing vertex shader system, URP conversion, and puppet rig retargeting on a Unity action game.
- **/portfolio/relic/**
  - Your original (live now): Relic: DigiPen capstone technical art by Jovian Finch Nordgren. Visual systems, engine-limit work, and First Place at the 2015 DigiPen Student Showcase.
  - Rebuild version: Relic: DigiPen capstone technical art by Jovian Finch Nordgren. Custom atmosphere shaders, engine-level collaboration, and production leadership in Zero Engine.
