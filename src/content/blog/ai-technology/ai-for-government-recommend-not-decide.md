---
title: 'AI for Government: Where It Works, Where It Breaks'
description: 'Twenty years of public-sector automation point to one design choice that separates success from scandal: does the system recommend, or does it decide?'
date: '2026-09-24'
category: 'ai-technology'
tag: 'AI & Government'
author: 'Rojesh Man Shikhrakar'
role: 'AI Engineer, Educator & Strategist'
insights:
  - title: 'Recommend, never decide'
    body: 'AI that ranks, drafts, and flags has a strong record. AI whose output becomes a penalty, denial, or arrest has produced most of the scandals.'
  - title: 'Fix the documents first'
    body: 'A knowledge assistant can only be as current as the circulars it reads. Document governance is the real project.'
  - title: 'Buy one workflow, not a vision'
    body: 'Pick one agency, one painful process, and one number you expect to move. Measure it before you scale.'
---

Most conversations I have with government teams start with a tool. Which chatbot should we buy? Can we use ChatGPT for drafting? Those questions come too early. The question that decides whether an AI project helps citizens or ends up in court is simpler: **at what point in the decision does the machine stop and a person take over?**

The OECD has catalogued [200 real government AI deployments across 11 core functions](https://oecd.ai/en/ai-publications/governing-with-ai). Read enough of them next to the failures and a pattern shows up. The successes put AI _before_ a human decision. The failures let AI output _become_ the decision.

## Where the friction actually is

Governments don't have a shortage of intelligence. They have a shortage of officer-hours spent on reading, sorting, searching, and re-typing. That is where AI earns its keep.

| Friction                       | What AI can do                                  | Risk if it goes wrong             |
| ------------------------------ | ----------------------------------------------- | --------------------------------- |
| Citizens can't find answers    | Answer from official content, with sources      | Low, if it can say "I don't know" |
| Paper and PDF intake           | Extract, validate, route; flag what's missing   | Low; errors go to a human queue   |
| Backlogs and case files        | Summarise history, rank cases by urgency        | Medium; omissions matter          |
| Scattered institutional memory | Search circulars, SOPs, and past decisions      | Medium; outdated rules            |
| Audit and fraud selection      | Rank where scarce investigators should look     | High if a score becomes a verdict |
| Inspection and disasters       | Scan imagery; point inspectors to likely damage | High for missed defects           |
| Eligibility and entitlements   | Help citizens see what they may qualify for     | Very high if automated            |

## Case studies, read honestly

### Answering citizens: GOV.UK Chat

The UK's Government Digital Service tested an assistant across [more than 10,000 users and 26,000 questions](https://insidegovuk.blog.gov.uk/2026/03/16/5-things-we-learned-testing-gov-uk-chat-an-ai-assistant-for-government/). Accuracy rose from 76% to 90%. The model answers only from GOV.UK pages rather than from whatever it learned in training.

What I find more useful is what went wrong. Users sometimes got no answer when a question fell outside scope, and slow responses hurt satisfaction as much as wrong ones. **The lesson:** count tasks resolved, not questions answered. A citizen who gets a fluent non-answer still has to phone the office.

### Reading documents: Thailand and Shenzhen

Thailand's National Anti-Corruption Commission tested OCR and language models on incoming complaints and [cut average processing time by 78.6%](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0338633). Classification accuracy, though, was only 57.5%. That sounds like a failure until you notice what the system was for: getting complaints to the right desk faster, with a person still reading each one. Mediocre accuracy is fine for triage. It would be dangerous for a verdict.

Shenzhen's Futian District deployed [70 "AI employees" across 240 administrative scenarios](https://www.sz.gov.cn/en_szgov/news/latest/content/post_12101741.html), reporting 95% accuracy on document formatting and 90% less review time. Futian also issued [a governance framework for these systems alongside the launch](https://www.globaltimes.cn/page/202502/1328565.shtml), which I think matters more than the numbers. Note that the figures are self-reported, not independently audited.

### Deciding where to look: tax and fraud

The Australian Taxation Office used machine learning to pick work-expense claims for audit. The national auditor found it [raised the share of audits that found problems by 19 percentage points](https://www.anao.gov.au/work/performance-audit/governance-of-artificial-intelligence-the-australian-taxation-office). Research on Italian tax data found that swapping the weakest 10% of human-selected audits for model-selected ones [could raise detected evasion by up to 39%](https://doi.org/10.1016/j.jeconom.2024.105847).

Now the other side. The Netherlands' SyRI system scored citizens for welfare and tax fraud risk. In 2020 a Dutch court ruled its legal basis [violated the European Convention on Human Rights](https://www.rechtspraak.nl/organisatie-en-contact/organisatie/rechtbanken/rechtbank-den-haag/nieuws/2020/02/syri-legislation-in-breach-of-european-convention-on-human-rights). Michigan's unemployment system falsely accused thousands of people of fraud and ended in a [$20 million settlement](https://www.michigan.gov/ag/news/press-releases/2022/10/20/som-settlement-of-civil-rights-class-action-alleging-false-accusations-of-unemployment-fraud). Australia's Robodebt raised debts by income-averaging and was [found unlawful](https://journals.sagepub.com/doi/10.1177/20438869231165538).

Robodebt and MiDAS were rule-based automation, not machine learning. I include them on purpose, because an LLM would not have saved them. Their design was the flaw: _score → accusation → penalty_, with nobody accountable in between. The ATO pointed investigators at cases. SyRI and Robodebt pointed the state at citizens.

### Seeing the physical world: floods and levees

After disasters, FEMA uses computer vision to [flag imagery likely to show damage](https://www.dhs.gov/ai/use-case-inventory/fema) so analysts look there first. In Zhejiang, drones with infrared cameras and AI now inspect a major flood-control levee [in about two hours instead of three days on foot](https://english.news.cn/20260723/84a0ff4806d64e7ea18ce0c3eb86237c/c.html), and send hazard locations to inspectors on the ground.

Closer to home, after the 2026 Nepal floods, [AI-assisted building damage maps were published within days](https://www.hotosm.org/en/news/mapping-the-nepal-floods/), with volunteers checking the model's output and coordination with national disaster authorities. A follow-up workshop in Lalitpur listed [what still blocks this](https://dpnet.org.np/news/detail/workshop-on-ai-enabled-disaster-damage-assessment-concludes-in-lalitpur): too little local training data, Nepali building types the models haven't seen, and no standards for drone data. These aren't model problems. They're data and institutional problems that Nepal can solve.

The risk that matters here is the false negative. "The model found no crack" is not the same statement as "an engineer certified the bridge." Once those two blur, you've turned an inspection aid into a safety certificate by accident.

### Institutional memory: translation and internal assistants

Canada's GCtranslate, trained on the government's own bilingual corpus, has [translated more than 300 million words](https://www.canada.ca/en/translation-bureau/news/2026/06/gctranslate-deployed-government-wide-to-support-official-languages-in-the-federal-public-service.html) and is now used across the federal public service. Professional translators still handle complex and high-stakes texts. It was built once for every department, not once per ministry, and I suspect that choice explains more of its success than the model does.

FEMA runs internal assistants for finance, travel policy and fiscal policy that produce first drafts from agency documents, which staff then refine. The limit is obvious to anyone who has worked in a ministry: if five circulars contradict each other and nobody knows which is current, the assistant will cite whichever one it finds first. The US IRS reported [126 AI use cases](https://www.gao.gov/products/gao-26-107522), yet auditors found it lacked the skilled staff to support them and kept an incomplete inventory of what it ran. The UK's audit office found [70% of bodies piloting or planning AI](https://www.nao.org.uk/reports/use-of-artificial-intelligence-in-government/) but few scaling, held back by legacy systems, data sharing, and skills.

### When "administrative" isn't

The US Medicare WISeR prior-authorisation pilot is often described as back-office automation. Reporting based on FOIA documents describes [high denial rates and month-long delays](https://www.marketwatch.com/story/medicare-is-using-ai-to-approve-claims-the-result-has-been-alarmingly-high-denial-rates-db87d902). When a paperwork decision decides whether someone gets treatment, it is a clinical decision, whatever the procurement document calls it.

In Detroit, Robert Williams was [arrested after a wrong facial-recognition match](https://www.aclumich.org/cases/facial-recognition/) was treated as enough evidence. The software gave police a lead. The department treated it as proof.

## The pattern

Put the cases side by side and they split into two designs:

> **Type A:** documents → AI → summary, ranking, or draft → **officer decides** → service
>
> **Type B:** citizen data → AI → **automatic outcome** → citizen gains or loses a benefit, payment, or freedom

Nearly every success above is Type A. Nearly every scandal is Type B. The technology was often similar. The difference was who signed.

## Five questions before you approve an AI project

1. **Who signs?** Name the officer who owns every consequential outcome. If the answer is "the system," stop.
2. **What happens when it's unsure?** There must be a visible "uncertain → human" path, and it must be used.
3. **Which source is authoritative?** Answers should cite the current regulation, with superseded versions retired, not just buried.
4. **Can a citizen contest it?** If a person can't see why they were flagged and appeal, you are building the next SyRI.
5. **Who evaluates the vendor?** US auditors found agencies [struggle to assess AI bids and rarely share lessons](https://www.gao.gov/products/gao-26-107859). Budget for independent testing on your own data, including the edge cases.

## Where to start

Skip the "AI for the ministry" vision. Choose one agency, one workflow, one number. The maths makes the case better than any vendor slide:

> 100,000 applications a year × 30 minutes of review = **50,000 staff-hours**. Cut review time in half and you get back 25,000 hours, equal to about a dozen full-time officers, without hiring anyone.

Good first candidates are document intake, internal knowledge search, complaint routing, translation, and disaster damage mapping. They save real hours, and when they make mistakes, a person can catch them. Leave automated eligibility, policing, and adjudication until your governance has been tested on the easier cases.

For Nepal in particular, the pieces already exist: satellite imagery, a disaster authority that has worked with AI mapping, and a large body of government documents in Nepali waiting to be made searchable. What's missing is not a better model. It's clean local data, clear ownership of decisions, and officials who know how to question what the model tells them.

Building that last capability is the focus of my [AI training for government and NGOs in Nepal](/ai-training-government-ngos-nepal), where teams work through their own workflows and design the review points before any tool is chosen.

_Rojesh Man Shikhrakar advises and trains public- and private-sector leaders on responsible AI adoption through Fusemachines and Kathmandu University._
