---
title: Relic
description: >-
  Relic — DigiPen capstone technical art by Jovian Finch Nordgren. Custom
  atmosphere shaders, engine-level collaboration, and production leadership in
  Zero Engine.
studio: Synaptic Sugar (DigiPen capstone)
role: Technical Artist
dates: July 2014 – May 2015
engine: DigiPen Zero Engine
order: 6
card:
  blurb: >-
    All visual technical work on a DigiPen capstone that pushed Zero Engine
    past its documented limits — award winner, exhibited at PAX West 2015.
  image: https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/7734644_1.png
hero:
  src: https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/7734644_1.png
  alt: Relic game screenshot showing environment art, lighting, and visual systems
  caption: environment art, lighting, and custom visual systems
  meta: Zero Engine
  draft: true
tools:
  - DigiPen Zero Engine
  - Maya
  - 3DS Max
  - ZBrush
  - Photoshop
extraTags:
  - Environment Art
  - Technical Direction
extraBlocks:
  - title: Recognition
    lines:
      - "First Place: Best Spoken Dialog"
      - "First Place: Best Characters"
      - 2015 DigiPen Student Showcase
      - Exhibited at PAX West 2015
skills:
  - id: shaders
    highlight: Atmosphere Shaders in Zero Engine
    anchor: visual-systems
    detail: >-
      Atmospheric scattering faked with depth values and fog density curves in
      an engine with no atmosphere or post-processing system; pushed past
      documented engine limits by working directly with the chief engineer on
      engine-level changes
  - id: lighting
    highlight: All Visual Systems
    anchor: visual-systems
    detail: >-
      All visual technical systems in Zero Engine — FX, lighting, atmospherics,
      materials, rendering and asset pipelines; worked with chief engineer on
      engine-level rendering changes
---

Relic was my capstone project at DigiPen, built by the team Synaptic Sugar using
DigiPen's in-house Zero Engine — a 3D action adventure game that was one of the
most technically ambitious projects attempted in that engine at the time. I owned
all of the visual technical work and pushed the engine well past its documented
limits to meet the game's visual goals.

The project won First Place for Best Spoken Dialog and Best Characters at the 2015
DigiPen Student Showcase and was exhibited at PAX West 2015.

<h2 id="visual-systems" class="project-section">Visual Systems</h2>

Zero Engine had no atmosphere or post-processing system. To achieve the atmospheric
depth the game needed, I built custom shaders that faked atmospheric scattering using
depth values and fog density curves. The engine's material system wasn't designed for
this kind of use, so the shaders had to work around several documented limitations —
in some cases, treating material parameters as proxy inputs for calculations the
engine wasn't exposing directly.

<div class="plate-pair">

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/6351350_1_orig.png", "custom atmosphere and lighting", "Zero Engine", true %}

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/8438926_1_orig.png", "FX and atmospheric effects", "Zero Engine", true %}

</div>

The full scope of visual work: FX, lighting, atmospherics, materials, rendering
and asset pipelines, rigging, character model, and environment art placement.
This was sole ownership across every visual system on a large team project —
the kind of scope that requires understanding the constraints of every adjacent
system well enough to know when something needs to escalate and when it can be
worked around.

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/3005894_1_orig.jpg", "character and environment detail", "Zero Engine", true %}

<h2 id="engine-collaboration" class="project-section">Working with the Engine</h2>

Several of the project's visual goals ran directly into documented engine
limitations. Rather than working around them indefinitely, I went directly to
the chief engineer to understand what was actually blocking each goal and whether
a solution was possible at the engine level. I came with specific descriptions of
what I needed to achieve and proposals for what engine changes might enable it.
He implemented several of those changes during production as a result — changes
that benefited other teams using the engine after our project shipped.

This is a pattern that shows up in the QA work too: finding the systemic cause
rather than patching the symptom, and communicating it to whoever can actually
fix it. The DigiPen work was where that habit started.

<h2 id="leadership" class="project-section">Production Leadership</h2>

Midway through production, the team was struggling with unified direction across
a large group. I led a strike team that re-evaluated scope, identified what was
actually achievable, and helped transition the team to a structure where
department leads had collaborative ownership rather than waiting for top-down
direction. The team stabilized and shipped.
