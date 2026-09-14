<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { programCategories, programs } from '$lib/programs';
	import { pastEngagements } from '$lib/engagements';
	import { webPageSchema } from '$lib/seo/schema';
	import EngagementDialog from '$lib/components/EngagementDialog.svelte';
	import type { PastEngagement } from '$lib/engagements';
	import { onMount, tick } from 'svelte';
	const delivered = pastEngagements.filter((item) => item.kind === 'Workshop');
	const deliveredCourses = pastEngagements.filter((item) => item.kind === 'Course');
	const breadcrumbs = [
		{ name: 'Home', path: '/' },
		{ name: 'Workshops', path: '/workshops' }
	];
	let selectedEngagement = $state<PastEngagement | null>(null);
	let detailsDialog = $state<HTMLDialogElement>();
	type Category = (typeof programCategories)[number];
	type TabId = Category['slug'] | 'resources';
	const tabIdOf = (category: Category): TabId =>
		'tabId' in category ? category.tabId : category.slug;
	let activeTab = $state<TabId>('workshops');

	const programsFor = (category: Category) =>
		programs.filter((program) => program.category === category.slug);

	function selectHashTab() {
		const hash = window.location.hash.slice(1) as TabId;
		if (programCategories.some((category) => tabIdOf(category) === hash)) activeTab = hash;
	}

	function handleTabKeydown(event: KeyboardEvent) {
		if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
		const tabs = Array.from(
			(event.currentTarget as HTMLElement).parentElement?.querySelectorAll<HTMLElement>(
				'[role="tab"]'
			) ?? []
		);
		const currentIndex = tabs.indexOf(event.currentTarget as HTMLElement);
		let nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : currentIndex;
		if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
		if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % tabs.length;
		event.preventDefault();
		tabs[nextIndex]?.click();
		tabs[nextIndex]?.focus();
	}

	onMount(() => {
		selectHashTab();
		window.addEventListener('hashchange', selectHashTab);
		return () => window.removeEventListener('hashchange', selectHashTab);
	});

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
	<nav class="program-filters" aria-label="Program categories">
		<div class="container" role="tablist">
			{#each programCategories as category (category.slug)}
				<a
					href={`#${tabIdOf(category)}`}
					id={tabIdOf(category)}
					role="tab"
					class:active={activeTab === tabIdOf(category)}
					aria-selected={activeTab === tabIdOf(category)}
					aria-controls={`panel-${tabIdOf(category)}`}
					tabindex={activeTab === tabIdOf(category) ? 0 : -1}
					onclick={() => (activeTab = tabIdOf(category))}
					onkeydown={handleTabKeydown}>{category.label}</a
				>
			{/each}
		</div>
	</nav>
	<div class="program-tab-panels">
		{#each programCategories as category (category.slug)}
			<div
				id={`panel-${tabIdOf(category)}`}
				role="tabpanel"
				aria-labelledby={tabIdOf(category)}
				hidden={activeTab !== tabIdOf(category)}
			>
				<div class="program-gallery container">
					{#each programsFor(category) as item (item.href)}
						<article class="program-gallery-card">
							<a class="program-gallery-image" href={item.href}>
								{#if item.image}
									<img src={item.image} alt="" width="560" height="350" loading="lazy" />
								{/if}
								<span>{category.label}</span>
							</a>
							<div>
								<h2><a href={item.href}>{item.title}</a></h2>
								<p>{item.description}</p>
								<dl>
									<div>
										<dt>Duration</dt>
										<dd>{item.duration}</dd>
									</div>
									<div>
										<dt>Format</dt>
										<dd>{item.location}</dd>
									</div>
									<div>
										<dt>Level</dt>
										<dd>{item.level}</dd>
									</div>
								</dl>
								<a class="text-link" href={item.href}>View program <span>→</span></a>
							</div>
						</article>
					{/each}
				</div>
				{#if category.slug === 'courses' || category.slug === 'workshops'}
					<div class="section delivered">
						<div class="container">
							<h2>
								{category.slug === 'courses'
									? 'Selected courses delivered'
									: 'Selected workshops delivered'}
							</h2>
							<div class="list">
								{#each category.slug === 'courses' ? deliveredCourses : delivered as item (`${item.kind}-${item.title}`)}<article
									>
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
					</div>
				{/if}
			</div>
		{/each}
	</div>
</main>

<EngagementDialog engagement={selectedEngagement} bind:dialog={detailsDialog} />

<style>
	.page-hero {
		padding-block: clamp(3rem, 8vw, 7rem);
		max-width: 58rem;
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
		.list article {
			grid-template-columns: 1fr;
			gap: 0.4rem;
		}
	}
</style>
