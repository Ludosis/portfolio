---
title: Lego Fortnite
description: >-
  Lego Fortnite — technical art QA work by Jovian Finch Nordgren at Epic Games.
  FX coverage framework and automation triage tool built with Claude Code.
studio: Epic Games
role: Senior QA Engineer (Tech Art)
dates: July 2023 – March 2026
engine: Unreal Engine 5
order: 4
card:
  blurb: >-
    An FX validation framework that scaled coverage without scaling QA, and an
    automation triage tool built with Claude Code in a single day.
hero:
tools:
  - Unreal Engine 5
  - Editor Utility Widgets
  - C++ (extend existing)
  - Python
  - Claude Code
  - Jira API
  - MCP integration
extraTags:
  - Live Service
skills:
  - id: qa
    highlight: Automation Triage Tool
    anchor: triage-tool
    detail: >-
      Python tool built with Claude Code in one day: pulls daily test results
      via API across PC, console, and Switch; generates self-contained HTML
      report with cross-platform comparison, trend tracking, and Jira-linked
      failure notes. Turned daily triage from an assembly task into a reading
      task
  - id: qa
    highlight: FX Coverage Framework
    anchor: fx-framework
    detail: >-
      Traced escaped defects to a systemic gap in FX test coverage; built
      distributed test suite across platforms and scalability settings;
      packaged as team-specific guides so coverage scaled with content volume
      without scaling centralized QA load
  - id: tools
    highlight: EUW Editor Tools
    anchor: editor-tools
    detail: >-
      EUW animation range validation tool (batching, progress indicator, CSV
      export, configurable options); asset audit EUW with mesh LOD and triangle
      count enforcement at check-in via extended C++ submit validator
  - id: scripting
    highlight: Blueprint & EUW — UE5
    anchor: editor-tools
    detail: >-
      Animation range validation EUW with batching, progress indicator, and CSV
      export; asset audit EUW with LOD/poly enforcement; extended existing C++
      submit validator — no prior UE5 Blueprint or EUW experience before
      building these
---

At Epic Games I was embedded across multiple Tech Art and content teams on Unreal
Engine 5 and Lego Fortnite, working as both a QA engineer and a technical artist
specialist. The role covered pipeline integrity across FX, animation, content
optimization, world/terrain, and procedural content — serving as the animation domain
liaison and coordinating test coverage across a large-scale live service project with
distributed teams.

Two pieces of work from this role are worth detailing: an FX validation framework
that addressed a systemic gap in test coverage, and an automation triage tool built
with Claude Code that changed how the team handled daily test results.

{% figblock "screenshots and captures from Lego Fortnite development", "pending clearance for portfolio use" %}
Screenshots and screen captures from Lego Fortnite development — pending clearance for portfolio use
{% endfigblock %}

<h2 id="fx-framework" class="project-section">FX Coverage Framework</h2>

The problem surfaced when I started tracing escaped defects — bugs that reached
production without being caught in testing. A pattern emerged: a significant
portion traced back to FX that had never been tested across platforms or scalability
settings. FX that looked correct on the highest PC settings would produce visual
artifacts, disappear entirely, or behave differently on console or low-end hardware.
Nobody had a systematic process for catching this.

The response to most coverage gaps is to add more centralized QA work. That
wasn't the right answer here. The FX touched every content team's work — adding
a centralized FX testing pass would have required constant coordination overhead
and would have created a bottleneck every time new content shipped. The problem
needed to be distributed.

I developed a suite of test cases specifically for FX validation across platforms
and scalability settings, then packaged them as team-specific guides rather than
centralized procedures. Each content team received a version scoped to the FX
types they produced, with clear steps they could run independently as part of
their own review process. The result: FX coverage scaled with content volume
without scaling the centralized QA load.

The other thing this required was being credible with the content teams about
what they needed to test and why. That's where the tech art background mattered —
it's easier to explain FX validation criteria to an FX artist when you can describe
what the scalability system is actually doing to their particle system.

<h2 id="triage-tool" class="project-section">Automation Triage Tool</h2>

Daily automation runs produced test results across multiple platforms —
PC, console, Switch — and those results needed to be reviewed, compared,
and turned into actionable failure reports with Jira tickets attached. The
manual process was slow and error-prone: results were in raw formats, comparison
across platforms required context-switching between multiple files, and writing
Jira-linked notes for each failure ate time that could go toward actual triage.

I built a solution with Claude Code in a single day. The tool is a Python script
that pulls test results via API, processes them across platforms, and generates
a self-contained HTML report. The report includes:

- Side-by-side comparison of results across platforms, with failures highlighted
- Trend tracking — whether a failure is new, recurring, or recently resolved
- Jira-linked failure notes pulled from the relevant ticket via MCP integration
- A clean, scannable layout that makes daily triage a reading task rather than an assembly task

{% figblock "triage tool HTML report", "pending" %}
Triage tool HTML report screenshot — pending
{% endfigblock %}

The tool itself is a concrete example of how the Claude Code collaboration
workflow functions in practice. The problem was well-understood, the output
format was clear, and the integration points (APIs, MCPs, Jira) were documented.
Within that framing, Claude Code could handle the implementation work — API
calls, HTML generation, data transformation — while I focused on what the
report needed to communicate and how it would be used. The result was a
working tool, not a prototype, built and deployed in a day.

For more on how that collaboration actually works, see the
[How I Work](/how-i-work/) page.

<h2 id="editor-tools" class="project-section">Editor Tools &amp; Investigation</h2>

Separate from the triage work, I built asset audit tools using Unreal Editor
Utility Widgets and extended an existing C++ submit validator to enforce mesh
LOD and triangle count standards at check-in. These tools ran inside the editor,
so artists could audit their own work before submitting rather than waiting for
a downstream QA catch.

One of the more involved EUW projects was an animation range validation tool:
the purpose was to identify which animation sequences were out of sync with the
level sequence and needed to be resaved. I reverse-engineered an existing
one-off validator, refactored it for this use case, and added batching,
user instructions, configurable options, a progress indicator, and CSV export
for sorting results. The tool works by loading each selected asset in the editor
sequentially, evaluating its properties, caching the results, and compiling a full
report at the end. I had no prior knowledge of Editor Utility Widgets or Blueprint
before building it.

Other investigation work included root-causing TSR smearing artifacts in a
vendor-developed animation playblast tool used for director review of emote
animations — the smearing was obscuring animation quality in review sessions.
I identified the cause and found a workaround that meaningfully improved video
quality for the review pipeline.

I also researched and developed guidelines for using an existing internal scalability
comparison tool (ReplayRun) to capture gameplay video from a single session across
multiple platforms simultaneously — enabling fast identification of platform-specific
scalability inconsistencies without running separate sessions per platform.
