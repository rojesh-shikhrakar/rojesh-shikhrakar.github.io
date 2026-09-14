<script lang="ts">
	import { mailto } from '$lib/site';
	import Seo from '$lib/components/Seo.svelte';
	import { onMount, untrack } from 'svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import EngagementDialog from '$lib/components/EngagementDialog.svelte';
	import { pastEngagements, type PastEngagement } from '$lib/engagements';
	import { webPageSchema } from '$lib/seo/schema';
	import { tick } from 'svelte';
	const breadcrumbs = [
		{ name: 'Home', path: '/' },
		{ name: 'Programs', path: '/programs' }
	];

	let { data } = $props();
	type Category = (typeof data.categories)[number];
	type TabId = Category['slug'] | 'resources';
	const tabIdOf = (category: Category): TabId =>
		'tabId' in category ? category.tabId : category.slug;
	let activeTab = $state<TabId>(untrack(() => tabIdOf(data.categories[0])));
	const deliveredWorkshops = pastEngagements.filter((item) => item.kind === 'Workshop');
	const deliveredCourses = pastEngagements.filter((item) => item.kind === 'Course');
	let selectedEngagement = $state<PastEngagement | null>(null);
	let detailsDialog = $state<HTMLDialogElement>();

	const programsFor = (category: Category) =>
		data.programs.filter((program) => program.category === category.slug);

	function selectHashTab() {
		const hash = window.location.hash.slice(1) as TabId;
		if (data.categories.some((category) => tabIdOf(category) === hash)) activeTab = hash;
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

	async function showDetails(item: PastEngagement) {
		selectedEngagement = item;
		await tick();
		detailsDialog?.showModal();
	}

	onMount(() => {
		selectHashTab();
		window.addEventListener('hashchange', selectHashTab);
		return () => window.removeEventListener('hashchange', selectHashTab);
	});
</script>

<Seo
	title="AI Training Programs & Workshops in Nepal"
	description="Corporate AI training, institutional workshops, academic courses and seminars delivered in Kathmandu, Nepal and online — practical AI capability for teams and universities."
	jsonLd={webPageSchema({
		path: '/programs',
		name: 'AI Training Programs and Workshops in Nepal',
		description:
			'Corporate AI training, institutional workshops, academic courses and seminars delivered in Nepal and online.',
		breadcrumbs
	})}
/>

<main class="programs-page">
	<Breadcrumbs items={breadcrumbs} />
	<header class="programs-hero container">
		<p class="eyebrow">Education & Strategy</p>
		<h1>Programs & Resources</h1>
		<p class="lead">
			Bridging rigorous engineering principles and transformative education. Explore institutional
			workshops, academic courses, seminars, and open-source intelligence designed for strategic
			thinkers.
		</p>
	</header>

	<nav class="program-filters" aria-label="Program categories">
		<div class="container" role="tablist">
			{#each data.categories as category (category.slug)}
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
		{#each data.categories as category (category.slug)}
			<div
				class="program-gallery container"
				id={`panel-${tabIdOf(category)}`}
				role="tabpanel"
				aria-labelledby={tabIdOf(category)}
				hidden={activeTab !== tabIdOf(category)}
			>
				{#each programsFor(category) as program (program.href)}
					<article class="program-gallery-card">
						<a class="program-gallery-image" href={program.href}>
							{#if program.image}
								<img src={program.image} alt="" width="560" height="350" loading="lazy" />
							{/if}
							<span>{category.label}</span>
						</a>
						<div>
							<h2><a href={program.href}>{program.title}</a></h2>
							<p>{program.description}</p>
							<dl>
								<div>
									<dt>Duration</dt>
									<dd>{program.duration}</dd>
								</div>
								<div>
									<dt>Format</dt>
									<dd>{program.location}</dd>
								</div>
								<div>
									<dt>Level</dt>
									<dd>{program.level}</dd>
								</div>
							</dl>
							<a class="text-link" href={program.href}>View program <span>→</span></a>
						</div>
					</article>
				{/each}
				{#if category.slug === 'courses' || category.slug === 'workshops'}
					<section class="delivered-workshops">
						<h2>
							{category.slug === 'courses'
								? 'Selected courses delivered'
								: 'Selected workshops delivered'}
						</h2>
						<div class="delivered-list">
							{#each category.slug === 'courses' ? deliveredCourses : deliveredWorkshops as item (`${item.kind}-${item.title}`)}
								<article>
									<span>{item.date ?? item.year}</span>
									<div>
										<h3>{item.title}</h3>
										<p>{[item.org, item.location].filter(Boolean).join(' · ')}</p>
									</div>
									<button type="button" onclick={() => showDetails(item)}>View details →</button>
								</article>
							{/each}
						</div>
					</section>
				{/if}
			</div>
		{/each}
	</div>
	<section class="program-request container">
		<div>
			<h2>Request a Program</h2>
			<p>
				Tailored institutional workshops and seminars are available for organizations integrating AI
				strategy at a foundational level.
			</p>
		</div>
		<div>
			<a class="button" href={mailto('Program request')}>Request a proposal</a><a
				class="button button-secondary"
				href={mailto()}>Contact directly</a
			>
		</div>
	</section>
</main>

<EngagementDialog engagement={selectedEngagement} bind:dialog={detailsDialog} />

<style>
	.delivered-workshops {
		grid-column: 1 / -1;
		margin-top: 1rem;
		padding: clamp(2rem, 5vw, 4rem);
		border-radius: 1rem;
		background: #f2ede6;
	}
	.delivered-list article {
		display: grid;
		grid-template-columns: 10rem 1fr auto;
		gap: 2rem;
		padding: 1.2rem 0;
		border-bottom: 1px solid var(--border);
	}
	.delivered-list span,
	.delivered-list button {
		color: var(--teal);
		font-weight: 700;
	}
	.delivered-list h3 {
		margin-bottom: 0.2rem;
	}
	.delivered-list p {
		margin: 0;
		color: var(--ink-soft);
	}
	.delivered-list button {
		align-self: center;
		padding: 0.65rem 1rem;
		border: 1px solid var(--border);
		border-radius: 999px;
		background: var(--surface);
		cursor: pointer;
		font: inherit;
	}
	@media (max-width: 760px) {
		.delivered-list article {
			grid-template-columns: 1fr;
			gap: 0.4rem;
		}
	}
</style>
