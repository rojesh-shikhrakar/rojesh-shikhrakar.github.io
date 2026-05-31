<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	interface Props {
		tag?: string;
		title: string;
		duration?: string;
		takeaway?: string;
		tools?: string[];
		href: string;
		ctaLabel?: string;
		delay?: number;
	}

	let {
		tag,
		title,
		duration,
		takeaway,
		tools = [],
		href,
		ctaLabel = 'View Syllabus & Book →',
		delay = 0
	}: Props = $props();
</script>

<article class="workshop-card" use:reveal={{ delay }}>
	{#if tag}
		<span class="workshop-tag">{tag}</span>
	{/if}
	<h3 class="card-title">{title}</h3>
	{#if duration}
		<p class="workshop-duration">{duration}</p>
	{/if}
	{#if takeaway}
		<p class="card-body">{takeaway}</p>
	{/if}
	{#if tools.length}
		<div class="tools-list">
			{#each tools as tool (tool)}
				<span class="tool-chip">{tool}</span>
			{/each}
		</div>
	{/if}
	<a {href} class="workshop-cta btn-primary">{ctaLabel}</a>
</article>

<style>
	.workshop-card {
		display: flex;
		flex-direction: column;
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-xl);
		padding: 1.75rem;
		box-shadow: var(--shadow-sm);
		transition: var(--transition-smooth);
	}

	.workshop-card:hover {
		transform: translateY(-4px);
		border-color: var(--color-enterprise-accent);
		box-shadow: var(--shadow-lg);
	}

	.workshop-tag {
		display: inline-flex;
		align-self: flex-start;
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--color-enterprise-accent);
		margin-bottom: 0.75rem;
	}

	.card-title {
		font-size: var(--text-xl);
		margin-bottom: 0.5rem;
		color: var(--color-text-heading);
	}

	.workshop-duration {
		margin: 0.25rem 0 1rem;
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--color-text-heading);
	}

	.card-body {
		font-size: 0.95rem;
		line-height: 1.7;
		color: var(--color-text-body);
		margin-bottom: 1rem;
	}

	.tools-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin-bottom: 1.25rem;
	}

	.tool-chip {
		font-size: 0.72rem;
		font-weight: 600;
		background: var(--tint-blue);
		color: var(--color-enterprise-blue);
		border: 1px solid var(--tint-blue-border);
		padding: 0.25rem 0.65rem;
		border-radius: var(--radius-full);
	}

	.workshop-cta {
		margin-top: auto;
		align-self: flex-start;
	}
</style>
