---
title: "Destiny 2: Ambient Life"
description: "Destiny 2 Ambient Life: 3D character work by Jovian Finch Nordgren at Bungie. Shipped ambient NPCs including owls and the Titan sea monster."
studio: Bungie
role: 3D Generalist (embedded in QA)
dates: 2017–2018
order: 5
card:
  label: "Bungie · 2017–2018"
  blurb: "3D generalist work embedded in QA: modeled, rigged, and animated the owls in the Farm social space and the sea monster on Titan. Shipped in Destiny 2."
  image: https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/published/destiny-2_1.jpg?1574273847
  alt: "Destiny 2 screenshot featuring the Farm social space environment"
  tags:
    - "Maya"
    - "Rigging"
    - "Character Animation"
    - "VFX"
hero:
  src: https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/published/destiny-2_1.jpg?1574273847
  alt: Destiny 2 environment screenshot showing the Farm social space
  caption: the Farm social space
  meta: Destiny 2 · shipped
  draft: true
# Header meta, tags, and sidebar: restored verbatim from the hand-written site.
meta:
  - label: "Studio"
    value: "Bungie"
  - label: "Role"
    value: "3D Generalist (embedded in QA)"
  - label: "Dates"
    value: "2017–2018"
  - label: "Title"
    value: "Destiny 2, Curse of Osiris, Forsaken"
headerTags:
  - "Maya"
  - "3DS Max"
  - "Modeling"
  - "Rigging"
  - "Skinning"
  - "Character Animation"
  - "VFX"
sidebar:
  - title: "Tools"
    items:
      - "Maya"
      - "3DS Max"
      - "Photoshop"
      - "Bungie internal tools"
  - title: "Skills"
    items:
      - "Character modeling"
      - "Rigging & skinning"
      - "Character animation"
      - "VFX"
      - "UV layout"
  - title: "Role"
    lines:
      - "Bungie, Inc."
      - "May 2015 – May 2019"
      - "Test Engineer / 3D Generalist"
# Skills-page entries: the original labels, wording, links, and order.
skills:
  - id: vfx
    label: "Destiny 2"
    href: "/portfolio/destiny-2/"
    rank: 4
    detail: "Interactive beehive obstacle prototype VFX; sea monster ambient effects"
  - id: rigging
    label: "Destiny 2"
    href: "/portfolio/destiny-2/"
    rank: 2
    detail: "Modeled, rigged, and animated shipped characters: owls (Farm social space), sea monster (Titan); reactive NPC with custom animations and VFX"
  - id: tools
    label: "Bungie"
    href: "/portfolio/destiny-2/"
    rank: 4
    detail: "Debug config tool for internal use; test engineering infrastructure on live service titles"
  - id: qa
    label: "Bungie"
    href: "/portfolio/destiny-2/"
    rank: 3
    detail: "QA to Test Engineer progression on live service titles; test infrastructure and coverage tooling"
---

I joined Bungie in 2015 as a QA tester on Destiny: The Taken King and moved into
a Test Engineer role in 2017. Alongside the QA work, I took on a 3D generalist
project: designing, modeling, rigging, and animating ambient life characters for
Destiny 2. These are the background characters that populate social spaces and
environment areas: not gameplay-critical, but meaningful to the sense that the
world is inhabited.

<h2 id="shipped" class="project-section">Shipped Characters</h2>

Two characters shipped: the owls in the Farm social space, and the sea monster
visible from the Titan environment. Both went through the full character pipeline
(concept reference, modeling, UV layout, rigging, skinning, and animation) and
shipped in Destiny 2 at launch.

<div class="plate-pair">

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/owl-01_1_orig.jpg", "Farm owls, shipped in Destiny 2", "Maya · full character pipeline" %}

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/sea_monster_rings.png", "sea monster on Titan, shipped in Destiny 2", "Maya · full character pipeline" %}

</div>

The owls needed to feel like real birds in a space that players would visit
repeatedly, so the idle animations had to hold up to extended observation without
reading as loops. The sea monster needed to feel massive and distant: the
animation had to read clearly at the scale it was viewed from, on a creature
that players would never get close to.

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/seamonster-03_1_orig.jpg", "sea monster in the Titan environment", "Destiny 2", true %}

<h2 id="prototypes" class="project-section">Prototype Work</h2>

Beyond the shipped characters, the project included two prototype pieces that
didn't make the final game: a reactive NPC with custom animations and VFX that
responded to player proximity, and an interactive beehive obstacle designed for
a demo environment. The beehive had destruction states, a swarm VFX response,
and gameplay-driven behavior hooks.

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/beehive-01_orig.jpg", "interactive beehive obstacle prototype (did not ship)", "swarm VFX response · destruction states" %}

<h2 id="qa-engineering" class="project-section">QA Engineering Work</h2>

The rest of my time at Bungie was as a QA and test engineer: mapping content
workflows to find systemic failure points, analyzing runtime memory in high-risk
areas, and building tools for the QA team. The debug config tool I built during
this period let testers trigger public event completion at any reward tier on
demand, enabling reward and audio testing that had previously been too
time-consuming. The audio team picked it up independently; it was a pattern
I'd see repeated later at Epic.
