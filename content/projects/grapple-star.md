---
title: Grapple Star
description: >-
  Grapple Star — technical art work by Jovian Finch Nordgren. DoF transparency
  fix, Level Select UI, and VFX on a Unity space action game.
studio: Left Turn Studios
role: Lead Technical Artist
dates: 2021–2023 (demo)
engine: Unity
order: 3
card:
  blurb: >-
    A dual-camera fix for Unity's depth-of-field transparency problem, a
    from-scratch Level Select UI, and gameplay VFX on a space action demo.
  image: https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/gstitle-orig_orig.png
hero:
  src: https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/dof-after_orig.png
  alt: Grapple Star after the fix — sharp foreground VFX composited over a depth-of-field blurred background
  caption: after the fix — sharp foreground VFX over DoF-blurred background
  meta: Unity · Cinemachine
  draft: true
tools:
  - Unity
  - Cinemachine
  - Unity Post-Processing Stack
  - Unity Particle System
extraTags:
  - C#
skills:
  - id: lighting
    highlight: Depth-of-Field Transparency Fix
    anchor: dof
    detail: >-
      Dual-camera Cinemachine composite: background renders with full
      post-processing including DoF, foreground camera renders VFX layer with
      post-processing disabled — sharp foreground particles over blurred
      background, correct depth relationships preserved
  - id: ui
    highlight: Level Select Screen
    anchor: level-select-ui
    detail: >-
      Full scene built from scratch: 3D objects, particle systems, procedurally
      animated 2D elements; scripted UI canvas with clickable planet selection;
      text fields and scene elements populated and toggled based on selection
      state. Concept art by Rowan Sherwin
  - id: ui
    highlight: Dynamic Targeting Reticle
    anchor: level-select-ui
    detail: >-
      Reticle appearance driven by gameplay state (target availability) rather
      than sprite swapping
  - id: procedural
    highlight: Procedural UI Animation
    anchor: level-select-ui
    detail: >-
      Procedurally animated 2D elements in the Level Select UI scene
  - id: vfx
    highlight: Ship & Pickup VFX
    anchor: other-vfx
    detail: >-
      Ship boost effects with reactive jet trails, collectible pickups,
      environmental ambience
---

Grapple Star is a space action game in development at Left Turn Studios, built in
Unity. I was lead Technical Artist on the project alongside the Snuggles and Alien
Age work. The most technically interesting problem on this project was a rendering
issue with how Unity handles depth-of-field and transparent VFX — a fairly common
pain point that required an unconventional solution.

<h2 id="dof" class="project-section">Depth-of-Field Transparency Fix</h2>

The game's camera used depth-of-field post-processing to give the background a sense
of depth. The problem: Unity's DoF implementation applies the blur pass to the entire
scene before compositing transparent geometry. VFX particles — which are transparent
— get caught in the blur even when they're in the foreground, close to the camera.
The result was foreground VFX that looked soft and disconnected from the action,
or disappeared into the background blur entirely.

<div class="plate-pair">

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/dof-before_orig.png", "before — foreground VFX caught in DoF blur", "Unity Post-Processing", true %}

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/dof-after_orig.png", "after — VFX rendered sharp, background blurred", "dual-camera composite", true %}

</div>

Disabling DoF entirely wasn't acceptable — the visual depth it produced was part
of the game's look. Adjusting the DoF parameters to preserve transparent objects
wasn't a viable option in Unity's post-processing stack without losing the
background blur. The standard workarounds (render layer sorting, depth prepass
tricks) didn't fully solve it for particle systems with varying depth.

The solution was to split the rendering into two cameras using Cinemachine's
camera blending and a custom composite output. The background camera renders the
scene geometry with full post-processing including depth-of-field. A second
foreground camera renders only the VFX layer with post-processing disabled —
the particles get no blur pass at all. The two outputs are composited at the
end of the frame. The foreground VFX render on top, sharp, regardless of what
the background DoF is doing.

The main challenge was making sure depth relationships stayed correct across the
two cameras — particles that should occlude background geometry still needed to
be occluded by foreground geometry closer to the camera. This required careful
depth texture sharing between the cameras and explicit layer mask configuration
so each camera knew exactly what to render. Once that was right, the system was
stable and didn't require changes as new VFX were added.

<h2 id="level-select-ui" class="project-section">Level Select UI</h2>

The level select screen was built entirely from scratch — no purchased assets or
pre-built framework. The scene composites 3D objects, particle systems, and
procedurally animated 2D elements. I built and assembled all the assets, scripted
the UI canvas with clickable objects and actions, and wrote the script to populate
text fields and enable/disable scene elements based on which planet was selected.
Concept art by Rowan Sherwin.

{% figblock "level select UI screenshots and concept art", "pending" %}
Level select UI screenshots and concept art — pending
{% endfigblock %}

[Watch the Level Select UI walkthrough on Vimeo &rarr;](https://vimeo.com/827111068)

The targeting reticle was also dynamic — it changed appearance based on target
availability, driven by gameplay state rather than sprite swapping.

<h2 id="other-vfx" class="project-section">Other VFX Work</h2>

The project also included a range of gameplay VFX: ship boost effects with reactive
jet trails, collectible pickups, and environmental ambience.

<div class="plate-pair">

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/ship-boost_orig.gif", "ship boost VFX", "Unity Particle System", true %}

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/collect-web3_orig.gif", "collectible pickup VFX trail", "Unity Particle System", true %}

</div>
