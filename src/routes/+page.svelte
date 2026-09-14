<script lang="ts">
	import { mailto } from '$lib/site';
	import { personSchema, websiteSchema } from '$lib/seo/schema';
	import Seo from '$lib/components/Seo.svelte';
	import portrait from '$lib/assets/rojesh-portrait.webp';
	import fellowship from '$lib/assets/photos/aifellowship-np-2026.webp';
	import { professionalRoles, professionalStats } from '$lib/professional';

	const programs = [
		{
			icon: 'strategy',
			title: 'Executive Strategy',
			body: 'I help decision-makers identify useful AI opportunities, understand the risks, and decide what their teams should do next.',
			items: ['Leadership Workshops', 'Policy Frameworks', 'Cultural & Strategic Alignment']
		},
		{
			icon: 'workflow',
			title: 'Productivity Labs',
			body: 'Participants work on tasks they already handle—research, analysis, writing, planning, and communication—and build repeatable ways to use AI.',
			items: ['Workflow Automation', 'Prompt Engineering', 'Tool Stack Optimization']
		},
		{
			icon: 'education',
			title: 'Academic Programs',
			body: 'I work with faculty and curriculum teams to teach AI without losing academic integrity, sound assessment, or the fundamentals students still need.',
			items: ['Curriculum Design', 'Faculty Upskilling', 'Student Readiness']
		}
	];
	const method = [
		['Diagnose', 'Assess organizational readiness and identify high-impact AI use cases.'],
		['Design', 'Create a custom curriculum that maps AI tools to specific job functions.'],
		['Facilitate', 'Lead hands-on training focused on practical application.'],
		['Build', 'Develop internal AI guidelines and standard operating procedures.'],
		['Transfer', 'Establish internal champions who sustain and grow AI capability.']
	];
	const engineersTrained = professionalStats.find(
		(metric) => metric.label === 'AI engineers trained'
	);
	const countriesReached = professionalStats.find((metric) => metric.label === 'Countries reached');

	const homeSchema = {
		'@context': 'https://schema.org',
		'@graph': [websiteSchema(), personSchema(portrait)]
	};
</script>

<Seo
	title="AI Trainer & Consultant in Kathmandu, Nepal | Rojesh Man Shikhrakar"
	description="Rojesh Man Shikhrakar is an AI trainer, engineer and consultant based in Kathmandu, Nepal, delivering corporate AI training, workshops and machine learning programs across Nepal and beyond."
	image={portrait}
	type="profile"
	jsonLd={homeSchema}
/>

<main id="main-content">
	<section class="hero container">
		<div class="hero-copy">
			<p class="eyebrow">AI educator & enterprise practitioner &middot; Kathmandu</p>
			<h1>I turn AI complexity into organizational capability.</h1>
			<p class="lead">
				I help people move beyond impressive AI demos and use the technology in work that actually
				matters. My <a href="/ai-trainer-nepal">AI training for organizations in Nepal</a>
				connects practical workflows with careful review, governance and technical understanding.
			</p>
			<div class="button-row">
				<a class="button" href={mailto('AI training program')}>Discuss a Training Program</a>
				<a class="button button-secondary" href="/ai-trainer-nepal">Explore AI Training</a>
			</div>
		</div>
		<div class="portrait-wrap">
			<img class="portrait" src={portrait} alt="Rojesh Man Shikhrakar" width="336" height="513" />
			<!-- <div class="availability"><span></span></div> -->
		</div>
	</section>

	<section class="proof" aria-label="Professional highlights">
		<div class="proof-grid container">
			<div>
				<strong>{professionalRoles[0].title}</strong><span
					>at {professionalRoles[0].organization}</span
				>
			</div>
			<div><strong>Visiting Faculty</strong><span>at Kathmandu University</span></div>
			<div><strong>{engineersTrained?.value}</strong><span>{engineersTrained?.label}</span></div>
			<div><strong>{countriesReached?.value}</strong><span>{countriesReached?.label}</span></div>
		</div>
	</section>

	<section class="section positioning" id="expertise">
		<div class="reading-width">
			<h2>True AI capability comes from a shift in human problem-solving</h2>
			<div class="short-rule"></div>
			<p class="lead">
				A tool demonstration can create excitement, but it rarely changes how a team works. I begin
				with the decisions, documents and conversations people already handle, then help them build
				a repeatable way to use AI without handing over their judgment.
			</p>
		</div>
	</section>

	<section class="section programs" id="programs">
		<div class="container">
			<div class="section-heading">
				<p class="eyebrow">Core programs</p>
				<h2>Practical AI programs for people who are expected to deliver results.</h2>
			</div>
			<div class="program-grid">
				{#each programs as program (program.title)}<article class="program-card">
						<div class="card-icon" aria-hidden="true">
							{#if program.icon === 'strategy'}
								<svg viewBox="0 0 24 24"><path d="M5 19V9m7 10V5m7 14v-7M3 19h18" /></svg>
							{:else if program.icon === 'workflow'}
								<svg viewBox="0 0 24 24"
									><path d="M6 5h12M6 12h12M6 19h12M3 5h.01M3 12h.01M3 19h.01" /></svg
								>
							{:else}
								<svg viewBox="0 0 24 24"
									><path d="M4 6.5 12 3l8 3.5-8-3.5Zm2 3V16c3 2.5 9 2.5 12 0V9.5" /></svg
								>
							{/if}
						</div>
						<h3>{program.title}</h3>
						<p>{program.body}</p>
						<ul>
							{#each program.items as item (item)}<li>
									<svg aria-hidden="true" viewBox="0 0 16 16"><path d="m3 8 3 3 7-7" /></svg>{item}
								</li>{/each}
						</ul>
					</article>{/each}
			</div>
		</div>
	</section>

	<section class="section impact container" id="impact">
		<article class="impact-row">
			<div>
				<p class="eyebrow">Institutional impact</p>
				<h2>Fusemachines AI Fellowship</h2>
				<p>
					At Fusemachines, I lead education strategy for AI fellowship programs delivered across
					{countriesReached?.value} countries. My work has included foundation courses, AI microdegrees,
					specializations for engineers and researchers, and AI literacy programs for non-technical professionals.
					<a href="https://fuse.ai/" target="_blank" rel="noopener noreferrer"
						>Learn about the fellowship</a
					>.
				</p>
				<div class="tags">
					<span>Strategic lead</span><span>{countriesReached?.value} countries</span>
				</div>
			</div>
			<img
				src={fellowship}
				alt="AI Fellowship Nepal 2026 Cohort"
				width="560"
				height="315"
				loading="lazy"
			/>
		</article>
		<article class="impact-row reverse">
			<div class="impact-marker" aria-hidden="true">
				<span>KU</span><small>Teaching and curriculum</small>
			</div>
			<div>
				<p class="eyebrow">Academic leadership</p>
				<h2>Curriculum Committee and Visiting Faculty</h2>
				<p>
					As a subject committee member at Kathmandu University and the Industry Integrated Degree,
					I bring current engineering and research questions into curriculum discussions. In the
					classroom, that means helping students understand both how AI systems work and where their
					limitations matter.
				</p>
				<a class="text-link" href="#engagements">View selected engagements <span>→</span></a>
			</div>
		</article>
	</section>

	<section class="section method" id="method">
		<div class="container">
			<div class="section-heading">
				<p class="eyebrow">The framework</p>
				<h2>A capability-building method designed for transfer.</h2>
			</div>
			<div class="method-grid">
				{#each method as step, index (step[0])}<article>
						<span class="step-number">0{index + 1}</span>
						<h3>{step[0]}</h3>
						<p>{step[1]}</p>
					</article>{/each}
			</div>
		</div>
	</section>
	<section class="section container" id="engagements">
		<div class="engagement-heading">
			<h2>Selected Engagements</h2>
			<span>Partners & collaborators</span>
		</div>
		<div class="engagement-list">
			{#each professionalRoles as engagement (engagement.organization)}<div>
					<strong>{engagement.organization}</strong><span>{engagement.title}</span>
				</div>{/each}
		</div>
	</section>
	<section class="section container">
		<div class="closing-cta">
			<h2>Build AI capability that lasts beyond the session.</h2>
			<p class="lead">
				Let’s discuss how we can tailor an AI training program to your organization’s needs and
				strategic objectives.
			</p>
			<a class="button" href={mailto('Strategy call')}>Book a Strategy Call</a>
		</div>
	</section>
</main>
