---
title: Lego Fortnite
description: "Lego Fortnite: technical art QA work by Jovian Finch Nordgren at Epic Games. FX coverage framework and automation triage tool built with Claude Code."
studio: Epic Games
role: Senior QA Engineer (Tech Art)
dates: July 2023 – March 2026
engine: Unreal Engine 5
order: 4
card:
  label: "Epic Games · 2023–2026"
  blurb: "Tech art QA on Lego Fortnite, using tech art domain knowledge to raise quality across FX, animation, content optimization, and procedural content. Test strategy, root-cause investigation, and validation tools, including a triage tool built with Claude Code."
  pending: "Lego Fortnite · images pending"
  tags:
    - "Unreal Engine 5"
    - "QA Systems"
    - "Claude Code"
    - "Pipeline"
hero:
# Header meta, tags, and sidebar: restored verbatim from the hand-written site.
meta:
  - label: "Studio"
    value: "Epic Games"
  - label: "Role"
    value: "Senior QA Engineer (Tech Art)"
  - label: "Dates"
    value: "July 2023 – March 2026"
  - label: "Engine"
    value: "Unreal Engine 5"
headerTags:
  - "Unreal Engine 5"
  - "QA Systems Design"
  - "FX Validation"
  - "Asset Audit Tools"
  - "Claude Code"
  - "Python"
  - "API / MCP"
  - "Jira"
  - "Pipeline"
sidebar:
  - title: "Tools"
    items:
      - "Unreal Engine 5"
      - "Editor Utility Widgets"
      - "C++ (extend existing)"
      - "Python"
      - "Claude Code"
      - "Jira API"
      - "MCP integration"
  - title: "Skills"
    items:
      - "QA systems design"
      - "FX validation"
      - "Test case development"
      - "Pipeline tooling"
      - "LLM-assisted development"
      - "Cross-team coordination"
      - "Root cause analysis"
  - title: "Role"
    lines:
      - "Epic Games"
      - "July 2023 – March 2026"
      - "Senior QA Engineer (Tech Art)"
# Skills-page entries: the original labels, wording, links, and order.
skills:
  - id: tools
    label: "Lego Fortnite / Editor Tools"
    href: "/portfolio/lego-fortnite/"
    rank: 3
    detail: "EUW animation range validation tool (batching, progress indicator, CSV export, configurable options); asset audit EUW with mesh LOD and triangle count enforcement at check-in via extended C++ submit validator; FX validation test suite distributed as team-specific guides"
  - id: qa
    label: "Lego Fortnite / Automation Triage Tool"
    href: "/portfolio/lego-fortnite/#triage-tool"
    rank: 1
    detail: "Built with Claude Code in one day: one HTML report that put about a dozen build report pages into a single view, with cross-platform comparison, trend tracking, and Jira-linked failure notes; daily triage went from hours to minutes"
  - id: qa
    label: "Lego Fortnite / FX Coverage Framework"
    href: "/portfolio/lego-fortnite/#fx-framework"
    rank: 2
    detail: "Traced escaped defects to a systemic gap in FX test coverage; built distributed test suite across platforms and scalability settings; packaged as team-specific guides so coverage scaled with content volume without scaling centralized QA load"
  - id: scripting
    label: "Blueprint & EUW / Unreal Engine 5"
    href: "/portfolio/lego-fortnite/"
    rank: 3
    detail: "Animation range validation EUW with batching, progress indicator, and CSV export; asset audit EUW with LOD/poly enforcement; extended existing C++ submit validator; learned EUW and Blueprint on the job to build these"
---

At Epic Games I was embedded across multiple Tech Art and content teams on Unreal
Engine 5 and Lego Fortnite, working as a Senior QA Engineer (Tech Art). The role
covered pipeline integrity across FX, animation, content optimization, world/terrain,
and procedural content, serving as the animation domain liaison and coordinating test
coverage across a large-scale live service project with distributed teams.

Most of the job was using tech art knowledge to raise the quality of the project. I
worked closely with Tech Artists on time-of-day system conversion testing, material
issues across platforms and scalability settings, lighting and shadow rendering, VFX
in Niagara, Editor Utility Widget functionality, and the Atom processor system. A lot
of the focus was on lower-end platforms and scalability: very little gameplay changes
between desktop and mobile, but rendering does, and knowing how rendering differs
across Android, iOS, Switch, and low- and high-end devices is what let me track those
issues down.

Two pieces of work from this role are worth detailing: an FX validation framework
that addressed a systemic gap in test coverage, and an automation triage tool built
with Claude Code that changed how daily test results got handled.

<h2 id="fx-framework" class="project-section">FX Coverage Framework</h2>

The problem surfaced when I started tracing escaped defects, bugs that reached
production without being caught in testing. A pattern emerged: a significant
portion traced back to FX that had never been tested across platforms or scalability
settings. FX that looked correct on the highest PC settings would produce visual
artifacts, disappear entirely, or behave differently on console or low-end hardware.
Nobody had a systematic process for catching this.

The response to most coverage gaps is to add more centralized QA work. That
wasn't the right answer here. The FX touched every content team's work, so adding
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
what they needed to test and why. That's where the tech art background mattered:
it's easier to explain FX validation criteria to an FX artist when you can describe
what the scalability system is actually doing to their particle system.

<h2 id="triage-tool" class="project-section">Automation Triage Tool</h2>

I was handed the daily triage of automation test results. When tests failed, I had
to work out whether the game had a problem or the test itself had broken. That meant
hours a day of going back and forth between build report pages and holding the
previous days' status in my head.

So I built a tool with Claude Code, in one day, that tracks the trends and shows at a
glance the key information that had been spread across about a dozen pages:
cross-platform comparison, trends over time, and Jira-linked failure notes, pulled
together from the build system's APIs and MCP connections into one HTML report. Daily
triage went from an hour or two to about five minutes, because most of it now happened
passively.

The problem was well understood and I knew exactly what the report needed to show,
so Claude Code could handle the implementation while I decided what the report needed
to communicate and how it would be used. For more on how that collaboration works,
see the [How I Work](/how-i-work/) page.

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
report at the end. I learned Editor Utility Widgets and Blueprint on the job to
build it.

Other investigation work included root-causing TSR smearing artifacts in a
vendor-developed animation playblast tool used for director review of emote
animations, where the smearing was obscuring animation quality in review sessions.
I identified the cause and found a workaround that meaningfully improved video
quality for the review pipeline.

I also researched and developed guidelines for using an existing internal scalability
comparison tool (ReplayRun) to capture gameplay video from a single session across
multiple platforms simultaneously, enabling fast identification of platform-specific
scalability inconsistencies without running separate sessions per platform.
