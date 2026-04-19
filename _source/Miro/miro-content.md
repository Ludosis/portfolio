                                                                                                                                       # Miro Portfolio Content — Extracted & Needs Review

note: italics in a screenshot description are the caption

---

## Image 1 — "What is Tech Art?" diagram

Triangle with three corners: Design / Art / Engineering, with "Jovi" at the center.
(Contextual/intro slide — probably not portfolio content.)

---

## Image 2 — Summary, Links, Experience Overview, Skills
Each section is in a separate box

### Summary
- Indie generalist tech artist with AAA dev experience as Test/QA Engineer
- BFA Digital Art and Animation at DigiPen Institute of Technology
- Shipped art content in Destiny 2 as a side project while a Test Engineer at Bungie
- Brought an externally developed prototype demo to shipping quality visuals and performance in Unity with very little prior experience in the engine
- Balances between solving the immediate challenge within contraints, and working toward future pipeline/workflow improvements
- Does best with puzzles to solve and clear goals to work toward

### Links (old — may be outdated)
- Public-facing portfolio:
https://jnordgren.weebly.com/

- LinkedIn:
https://www.linkedin.com/in/jovianfinch

- Resume:
https://jnordgren.weebly.com/resume.html

### Experience Overview

As the sole technical artist on an indie project built in Unity, I took an externally
developed prototype to shipping-ready, porting to a vastly updated version of
the engine which required a major refactor of the rendering system and
converting all shaders, lights, post-processing, etc to the new rendering model.
Tasks included (non-exhaustively): resolving outsourcing implementation
challenges, optimization, rendering model conversion, dynamic VFX and
cinematic sequences, lighting and materials overhaul, bespoke shaders, post-
processing, procedural environment variety, custom character rigging with
retargeted animation, character nativization, functional IJI, and editor tools.

As a QA Engineer on LFN I have worked closely with Tech Artists on Time of Day
System conversion testing, Scalability/Platforms Materials issues,
Lighting/Shadows Rendering issues, VFX including Niagara and materials,
Editor Utility Widget functionality, and the Atom processor system. In these
cases my knowledge of Tech Art principles made a material difference in
helping track down the issue and find a resolution.

### Skills / Interests

**Main Interests:**
- Environments 
- Materials/Shaders
- Lighting, Rendering, Post-Processing
- VFX
- Prototyping (props, NPCs, general R&D)
- Investigations

**Additional:**
Modeling/Texturing
- Optimization
- Animation, Rigging, TechAnim, TDiA
- PCG
- Artist Tooling

---

## Portfolio organized by Project

---

## Image 3 — Prior Professional Tech Art Experience

Two color-coded project groups:

### GREEN BORDER — Alien Age
**Stats:**
- 1 month game jam - shipped
- Published on Steam - revenue share
- Small team with 1 concept artist, 1 3D modeler/animatorr and myself for Tech Art and implementation

**Focus:**
- Lighting
- Custom shaders & Materials
- VFX
- Rigging
- Optimization
- Procedural World
- Tools

**Images:**
- 1a & 1b: Before and After screenshots - *Before I joined the project* and *After my contributions*
- 2: overhead view of water shader on a terrain island - *Stylized water shader, MCP-driven terrain color randomizer*
- 3: gif of the fog shader in-action - *Horizon Fog Shader (click to play gif)*
- 4: overhead view of environment tiles with decorators - *Procedural environment decorators*

### PINK BORDER — Snuggles the Unicorn
**Stats:**
- 1 year Indie project- shelved
- Small team with 1 concept artist, outsourced art assets from Unity store, and myself for Tech Art and implementation. Later added another TA for lighting and PCG Level layout.
**Focus:**
- Rendering Sytem Refactor
- Outsource Cleanup and Modification
- Perf Optimization
- Custom shaders & materials incl. flapping wing vertex shader and character status FX
- VFX incl. particle systems and shaders
- Rigging: retargeting and procedural anim
- Editor Tools: rig retargeter, scene loader

**Images:** 
- 3 Image cluster: original biped mech model *+* concept art of quadruped mech *=* quadruped mech model
- Gif of mech movement - *Kitbashed a biped mech into a quadruped to match the concept, then retargeted the legs anim to get a gallop. Aim constraints control the cockpit aim with player input, added bob dampening.*
- Gif of fuel can - *gameplay-script-driven shader for fuel refill timer*
- skull model - *Super performance model, shaded with vertex colors to allow for triplanar mapped splatter texture*
- comparison between original and remodeled character model+rig - *Remodeled character from the original outsourced asset to match concept. Repainted skin weights. Wrote a tool to retarget packaged anims to the resized rig rather than refactor the anims - this was more scalable for our team.*

Additional link to cinematic sequence: https:/vimeo.com/827089176

---

## Image 4 — Grapple Star (cyan/teal border)

- 2-month indie project — shelved
- Small art team: 1 concept artist and myself for modeling, environment, UI, and Tech Art. 

**Focus:**
- Character/Vehicle Model, VFX, and state machine
- Lighting and Post-Processing
- Procedural Environment
- Gameplay UI elements and implementing end-to-end level select menu UI
- Reticle UI, changes depending on available targets

### TAN BORDER — Level Select UI
**Images:**
- Grapple Star Level Select UI - 
*Created assets and composed UI including scripting functionality for the level select screen. Uses a variety of 3D objects, particle systems, and procedurally animated 2D assets. I created everything in this scene, which is based on the below concept art by Rowan Sherwin. I also set up the UI canvas with clickable objects and actions, and script to populate text fields and enable/disable certain objects based on which planet was selected.*
- main menu concept - *Concept by Rowan Sherwin*
- Trierra world select concept - *Concept by Rowan Sherwin*
- **Video link referenced:** "Functional Level Select UI: Video Link" 

### Additional
**Images:**
- collectible orb bauble prop
- gif of the ship's reactive jet trails and boosters

---

## Portfolio organized by Skill

---

## Image 5 — Modeling + Texturing

**Left side — Solo animation project (+ link):**
- Frame from the animation with Jerry pulling on the truck handle - *Modeled and animated in Maya. Includes all textures, materials, environments, etc.*
- Wireframe truck model view
- Character model full body
- Character model head detail

**Right side — Environment/interior texturing:**
- 221B Baker Street interior environment prop details
- Sam from Relic character sheet with full render, wireframe, and texture sheets

---

## Image 6 — UI 

### TAN BORDER — Level Select UI
**Images:**
- Grapple Star Level Select UI - 
*Created assets and composed UI including scripting functionality for the level select screen. Uses a variety of 3D objects, particle systems, and procedurally animated 2D assets. I created everything in this scene, which is based on the below concept art by Rowan Sherwin. I also set up the UI canvas with clickable objects and actions, and script to populate text fields and enable/disable certain objects based on which planet was selected.*
- main menu concept - *Concept by Rowan Sherwin*
- Trierra world select concept - *Concept by Rowan Sherwin*
- **Video link referenced:** "Functional Level Select UI: Video Link" 

---

## Image 7 — Lighting, Shading, Materials, Post-Processing

**Images**

1 (cluster): Wing shader applied on hogs, and a screenshot of the shader graph - *Vertex shader for super performant flapping wings (vs rigged mesh) - Material Property Block (like Material Parameter Collection) ties dynamic gameplay behaviors like velocity, alive state, instance timing offset to the shader directly to allow changes per object that don't apply to anything sharing the material.*

2 (cluster): Skull model render + cinematic frame - *Skull uses vertex colors for shading, and triplanar mapped blood splat material at runtime* 

3: shader graph for World Position Color Variation shader - *Simple color variation shader fragment to adjust an color randomly (with range parameters) with a seed based on its world position 50 that each instance of an object with this shader gets a different color tint without creating more material instances,*

4: terrain island with water shader - "Stylized water shader, MPC-driven terrain color randomizer (highly performant)

5: camera DoF composite (before and after) - *Compositing two cameras to have both transparent VFX and blurred DoF background coexisting*

**Rendering Pipeline Conversion**
Overhauled project from Unity's standard renderer to Universal Render Pipeline. Recreated shaders, scripted conversion of materials, reconstructed lighting and post-processing, and more.


**PBR:**
"Mostly stylized examples but I'm familiar with PBR workflows. Have used Substance Designer and Houdini to make some procedural materials as well. 

---

## Image 8 — Tools & Pipeline

**EUW Cluster**
**Editor Utility Widqet - Lego Fortnite Animation Range Validation - Slide Deck Link**
Purpose is to identify which animation sequences needed to be resaved because they were out of sync with the level sequence.
- (Image of UEW running, overlaid with output screenshot)
- *Reverse-engineered a one-off EUW validator and refactored it for this purpose. Added batching, instructions, options, progress indicator, and output export to csv for sorting results. Easy to duplicate and modify a few nodes to use for other validation/analysis.*
*This works by loading each selected asset in the editor in order to evaluate its properties, caching its data to an array, repeating for the next asset, then compiling all the results together.*
*I had no prior knowledge of EUWs or Blueprint before creating this.*

**UE Animation Ptayblast Tool - OA Impact**
Investigated issues with a vendor-developed playblast tool that was being used to render out emote anims for director review. The renders were getting TSR smearing which was obscuring the anim in review, I root. caused the issue, and found a workaround to improve video quality for reviews.

**Adopting ReplayRun (or Scalability Visual Comparison - OA Impact**
*Links: Confluence Guide. Case Study*
Researched and developed process/guidelines for when/how to use this existing tool for the purposes of gathering video capture from a single gameplay session from multiple platforms to identify scalability inconsistencies/issues super efficiently.

**Unity Scene Composer Unity Component**
Place this script object in a master scene to automatically load in additional scene/level assets when loaded in level editor. Improves iteration while maintaining source control separation of assets for best collaboration. Reduces stomping or misalignment errors.

**Puppet Rig Connector - C#**
Editor Tool to parent-constrain one skeleton to another in order to retarget animations.
Iterates through skeletal hierarchy and makes proper constraints. Reduces human error and repetitive task. Allows for more modifications to rig without incurring risk or implementation cost. Scalable to all outsourced assets.

**Maya Scene Compositing Helper - Python**
Iterates through all selected objects in a scene and applies a specific rendering layer property for composite rendering. 
Previously this required user to click each object and apply the property one by one for possibly hundreds of individual objects (every leaf).

---

## Image 9 — VFX

**Images:**
- gif of collectible orb bauble
- gif of lightning cloud
- gif of fuel can

**Character Status FX Shader**
Fully custom material overlay shader with various status FX applied to the character such as burning, impact flash, frozen, etc. gameplay script applies bool to character, and a helper script translates that to a parameter on the shader to enable/disable the FX. Can apply more than one FX at a time.

**Note:**
Mostly experience with Unity Shuriken and VFX Graph, but also some UE Cascade and Niagara knowledge. Some complex gameplay-tied systems included along with the implementation scripting work.

---

## Image 10 — Procedural Content / World

**Procedural environment decorators**
(Image of Alien Age tile decorators in-game)
(Image of decorator prefabs)
*Utilized only 3 rocks and 3 tree meshes, created 8 varieties of tilesets, and then applied random placement, rotation, and coloring in the world to create visual variety from very little resources.*

**Tree Sizer/Rotator/Tinter**
Small script placed on the prefab/bp of a single stylized tree asset to randomly apply position offset, scaling, rotation, and color grading to give much visual variety to quickly placed environment assets. Applies these properties to the object/actor instance upon placing in the level, for less overhead at runtime and more accurate placement visuals in editor.

---

## Image 11 — Rigging / Anim / TechAnim

- 3 Image cluster: original biped mech model *+* concept art of quadruped mech *=* quadruped mech model
- Gif of mech movement - *Kitbashed a biped mech into a quadruped to match the concept, then retargeted the legs anim to get a gallop. Aim constraints control the cockpit aim with player input, added bob dampening. Also wrote the controller aim script.*

- comparison between original and remodeled character model+rig - *Remodeled character from the original outsourced asset to match concept. Repainted skin weights. Wrote a tool to retarget packaged anims to the resized rig rather than refactor the anims - this was more scalable for our team.*

- Embedded video of Jerry's Rig

- Image of bloody bunny-splosion from Snuggles sacrifice cinematic - *In-Game Cinematic Sequence: Video Link*
*Animated in-engine in timeline sequencer except for the bunny's movements animated in Maya. Timed VFX, Sound, Anim, Camera, and gameplay cues.*

---

## Image 12 — Coding / Scripting

**C#:**
- Gameplay scripts (components) to control animation based on ...
- VFX/Shader control components triggered by gameplay moments

**Python:**
- Automate Maya helper scripts
- EUW csv output node

**Blueprint + Editor Utility Widgets:**
- Debugging blueprints for VFX and TDiA
- Asset Validator EUWs

**Claude Code:**
- HTML browsable table with filter and sort extracted from multi-page PDF data.
- Collaboration framework with skills to mitigate common Claude Code issues across long or subsequent sessions, improves accuracy and problem solcing capabilities. 
- This portfolio!

---

## Notes for review

- "TDIA" in skills list (Image 2) — unsure what this abbreviation means
  - This means "Tech Design in Animation". It may not be a common enough industry term to include here. This Miro resume draft was designed for internal use at Epic Games where TDiA was a known term. 
