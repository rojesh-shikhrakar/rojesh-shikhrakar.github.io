<script lang="ts">
	import { untrack } from 'svelte';
	import { theme } from '$lib/theme.svelte';
	import { giscus } from '$lib/data/site';

	// Render the widget only once real giscus values have been pasted into site.ts.
	const configured = !giscus.repoId.startsWith('PASTE_') && giscus.repo !== 'OWNER/REPO';

	const ENDPOINT = 'https://giscus.app';
	const giscusTheme = $derived(theme.current === 'dark' ? 'dark_dimmed' : 'light');

	let mount = $state<HTMLElement>();

	// Attachment: the blessed Svelte 5 hook for integrating a third-party embed.
	// giscus replaces the injected <script> with its own iframe inside `node`.
	function embed(node: HTMLElement) {
		mount = node;

		const loader = document.createElement('script');
		loader.src = `${ENDPOINT}/client.js`;
		loader.async = true;
		loader.crossOrigin = 'anonymous';

		const attrs: Record<string, string> = {
			'data-repo': giscus.repo,
			'data-repo-id': giscus.repoId,
			'data-category': giscus.category,
			'data-category-id': giscus.categoryId,
			'data-mapping': giscus.mapping,
			'data-strict': '0',
			'data-reactions-enabled': giscus.reactionsEnabled,
			'data-emit-metadata': '0',
			'data-input-position': giscus.inputPosition,
			// Read once at mount; live updates are handled by the $effect below.
			'data-theme': untrack(() => giscusTheme),
			'data-lang': giscus.lang,
			'data-loading': 'lazy'
		};
		for (const [key, value] of Object.entries(attrs)) loader.setAttribute(key, value);

		node.appendChild(loader);

		return () => {
			mount = undefined;
			node.replaceChildren();
		};
	}

	// Keep the embedded iframe's theme in sync with the site theme toggle.
	$effect(() => {
		const name = giscusTheme;
		const frame = mount?.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
		frame?.contentWindow?.postMessage({ giscus: { setConfig: { theme: name } } }, ENDPOINT);
	});
</script>

<section id="comments" class="comments">
	<h2 class="comments-heading">Reactions &amp; Comments</h2>
	<p class="comments-sub">
		Like this post or join the discussion — sign in with GitHub. Powered by GitHub Discussions.
	</p>

	{#if configured}
		<div {@attach embed} class="giscus-mount"></div>
	{:else}
		<div class="comments-pending">
			<p>
				💬 Reactions and comments are powered by <strong>GitHub Discussions</strong> and are being set
				up. Check back shortly.
			</p>
		</div>
	{/if}
</section>

<style>
	.comments {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid var(--color-border);
	}

	.comments-heading {
		font-size: 1.35rem;
		margin-bottom: 0.35rem;
		color: var(--color-text-heading);
	}

	.comments-sub {
		font-size: 0.9rem;
		color: var(--color-text-muted);
		margin-bottom: 1.5rem;
	}

	.comments-pending {
		background: var(--color-bg-secondary);
		border: 1px dashed var(--color-border);
		border-radius: var(--radius-lg);
		padding: 1.5rem;
	}

	.comments-pending p {
		font-size: 0.95rem;
		line-height: 1.7;
		color: var(--color-text-body);
		margin: 0;
	}

	.comments-pending strong {
		color: var(--color-text-heading);
	}
</style>
