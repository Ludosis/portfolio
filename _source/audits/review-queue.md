# Review queue (for a computer session)

Everything Claude parked for Jovi to review at a computer, in one place. Check items
off or delete them as they're settled. Newest additions at the bottom of each section.

## On the working branch now (not merged)

- [ ] **Teamfight Tactics page** (`/portfolio/teamfight-tactics/`): first full build.
  Placeholder calls to confirm:
  - Page order: first in the portfolio.
  - Skills page: Riot entries sit at the top of Tools, QA, Rigging & Animation, and
    Scripting (rank 1; existing ranks untouched, Riot wins ties).
  - Not on the home page Featured cards yet (no image).
  - The "Working in Devin" paragraph mentions sharing findings with Cognition; earlier
    review notes flagged it as the most internal-sounding part.
  - New terms worked in: "auto fixers" (intro), "orchestration layer" (Devin section),
    "Agent orchestration" (sidebar).
- [ ] **Snuggles page:** URP conversion now leads (intro, "URP Conversion" heading, card
  blurb and tags, page description). Intro says the game was planned for mobile from the
  start, so performance shaped choices from day one. Wing section is "Shader-Driven Enemy
  Wings": a store wing rig was tried in prototyping, judged too costly for 40 enemies on
  screen, and replaced by the shader before going further. No shipped or benchmarked
  performance claims. `headerTags` and sidebar (your restored fields) still lead with
  shader terms; change if you want URP there too.
- [ ] **About page:** "Currently..." paragraph now says "building auto fixers, tools
  that support agentic workflows, and an agentic AI framework for artists and Tech
  Artists". QA paragraphs reframed (mindset first, QA honed it).
- [ ] **How I Work page:** "Working with people" paragraph reframed the same way.
- [ ] **Everything else in this branch's site pass:** identity wording with Riot,
  Left Turn credits (sole TA), Destiny NPC wording, Lego wording, Alien Age and
  Earlier Work scripting attribution, placeholders removed, llms.txt contact section,
  wing card off the home page, new link-preview image, one-click print button.

- [ ] **Portfolio card blurbs** rewritten to one shape: what the project or job was,
  then areas of focus, then one highlight if meaningful. Tweak wording as you like.
  Cinemachine card tag moved from Grapple Star to Snuggles.

- [ ] **Accuracy pass against the Weebly write-ups and Miro (Oct 2026).** Rewritten
  from your own text, removing invented detail: Alien Age (fog, water, VFX, asset
  pipeline, lighting, team), Snuggles (wings, puppet rig, mech, cutscene, tools; dates
  now 2022–2023 per Weebly), Grapple Star (DoF explanation, contributions; dates
  2022–2023), Destiny 2 (owls, sea monster, Vex NPC, bee hive, test engineering),
  Relic (role, no "sole owner of every visual system", awards dropped, leadership
  story), Earlier Work (221B is an environment exploration with a paintover, not prop
  modeling), Lego Fortnite (triage tool story from your account; platforms and
  scalability work added from Miro). Skills entries corrected to match.
- [ ] **Tree Sizer/Rotator/Tinter:** in the Miro skill block, not tied to a project; the
  site still lists it under Alien Age (Skills page, scripting). Right project?
- [ ] **Snuggles wing Skills entry** says "with zero extra draw calls" (your restored
  wording). In URP, per-object Material Property Blocks can break SRP batching, so
  that claim may not hold. Keep, reword, or drop?
- [ ] **Home Featured "Puppet Rig Retargeting" card** uses the quadruped mech gif, but
  the text describes the player character redesign. Pick a matching image or text.

## Decisions for you

- [x] DoF composite: Grapple Star, and it did use Cinemachine (keep it in that story).
  Cinemachine was used more on Snuggles; cards just say "Unity".
- [x] The "externally developed prototype" paragraph is Snuggles. Alien Age was
  internal; Jovi joined it midway and did the visual overhaul. Pages updated.
- [x] Destiny 2: reframed as hackathon projects (two one-week hackathons, 2017 and 2018,
  both shipped). Site Role "Hackathon projects", dates "2017, 2018" (not a range);
  resume subheading "Hackathon Projects: Destiny 2 Ambient Life (2017, 2018)".
- [ ] **Alien Age lighting:** Jovi helped with lighting but didn't create it. Still
  claimed in the Skills entry ("Full lighting and post-processing setup; all
  environment materials and lighting authored from scratch") and the resume ("Owned all
  shaders, VFX, lighting, and materials on Alien Age").
- [x] Alien Age is 3D (page fixed). Grapple Star described as top-down space navigation.

- [ ] **How I Work with AI:** draft at `_source/drafts/how-i-work-with-ai.md` for you to
  rewrite. Decide the nav label, and where "Working with people" and "Working with
  technology" go (About, trimmed, or kept).
- [ ] **Home page Featured:** now 3 cards (one sits alone on desktop). Pick stronger
  work, ideally with images. Riot and the Snuggles URP conversion are candidates.
  You also said the depth-of-field card isn't your most impressive.
- [ ] **Open items from the October audit:** `_source/audits/version-audit-2026-10-06.md`
  and its copy comparison (bring back any rebuild wording you prefer).

## Needs your files or knowledge

- [ ] **Miro restructure:** the text conversion lost the project and skill blocks, so
  attributions drawn from it are unreliable. Plan: Claude extracts the text, you
  reformat it into markdown with the right grouping, then fix the site from it.
- [ ] **Factual review:** compare every page against the old Weebly site, the earliest
  git versions, and what you know. Claude lists suspect claims with sources; you rule.
- [ ] **Images:** download the originals from Weebly so the site stops hotlinking them.
  Replace unpolished ones (the wing demo flaps backwards).
- [ ] **Earlier Work:** verify the figure captions (educated guesses from file names);
  Jerry's Rig video link; 221B Baker Street image.
- [ ] **Print check calibration:** your Mac and Android wrap text wider than the
  checker's browser. One real print compared line by line would let the check match.

## Later

- [ ] Downloadable PDF of the resume: decide whether to offer one (a public PDF can't
  carry email or phone without publishing them).
- [ ] Domain email aliases (then update `site.yaml`).
