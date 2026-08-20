<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';

	const status = $derived(page.status);
	const message = $derived(page.error?.message ?? 'Something went wrong.');
</script>

<Seo title="Page not found" description="The page you were looking for could not be found." />

<main class="work-page">
	<header class="work-hero container">
		<p class="eyebrow">Error {status}</p>
		<h1>{status === 404 ? 'Page not found' : 'Something went wrong'}</h1>
		<p class="lead">{message}</p>
		<div class="button-row">
			<a class="button" href={resolve('/')}>Back to home</a>
			<a class="button button-secondary" href={resolve('/insights')}>Browse insights</a>
		</div>
	</header>
</main>
