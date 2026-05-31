<script lang="ts">
	import type { PageData } from './$types';
	import { Seo } from '$lib';
	import { site } from '$lib/data/site';

	let { data }: { data: PageData } = $props();

	const courseLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: data.metadata.title,
		description: data.metadata.businessContext ?? `${data.metadata.title} taught by ${site.name}.`,
		provider: {
			'@type': 'Organization',
			name: data.metadata.institution ?? site.name
		},
		instructor: {
			'@type': 'Person',
			name: site.name,
			url: site.url
		}
	});
</script>

<Seo
	title="{data.metadata.title} | Courses | {site.name}"
	description="Course: {data.metadata.title} ({data.metadata.level}, {data.metadata
		.format}) at {data.metadata.institution}. Taught by {site.name}."
	jsonLd={courseLd}
/>

<div class="course-layout">
	<div class="course-nav">
		<a href="/courses" class="back-link">← Back to Courses</a>
	</div>

	<div class="course-content">
		<article class="course-article">
			<header class="course-header">
				{#if data.metadata.level}
					<span class="course-tag">{data.metadata.level}</span>
				{/if}
				<h1 class="course-title">{data.metadata.title}</h1>
				{#if data.metadata.institution}
					<p class="course-institution">{data.metadata.institution}</p>
				{/if}
				{#if data.metadata.tags && data.metadata.tags.length > 0}
					<div class="chip-list">
						{#each data.metadata.tags as topic (topic)}
							<span class="chip">{topic}</span>
						{/each}
					</div>
				{/if}
			</header>

			<div class="course-body prose">
				<data.Content />
			</div>
		</article>

		<aside class="course-sidebar">
			<div class="sidebar-card">
				<h3 class="sidebar-heading">Course Details</h3>
				<dl class="detail-list">
					{#if data.metadata.institution}
						<dt>Institution</dt>
						<dd>{data.metadata.institution}</dd>
					{/if}
					{#if data.metadata.audience}
						<dt>Audience</dt>
						<dd>{data.metadata.audience}</dd>
					{/if}
					{#if data.metadata.level}
						<dt>Level</dt>
						<dd>{data.metadata.level}</dd>
					{/if}
					{#if data.metadata.format}
						<dt>Format</dt>
						<dd>{data.metadata.format}</dd>
					{/if}
					{#if data.metadata.duration}
						<dt>Duration</dt>
						<dd>{data.metadata.duration}</dd>
					{/if}
				</dl>
			</div>

			<div class="inquiry-card">
				<h3 class="inquiry-heading">Request the Syllabus</h3>
				<p class="inquiry-body">
					For institutions or organizations interested in this course—or a custom version for your
					team—reach out for the full syllabus and scheduling options.
				</p>
				<a
					href="mailto:{site.email}?subject=Syllabus Request: {data.metadata.title}"
					class="btn-primary inquiry-btn"
				>
					Request Syllabus →
				</a>
				<p class="inquiry-note">Usually responds within 24 hours.</p>
			</div>
		</aside>
	</div>
</div>

<style>
	.course-layout {
		max-width: var(--max-width-canvas);
		margin: 0 auto;
		padding: 2rem 0 4rem;
	}

	.course-nav {
		margin-bottom: 2rem;
	}

	.back-link {
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--color-enterprise-blue);
		text-decoration: none;
		transition: var(--transition-smooth);
	}

	.back-link:hover {
		color: var(--color-enterprise-accent);
	}

	.course-content {
		display: grid;
		grid-template-columns: 1fr 20rem;
		gap: 2.5rem;
		align-items: start;
	}

	.course-header {
		margin-bottom: 2rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid var(--color-border);
	}

	.course-tag {
		display: inline-block;
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--color-enterprise-accent);
		margin-bottom: 0.75rem;
	}

	.course-title {
		font-size: clamp(1.6rem, 3vw, 2.25rem);
		line-height: 1.2;
		margin-bottom: 0.6rem;
	}

	.course-institution {
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-text-body);
		margin-bottom: 1rem;
	}

	.chip-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.chip {
		font-size: 0.72rem;
		font-weight: 600;
		background: var(--tint-blue);
		color: var(--color-enterprise-blue);
		border: 1px solid var(--tint-blue-border);
		padding: 0.25rem 0.65rem;
		border-radius: var(--radius-full);
	}

	/* Prose styles */
	.course-body :global(h1) {
		font-size: 1.75rem;
		margin-top: 0;
		margin-bottom: 1rem;
	}

	.course-body :global(h2) {
		font-size: 1.35rem;
		border-bottom: 1px solid var(--color-border);
		padding-bottom: 0.4rem;
		margin-top: 2.5rem;
		margin-bottom: 1rem;
	}

	.course-body :global(h3) {
		font-size: 1.1rem;
		margin-top: 1.75rem;
		margin-bottom: 0.6rem;
		color: var(--color-enterprise-blue);
	}

	.course-body :global(p) {
		font-size: 1rem;
		line-height: 1.85;
		color: var(--color-text-body);
		margin-bottom: 1.1rem;
	}

	.course-body :global(ul),
	.course-body :global(ol) {
		padding-left: 1.5rem;
		margin-bottom: 1.25rem;
	}

	.course-body :global(li) {
		font-size: 1rem;
		line-height: 1.7;
		color: var(--color-text-body);
		margin-bottom: 0.4rem;
	}

	.course-body :global(strong) {
		color: var(--color-text-heading);
		font-weight: 700;
	}

	.course-body :global(hr) {
		border: none;
		border-top: 1px solid var(--color-border);
		margin: 2rem 0;
	}

	.course-body :global(blockquote) {
		border-left: 3px solid var(--color-enterprise-accent);
		padding: 0.75rem 1.25rem;
		margin: 1.5rem 0;
		background: var(--color-bg-primary);
		border-radius: 0 var(--radius-md) var(--radius-md) 0;
	}

	/* Sidebar */
	.course-sidebar {
		position: sticky;
		top: 5rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.sidebar-card,
	.inquiry-card {
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-xl);
		padding: 1.5rem;
	}

	.sidebar-heading {
		font-size: 1rem;
		margin-bottom: 1rem;
		color: var(--color-text-heading);
	}

	.detail-list {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0.6rem 1rem;
		margin: 0;
		font-size: 0.875rem;
	}

	.detail-list dt {
		font-weight: 700;
		color: var(--color-text-heading);
		white-space: nowrap;
	}

	.detail-list dd {
		color: var(--color-text-body);
		margin: 0;
	}

	.inquiry-card {
		background: var(--color-enterprise-slate);
		border-color: #1e293b;
	}

	.inquiry-heading {
		font-size: 1.05rem;
		color: #f1f5f9;
		margin-bottom: 0.75rem;
	}

	.inquiry-body {
		font-size: 0.875rem;
		line-height: 1.7;
		color: #94a3b8;
		margin-bottom: 1.25rem;
	}

	.inquiry-btn {
		width: 100%;
		justify-content: center;
		background: var(--color-enterprise-accent);
		margin-bottom: 0.75rem;
	}

	.inquiry-btn:hover {
		background: var(--color-enterprise-accent-hover);
	}

	.inquiry-note {
		font-size: 0.75rem;
		color: #64748b;
		text-align: center;
		margin: 0;
	}

	@media (max-width: 900px) {
		.course-content {
			grid-template-columns: 1fr;
		}

		.course-sidebar {
			position: static;
		}
	}
</style>
