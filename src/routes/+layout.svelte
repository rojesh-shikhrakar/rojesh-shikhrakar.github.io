<script lang="ts">
	import '../app.css';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import favicon from '$lib/assets/favicon.svg';
	import { contactEmail, siteName } from '$lib/site';

	let { children } = $props();
	let primaryNav: HTMLElement;

	type NavLink = { label: string; href: string };
	type NavItem = NavLink | { label: string; children: NavLink[] };

	const nav: NavItem[] = [
		{ label: 'About', href: resolve('/about') },
		{
			label: 'Training',
			children: [
				{ label: 'Training Overview', href: resolve('/ai-trainer-nepal') },
				{ label: 'AI Consulting', href: resolve('/ai-consultant-nepal') },
				{ label: 'Keynotes & Talks', href: resolve('/ai-keynote-speaker-nepal') },
				{ label: 'Corporate Teams', href: resolve('/corporate-ai-training-nepal') },
				{ label: 'Enterprise Capability', href: resolve('/enterprise-ai-training-nepal') },
				{ label: 'Government & NGOs', href: resolve('/ai-training-government-ngos-nepal') },
				{ label: 'Workshop Catalogue', href: resolve('/workshops') }
			]
		},
		{
			label: 'Works',
			children: [
				{ label: 'Case Studies', href: resolve('/case-studies') },
				{ label: 'Past Engagements', href: resolve('/engagements') },
				{ label: 'Products', href: resolve('/products') },
				{ label: 'Research', href: resolve('/research') },
				{ label: 'Books', href: resolve('/books') }
			]
		},
		{ label: 'Writing', href: resolve('/insights') }
	];

	const isActive = (href: string) =>
		href.startsWith('mailto:')
			? false
			: page.url.pathname === href || (href !== '/' && page.url.pathname.startsWith(`${href}/`));
	const groupIsActive = (item: Extract<NavItem, { children: NavLink[] }>) =>
		item.children.some((child) => isActive(child.href));

	const footerLinks = [
		{ label: 'About', href: resolve('/about') },
		{ label: 'Past Engagements', href: resolve('/engagements') },
		{ label: 'AI Training', href: resolve('/ai-trainer-nepal') },
		{ label: 'AI Consulting', href: resolve('/ai-consultant-nepal') },
		{ label: 'Case Studies', href: resolve('/case-studies') },
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
					<details class:active={groupIsActive(item)} class="nav-dropdown">
						<summary>{item.label}<span aria-hidden="true">⌄</span></summary>
						<div>
							{#each item.children as child (child.href)}<a
									class:active={isActive(child.href)}
									aria-current={isActive(child.href) ? 'page' : undefined}
									href={child.href}>{child.label}</a
								>{/each}
						</div>
					</details>
				{:else}
					<a
						class:active={isActive(item.href)}
						aria-current={isActive(item.href) ? 'page' : undefined}
						href={item.href}>{item.label}</a
					>
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
								{#each item.children as child (child.href)}<a
										class:active={isActive(child.href)}
										aria-current={isActive(child.href) ? 'page' : undefined}
										href={child.href}>{child.label}</a
									>{/each}
							</div>
						</details>
					{:else}
						<a
							class:active={isActive(item.href)}
							aria-current={isActive(item.href) ? 'page' : undefined}
							href={item.href}>{item.label}</a
						>
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
