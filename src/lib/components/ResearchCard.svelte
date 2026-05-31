<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { site } from '$lib/data/site';

	interface Paper {
		slug: string;
		technicalTitle: string;
		businessContext: string;
		tags: string[];
		year: number;
		venue: string;
	}

	interface Props {
		paper: Paper;
		/** 'compact' for the homepage grid, 'full' for the research page list. */
		variant?: 'compact' | 'full';
		delay?: number;
	}

	let { paper, variant = 'compact', delay = 0 }: Props = $props();
</script>

<article class="research-card" class:full={variant === 'full'} use:reveal={{ delay }}>
	<div class="card-head">
		<div class="tags">
			{#each paper.tags as tag (tag)}
				<span class="tag">{tag}</span>
			{/each}
		</div>
		{#if variant === 'full'}
			<div class="year-venue">
				<span class="year">{paper.year}</span>
				<span class="venue">{paper.venue}</span>
			</div>
		{/if}
	</div>

	<h3 class="title">
		<a href="/research/{paper.slug}" class="title-link">{paper.technicalTitle}</a>
	</h3>

	{#if variant === 'full'}
		<div class="impact">
			<span class="impact-label">Business Impact</span>
			<p class="impact-text">{paper.businessContext}</p>
		</div>
	{:else}
		<p class="translation">
			<strong>Business context:</strong>
			{paper.businessContext}
		</p>
		<div class="meta">
			<span class="year">{paper.year}</span>
			<span class="venue">{paper.venue}</span>
		</div>
	{/if}

	<div class="links">
		<a href="/research/{paper.slug}" class="link link-primary">Full Paper →</a>
		<a href={site.social.scholar} target="_blank" rel="noopener noreferrer" class="link">Scholar</a>
		<a href={site.social.github} target="_blank" rel="noopener noreferrer" class="link">GitHub</a>
		<a href={site.social.arxiv} target="_blank" rel="noopener noreferrer" class="link">PDF</a>
		{#if variant === 'full'}
			<a href={site.social.scholar} target="_blank" rel="noopener noreferrer" class="link">Cite</a>
		{/if}
	</div>
</article>

<style>
	.research-card {
		background: var(--surface-contrast-card);
		border: 1px solid var(--surface-contrast-border);
		border-radius: var(--radius-xl);
		padding: 1.75rem;
		transition: var(--transition-smooth);
	}

	.research-card.full {
		padding: 2rem;
	}

	.research-card:hover {
		transform: translateY(-4px);
		border-color: var(--color-enterprise-accent);
		box-shadow: var(--shadow-lg);
	}

	.card-head {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
		flex-wrap: wrap;
		margin-bottom: 0.85rem;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.tag {
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		background: var(--tint-accent);
		color: var(--color-enterprise-accent);
		padding: 0.25rem 0.6rem;
		border-radius: var(--radius-full);
	}

	.year-venue,
	.meta {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		flex-shrink: 0;
		flex-wrap: wrap;
	}

	.meta {
		margin: 1rem 0 0.75rem;
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
		font-size: 0.8rem;
		color: #94a3b8;
		font-style: italic;
	}

	.title {
		font-size: 1.1rem;
		line-height: 1.45;
		color: var(--text-on-contrast);
		margin-bottom: 0.75rem;
	}

	.title-link {
		color: inherit;
		text-decoration: none;
		transition: var(--transition-smooth);
	}

	.title-link:hover {
		color: var(--color-enterprise-accent);
	}

	.translation {
		font-size: 0.925rem;
		line-height: 1.7;
		color: var(--text-on-contrast-muted);
		margin: 0;
	}

	.translation strong {
		color: var(--color-enterprise-accent);
	}

	.impact {
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid var(--surface-contrast-border);
		border-radius: var(--radius-md);
		padding: 1rem;
		margin-bottom: 1.25rem;
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
		font-size: 0.925rem;
		line-height: 1.7;
		color: var(--text-on-contrast-muted);
		margin: 0;
	}

	.links {
		display: flex;
		gap: 0.75rem;
		flex-wrap: wrap;
		margin-top: 1rem;
	}

	.link {
		font-size: 0.82rem;
		font-weight: 600;
		color: var(--color-enterprise-blue);
		text-decoration: none;
		border: 1px solid var(--surface-contrast-border);
		padding: 0.3rem 0.7rem;
		border-radius: var(--radius-md);
		transition: var(--transition-smooth);
	}

	.link:hover {
		background: var(--tint-blue);
		border-color: var(--color-enterprise-blue);
	}

	.link-primary {
		color: var(--color-enterprise-accent);
		border-color: var(--color-enterprise-accent);
	}

	.link-primary:hover {
		background: var(--tint-accent);
		border-color: var(--color-enterprise-accent);
	}
</style>
