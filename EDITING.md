# Editing the site

Every merge/commit to `main` triggers the GitHub Action, which rebuilds and
deploys in about a minute. You can edit any file directly on GitHub web —
no local tooling needed. (For local preview: `npm ci && npx @11ty/eleventy --serve`.)

## Text changes

Edit the markdown in `content/projects/*.md` (project pages) or the templates in
`content/pages/*.njk` (About, How I Work, Resume page chrome). The resume body
itself is `jovian-nordgren-resume.md` at the repo root.

⚠ Until resume unification: changes to `jovian-nordgren-resume.md` must be
mirrored by hand in `resume/Resume.html` (the print version).

## Adding an image

In any project body, use the plate shortcode where you want the figure:

```
{% fig "/assets/img/my-shot.png", "caption text", "Unity · Shader Graph", true %}
```

- Arg 4 (`true`) adds the "draft — final asset TBD" label; omit it for final assets.
- Figures auto-number top to bottom (FIG. 01, 02, …) — never number by hand.
  The front-matter `hero:` image is always FIG. 00.
- Host images in the repo: upload to `assets/img/` and reference as
  `/assets/img/filename.png`. (Weebly URLs still work but are meant to be replaced.)
- Two images side by side: wrap two `{% fig %}` calls in
  `<div class="plate-pair"> … </div>` (blank line after the opening div).

## Embedding Sketchfab / YouTube / Vimeo

Use the block variant with an iframe inside — working Sketchfab examples are in
`content/projects/earlier-work.md`:

```
{% figblock "character model — interactive 3D", "Sketchfab" %}
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
- Don't write a plain email address in any content file — the contact system
  assembles it at runtime.
- Don't edit the Skills page markup — it's generated.
