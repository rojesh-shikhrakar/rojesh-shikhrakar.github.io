<script lang="ts">
	import { mailto } from '$lib/site';
	import Seo from '$lib/components/Seo.svelte';
	const books = [
		{
			title: 'The Human Advantage: What remains valuable when intelligence becomes abundant',
			description:
				'A monograph exploring the future of work, education, and human flourishing in an era of abundant machine intelligence.',
			image:
				'https://res.cloudinary.com/w6ej7kot/image/upload/The_Human_Advantage_Book.png',
			link: 'https://ha.rojeshshikhrakar.com.np/',
			status: 'Forthcoming'
		},
		{
			title: 'The Engineering Manual',
			description:
				'Practical patterns for building dependable machine-learning products, from experiments to observable production systems.',
			image:
				'https://lh3.googleusercontent.com/aida-public/AB6AXuCW2Q4cMvsvmGZr1Tl8gsZsTXMQP6o5q5YpYSeY7_Wax_xDuCzF6qYdb-FQJDAoLT7ppQ-Qhfs8CPArtHSbty2WshrdgOEUbV8rWyadzC3qUHfwjy0BOcszp5_qlH6x0c7UMeadFWFLttr1QxgPxZACmHCN0OnAGDcplVMpqWpjYUJ_JHTVPFAPlhs67N02XQVsSKfH2oetiN8cuQZxN--dtMHRYUQVTgUXxLkaCj-css81vUpW5HrF',
			status: 'In development'
		}
	];
</script>

<Seo
	title="Books & Curriculum"
	description="Authored books, technical guides, and AI curriculum designed for academic and professional learning."
/>
<main class="work-page">
	<header class="work-hero container">
		<p class="eyebrow">Long-form learning</p>
		<h1>Books & Curriculum</h1>
		<p class="lead">
			Structured knowledge for the next generation of AI practitioners—connecting foundational
			theory, engineering judgment, and responsible implementation.
		</p>
	</header>
	<section class="section container">
		<div class="work-section-heading">
			<p class="eyebrow">Selected writing</p>
			<h2>Authored Monographs</h2>
		</div>
		<div class="books-grid">
			{#each books as book (book.title)}<a class="book-card" href={book.link ?? mailto(book.title)}>
					<div class="book-cover">
						<img
							src={book.image}
							alt={`Cover of ${book.title}`}
							width="520"
							height="650"
							loading="lazy"
						/><span>{book.status}</span>
					</div>
					<div>
						<h3>{book.title}</h3>
						<p>{book.description}</p>
					</div>
				</a>{/each}
		</div>
	</section>
	<section class="section curricula">
		<div class="container">
			<div class="work-section-heading">
				<p class="eyebrow">Teaching systems</p>
				<h2>Curricula & Courses</h2>
			</div>
			<div class="curriculum-grid">
				<article class="curriculum-feature">
					<p class="eyebrow">University curriculum</p>
					<h3>Advanced Generative Systems (AGS-402)</h3>
					<p>
						A graduate-level curriculum moving from latent representations to transformer
						architectures, evaluation, alignment, and production systems.
					</p>
					<ol>
						<li>
							<span>01</span>
							<div>
								<strong>Latent Spaces</strong>
								<p>High-dimensional manifolds and variational autoencoders.</p>
							</div>
						</li>
						<li>
							<span>02</span>
							<div>
								<strong>The Transformer</strong>
								<p>Positional encoding, multi-head attention, and cross-attention.</p>
							</div>
						</li>
						<li>
							<span>03</span>
							<div>
								<strong>Responsible Deployment</strong>
								<p>Evaluation, safeguards, monitoring, and human oversight.</p>
							</div>
						</li>
					</ol>
				</article>
				<div class="curriculum-side">
					<article>
						<p class="eyebrow">Professional guide</p>
						<h3>Applied MLOps Guide</h3>
						<p>A concise field guide used for corporate onboarding and reliable model delivery.</p>
					</article>
					<blockquote>
						“The curriculum connects deep technical rigor with the judgment practitioners need in
						the real world.”<cite>— Academic collaborator</cite>
					</blockquote>
				</div>
			</div>
		</div>
	</section>
	<section class="proof" aria-label="Educational reach">
		<div class="proof-grid container">
			<div><strong>12k+</strong><span>copies distributed</span></div>
			<div><strong>42</strong><span>universities</span></div>
			<div><strong>08</strong><span>core curricula</span></div>
			<div><strong>150+</strong><span>guest lectures</span></div>
		</div>
	</section>
	<section class="section container">
		<div class="work-cta">
			<h2>Join the Reading List</h2>
			<p>
				Receive occasional notes about new publications, curriculum releases, and substantive
				learning resources.
			</p>
			<a class="button" href={mailto('Reading list')}>Join the list</a>
		</div>
	</section>
</main>
