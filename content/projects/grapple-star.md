---
title: Grapple Star
description: "Grapple Star: technical art work by Jovian Finch Nordgren. DoF transparency fix, Level Select UI, and VFX on a Unity space action game."
studio: Left Turn Studios
role: Technical Artist
dates: 2022–2023 (demo)
engine: Unity
order: 3
card:
  label: "Left Turn Studios · 2022–2023"
  blurb: "Space navigation game with a grapple mechanic. Environment, VFX, post-processing, ship model, procedurally generated background, level select UI."
  image: https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/gstitle-orig_orig.png
  alt: "Grapple Star title screen"
  tags:
    - "Post-Processing"
    - "VFX"
    - "Unity"
hero:
  src: https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/dof-after_orig.png
  alt: Grapple Star after the fix, with sharp foreground VFX composited over a depth-of-field blurred background
  caption: after the fix, sharp foreground VFX over DoF-blurred background
  meta: Unity · Cinemachine
  draft: true
# Header meta, tags, and sidebar: restored verbatim from the hand-written site.
meta:
  - label: "Studio"
    value: "Left Turn Studios"
  - label: "Role"
    value: "Technical Artist"
  - label: "Dates"
    value: "2022–2023 (demo)"
  - label: "Engine"
    value: "Unity"
headerTags:
  - "Unity"
  - "Cinemachine"
  - "Post-Processing"
  - "VFX"
  - "Rendering"
  - "UI Scripting"
  - "C#"
sidebar:
  - title: "Tools"
    items:
      - "Unity"
      - "Cinemachine"
      - "Unity Post-Processing Stack"
      - "Unity Particle System"
  - title: "Skills"
    items:
      - "Rendering pipeline"
      - "Camera compositing"
      - "Post-processing"
      - "VFX"
      - "UI scripting"
      - "Technical problem-solving"
  - title: "Project"
    lines:
      - "Left Turn Studios"
      - "2022–2023 (demo)"
      - "Technical Artist"
# Skills-page entries: the original labels, wording, links, and order.
skills:
  - id: vfx
    label: "Grapple Star"
    href: "/portfolio/grapple-star/"
    rank: 2
    detail: "Ship thruster VFX with reactive jet trails and boost glow on the ship shader; grapple beam VFX and state machine; collectible pickups"
  - id: lighting
    label: "Grapple Star / Depth-of-Field Fix"
    href: "/portfolio/grapple-star/#dof"
    rank: 2
    detail: "Two cameras composited with Cinemachine: the background renders with post-processing including DoF, the foreground renders separately, so transparent VFX stay sharp over a blurred background, correct depth relationships preserved"
  - id: procedural
    label: "Grapple Star"
    href: "/portfolio/grapple-star/#level-select-ui"
    rank: 2
    detail: "Procedurally animated 2D elements in the Level Select UI scene"
  - id: ui
    label: "Grapple Star / Level Select Screen"
    href: "/portfolio/grapple-star/#level-select-ui"
    rank: 1
    detail: "Full scene built from concept art: 3D objects, particle systems, procedurally animated 2D elements; scripted UI canvas with clickable planet selection; text fields and scene elements populated and toggled based on selection state. Concept art by Rowan Sherwin"
  - id: ui
    label: "Grapple Star / Dynamic Targeting Reticle"
    href: "/portfolio/grapple-star/"
    rank: 2
    detail: "Reticle UI that changes depending on available targets"
---

Grapple Star is a top-down space navigation game with a grapple mechanic, built in
Unity at Left Turn Studios and taken to a playable demo. Players pilot a ship with
only thruster control and a grapple beam: grappling an asteroid or a piece of debris
lets them pivot around it and change direction through an obstacle course. The team
was a concept artist and me, covering modeling, environment, UI, and tech art.

My contributions: the ship model with a custom shader, ship thruster VFX with wings
that glow on the ship's shader when boosting, the grapple beam VFX and state machine,
lighting and post-processing, a procedural environment, the camera setup, the reticle
UI, and the level select screen.

<h2 id="dof" class="project-section">Depth-of-Field Transparency Fix</h2>

Transparent objects with smooth alpha aren't written to depth (with limited
exceptions), so a depth-of-field effect blurs them as if they were far away, no matter
where they actually are. That forces a concession: either the transparent VFX or the
depth of field suffers.

<div class="plate-pair">

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/dof-before_orig.png", "before, with foreground VFX caught in DoF blur", "Unity Post-Processing", true %}

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/dof-after_orig.png", "after, with VFX rendered sharp and the background blurred", "dual-camera composite", true %}

</div>

To keep the background blur and the sharp foreground VFX, I used two cameras. One
renders the background with post-processing; the second renders only the foreground.
Cinemachine composites the two, using layer tags on a parent game object and only the
plugin's native functionality.

<h2 id="level-select-ui" class="project-section">Level Select UI</h2>

I created the assets and composed the level select screen, including its scripting.
It combines 3D objects, particle systems, and procedurally animated 2D elements, all
made by me from concept art by Rowan Sherwin. I set up the UI canvas with clickable
objects and actions, and wrote the script that fills in the text fields and turns
scene elements on and off based on which planet is selected.

[Watch the Level Select UI walkthrough on Vimeo &rarr;](https://vimeo.com/827111068)

The targeting reticle also changes depending on which targets are available.

<h2 id="other-vfx" class="project-section">Other VFX Work</h2>

Gameplay VFX included the ship's reactive jet trails and boosters, the grapple beam,
and collectible pickups.

<div class="plate-pair">

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/ship-boost_orig.gif", "ship boost VFX", "Unity Particle System", true %}

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/collect-web3_orig.gif", "collectible pickup VFX trail", "Unity Particle System", true %}

</div>
