<script lang="ts">
	import { theme } from '$lib/theme.svelte';

	const isDark = $derived(theme.current === 'dark');
</script>

<button
	type="button"
	class="theme-toggle"
	onclick={() => theme.toggle()}
	aria-label="Switch to {isDark ? 'light' : 'dark'} theme"
	aria-pressed={isDark}
	title="Toggle theme"
>
	{#if isDark}
		<!-- Sun -->
		<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
			<circle cx="12" cy="12" r="4.2" fill="currentColor" />
			<g stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
				<line x1="12" y1="2.5" x2="12" y2="5" />
				<line x1="12" y1="19" x2="12" y2="21.5" />
				<line x1="2.5" y1="12" x2="5" y2="12" />
				<line x1="19" y1="12" x2="21.5" y2="12" />
				<line x1="5.2" y1="5.2" x2="6.9" y2="6.9" />
				<line x1="17.1" y1="17.1" x2="18.8" y2="18.8" />
				<line x1="5.2" y1="18.8" x2="6.9" y2="17.1" />
				<line x1="17.1" y1="6.9" x2="18.8" y2="5.2" />
			</g>
		</svg>
	{:else}
		<!-- Moon -->
		<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
			<path
				d="M20 14.5A8 8 0 0 1 9.5 4a0.5 0.5 0 0 0-.7-.6A9 9 0 1 0 20.6 15.2a.5.5 0 0 0-.6-.7Z"
				fill="currentColor"
			/>
		</svg>
	{/if}
</button>

<style>
	.theme-toggle {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.25rem;
		height: 2.25rem;
		border-radius: var(--radius-full);
		border: 1px solid var(--color-border);
		background: var(--color-bg-secondary);
		color: var(--color-text-heading);
		cursor: pointer;
		transition: var(--transition-smooth);
	}

	.theme-toggle:hover {
		color: var(--color-enterprise-accent);
		border-color: var(--color-enterprise-accent);
		transform: translateY(-1px);
	}
</style>
