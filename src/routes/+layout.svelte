<script lang="ts">
	import '../global.css';
	import favicon from '$lib/assets/favicon.ico';
	import { ThemeToggle } from '$lib';
	import { site, navLinks } from '$lib/data/site';

	let { children } = $props();
	let mobileOpen = $state(false);

	const personLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: site.name,
		jobTitle: site.jobTitle,
		description: site.description,
		url: site.url,
		email: `mailto:${site.email}`,
		sameAs: [site.social.github, site.social.linkedin, site.social.scholar]
	};

	// Split tag literals so the source never contains a contiguous `<script>`
	// (which the Svelte parser would treat as a real element).
	const personLdScript =
		`<scr` +
		`ipt type="application/ld+json">${JSON.stringify(personLd).replace(/</g, '\\u003c')}</scr` +
		`ipt>`;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html personLdScript}
</svelte:head>

<header class="site-header-sticky">
	<div class="nav-inner">
		<a href="/" class="brand-link">
			<span class="brand">{site.name}</span>
			<span class="brand-sm">{site.jobTitle}</span>
		</a>

		<div class="nav-cluster">
			<nav class="site-nav desktop-nav" aria-label="Main navigation">
				{#each navLinks as link (link.href)}
					<a href={link.href}>{link.label}</a>
				{/each}
			</nav>

			<ThemeToggle />

			<button
				class="hamburger"
				aria-label="Toggle mobile menu"
				aria-expanded={mobileOpen}
				onclick={() => (mobileOpen = !mobileOpen)}
			>
				<span class="bar" class:open={mobileOpen}></span>
				<span class="bar" class:open={mobileOpen}></span>
				<span class="bar" class:open={mobileOpen}></span>
			</button>
		</div>
	</div>

	{#if mobileOpen}
		<nav class="mobile-nav" aria-label="Mobile navigation">
			{#each navLinks as link (link.href)}
				<a href={link.href} onclick={() => (mobileOpen = false)}>{link.label}</a>
			{/each}
		</nav>
	{/if}
</header>

<main class="app-container">
	{@render children()}
</main>

<footer class="site-footer">
	<div class="footer-inner">
		<p class="footer-copy">
			&copy; {new Date().getFullYear()}
			{site.name}. All rights reserved.
		</p>
		<nav class="footer-nav" aria-label="Social links">
			<a href={site.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
			<a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
			<a href={site.social.scholar} target="_blank" rel="noopener noreferrer">Scholar</a>
		</nav>
	</div>
</footer>

<style>
	.site-header-sticky {
		position: sticky;
		top: 0;
		z-index: 100;
		background: color-mix(in srgb, var(--color-bg-primary) 88%, transparent);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--color-border);
	}

	.nav-inner {
		max-width: var(--max-width-canvas);
		margin: 0 auto;
		padding: 0.85rem 1.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.nav-cluster {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.brand-link {
		text-decoration: none;
		display: flex;
		flex-direction: column;
	}

	.brand {
		font-family: var(--font-display);
		font-size: 1.1rem;
		font-weight: 800;
		color: var(--color-text-heading);
		line-height: 1.2;
	}

	.brand-sm {
		font-size: 0.75rem;
		color: var(--color-text-muted);
		font-weight: 400;
		margin-top: 0.1rem;
	}

	.desktop-nav {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.site-nav a {
		display: inline-block;
		padding: 0.45rem 0.85rem;
		color: var(--color-text-heading);
		text-decoration: none;
		font-weight: 600;
		font-size: 0.9rem;
		border-radius: var(--radius-md);
		transition: var(--transition-smooth);
	}

	.site-nav a:hover {
		color: var(--color-enterprise-blue);
		background: var(--tint-blue);
	}

	.hamburger {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.4rem;
		border-radius: var(--radius-sm);
	}

	.bar {
		display: block;
		width: 22px;
		height: 2px;
		background: var(--color-text-heading);
		border-radius: 2px;
		transition: var(--transition-smooth);
	}

	.mobile-nav {
		display: flex;
		flex-direction: column;
		padding: 0.5rem 1.5rem 1rem;
		border-top: 1px solid var(--color-border);
	}

	.mobile-nav a {
		padding: 0.75rem 0.5rem;
		color: var(--color-text-heading);
		text-decoration: none;
		font-weight: 600;
		font-size: 1rem;
		border-bottom: 1px solid var(--color-border);
	}

	.mobile-nav a:last-child {
		border-bottom: none;
	}

	.app-container {
		max-width: var(--max-width-canvas);
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.site-footer {
		margin-top: 4rem;
		border-top: 1px solid var(--color-border);
		background: var(--color-bg-secondary);
	}

	.footer-inner {
		max-width: var(--max-width-canvas);
		margin: 0 auto;
		padding: 1.75rem 1.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.footer-copy {
		font-size: 0.875rem;
		color: var(--color-text-muted);
		margin: 0;
	}

	.footer-nav {
		display: flex;
		gap: 1.25rem;
	}

	.footer-nav a {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-text-body);
		text-decoration: none;
		transition: var(--transition-smooth);
	}

	.footer-nav a:hover {
		color: var(--color-enterprise-blue);
	}

	@media (max-width: 768px) {
		.desktop-nav {
			display: none;
		}

		.hamburger {
			display: flex;
		}
	}
</style>
