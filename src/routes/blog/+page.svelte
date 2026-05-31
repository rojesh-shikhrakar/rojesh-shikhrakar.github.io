<script lang="ts">
	import type { PageData } from './$types';
	import { Seo } from '$lib';
	import { site } from '$lib/data/site';
	import { reveal } from '$lib/actions/reveal';
	import { profile } from '$lib/img/images';

	let { data }: { data: PageData } = $props();

	const fmtDate = (d: string) =>
		new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
</script>

<Seo
	title="Blog | {site.name}"
	description="Insights on AI productivity, enterprise LLM deployment, and machine learning from {site.name}."
/>

<section class="blog-hero">
	<div class="hero-content" use:reveal>
		<span class="eyebrow">Writing & Insights</span>
		<h1>The Feed</h1>
		<p>
			Practical, field-tested perspectives on AI deployment, productivity, and the intersection of
			research and practice. Like a post or join the discussion — every article is open for comments
			via GitHub.
		</p>
	</div>
</section>

<section class="section">
	{#if data.posts.length === 0}
		<p class="empty-state">No posts yet. Check back soon.</p>
	{:else}
		<div class="feed">
			{#each data.posts as post, i (post.slug)}
				<article class="feed-item" use:reveal={{ delay: i * 70 }}>
					<!-- Author header -->
					<div class="feed-head">
						<enhanced:img src={profile} alt={post.author ?? site.name} class="avatar" sizes="44px" />
						<div class="byline">
							<span class="author">{post.author ?? site.name}</span>
							<span class="sub">
								{site.jobTitle}
								{#if post.date}
									<span class="dot">·</span>
									<time datetime={post.date}>{fmtDate(post.date)}</time>
								{/if}
							</span>
						</div>
						{#if post.readTime}
							<span class="read-time">{post.readTime}</span>
						{/if}
					</div>

					<!-- Body -->
					<h2 class="feed-title">
						<a href="/blog/{post.slug}">{post.title}</a>
					</h2>
					{#if post.excerpt}
						<p class="feed-excerpt">{post.excerpt}</p>
					{/if}

					{#if (post.tags ?? []).length}
						<div class="feed-tags">
							{#each post.tags ?? [] as tag (tag)}
								<span class="tag">#{tag.replace(/\s+/g, '')}</span>
							{/each}
						</div>
					{/if}

					<!-- Action bar -->
					<div class="feed-actions">
						<a class="action" href="/blog/{post.slug}#comments" aria-label="Like this post">
							<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
								<path
									d="M12 20.3 4.6 12.9a4.6 4.6 0 0 1 6.5-6.5l.9.9.9-.9a4.6 4.6 0 0 1 6.5 6.5Z"
									fill="none"
									stroke="currentColor"
									stroke-width="1.8"
									stroke-linejoin="round"
								/>
							</svg>
							<span>Like</span>
						</a>
						<a class="action" href="/blog/{post.slug}#comments" aria-label="Comment on this post">
							<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
								<path
									d="M21 11.5a8 8 0 0 1-11.5 7.2L4 20l1.3-4.5A8 8 0 1 1 21 11.5Z"
									fill="none"
									stroke="currentColor"
									stroke-width="1.8"
									stroke-linejoin="round"
								/>
							</svg>
							<span>Comment</span>
						</a>
						<a class="action read-more" href="/blog/{post.slug}">Read article →</a>
					</div>
				</article>
			{/each}
		</div>
	{/if}
</section>

<style>
	.blog-hero {
		padding: 4rem 0 2rem;
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

	.blog-hero h1 {
		font-size: clamp(2rem, 4vw, 3rem);
		margin-bottom: 1rem;
	}

	.blog-hero p {
		font-size: 1.05rem;
		line-height: 1.8;
		color: var(--color-text-body);
	}

	/* ---- Feed ---- */
	.feed {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		max-width: 40rem;
		margin: 0 auto;
	}

	.feed-item {
		background: var(--color-bg-secondary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-xl);
		padding: 1.5rem 1.5rem 0.5rem;
		box-shadow: var(--shadow-sm);
		transition: var(--transition-smooth);
	}

	.feed-item:hover {
		border-color: var(--color-border-strong);
		box-shadow: var(--shadow-lg);
	}

	.feed-head {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1rem;
	}

	.feed-head :global(.avatar) {
		width: 44px;
		height: 44px;
		border-radius: var(--radius-full);
		object-fit: cover;
		flex-shrink: 0;
		border: 2px solid var(--color-border);
	}

	.byline {
		display: flex;
		flex-direction: column;
		min-width: 0;
		margin-right: auto;
	}

	.author {
		font-size: 0.95rem;
		font-weight: 700;
		color: var(--color-text-heading);
	}

	.sub {
		font-size: 0.8rem;
		color: var(--color-text-muted);
	}

	.dot {
		margin: 0 0.35rem;
	}

	.read-time {
		font-size: 0.75rem;
		color: var(--color-text-muted);
		padding: 0.2rem 0.6rem;
		background: var(--color-bg-primary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-full);
		white-space: nowrap;
		flex-shrink: 0;
	}

	.feed-title {
		font-size: 1.4rem;
		line-height: 1.3;
		margin-bottom: 0.6rem;
	}

	.feed-title a {
		color: var(--color-text-heading);
		text-decoration: none;
		transition: var(--transition-smooth);
	}

	.feed-title a:hover {
		color: var(--color-enterprise-blue);
	}

	.feed-excerpt {
		font-size: 1rem;
		line-height: 1.7;
		color: var(--color-text-body);
		margin-bottom: 1rem;
	}

	.feed-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.tag {
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--color-enterprise-blue);
	}

	.feed-actions {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		border-top: 1px solid var(--color-border);
		margin: 0 -1.5rem;
		padding: 0.5rem 1rem;
	}

	.action {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-text-muted);
		text-decoration: none;
		padding: 0.5rem 0.75rem;
		border-radius: var(--radius-md);
		transition: var(--transition-smooth);
	}

	.action:hover {
		color: var(--color-enterprise-accent);
		background: var(--color-bg-primary);
	}

	.read-more {
		margin-left: auto;
		color: var(--color-enterprise-blue);
	}

	.read-more:hover {
		color: var(--color-enterprise-accent);
		background: transparent;
	}

	.empty-state {
		color: var(--color-text-muted);
		font-style: italic;
		text-align: center;
	}
</style>
