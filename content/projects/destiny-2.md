---
title: "Destiny 2: Ambient Life"
description: "Destiny 2 Ambient Life: 3D character work by Jovian Finch Nordgren at Bungie. Shipped ambient NPCs including owls and the Titan sea monster."
studio: Bungie
role: Hackathon projects
dates: 2017, 2018
order: 5
card:
  label: "Bungie · 2017, 2018"
  blurb: "Ambient life characters that shipped in Destiny 2: the owls in the Farm and the sea monster on Titan. Maya modeling, rigging, and animation, plus VFX."
  image: /assets/img/destiny-2/destiny-2_1.jpg
  alt: "Destiny 2 screenshot featuring the Farm social space environment"
  tags:
    - "Maya"
    - "Rigging"
    - "Character Animation"
    - "VFX"
ogImage: /assets/img/destiny-2/owl-01_1_orig.jpg
hero:
  src: /assets/img/destiny-2/destiny-2_1.jpg
  alt: Destiny 2 environment screenshot showing the Farm social space
  caption: the Farm social space
  meta: Destiny 2 · shipped
  draft: true
# Header meta, tags, and sidebar: restored verbatim from the hand-written site.
meta:
  - label: "Studio"
    value: "Bungie"
  - label: "Role"
    value: "Hackathon projects"
  - label: "Dates"
    value: "2017, 2018"
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
      - "Test Engineer"
      - "Ambient life: hackathon weeks, 2017 and 2018"
# Skills-page entries: the original labels, wording, links, and order.
skills:
  - id: vfx
    label: "Destiny 2"
    href: "/portfolio/destiny-2/"
    rank: 4
    detail: "Bee hive gameplay prototype with bee particle speed tied to the hive's health; sea monster model, shader, and setup"
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

I joined Bungie in 2015 as a QA tester on Destiny: The Taken King and moved into a
Test Engineer role in 2017. Bungie ran an annual hackathon week, Carnival, when
anyone could work on any project, and in 2017 and 2018 I spent mine teaming up with
character artists to make Destiny 2's world feel more alive with ambient creatures.
I produced them start to finish, including learning the tools, with a lead artist
giving art direction.

<h2 id="shipped" class="project-section">Shipped Characters</h2>

Two creatures shipped and are still in the live game: the owls in the Farm social
space and the sea monster on Titan.

<div class="plate-pair">

{% fig "/assets/img/destiny-2/owl-01_1_orig.jpg", "Farm owls, shipped in Destiny 2", "Destiny 2" %}

{% fig "/assets/img/destiny-2/seamonster-01.jpg", "sea monster on Titan, shipped in Destiny 2", "Destiny 2" %}

</div>

The owls were my first ambient life project. They appear in one of four possible
spots in the Farm. I modeled, rigged, animated, and UV'd them to fit an existing bird
texture for the prototype (another artist added the final texture and shader before
it shipped), and set them up to pick randomly from their idle animations. I also
designed them to react to players and fly away, but art direction wanted them
stationary, so that feature was cut.

<div class="plate-grid">

{% fig "/assets/img/destiny-2/owl-02.jpg", "Farm owl at night", "Destiny 2" %}

{% fig "/assets/img/destiny-2/owl-03.jpg", "Farm owl near an NPC", "Destiny 2" %}

{% fig "/assets/img/destiny-2/owl-04.jpg", "Farm owl indoors", "Destiny 2" %}

</div>

The sea monster came from wanting to see some life in Titan's oceans. I prototyped a
simple version, then finished it with art direction to fit the world. I designed,
modeled, rigged, and animated it, made its shader from existing textures, and did the
technical setup so it could be dropped into the engine and just work. Technically it's
simple and cheap: a roughly donut-shaped model with fins around the edge that rotates
and rises as if swimming, with three of them rising at separate intervals for a
serpentine look. The timing has to line up with the waves falling before it shows, so
it surfaces rarely, by design. Fans have filmed it, and it got its own lore video.

{% figblock "the sea monster surfacing on Titan", "YouTube" %}
<iframe title="Destiny 2 sea monster on Titan" src="https://www.youtube-nocookie.com/embed/RXbUjdlqwNM" style="width:100%; aspect-ratio:16/9; border:0;" allow="fullscreen; picture-in-picture" loading="lazy"></iframe>
{% endfigblock %}

<div class="plate-pair">

{% fig "/assets/img/destiny-2/seamonster-02.jpg", "sea monster surfacing", "Destiny 2" %}

{% fig "/assets/img/destiny-2/seamonster-03_1_orig.jpg", "sea monster in the Titan environment", "Destiny 2" %}

{% fig "/assets/img/destiny-2/seamonster-04.jpg", "sea monster behind the Titan NPC", "Destiny 2" %}

{% fig "/assets/img/destiny-2/sea_monster_rings.png", "the donut rings seen from below, in a player's video after glitching under the water", "YouTube screenshot" %}

</div>

<h2 id="prototypes" class="project-section">NPC and Prototype Work</h2>

A reactive Vex NPC built for a jump scare: I branched an existing NPC pattern so its
behavior and animations could be customized, added interactivity that triggers
animations based on player state and proximity, removed components it didn't need to
save memory, and made custom animation clips in Maya on the existing rig that blend
smoothly. A custom timeline sequence plays the clips based on the interactivity
state. I took feedback from the lead character animator, iterated the clips to the
style guide, and polished the asset to game-ready.

{% figblock "the Vex jump scare NPC, with an environment vignette for the demo", "YouTube" %}
<iframe title="Destiny 2 Vex jump scare NPC" src="https://www.youtube-nocookie.com/embed/yEeL0wUBt_4" style="width:100%; aspect-ratio:16/9; border:0;" allow="fullscreen; picture-in-picture" loading="lazy"></iframe>
{% endfigblock %}

An interactive bee hive designed for the Dreaming City: a gameplay prototype I
designed and implemented in one week to learn Bungie's VFX gameplay object workflow.
Shooting the hive agitates the bees (their particle speed is tied to the hive's
health) and deals damage over time to nearby players; enough damage and it explodes
into crystal shards that drop currency. I met nearly all of my stretch goals, wrote
the demo's encounter script to respawn it, and playtested it: players read it
intuitively, started shooting without prompting, and backed off when the bees started
hurting them. It didn't ship with Forsaken.

{% fig "/assets/img/destiny-2/beehive-01_orig.jpg", "interactive bee hive prototype (did not ship)", "Bungie tools" %}

<h2 id="qa-engineering" class="project-section">Test Engineering Work</h2>

My day job was test engineering on the Public Events team: studying content
workflows to find what caused issues and prevent them before they needed fixing,
analyzing runtime memory in high-risk areas, and building tools and documentation
for automated and manual testing. I became the point of contact for Public Events,
VFX, and runtime memory issues, and took part in and led agile rituals and bug triage
for the development team. The debug config tool I built let testers trigger public
event completion at any reward tier on demand, enabling testing that had been too
time-consuming to run by hand; the audio team adopted it on their own.
