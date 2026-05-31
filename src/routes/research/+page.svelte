<script lang="ts">
	import { research, site } from '$lib/data/site';
	import { Seo, SectionHeader, ResearchCard } from '$lib';
	import { reveal } from '$lib/actions/reveal';

	const ossProjects = [
		{
			lang: 'Python',
			title: 'Medical Image Segmentation Toolkit',
			desc: 'A modular Python library for preprocessing, augmenting, and evaluating medical image segmentation models. Supports DICOM, NIfTI, and PNG formats.',
			status: 'Active'
		},
		{
			lang: 'Python',
			title: 'Enterprise Prompt Evaluation Framework',
			desc: 'A benchmarking toolkit for evaluating LLM output consistency, hallucination rate, and instruction-following accuracy across prompt variations.',
			status: 'Active'
		},
		{
			lang: 'Jupyter',
			title: 'South Asian ML Benchmark Dataset',
			desc: 'Curated datasets for training and evaluating ML models on South and Southeast Asian market contexts. Includes retail, agriculture, and financial sectors.',
			status: 'Beta'
		}
	];

	const collaborations = [
		{
			org: 'Kathmandu University',
			focus: 'Scientific ML Lab — computational physics, neural ODEs, differentiable simulation'
		},
		{
			org: 'Fusemachines Research',
			focus:
				'Enterprise LLM safety — hallucination reduction, output verification, domain adaptation'
		},
		{
			org: 'Regional Healthcare Network',
			focus:
				'Medical imaging AI — diagnostic model deployment, multi-site validation, FDA pathway research'
		},
		{
			org: 'Open to New Collaborations',
			focus:
				'Particularly interested in: AI for agriculture, multilingual NLP for South Asian languages, and AI governance frameworks.'
		}
	];
</script>

<Seo
	title="Research | {site.name}"
	description="Research publications by {site.name} in computer vision, LLM safety, and applied machine learning."
/>

<section class="page-hero">
	<div class="hero-content" use:reveal>
		<span class="eyebrow">Research & Innovation</span>
		<h1>Publications & Research</h1>
		<p>
			Peer-reviewed work in computer vision, large language model safety, and applied machine
			learning. This research informs every workshop curriculum and course I deliver.
		</p>
		<div class="hero-links">
			<a href={site.social.scholar} target="_blank" rel="noopener noreferrer" class="btn-primary">
				Google Scholar Profile →
			</a>
			<a
				href={site.social.github}
				target="_blank"
				rel="noopener noreferrer"
				class="btn-outline-dark"
			>
				GitHub →
			</a>
		</div>
	</div>
</section>

<!-- Research Papers -->
<section class="section section-contrast">
	<div class="inner-wrap">
		<SectionHeader
			eyebrow="Publications"
			title="Peer-Reviewed & Preprint Research"
			body="Three active research threads: medical AI, LLM reliability in enterprise contexts, and predictive analytics for emerging markets."
			onContrast
		/>
		<div class="research-list">
			{#each research as paper, i (paper.slug)}
				<ResearchCard {paper} variant="full" delay={i * 80} />
			{/each}
		</div>
	</div>
</section>

<!-- Open Source Projects -->
<section class="section">
	<SectionHeader
		eyebrow="Open Source"
		title="Open Source Projects"
		body="Tools and datasets developed as part of research work, released for the broader ML community."
	/>
	<div class="oss-grid">
		{#each ossProjects as proj, i (proj.title)}
			<div class="oss-card" use:reveal={{ delay: i * 90 }}>
				<div class="oss-lang">{proj.lang}</div>
				<h3 class="oss-title">{proj.title}</h3>
				<p class="oss-desc">{proj.desc}</p>
				<div class="oss-stats">
					<span>Stars: —</span>
					<span>Status: {proj.status}</span>
				</div>
				<a href={site.social.github} target="_blank" rel="noopener noreferrer" class="oss-link">
					View on GitHub →
				</a>
			</div>
		{/each}
	</div>
</section>

<!-- Collaborations -->
<section class="section section-alt">
	<div class="inner-wrap">
		<SectionHeader
			eyebrow="Partnerships"
			title="Research Collaborations"
			body="Active and past collaborations with academic institutions, healthcare organizations, and industry research partners."
		/>
		<div class="collab-grid">
			{#each collaborations as collab, i (collab.org)}
				<div class="collab-item" use:reveal={{ delay: i * 70 }}>
					<h3 class="collab-org">{collab.org}</h3>
					<p class="collab-focus">{collab.focus}</p>
				</div>
			{/each}
		</div>
		<div class="collab-cta">
			<a href="mailto:{site.email}?subject=Research Collaboration" class="btn-primary">
				Propose a Collaboration →
			</a>
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

	.hero-links {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		align-items: center;
	}

	.btn-outline-dark {
		display: inline-flex;
		align-items: center;
		padding: 0.9rem 1.75rem;
		border-radius: var(--radius-xl);
		border: 2px solid var(--color-border-strong);
		color: var(--color-text-heading);
		font-weight: 700;
		text-decoration: none;
		transition: var(--transition-smooth);
	}

	.btn-outline-dark:hover {
		border-color: var(--color-enterprise-blue);
		color: var(--color-enterprise-blue);
	}

	.inner-wrap {
		max-width: var(--max-width-canvas);
		margin: 0 auto;
	}

	.research-list {
		display: grid;
		gap: 1.5rem;
	}

	.oss-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		gap: 1.5rem;
	}

	.oss-card {
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-xl);
		padding: 1.75rem;
		box-shadow: var(--shadow-sm);
		transition: var(--transition-smooth);
	}

	.oss-card:hover {
		transform: translateY(-4px);
		border-color: var(--color-enterprise-accent);
		box-shadow: var(--shadow-lg);
	}

	.oss-lang {
		display: inline-block;
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		background: var(--tint-blue);
		color: var(--color-enterprise-blue);
		border: 1px solid var(--tint-blue-border);
		padding: 0.2rem 0.6rem;
		border-radius: var(--radius-full);
		margin-bottom: 0.75rem;
	}

	.oss-title {
		font-size: 1.05rem;
		margin-bottom: 0.6rem;
	}

	.oss-desc {
		font-size: 0.9rem;
		line-height: 1.7;
		color: var(--color-text-body);
		margin-bottom: 0.85rem;
	}

	.oss-stats {
		display: flex;
		gap: 1rem;
		font-size: 0.8rem;
		color: var(--color-text-muted);
		margin-bottom: 0.85rem;
	}

	.oss-link {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-enterprise-blue);
		text-decoration: none;
	}

	.oss-link:hover {
		text-decoration: underline;
	}

	.collab-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
		gap: 1.25rem;
	}

	.collab-item {
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		padding: 1.25rem 1.5rem;
		box-shadow: var(--shadow-sm);
	}

	.collab-org {
		font-size: 1rem;
		margin-bottom: 0.4rem;
	}

	.collab-focus {
		font-size: 0.875rem;
		line-height: 1.6;
		color: var(--color-text-body);
		margin: 0;
	}

	.collab-cta {
		margin-top: 2rem;
	}
</style>
