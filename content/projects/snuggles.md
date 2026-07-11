---
title: Snuggles the Unicorn
description: >-
  Snuggles the Unicorn — technical art work by Jovian Finch Nordgren. Wing
  vertex shader system, URP conversion, and puppet rig retargeting on a Unity
  action game.
studio: Left Turn Studios
role: Lead Technical Artist
dates: 2021–2023 (canceled)
engine: Unity
order: 2
card:
  blurb: >-
    Wing vertex shaders, a constraint-based retargeting rig that survived
    repeated model redesigns, and a full URP conversion on a Unity action game.
  image: https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/screenshot-2023-01-03-084039_orig.jpg
hero:
  src: https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/screenshot-2023-01-03-084039_orig.jpg
  alt: Snuggles the Unicorn screenshot showing the game environment with character and enemy
  caption: in-game environment with character and enemy
  meta: Unity · URP
  draft: true
tools:
  - Unity
  - Shader Graph
  - Unity Animation Rigging
  - C# editor scripting
  - Maya
  - Substance Painter
extraTags:
  - Material Property Blocks
  - HLSL
skills:
  - id: shaders
    highlight: Wing Vertex Shader System
    anchor: wing-shader
    detail: >-
      Replaced 32-bone-per-enemy wing rig with a GPU vertex shader;
      per-instance phase randomization via Material Property Blocks so every
      enemy flaps independently — zero extra draw calls
  - id: shaders
    highlight: Character Status FX Shader
    anchor: status-fx
    detail: >-
      Single overlay shader handling all character status states (burning,
      frozen, impact flash); toggled by bools from gameplay script via a helper
      component; multiple states simultaneously active
  - id: lighting
    highlight: URP Rendering Conversion
    anchor: urp
    detail: >-
      Full standard-renderer-to-URP conversion: every shader rebuilt from
      scratch, batch material conversion scripted, lighting and post-processing
      rebuilt, outsourced store assets cleaned up to match pipeline
  - id: rigging
    highlight: Puppet Rig & Retargeting
    anchor: puppet-rig
    detail: >-
      Constraint-based retargeting system for mid-production character redesign
      — old skeleton drives new skeleton in real time, full animation library
      transferred immediately; scripted constraint rebuild utility; biped-to-
      quadruped mech kitbash with aim constraints and bob dampening
  - id: tools
    highlight: Rig Rebuild Utility
    anchor: puppet-rig
    detail: >-
      Scripted constraint reconnection that rebuilt the full rig from saved
      configuration in seconds; Maya compositing helper scripts
  - id: vfx
    highlight: Gameplay VFX
    anchor: other-vfx
    detail: >-
      Fuel refill timers driven by gameplay script via shader parameters; enemy
      spawn effects; collectible pickups; character celebration states
  - id: scripting
    highlight: C# — Unity
    anchor: puppet-rig
    detail: >-
      Puppet rig constraint rebuild utility; controller aim script; status FX
      helper component; gameplay-to-shader parameter bridge; batch material
      conversion script for URP migration
---

Snuggles the Unicorn was a Unity action game in development at Left Turn Studios.
I was lead Technical Artist with a second TA joining partway through for lighting
and PCG level layout. The project was eventually shelved, but it produced significant
technical work across rendering, shaders, rigging, animation, and tooling.

<h2 id="urp" class="project-section">Rendering System Refactor</h2>

The project was inherited with Unity's standard renderer and needed a full conversion
to the Universal Render Pipeline. This wasn't a settings change — it required
recreating every shader from scratch under the new rendering model, scripting a batch
conversion of all materials, and rebuilding the lighting and post-processing setup.
Outsourced assets brought in from the Unity store also needed cleanup and modification
to work within the new pipeline and match the project's visual direction.

<h2 id="wing-shader" class="project-section">Wing Vertex Shader System</h2>

Each enemy type had wings — and the original rigged solution used 32 bones per
enemy to animate the flap. At low enemy counts this was fine. As the design
expanded to include larger waves, the rig cost became a real performance problem.
The bones also produced synchronized flapping: every enemy in a group moved
identically, which looked mechanical even at small counts.

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/wing-demo_orig.gif", "shader-driven wing flap, independent movement per instance", "Unity · Shader Graph", true %}

The replacement was a vertex shader that drives the wing flap entirely in the GPU
without bone evaluation. The flap motion is a sine wave applied to wing vertices,
with parameters for frequency, amplitude, and phase. The key piece was using Unity's
Material Property Blocks to set a randomized phase offset per enemy instance at
spawn time. This meant every enemy in a wave had its wings moving out of sync with
every other enemy — the same shader, zero additional draw calls, genuinely
independent motion.

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/flap-shader_orig.png", "wing flap vertex shader node network", "Shader Graph", true %}

The result: bone evaluation cost for wings dropped to zero, enemy counts could
scale without performance regression, and the motion looked more natural than
the rigged version had at any count.

<h2 id="puppet-rig" class="project-section">Puppet Rig Retargeting System</h2>

Mid-production, the player character model was redesigned. The new model had
different proportions and a different skeleton hierarchy than the original.
The existing animation library — representing a significant time investment —
was built for the old model. Recreating those animations from scratch wasn't
an option on the schedule.

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/mech-demo-clip_orig.gif", "mech character with retargeted animations on the redesigned model", "Unity Animation Rigging", true %}

The mech itself was a kitbash: an existing biped model was converted into a
quadruped to match concept art, with the leg animations retargeted to produce
a gallop. Aim constraints drive the cockpit to track with player input, with
bob dampening to keep it from feeling rigid. The controller aim script was
also written as part of this work.

The solution for the player character redesign was a constraint-based retargeting
system: the new model's bones are driven by constraints that read the old model's
animation data in real time. The old skeleton runs the animation; the new skeleton
follows via constraints, with per-bone offsets to account for proportion differences.
The full existing animation library worked on the new model immediately, with targeted
manual adjustments only where the proportion differences produced visible artifacts.

The more important part was what happened next. Every time the new model was updated
— which happened multiple times during production — the constraint connections broke
and had to be rebuilt. I scripted the constraint reconnection so it could be run as
an editor utility, rebuilding the full rig from a saved configuration in a few
seconds rather than manually reconnecting each bone. The script meant the rig
survived model updates without requiring tech art involvement every time.

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/snuggles-update-rig_orig.png", "puppet rig constraint structure and retargeting setup", "Unity inspector", true %}

<h2 id="status-fx" class="project-section">Character Status FX Shader</h2>

Enemy characters needed visual feedback for multiple gameplay states: burning,
impact flash, frozen, and others. Rather than separate materials per state, I built
a single custom overlay shader that handles all status effects, with each effect
toggled by a bool passed from gameplay script via a helper component that translates
gameplay state into shader parameters. Multiple effects can be active simultaneously.
The system was designed so adding a new status required only a new bool and a new
shader feature — no changes to the spawning or state management code.

<h2 id="other-vfx" class="project-section">Other VFX</h2>

The project also included a range of gameplay VFX: fuel refill timers driven by
gameplay script via shader parameters, enemy spawn effects, collectible pickups,
and character celebration states.

<div class="plate-pair">

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/fuel-spawner-crop.gif", "fuel spawner collectible VFX", "Unity Particle System", true %}

{% fig "https://jnordgren.weebly.com/uploads/1/8/1/1/18113149/snuggles-confetti-crop-gif.gif", "confetti celebration VFX", "Unity Particle System", true %}

</div>

<h2 id="cinematic" class="project-section">In-Game Cinematic</h2>

The project included an in-engine cinematic sequence animated in Unity's timeline
sequencer, with the bunny character's movements animated in Maya and brought in.
The sequence tied together VFX, sound, animation, camera, and gameplay state cues.

[Watch the cinematic sequence on Vimeo &rarr;](https://vimeo.com/827089176)
