<script lang="ts">
	import { mailto, siteUrl } from '$lib/site';
	import Seo from '$lib/components/Seo.svelte';
	import portrait from '$lib/assets/rojesh-portrait.webp';
	import fellowship from '$lib/assets/photos/aifellowship-np-2026.webp';

	const programs = [
		{
			icon: '↗',
			title: 'Executive Strategy',
			body: 'Framing the AI opportunity for decision-makers. Focus on risk mitigation, investment ROI, and building a roadmap for responsible AI adoption across the enterprise.',
			items: ['Leadership Workshops', 'Policy Frameworks', 'Cultural & Strategic Alignment']
		},
		{
			icon: '✦',
			title: 'Productivity Labs',
			body: 'Hands-on implementation of LLMs and generative tools. We focus on specific job roles and workflows, ensuring that AI becomes a co-pilot, not a distraction.',
			items: ['Workflow Automation', 'Prompt Engineering', 'Tool Stack Optimization']
		},
		{
			icon: '▤',
			title: 'Academic Programs',
			body: 'Integrating AI into higher education curricula. Designing pedagogical approaches that maintain academic integrity while preparing students for an AI-native workforce.',
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
	const engagements = [
		['Fusemachines Inc.', 'Director of AI Education & Talent Development'],
		['Kathmandu University', 'Subject Committee Member, Visiting Faculty'],
		['Industry Integrated Degree (IID by NASIT-NOU)', 'Subject Committee Member'],
		['Australia Awards', 'Capability Building Programs']
	];

	const personSchema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Rojesh Man Shikhrakar',
		url: siteUrl,
		image: `${siteUrl}${portrait}`,
		jobTitle: 'AI Trainer, Educator & Consultant',
		description:
			'AI trainer and consultant based in Kathmandu, Nepal, delivering corporate AI training, workshops, and machine learning education.',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Kathmandu',
			addressCountry: 'NP'
		},
		worksFor: { '@type': 'Organization', name: 'Fusemachines' },
		knowsAbout: [
			'Artificial Intelligence',
			'Machine Learning',
			'Generative AI',
			'Large Language Models',
			'AI Training',
			'AI Strategy',
			'Prompt Engineering',
			'Data Science'
		],
		sameAs: [
			'https://www.linkedin.com/in/rojesh-shikhrakar/',
			'https://github.com/rojesh-shikhrakar'
		]
	};
</script>

<Seo
	title="AI Trainer & Consultant in Kathmandu, Nepal | Rojesh Man Shikhrakar"
	description="Rojesh Man Shikhrakar is an AI trainer, engineer and consultant based in Kathmandu, Nepal, delivering corporate AI training, workshops and machine learning programs across Nepal and beyond."
	image={portrait}
	type="profile"
	jsonLd={personSchema}
/>

<main id="main-content">
	<section class="hero container">
		<div class="hero-copy">
			<p class="eyebrow">AI Trainer, Engineer & Consultant &middot; Kathmandu, Nepal</p>
			<h1>Empowering Humans, Accelerated by AI</h1>
			<p class="lead">
				I have spent a decade deploying AI solutions to production. Bridging the gap between
				frontier technology and human talent. I design and deliver high-impact AI training programs
				and systems from school level to enterprise, from basic AI literacy to AI research and
				engineering.
			</p>
		</div>
		<div class="portrait-wrap">
			<img class="portrait" src={portrait} alt="Rojesh Man Shikhrakar" width="336" height="513" />
			<!-- <div class="availability"><span></span></div> -->
		</div>
		<div class="button-row">
			<a class="button" href={mailto('AI training program')}>Discuss a Training Program</a><a
				class="button button-secondary"
				href="/programs">Explore Expertise</a
			>
		</div>
	</section>

	<section class="proof" aria-label="Professional highlights">
		<div class="proof-grid container">
			<div>
				<strong>Director of AI Education & Talent Development</strong><span>at Fusemachines</span>
			</div>
			<div>
				<strong>Visiting Faculty</strong><span>at Kathmandu University, NIST, Islignton</span>
			</div>
			<div><strong>1,500+</strong><span>AI engineers trained</span></div>
			<div><strong>15+</strong><span>countries reached</span></div>
		</div>
	</section>

	<section class="section positioning" id="expertise">
		<div class="reading-width">
			<h2>True AI capability comes from a shift in human problem-solving</h2>
			<div class="short-rule"></div>
			<p class="lead">
				AI capability is not built through tool demonstrations. It comes from new mental models,
				workflow redesign, and continuous learning. Tools only amplify your current habits; your
				daily thinking must change before your results do.
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
						<div class="card-icon" aria-hidden="true">{program.icon}</div>
						<h3>{program.title}</h3>
						<p>{program.body}</p>
						<ul>
							{#each program.items as item (item)}<li><span>✓</span>{item}</li>{/each}
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
					Leading the educational strategy for Fusemachines' flagship AI fellowship programs. We
					have scaled technical education to thousands of learners across 15+ countries, creating a
					new pipeline of AI talent for the global market. In addition to this, I have designed and
					delivered foundation, microdegree in AI, microdegree specialization courses for AI
					engineers and researchers, and AI literacy programs for non-technical professionals. For
					More Info: <a href="https://fuse.ai/" target="_blank" rel="noopener noreferrer">fuse.ai</a
					>
				</p>
				<div class="tags"><span>Strategic lead</span><span>15+ countries</span></div>
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
			<img
				src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsJJRpjoG01c-3PO4iNYND0-DdWfOOXAsVHT_5zVld2gAB0rpC9PSHVT7p8bzCBUYw12muxLcK8uQDFwyFOWtG6yp2ikv_5MC-SxmjBsh8cMJq71JoLx-DQiQHviGCtCWqC6mdQ_Aog-E6qfWSI9yvHHaJ9Eh-VExUUsgCHYx3ZkucIse32-Cidq2ED9rrVMiGhJjAbF5T6tn8A9p_QTEPoWFBOd5E23fcdDa6gTCFfs-SRo9qrPUe"
				alt="Academic notebook and lectern in a university hall"
				width="560"
				height="315"
				loading="lazy"
			/>
			<div>
				<p class="eyebrow">Academic leadership</p>
				<h2>Curriculum Committee and Visiting Faculty</h2>
				<p>
					Bridging academia and industry. As a subject committee member at Kathmandu University (KU)
					and Industry Integrated Degree (IID by NOU-NASIT), I provide insights to curriculum that
					translates engineering AI practices and research into actionable knowledge, preparing the
					next generation for the ethical and practical challenges of the AI era.
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
			{#each engagements as engagement (engagement[0])}<div>
					<strong>{engagement[0]}</strong><span>{engagement[1]}</span>
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
