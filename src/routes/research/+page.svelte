<script lang="ts">
	import { mailto } from '$lib/site';
	import Seo from '$lib/components/Seo.svelte';
	type Publication = [year: string, title: string, citation: string, tags: string[], url: string];

	const interests = [
		{
			title: 'AI in Pedagogy & Education',
			body: 'Investigating the role of AI in personalized learning, curriculum design, and the development of intelligent tutoring systems. Have build AI enabled education platform with multiple types of graders with feedback for code, subjective, objective, image and video graders. Have AI-enabled proctoring platform that flags suspicious activities during online exams. Content Authoring Tool to generate contents, questions and answers for multiple choice, subjective, objective questions, supporting mathematics and coding with variations of context, phrasing and scenarios.',
			image:
				'https://lh3.googleusercontent.com/aida-public/AB6AXuBETcQj37VWI7hucuu460HD-ud6VbyOH8svtZu0gZEtk9aW2kR23BiBHhyx9ArNsN-v6AuGbpavG2kVVkhv7LgGe7kv5XOY2W1CbXQ9AS9S_o36mULZ8q2QwXT8a9yo37OhSWn0ukhsoN6ZPFGS6msqKoFKAg8_8E61hR2aviIsdpB4M71FJbmxmRdd4rpzw2x42aAUib7hTgQSQyVzij-KtH0J7cbHkahzM-XpFfwvD3FKtzrYhumE'
		},
		{
			title: 'Scientific Machine Learning',
			body: 'Developing physics-informed neural networks and data-driven discovery of governing equations for complex systems.',
			image:
				'https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs10462-025-11322-7/MediaObjects/10462_2025_11322_Fig2_HTML.png'
		},
		{
			title: 'Agentic AI',
			body: 'Exploring the design of autonomous agents capable of reasoning, planning, and acting in complex environments.',
			image: 'https://www.aprimo.com/wp-content/uploads/2025/09/image5-3-1024x576.jpg'
		},
		{
			title: 'Computer Vision & Pattern Recognition',
			body: 'Investigating hierarchical feature extraction in multi-modal environments and the robustness of spatial understanding in synthetic datasets.',
			image:
				'https://lh3.googleusercontent.com/aida-public/AB6AXuBETcQj37VWI7hucuu460HD-ud6VbyOH8svtZu0gZEtk9aW2kR23BiBHhyx9ArNsN-v6AuGbpavG2kVVkhv7LgGe7kv5XOY2W1CbXQ9AS9S_o36mULZ8q2QwXT8a9yo37OhSWn0ukhsoN6ZPFGS6msqKoFKAg8_8E61hR2aviIsdpB4M71FJbmxmRdd4rpzw2x42aAUib7hTgQSQyVzij-KtH0J7cbHkahzM-XpFfwvD3FKtzrYhumE'
		},
		{
			title: 'Natural Language Processing',
			body: 'Semantic drift analysis and long-context retrieval mechanisms within transformer-based architectures.'
		},
		{
			title: 'Reliable & Alignment-First AI',
			body: 'Making AI systems explainable, predictable, and consistently aligned with human intent across diverse cultural contexts.'
		}
	];
	const publications: Publication[] = [
		[
			'2020',
			'Data-Driven Discovery of Governing Partial Differential Equations',
			'Shikhrakar, R. M., et al. - Proceedings of 8th IOE Graduate Conference',
			['PDE', 'Physics-informed ML', 'PINN'],
			'https://conference.ioe.edu.np/ioegc8/papers/ioegc-8-048-80063.pdf'
		],
		[
			'2018',
			'Malaria Detection Using Image Processing and Machine Learning',
			'Kunwar, S., Shrestha M. Shikhrakar, R. M. - ArXiv e-prints',
			['CV', 'Segmentation', 'Detection'],
			'https://www.researchgate.net/profile/Suman-Kunwar/publication/322819026_Malaria_Detection_Using_Image_Processing_and_Machine_Learning/links/65fd1f66f3b56b5b2d1db895/Malaria-Detection-Using-Image-Processing-and-Machine-Learning.pdf'
		]
	];
</script>

<Seo
	title="Research & Publications"
	description="Research in Scientific Machine Learning, Agentic AI, computer vision, natural language processing, and reliable alignment-first AI."
/>
<main class="work-page">
	<header class="work-hero container">
		<p class="eyebrow">Academic inquiry & applied innovation</p>
		<h1>Research & Publications</h1>
		<p class="lead">
			Advancing the foundations of intelligent systems through rigorous inquiry, open research, and
			a commitment to AI that remains reliable, interpretable, and useful.
		</p>
		<div class="button-row">
			<a class="button" href="#publications">View publications</a><a
				class="button button-secondary"
				href={mailto('Research collaboration')}>Discuss collaboration</a
			>
		</div>
	</header>
	<section class="section container">
		<div class="work-section-heading">
			<p class="eyebrow">Fields of inquiry</p>
			<h2>Research Interests</h2>
		</div>
		<div class="interest-grid">
			{#each interests as interest, index (interest.title)}
				<article class:dark={index % 2 === 1} class="interest-card">
					{#if interest.image}<img
							src={interest.image}
							alt="Abstract neural network visualization"
							width="600"
							height="380"
						/>{/if}
					<div>
						<span>0{index + 1}</span>
						<h3>{interest.title}</h3>
						<p>{interest.body}</p>
					</div>
				</article>{/each}
		</div>
	</section>
	<section class="section publications" id="publications">
		<div class="container">
			<div class="work-section-heading">
				<p class="eyebrow">Peer-reviewed work</p>
				<h2>Selected Publications</h2>
			</div>
			<div class="publication-list">
				{#each publications as publication (publication[1])}<article>
						<a
							class="publication-link"
							href={publication[4]}
							target="_blank"
							rel="external noopener noreferrer"
						>
							<time>{publication[0]}</time>
							<div>
								<h3>{publication[1]}</h3>
								<p>{publication[2]}</p>
								<div class="tags">
									{#each publication[3] as tag (tag)}<span>{tag}</span>{/each}
								</div>
							</div>
							<span class="row-arrow" aria-hidden="true">↗</span>
						</a>
					</article>{/each}
			</div>
		</div>
	</section>
	<section class="section container">
		<div class="work-cta">
			<h2>Collaboration Inquiries</h2>
			<p>
				Interested in academic partnership or technical consulting for AI reliability? My door is
				open for substantive research dialogues.
			</p>
			<a class="button" href={mailto('Research collaboration')}>Start a conversation</a>
		</div>
	</section>
</main>
