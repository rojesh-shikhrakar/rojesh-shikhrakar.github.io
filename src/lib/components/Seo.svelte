<script lang="ts">
	import { page } from '$app/state';
	import { ogImage, siteName, siteUrl } from '$lib/site';

	let {
		title,
		description,
		image = ogImage,
		type = 'website',
		canonical,
		noindex = false,
		jsonLd
	}: {
		title: string;
		description: string;
		image?: string;
		type?: 'website' | 'article' | 'profile';
		canonical?: string;
		noindex?: boolean;
		jsonLd?: unknown;
	} = $props();

	const fullTitle = $derived(title.includes('Rojesh') ? title : `${title} | ${siteName}`);
	const canonicalUrl = $derived(
		canonical ?? siteUrl + (page.url.pathname.replace(/\/$/, '') || '/')
	);
	// ponytail: vite gives hashed absolute paths; OG needs a full URL
	const absImage = $derived.by(() => {
		if (!image) return undefined;
		if (image.startsWith('/')) return siteUrl + image;
		if (image.startsWith(page.url.origin)) return siteUrl + new URL(image).pathname;
		return image;
	});
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonicalUrl} />
	{#if noindex}<meta name="robots" content="noindex, follow" />{/if}
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={type} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:site_name" content={siteName} />
	<meta name="twitter:card" content={absImage ? 'summary_large_image' : 'summary'} />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	{#if absImage}<meta property="og:image" content={absImage} />{/if}
	{#if absImage}<meta name="twitter:image" content={absImage} />{/if}
	{#if jsonLd}
		<!-- eslint-disable-next-line svelte/no-at-html-tags, no-useless-escape -->
		{@html `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}<\/script>`}
	{/if}
</svelte:head>
