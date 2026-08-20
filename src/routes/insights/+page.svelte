<script lang="ts">
	import { untrack } from 'svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { formatPostDate } from '$lib/blog';
	let { data } = $props();
	let activeCategory = $state<(typeof data.categories)[number]['slug']>(
		untrack(() => data.categories[0].slug)
	);
	let visiblePosts = $derived(data.posts.filter((post) => post.category === activeCategory));
	let activeLabel = $derived(
		data.categories.find((category) => category.slug === activeCategory)?.label
	);
</script>

<Seo
	title="Insights & Perspectives"
	description="Field-tested perspectives on executive strategy, artificial intelligence, software architecture, ethics, and entrepreneurship."
/>

<main class="insights-page">
	<header class="insights-hero container">
		<p class="eyebrow">Editorial archive</p>
		<h1>Insights & Perspectives</h1>
		<p class="lead">
			Field-tested perspectives at the intersection of executive strategy, artificial intelligence,
			and software architecture. An editorial archive of professional thought leadership.
		</p>
	</header>

	<nav class="category-tabs container" aria-label="Insight categories">
		{#each data.categories as category (category.slug)}
			<button
				type="button"
				class:active={category.slug === activeCategory}
				aria-pressed={category.slug === activeCategory}
				onclick={() => (activeCategory = category.slug)}>{category.label}</button
			>
		{/each}
	</nav>

	<section class="insights-list container" aria-labelledby="category-heading">
		<div class="insights-heading">
			<h2 id="category-heading">{activeLabel}</h2>
			<span>{visiblePosts.length} {visiblePosts.length === 1 ? 'article' : 'articles'}</span>
		</div>
		{#if visiblePosts.length}
			<div class="post-stack">
				{#each visiblePosts as post, index (post.href)}
					<article class:featured={index === 0} class="insight-card">
						<a class="insight-image" href={post.href} aria-label={`Read ${post.title}`}>
							{#if post.image}<img
									src={post.image}
									alt=""
									width="480"
									height="320"
									loading={index === 0 ? 'eager' : 'lazy'}
								/>{:else}<span>{post.tag}</span>{/if}
						</a>
						<div class="insight-copy">
							<div class="post-meta">
								<span>{post.tag}</span><time datetime={post.date}>{formatPostDate(post.date)}</time>
							</div>
							<h3><a href={post.href}>{post.title}</a></h3>
							<p>{post.description}</p>
							<a class="text-link" href={post.href}>Read article <span>→</span></a>
						</div>
					</article>
				{/each}
			</div>
		{:else}
			<div class="empty-insights"><p>Articles in this category are coming soon.</p></div>
		{/if}
	</section>
</main>
