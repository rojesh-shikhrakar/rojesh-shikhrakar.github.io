<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import portrait from '$lib/assets/rojesh-portrait.webp';

	const mandates = [
		{
			period: '2017 — Present',
			title: 'Director of AI Education & Talent Development',
			organization: 'Fusemachines',
			body: 'Orchestrating global AI training initiatives, designing curricula for thousands of engineers, and bridging the technical-to-talent gap for international enterprises.',
			icon: 'building'
		},
		{
			period: '2020 — Present',
			title: 'Visiting / Adjunct Faculty',
			organization: 'Kathmandu University',
			body: 'Guiding the next generation of engineers through advanced coursework in machine learning and robotics, grounding academic theory in industrial reality.',
			icon: 'cap'
		}
	];

	const trajectory = [
		[
			'2017 — 2019',
			'Senior Machine Learning Research Engineer',
			'Fusemachines. Focused on high-scale ML model architecture and R&D for predictive analytics.'
		],
		[
			'2016 — 2020',
			'Co-Founder & Technical Lead',
			'Airlift Technologies. Spearheaded technical strategy and product development for early-stage logistics and tech-enabled services.'
		]
	];

	const principles = [
		['Fundamentals', 'Mathematics and theory over momentary hype cycles.'],
		['Workflows', 'Standardized processes generate predictable outcomes.'],
		['Production', 'AI is only valuable when it lives in real-world deployment.'],
		['Judgment', 'The human loop is the final safeguard of intelligence.'],
		['Capability', 'Training talent is the ultimate scaling strategy.']
	];

	const credentials = [
		[
			'ColumbiaX MicroMasters in AI',
			'Advanced Machine Learning & Neural Networks',
			'Columbia University'
		],
		['M.Sc. in Mechanical Engineering', 'Focus on Robotics & Control Systems', 'Graduate'],
		[
			'B.Tech. in Mechanical Engineering',
			'Foundation of Physical Systems Engineering',
			'Undergraduate'
		]
	];
</script>

<Seo
	title="About Rojesh Man Shikhrakar — AI Trainer in Nepal"
	description="A decade of AI engineering and education from Kathmandu, Nepal. The story, experience and working philosophy of AI trainer and consultant Rojesh Man Shikhrakar."
/>

<main>
	<section class="about-hero container">
		<div>
			<p class="eyebrow">Director & ML Engineer</p>
			<h1>A decade bridging AI engineering, education, and institutional change.</h1>
			<p class="lead">
				A leader in the AI education landscape, navigating the intersection of complex machine
				learning systems and the human frameworks required to master them.
			</p>
		</div>
		<figure>
			<img src={portrait} alt="Rojesh Man Shikhrakar" width="480" height="600" />
			<figcaption>Nepal based</figcaption>
		</figure>
	</section>

	<section class="origin">
		<div class="reading-width">
			<p class="eyebrow">The origin</p>
			<h2>From mechanical systems to machine intelligence.</h2>
			<div class="origin-copy">
				<p>
					My journey began in the world of physical systems. As a mechanical engineer, I was trained
					to understand the rigid logic of thermodynamics and machine design. But data-driven
					intelligence presented a new frontier—one where systems did not just follow laws; they
					learned them.
				</p>
				<p>
					This transition was not just a pivot in technology; it was a pivot in pedagogy. I realized
					that the greatest bottleneck in AI adoption was not the algorithms, but the collective
					capability of institutions to deploy them meaningfully. This sparked a decade-long mission
					to bridge high-level ML engineering and scalable talent development.
				</p>
			</div>
		</div>
	</section>

	<section class="section mandates container">
		<h2>Active Mandates</h2>
		<div class="mandate-grid">
			{#each mandates as mandate (mandate.title)}
				<article>
					<div class="card-top">
						<span>{mandate.period}</span><svg aria-hidden="true" viewBox="0 0 24 24"
							><path
								d={mandate.icon === 'cap'
									? 'M3 9.5 12 5l9 4.5-9 4.5-9-4.5Zm3 2.5v5c2.7 2.5 9.3 2.5 12 0v-5M21 10v6'
									: 'M4 21V6l8-3v18M4 9h8m-8 4h8m-8 4h8m4-8h4v12m-4-8h4m-4 4h4M2 21h20'}
							/></svg
						>
					</div>
					<h3>{mandate.title}</h3>
					<p class="organization">{mandate.organization}</p>
					<p>{mandate.body}</p>
				</article>
			{/each}
		</div>
	</section>

	<section class="trajectory">
		<div class="container">
			<h2>Selected Trajectory</h2>
			<div class="trajectory-list">
				{#each trajectory as item (item[0])}<article>
						<span>{item[0]}</span>
						<div>
							<h3>{item[1]}</h3>
							<p>{item[2]}</p>
						</div>
					</article>{/each}
			</div>
		</div>
	</section>

	<section class="section principles container">
		<h2>Engineering Ethics</h2>
		<div class="principle-grid">
			{#each principles as principle, index (principle[0])}<article>
					<span>0{index + 1}</span>
					<h3>{principle[0]}</h3>
					<p>{principle[1]}</p>
				</article>{/each}
		</div>
	</section>

	<section class="credentials">
		<div class="credentials-grid container">
			<h2>Academic Credentials</h2>
			<div>
				{#each credentials as credential (credential[0])}<article>
						<div>
							<h3>{credential[0]}</h3>
							<p>{credential[1]}</p>
						</div>
						<span>{credential[2]}</span>
					</article>{/each}
			</div>
		</div>
	</section>

	<section class="section perspective container">
		<div class="reading-width">
			<h2>Based in Nepal. Built for global relevance.</h2>
			<p class="lead">
				Operating from Kathmandu, I design systems that power international teams and educate future
				engineers across borders.
			</p>
			<div
				class="mountains"
				role="img"
				aria-label="Layered silhouette of the Himalayan mountains at dusk"
			>
				<span></span><span></span><span></span>
			</div>
		</div>
	</section>
</main>

<style>
	.about-hero {
		display: grid;
		grid-template-columns: 7fr 5fr;
		align-items: center;
		gap: 4rem;
		padding-block: clamp(5rem, 11vw, 9rem);
	}
	.about-hero h1 {
		max-width: 12ch;
	}
	.about-hero figure {
		position: relative;
		margin: 0;
	}
	.about-hero img {
		width: 100%;
		aspect-ratio: 4/5;
		object-fit: cover;
		border-radius: 1.125rem;
		box-shadow: var(--shadow);
	}
	.about-hero figcaption {
		position: absolute;
		right: -0.5rem;
		bottom: -0.5rem;
		padding: 0.55rem 1rem;
		border-radius: 0.5rem;
		background: var(--bronze);
		color: white;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}
	.origin {
		padding-block: clamp(4.5rem, 9vw, 7.5rem);
		border-block: 1px solid var(--border);
		background: #f2ede6;
	}
	.origin h2 {
		max-width: 13ch;
	}
	.origin-copy {
		display: grid;
		gap: 1rem;
		color: var(--ink-soft);
	}
	.origin-copy p {
		margin: 0;
	}
	.mandates h2,
	.principles h2 {
		margin-bottom: 3.5rem;
	}
	.mandate-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
	}
	.mandate-grid article {
		padding: 2rem;
		border: 1px solid var(--border);
		border-radius: 1.125rem;
		background: var(--surface);
		box-shadow: var(--shadow);
		transition: transform 180ms ease;
	}
	.mandate-grid article:hover {
		transform: translateY(-4px);
	}
	.card-top {
		display: flex;
		justify-content: space-between;
		align-items: start;
		margin-bottom: 1rem;
		color: var(--teal);
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}
	.card-top svg {
		width: 1.5rem;
		fill: none;
		stroke: var(--bronze);
		stroke-width: 1.6;
		stroke-linecap: round;
		stroke-linejoin: round;
	}
	.mandate-grid h3 {
		margin-bottom: 0.5rem;
	}
	.mandate-grid p {
		color: var(--ink-soft);
	}
	.mandate-grid .organization {
		margin: 0.25rem 0 1rem;
		color: var(--teal);
		font-family: var(--serif);
		font-size: 1.25rem;
	}
	.trajectory {
		padding-block: clamp(4.5rem, 9vw, 7.5rem);
		background: var(--ink-deep);
		color: var(--paper);
	}
	.trajectory h2 {
		margin-bottom: 4rem;
	}
	.trajectory-list article {
		display: grid;
		grid-template-columns: 3fr 9fr;
		gap: 2rem;
		align-items: baseline;
		padding: 0 0 2rem;
		margin-bottom: 2rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.12);
	}
	.trajectory-list article:last-child {
		margin-bottom: 0;
		border: 0;
	}
	.trajectory-list span {
		color: var(--bronze-light);
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}
	.trajectory-list h3 {
		margin-bottom: 0.5rem;
		color: white;
	}
	.trajectory-list p {
		margin: 0;
		color: #bfc9c5;
	}
	.principle-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 1rem;
	}
	.principle-grid article {
		padding: 1rem;
		border-top: 2px solid var(--teal);
		background: var(--surface);
	}
	.principle-grid span {
		color: var(--bronze);
		font-size: 0.75rem;
		font-weight: 700;
	}
	.principle-grid h3 {
		margin: 0.7rem 0 0.5rem;
		font-family: var(--sans);
		font-size: 1rem;
		font-weight: 700;
	}
	.principle-grid p {
		margin: 0;
		color: var(--ink-soft);
		font-size: 0.875rem;
	}
	.credentials {
		padding-block: clamp(4.5rem, 9vw, 7.5rem);
		border-top: 1px solid var(--border);
		background: var(--surface);
	}
	.credentials-grid {
		display: grid;
		grid-template-columns: 4fr 8fr;
		gap: 4rem;
	}
	.credentials-grid article {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
		padding: 2rem 0;
		border-bottom: 1px solid var(--border);
	}
	.credentials-grid article:first-child {
		padding-top: 0;
	}
	.credentials-grid article:last-child {
		border: 0;
	}
	.credentials-grid h3 {
		margin-bottom: 0.25rem;
		font-family: var(--sans);
		font-size: 1.18rem;
		font-weight: 700;
	}
	.credentials-grid p {
		margin: 0;
		color: var(--ink-soft);
	}
	.credentials-grid article > span {
		color: var(--bronze);
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-align: right;
		text-transform: uppercase;
	}
	.perspective {
		text-align: center;
	}
	.perspective .lead {
		margin: 0 auto 2.5rem;
	}
	.mountains {
		position: relative;
		height: 16rem;
		overflow: hidden;
		border-radius: 1.125rem;
		background: linear-gradient(#d7d6d0, #f4efe7 60%);
		box-shadow: var(--shadow);
	}
	.mountains span {
		position: absolute;
		inset: auto -10% -35% -10%;
		height: 90%;
		background: #727877;
		clip-path: polygon(
			0 80%,
			8% 64%,
			16% 73%,
			26% 38%,
			34% 64%,
			45% 30%,
			55% 66%,
			65% 42%,
			76% 70%,
			86% 48%,
			100% 73%,
			100% 100%,
			0 100%
		);
	}
	.mountains span:nth-child(2) {
		bottom: -47%;
		background: #495251;
		transform: scale(1.12);
	}
	.mountains span:nth-child(3) {
		bottom: -60%;
		background: #222c2d;
		transform: scale(1.25);
	}
	@media (max-width: 800px) {
		.about-hero,
		.mandate-grid,
		.credentials-grid {
			grid-template-columns: 1fr;
		}
		.about-hero {
			gap: 3rem;
			padding-block: 4.5rem;
		}
		.about-hero figure {
			width: min(100%, 28rem);
		}
		.principle-grid {
			grid-template-columns: repeat(2, 1fr);
		}
		.trajectory-list article {
			grid-template-columns: 1fr;
			gap: 0.75rem;
		}
		.credentials-grid {
			gap: 2rem;
		}
	}
	@media (max-width: 520px) {
		.principle-grid {
			grid-template-columns: 1fr;
		}
		.credentials-grid article {
			align-items: flex-start;
			flex-direction: column;
			gap: 0.75rem;
		}
		.credentials-grid article > span {
			text-align: left;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.mandate-grid article {
			transition: none;
		}
	}
</style>
