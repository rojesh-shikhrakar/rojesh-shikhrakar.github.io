<script lang="ts">
	import TrainingMarkdownPage from '$lib/components/TrainingMarkdownPage.svelte';

	let { data } = $props();
</script>

<TrainingMarkdownPage page={data.page} />
