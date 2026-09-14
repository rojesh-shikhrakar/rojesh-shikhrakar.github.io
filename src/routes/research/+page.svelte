<script lang="ts">
	import { mailto } from '$lib/site';
	import Seo from '$lib/components/Seo.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import { webPageSchema } from '$lib/seo/schema';
	const breadcrumbs = [
		{ name: 'Home', path: '/' },
		{ name: 'Research', path: '/research' }
	];
	type Publication = [year: string, title: string, citation: string, tags: string[], url: string];

	const interests = [
		{
			title: 'AI in Pedagogy & Education',
			body: 'I study how AI can support teaching, feedback, assessment and curriculum design without weakening academic judgment. My applied work includes automated feedback for several assessment formats, online-exam monitoring and tools that help educators draft and vary learning materials.'
		},
		{
			title: 'Scientific Machine Learning',
			body: 'Developing physics-informed neural networks and data-driven methods for discovering the governing equations of complex systems.'
		},
		{
			title: 'Agentic AI',
			body: 'Exploring how autonomous agents reason, plan and act—and where people need visibility, review and control.'
		},
		{
			title: 'Computer Vision & Pattern Recognition',
			body: 'Investigating feature extraction in multimodal systems and the reliability of spatial understanding in synthetic datasets.'
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
	jsonLd={webPageSchema({
		path: '/research',
		name: 'Research and Publications',
		description:
			'Research in scientific machine learning, agentic AI, computer vision, natural language processing and reliable AI.',
		breadcrumbs
	})}
/>
<main class="work-page">
	<Breadcrumbs items={breadcrumbs} />
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
				If you are working on AI reliability, scientific machine learning or AI in education, tell
				me what you are investigating and where a collaborator could help.
			</p>
			<a class="button" href={mailto('Research collaboration')}>Start a conversation</a>
		</div>
	</section>
</main>
