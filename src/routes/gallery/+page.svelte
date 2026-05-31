<script lang="ts">
	import { site } from '$lib/data/site';
	import { Seo, SectionHeader } from '$lib';
	import { reveal } from '$lib/actions/reveal';
	import { australia, candid, coding, graph, profile } from '$lib/img/images';

	const photos = [
		{
			src: australia,
			alt: 'AI for Productivity Masterclass — Australia Awards Cohort',
			caption: 'AI for Productivity Masterclass',
			context: 'Australia Awards Cohort · 2024',
			category: 'Workshop'
		},
		{
			src: candid,
			alt: 'Prompt Engineering Intensive — Fusemachines Enterprise',
			caption: 'Prompt Engineering Intensive',
			context: 'Fusemachines Enterprise · 2023',
			category: 'Workshop'
		},
		{
			src: coding,
			alt: 'Applied LLMs for Business — Government Ministry of ICT',
			caption: 'Applied LLMs for Business',
			context: 'Government Ministry of ICT · 2023',
			category: 'Training'
		},
		{
			src: graph,
			alt: 'Data Science & AI Foundations — Kathmandu University',
			caption: 'Data Science & AI Foundations',
			context: 'Kathmandu University · 2024',
			category: 'Academic'
		},
		{
			src: profile,
			alt: 'Rojesh Man Shikhrakar — Lead AI Educator',
			caption: 'Rojesh Man Shikhrakar',
			context: 'Lead AI Educator, Fusemachines',
			category: 'Profile'
		}
	];

	const categories = ['All', ...new Set(photos.map((p) => p.category))];
	let activeCategory = $state('All');

	const filteredPhotos = $derived(
		activeCategory === 'All' ? photos : photos.filter((p) => p.category === activeCategory)
	);

	let lightboxOpen = $state(false);
	let lightboxIndex = $state(0);

	function openLightbox(i: number) {
		lightboxIndex = i;
		lightboxOpen = true;
	}

	function closeLightbox() {
		lightboxOpen = false;
	}

	function lightboxPrev() {
		lightboxIndex = (lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
	}

	function lightboxNext() {
		lightboxIndex = (lightboxIndex + 1) % filteredPhotos.length;
	}

	function handleLightboxKey(e: KeyboardEvent) {
		if (!lightboxOpen) return;
		if (e.key === 'Escape') closeLightbox();
		if (e.key === 'ArrowLeft') lightboxPrev();
		if (e.key === 'ArrowRight') lightboxNext();
	}
</script>

<Seo
	title="Gallery & Media | {site.name}"
	description="Photo gallery and media from workshops, lectures, and corporate training programs by {site.name}."
/>

<svelte:window onkeydown={handleLightboxKey} />

<section class="page-hero">
	<div class="hero-content" use:reveal>
		<span class="eyebrow">Visual Record</span>
		<h1>Gallery & Media</h1>
		<p>
			A visual record of workshops, lectures, and training engagements across Nepal, Australia, and
			Southeast Asia.
		</p>
	</div>
</section>

<!-- Photo Gallery -->
<section class="section">
	<SectionHeader eyebrow="Photography" title="Workshop & Event Photos" />

	<div class="category-filter">
		{#each categories as cat (cat)}
			<button
				class="filter-btn"
				class:active={cat === activeCategory}
				onclick={() => (activeCategory = cat)}
			>
				{cat}
			</button>
		{/each}
	</div>

	<div class="gallery-grid">
		{#each filteredPhotos as photo, i (photo.caption)}
			<button
				class="gallery-item"
				onclick={() => openLightbox(i)}
				aria-label="View {photo.caption}"
			>
				<enhanced:img
					src={photo.src}
					alt={photo.alt}
					class="gallery-img"
					sizes="(min-width: 880px) 24rem, 100vw"
					loading="lazy"
				/>
				<div class="gallery-overlay">
					<span class="gallery-category">{photo.category}</span>
					<div class="gallery-caption">
						<p class="caption-title">{photo.caption}</p>
						<p class="caption-context">{photo.context}</p>
					</div>
				</div>
			</button>
		{/each}
	</div>
</section>

<!-- Video Reels Placeholder -->
<section class="section section-alt">
	<div class="inner-wrap">
		<SectionHeader
			eyebrow="Video"
			title="Video Reels"
			body="Workshop highlight reels, lecture excerpts, and keynote recordings. Coming soon."
		/>
		<div class="video-placeholder-grid">
			{#each [1, 2, 3] as n (n)}
				<div class="video-placeholder" use:reveal={{ delay: n * 70 }}>
					<div class="video-thumb">
						<span class="play-icon">&#9654;</span>
					</div>
					<p class="video-title">Workshop Highlight Reel {n}</p>
					<p class="video-meta">Coming Soon</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Press & Media Kit -->
<section class="section">
	<SectionHeader
		eyebrow="Press"
		title="Press & Media Kit"
		body="Resources for journalists, conference organizers, and media partners."
	/>
	<div class="media-kit-grid">
		<div class="media-kit-card" use:reveal>
			<h3>Headshots & Photos</h3>
			<p>High-resolution profile photos and workshop images cleared for media use.</p>
			<a href="mailto:{site.email}?subject=Media Kit Request" class="btn-primary kit-btn">
				Request Media Kit →
			</a>
		</div>
		<div class="media-kit-card" use:reveal={{ delay: 90 }}>
			<h3>Speaker Bio</h3>
			<p>Short (100-word) and long (300-word) professional bios, ready for event programs.</p>
			<a href="mailto:{site.email}?subject=Speaker Bio Request" class="btn-primary kit-btn">
				Request Bio →
			</a>
		</div>
		<div class="media-kit-card" use:reveal={{ delay: 180 }}>
			<h3>Interview Requests</h3>
			<p>
				Available for podcast interviews, written Q&As, and panel discussions on AI education and
				enterprise deployment.
			</p>
			<a href="mailto:{site.email}?subject=Interview Request" class="btn-primary kit-btn">
				Get in Touch →
			</a>
		</div>
	</div>
</section>

<!-- Lightbox -->
{#if lightboxOpen}
	<div class="lightbox-overlay" role="dialog" aria-modal="true" aria-label="Photo lightbox">
		<button class="lightbox-backdrop" aria-label="Close lightbox" onclick={closeLightbox}></button>
		<div class="lightbox-inner">
			<button class="lightbox-close" onclick={closeLightbox} aria-label="Close lightbox">
				&times;
			</button>
			<button class="lightbox-nav lightbox-prev" onclick={lightboxPrev} aria-label="Previous photo">
				&#8592;
			</button>
			<div class="lightbox-content">
				<enhanced:img
					src={filteredPhotos[lightboxIndex].src}
					alt={filteredPhotos[lightboxIndex].alt}
					class="lightbox-img"
					sizes="80vw"
				/>
				<div class="lightbox-caption">
					<p class="lb-title">{filteredPhotos[lightboxIndex].caption}</p>
					<p class="lb-context">{filteredPhotos[lightboxIndex].context}</p>
				</div>
			</div>
			<button class="lightbox-nav lightbox-next" onclick={lightboxNext} aria-label="Next photo">
				&#8594;
			</button>
		</div>
	</div>
{/if}

<style>
	.page-hero {
		padding: 4rem 0 2.5rem;
		border-bottom: 1px solid var(--color-border);
	}

	.hero-content {
		max-width: 46rem;
	}

	.eyebrow {
		display: inline-flex;
		margin-bottom: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		font-size: 0.8rem;
		color: var(--color-enterprise-accent);
		font-weight: 700;
	}

	.page-hero h1 {
		font-size: clamp(2rem, 4vw, 3rem);
		margin-bottom: 1rem;
	}

	.page-hero p {
		font-size: 1.05rem;
		line-height: 1.8;
		color: var(--color-text-body);
	}

	.inner-wrap {
		max-width: var(--max-width-canvas);
		margin: 0 auto;
	}

	.category-filter {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
		margin-bottom: 1.5rem;
	}

	.filter-btn {
		font-size: 0.82rem;
		font-weight: 600;
		padding: 0.4rem 1rem;
		border-radius: var(--radius-full);
		border: 1px solid var(--color-border);
		background: var(--color-bg-secondary);
		color: var(--color-text-body);
		cursor: pointer;
		transition: var(--transition-smooth);
	}

	.filter-btn:hover,
	.filter-btn.active {
		background: var(--color-enterprise-blue);
		color: #fff;
		border-color: var(--color-enterprise-blue);
	}

	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
		gap: 1rem;
	}

	.gallery-item {
		position: relative;
		overflow: hidden;
		border-radius: var(--radius-xl);
		border: 1px solid var(--color-border);
		padding: 0;
		cursor: pointer;
		aspect-ratio: 4 / 3;
		background: var(--color-bg-primary);
	}

	.gallery-item :global(.gallery-img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		transition: transform 0.4s ease;
	}

	.gallery-item:hover :global(.gallery-img) {
		transform: scale(1.04);
	}

	.gallery-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, transparent 50%);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 1rem;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.gallery-item:hover .gallery-overlay,
	.gallery-item:focus-visible .gallery-overlay {
		opacity: 1;
	}

	.gallery-category {
		align-self: flex-start;
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		background: rgba(0, 0, 0, 0.5);
		color: #fff;
		padding: 0.25rem 0.6rem;
		border-radius: var(--radius-full);
	}

	.gallery-caption {
		text-align: left;
	}

	.caption-title {
		font-size: 0.9rem;
		font-weight: 700;
		color: #fff;
		margin: 0 0 0.2rem;
	}

	.caption-context {
		font-size: 0.78rem;
		color: rgba(255, 255, 255, 0.75);
		margin: 0;
	}

	.video-placeholder-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
		gap: 1.25rem;
	}

	.video-placeholder {
		border-radius: var(--radius-xl);
		overflow: hidden;
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		box-shadow: var(--shadow-sm);
	}

	.video-thumb {
		height: 10rem;
		background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
		display: grid;
		place-items: center;
	}

	.play-icon {
		font-size: 2.5rem;
		color: rgba(255, 255, 255, 0.4);
	}

	.video-title {
		font-weight: 700;
		font-size: 0.95rem;
		color: var(--color-text-heading);
		margin: 0.75rem 1rem 0.2rem;
	}

	.video-meta {
		font-size: 0.8rem;
		color: var(--color-text-muted);
		margin: 0 1rem 1rem;
	}

	.media-kit-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
		gap: 1.5rem;
	}

	.media-kit-card {
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-xl);
		padding: 1.75rem;
		box-shadow: var(--shadow-sm);
		transition: var(--transition-smooth);
	}

	.media-kit-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
	}

	.media-kit-card h3 {
		font-size: 1.05rem;
		margin-bottom: 0.6rem;
	}

	.media-kit-card p {
		font-size: 0.9rem;
		line-height: 1.7;
		color: var(--color-text-body);
		margin-bottom: 1.25rem;
	}

	.kit-btn {
		font-size: 0.875rem;
		padding: 0.75rem 1.5rem;
	}

	/* Lightbox */
	.lightbox-overlay {
		position: fixed;
		inset: 0;
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.lightbox-backdrop {
		position: absolute;
		inset: 0;
		border: none;
		padding: 0;
		margin: 0;
		background: rgba(0, 0, 0, 0.92);
		cursor: zoom-out;
	}

	.lightbox-inner {
		position: relative;
		max-width: 90vw;
		max-height: 90vh;
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.lightbox-content {
		text-align: center;
	}

	.lightbox-content :global(.lightbox-img) {
		max-width: 80vw;
		max-height: 80vh;
		width: auto;
		height: auto;
		object-fit: contain;
		border-radius: var(--radius-lg);
	}

	.lightbox-caption {
		margin-top: 0.75rem;
	}

	.lb-title {
		font-size: 1rem;
		font-weight: 700;
		color: #fff;
		margin: 0 0 0.2rem;
	}

	.lb-context {
		font-size: 0.85rem;
		color: rgba(255, 255, 255, 0.6);
		margin: 0;
	}

	.lightbox-close {
		position: absolute;
		top: -2.5rem;
		right: 0;
		background: none;
		border: none;
		color: #fff;
		font-size: 1.75rem;
		cursor: pointer;
		line-height: 1;
		padding: 0.25rem 0.5rem;
	}

	.lightbox-nav {
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		color: #fff;
		font-size: 1.25rem;
		padding: 0.75rem 1rem;
		border-radius: var(--radius-md);
		cursor: pointer;
		transition: var(--transition-smooth);
		flex-shrink: 0;
	}

	.lightbox-nav:hover {
		background: rgba(255, 255, 255, 0.2);
	}
</style>
