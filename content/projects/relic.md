---
title: Relic
description: "Relic: DigiPen capstone technical art by Jovian Finch Nordgren. Visual systems, engine-limit work, and First Place at the 2015 DigiPen Student Showcase."
studio: Synaptic Sugar (DigiPen capstone)
role: Technical Artist
dates: July 2014 – May 2015
engine: DigiPen Zero Engine
order: 6
card:
  label: "Synaptic Sugar / DigiPen · 2014–2015"
  blurb: "DigiPen capstone in Zero Engine. Owned all visual technical work and pushed the engine past its documented limits. First Place at 2015 DigiPen Student Showcase; exhibited at PAX West."
  image: https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/7734644_1.png
  alt: "Relic game screenshot showing environment art and lighting"
  tags:
    - "Shader Authoring"
    - "Lighting"
    - "VFX"
    - "Technical Direction"
hero:
  src: https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/7734644_1.png
  alt: Relic game screenshot showing environment art, lighting, and visual systems
  caption: environment art, lighting, and custom visual systems
  meta: Zero Engine
  draft: true
# Header meta, tags, and sidebar: restored verbatim from the hand-written site.
meta:
  - label: "Team"
    value: "Synaptic Sugar (DigiPen capstone)"
  - label: "Role"
    value: "Technical Artist"
  - label: "Dates"
    value: "July 2014 – May 2015"
  - label: "Engine"
    value: "DigiPen Zero Engine"
headerTags:
  - "Shader Authoring"
  - "Lighting"
  - "VFX"
  - "Rigging"
  - "Environment Art"
  - "Technical Direction"
  - "Engine Collaboration"
sidebar:
  - title: "Tools"
    items:
      - "DigiPen Zero Engine"
      - "Maya"
      - "3DS Max"
      - "ZBrush"
      - "Photoshop"
  - title: "Skills"
    items:
      - "Shader authoring"
      - "Lighting"
      - "VFX"
      - "Rigging"
      - "Environment art"
      - "Pipeline design"
      - "Engine collaboration"
  - title: "Recognition"
    lines:
      - "First Place: Best Spoken Dialog"
      - "First Place: Best Characters"
      - "2015 DigiPen Student Showcase"
      - "Exhibited at PAX West 2015"
  - title: "Project"
    lines:
      - "Synaptic Sugar"
      - "DigiPen capstone"
      - "July 2014 – May 2015"
# Skills-page entries: the original labels, wording, links, and order.
skills:
  - id: shaders
    label: "Relic"
    href: "/portfolio/relic/"
    rank: 4
    detail: "Atmospheric and visual shading in Zero Engine; pushed past documented engine limits by working directly with the chief engineer on engine-level changes"
  - id: lighting
    label: "Relic"
    href: "/portfolio/relic/"
    rank: 4
    detail: "All visual technical systems in Zero Engine; worked with chief engineer on engine-level rendering changes"
---

Relic was my capstone project at DigiPen, built by the team Synaptic Sugar using
DigiPen's in-house Zero Engine. It was a 3D action adventure game and one of the
most technically ambitious projects attempted in that engine at the time. I owned
all of the visual technical work and pushed the engine well past its documented
limits to meet the game's visual goals.

The project won First Place for Best Spoken Dialog and Best Characters at the 2015
DigiPen Student Showcase and was exhibited at PAX West 2015.

<h2 id="visual-systems" class="project-section">Visual Systems</h2>

Zero Engine had no atmosphere or post-processing system. To achieve the atmospheric
depth the game needed, I built custom shaders that faked atmospheric scattering using
depth values and fog density curves. The engine's material system wasn't designed for
this kind of use, so the shaders had to work around several documented limitations,
in some cases treating material parameters as proxy inputs for calculations the
engine wasn't exposing directly.

<div class="plate-pair">

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/6351350_1_orig.png", "custom atmosphere and lighting", "Zero Engine", true %}

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/8438926_1_orig.png", "FX and atmospheric effects", "Zero Engine", true %}

</div>

The full scope of visual work: FX, lighting, atmospherics, materials, rendering
and asset pipelines, rigging, character model, and environment art placement.
This was sole ownership across every visual system on a large team project:
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
He implemented several of those changes during production as a result, changes
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
