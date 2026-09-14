<script lang="ts">
	import type { BreadcrumbItem } from '$lib/seo/schema';
	let { items }: { items: BreadcrumbItem[] } = $props();
</script>

<nav class="breadcrumbs container" aria-label="Breadcrumb">
	<ol>
		{#each items as item, index (`${index}-${item.path}`)}
			<li>
				{#if index < items.length - 1}<a href={item.path}>{item.name}</a>{:else}<span
						aria-current="page">{item.name}</span
					>{/if}
			</li>
		{/each}
	</ol>
</nav>

<style>
	.breadcrumbs {
		padding-top: 1.25rem;
	}
	ol {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
		margin: 0;
		padding: 0;
		list-style: none;
		color: var(--ink-soft);
		font-size: 0.82rem;
	}
	li:not(:last-child)::after {
		content: '›';
		margin-left: 0.45rem;
		color: var(--bronze);
	}
	a {
		color: inherit;
	}
</style>
