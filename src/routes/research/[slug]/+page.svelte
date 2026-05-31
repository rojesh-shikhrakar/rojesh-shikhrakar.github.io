<script lang="ts">
	import type { PageData } from './$types';
	import { Seo } from '$lib';
	import { site } from '$lib/data/site';

	let { data }: { data: PageData } = $props();

	const articleLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'ScholarlyArticle',
		headline: data.metadata.title,
		abstract: data.metadata.businessContext,
		datePublished: data.metadata.year ? `${data.metadata.year}` : undefined,
		publisher: data.metadata.venue,
		author: {
			'@type': 'Person',
			name: site.name,
			url: site.url
		},
		keywords: (data.metadata.tags ?? []).join(', ')
	});
</script>

<Seo
	title="{data.metadata.title} | Research | {site.name}"
	description="Research by {site.name}: {data.metadata.businessContext ?? data.metadata.title}"
	jsonLd={articleLd}
/>

<div class="research-layout">
	<div class="research-nav">
		<a href="/research" class="back-link">← Back to Research</a>
	</div>

	<div class="research-content">
		<article class="research-article">
			<header class="research-header">
				{#if data.metadata.tags && data.metadata.tags.length > 0}
					<div class="chip-list">
						{#each data.metadata.tags as topic (topic)}
							<span class="chip">{topic}</span>
						{/each}
					</div>
				{/if}
				<h1 class="research-title">{data.metadata.title}</h1>
				<div class="byline">
					{#if data.metadata.year}
						<span class="year">{data.metadata.year}</span>
					{/if}
					{#if data.metadata.venue}
						<span class="venue">{data.metadata.venue}</span>
					{/if}
				</div>
				{#if data.metadata.businessContext}
					<div class="impact">
						<span class="impact-label">Business Impact</span>
						<p class="impact-text">{data.metadata.businessContext}</p>
					</div>
				{/if}
			</header>

			<div class="research-body prose">
				<data.Content />
			</div>
		</article>

		<aside class="research-sidebar">
			<div class="sidebar-card">
				<h3 class="sidebar-heading">Publication</h3>
				<dl class="detail-list">
					{#if data.metadata.venue}
						<dt>Venue</dt>
						<dd>{data.metadata.venue}</dd>
					{/if}
					{#if data.metadata.year}
						<dt>Year</dt>
						<dd>{data.metadata.year}</dd>
					{/if}
					<dt>Author</dt>
					<dd>{site.name}</dd>
				</dl>

				<div class="resource-links">
					<a href={site.social.scholar} target="_blank" rel="noopener noreferrer" class="res-link">
						Google Scholar →
					</a>
					<a href={site.social.arxiv} target="_blank" rel="noopener noreferrer" class="res-link">
						Read Paper (PDF) →
					</a>
					<a href={site.social.github} target="_blank" rel="noopener noreferrer" class="res-link">
						Code & Data →
					</a>
				</div>
			</div>

			<div class="inquiry-card">
				<h3 class="inquiry-heading">Propose a Collaboration</h3>
				<p class="inquiry-body">
					Interested in this line of work, a citation, or a research partnership? I'm always open to
					new collaborations.
				</p>
				<a
					href="mailto:{site.email}?subject=Research Collaboration: {data.metadata.title}"
					class="btn-primary inquiry-btn"
				>
					Get in Touch →
				</a>
			</div>
		</aside>
	</div>
</div>

<style>
	.research-layout {
		max-width: var(--max-width-canvas);
		margin: 0 auto;
		padding: 2rem 0 4rem;
	}

	.research-nav {
		margin-bottom: 2rem;
	}

	.back-link {
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--color-enterprise-blue);
		text-decoration: none;
		transition: var(--transition-smooth);
	}

	.back-link:hover {
		color: var(--color-enterprise-accent);
	}

	.research-content {
		display: grid;
		grid-template-columns: 1fr 20rem;
		gap: 2.5rem;
		align-items: start;
	}

	.research-header {
		margin-bottom: 2rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid var(--color-border);
	}

	.chip-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin-bottom: 0.85rem;
	}

	.chip {
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		background: var(--tint-accent);
		color: var(--color-enterprise-accent);
		padding: 0.25rem 0.6rem;
		border-radius: var(--radius-full);
	}

	.research-title {
		font-size: clamp(1.6rem, 3vw, 2.25rem);
		line-height: 1.25;
		margin-bottom: 0.75rem;
	}

	.byline {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		flex-wrap: wrap;
		margin-bottom: 1.25rem;
	}

	.year {
		font-size: 0.8rem;
		font-weight: 700;
		color: var(--color-enterprise-accent);
		background: var(--tint-accent);
		padding: 0.2rem 0.55rem;
		border-radius: var(--radius-full);
	}

	.venue {
		font-size: 0.85rem;
		color: var(--color-text-muted);
		font-style: italic;
	}

	.impact {
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		padding: 1rem 1.25rem;
	}

	.impact-label {
		display: block;
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--color-enterprise-blue);
		margin-bottom: 0.4rem;
	}

	.impact-text {
		font-size: 0.95rem;
		line-height: 1.7;
		color: var(--color-text-body);
		margin: 0;
	}

	/* Prose styles */
	.research-body :global(h1) {
		font-size: 1.75rem;
		margin-top: 0;
		margin-bottom: 1rem;
	}

	.research-body :global(h2) {
		font-size: 1.35rem;
		border-bottom: 1px solid var(--color-border);
		padding-bottom: 0.4rem;
		margin-top: 2.5rem;
		margin-bottom: 1rem;
	}

	.research-body :global(h3) {
		font-size: 1.1rem;
		margin-top: 1.75rem;
		margin-bottom: 0.6rem;
		color: var(--color-enterprise-blue);
	}

	.research-body :global(p) {
		font-size: 1rem;
		line-height: 1.85;
		color: var(--color-text-body);
		margin-bottom: 1.1rem;
	}

	.research-body :global(ul),
	.research-body :global(ol) {
		padding-left: 1.5rem;
		margin-bottom: 1.25rem;
	}

	.research-body :global(li) {
		font-size: 1rem;
		line-height: 1.7;
		color: var(--color-text-body);
		margin-bottom: 0.4rem;
	}

	.research-body :global(strong) {
		color: var(--color-text-heading);
		font-weight: 700;
	}

	.research-body :global(hr) {
		border: none;
		border-top: 1px solid var(--color-border);
		margin: 2rem 0;
	}

	.research-body :global(blockquote) {
		border-left: 3px solid var(--color-enterprise-accent);
		padding: 0.75rem 1.25rem;
		margin: 1.5rem 0;
		background: var(--color-bg-primary);
		border-radius: 0 var(--radius-md) var(--radius-md) 0;
	}

	/* Sidebar */
	.research-sidebar {
		position: sticky;
		top: 5rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.sidebar-card,
	.inquiry-card {
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-xl);
		padding: 1.5rem;
	}

	.sidebar-heading {
		font-size: 1rem;
		margin-bottom: 1rem;
		color: var(--color-text-heading);
	}

	.detail-list {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0.6rem 1rem;
		margin: 0 0 1.25rem;
		font-size: 0.875rem;
	}

	.detail-list dt {
		font-weight: 700;
		color: var(--color-text-heading);
		white-space: nowrap;
	}

	.detail-list dd {
		color: var(--color-text-body);
		margin: 0;
	}

	.resource-links {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.res-link {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-enterprise-blue);
		text-decoration: none;
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		transition: var(--transition-smooth);
	}

	.res-link:hover {
		border-color: var(--color-enterprise-blue);
		background: var(--tint-blue);
	}

	.inquiry-card {
		background: var(--color-enterprise-slate);
		border-color: #1e293b;
	}

	.inquiry-heading {
		font-size: 1.05rem;
		color: #f1f5f9;
		margin-bottom: 0.75rem;
	}

	.inquiry-body {
		font-size: 0.875rem;
		line-height: 1.7;
		color: #94a3b8;
		margin-bottom: 1.25rem;
	}

	.inquiry-btn {
		width: 100%;
		justify-content: center;
		background: var(--color-enterprise-accent);
	}

	.inquiry-btn:hover {
		background: var(--color-enterprise-accent-hover);
	}

	@media (max-width: 900px) {
		.research-content {
			grid-template-columns: 1fr;
		}

		.research-sidebar {
			position: static;
		}
	}
</style>
