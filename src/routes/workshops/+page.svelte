<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { programs } from '$lib/programs';
	import { pastEngagements } from '$lib/engagements';
	import { webPageSchema } from '$lib/seo/schema';
	import EngagementDialog from '$lib/components/EngagementDialog.svelte';
	import type { PastEngagement } from '$lib/engagements';
	import { tick } from 'svelte';
	const offerings = programs.filter((item) => item.category === 'workshops');
	const delivered = pastEngagements.filter((item) => item.kind === 'Workshop');
	const breadcrumbs = [
		{ name: 'Home', path: '/' },
		{ name: 'Workshops', path: '/workshops' }
	];
	let selectedEngagement = $state<PastEngagement | null>(null);
	let detailsDialog = $state<HTMLDialogElement>();

	async function showDetails(item: PastEngagement) {
		selectedEngagement = item;
		await tick();
		detailsDialog?.showModal();
	}
</script>

<Seo
	title="AI Workshops in Nepal | Programs & Past Engagements"
	description="Explore practical AI workshops and verified past training engagements for professionals, educators and organizations in Nepal."
	jsonLd={webPageSchema({
		path: '/workshops',
		name: 'AI Workshops in Nepal',
		description: 'Practical AI workshops and verified past training engagements in Nepal.',
		breadcrumbs
	})}
/>
<main>
	<Breadcrumbs items={breadcrumbs} />
	<section class="page-hero container">
		<p class="eyebrow">Training catalogue</p>
		<h1>AI Workshops for Professionals and Organizations</h1>
		<p class="lead">
			Practical workshops covering workplace productivity, research, generative AI tools and
			institutional AI strategy.
		</p>
	</section>
	<section class="section container">
		<h2>Available workshop programs</h2>
		<div class="grid">
			{#each offerings as item (item.href)}<article>
					<p class="eyebrow">{item.duration} · {item.level}</p>
					<h3><a href={item.href}>{item.title}</a></h3>
					<p>{item.description}</p>
					<a class="text-link" href={item.href}>Program details <span>→</span></a>
				</article>{/each}
		</div>
	</section>
	<section class="section delivered">
		<div class="container">
			<h2>Selected workshops delivered</h2>
			<div class="list">
				{#each delivered as item (item.title)}<article>
						<span>{item.date ?? item.year}</span>
						<div>
							<h3>{item.title}</h3>
							<p>{[item.org, item.location].filter(Boolean).join(' · ')}</p>
						</div>
						<button
							type="button"
							onclick={() => showDetails(item)}
							aria-label={`View details for ${item.title}`}
							>View details <span aria-hidden="true">→</span></button
						>
					</article>{/each}
			</div>
		</div>
	</section>
</main>

<EngagementDialog engagement={selectedEngagement} bind:dialog={detailsDialog} />

<style>
	.page-hero {
		padding-block: clamp(3rem, 8vw, 7rem);
		max-width: 58rem;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.25rem;
	}
	.grid article {
		padding: 1.5rem;
		border: 1px solid var(--border);
		border-radius: 1rem;
	}
	.grid h3 a {
		color: inherit;
		text-decoration: none;
	}
	.delivered {
		background: #f2ede6;
	}
	.list article {
		display: grid;
		grid-template-columns: 10rem 1fr auto;
		gap: 2rem;
		padding: 1.2rem 0;
		border-bottom: 1px solid var(--border);
	}
	.list span {
		color: var(--teal);
		font-weight: 700;
	}
	.list h3 {
		margin-bottom: 0.2rem;
	}
	.list p {
		margin: 0;
		color: var(--ink-soft);
	}
	.list button {
		align-self: center;
		min-height: 2.75rem;
		padding: 0.65rem 1rem;
		border: 1px solid var(--border);
		border-radius: 999px;
		background: var(--surface);
		color: var(--teal);
		cursor: pointer;
		font: inherit;
		font-size: 0.82rem;
		font-weight: 700;
	}
	.list button:hover {
		border-color: var(--teal);
		transform: translateY(-1px);
	}
	.list button:focus-visible {
		outline: 3px solid var(--bronze);
		outline-offset: 2px;
	}
	@media (max-width: 760px) {
		.grid {
			grid-template-columns: 1fr;
		}
		.list article {
			grid-template-columns: 1fr;
			gap: 0.4rem;
		}
	}
</style>
