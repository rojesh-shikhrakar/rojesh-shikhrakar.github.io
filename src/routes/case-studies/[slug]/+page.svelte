<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { webPageSchema } from '$lib/seo/schema';
	let { data } = $props();
	const item = $derived(data.caseStudy);
	const breadcrumbs = $derived([
		{ name: 'Home', path: '/' },
		{ name: 'Case Studies', path: '/case-studies' },
		{ name: item.title, path: `/case-studies/${item.slug}` }
	]);
</script>

<Seo
	title={item.title}
	description={`${item.title} — a verified ${item.deliveryFormat.toLowerCase()} for ${item.audience} with ${item.organization}.`}
	image={item.images?.[0]?.src}
	jsonLd={webPageSchema({
		path: `/case-studies/${item.slug}`,
		name: item.title,
		description: `${item.title} for ${item.organization}.`,
		breadcrumbs
	})}
/>
<main>
	<Breadcrumbs items={breadcrumbs} />
	<section class="case-hero container">
		<div>
			<p class="eyebrow">{item.industry} · {item.date}</p>
			<h1>{item.title}</h1>
			<p class="lead">{item.organization}{item.location ? ` · ${item.location}` : ''}</p>
		</div>
		{#if item.images?.[0]}<img
				src={item.images[0].src}
				alt={item.images[0].alt}
				width="640"
				height="360"
			/>{/if}
	</section>
	<section class="section reading-width details">
		<h2>Engagement context</h2>
		<dl>
			<div>
				<dt>Audience</dt>
				<dd>{item.audience}</dd>
			</div>
			{#if item.participants}<div>
					<dt>Participants</dt>
					<dd>{item.participants}</dd>
				</div>{/if}{#if item.duration}<div>
					<dt>Duration</dt>
					<dd>{item.duration}</dd>
				</div>{/if}
			<div>
				<dt>Delivery format</dt>
				<dd>{item.deliveryFormat}</dd>
			</div>
		</dl>
		<h2>Training objectives</h2>
		<ul>
			{#each item.objectives as objective (objective)}<li>{objective}</li>{/each}
		</ul>
		<h2>Topics covered</h2>
		<ul>
			{#each item.topics as topic (topic)}<li>{topic}</li>{/each}
		</ul>
		{#if item.curriculum?.length}<h2>Curriculum</h2>
			<ul>
				{#each item.curriculum as module (module)}<li>{module}</li>{/each}
			</ul>{/if}
		{#if item.methodology?.length}<h2>Methodology</h2>
			<ul>
				{#each item.methodology as method (method)}<li>{method}</li>{/each}
			</ul>{/if}
		{#if item.outcomes}<h2>Documented outcomes</h2>
			<ul>
				{#each item.outcomes as outcome (outcome)}<li>{outcome}</li>{/each}
			</ul>{/if}
		{#if item.externalReferences?.length}<h2>External references</h2>
			<ul>
				{#each item.externalReferences as reference (reference.url)}<li>
						<a href={reference.url} target="_blank" rel="noreferrer">{reference.label}</a>
					</li>{/each}
			</ul>{/if}
		<div class="next">
			<h2>Related training</h2>
			<p>Explore the capability-building program connected to this engagement.</p>
			<a class="button" href={item.relatedProgram}>View related training</a>
		</div>
	</section>
</main>

<style>
	.case-hero {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
		padding-block: clamp(3rem, 8vw, 7rem);
	}
	.case-hero img {
		width: 100%;
		aspect-ratio: 16/9;
		object-fit: cover;
		border-radius: 1rem;
	}
	.details h2 {
		margin-top: 3rem;
	}
	.details dl {
		display: grid;
		gap: 0.75rem;
	}
	.details dl div {
		display: grid;
		grid-template-columns: 10rem 1fr;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid var(--border);
	}
	dt {
		font-weight: 700;
	}
	dd {
		margin: 0;
		color: var(--ink-soft);
	}
	.next {
		margin-top: 4rem;
		padding: 2rem;
		border-radius: 1rem;
		background: #f2ede6;
	}
	@media (max-width: 700px) {
		.case-hero {
			grid-template-columns: 1fr;
		}
		.details dl div {
			grid-template-columns: 1fr;
		}
	}
</style>
