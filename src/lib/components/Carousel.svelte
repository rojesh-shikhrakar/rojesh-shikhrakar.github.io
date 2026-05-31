<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { SvelteSet } from 'svelte/reactivity';
	import type { Picture } from '@sveltejs/enhanced-img';

	interface Slide {
		/** Enhanced image import (`*.jpg?enhanced`). */
		img: Picture;
		workshop: string;
		client: string;
		metric: string;
	}

	interface Props {
		slides: Slide[];
		autoplayMs?: number;
	}

	let { slides, autoplayMs = 5000 }: Props = $props();

	let current = $state(0);
	let paused = $state(false);
	// Defer image loading: only slides that have been shown are rendered.
	const loaded = new SvelteSet<number>([0]);

	function show(i: number) {
		current = (i + slides.length) % slides.length;
		loaded.add(current);
	}

	const next = () => show(current + 1);
	const prev = () => show(current - 1);

	function onKey(e: KeyboardEvent) {
		if (e.key === 'ArrowLeft') prev();
		if (e.key === 'ArrowRight') next();
	}

	$effect(() => {
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduceMotion || paused) return;
		const timer = setInterval(next, autoplayMs);
		return () => clearInterval(timer);
	});
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
	class="carousel"
	role="region"
	aria-roledescription="carousel"
	aria-label="Workshop photo gallery"
	tabindex="0"
	onkeydown={onKey}
	onmouseenter={() => (paused = true)}
	onmouseleave={() => (paused = false)}
	onfocusin={() => (paused = true)}
	onfocusout={() => (paused = false)}
	use:reveal
>
	<div class="stage">
		{#each slides as slide, i (slide.workshop)}
			<div
				class="slide"
				class:active={i === current}
				role="group"
				aria-roledescription="slide"
				aria-label="{i + 1} of {slides.length}"
				aria-hidden={i !== current}
			>
				<div class="img-wrap">
					{#if loaded.has(i)}
						<enhanced:img
							src={slide.img}
							alt="{slide.workshop} — {slide.client}"
							class="img"
							sizes="(min-width: 880px) 880px, 100vw"
							loading="lazy"
						/>
					{/if}
					<span class="overlay">{slide.metric}</span>
				</div>
				<div class="caption">
					<p class="title">{slide.workshop}</p>
					<p class="meta">{slide.client}</p>
				</div>
			</div>
		{/each}
	</div>

	<div class="controls">
		<button class="arrow" onclick={prev} aria-label="Previous slide">&#8592;</button>
		<div class="dots">
			{#each slides as slide, i (slide.workshop)}
				<button
					class="dot"
					class:active={i === current}
					onclick={() => show(i)}
					aria-label="Go to slide {i + 1}"
					aria-current={i === current}
				></button>
			{/each}
		</div>
		<button class="arrow" onclick={next} aria-label="Next slide">&#8594;</button>
	</div>
</div>

<style>
	.carousel {
		border-radius: var(--radius-xl);
		overflow: hidden;
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		box-shadow: var(--shadow-md);
		outline-offset: 3px;
	}

	.stage {
		position: relative;
		min-height: 420px;
	}

	.slide {
		position: absolute;
		inset: 0;
		opacity: 0;
		transition: opacity 0.6s ease;
		pointer-events: none;
	}

	.slide.active {
		position: relative;
		opacity: 1;
		pointer-events: auto;
	}

	.img-wrap {
		position: relative;
		width: 100%;
		height: 340px;
		overflow: hidden;
		background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);
	}

	.img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.overlay {
		position: absolute;
		top: 1rem;
		left: 1rem;
		background: rgba(0, 0, 0, 0.65);
		color: #fff;
		padding: 0.4rem 0.9rem;
		border-radius: var(--radius-full);
		font-size: 0.8rem;
		font-weight: 600;
	}

	.caption {
		padding: 1.25rem 1.5rem;
	}

	.title {
		font-family: var(--font-display);
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--color-text-heading);
		margin: 0 0 0.35rem;
	}

	.meta {
		font-size: 0.9rem;
		color: var(--color-text-muted);
		margin: 0;
	}

	.controls {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		padding: 1rem 1.5rem 1.25rem;
		border-top: 1px solid var(--color-border);
	}

	.arrow {
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

	.arrow:hover {
		border-color: var(--color-enterprise-accent);
		color: var(--color-enterprise-accent);
	}

	.dots {
		display: flex;
		gap: 0.5rem;
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--color-border-strong);
		border: none;
		cursor: pointer;
		padding: 0;
		transition: var(--transition-smooth);
	}

	.dot.active {
		background: var(--color-enterprise-blue);
		transform: scale(1.35);
	}

	@media (max-width: 768px) {
		.img-wrap {
			height: 220px;
		}

		.stage {
			min-height: 320px;
		}
	}
</style>
