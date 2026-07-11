---
title: Alien Age
description: >-
  Alien Age — technical art work by Jovian Finch Nordgren. Custom shaders,
  VFX, lighting, and asset optimization on a shipped Unity title.
studio: Left Turn Studios
role: Technical Artist (sole TA)
dates: 2021–2022 · Released on Steam
engine: Unity
order: 1
card:
  blurb: >-
    Sole TA on a shipped Steam title — all shaders, VFX, lighting, and the
    full asset pipeline from raw geometry to in-engine.
  image: https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/ss-fa8a63c8499d48e67ed6ffbde6064ffe99b5cd2c_orig.jpg
hero:
  src: https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/ss-fa8a63c8499d48e67ed6ffbde6064ffe99b5cd2c_orig.jpg
  alt: Alien Age screenshot showing the game environment with custom shaders, lighting, and VFX
  caption: in-game environment — custom shaders, lighting, and VFX
  meta: Unity · Steam release
  draft: true
tools:
  - Unity 2020
  - Shader Graph
  - Unity Particle System
  - Maya
  - ZBrush
  - Substance Painter
  - Photoshop
extraTags:
  - Retopology
  - Texture Atlases
skills:
  - id: shaders
    highlight: Water, Fog & Tile Shaders
    anchor: shaders
    detail: >-
      Water surface (world-space UV, eliminates tiling artifacts on irregular
      terrain); volumetric fog (depth texture sampling, height-responsive
      density); environment tile color-variation (world-position seeded, eight
      tileset varieties from three source meshes)
  - id: vfx
    highlight: Beam & Lightning VFX
    anchor: vfx
    detail: >-
      Beam pickup/drop and cloud lightning — continuous energy column from
      discrete particles; timing synced to gameplay events without hardcoded
      delays
  - id: lighting
    highlight: Full Lighting & Post
    anchor: shaders
    detail: >-
      Full lighting and post-processing setup; all environment materials and
      lighting authored from scratch
  - id: tools
    highlight: Foliage Placement Tool
    anchor: procedural
    detail: >-
      Editor-time placement tool (collaborated with engineer): runs
      distribution logic in-editor, bakes as placed instances — zero runtime
      cost. Documented so level designers could regenerate placements
      independently after level changes
  - id: procedural
    highlight: Tree Sizer/Rotator/Tinter
    anchor: procedural
    detail: >-
      Editor-time foliage placement with randomized position, scale, rotation,
      and color at placement time — three rock meshes and three tree meshes
      produced eight distinct tileset varieties with no additional asset
      authoring
  - id: scripting
    highlight: Python — Maya & Pipeline
    anchor: procedural
    detail: >-
      Maya scripts for compositing and asset pipeline tasks; foliage placement
      tool (collaborated with engineer); Tree Sizer/Rotator/Tinter script
---

Alien Age is a 2D action game released on Steam through Left Turn Studios.
The project originated as a one-month game jam before expanding into a full release.
I joined as the sole Technical Artist before the studio formally incorporated —
starting as a revenue-share contributor under the name Indie Wizards, continuing
through Left Turn Studios' incorporation in early 2022, and shipping the title the
same year. The work covered everything visual and technical: all shaders, all VFX,
all lighting, all materials, and the full asset pipeline from raw geometry to in-engine.

<h2 id="shaders" class="project-section">Shaders</h2>

The three shaders that defined the game's look were all custom-built in Unity Shader
Graph. The water surface shader uses world-space UV coordinates so the flow pattern
stays consistent regardless of how geometry is oriented or placed — tiling artifacts
from UV-based approaches were a problem on irregular terrain, and the world-space
approach eliminated them completely.

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/watersurface.png", "water surface shader — consistent world-space UV flow", "Shader Graph", true %}

The volumetric fog shader fakes atmospheric depth using depth texture sampling — the
engine had no built-in atmosphere system, so this had to be authored from scratch.
The fog density and color respond to world height, giving the environments a sense
of scale that flat post-process fog can't produce.

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/fog-volume-shader-sm_orig.gif", "volumetric fog — atmospheric depth from depth-texture sampling", "Shader Graph", true %}

The environment tile color-variation shader seeds per-tile color offsets from world
position. This lets identical tile geometry read as organic and varied in the scene
without needing unique texture variants for every tile type. The color range is
bounded so variation stays readable as a single material rather than looking
like mismatched assets.

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/tiles-color_orig.png", "world-position-seeded tile color variation", "Shader Graph", true %}

<h2 id="vfx" class="project-section">VFX</h2>

All VFX were built in Unity's particle system. The beam pickup, beam drop, and
cloud lightning effects were the most technically involved — the beam had to
read as a continuous energy column while being composed of discrete particles,
and timing had to sync to gameplay events without hardcoded delays.

<div class="plate-pair">

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/beam-drop-fulllength.gif", "beam drop — energy beam from UFO", "Unity Particle System", true %}

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/clouds-lightning.gif", "cloud lightning", "Unity Particle System", true %}

</div>

<h2 id="asset-pipeline" class="project-section">Asset Pipeline</h2>

The full asset pipeline was owned from the start. Geometry went through retopology
to hit polygon budgets without visual loss on the most visible surfaces. Textures
were organized into indexed atlases to cut texture lookup count — a meaningful
optimization for mobile-adjacent hardware targets. The approach let the game run
at target frame rate with the visual quality the art direction required.

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/env-tiles.png", "environment tiles — optimized geometry and atlas layout", "Maya · Unity", true %}

<h2 id="procedural" class="project-section">Procedural Environment Tools</h2>

Late in production, level designers needed a way to populate environments with
foliage without paying the runtime cost of a procedural system running in-game.
I collaborated with an engineer to build an editor-time placement tool: it ran
the distribution logic in the Unity editor and baked the result as placed instances,
so the in-game cost was the same as hand-placed assets. The tool was documented
so level designers could regenerate placements independently after level changes
without coming back to engineering or tech art.

The visual variety the tool produced came from a companion script — a Tree
Sizer/Rotator/Tinter placed on the tree prefab itself. When an instance was placed
in the level, the script randomized position offset, scale, rotation, and color
grading automatically. The result: three rock meshes and three tree meshes produced
eight distinct tileset varieties with no additional asset authoring. Properties were
applied at placement time rather than at runtime, keeping overhead minimal and
giving accurate visual feedback in the editor.
