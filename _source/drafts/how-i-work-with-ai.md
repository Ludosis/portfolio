# DRAFT: How I Work with AI (not live)

A starting point for Jovi to rewrite in their own words. Nothing here is published.
The live page is `content/pages/how-i-work.njk` at `/how-i-work/` (keep that URL).

Marked sections: **[KEPT]** is the live page's current wording, unchanged.
**[NEW]** is drafted from what Jovi has described in sessions and on the Riot page.
Cut, merge, or rewrite anything.

## Structure notes

- Page title and nav label: "How I Work with AI". Same URL, so old links still work.
  Nav check: "HOW I WORK WITH AI" is long for the top bar; "AI WORKFLOW" or keeping
  "HOW I WORK" in the nav (with the new page title) are options.
- The current "Working with people" and "Working with technology" sections are not
  about AI. Options: move them to About (they're about mindset), trim them to one
  short paragraph here, or keep them as they are. The draft below assumes they move.
- Keep "What it doesn't replace" as is. It's the strongest part of the current page.

---

## How I Work with AI

### What this page is about **[NEW]**

This page is about how I use AI tools in my work: what I hand to them, what I keep,
and the systems I build so they're reliable enough for other people to use. I'm an
artist first. AI is one of the tools I pick up when it's the right one, the same way
I'd pick up a script, a shader, or a conversation with an engineer.

### Two tools, one approach **[NEW]**

At Riot I work in Devin, which runs Claude and other model families. On my own
projects, including this site, I use Claude Code. The tools differ; the approach
doesn't. I decide what gets built and what good looks like. The agent does a lot of
the implementation. I test the result the way I'd test anyone's tool.

### Building around the agent, not just prompting it **[NEW]**

The useful part isn't asking an AI for code. It's the structure around it:

- **Context management.** The agent should find what it needs on its own. Ask in
  plain language and it pulls the right context: project knowledge, team tools
  (Jira, Slack, Notion, Perforce, the editor) through MCP connectors, and the notes
  from previous sessions. Persistence and discovery together, so nobody has to paste
  the background in every time.
- **Rules that work against how LLMs fail.** Models are trained to look finished: a
  confident answer, the first likely result, a plausible guess where the facts run
  out. My base rules make the agent say what it checked and what it inferred, try to
  disprove its own lead, and ask instead of guessing. Corrections get written into
  the workspace, so the next session starts with them.
- **An orchestration layer.** Hooks that keep track of a session and restore the
  rules after the agent's memory is compacted, a start-of-session step that loads the
  right context, subagents with a model picked for each job, and skills that carry
  their own instructions so they work in someone else's workspace.
- **The right model for the job.** Some work needs a model that applies rules
  carefully and judges what matters; some can go to a cheaper model that gathers
  data well but writes poorly for people. Each family needs its own guidance.

### Splitting the work: auto fixers **[NEW]**

A lot of my tools are auto fixers: anything that can be batched, scripted, or fixed
agentically. When a fix needs judgment on every asset, I split it three ways. Scripts
gather and record. The agent judges against criteria I wrote down from doing the fix
by hand. A person decides anything that needs taste, on a review board that puts every
issue and its proposed fix in front of them. The agent makes the clear-cut fixes; the
hand fixes start at the answer instead of the search.

### Testing what the agent built **[NEW]**

AI-written tools get the same scrutiny as anyone else's. I audit the data before and
after a run, try single assets and batches to find where it breaks, put it in front of
the person it's for, and write docs for two readers: the artist using it and whoever
maintains it next.

### Helping other people use it **[NEW]**

Tools that only work for their author aren't finished. I build tools that support
agentic workflows for the team, and I've turned the framework into a starter kit
(rules, skills, connector setup, context packs, and a beginner's handbook) for artists
and Tech Artists who haven't used agentic AI before.

### Examples **[NEW, from existing sidebar facts]**

- **Teamfight Tactics:** auto fixers, guided fixers, a bug patterns system, and the
  agentic framework. [Read about it](/portfolio/teamfight-tactics/)
- **Automation triage tool (Epic):** built with Claude Code in one day; it put over a
  dozen report pages into one view and turned hours of daily triage into minutes.
- **This site:** a markdown content pipeline built with Claude Code. Every project is
  a structured file, and the build generates the skills index, `/llms.txt`, and
  structured data. The full source is public, on purpose.

### What it doesn't replace **[KEPT]**

Knowing what to build. Knowing whether it's worth building. Knowing when the
technically correct solution is the wrong answer for the project. The judgment about
what a shader should feel like, whether a tool will actually get used, whether a test
coverage approach will hold up in production: none of that comes from a language
model. It comes from having done the work, shipped things, watched them break, and
built better ones.

AI tooling is fast and useful. It does not have taste. The craftsperson is still the
one who decides what good looks like.
