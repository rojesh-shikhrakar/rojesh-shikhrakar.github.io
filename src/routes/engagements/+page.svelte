<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { engagementKinds, pastEngagements, type EngagementKind } from '$lib/engagements';

	type Filter = 'All' | EngagementKind;
	let activeFilter = $state<Filter>('All');
	let visibleEngagements = $derived(
		activeFilter === 'All'
			? pastEngagements
			: pastEngagements.filter((engagement) => engagement.kind === activeFilter)
	);

	const counts = Object.fromEntries(
		engagementKinds.map((kind) => [
			kind,
			kind === 'All'
				? pastEngagements.length
				: pastEngagements.filter((engagement) => engagement.kind === kind).length
		])
	);
</script>

<Seo
	title="Past Engagements — Workshops, Talks & Media"
	description="An archive of workshops, talks, panel discussions, podcasts, published articles and media appearances by Rojesh Man Shikhrakar."
/>

<main class="engagements-page">
	<header class="engagements-hero container">
		<div>
			<p class="eyebrow">Selected archive</p>
			<h1>Ideas shared.<br />Conversations started.</h1>
		</div>
		<p class="lead">
			A growing record of workshops, talks, panels, podcasts, published articles, and media
			appearances exploring artificial intelligence, education, research, and leadership.
		</p>
	</header>

	<section class="archive-shell" aria-labelledby="archive-title">
		<div class="archive-toolbar container">
			<div>
				<p class="section-kicker">The archive</p>
				<h2 id="archive-title">Past engagements</h2>
			</div>
			<div class="archive-count" aria-live="polite">
				<strong>{visibleEngagements.length}</strong>
				<span>{activeFilter === 'All' ? 'entries' : activeFilter.toLowerCase() + ' entries'}</span>
			</div>
		</div>

		<div class="filter-wrap">
			<div class="filters container" aria-label="Filter past engagements">
				{#each engagementKinds as kind}
					<button
						type="button"
						class:active={activeFilter === kind}
						aria-pressed={activeFilter === kind}
						onclick={() => (activeFilter = kind)}
					>
						{kind} <span>{counts[kind]}</span>
					</button>
				{/each}
			</div>
		</div>

		<div class="engagement-list container">
			{#each visibleEngagements as engagement (`${engagement.kind}-${engagement.title}`)}
				<article class:has-image={engagement.image}>
					{#if engagement.image}
						<img src={engagement.image} alt="" width="320" height="200" loading="lazy" />
					{/if}
					<div class="entry-year">{engagement.year === 9999 ? 'Now' : engagement.year}</div>
					<div class="entry-main">
						<div class="entry-meta">
							<span>{engagement.kind}</span>
							{#if engagement.date}<time>{engagement.date}</time>{/if}
						</div>
						<h3>
							{#if engagement.href}
								<a href={engagement.href} target="_blank" rel="noreferrer">{engagement.title}</a>
							{:else}
								{engagement.title}
							{/if}
						</h3>
						{#if engagement.org}<p class="entry-org">{engagement.org}</p>{/if}
						{#if engagement.note}<p class="entry-note">{engagement.note}</p>{/if}
					</div>
					{#if engagement.href}
						<a
							class="entry-link"
							href={engagement.href}
							target="_blank"
							rel="noreferrer"
							aria-label={`Open ${engagement.title} in a new tab`}
						>
							<span>View</span><span aria-hidden="true">↗</span>
						</a>
					{/if}
				</article>
			{/each}
		</div>
	</section>
</main>

<style>
	.engagements-hero {
		display: grid;
		grid-template-columns: 1.15fr 0.85fr;
		align-items: end;
		gap: clamp(3rem, 8vw, 8rem);
		padding-block: clamp(5rem, 9vw, 8.5rem);
	}
	.engagements-hero h1 {
		max-width: 12ch;
		margin-bottom: 0;
	}
	.engagements-hero .lead {
		margin: 0 0 0.45rem;
	}
	.archive-shell {
		padding: clamp(4rem, 7vw, 6.5rem) 0 7rem;
		background: var(--ink-deep);
		color: var(--paper);
	}
	.archive-toolbar {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 2rem;
	}
	.section-kicker {
		margin: 0 0 0.7rem;
		color: var(--bronze-light);
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
	}
	.archive-toolbar h2 {
		margin: 0;
	}
	.archive-count {
		display: flex;
		align-items: baseline;
		gap: 0.65rem;
		color: #b8c0c4;
	}
	.archive-count strong {
		color: var(--paper);
		font-family: var(--serif);
		font-size: 2rem;
		font-weight: 500;
	}
	.filter-wrap {
		margin-top: 2.5rem;
		border-block: 1px solid rgba(255, 255, 255, 0.14);
	}
	.filters {
		display: flex;
		gap: 0.35rem;
		overflow-x: auto;
		padding-block: 0.75rem;
		scrollbar-width: none;
	}
	.filters::-webkit-scrollbar {
		display: none;
	}
	.filters button {
		min-height: 2.75rem;
		flex: 0 0 auto;
		padding: 0.55rem 1rem;
		border: 1px solid transparent;
		border-radius: 999px;
		background: transparent;
		color: #bdc5c8;
		font: 600 0.85rem var(--sans);
		cursor: pointer;
	}
	.filters button:hover {
		color: white;
	}
	.filters button.active {
		border-color: rgba(177, 239, 224, 0.42);
		background: rgba(177, 239, 224, 0.1);
		color: var(--teal-light);
	}
	.filters button span {
		margin-left: 0.35rem;
		font-size: 0.7rem;
		opacity: 0.72;
	}
	.engagement-list article {
		display: grid;
		grid-template-columns: 5rem minmax(0, 1fr) auto;
		gap: clamp(1.25rem, 4vw, 4rem);
		align-items: start;
		padding-block: clamp(2rem, 4vw, 3.25rem);
		border-bottom: 1px solid rgba(255, 255, 255, 0.14);
	}
	.engagement-list article.has-image {
		grid-template-columns: 13rem 5rem minmax(0, 1fr) auto;
	}
	.engagement-list img {
		width: 100%;
		aspect-ratio: 8/5;
		border-radius: 0.35rem;
		object-fit: cover;
	}
	.entry-year {
		padding-top: 0.3rem;
		color: var(--bronze-light);
		font-family: var(--serif);
		font-size: 1.35rem;
	}
	.entry-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem 1rem;
		margin-bottom: 0.75rem;
		color: #aeb8bc;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.11em;
		text-transform: uppercase;
	}
	.entry-meta span {
		color: var(--teal-light);
	}
	.entry-main h3 {
		max-width: 28ch;
		margin: 0;
		color: #fffdf9;
		font-size: clamp(1.5rem, 3vw, 2.15rem);
	}
	.entry-main h3 a:hover {
		color: var(--teal-light);
	}
	.entry-org {
		margin: 0.7rem 0 0;
		color: #d9dedf;
	}
	.entry-note {
		margin: 0.35rem 0 0;
		color: #949fa3;
		font-size: 0.9rem;
	}
	.entry-link {
		display: inline-flex;
		min-width: 4.5rem;
		min-height: 2.75rem;
		align-items: center;
		justify-content: flex-end;
		gap: 0.5rem;
		color: var(--teal-light);
		font-size: 0.85rem;
		font-weight: 700;
	}
	.entry-link span:last-child {
		font-size: 1.2rem;
		transition: transform 160ms ease;
	}
	.entry-link:hover span:last-child {
		transform: translate(2px, -2px);
	}
	@media (max-width: 720px) {
		.engagements-hero {
			grid-template-columns: 1fr;
			gap: 2rem;
			padding-block: 4.5rem;
		}
		.engagements-hero h1 {
			font-size: clamp(3rem, 14vw, 4.25rem);
		}
		.archive-toolbar {
			align-items: start;
		}
		.archive-count span {
			display: none;
		}
		.engagement-list article,
		.engagement-list article.has-image {
			grid-template-columns: 3.3rem minmax(0, 1fr) auto;
			gap: 1rem;
		}
		.engagement-list img {
			grid-column: 2 / -1;
		}
		.entry-year {
			font-size: 1.05rem;
		}
		.entry-link span:first-child {
			display: none;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.entry-link span:last-child {
			transition: none;
		}
	}
</style>
