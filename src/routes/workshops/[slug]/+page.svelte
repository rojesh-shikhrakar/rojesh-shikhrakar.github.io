<script lang="ts">
	import type { PageData } from './$types';
	import { Seo } from '$lib';
	import { site } from '$lib/data/site';

	let { data }: { data: PageData } = $props();

	const courseLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: data.metadata.title,
		description: `${data.metadata.title}. ${data.metadata.duration ?? ''}`.trim(),
		provider: {
			'@type': 'Person',
			name: site.name,
			url: site.url
		}
	});
</script>

<Seo
	title="{data.metadata.title} | Workshops | {site.name}"
	description="Workshop: {data.metadata.title}. {data.metadata
		.duration}. Facilitated by {site.name}."
	jsonLd={courseLd}
/>

<div class="workshop-layout">
	<div class="workshop-nav">
		<a href="/workshops" class="back-link">← Back to Workshops</a>
	</div>

	<div class="workshop-content">
		<article class="workshop-article">
			<header class="workshop-header">
				{#if data.metadata.tag}
					<span class="workshop-tag">{data.metadata.tag}</span>
				{/if}
				<h1 class="workshop-title">{data.metadata.title}</h1>
				<p class="workshop-duration-display">{data.metadata.duration}</p>
				{#if data.metadata.tools && data.metadata.tools.length > 0}
					<div class="tools-list">
						{#each data.metadata.tools as tool (tool)}
							<span class="tool-chip">{tool}</span>
						{/each}
					</div>
				{/if}
			</header>

			<div class="workshop-body prose">
				<data.Content />
			</div>
		</article>

		<aside class="workshop-sidebar">
			<div class="sidebar-card">
				<h3 class="sidebar-heading">Workshop Details</h3>
				<dl class="detail-list">
					<dt>Duration</dt>
					<dd>{data.metadata.duration}</dd>

					{#if data.metadata.maxParticipants}
						<dt>Max Participants</dt>
						<dd>{data.metadata.maxParticipants} people</dd>
					{/if}

					{#if data.metadata.prerequisites}
						<dt>Prerequisites</dt>
						<dd>{data.metadata.prerequisites}</dd>
					{/if}
				</dl>

				{#if data.metadata.tools && data.metadata.tools.length > 0}
					<div class="sidebar-tools">
						<h4 class="sidebar-subheading">Tools Covered</h4>
						<div class="tools-list">
							{#each data.metadata.tools as tool (tool)}
								<span class="tool-chip">{tool}</span>
							{/each}
						</div>
					</div>
				{/if}
			</div>

			{#if data.metadata.signupLink}
				<div class="inquiry-card">
					<h3 class="inquiry-heading">Book This Workshop</h3>
					<p class="inquiry-body">
						Interested in bringing this program to your organization? Let's talk about your goals,
						group size, and timeline.
					</p>
					<a
						href={data.metadata.signupLink}
						target="_blank"
						rel="noopener noreferrer"
						class="btn-primary inquiry-btn"
					>
						Sign Up →
					</a>
					<p class="inquiry-note">Usually responds within 24 hours.</p>
				</div>
			{/if}
		</aside>
	</div>
</div>

<style>
	.workshop-layout {
		max-width: var(--max-width-canvas);
		margin: 0 auto;
		padding: 2rem 0 4rem;
	}

	.workshop-nav {
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

	.workshop-content {
		display: grid;
		grid-template-columns: 1fr 20rem;
		gap: 2.5rem;
		align-items: start;
	}

	.workshop-header {
		margin-bottom: 2rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid var(--color-border);
	}

	.workshop-tag {
		display: inline-block;
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--color-enterprise-accent);
		margin-bottom: 0.75rem;
	}

	.workshop-title {
		font-size: clamp(1.6rem, 3vw, 2.25rem);
		line-height: 1.2;
		margin-bottom: 0.6rem;
	}

	.workshop-duration-display {
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-text-body);
		margin-bottom: 1rem;
	}

	.tools-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.tool-chip {
		font-size: 0.72rem;
		font-weight: 600;
		background: var(--tint-blue);
		color: var(--color-enterprise-blue);
		border: 1px solid var(--tint-blue-border);
		padding: 0.25rem 0.65rem;
		border-radius: var(--radius-full);
	}

	/* Prose styles */
	.workshop-body :global(h1) {
		font-size: 1.75rem;
		margin-top: 0;
		margin-bottom: 1rem;
	}

	.workshop-body :global(h2) {
		font-size: 1.35rem;
		border-bottom: 1px solid var(--color-border);
		padding-bottom: 0.4rem;
		margin-top: 2.5rem;
		margin-bottom: 1rem;
	}

	.workshop-body :global(h3) {
		font-size: 1.1rem;
		margin-top: 1.75rem;
		margin-bottom: 0.6rem;
		color: var(--color-enterprise-blue);
	}

	.workshop-body :global(h4) {
		font-size: 0.975rem;
		font-weight: 700;
		margin-top: 1.25rem;
		margin-bottom: 0.4rem;
	}

	.workshop-body :global(p) {
		font-size: 1rem;
		line-height: 1.85;
		color: var(--color-text-body);
		margin-bottom: 1.1rem;
	}

	.workshop-body :global(ul),
	.workshop-body :global(ol) {
		padding-left: 1.5rem;
		margin-bottom: 1.25rem;
	}

	.workshop-body :global(li) {
		font-size: 1rem;
		line-height: 1.7;
		color: var(--color-text-body);
		margin-bottom: 0.4rem;
	}

	.workshop-body :global(strong) {
		color: var(--color-text-heading);
		font-weight: 700;
	}

	.workshop-body :global(hr) {
		border: none;
		border-top: 1px solid var(--color-border);
		margin: 2rem 0;
	}

	.workshop-body :global(blockquote) {
		border-left: 3px solid var(--color-enterprise-accent);
		padding: 0.75rem 1.25rem;
		margin: 1.5rem 0;
		background: var(--color-bg-primary);
		border-radius: 0 var(--radius-md) var(--radius-md) 0;
	}

	/* Sidebar */
	.workshop-sidebar {
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
		margin: 0 0 1rem;
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

	.sidebar-subheading {
		font-size: 0.85rem;
		font-weight: 700;
		color: var(--color-text-muted);
		text-transform: uppercase;
		letter-spacing: 0.08em;
		margin-bottom: 0.6rem;
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
		.workshop-content {
			grid-template-columns: 1fr;
		}

		.workshop-sidebar {
			position: static;
		}
	}
</style>
