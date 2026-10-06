# Editing the site

Every merge/commit to `main` triggers the GitHub Action, which rebuilds and
deploys in about a minute. You can edit any file directly on GitHub web,
no local tooling needed. (For local preview: `npm ci && npx @11ty/eleventy --serve`.)

## Text changes

Edit the markdown in `content/projects/*.md` (project pages) or the templates in
`content/pages/*.njk` (About, How I Work, Resume page chrome).

## The resume: one markdown file

`jovian-nordgren-resume.md` at the repo root is the resume. Edit it on GitHub (the
mobile site works fine) and the build updates all three versions: the web resume
(`/resume/`), the print version (`/resume/Resume.html`), and the downloadable
markdown (`/jovian-nordgren-resume.md`).

The format is the one the file already uses. Keep each job shaped like this:

```
### Title | Company | Location
**Month Year – Month Year**
*Project | Project*
*Optional second line, e.g. a contract or role history*

One intro paragraph.

- Bullet
- Bullet

**Lead: Rest (2017 – 2018)**

Optional sub-section paragraph (like the Destiny ambient life work).
```

- Spell months out in full in the dates line; the print version shortens them.
  A plain `-` between the dates is fine; it's converted to a proper dash.
- `|` separates parts and shows as `·` on the site. Spaces around it are optional.
- A job with no company is `### Title | Location` (see Freelance).
- Skills lines are `**Label:** item, item, item`. Education is a `**Degree**` line
  followed by the school line.

Print-only controls, written as comments that are invisible when GitHub displays
the file:

- `<!-- print: page 2 starts here -->` sits between two jobs and decides where the
  printed resume breaks onto sheet 2. Sheet 1 is the two-column layout (experience
  plus a profile and skills sidebar); everything after the marker prints on sheet 2.
- `<!-- print: hide -->` at the end of a bullet keeps that bullet off the printout
  while leaving it on the web resume and the markdown.

**The print version has to fit on two sheets, and nothing checks that
automatically yet.** Both sheets are close to full, so after an edit open
`/resume/Resume.html`, use print preview, and confirm it's still two pages.

If the file's structure breaks (a missing dates line, a misspelled section name),
the build stops with the line number, the live site stays as it was, and GitHub
emails you about the failed run. The Actions tab shows the message.

## Adding an image

In any project body, use the plate shortcode where you want the figure:

```
{% fig "/assets/img/my-shot.png", "caption text", "Unity · Shader Graph", true %}
```

- Arg 4 (`true`) adds the "draft, final asset TBD" label; omit it for final assets.
- Figures auto-number top to bottom (FIG. 01, 02, …); never number by hand.
  The front-matter `hero:` image is always FIG. 00.
- Host images in the repo: upload to `assets/img/` and reference as
  `/assets/img/filename.png`. (Weebly URLs still work but are meant to be replaced.)
- Two images side by side: wrap two `{% fig %}` calls in
  `<div class="plate-pair"> … </div>` (blank line after the opening div).

## Embedding Sketchfab / YouTube / Vimeo

Use the block variant with an iframe inside. Working Sketchfab examples are in
`content/projects/earlier-work.md`:

```
{% figblock "character model, interactive 3D", "Sketchfab" %}
<iframe title="..." src="https://sketchfab.com/models/MODEL_ID/embed"
        width="100%" height="400" frameborder="0" allowfullscreen loading="lazy"></iframe>
{% endfigblock %}
```

YouTube: `src="https://www.youtube.com/embed/VIDEO_ID"`.
Vimeo: `src="https://player.vimeo.com/video/VIDEO_ID"`.
A plain link works too: `[Watch on Vimeo →](https://vimeo.com/12345)`.

## Updating Earlier Work later

`content/projects/earlier-work.md` has placeholder plates marked "pending"
(Jerry's Rig video, 221B Baker Street image). Replace the `{% figblock %}`
placeholder with a real `{% fig %}` or an embed as above.

## Changing the hero image of a project

Edit the `hero:` block in that project's front matter (`src`, `caption`, `meta`,
`draft: true/false`).

## Adding a skill example (drives the Skills page)

Add an entry to the project's `skills:` front matter:

```yaml
  - id: shaders            # must exist in content/_data/skillsTaxonomy.yaml
    highlight: Short Name  # shown on skills page + project sidebar
    anchor: my-section     # must match an <h2 id="my-section"> in the body
    detail: One-sentence description shown on the skills page.
```

The Skills page, the project's tag list, and `/llms.txt` all regenerate from
this automatically. A typo'd `id` fails the build (on purpose).

## Adding a whole new project

Copy any file in `content/projects/`, change the front matter, set `order:`
(controls portfolio index position and prev/next links). Index cards, pagination,
llms.txt, and the sitemap all update automatically.

## Things never to do

- Don't put the phone number anywhere in the repo (it lives in the
  `CONTACT_PHONE` Actions secret only).
- Don't write a plain email address in any content file; the contact system
  assembles it at runtime.
- Don't edit the Skills page markup; it's generated.
