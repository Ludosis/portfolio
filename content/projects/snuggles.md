---
title: Snuggles the Unicorn
description: "Snuggles the Unicorn: technical art work by Jovian Finch Nordgren. A full URP conversion, performance-first shaders, and puppet rig retargeting on a Unity action game."
studio: Left Turn Studios
role: Technical Artist
dates: 2022–2023 (canceled)
engine: Unity
order: 2
card:
  label: "Left Turn Studios · 2022–2023"
  blurb: "Unity action game built performance-first. Shaders, VFX, rigging, animation, and tooling, including a full URP conversion with every shader rebuilt."
  image: https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/screenshot-2023-01-03-084039_orig.jpg
  alt: "Snuggles the Unicorn screenshot showing the game environment and character"
  tags:
    - "URP"
    - "HLSL"
    - "Rigging"
    - "C#"
    - "Unity"
hero:
  src: https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/screenshot-2023-01-03-084039_orig.jpg
  alt: Snuggles the Unicorn screenshot showing the game environment with character and enemy
  caption: in-game environment with character and enemy
  meta: Unity · URP
  draft: true
# Header meta, tags, and sidebar: restored verbatim from the hand-written site.
meta:
  - label: "Studio"
    value: "Left Turn Studios"
  - label: "Role"
    value: "Technical Artist"
  - label: "Dates"
    value: "2022–2023 (canceled)"
  - label: "Engine"
    value: "Unity"
headerTags:
  - "Unity Shader Graph"
  - "HLSL"
  - "Material Property Blocks"
  - "Rigging"
  - "C#"
  - "Editor Scripting"
  - "VFX"
  - "Animation Pipeline"
sidebar:
  - title: "Tools"
    items:
      - "Unity"
      - "Shader Graph"
      - "Unity Animation Rigging"
      - "C# editor scripting"
      - "Maya"
      - "Substance Painter"
  - title: "Skills"
    items:
      - "Rendering pipeline conversion"
      - "Vertex shader authoring"
      - "Material Property Blocks"
      - "Gameplay-driven shaders"
      - "Constraint-based rigging"
      - "Animation retargeting"
      - "Editor scripting"
      - "VFX"
      - "Cinematic sequencing"
  - title: "Project"
    lines:
      - "Left Turn Studios"
      - "2022–2023"
      - "Technical Artist"
# Skills-page entries: the original labels, wording, links, and order.
skills:
  - id: shaders
    label: "Snuggles the Unicorn / Wing Vertex Shader"
    href: "/portfolio/snuggles/#wing-shader"
    rank: 2
    detail: "Replaced a heavy skeletal wing rig with a GPU vertex shader; per-instance phase randomization via Material Property Blocks so every enemy flaps independently, with zero extra draw calls"
  - id: shaders
    label: "Snuggles the Unicorn / Status FX Shader"
    href: "/portfolio/snuggles/"
    rank: 3
    detail: "Single overlay shader handling all character status states (burning, frozen, impact flash); toggled by bools from gameplay script via a helper component; multiple states simultaneously active"
  - id: vfx
    label: "Snuggles the Unicorn"
    href: "/portfolio/snuggles/"
    rank: 3
    detail: "Fuel refill timers driven by gameplay script via shader parameters; enemy spawn effects; collectible pickups; character celebration states"
  - id: lighting
    label: "Snuggles the Unicorn / URP Conversion"
    href: "/portfolio/snuggles/"
    rank: 1
    detail: "Full standard-renderer-to-URP conversion: every shader rebuilt from scratch, batch material conversion scripted, lighting and post-processing rebuilt, outsourced store assets cleaned up to match pipeline"
  - id: rigging
    label: "Snuggles the Unicorn / Puppet Rig & Retargeting"
    href: "/portfolio/snuggles/#puppet-rig"
    rank: 1
    detail: "Puppet rig for a player character redesign: the original rig and animations drive rotation constraints on the new rig, so no animations had to be remade; editor tool rebuilds the constraints after model updates; biped-to-quadruped mech kitbash with an aim-driven swivel and a mouse and controller aim script"
  - id: tools
    label: "Snuggles the Unicorn / Rig Rebuild Utility"
    href: "/portfolio/snuggles/#puppet-rig"
    rank: 2
    detail: "Editor tool that walks the skeletal hierarchy and reconnects the puppet rig constraints automatically, replacing hundreds of manual clicks"
  - id: scripting
    label: "C# / Unity"
    href: "/portfolio/snuggles/"
    rank: 1
    detail: "Puppet rig constraint rebuild utility; controller aim script; status FX helper component; gameplay-to-shader parameter bridge; batch material conversion script for URP migration"
---

Snuggles the Unicorn was a Unity action game at Left Turn Studios, picked up from an
externally developed prototype. My team inherited the project and built on it. The
team was small: a concept artist, outsourced art from the Unity asset store, and me
for tech art and implementation, with a second Technical Artist joining later for
lighting and PCG level layout. The project was eventually shelved, but it produced
significant work across rendering, shaders, rigging, animation, and tooling. The
biggest piece was a full conversion to Unity's Universal Render Pipeline. Mobile was
one of the target platforms from the start, so performance shaped the technical
choices from day one: the render pipeline, the kinds of effects, and procedural or
shader-driven solutions in place of heavy skeletal rigs.

<h2 id="urp" class="project-section">URP Conversion</h2>

The project came with Unity's standard renderer and needed a full conversion to the
Universal Render Pipeline. This wasn't a settings change: it meant recreating every
shader under the new rendering model, scripting a batch conversion of the materials,
and rebuilding the lighting and post-processing. The outsourced store assets also
needed cleanup and modification to work in the new pipeline and match the project's
visual direction.

<h2 id="wing-shader" class="project-section">Shader-Driven Enemy Wings</h2>

The character designs gave every enemy wings, but the enemies were pre-made store
assets, and adding wings to their rigs would have meant reworking rigs and animations
across the board. I tested the obvious route first: rigged wings parent-constrained
to a shoulder bone, using a $5 store asset to check feasibility. It looked great, but
a heavy skeletal rig on every enemy wouldn't hold up with a screen full of them, let
alone on mobile hardware. So I pivoted to a vertex shader before the rig went any
further, taking a cue from the schools of fish in Abzu.

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/wing-demo_orig.gif", "shader-driven wing flap, independent movement per instance", "Unity · Shader Graph", true %}

The wings are a simple placeholder mesh (easy to swap for a polished model) with a
custom shader that drives the flap, including controls for flap speed. They're made
as separate left and right pieces so they can be scaled and positioned for each
enemy. A script sets the flap per enemy through Material Property Blocks, driven by
gameplay: the enemy's velocity, whether it's alive, and more.

Because the motion was based on time, every enemy at first flapped in perfect unison,
which looked unnatural. I added a reusable Material Index property that gives each
instance a random number and passes it to the shader, again through a Material
Property Block, to offset its timing. The result had the look, believability, and
performance we needed, and scaled to every enemy that needed wings.

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/flap-shader_orig.png", "wing flap vertex shader node network", "Shader Graph", true %}

One open issue remained when the project ended: the wings conflicted with the
character outline effect that shows enemies behind obstacles, and I was working on a
fix.

<h2 id="puppet-rig" class="project-section">Puppet Rig Retargeting System</h2>

One of the project's major challenges was updating the player character to new
concept art without remaking the animations that came with the original store asset.
The rig's proportions changed, and the animations had position keyframes, so they
couldn't simply be reused. I remodeled the character to match the concept, repainted
the skin weights, and built a puppet rig system: the original rig and animations run
without a skinned mesh and drive rotation constraints on the new rig and mesh. Since
only one model's skinned vertices are driven, the performance cost was negligible,
and not recreating the animations was a major budget saving. I also split the new
mesh into parts so they could be swapped for character customization.

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/snuggles-update-rig_orig.png", "original model and rig next to the updated version", "Unity", true %}

The constraints had to be broken and reconnected several times as the model was
updated, so I wrote an editor tool that walks the skeletal hierarchy and makes the
connections automatically: faster, and without the user error of hundreds of manual
clicks.

<h2 id="mech" class="project-section">Quadruped Mech</h2>

A quadruped mech prototype built from a biped mech's model and animations. I
kitbashed the biped's parts into the quad shape and built a skeletal rig that is
driven in Unity by constraints from the original biped, mapping its walk to the
front and back legs for a gallop. The upper body is a swivel that turns with the aim
direction and lets the body bob without moving the cockpit, using a particular
skeletal hierarchy combined with Unity's hierarchy and constraints. I also wrote the
cockpit aim scripts for both mouse and controller, linked into the existing control
system. Weapons attach at spawn based on the player's loadout.

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/mech-demo-clip_orig.gif", "quadruped mech galloping with retargeted biped animation", "Unity", true %}

<h2 id="status-fx" class="project-section">Character Status FX Shader</h2>

Enemies needed visual feedback for gameplay states like burning, impact flash, and
frozen. I built a single custom overlay shader for all of them: gameplay script sets
a bool on the character, and a helper script turns it into a shader parameter that
enables or disables the effect. More than one effect can be active at a time.

<h2 id="other-vfx" class="project-section">Other VFX</h2>

A library of VFX built for this project and carried into later ones as prototype
building blocks, including a fuel refill timer driven by gameplay script through
shader parameters, collectibles, and celebration effects.

<div class="plate-pair">

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/fuel-spawner-crop.gif", "fuel spawner collectible VFX", "Unity Particle System", true %}

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/snuggles-confetti-crop-gif.gif", "confetti celebration VFX", "Unity Particle System", true %}

</div>

<h2 id="cinematic" class="project-section">Portal Cutscene</h2>

The project's hell portal opening cutscene was inherited and built on. My additions:
the bunny's rising and exploding animation (animated in Maya), sound effects, the
skull mesh (shaded with vertex colors so a triplanar splatter texture could be applied
at runtime), blood splatter VFX and decals, and the unicorn's animation trigger. I
also built the portal opening VFX from parts of an asset used elsewhere in the
project.

[Watch the cutscene on Vimeo &rarr;](https://vimeo.com/827089176)

<h2 id="tools" class="project-section">Editor Tools</h2>

Besides the puppet rig tool, a Scene Composer component: placed in a master scene, it
loads additional scene and level assets automatically in the level editor. It sped up
iteration while keeping assets separate in source control, which cut down on people
overwriting each other's work and on misalignment errors.
