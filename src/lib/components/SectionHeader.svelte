<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	interface Props {
		eyebrow?: string;
		title: string;
		body?: string;
		/** Render light text for use on dark/contrast sections. */
		onContrast?: boolean;
	}

	let { eyebrow, title, body, onContrast = false }: Props = $props();
</script>

<div class="section-header" class:on-contrast={onContrast} use:reveal>
	{#if eyebrow}
		<span class="eyebrow">{eyebrow}</span>
	{/if}
	<h2>{title}</h2>
	{#if body}
		<p>{body}</p>
	{/if}
</div>

<style>
	.section-header {
		max-width: 46rem;
		margin-bottom: 2.5rem;
	}

	.eyebrow {
		display: inline-flex;
		margin-bottom: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		font-size: 0.8rem;
		font-weight: 700;
		color: var(--color-enterprise-accent);
	}

	h2 {
		font-size: var(--text-h2);
		margin-bottom: 1rem;
	}

	p {
		font-size: var(--text-lg);
		line-height: 1.8;
		color: var(--color-text-body);
		margin: 0;
	}

	.on-contrast h2 {
		color: var(--text-on-contrast);
	}

	.on-contrast p {
		color: var(--text-on-contrast-muted);
	}
</style>
