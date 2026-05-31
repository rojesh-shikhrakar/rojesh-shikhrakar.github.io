---
title: '5 Ways AI Transformed My Productivity in 2025'
date: '2025-03-15'
author: 'Rojesh Man Shikhrakar'
excerpt: "From automated literature reviews to intelligent meeting summaries—here's how I use AI daily to reclaim 3 hours every day."
tags: ['AI Tools', 'Productivity', 'Workflow']
readTime: '8 min read'
---

# 5 Ways AI Transformed My Productivity in 2025

I teach AI for a living. I train executives, engineers, and researchers on how to deploy AI systems responsibly and effectively. But I'd be a hypocrite if I wasn't rigorously applying these tools to my own work. In 2025, I've reclaimed an estimated 15 hours per week through deliberate AI integration. Here's exactly how.

---

## 1. Automated Literature Reviews with Elicit and Perplexity

Before AI, a literature review for a new course module meant 2–3 hours of searching Google Scholar, downloading PDFs, skimming abstracts, and manually tracking citations. Today, that workflow takes 25 minutes.

**My workflow:**

1. Start with [Elicit](https://elicit.org) — I enter a research question like "What are the most effective methods for reducing hallucination in enterprise LLM deployments?" Elicit searches semantic databases and returns structured summaries of relevant papers, including methodology, findings, and limitations.

2. Cross-reference with Perplexity — I use Perplexity's academic mode to surface recent arXiv preprints and conference proceedings that might not yet be indexed in traditional databases.

3. Synthesize in NotebookLM — I upload 8–10 key papers to a NotebookLM workspace. I then ask it to generate a thematic outline across the papers, identify gaps in the literature, and highlight methodological differences.

**Time saved:** 2.5 hours per literature review session. I now run these reviews weekly instead of monthly.

**One important caveat:** I always verify citations directly. AI tools occasionally hallucinate paper details. I treat Elicit and Perplexity as accelerators for discovery, not authoritative sources.

---

## 2. Structured Meeting Summaries That Actually Drive Action

I attend or facilitate approximately 8–12 meetings per week across Fusemachines, Kathmandu University, and consulting engagements. Before AI, I was spending 45 minutes after each meeting writing summaries, capturing decisions, and drafting follow-up emails. Now it takes 8 minutes.

**My workflow:**

1. **Record with transcription:** I use Otter.ai for in-person meetings and the built-in transcription on video calls. The transcript is the raw material.

2. **Structured summarization prompt:** I paste the transcript into Claude with this prompt:

   > "You are a rigorous executive assistant. From this meeting transcript, extract: (1) decisions made with owners, (2) action items with deadlines, (3) open questions that need resolution, (4) key context future readers need. Format as a structured document. Do not invent anything not in the transcript."

3. **One-click email draft:** I then ask Claude to draft a follow-up email to participants using the structured summary as the source.

**The key insight:** The prompt constrains the AI to the transcript. I explicitly prevent hallucination by anchoring the task to a specific document. This is a technique I teach in every enterprise workshop—source-anchored prompting.

---

## 3. Lecture and Curriculum Development with AI as Co-Author

Designing a new 3-hour workshop module used to take me 6–8 hours: conceptual outline, learning objectives, slide structure, exercises, assessment design. Now it takes 3–4 hours—and the quality is higher because I'm not spending cognitive energy on structural scaffolding.

**My workflow:**

1. **Brain-dump into Claude:** I spend 15 minutes dictating (or typing) everything I know about the topic. No structure, just stream of consciousness.

2. **Pedagogical scaffolding prompt:**

   > "Using Bloom's Taxonomy and the ADDIE instructional design framework, organize the following raw content into a workshop module. Create learning objectives at the Apply and Analyze levels, a logical content sequence, two active learning exercises, and a formative assessment. Target audience: corporate professionals with no ML background."

3. **Iterate on exercises:** The AI generates draft exercises that I then refine. I find this particularly valuable because generating good exercises from scratch is cognitively expensive.

4. **Slide outline generation:** I feed the module structure into a prompt requesting a detailed slide-by-slide outline with suggested visuals.

**What the AI cannot do:** Design truly novel examples. I always replace generic AI-generated examples with Nepal-specific or Asia-specific cases that resonate with my actual audience. Context-specificity is a human task.

---

## 4. Research Paper Feedback and Pre-Submission Review

I review approximately 15–20 student research papers per semester at Kathmandu University, plus occasional peer reviews for conferences. AI has transformed this from a mechanical process into a high-leverage teaching tool.

**My workflow for student papers:**

1. **Structural analysis prompt:** "Evaluate this research paper draft against the standards of the IEEE CVPR review rubric. Identify: (a) clarity of problem statement, (b) rigor of methodology section, (c) validity of experimental design, (d) whether claims are supported by evidence. Do not evaluate content validity—only structure and argumentation quality."

2. **Writing quality check:** A separate prompt for grammar, passive voice overuse, hedging language, and paragraph coherence.

3. **Synthesize into feedback:** I review the AI's analysis, correct any errors, and add my domain-specific insights before writing the final feedback.

**The pedagogical advantage:** Students receive more detailed, consistent feedback. I can focus my cognitive bandwidth on the genuinely hard parts—evaluating whether the research questions are interesting and whether the methods are sound—because the AI handles structural analysis.

---

## 5. Inbox Zero with Intelligent Email Triage

I receive 120–180 emails per day across professional accounts. Before AI: 90 minutes daily on email. Now: 25 minutes.

**My system:**

1. **Custom GPT for response drafting:** I built a Custom GPT trained on my communication style using 50 example emails I wrote. When I need to respond to an invitation, inquiry, or coordination email, I describe the context in 2 sentences and the GPT drafts a response in my voice.

2. **Categorization prompts:** For complex emails that require judgment, I use Claude: "Given the following email thread, what is the sender actually asking for? What is the unstated expectation? What is the minimum viable response that fully addresses their need?"

3. **Template refinement:** I keep a Claude Projects workspace with my key email templates (workshop inquiries, collaboration requests, media inquiries). The AI helps me adapt them for specific situations without losing my professional tone.

**Trust but verify:** I always read the AI draft before sending. Never route AI-generated text to another human without human review. This is a rule I enforce without exception.

---

## The Principles Behind the Practice

Three principles govern how I use AI for productivity:

**1. Source-anchoring over free generation.** When accuracy matters, I give the AI a specific document, transcript, or data source and ask it to work from that material. Free generation is for brainstorming. Anchored generation is for anything consequential.

**2. Human judgment on the last mile.** AI accelerates the journey; humans make the final call. Every AI output that goes to another person—student, colleague, client—passes through my critical review.

**3. Compounding specificity.** Generic prompts get generic outputs. I invest time in writing specific prompts because the return on that investment compounds across every use. My prompt library is now one of my most valuable professional assets.

---

If you want to implement a similar system, start with one workflow—the one where your most valuable time is most frequently wasted—and apply these principles there. The productivity gains in 2025 are real, but they require intentional design. AI doesn't automatically make you productive; deliberate integration does.

_Rojesh Man Shikhrakar teaches AI productivity and enterprise AI deployment at Fusemachines and Kathmandu University. His workshops are available for corporate and institutional bookings._
