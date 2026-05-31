<script lang="ts">
	import type { PageData } from './$types';
	import { Seo, Giscus } from '$lib';
	import { site } from '$lib/data/site';

	let { data }: { data: PageData } = $props();

	const articleLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: data.metadata.title,
		description: data.metadata.excerpt,
		datePublished: data.metadata.date,
		keywords: (data.metadata.tags ?? []).join(', '),
		author: {
			'@type': 'Person',
			name: data.metadata.author ?? site.name,
			url: site.url
		}
	});
</script>

<Seo
	title="{data.metadata.title} | {site.name}"
	description={data.metadata.excerpt ?? site.description}
	type="article"
	jsonLd={articleLd}
/>

<div class="post-layout">
	<div class="post-nav">
		<a href="/blog" class="back-link">← Back to Blog</a>
	</div>

	<article class="post-article">
		<header class="post-header">
			<div class="post-tags">
				{#each data.metadata.tags ?? [] as tag (tag)}
					<span class="post-tag">{tag}</span>
				{/each}
			</div>
			<h1 class="post-title">{data.metadata.title}</h1>
			<div class="post-meta">
				<span class="post-author">By {data.metadata.author}</span>
				<span class="meta-sep">·</span>
				{#if data.metadata.date}
					<span class="post-date">
						{new Date(data.metadata.date).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}
					</span>
				{/if}
				{#if data.metadata.readTime}
					<span class="meta-sep">·</span>
					<span class="post-read-time">{data.metadata.readTime}</span>
				{/if}
			</div>
			{#if data.metadata.excerpt}
				<p class="post-excerpt">{data.metadata.excerpt}</p>
			{/if}
		</header>

		<div class="post-body prose">
			<data.Content />
		</div>

		<Giscus />

		<footer class="post-footer">
			<a href="/blog" class="back-link">← Back to all posts</a>
		</footer>
	</article>
</div>

<style>
	.post-layout {
		max-width: 48rem;
		margin: 0 auto;
		padding: 2rem 0 4rem;
	}

	.post-nav {
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

	.post-header {
		margin-bottom: 2.5rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid var(--color-border);
	}

	.post-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin-bottom: 1rem;
	}

	.post-tag {
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		background: rgba(37, 99, 235, 0.08);
		color: var(--color-enterprise-blue);
		border: 1px solid rgba(37, 99, 235, 0.15);
		padding: 0.2rem 0.6rem;
		border-radius: var(--radius-full);
	}

	.post-title {
		font-size: clamp(1.75rem, 3.5vw, 2.5rem);
		line-height: 1.15;
		margin-bottom: 1rem;
	}

	.post-meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex-wrap: wrap;
		margin-bottom: 1rem;
	}

	.post-author,
	.post-date,
	.post-read-time {
		font-size: 0.875rem;
		color: var(--color-text-muted);
	}

	.post-author {
		font-weight: 600;
		color: var(--color-text-body);
	}

	.meta-sep {
		color: var(--color-border);
	}

	.post-excerpt {
		font-size: 1.05rem;
		line-height: 1.7;
		color: var(--color-text-body);
		font-style: italic;
		border-left: 3px solid var(--color-enterprise-blue);
		padding-left: 1rem;
		margin-top: 1rem;
	}

	.post-body :global(h1),
	.post-body :global(h2),
	.post-body :global(h3) {
		font-family: var(--font-display);
		color: var(--color-text-heading);
		margin-top: 2rem;
		margin-bottom: 0.75rem;
	}

	.post-body :global(h1) {
		font-size: 1.75rem;
	}

	.post-body :global(h2) {
		font-size: 1.4rem;
		border-bottom: 1px solid var(--color-border);
		padding-bottom: 0.4rem;
	}

	.post-body :global(h3) {
		font-size: 1.1rem;
	}

	.post-body :global(p) {
		font-size: 1rem;
		line-height: 1.85;
		color: var(--color-text-body);
		margin-bottom: 1.25rem;
	}

	.post-body :global(ul),
	.post-body :global(ol) {
		padding-left: 1.5rem;
		margin-bottom: 1.25rem;
	}

	.post-body :global(li) {
		font-size: 1rem;
		line-height: 1.7;
		color: var(--color-text-body);
		margin-bottom: 0.4rem;
	}

	.post-body :global(strong) {
		color: var(--color-text-heading);
		font-weight: 700;
	}

	.post-body :global(em) {
		color: var(--color-text-body);
	}

	.post-body :global(blockquote) {
		border-left: 3px solid var(--color-enterprise-blue);
		padding: 0.75rem 1.25rem;
		margin: 1.5rem 0;
		background: var(--color-bg-primary);
		border-radius: 0 var(--radius-md) var(--radius-md) 0;
	}

	.post-body :global(blockquote p) {
		margin: 0;
		font-style: italic;
	}

	.post-body :global(code) {
		font-family: 'Fira Code', 'Courier New', monospace;
		font-size: 0.875em;
		background: var(--color-bg-primary);
		border: 1px solid var(--color-border);
		padding: 0.15em 0.4em;
		border-radius: var(--radius-sm);
		color: var(--color-enterprise-blue);
	}

	.post-body :global(pre) {
		background: var(--color-bg-terminal);
		border-radius: var(--radius-lg);
		padding: 1.5rem;
		overflow-x: auto;
		margin-bottom: 1.5rem;
	}

	.post-body :global(pre code) {
		background: none;
		border: none;
		padding: 0;
		color: #e2e8f0;
		font-size: 0.875rem;
	}

	.post-body :global(a) {
		color: var(--color-enterprise-blue);
		text-decoration: underline;
		text-decoration-color: rgba(37, 99, 235, 0.3);
	}

	.post-body :global(a:hover) {
		text-decoration-color: var(--color-enterprise-blue);
	}

	.post-body :global(hr) {
		border: none;
		border-top: 1px solid var(--color-border);
		margin: 2.5rem 0;
	}

	.post-footer {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid var(--color-border);
	}
</style>
