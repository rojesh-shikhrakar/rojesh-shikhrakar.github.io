<script lang="ts">
	import '../app.css';
	import { resolve } from '$app/paths';
	import favicon from '$lib/assets/favicon.svg';
	import { contactEmail, siteName } from '$lib/site';

	let { children } = $props();
	let primaryNav: HTMLElement;

	type NavLink = { label: string; href: string };
	type NavItem = NavLink | { label: string; children: NavLink[] };

	const nav: NavItem[] = [
		{ label: 'About Me', href: resolve('/about') },
		{
			label: 'Programs & Resources',
			children: [
				{ label: 'Courses', href: resolve('/programs') + '#courses' },
				{ label: 'Seminars', href: resolve('/programs') + '#seminars' },
				{ label: 'Workshops', href: resolve('/programs') + '#workshops' },
				{ label: 'Resources', href: resolve('/programs') + '#resources' }
			]
		},
		{
			label: 'Works',
			children: [
				{ label: 'Past Engagements', href: resolve('/engagements') },
				{ label: 'Products', href: resolve('/products') },
				{ label: 'Research', href: resolve('/research') },
				{ label: 'Books', href: resolve('/books') }
			]
		},
		{ label: 'Insights', href: resolve('/insights') }
	];

	const footerLinks = [
		{ label: 'About', href: resolve('/about') },
		{ label: 'Past Engagements', href: resolve('/engagements') },
		{ label: 'Selected Works', href: resolve('/') + '#impact' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/rojeshshikhrakar' }
	];

	function closeNavMenus() {
		primaryNav.querySelectorAll('details[open]').forEach((menu) => menu.removeAttribute('open'));
	}

	function handleWindowClick(event: MouseEvent) {
		if (!(event.target instanceof Node)) return;

		if (
			!primaryNav.contains(event.target) ||
			(event.target instanceof Element && event.target.closest('a'))
		) {
			closeNavMenus();
		}
	}
</script>

<svelte:window onclick={handleWindowClick} />

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,400;6..72,500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<a class="skip-link" href="#page-content">Skip to content</a>
<header class="site-header">
	<nav bind:this={primaryNav} class="nav container" aria-label="Primary navigation">
		<a class="wordmark" href={resolve('/')}>{siteName}</a>
		<div class="desktop-nav">
			{#each nav as item (item.label)}
				{#if 'children' in item}
					<details class="nav-dropdown">
						<summary>{item.label}<span aria-hidden="true">⌄</span></summary>
						<div>
							{#each item.children as child (child.href)}<a href={child.href}>{child.label}</a
								>{/each}
						</div>
					</details>
				{:else}
					<a href={item.href}>{item.label}</a>
				{/if}
			{/each}
			<a class="button button-small" href="mailto:{contactEmail}">Connect Now</a>
		</div>
		<details class="mobile-nav">
			<summary aria-label="Open navigation"><span></span><span></span><span></span></summary>
			<div class="mobile-nav-panel">
				{#each nav as item (item.label)}
					{#if 'children' in item}
						<details>
							<summary>{item.label}</summary>
							<div>
								{#each item.children as child (child.href)}<a href={child.href}>{child.label}</a
									>{/each}
							</div>
						</details>
					{:else}
						<a href={item.href}>{item.label}</a>
					{/if}
				{/each}
				<a href="mailto:{contactEmail}">Connect Now</a>
			</div>
		</details>
	</nav>
</header>

<div id="page-content" tabindex="-1">{@render children()}</div>

<footer class="site-footer">
	<div class="footer-inner container">
		<div>
			<a class="footer-name" href={resolve('/')}>{siteName}</a>
			<p>© 2026 {siteName}</p>
		</div>
		<nav aria-label="Footer navigation">
			{#each footerLinks as link (link.href)}<a
					href={link.href}
					rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>{link.label}</a
				>{/each}
		</nav>
	</div>
</footer>
