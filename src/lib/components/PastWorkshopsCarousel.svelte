<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { PastEngagement } from '$lib/data/site';

	interface Props {
		items: PastEngagement[];
	}

	let { items }: Props = $props();

	let current = $state(0);
	let perPage = $state(6);

	const maxStart = Math.max(0, items.length - perPage);

	function prev() {
		current = Math.max(0, current - 1);
	}

	function next() {
		current = Math.min(maxStart, current + 1);
	}

	const canPrev = $derived(current > 0);
	const canNext = $derived(current < maxStart);

	function show(i: number) {
		current = i;
	}
</script>

<div class="carousel-container" use:reveal>
	<div class="carousel-viewport">
		<div class="carousel-track" style="--translate: {current * -100 / perPage}%">
			{#each items as item, i (item.title)}
				<article class="past-card carousel-item">
					<div class="past-media tone-{i % 4}">
						{#if item.image}
							<img src={item.image} alt={item.title} loading="lazy" />
						{:else}
							<svg class="past-icon" viewBox="0 0 24 24" aria-hidden="true">
								<path
									d="M4 4h16v11H4zM2 15h20M9 20h6M12 17v3"
									fill="none"
									stroke="currentColor"
									stroke-width="1.6"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<circle cx="12" cy="9.5" r="2.2" fill="currentColor" />
							</svg>
						{/if}
						<span class="past-date">{item.date}</span>
					</div>
					<div class="past-body">
						<h3 class="past-title">{item.title}</h3>
						<p class="past-org">{item.org}</p>
						{#if item.note}
							<p class="past-note">{item.note}</p>
						{/if}
					</div>
				</article>
			{/each}
		</div>
	</div>

	<div class="carousel-controls">
		<button
			class="carousel-arrow"
			onclick={prev}
			disabled={!canPrev}
			aria-label="Previous workshops"
		>
			&#8592;
		</button>

		<div class="carousel-dots">
			{#each Array.from({ length: Math.max(1, items.length - perPage + 1) }) as _, i (i)}
				<button
					class="carousel-dot"
					class:active={i === current}
					onclick={() => show(i)}
					aria-label="Go to workshop group {i + 1}"
					aria-current={i === current}
				></button>
			{/each}
		</div>

		<button
			class="carousel-arrow"
			onclick={next}
			disabled={!canNext}
			aria-label="Next workshops"
		>
			&#8594;
		</button>
	</div>
</div>

<style>
	.carousel-container {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		border-radius: var(--radius-xl);
	}

	.carousel-viewport {
		overflow: hidden;
		border-radius: var(--radius-xl);
	}

	.carousel-track {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		transition: transform 0.3s ease;
		transform: translateX(var(--translate));
	}

	.carousel-item {
		min-width: 17rem;
	}

	/* Reuse past-card styles from workshops/+page.svelte */
	.past-card {
		display: flex;
		flex-direction: column;
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-xl);
		overflow: hidden;
		box-shadow: var(--shadow-sm);
		transition: var(--transition-smooth);
	}

	.past-card:hover {
		transform: translateY(-4px);
		border-color: var(--color-enterprise-accent);
		box-shadow: var(--shadow-lg);
	}

	.past-media {
		position: relative;
		height: 8.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		color: rgba(255, 255, 255, 0.92);
		overflow: hidden;
	}

	.past-media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.past-icon {
		width: 2.75rem;
		height: 2.75rem;
		opacity: 0.85;
	}

	.tone-0 {
		background: linear-gradient(135deg, #2563eb, #1e40af);
	}
	.tone-1 {
		background: linear-gradient(135deg, #059669, #047857);
	}
	.tone-2 {
		background: linear-gradient(135deg, #7c3aed, #5b21b6);
	}
	.tone-3 {
		background: linear-gradient(135deg, #0f172a, #334155);
	}

	.past-date {
		position: absolute;
		top: 0.75rem;
		left: 0.75rem;
		font-size: 0.72rem;
		font-weight: 700;
		color: #fff;
		background: rgba(15, 23, 42, 0.55);
		backdrop-filter: blur(4px);
		padding: 0.25rem 0.65rem;
		border-radius: var(--radius-full);
	}

	.past-body {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		padding: 1.1rem 1.25rem 1.35rem;
	}

	.past-title {
		font-size: 1rem;
		line-height: 1.35;
		color: var(--color-text-heading);
	}

	.past-org {
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--color-enterprise-blue);
		margin: 0;
	}

	.past-note {
		font-size: 0.8rem;
		line-height: 1.5;
		color: var(--color-text-muted);
		margin: 0.15rem 0 0;
	}

	.carousel-controls {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.carousel-arrow {
		border: 1px solid var(--color-border);
		background: var(--color-bg-secondary);
		color: var(--color-text-heading);
		width: 2.5rem;
		height: 2.5rem;
		border-radius: var(--radius-full);
		cursor: pointer;
		font-size: 1rem;
		transition: var(--transition-smooth);
	}

	.carousel-arrow:hover:not(:disabled) {
		border-color: var(--color-enterprise-accent);
		color: var(--color-enterprise-accent);
	}

	.carousel-arrow:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}

	.carousel-dots {
		display: flex;
		gap: 0.5rem;
	}

	.carousel-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--color-border-strong);
		border: none;
		cursor: pointer;
		padding: 0;
		transition: var(--transition-smooth);
	}

	.carousel-dot.active {
		background: var(--color-enterprise-blue);
		transform: scale(1.35);
	}

	@media (max-width: 1024px) {
		.carousel-track {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 640px) {
		.carousel-track {
			grid-template-columns: 1fr;
		}

		.carousel-item {
			min-width: 100%;
		}
	}
</style>
