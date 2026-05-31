<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	interface Props {
		index: number;
		title: string;
		institution: string;
		audience: string;
		level: string;
		format: string;
		slug: string;
		delay?: number;
	}

	let { index, title, institution, audience, level, format, slug, delay = 0 }: Props = $props();

	const num = $derived(String(index + 1).padStart(2, '0'));

	// A subtle accent tone per course level, for visual rhythm across the grid.
	const tone = $derived(
		/grad|advanced/i.test(level) ? 'blue' : /exec|leader/i.test(level) ? 'gold' : 'green'
	);
</script>

<article class="course-card tone-{tone}" use:reveal={{ delay }}>
	<div class="card-top">
		<span class="level-badge">{level}</span>
		<span class="card-index">{num}</span>
	</div>

	<h3 class="card-title">
		<a href="/courses/{slug}">{title}</a>
	</h3>
	<p class="card-institution">{institution}</p>

	<dl class="card-meta">
		<div class="meta-item">
			<dt>Audience</dt>
			<dd>{audience}</dd>
		</div>
		<div class="meta-item">
			<dt>Format</dt>
			<dd>{format}</dd>
		</div>
	</dl>

	<span class="card-link">View Details →</span>
</article>

<style>
	.course-card {
		position: relative;
		display: flex;
		flex-direction: column;
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-xl);
		padding: 1.6rem 1.6rem 1.4rem;
		box-shadow: var(--shadow-sm);
		overflow: hidden;
		transition: var(--transition-smooth);
	}

	/* Top accent bar — reveals on hover */
	.course-card::before {
		content: '';
		position: absolute;
		inset: 0 0 auto 0;
		height: 3px;
		background: var(--tone-color);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 0.3s ease;
	}

	.course-card:hover {
		transform: translateY(-6px);
		border-color: var(--tone-color);
		box-shadow: var(--shadow-lg);
	}

	.course-card:hover::before {
		transform: scaleX(1);
	}

	.card-top {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 0.85rem;
	}

	.level-badge {
		font-size: 0.68rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.09em;
		background: var(--tone-tint);
		color: var(--tone-color);
		border: 1px solid var(--tone-border);
		padding: 0.3rem 0.7rem;
		border-radius: var(--radius-full);
	}

	.card-index {
		font-family: var(--font-display);
		font-size: 1.6rem;
		font-weight: 800;
		line-height: 1;
		color: var(--tone-color);
		opacity: 0.28;
	}

	.card-title {
		font-size: 1.2rem;
		line-height: 1.35;
		margin-bottom: 0.4rem;
		color: var(--color-text-heading);
	}

	.card-title a {
		color: inherit;
		text-decoration: none;
		transition: var(--transition-smooth);
	}

	.card-title a:hover {
		color: var(--tone-color);
	}

	/* Stretched link — makes the whole card clickable via the title anchor */
	.card-title a::after {
		content: '';
		position: absolute;
		inset: 0;
	}

	.card-institution {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-text-muted);
		margin: 0 0 1.1rem;
	}

	.card-meta {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.85rem 1rem;
		margin: 0 0 1.25rem;
		padding-top: 1rem;
		border-top: 1px solid var(--color-border);
	}

	.meta-item {
		min-width: 0;
	}

	.card-meta dt {
		font-size: 0.65rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-text-muted);
		margin-bottom: 0.2rem;
	}

	.card-meta dd {
		font-size: 0.875rem;
		line-height: 1.4;
		color: var(--color-text-body);
		margin: 0;
	}

	.card-link {
		margin-top: auto;
		font-size: 0.875rem;
		font-weight: 700;
		color: var(--tone-color);
		transition: var(--transition-smooth);
	}

	.course-card:hover .card-link {
		letter-spacing: 0.02em;
	}

	/* ---- Tones ---- */
	.tone-blue {
		--tone-color: var(--color-enterprise-blue);
		--tone-tint: var(--tint-blue);
		--tone-border: var(--tint-blue-border);
	}

	.tone-green {
		--tone-color: var(--color-enterprise-accent);
		--tone-tint: var(--tint-accent);
		--tone-border: color-mix(in srgb, var(--color-enterprise-accent) 30%, transparent);
	}

	.tone-gold {
		--tone-color: #b45309;
		--tone-tint: rgba(245, 158, 11, 0.14);
		--tone-border: rgba(245, 158, 11, 0.35);
	}

	:global([data-theme='dark']) .tone-gold {
		--tone-color: #fbbf24;
	}
</style>
