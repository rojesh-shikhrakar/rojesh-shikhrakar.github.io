<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { pastEngagements } from '$lib/engagements';
	import { webPageSchema } from '$lib/seo/schema';
	const media = pastEngagements.filter((item) =>
		['Panel', 'Podcast', 'Article', 'Media', 'Talk'].includes(item.kind)
	);
	const breadcrumbs = [
		{ name: 'Home', path: '/' },
		{ name: 'Media & Speaking', path: '/media' }
	];
</script>

<Seo
	title="Media, Panels & AI Speaking | Rojesh Shikhrakar"
	description="Interviews, articles, conference panels and speaking engagements featuring AI educator and practitioner Rojesh Shikhrakar."
	jsonLd={webPageSchema({
		path: '/media',
		name: 'Media and Speaking',
		description:
			'Interviews, articles, conference panels and speaking engagements featuring Rojesh Shikhrakar.',
		breadcrumbs
	})}
/>
<main>
	<Breadcrumbs items={breadcrumbs} />
	<section class="page-hero container">
		<p class="eyebrow">Independent authority</p>
		<h1>Media and Speaking</h1>
		<p class="lead">
			Interviews, guest articles, conference appearances, panels and talks connecting AI
			engineering, education, policy and organizational adoption.
		</p>
	</section>
	<section class="section container">
		<div class="media-list">
			{#each media as item (item.title)}<article>
					<span>{item.kind} · {item.year}</span>
					<div>
						<h2>{item.title}</h2>
						<p>{[item.org, item.location].filter(Boolean).join(' · ')}</p>
						{#if item.href || item.link}<a
								class="text-link"
								href={item.href ?? item.link}
								target="_blank"
								rel="noreferrer">View original source <span>↗</span></a
							>{/if}
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
	.media-list article {
		display: grid;
		grid-template-columns: 10rem 1fr;
		gap: 2rem;
		padding: 1.5rem 0;
		border-bottom: 1px solid var(--border);
	}
	.media-list > article > span {
		color: var(--teal);
		font-size: 0.76rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}
	.media-list h2 {
		font-size: clamp(1.35rem, 3vw, 2rem);
		margin-bottom: 0.4rem;
	}
	.media-list p {
		color: var(--ink-soft);
	}
	@media (max-width: 600px) {
		.media-list article {
			grid-template-columns: 1fr;
			gap: 0.5rem;
		}
	}
</style>
