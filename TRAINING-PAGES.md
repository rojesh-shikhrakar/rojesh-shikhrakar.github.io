# Training page authoring

Training landing pages live in `src/content/training`. Each published `.md` file becomes a root-level page using its filename as the URL, is prerendered, appears in the Training submenu, and is included in the sitemap.

For example, `src/content/training/team-ai-foundations.md` creates `/team-ai-foundations`.

## Required frontmatter

```yaml
---
title: 'Unique SEO title'
description: 'Unique page description.'
eyebrow: 'Short context label'
h1: 'Visible page heading'
intro: 'Hero introduction.'
cta: 'Discuss Team AI Foundations'
navLabel: 'Team AI Foundations'
navOrder: 7
layout:
  hero: portrait # portrait | text
  theme: paper # paper | sand | sage
  width: reading # reading | wide
  sections: [content, programs, audiences, approach, evidence, faq, cta]
---
```

The Markdown after the frontmatter is rendered at the position of `content`. Move, remove, or reorder entries under `layout.sections` to change the page structure without editing Svelte. Standard Markdown headings, paragraphs, lists, links, tables, and blockquotes are supported.

Optional `programs`, `audiences`, `approach`, `faqs`, and `labels` frontmatter customize the corresponding sections. See the existing files for examples. Set `draft: true` to keep a file out of navigation, routing, prerendering, and the sitemap.

Every published page must have distinct search intent and unique `title`, `description`, and `h1` values. Keep visible content and frontmatter claims consistent.
