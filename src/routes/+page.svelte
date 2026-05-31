<script lang="ts">
	import type { PageData } from './$types';
	import { timeline, carouselSlides, highlightedWorkshops, research, site } from '$lib/data/site';
	import { Seo, SectionHeader, WorkshopCard, ResearchCard, CourseCard, Carousel } from '$lib';
	import { reveal } from '$lib/actions/reveal';
	import { profile, imageMap } from '$lib/img/images';

	let { data }: { data: PageData } = $props();

	const slides = carouselSlides.map((s) => ({
		img: imageMap[s.image as keyof typeof imageMap],
		workshop: s.workshop,
		client: s.client,
		metric: s.metric
	}));

	const websiteLd = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: site.name,
		url: site.url
	};

	const researchIntro =
		'This research is what separates structured, evidence-based AI education from "prompt enthusiasts." Every curriculum I deliver is backed by peer-reviewed work in computer vision, LLM safety, and applied machine learning.';
</script>

<Seo jsonLd={websiteLd} />

<!-- ============================ HERO ============================ -->
<section class="hero-section">
	<div class="hero-inner">
		<div class="hero-copy">
			<span class="hero-eyebrow" use:reveal
				>Educator · Engineer · Consultant </span>
			<h1 class="hero-name" use:reveal={{ delay: 80 }}>{site.name}</h1>
			<p class="hero-tagline" use:reveal={{ delay: 160 }}>
				I turn AI complexity into organizational capability.
			</p>
			<p class="hero-body" use:reveal={{ delay: 240 }}>
				Training 15000+ students & professionals across enterprise cohorts, government ministries, and academic institutions. Based in Nepal. Operating globally.
			</p>
			<div class="hero-ctas" use:reveal={{ delay: 320 }}>
				<a href="/workshops" class="btn-primary">Explore Workshops →</a>
				<a href="/research" class="btn-outline">View Research</a>
			</div>
		</div>
		<div class="hero-visual" use:reveal={{ delay: 200 }}>
			<div class="profile-frame">
				<enhanced:img
					src={profile}
					alt={site.name}
					class="profile-image"
					sizes="220px"
					fetchpriority="high"
				/>
			</div>
			<div class="hero-stat-badges">
				<span class="stat-badge">500+ Professionals Trained</span>
				<span class="stat-badge">12+ Enterprise Cohorts</span>
				<span class="stat-badge">KU Faculty · Fusemachines</span>
			</div>
		</div>
	</div>
</section>

<!-- ============================ TIMELINE ============================ -->
<section class="section">
	<SectionHeader
		eyebrow="Experience & Institutional Trust"
		title="A Decade Bridging AI Engineering & Education"
		body="From building production AI ML systems to designing curricula adopted across South Asia, my work sits at the intersection of rigorous research & development and real-world impact. "
	/>


		<div class="section-copy" use:reveal={{ delay: 120 }}>
			<h3 class="timeline-heading">Career Timeline</h3>
			<ul class="timeline-list">
				{#each timeline as item (item.role)}
					<li class="timeline-item">
						<span class="timeline-marker"></span>
						<div class="timeline-copy">
							<div class="timeline-meta">
								<strong>{item.period}</strong> · {item.location}
								<span class="badge badge-{item.badge.toLowerCase()}">{item.badge}</span>
							</div>
							<div class="timeline-role">{item.role} — {item.org}</div>
							<p class="timeline-impact">{item.impact}</p>
						</div>
					</li>
				{/each}
			</ul>
		</div>
</section>

<!-- ============================ CAROUSEL ============================ -->
<section class="section section-alt">
	<div class="inner-wrap">
		<SectionHeader
			eyebrow="Live Workshops"
			title="Commanding the Room, Delivering Results"
			body="Every workshop is a live, facilitated experience—no pre-recorded videos, no passive lectures. Participants leave with working systems and measurable changes to their workflow."
		/>
		<Carousel {slides} />
	</div>
</section>

<!-- ============================ HIGHLIGHTED WORKSHOPS ============================ -->
<section class="section">
	<div class="inner-wrap">
		<SectionHeader
			eyebrow="Workshops Catalog"
			title="Signature Corporate Training Programs"
			body="Grounded in rigorous academic frameworks, optimized for rapid corporate execution."
		/>
		<div class="grid-three">
			{#each highlightedWorkshops as workshop, i (workshop.slug)}
				<WorkshopCard
					tag={workshop.tag}
					title={workshop.title}
					duration={workshop.duration}
					takeaway={workshop.takeaway}
					tools={workshop.tools}
					href="/workshops/{workshop.slug}"
					delay={i * 90}
				/>
			{/each}
		</div>
	</div>
</section>

<!-- ============================ COURSES ============================ -->
<section class="section section-alt">
	<div class="inner-wrap">
		<SectionHeader
			eyebrow="Curriculum"
			title="Courses Taught & Offered"
			body="Each course is designed with clear learning outcomes, industry-relevant tools, and assessments that reflect real-world problem-solving."
		/>
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
					delay={i * 80}
				/>
			{/each}
		</div>
		<div class="courses-cta">
			<a href="/courses" class="btn-primary">View All Courses & Teaching Philosophy →</a>
		</div>
	</div>
</section>

<!-- ============================ RESEARCH ============================ -->
<section class="section section-contrast">
	<div class="inner-wrap">
		<SectionHeader
			eyebrow="Research & Innovation"
			title="The Technical Moat"
			body={researchIntro}
			onContrast
		/>
		<div class="research-grid">
			{#each research as paper, i (paper.slug)}
				<ResearchCard {paper} variant="compact" delay={i * 90} />
			{/each}
		</div>
		<div class="research-cta">
			<a href="/research" class="btn-primary">View All Research →</a>
		</div>
	</div>
</section>

<style>
	/* ---- Hero ---- */
	.hero-section {
		position: relative;
		background: var(--color-enterprise-slate);
		margin: 0 -1.5rem;
		padding: 5.5rem 1.5rem 4.5rem;
		overflow: hidden;
	}

	.hero-section::before {
		content: '';
		position: absolute;
		inset: 0;
		background:
			radial-gradient(40rem 28rem at 78% 18%, rgba(37, 99, 235, 0.28), transparent 60%),
			radial-gradient(34rem 24rem at 12% 92%, rgba(5, 150, 105, 0.22), transparent 55%);
		pointer-events: none;
	}

	.hero-inner {
		position: relative;
		max-width: var(--max-width-canvas);
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 3rem;
		align-items: center;
	}

	.hero-copy {
		max-width: 38rem;
	}

	.hero-eyebrow {
		display: inline-block;
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--color-enterprise-accent-hover);
		margin-bottom: 1rem;
	}

	.hero-name {
		font-size: var(--text-h1);
		font-family: var(--font-display);
		color: #f8fafc;
		line-height: 1.05;
		margin-bottom: 1rem;
	}

	.hero-tagline {
		font-size: clamp(1.1rem, 2.5vw, 1.4rem);
		font-weight: 700;
		color: #cbd5e1;
		margin-bottom: 0.75rem;
	}

	.hero-body {
		font-size: 1rem;
		line-height: 1.8;
		color: #94a3b8;
		margin-bottom: 2rem;
	}

	.hero-ctas {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		align-items: center;
	}

	.hero-ctas :global(.btn-primary) {
		background: var(--color-enterprise-accent);
		color: #fff;
	}

	.hero-ctas :global(.btn-primary:hover) {
		background: var(--color-enterprise-accent-hover);
	}

	.btn-outline {
		display: inline-flex;
		align-items: center;
		padding: 0.9rem 1.75rem;
		border-radius: var(--radius-xl);
		border: 2px solid #475569;
		color: #f8fafc;
		font-weight: 700;
		text-decoration: none;
		transition: var(--transition-smooth);
	}

	.btn-outline:hover {
		border-color: var(--color-enterprise-accent);
		color: var(--color-enterprise-accent-hover);
		transform: translateY(-2px);
	}

	.hero-visual {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.25rem;
	}

	.profile-frame {
		width: 220px;
		height: 220px;
		border-radius: 50%;
		overflow: hidden;
		border: 4px solid var(--color-enterprise-accent);
		box-shadow: var(--ring-accent);
	}

	.profile-frame :global(.profile-image) {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.hero-stat-badges {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		align-items: center;
	}

	.stat-badge {
		font-size: 0.75rem;
		font-weight: 600;
		background: rgba(255, 255, 255, 0.08);
		color: #cbd5e1;
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: var(--radius-full);
		padding: 0.35rem 0.85rem;
		white-space: nowrap;
	}

	/* ---- Shared ---- */
	.inner-wrap {
		max-width: var(--max-width-canvas);
		margin: 0 auto;
	}

	.authority-title {
		font-size: var(--text-xl);
		margin-bottom: 1rem;
	}

	.authority-body {
		line-height: 1.8;
		color: var(--color-text-body);
		margin-bottom: 1.5rem;
	}

	.case-highlights {
		display: grid;
		gap: 1rem;
	}

	.case-item {
		display: flex;
		align-items: baseline;
		gap: 0.75rem;
		padding: 0.75rem 1rem;
		background: var(--color-bg-primary);
		border-radius: var(--radius-md);
		border: 1px solid var(--color-border);
	}

	.case-num {
		font-family: var(--font-display);
		font-size: 1.75rem;
		font-weight: 800;
		color: var(--color-enterprise-blue);
		min-width: 3rem;
	}

	.case-label-text {
		font-size: 0.9rem;
		color: var(--color-text-body);
		line-height: 1.4;
	}

	.timeline-heading {
		font-size: var(--text-xl);
		margin-bottom: 1.25rem;
		color: var(--color-text-heading);
	}

	.timeline-role {
		font-weight: 700;
		color: var(--color-text-heading);
	}

	.badge {
		display: inline-block;
		font-size: 0.65rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		padding: 0.2rem 0.55rem;
		border-radius: var(--radius-full);
		margin-left: 0.5rem;
		vertical-align: middle;
	}

	.badge-current {
		background: var(--tint-accent);
		color: var(--color-enterprise-accent);
	}

	.badge-research {
		background: var(--tint-blue);
		color: var(--color-enterprise-blue);
	}

	.badge-education {
		background: rgba(124, 58, 237, 0.14);
		color: #8b5cf6;
	}

	.courses-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
		gap: 1.5rem;
	}

	.courses-cta {
		margin-top: 2rem;
		text-align: center;
	}

	.research-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		gap: 1.5rem;
	}

	.research-cta {
		margin-top: 2rem;
	}

	@media (max-width: 768px) {
		.hero-inner {
			grid-template-columns: 1fr;
		}

		.hero-visual {
			order: -1;
		}

		.profile-frame {
			width: 160px;
			height: 160px;
		}
	}
</style>
