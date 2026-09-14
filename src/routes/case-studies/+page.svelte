<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { publishedCaseStudies } from '$lib/case-studies';
	import { webPageSchema } from '$lib/seo/schema';
	const breadcrumbs = [
		{ name: 'Home', path: '/' },
		{ name: 'Case Studies', path: '/case-studies' }
	];
</script>

<Seo
	title="AI Training Case Studies in Nepal"
	description="Verified AI training engagements across government, education and professional audiences in Nepal."
	jsonLd={webPageSchema({
		path: '/case-studies',
		name: 'AI Training Case Studies in Nepal',
		description:
			'Verified AI training engagements across government, education and professional audiences in Nepal.',
		breadcrumbs
	})}
/>
<main>
	<Breadcrumbs items={breadcrumbs} />
	<section class="page-hero container">
		<p class="eyebrow">Evidence in practice</p>
		<h1>AI Training Case Studies</h1>
		<p class="lead">
			Selected, verifiable engagements showing the audiences, context and training delivered.
			Outcomes and testimonials are included only when documented.
		</p>
	</section>
	<section class="section container">
		<div class="case-grid">
			{#each publishedCaseStudies as item (item.slug)}<article>
					{#if item.images?.[0]}<img
							src={item.images[0].src}
							alt={item.images[0].alt}
							width="560"
							height="315"
							loading="lazy"
						/>{/if}
					<div>
						<p class="eyebrow">{item.industry} · {item.year}</p>
						<h2><a href="/case-studies/{item.slug}">{item.title}</a></h2>
						<p>{item.organization}{item.location ? ` · ${item.location}` : ''}</p>
						<a class="text-link" href="/case-studies/{item.slug}">Read case study <span>→</span></a>
					</div>
				</article>{/each}
		</div>
	</section>
</main>

<style>
	.page-hero {
		padding-block: clamp(3rem, 8vw, 7rem);
		max-width: 58rem;
	}
	.case-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
	}
	.case-grid article {
		overflow: hidden;
		border: 1px solid var(--border);
		border-radius: 1rem;
		background: var(--surface);
	}
	.case-grid img {
		width: 100%;
		aspect-ratio: 16/9;
		object-fit: cover;
	}
	.case-grid article > div {
		padding: 1.5rem;
	}
	.case-grid h2 {
		font-size: clamp(1.5rem, 3vw, 2.1rem);
	}
	.case-grid h2 a {
		color: inherit;
		text-decoration: none;
	}
	@media (max-width: 700px) {
		.case-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
