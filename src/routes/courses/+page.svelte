<script lang="ts">
	import type { PageData } from './$types';
	import { site } from '$lib/data/site';
	import { Seo, SectionHeader, CourseCard } from '$lib';
	import { reveal } from '$lib/actions/reveal';

	let { data }: { data: PageData } = $props();

	const philosophy = [
		{
			num: '01',
			title: 'Concepts Before Tools',
			body: 'Students who understand why a model works can adapt when tools change. Students who only know how to click buttons cannot. Every course begins with conceptual foundations before introducing software.'
		},
		{
			num: '02',
			title: 'Problems Before Solutions',
			body: 'Real learning happens when students wrestle with a problem before they see the solution. All my courses use challenge-based learning: students encounter the difficulty first, theory follows.'
		},
		{
			num: '03',
			title: "Produce, Don't Consume",
			body: 'Every module ends with something built. A running model. A written analysis. A working system. Passive consumption of AI content produces passive practitioners. Active creation produces capable ones.'
		}
	];

	const feedback = [
		{
			quote:
				'The DAMS course was the most demanding and very comprehensive course in the BTech program. Learned a lot of knowledge and practical skills.',
			source: 'Graduate Student, Kathmandu University (2023)'
		},
		{
			quote:
				'After the AI for Productivity Workshop, I became better at writing prompts and understanding how to leverage AI tools in my work. It will surely improve my productivty and quality on my daily tasks.',
			source: 'Senior Manager, Corporate Partner (2024)'
		},

	];
</script>

<Seo
	title="Courses & Teaching | {site.name}"
	description="Academic and corporate courses by {site.name} at Kathmandu University and Fusemachines AI Academy. Scientific ML, Enterprise AI, NLP, and more."
/>

<section class="page-hero">
	<div class="hero-content" use:reveal>
		<span class="eyebrow">Curriculum & Teaching</span>
		<h1>Courses Taught & Offered</h1>
		<p>
			Academic rigor. Industry relevance. Each course is designed for the specific challenges of its
			audience—whether graduate engineering students at Kathmandu University or senior professionals
			navigating AI transformation in their organizations.
		</p>
	</div>
</section>

<!-- Course Catalog -->
<section class="section">
	<SectionHeader
		eyebrow="Full Catalog"
		title="Current Course Offerings"
		body="Courses span from introductory machine learning foundations through advanced research-grade scientific computing. All programs include practical assignments and real-world case studies."
	/>
	{#if data.courses.length === 0}
		<p class="empty-state">No courses published yet. Check back soon.</p>
	{:else}
		<div class="courses-grid">
			{#each data.courses as course, i (course.slug)}
				<CourseCard
					index={i}
					title={course.title}
					institution={course.institution ?? ''}
					audience={course.audience ?? ''}
					level={course.level ?? ''}
					format={course.format ?? ''}
					slug={course.slug}
					delay={(i % 3) * 80}
				/>
			{/each}
		</div>
	{/if}
</section>

<!-- Teaching Philosophy -->
<section class="section section-alt">
	<div class="inner-wrap">
		<SectionHeader
			eyebrow="Pedagogy"
			title="Teaching Philosophy"
			body="Three principles guide every course and workshop I design and deliver."
		/>
		<div class="philosophy-grid">
			{#each philosophy as p, i (p.num)}
				<div class="philosophy-card" use:reveal={{ delay: i * 90 }}>
					<span class="philosophy-num">{p.num}</span>
					<h3>{p.title}</h3>
					<p>{p.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Student Feedback -->
<section class="section">
	<SectionHeader eyebrow="Student Voices" title="Feedback from Participants" />
	<div class="feedback-grid">
		{#each feedback as f, i (f.source)}
			<div class="feedback-card" use:reveal={{ delay: i * 90 }}>
				<p class="feedback-quote">{f.quote}</p>
				<div class="feedback-source">{f.source}</div>
			</div>
		{/each}
	</div>
</section>

<!-- CTA -->
<section class="section section-contrast">
	<div class="inner-wrap cta-block" use:reveal>
		<div>
			<h2>Request a Syllabus or Course Proposal</h2>
			<p class="cta-text">
				For institutions and organizations interested in commissioning a course or requesting
				detailed curriculum materials, reach out directly. Custom course design is available for
				organizations with specific training needs.
			</p>
		</div>
		<div class="cta-actions">
			<a href="mailto:{site.email}" class="btn-primary">Request Syllabus →</a>
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
	}

	.inner-wrap {
		max-width: var(--max-width-canvas);
		margin: 0 auto;
	}

	.courses-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
		gap: 1.5rem;
	}

	.empty-state {
		color: var(--color-text-muted);
		font-style: italic;
	}

	.philosophy-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
		gap: 1.5rem;
	}

	.philosophy-card {
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-xl);
		padding: 1.75rem;
		box-shadow: var(--shadow-sm);
		transition: var(--transition-smooth);
	}

	.philosophy-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
	}

	.philosophy-num {
		font-family: var(--font-display);
		font-size: 2rem;
		font-weight: 800;
		color: var(--color-enterprise-blue);
		opacity: 0.4;
		display: block;
		margin-bottom: 0.5rem;
	}

	.philosophy-card h3 {
		font-size: 1.05rem;
		margin-bottom: 0.6rem;
	}

	.philosophy-card p {
		font-size: 0.925rem;
		line-height: 1.75;
		color: var(--color-text-body);
		margin: 0;
	}

	.feedback-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		gap: 1.5rem;
	}

	.feedback-card {
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-xl);
		padding: 1.75rem;
		box-shadow: var(--shadow-sm);
	}

	.feedback-quote {
		font-size: 0.975rem;
		line-height: 1.8;
		color: var(--color-text-body);
		font-style: italic;
		margin-bottom: 1.25rem;
		padding-left: 1rem;
		border-left: 3px solid var(--color-enterprise-blue);
	}

	.feedback-source {
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--color-text-muted);
	}

	.cta-block {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		flex-wrap: wrap;
		padding: 1rem 0;
	}

	.cta-block h2 {
		color: var(--text-on-contrast);
	}

	.cta-text {
		color: var(--text-on-contrast-muted);
		margin-top: 0.75rem;
		line-height: 1.8;
	}

	.cta-actions {
		flex-shrink: 0;
	}
</style>
