<script lang="ts">
	import type { PageData } from './$types';
	import { pastWorkshops, site } from '$lib/data/site';
	import { Seo, SectionHeader, WorkshopCard, PastWorkshopsCarousel } from '$lib';
	import { reveal } from '$lib/actions/reveal';

	let { data }: { data: PageData } = $props();

	// Newest first; recurring/ongoing engagements (high year) surface at the top.
	const pastSorted = [...pastWorkshops].sort((a, b) => b.year - a.year);

	const orgs = [
		'Fusemachines',
		'Kathmandu University',
		'Nepal Speakers Bureau',
		'Regional Corporate Partners'
	];
</script>

<Seo
	title="Workshops | {site.name}"
	description="Corporate AI training workshops by {site.name}. Prompt engineering, enterprise AI strategy, and research AI tools."
/>

<section class="page-hero">
	<div class="hero-content" use:reveal>
		<span class="eyebrow">Training Programs</span>
		<h1>Workshops & Corporate Training</h1>
		<p>
			Field-tested AI training programs for leadership teams, knowledge workers, and research
			institutions. Every workshop is facilitated live, customized for your context, and grounded in
			research-backed pedagogy.
		</p>
		<a href="mailto:{site.email}" class="btn-primary">Inquire About Booking →</a>
	</div>
</section>

<section class="section">
	<SectionHeader
		eyebrow="All Programs"
		title="Signature Training Programs"
		body="Three core programs, each designed for a specific audience and organizational objective. Custom programs available for organizations with specific requirements."
	/>
	<div class="grid-three">
		{#each data.workshops as workshop, i (workshop.slug)}
			<WorkshopCard
				tag={workshop.tag}
				title={workshop.title}
				duration={workshop.duration}
				takeaway={workshop.takeaway}
				tools={workshop.tools}
				href="/workshops/{workshop.slug}"
				ctaLabel="View Full Syllabus & Book →"
				delay={i * 90}
			/>
		{/each}
	</div>
</section>

<section class="section section-alt">
	<div class="inner-wrap">
		<SectionHeader eyebrow="Workshop Format" title="How Workshops Are Delivered" />
		<div class="format-grid">
			<div class="format-card" use:reveal>
				<div class="format-icon">&#x1F3DB;</div>
				<h3>In-Person</h3>
				<p>
					The preferred format. Full hands-on exercises, real-time Q&A, and group collaboration.
					Available across Nepal and internationally.
				</p>
			</div>
			<div class="format-card" use:reveal={{ delay: 90 }}>
				<div class="format-icon">&#x1F4BB;</div>
				<h3>Virtual</h3>
				<p>
					Interactive online delivery with breakout rooms and live exercises. Adapted for
					distributed teams and international cohorts.
				</p>
			</div>
			<div class="format-card" use:reveal={{ delay: 180 }}>
				<div class="format-icon">&#x1F4C5;</div>
				<h3>Multi-Day Programs</h3>
				<p>
					For institutions requiring deep capability building. Structured over 2–5 days with
					pre-work, exercises, and follow-up sessions.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Past Workshops & Training -->
<section class="section">
	<div class="inner-wrap">
		<SectionHeader
			eyebrow="Track Record"
			title="Past Workshops & Training"
			body="A selection of workshops, trainings, and seminars delivered across universities, enterprises, government bodies, and public institutions."
		/>
		<PastWorkshopsCarousel items={pastSorted} />
	</div>
</section>

<section class="section">
	<div class="custom-workshop-block" use:reveal>
		<div class="custom-workshop-text">
			<h2>Need a Custom Workshop?</h2>
			<p>
				Every organization has unique AI challenges, data constraints, and learning objectives. I
				design bespoke workshop programs for organizations that need something beyond the standard
				catalog. Past custom programs have included: sector-specific AI risk training, AI
				integration for legal and compliance teams, and multi-week internal AI transformation
				programs.
			</p>
			<p>
				Custom programs start with a 45-minute diagnostic conversation—no charge, no commitment.
			</p>
			<a href="mailto:{site.email}" class="btn-primary">Start the Conversation →</a>
		</div>
		<div class="custom-workshop-logos">
			<p class="trusted-by">Trusted by</p>
			<div class="org-list">
				{#each orgs as org (org)}
					<span class="org-name">{org}</span>
				{/each}
			</div>
		</div>
	</div>
</section>

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
		margin-bottom: 1.75rem;
	}

	.inner-wrap {
		max-width: var(--max-width-canvas);
		margin: 0 auto;
	}

	.format-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
		gap: 1.5rem;
	}

	.format-card {
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-xl);
		padding: 1.75rem;
		box-shadow: var(--shadow-sm);
		transition: var(--transition-smooth);
	}

	.format-card:hover {
		transform: translateY(-4px);
		border-color: var(--color-enterprise-accent);
		box-shadow: var(--shadow-lg);
	}

	.format-icon {
		font-size: 1.75rem;
		margin-bottom: 0.75rem;
	}

	.format-card h3 {
		font-size: 1.05rem;
		margin-bottom: 0.5rem;
	}

	.format-card p {
		font-size: 0.925rem;
		line-height: 1.7;
		color: var(--color-text-body);
		margin: 0;
	}


	.custom-workshop-block {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 3rem;
		align-items: start;
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-xl);
		padding: 2.5rem;
		box-shadow: var(--shadow-sm);
	}

	.custom-workshop-text h2 {
		font-size: 1.6rem;
		margin-bottom: 1rem;
	}

	.custom-workshop-text p {
		font-size: 0.975rem;
		line-height: 1.8;
		color: var(--color-text-body);
		margin-bottom: 1rem;
	}

	.custom-workshop-logos {
		min-width: 14rem;
	}

	.trusted-by {
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--color-text-muted);
		margin-bottom: 0.75rem;
	}

	.org-list {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.org-name {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-text-heading);
		padding: 0.4rem 0.75rem;
		background: var(--color-bg-primary);
		border-radius: var(--radius-md);
		border: 1px solid var(--color-border);
	}

	@media (max-width: 768px) {
		.custom-workshop-block {
			grid-template-columns: 1fr;
		}
	}
</style>
