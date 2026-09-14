<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import ProofBar from '$lib/components/ProofBar.svelte';
	import TrainingCards from '$lib/components/training/TrainingCards.svelte';
	import TrainingEvidence from '$lib/components/training/TrainingEvidence.svelte';
	import TrainingFaq from '$lib/components/training/TrainingFaq.svelte';
	import portrait from '$lib/assets/rojesh-portrait.webp';
	import { mailto } from '$lib/site';
	import { webPageSchema, type BreadcrumbItem } from '$lib/seo/schema';
	import type { TrainingPage, TrainingSection } from '$lib/training-pages';

	let { page }: { page: TrainingPage } = $props();
	const sections = $derived<TrainingSection[]>(
		page.layout?.sections ?? [
			'content',
			'programs',
			'audiences',
			'approach',
			'evidence',
			'faq',
			'cta'
		]
	);
	const faqs = $derived(
		page.faqs ?? [
			{
				question: 'Can the training be customized?',
				answer:
					'Yes. The program can be designed around participant roles, workflows, organizational risks and desired outcomes.'
			},
			{
				question: 'Is the training suitable for non-technical teams?',
				answer:
					'Yes. Programs can focus on practical AI literacy, productivity, leadership and governance without requiring programming experience.'
			},
			{
				question: 'Can sessions be delivered for leadership teams?',
				answer:
					'Yes. Executive sessions focus on opportunity evaluation, organizational readiness, governance and responsible adoption.'
			},
			{
				question: 'Where can training be delivered?',
				answer:
					'Programs can be discussed for organizations in Nepal and for international or distributed teams, with the delivery format agreed around the audience.'
			}
		]
	);
	const breadcrumbs: BreadcrumbItem[] = $derived(
		page.slug === 'ai-trainer-nepal'
			? [
					{ name: 'Home', path: '/' },
					{ name: page.h1, path: page.href }
				]
			: [
					{ name: 'Home', path: '/' },
					{ name: 'Training', path: '/ai-trainer-nepal' },
					{ name: page.h1, path: page.href }
				]
	);
</script>

<Seo
	title={page.title}
	description={page.description}
	image={portrait}
	jsonLd={webPageSchema({
		path: page.href,
		name: page.h1,
		description: page.description,
		breadcrumbs
	})}
/>

<main class:hero-text={page.layout?.hero === 'text'} class="theme-{page.layout?.theme ?? 'paper'}">
	<Breadcrumbs items={breadcrumbs} />
	<header class="training-hero container">
		<div>
			<p class="eyebrow">{page.eyebrow}</p>
			<h1>{page.h1}</h1>
			<p class="lead">{page.intro}</p>
			<div class="button-row">
				<a class="button" href={mailto(page.cta)}>{page.cta}</a>
				<a class="button button-secondary" href="/case-studies">See Evidence</a>
			</div>
		</div>
		{#if page.layout?.hero !== 'text'}
			<img
				src={portrait}
				alt="Rojesh Shikhrakar, AI educator and trainer in Nepal"
				width="480"
				height="600"
			/>
		{/if}
	</header>

	<ProofBar />

	{#each sections as section (section)}
		{#if section === 'content'}
			<section
				class:container={page.layout?.width === 'wide'}
				class="section markdown-content reading-width"
			>
				<page.component />
			</section>
		{:else if section === 'programs' && page.programs?.length}
			<section class="section tint">
				<div class="container">
					<div class="section-heading">
						<p class="eyebrow">{page.labels?.programsEyebrow ?? 'Programs'}</p>
						<h2>{page.labels?.programs ?? 'Learning designed around organizational needs'}</h2>
					</div>
					<TrainingCards cards={page.programs} />
				</div>
			</section>
		{:else if section === 'audiences' && page.audiences?.length}
			<section class="section container split">
				<div>
					<p class="eyebrow">Who I train</p>
					<h2>{page.labels?.audiences ?? 'Programs for people responsible for real outcomes'}</h2>
				</div>
				<ul class="audiences">
					{#each page.audiences as audience (audience)}<li>{audience}</li>{/each}
				</ul>
			</section>
		{:else if section === 'approach' && page.approach?.length}
			<section class="section dark">
				<div class="container">
					<div class="section-heading">
						<p class="eyebrow">{page.labels?.approachEyebrow ?? 'Training approach'}</p>
						<h2>{page.labels?.approach ?? 'From workflow discovery to sustained adoption'}</h2>
					</div>
					<div class="steps">
						{#each page.approach as step, index (step.title)}<article>
								<span>0{index + 1}</span>
								<h3>{step.title}</h3>
								<p>{step.body}</p>
							</article>{/each}
					</div>
				</div>
			</section>
		{:else if section === 'evidence'}
			<TrainingEvidence />
		{:else if section === 'faq' && faqs.length}
			<TrainingFaq title={page.labels?.faq ?? 'Planning an AI training program'} {faqs} />
		{:else if section === 'cta'}
			<section class="section container">
				<div class="closing-cta">
					<h2>{page.labels?.cta ?? 'Build AI capability that lasts beyond the session.'}</h2>
					<p class="lead">
						Discuss an audience, workflow or organizational challenge and shape a program around it.
					</p>
					<a class="button" href={mailto(page.cta)}>{page.cta}</a>
				</div>
			</section>
		{/if}
	{/each}
</main>

<style>
	.training-hero {
		display: grid;
		grid-template-columns: 7fr 4fr;
		gap: clamp(2rem, 7vw, 6rem);
		align-items: center;
		padding-block: clamp(3rem, 8vw, 7rem);
	}
	.training-hero h1 {
		max-width: 16ch;
	}
	.training-hero img {
		width: 100%;
		max-height: 34rem;
		object-fit: cover;
		object-position: top;
		border-radius: 1.25rem;
		box-shadow: var(--shadow);
	}
	.hero-text .training-hero {
		grid-template-columns: 1fr;
		text-align: center;
	}
	.hero-text .training-hero > div {
		max-width: 52rem;
		margin-inline: auto;
	}
	.hero-text .training-hero h1,
	.hero-text .training-hero .lead {
		margin-inline: auto;
	}
	.hero-text .button-row {
		justify-content: center;
	}
	.theme-sand {
		--training-tint: #eee4d5;
	}
	.theme-sage {
		--training-tint: #e5eee8;
	}
	.tint {
		background: var(--training-tint, #f2ede6);
		border-block: 1px solid var(--border);
	}
	.markdown-content.container {
		width: min(calc(100% - 2.5rem), var(--container));
	}
	.markdown-content :global(> :first-child) {
		margin-top: 0;
	}
	.markdown-content :global(> :last-child) {
		margin-bottom: 0;
	}
	.markdown-content :global(blockquote) {
		margin: 2rem 0;
		padding: 1.5rem 2rem;
		border-left: 4px solid var(--teal);
		background: var(--surface);
		color: var(--ink-soft);
	}
	.markdown-content :global(a) {
		color: var(--teal);
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}
	.split {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
	}
	.audiences {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.8rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.audiences li {
		padding: 1rem;
		border: 1px solid var(--border);
		border-radius: 0.75rem;
		background: var(--surface);
	}
	.audiences li::before {
		content: '';
		display: inline-block;
		width: 0.45rem;
		height: 0.45rem;
		margin-right: 0.65rem;
		border-radius: 50%;
		background: var(--teal);
		vertical-align: 0.1em;
	}
	.dark {
		background: var(--ink-deep);
		color: var(--paper);
	}
	.dark h2,
	.dark h3 {
		color: white;
	}
	.steps {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.5rem;
	}
	.steps article {
		border-top: 1px solid rgb(255 255 255 / 0.22);
		padding-top: 1.2rem;
	}
	.steps span {
		color: var(--bronze-light);
		font-size: 0.8rem;
		font-weight: 700;
	}
	.steps p {
		color: #bfc9c5;
	}
	@media (max-width: 780px) {
		.training-hero,
		.split {
			grid-template-columns: 1fr;
		}
		.training-hero img {
			max-width: 24rem;
		}
		.steps {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (max-width: 480px) {
		.steps,
		.audiences {
			grid-template-columns: 1fr;
		}
	}
</style>
