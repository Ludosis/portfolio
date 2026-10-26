---
title: Alien Age
description: "Alien Age: technical art work by Jovian Finch Nordgren. Custom shaders, VFX, lighting, and asset optimization on a shipped Unity title."
studio: Left Turn Studios
role: Technical Artist (sole TA)
dates: 2021 · Released on Steam
engine: Unity
order: 1
card:
  label: "Left Turn Studios · 2021"
  blurb: "Visual overhaul of an indie game ahead of its Steam release. Shaders, VFX, materials, asset optimization, and lighting support, plus a procedural foliage placement tool."
  image: https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/ss-fa8a63c8499d48e67ed6ffbde6064ffe99b5cd2c_orig.jpg
  alt: "Alien Age screenshot showing the game's environment with custom lighting and VFX"
  tags:
    - "Shader Graph"
    - "VFX"
    - "Lighting"
    - "Asset Optimization"
hero:
  src: https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/ss-fa8a63c8499d48e67ed6ffbde6064ffe99b5cd2c_orig.jpg
  alt: Alien Age screenshot showing the game environment with custom shaders, lighting, and VFX
  caption: in-game environment with custom shaders, lighting, and VFX
  meta: Unity · Steam release
  draft: true
# Header meta, tags, and sidebar: restored verbatim from the hand-written site.
meta:
  - label: "Studio"
    value: "Left Turn Studios"
  - label: "Role"
    value: "Technical Artist (sole TA)"
  - label: "Released"
    value: "2021 · Steam"
  - label: "Engine"
    value: "Unity"
headerTags:
  - "Shader Graph"
  - "HLSL"
  - "VFX"
  - "Lighting"
  - "Asset Optimization"
  - "Retopology"
  - "Texturing"
  - "Unity"
  - "Python"
sidebar:
  - title: "Tools"
    items:
      - "Unity 2020"
      - "Shader Graph"
      - "Unity Particle System"
      - "Maya"
      - "ZBrush"
      - "Substance Painter"
      - "Photoshop"
  - title: "Skills"
    items:
      - "Shader authoring"
      - "VFX"
      - "Lighting"
      - "Retopology"
      - "Texture atlas optimization"
      - "Editor tooling"
      - "Pipeline documentation"
  - title: "Project"
    lines:
      - "Left Turn Studios"
      - "Released on Steam, 2021"
      - "Sole Technical Artist"
# Skills-page entries: the original labels, wording, links, and order.
skills:
  - id: shaders
    label: "Alien Age"
    href: "/portfolio/alien-age/"
    rank: 1
    detail: "Stylized water; horizon fog on an inverted-normal sphere that hides the water's edge without hiding the skybox; ground tile color variation seeded by world position, with blend color, strength, and contrast controls"
  - id: vfx
    label: "Alien Age"
    href: "/portfolio/alien-age/"
    rank: 1
    detail: "All of the game's VFX, including the tractor beam and its gameplay states, and cloud lightning"
  - id: lighting
    label: "Alien Age"
    href: "/portfolio/alien-age/"
    rank: 3
    detail: "Lighting for four times of day, iterating on the base lighting schemes; shaders and materials for every asset"
  - id: tools
    label: "Alien Age / Foliage Placement Tool"
    href: "/portfolio/alien-age/"
    rank: 1
    detail: "Editor-time foliage tool (designed and iterated on; scripted by an engineer) that places and rotates tileset prefabs so the world doesn't look duplicated; runs in the editor to keep load times down; documented so level designers could regenerate foliage after layout changes"
  - id: procedural
    label: "Alien Age"
    href: "/portfolio/alien-age/"
    rank: 1
    detail: "Eight foliage tileset variants arranged and recolored from three rock and three tree models, for a procedural generator to place and rotate, so the world doesn't look repetitive"
---

Alien Age is a 3D Unity game released on Steam in 2021. It started as a short
team-building project: ship a game in a few months as a proof of concept for a
startup studio. We published as Indie Wizards, which became Left Turn Studios when
the company formally incorporated in 2022, and I went on to Snuggles the Unicorn and
Grapple Star there. The team was small: a concept artist, a 3D modeler and animator,
and me for tech art and implementation.

I joined partway through development and overhauled the game's visuals from where
they stood. I had a hand in nearly every visual improvement, the main exception
being the UI: all VFX, shaders and materials for every asset, lighting for the game's
four times of day (iterating on the base lighting schemes), the spaceship rig and
animation implementation, asset optimization, and procedural environment variety.

<h2 id="shaders" class="project-section">Shaders</h2>

The game's look leaned on a few custom shaders built in Unity Shader Graph. A
stylized water shader covers the ocean around the terrain islands.

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/watersurface.png", "stylized water shader", "Shader Graph", true %}

A horizon fog shader obscures the edge of the water without hiding the skybox. It's
applied to a large sphere with inverted normals, and I liked the result better than
Unity's built-in fog.

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/fog-volume-shader-sm_orig.gif", "horizon fog shader", "Shader Graph", true %}

A color-variation shader tints the ground tiles randomly, seeded by each tile's world
position, with properties for the blend color, strength, and contrast. Every tile
that shares the material still gets its own tint, with no extra material instances.

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/tiles-color_orig.png", "world-position-seeded tile color variation", "Shader Graph", true %}

<h2 id="vfx" class="project-section">VFX</h2>

All of the game's VFX, built in Unity's particle system, including the tractor beam
and its gameplay states, and the cloud lightning.

<div class="plate-pair">

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/beam-drop-fulllength.gif", "tractor beam, drop state", "Unity Particle System", true %}

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/clouds-lightning.gif", "cloud lightning", "Unity Particle System", true %}

</div>

<h2 id="asset-pipeline" class="project-section">Asset Optimization</h2>

Optimization covered retopology and mesh cleanup, indexed textures, and custom
shaders and materials written to reduce texture lookups.

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/env-tiles.png", "environment tiles and decorators", "Maya · Unity", true %}

<h2 id="procedural" class="project-section">Procedural Environment Tools</h2>

The team had three rocks and three trees, modeled by another artist, and the world
needed to not look repetitive. I arranged, recolored, and placed them into eight
foliage tileset variants for a procedural generator to choose from. I designed the
generator, set its requirements for the engineer who scripted it, then iterated on it
with them, trying each version and giving feedback until it was ready for use. It
iterates through the layout prefabs and places and rotates them, so the world gets variety without looking duplicated.
It runs in the editor rather than at runtime to keep load times down. Because some
gameplay tiles are placed procedurally at runtime, the foliage sits on a separate
object that turns off for those tiles, so nothing overlaps.

Unity's prefab cloning meant the foliage had to be cleared and regenerated whenever
the prefabs changed, which also made it easy to iterate on shaders, materials,
layouts, and physics. I documented the tool so level designers could regenerate the
foliage themselves when the world layout changed.
