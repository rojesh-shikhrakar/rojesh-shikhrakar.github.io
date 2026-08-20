<script lang="ts">
	import { page } from '$app/state';
	import { siteName, siteUrl } from '$lib/site';

	let {
		title,
		description,
		image,
		type = 'website',
		jsonLd
	}: {
		title: string;
		description: string;
		image?: string;
		type?: 'website' | 'article' | 'profile';
		jsonLd?: unknown;
	} = $props();

	const fullTitle = $derived(title.includes(siteName) ? title : `${title} | ${siteName}`);
	const canonical = $derived(siteUrl + (page.url.pathname.replace(/\/$/, '') || '/'));
	// ponytail: vite gives hashed absolute paths; OG needs a full URL
	const absImage = $derived(image?.startsWith('/') ? siteUrl + image : image);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={type} />
	<meta property="og:url" content={canonical} />
	<meta property="og:site_name" content={siteName} />
	<meta name="twitter:card" content={absImage ? 'summary_large_image' : 'summary'} />
	{#if absImage}<meta property="og:image" content={absImage} />{/if}
	{#if jsonLd}
		{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}<\/script>`}
	{/if}
</svelte:head>
