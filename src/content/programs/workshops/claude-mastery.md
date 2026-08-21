---
title: 'Claude Mastery'
description: 'A hands-on workshop covering the full Claude ecosystem — chat, projects, artifacts, files and analysis, connectors, skills, agents, Claude Code, and the API — with responsible-use practices built into every workflow.'
category: 'workshops'
tagline: 'From First Prompt to Production Agent'
image: 'https://res.cloudinary.com/w6ej7kot/image/upload/Australia_Awards_Artificial_Intelligence_FB_with_Logo-121.jpg'
duration: '1-16 hour'
location: 'On-site, hybrid, or instructor-led online'
level: 'Beginner to advanced'
capacity: 'Maximum 25 participants'
audience:
  - 'Professionals who already use Claude casually and want to use it deliberately and well'
  - 'Teams standardising on Claude and needing shared prompts, skills, and guardrails'
  - 'Analysts, writers, researchers, and operators working with documents, data, and reports'
  - 'Developers and technical leads adopting Claude Code, MCP, and the Claude API'
  - 'Managers responsible for safe, governed, and measurable AI adoption'

content: |
  This workshop is a complete tour of Claude as a working system rather than a chat box. Participants learn what the model family is good at, how the context window and reasoning modes actually behave, and how to move from ad-hoc prompting to dependable, repeatable work.

  The programme then builds outward through the surfaces that make Claude useful at work: Projects for persistent context, Artifacts for real deliverables, file and data analysis, connectors and MCP for authorised access to real systems, Skills for shared organisational know-how, and Agents and Claude Code for bounded multi-step execution. Developers go one layer deeper into the API, tool use, and evaluation.

  Responsible use is not a closing module. Constitutional-AI principles, data handling, prompt-injection defence, permission design, verification, and human accountability are practised in every exercise. Participants leave with a personal and team-level Claude setup they can defend to a security reviewer and measure against a baseline.

modules:
  - title: 'Module 1 — Understanding Claude'
    body:
      - 'Understand how Claude generates responses, and why it can be fluent and wrong at the same time'
      - 'Compare the Claude model family and choose between speed, cost, and depth of reasoning for a given task'
      - 'Use extended thinking deliberately: when step-by-step reasoning helps and when it only adds latency'
      - 'Work with the context window: what Claude can see, what it has forgotten, and why long chats degrade'
      - 'Recognise knowledge cutoffs, non-determinism, refusals, and the difference between a limit and a bad prompt'
      - 'Understand Constitutional AI and Claude''s character: helpfulness, honesty, and harm avoidance in practice'
      - 'Exercise: Probe Claude on a real work task and document its strengths, failure modes, and needed oversight'

  - title: 'Module 2 — Prompting Claude Well'
    body:
      - 'Write prompts with explicit goal, context, inputs, constraints, evaluation criteria, and output format'
      - 'Use system prompts, role framing, and style instructions where they measurably improve results'
      - 'Apply XML tags, delimiters, and structure that Claude follows reliably'
      - 'Use examples (few-shot), prefilled responses, and chain-of-thought prompting appropriately'
      - 'Decompose long tasks into steps, and use critique-and-revise loops instead of restarting'
      - 'Ask Claude to state assumptions, uncertainties, missing inputs, and what it could not verify'
      - 'Diagnose disappointing output: wrong context, wrong task, wrong model, or wrong expectation'
      - 'Exercise: Convert a vague request into a tested prompt with a written acceptance standard'

  - title: 'Module 3 — Projects, Memory, and Persistent Context'
    body:
      - 'Use Projects to hold durable context: source documents, standards, terminology, and working style'
      - 'Write project instructions that behave like a job brief rather than a wish list'
      - 'Curate a knowledge base that improves grounding instead of diluting it'
      - 'Understand what persists across conversations, what does not, and how memory features change this'
      - 'Decide what belongs in a project, a skill, a connector, or a single prompt'
      - 'Keep project context current, reviewed, and owned by a named person'
      - 'Exercise: Build a role-specific project and test it against three realistic requests'

  - title: 'Module 4 — Artifacts and Real Deliverables'
    body:
      - 'Use Artifacts to produce documents, reports, dashboards, diagrams, and small interactive tools'
      - 'Iterate on an artifact through targeted revision instead of full regeneration'
      - 'Build data visualisations and interactive prototypes that communicate a decision'
      - 'Understand sharing, privacy, and what publishing an artifact actually exposes'
      - 'Review generated output for accuracy, accessibility, and brand fit before it leaves your hands'
      - 'Exercise: Turn a messy internal update into a shareable artifact with a review checklist'

  - title: 'Module 5 — Files, Documents, and Data Analysis'
    body:
      - 'Work with PDFs, spreadsheets, slides, images, and code as inputs to analysis'
      - 'Use Claude''s analysis and code-execution abilities for calculation, reconciliation, and charting'
      - 'Extract structure from unstructured material: themes, entities, obligations, anomalies, and open questions'
      - 'Ground answers in supplied sources and require citations back to the document'
      - 'Recognise where document analysis is unreliable: scans, dense tables, ambiguity, and long-range consistency'
      - 'Handle confidential and personal data appropriately before uploading anything'
      - 'Exercise: Analyse a real document set and produce a findings memo with traceable evidence'

  - title: 'Module 6 — Connectors, MCP, and Working Across Tools'
    body:
      - 'Understand the Model Context Protocol as a standard way to give Claude tools and data'
      - 'Connect Claude to files, email, calendars, drives, knowledge bases, and project systems'
      - 'Use web search and retrieval to ground answers in current, cited information'
      - 'Distinguish read from write actions and apply least-privilege access to every connection'
      - 'Review authentication, scopes, retention, logging, and revocation before enabling a connector'
      - 'Defend against prompt injection, hostile documents, and over-broad permissions'
      - 'Require confirmation before consequential actions such as sending, changing, or publishing'
      - 'Exercise: Design a connected workflow with an explicit permission and approval map'

  - title: 'Module 7 — Skills: Packaging Organisational Know-How'
    body:
      - 'Understand a Skill as a reusable package of instructions, standards, examples, and resources'
      - 'Decide when a saved prompt is enough and when a governed, shared skill is warranted'
      - 'Author skills for recurring work: reporting, review, onboarding, quality checks, proposal drafting'
      - 'Embed voice, policy, checklists, acceptance criteria, and escalation rules into the skill itself'
      - 'Test a skill against normal, ambiguous, incomplete, and adversarial inputs'
      - 'Version, document, own, and retire skills so stale guidance does not spread'
      - 'Exercise: Build and peer-test a reusable skill for a genuine recurring task'

  - title: 'Module 8 — Agents and Bounded Autonomy'
    body:
      - 'Distinguish a prompt, a fixed automation, an assisted workflow, and an autonomous agent'
      - 'Design the agent loop: goal, plan, tool use, observation, evaluation, stop or escalate'
      - 'Write agent instructions with scope, allowed tools, budgets, checkpoints, and completion criteria'
      - 'Use subagents and parallel work for research, triage, audits, and assembly tasks'
      - 'Add approval gates, audit trails, rollback paths, cost and time limits, and safe failure behaviour'
      - 'Identify work that should not be delegated: ambiguous, sensitive, irreversible, or high impact'
      - 'Exercise: Prototype and red-team a bounded agent against a provided safety checklist'

  - title: 'Module 9 — Claude Code for Technical Work'
    body:
      - 'Use Claude Code in the terminal, IDE, and desktop for real repository work'
      - 'Give Claude Code the context it needs: project instructions, conventions, and verification commands'
      - 'Work through plan, implement, test, and review cycles instead of accepting first drafts'
      - 'Extend the environment with MCP servers, custom commands, hooks, and subagents'
      - 'Set permissions and sandboxing so automation cannot exceed its mandate'
      - 'Apply the same discipline to non-code work: data pipelines, docs, infrastructure, and analysis scripts'
      - 'Exercise: Complete a small end-to-end change with tests and a reviewable diff'

  - title: 'Module 10 — The Claude API and Building With Claude'
    body:
      - 'Call the Messages API and understand messages, system prompts, stop reasons, and streaming'
      - 'Define tools and run a tool-use loop where Claude calls your functions'
      - 'Use prompt caching, batching, and model selection to control latency and cost'
      - 'Choose between retrieval, long context, and fine-grained tooling for grounding'
      - 'Evaluate a Claude-powered feature with test sets, rubrics, and LLM-as-judge where appropriate'
      - 'Add guardrails, retries, timeouts, logging, and graceful degradation before production'
      - 'Exercise: Build and evaluate a small tool-using Claude application'

  - title: 'Module 11 — Safety, Privacy, and Governance'
    body:
      - 'Understand Anthropic''s usage policies, safety levels, and what Claude will and will not do'
      - 'Protect confidential, personal, customer, employee, financial, and intellectual-property data'
      - 'Know how enterprise deployment differs from consumer use on retention, training, and admin control'
      - 'Evaluate output for accuracy, bias, exclusion, accessibility, and copyright before use'
      - 'Disclose material AI assistance where it affects trust, accountability, or expectations'
      - 'Preserve human accountability: Claude can support a decision, a named person must own it'
      - 'Respond to incidents with containment, documentation, correction, notification, and improvement'
      - 'Exercise: Assess realistic scenarios with an impact-and-risk decision framework'

  - title: 'Module 12 — Build Your Claude Operating System'
    body:
      - 'Select a small portfolio of high-value use cases by frequency, effort, value, and risk'
      - 'Assign each use case the right surface: prompt, project, skill, connector, agent, or code'
      - 'Measure baseline and improved performance on time, quality, rework, cost, and confidence'
      - 'Maintain a shared library with naming, ownership, review dates, and change history'
      - 'Plan team rollout: enablement, permissions, review norms, and a stop-and-escalate rule'
      - 'Capstone: Present a Claude-enabled workflow, its safeguards, and its expected benefit'

outcomes:
  - title: 'Claude Capability Map'
    body: 'A documented view of what Claude does reliably for your work, what it does not, and where oversight is required.'
  - title: 'Prompt and Skill Library'
    body: 'Tested prompts plus at least one documented, peer-reviewed skill that can be reused and improved.'
  - title: 'Configured Project Workspace'
    body: 'A role-specific Claude project with curated context, instructions, and a maintenance owner.'
  - title: 'Connected Workflow Blueprint'
    body: 'A connector and MCP design showing tools, scopes, approval points, injection defences, and fallback behaviour.'
  - title: 'Bounded Agent Prototype'
    body: 'A multi-step agent design with instructions, limits, evaluation criteria, and human approval gates.'
  - title: 'Claude Code or API Working Sample'
    body: 'For technical participants, a reviewed change or a small evaluated tool-using application.'
  - title: 'Responsible Use Checklist'
    body: 'A repeatable check covering sourcing, accuracy, privacy, security, fairness, disclosure, and accountability.'
  - title: '30-Day Adoption Plan'
    body: 'A measurable rollout experiment with success criteria, review points, and stop conditions.'
---

## Learning Objectives

By the end of the workshop, participants will be able to:

- Explain how Claude works well enough to predict where it will succeed and where it will fail.
- Choose the right model, reasoning mode, and surface for a given task.
- Write, test, and improve prompts against an explicit acceptance standard.
- Use Projects, Artifacts, and file analysis to produce real, verifiable deliverables.
- Connect Claude to authorised systems through connectors and MCP with least-privilege access.
- Package recurring work as tested, owned, versioned Skills.
- Design bounded agents with clear tools, limits, checkpoints, and escalation paths.
- Use Claude Code and the Claude API for technical work with tests and evaluation.
- Apply privacy, security, fairness, disclosure, and accountability practices in daily use.
- Measure productivity gains without sacrificing quality, trust, or oversight.

## Suggested Two-Day Agenda

The workshop runs from a 1-hour executive briefing to a 16-hour deep dive. Modules 9 and 10 are optional for non-technical cohorts and are replaced by extended skill and connector labs.

### Day 1 — Fundamentals to Repeatable Work

| Time          | Session                          | Practical output                     |
| ------------- | -------------------------------- | ------------------------------------ |
| 9:00 – 9:30   | Goals, baseline, and task audit  | Personal use-case shortlist          |
| 9:30 – 10:30  | Understanding Claude             | Capability and limitation map        |
| 10:45 – 12:15 | Prompting lab                    | Tested prompt with acceptance test   |
| 13:00 – 14:00 | Projects and persistent context  | Configured project workspace         |
| 14:00 – 15:00 | Artifacts and deliverables       | Shareable artifact with review notes |
| 15:15 – 16:30 | Files, documents, and analysis   | Evidence-backed findings memo        |
| 16:30 – 17:00 | Reflection and peer review       | Day 2 workflow candidate             |

### Day 2 — Connected, Agentic, and Governed

| Time          | Session                        | Practical output                     |
| ------------- | ------------------------------ | ------------------------------------ |
| 9:00 – 9:30   | Review and retrieval practice  | Improved prompt patterns             |
| 9:30 – 10:45  | Skills authoring lab           | Peer-tested reusable skill           |
| 11:00 – 12:15 | Connectors, MCP, permissions   | Connected workflow and access map    |
| 13:00 – 14:15 | Agents and bounded autonomy    | Agent instruction and control plan   |
| 14:15 – 15:15 | Claude Code / API track        | Reviewed change or evaluated tool    |
| 15:30 – 16:15 | Safety, privacy, governance     | Risk assessment and mitigation plan  |
| 16:15 – 17:00 | Capstone and next steps        | 30-day adoption plan                 |

## Choosing the Right Claude Surface

| Work pattern                                    | Use this                          | Example                                         |
| ----------------------------------------------- | --------------------------------- | ----------------------------------------------- |
| One-off, low-risk task                          | Prompt with human review          | Rewrite a paragraph for a specific audience     |
| Repeated task, stable inputs and standards      | Reusable skill                    | Weekly status report in house format            |
| Ongoing work needing the same background        | Project with curated context      | Bid writing against a standing document set     |
| Output that must be shared or used as a tool    | Artifact                          | Board summary, dashboard, decision calculator   |
| Needs authorised live data from real systems     | Connector or MCP server, read-only | Summarise this week's approved project updates |
| Variable, multi-step, reversible task            | Bounded agent with checkpoints    | Assemble a research brief from permitted sources |
| Repository, data, or infrastructure change       | Claude Code with tests            | Implement and verify a small feature            |
| Product feature for many users                   | Claude API with evaluation        | In-app drafting or classification feature       |
| High-impact or irreversible decision             | Human-led, Claude advisory only   | Hiring, legal, medical, financial decisions     |

## The Claude Verification Check

Before you use or share anything Claude produced, apply the **S-A-F-E-R** check:

- **Source:** Can the important claims be traced to credible, current evidence?
- **Accuracy:** Have facts, figures, quotations, and citations been verified independently?
- **Fairness:** Could the result exclude, stereotype, or misrepresent anyone?
- **Exposure:** Does the workflow reveal confidential, personal, copyrighted, or restricted material?
- **Responsibility:** Is a named person accountable for the decision and for correcting errors?

Higher-impact work requires stronger evidence, more testing, and more senior review. Where consequences are unclear, pause and escalate rather than increasing autonomy.

## Capstone Challenge (Optional)

In small groups, participants redesign one recurring workplace process around Claude and present it. The presentation must cover:

1. The current process, users, pain points, and baseline effort.
2. The chosen Claude surfaces and why each was selected over the alternatives.
3. One reusable prompt or skill, with its acceptance test.
4. Connectors or tools requested, their scopes, and data boundaries.
5. Agent limits, approval gates, stop conditions, and fallback path.
6. A test set covering normal, ambiguous, incomplete, and adversarial inputs.
7. Risks across accuracy, privacy, security, bias, copyright, and accountability.
8. Success metrics and a 30-day pilot plan.
