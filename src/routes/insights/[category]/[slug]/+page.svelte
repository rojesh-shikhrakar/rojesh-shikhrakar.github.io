<script lang="ts">
	import { mailto } from '$lib/site';
	import Seo from '$lib/components/Seo.svelte';
	import { resolve } from '$app/paths';
	import portrait from '$lib/assets/rojesh-portrait.webp';
	import { formatPostDate } from '$lib/blog';
	let { data } = $props();
</script>

<Seo title={data.post.title} description={data.post.description} />

<main class="article-page">
	<article class="article-shell container">
		<header class="article-header">
			<div class="post-meta">
				<span>{data.post.tag}</span><time datetime={data.post.date}
					>{formatPostDate(data.post.date)}</time
				>
			</div>
			<h1>{data.post.title}</h1>
			<p class="article-deck">{data.post.description}</p>
			<div class="byline">
				<img src={portrait} alt="" width="48" height="48" />
				<div>
					<strong>{data.post.author ?? 'Rojesh Man Shikhrakar'}</strong><span
						>{data.post.role ?? 'AI Engineer, Educator & Strategist'}</span
					>
				</div>
			</div>
		</header>
		<div class="article-grid">
			<div class="prose"><data.post.component /></div>
			<aside class="article-aside" aria-label="Article summary">
				{#if data.post.insights?.length}<div class="key-insights">
						<p class="aside-title">Key Insights</p>
						{#each data.post.insights as insight, index (insight.title)}<div>
								<span>0{index + 1}</span><strong>{insight.title}</strong>
								<p>{insight.body}</p>
							</div>{/each}
					</div>{/if}
				<div class="aside-cta">
					<h2>Join the Dialogue</h2>
					<p>Weekly reflections on AI strategy, engineering, and human-machine interaction.</p>
					<a href={mailto('Editorial Digest')}>Subscribe now →</a>
				</div>
			</aside>
		</div>
	</article>

	{#if data.related.length}<section class="related container">
			<div class="related-heading">
				<h2>Related Reading</h2>
				<a href={resolve('/insights')}>View all posts →</a>
			</div>
			<div class="related-grid">
				{#each data.related as post (post.href)}<article>
						<p class="eyebrow">{post.tag}</p>
						<h3><a href={post.href}>{post.title}</a></h3>
						<p>{post.description}</p>
					</article>{/each}
			</div>
		</section>{/if}
	<section class="article-newsletter">
		<div class="reading-width">
			<p class="eyebrow">Intelligence delivered</p>
			<h2>The Editorial Digest</h2>
			<p class="lead">
				Deep dives into AI engineering, strategy, and ethical frameworks. No noise, just substantive
				technical and philosophical rigor.
			</p>
			<a class="button" href={mailto('Editorial Digest')}>Join the digest</a>
		</div>
	</section>
</main>
