# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal site for Rojesh Man Shikhrakar — SvelteKit, fully prerendered, deployed to GitHub Pages.

## Commands

Package manager is **bun**.

```sh
bun run dev            # dev server
bun run build          # static build into build/
bun run preview        # serve the build on :4173
bun run check          # svelte-check (types + Svelte diagnostics)
bun run lint           # prettier --check . && eslint .
bun run format         # prettier --write .
bun run test           # unit (once) + e2e
bun run test:unit      # vitest watch
```

Single test: `bun run test:unit -- --run src/lib/vitest-examples/greet.spec.ts`.
Single project: append `--project=server` or `--project=client`.

## Architecture

**No `svelte.config.js`.** All SvelteKit/Svelte config lives inside the `sveltekit()` plugin call in `vite.config.ts` — adapter (`adapter-static`), mdsvex preprocessor, `.md`/`.svx` as component extensions, and forced runes mode. Change config there.

`export const prerender = true` in `src/routes/+layout.ts` makes the whole site static. Any dynamic route therefore needs an `entries()` export in its `+page.ts` (see `src/routes/insights/[category]/[slug]/+page.ts`). Deploy is `.github/workflows/deploy.yml` on push to `main`.

### Content pipeline

Markdown under `src/content/` is compiled at build time — mdsvex turns each `.md` into a Svelte component, and `import.meta.glob(..., { eager: true })` collects them in `src/lib/blog.ts` (blog → `/insights/...`) and `src/lib/programs.ts` (courses/seminars/workshops/resources → `/programs/...`). There is no CMS, no fetch, no server code.

The **directory name is the category** and the filename is the slug: `src/content/blog/leadership/foo.md` → `/insights/leadership/foo`. To add content, drop a `.md` file with the right frontmatter into the matching folder — nothing to register. To add a _category_, add it to `blogCategories` / `programCategories` in those lib files (the arrays drive nav tabs and labels).

Frontmatter shapes are the `BlogMetadata` / `ProgramMetadata` types. Programs carry most of their prose in a frontmatter `content` string rendered through `marked`; the markdown body below the frontmatter is optional extra detail, flagged by `hasAdditionalDetails`.

### Styling

Hand-written CSS with semantic class names in `src/app.css` (CSS custom properties in `:root`; it `@import`s `src/programs.css`), loaded once from `src/routes/+layout.svelte`. Tailwind is installed and imported but essentially unused — match the existing plain-CSS style rather than introducing utility classes. `src/routes/layout.css` is dead.

Internal links go through `resolve()` from `$app/paths`.

### Tests

Vitest runs two projects (`vite.config.ts`): **client** for `*.svelte.{test,spec}.ts` in a real headless Chromium, **server** for everything else in node. `expect.requireAssertions` is on, so a test with no assertion fails. Playwright picks up `**/*.e2e.ts` (none exist yet) against the built site.

## Svelte MCP server

`AGENTS.md` documents the Svelte MCP tools available here: `list-sections` + `get-documentation` before answering Svelte/SvelteKit questions, and `svelte-autofixer` on any Svelte code you write until it reports no issues.
