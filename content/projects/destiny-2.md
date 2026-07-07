---
title: Destiny 2 — Ambient Life
description: >-
  Destiny 2 Ambient Life — 3D character work by Jovian Finch Nordgren at
  Bungie. Shipped ambient NPCs including owls and the Titan sea monster.
studio: Bungie
role: 3D Generalist (embedded in QA)
dates: 2017–2018
order: 5
extraMeta:
  - label: Title
    value: Destiny 2, Curse of Osiris, Forsaken
card:
  blurb: >-
    Shipped ambient life characters — the Farm owls and the Titan sea monster —
    modeled, rigged, and animated alongside QA engineering work.
  image: https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/published/destiny-2_1.jpg?1574273847
hero:
  src: https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/published/destiny-2_1.jpg?1574273847
  alt: Destiny 2 environment screenshot showing the Farm social space
  caption: the Farm social space
  meta: Destiny 2 · shipped
  draft: true
tools:
  - Maya
  - 3DS Max
  - Photoshop
  - Bungie internal tools
extraTags:
  - Modeling
  - Skinning
  - UV Layout
skills:
  - id: rigging
    highlight: Shipped Ambient Characters
    anchor: shipped
    detail: >-
      Modeled, rigged, and animated shipped characters: owls (Farm social
      space), sea monster (Titan); reactive NPC prototype with custom
      animations and VFX
  - id: vfx
    highlight: Beehive & Ambient VFX
    anchor: prototypes
    detail: >-
      Interactive beehive obstacle prototype with destruction states and swarm
      VFX response; sea monster ambient effects
  - id: tools
    highlight: Debug Config Tool
    anchor: qa-engineering
    detail: >-
      Debug config tool letting testers trigger public event completion at any
      reward tier on demand — adopted independently by the audio team
  - id: qa
    highlight: Test Engineering
    anchor: qa-engineering
    detail: >-
      QA to Test Engineer progression on live service titles; content workflow
      mapping to find systemic failure points; runtime memory analysis in
      high-risk areas
---

I joined Bungie in 2015 as a QA tester on Destiny: The Taken King and moved into
a Test Engineer role in 2017. Alongside the QA work, I took on a 3D generalist
project: designing, modeling, rigging, and animating ambient life characters for
Destiny 2. These are the background characters that populate social spaces and
environment areas — not gameplay-critical, but meaningful to the sense that the
world is inhabited.

<h2 id="shipped" class="project-section">Shipped Characters</h2>

Two characters shipped: the owls in the Farm social space, and the sea monster
visible from the Titan environment. Both went through the full character pipeline —
concept reference, modeling, UV layout, rigging, skinning, and animation — and
shipped in Destiny 2 at launch.

<div class="plate-pair">

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/owl-01_1_orig.jpg", "Farm owls — shipped in Destiny 2", "Maya · full character pipeline" %}

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/sea_monster_rings.png", "sea monster on Titan — shipped in Destiny 2", "Maya · full character pipeline" %}

</div>

The owls needed to feel like real birds in a space that players would visit
repeatedly, so the idle animations had to hold up to extended observation without
reading as loops. The sea monster needed to feel massive and distant — the
animation had to read clearly at the scale it was viewed from, on a creature
that players would never get close to.

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/seamonster-03_1_orig.jpg", "sea monster in the Titan environment", "Destiny 2", true %}

<h2 id="prototypes" class="project-section">Prototype Work</h2>

Beyond the shipped characters, the project included two prototype pieces that
didn't make the final game: a reactive NPC with custom animations and VFX that
responded to player proximity, and an interactive beehive obstacle designed for
a demo environment. The beehive had destruction states, a swarm VFX response,
and gameplay-driven behavior hooks.

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/beehive-01_orig.jpg", "interactive beehive obstacle prototype — did not ship", "swarm VFX response · destruction states" %}

<h2 id="qa-engineering" class="project-section">QA Engineering Work</h2>

The rest of my time at Bungie was as a QA and test engineer — mapping content
workflows to find systemic failure points, analyzing runtime memory in high-risk
areas, and building tools for the QA team. The debug config tool I built during
this period let testers trigger public event completion at any reward tier on
demand, enabling reward and audio testing that had previously been too
time-consuming. The audio team picked it up independently; it was a pattern
I'd see repeated later at Epic.
