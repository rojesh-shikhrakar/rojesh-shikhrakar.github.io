<script lang="ts">
	import { page } from '$app/state';
	import { site } from '$lib/data/site';

	interface Props {
		title?: string;
		description?: string;
		/** Absolute or root-relative image path for OG/Twitter cards. */
		image?: string;
		/** OG type — 'website' for pages, 'article' for blog posts. */
		type?: 'website' | 'article';
		/** Optional JSON-LD structured data object(s). */
		jsonLd?: Record<string, unknown> | Record<string, unknown>[];
	}

	let {
		title = site.title,
		description = site.description,
		image = site.ogImage,
		type = 'website',
		jsonLd
	}: Props = $props();

	const canonical = $derived(`${site.url}${page.url.pathname}`);
	const absoluteImage = $derived(image.startsWith('http') ? image : `${site.url}${image}`);

	// Serialize JSON-LD for safe inline injection. The payload is trusted
	// (our own site config + content frontmatter), and `<` is escaped so a
	// stray closing tag can never break out. The tag name is split (scr + ipt)
	// so the literal element-name substring never appears in source — otherwise
	// the Svelte parser treats it as a real (duplicate) script element.
	const ldScripts = $derived(
		(jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []).map((ld) => {
			const json = JSON.stringify(ld).replace(/</g, '\\u003c');
			return `<scr` + `ipt type="application/ld+json">${json}</scr` + `ipt>`;
		})
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<!-- Open Graph -->
	<meta property="og:type" content={type} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={absoluteImage} />
	<meta property="og:site_name" content={site.name} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={absoluteImage} />

	{#each ldScripts as ld (ld)}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html ld}
	{/each}
</svelte:head>
