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
- [ ] **Snuggles page:** URP conversion now leads (intro sentence, "URP Conversion"
  heading, card blurb and tags, page description). The wing shader section is now
  "Mobile Optimization: Enemy Wings". Confirm the mobile framing is accurate, including
  "especially on mobile hardware". Removed a claim that the bone rig made wings flap in
  sync (the sync problem was the shader's, solved by Material Property Blocks).
  `headerTags` and sidebar (your restored fields) still lead with shader terms; change
  if you want URP there too.
- [ ] **About page:** "Currently..." paragraph now says "building auto fixers, tools
  that support agentic workflows, and an agentic AI framework for artists and Tech
  Artists". QA paragraphs reframed (mindset first, QA honed it).
- [ ] **How I Work page:** "Working with people" paragraph reframed the same way.
- [ ] **Everything else in this branch's site pass:** identity wording with Riot,
  Left Turn credits (sole TA), Destiny NPC wording, Lego wording, Alien Age and
  Earlier Work scripting attribution, placeholders removed, llms.txt contact section,
  wing card off the home page, new link-preview image, one-click print button.

## Decisions for you

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
