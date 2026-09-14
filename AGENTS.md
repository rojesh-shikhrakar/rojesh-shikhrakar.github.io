## Project Configuration

- **Language**: TypeScript
- **Package Manager**: bun
- **Add-ons**: prettier, eslint, vitest, playwright, tailwindcss, sveltekit-adapter, mdsvex, ai-tools

---

You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available Svelte MCP Tools:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.

## SEO implementation principles

1. Never keyword-stuff copy or hide text for search engines.
2. Never invent testimonials, clients, metrics, awards, outcomes, or affiliations.
3. Never create location doorway pages or near-duplicate search pages.
4. Every SEO page must target a distinct search intent.
5. Every factual claim must come from repository data or approved content.
6. Preserve one canonical Person entity and reuse centrally stored facts.
7. Every new indexable page requires a unique title, description, canonical, H1, OpenGraph metadata, breadcrumb, and sitemap entry.
8. Prefer SSR or static HTML for SEO-critical content.
9. Validate JSON-LD and keep it consistent with visible page content.
10. Preserve accessible semantics and useful information architecture.
