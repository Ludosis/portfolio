# Review queue (for a computer session)

Everything Claude parked for Jovi to review at a computer, in one place. Check items
off or delete them as they're settled. Newest additions at the bottom of each section.

## Merged, awaiting your review

- [ ] **Teamfight Tactics page** (`/portfolio/teamfight-tactics/`): first full build.
  Placeholder calls to confirm:
  - Page order: first in the portfolio.
  - Skills page: Riot entries sit at the top of Tools, QA, Rigging & Animation, and
    Scripting (rank 1; existing ranks untouched, Riot wins ties).
  - On the home page as the "AI-Guided Fixers" Featured card (no image yet).
  - The "Working in Devin" paragraph mentions sharing findings with Cognition; earlier
    review notes flagged it as the most internal-sounding part.
  - New terms worked in: "auto fixers" (intro), "orchestration layer" (Devin section),
    "Agent orchestration" (sidebar).
- [ ] **Snuggles page:** URP conversion now leads (intro, "URP Conversion" heading, card
  blurb and tags, page description), then the mech section (moved first since).
  Intro says mobile was one of the target platforms from the start, so performance
  shaped choices from day one. Wing section is "Shader-Driven Enemy Wings": a store wing
  rig was tried in prototyping, judged too costly for a screen full of enemies, and
  replaced by the shader before going further. No shipped or benchmarked
  performance claims. `headerTags` and sidebar (your restored fields) still lead with
  shader terms; change if you want URP there too.
- [ ] **About page:** "Currently..." paragraph now says "building auto fixers, tools
  that support agentic workflows, and an agentic AI framework for artists and Tech
  Artists". QA paragraphs reframed (mindset first, QA honed it).
- [ ] **How I Work page:** "Working with people" paragraph reframed the same way.
- [ ] **Everything else in this branch's site pass:** identity wording with Riot,
  Left Turn credits (solo TA until a second joined on Snuggles), Destiny NPC wording, Lego wording, Alien Age and
  Earlier Work scripting attribution, placeholders removed, llms.txt contact section,
  wing card off the home page, new link-preview image, one-click print button.

- [ ] **Portfolio card blurbs** rewritten to one shape: what the project or job was,
  then areas of focus, then one highlight if meaningful. Tweak wording as you like.
  Cinemachine card tags were dropped (cards say "Unity"); the Grapple Star DoF story
  still names Cinemachine.

- [ ] **Accuracy pass against the Weebly write-ups and Miro (Oct 2026).** Rewritten
  from your own text, removing invented detail: Alien Age (fog, water, VFX, asset
  pipeline, lighting, team), Snuggles (wings, puppet rig, mech, cutscene, tools; dates
  now 2022–2023 per Weebly), Grapple Star (DoF explanation, contributions; dates
  2022–2023), Destiny 2 (owls, sea monster, Vex NPC, bee hive, test engineering),
  Relic (role, no "sole owner of every visual system", awards dropped, leadership
  story), Earlier Work (221B is an environment exploration with a paintover, not prop
  modeling), Lego Fortnite (triage tool story from your account; platforms and
  scalability work added from Miro). Skills entries corrected to match.
- [x] Tree Sizer/Rotator/Tinter is Snuggles (moved; Alien Age's foliage generator is a
  separate tool).
- [x] "Zero extra draw calls" was generated in the April site build, not your writing;
  dropped.
- [x] The mech is the player character's battle form (unicorn on foot in town), so the
  puppet rig card's mech gif fits. Snuggles page now says so.

## Decisions for you

- [x] DoF composite: Grapple Star, and it did use Cinemachine (keep it in that story).
  Cinemachine was used more on Snuggles; cards just say "Unity".
- [x] The "externally developed prototype" paragraph is Snuggles. Alien Age was
  internal; Jovi joined it midway and did the visual overhaul. Pages updated.
- [x] Destiny 2: reframed as hackathon projects (two one-week hackathons, 2017 and 2018,
  both shipped). Site Role "Hackathon projects", dates "2017, 2018" (not a range);
  resume subheading "Hackathon Projects: Destiny 2 Ambient Life (2017, 2018)".
- [x] **Alien Age lighting:** Jovi owned lighting but didn't author it all from scratch.
  Skills entry now reads "Lighting for four times of day, iterating on the base
  lighting schemes" (from Weebly). Resume "Owned all shaders, VFX, lighting, and
  materials" stays: still true (Jovi's call).
- [x] Alien Age is 3D (page fixed). Grapple Star described as top-down space navigation.

- [ ] **How I Work with AI:** draft at `_source/drafts/how-i-work-with-ai.md` for you to
  rewrite. Decide the nav label, and where "Working with people" and "Working with
  technology" go (About, trimmed, or kept).
- [x] **Home page Featured:** now 4 cards you chose (TFT guided fixers, Snuggles mech,
  Alien Age procedural variety, Destiny 2 sea monster). Only TFT lacks an image.
- [ ] **Open items from the October audit:** `_source/audits/version-audit-2026-10-06.md`
  and its copy comparison (bring back any rebuild wording you prefer).

- [ ] **Home hero animation:** the `wing_flap.vert` sine-wave plate was a design flourish;
  it doesn't show real work. Consider replacing it with something that does.

## Needs your files or knowledge

- [ ] **Miro restructure:** the text conversion lost the project and skill blocks, so
  attributions drawn from it are unreliable. Plan: Claude extracts the text, you
  reformat it into markdown with the right grouping, then fix the site from it.
- [ ] **Factual review:** the Weebly-era pages were checked in the Oct 2026 accuracy
  pass. Still unchecked against a source of yours: the About page, How I Work, and the
  machine-facing copy (llms.txt, `site.yaml` summary, structured-data skills list).
  Claude lists suspect claims with sources; you rule.
- [ ] **Images:** download the originals from Weebly so the site stops hotlinking them
  (about 40 links across 7 files, including a home Featured card; if Weebly goes down,
  they all break). Replace unpolished ones (the wing demo flaps backwards).
- [ ] **Earlier Work:** verify the figure captions (educated guesses from file names);
  Jerry's Rig video link; 221B Baker Street image.
- [ ] **Print check calibration:** your Mac and Android wrap text wider than the
  checker's browser. One real print compared line by line would let the check match.

## Later

- [ ] Downloadable PDF of the resume: decide whether to offer one (a public PDF can't
  carry email or phone without publishing them).
- [ ] Domain email aliases (then update `site.yaml`).

## Ideas (Claude's, Oct 2026; none started, take or leave)

- [ ] **TFT card image without clearance:** a diagram instead of a screenshot. For
  example the guided-fixer split (scripts gather, the agent judges against written
  criteria, a person decides on the review board). Drawn from scratch, no game assets.
- [ ] **Hero replacement, together with its labels:** the hero readouts ("amplitude 24",
  "zero bone cost"), the "Portfolio · est. 2014 · rev 3.0" kicker, and the 404 page's
  "amplitude dropped to zero" joke all belong to the wing-flap hero. They're invented
  copy (listed in the October audit), so they should change when the hero does.
- [ ] **Broken-link check in the build or a scheduled workflow:** external links
  (Steam, YouTube, Weebly images until they're moved) can die silently. Report only,
  never block the deploy, like the print check.
- [ ] **Alt text pass after the images work:** several alt texts are generic ("custom
  lighting and VFX"); rewrite them to describe what each image actually shows.
- [ ] **Per-project link previews:** every page shares one preview image; project
  pages could use their hero image when shared on LinkedIn or Slack.
- [ ] **How I Work "This site" paragraph** (HIGH in the October audit): still entirely
  Claude's copy. Fold into the How I Work with AI rewrite.
