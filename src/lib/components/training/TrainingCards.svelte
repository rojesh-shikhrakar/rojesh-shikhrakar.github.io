<script lang="ts">
	import type { TrainingCard } from '$lib/training-pages';

	let { cards }: { cards: TrainingCard[] } = $props();
</script>

<div class="training-cards">
	{#each cards as card (card.title)}
		<article>
			<h3>{card.title}</h3>
			<p>{card.body}</p>
			{#if card.href}
				<a class="text-link" href={card.href}>Explore this program <span>→</span></a>
			{/if}
		</article>
	{/each}
</div>

<style>
	.training-cards {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.25rem;
	}
	article {
		padding: 1.6rem;
		border: 1px solid var(--border);
		border-radius: 1rem;
		background: var(--surface);
	}
	p {
		color: var(--ink-soft);
	}
	@media (max-width: 780px) {
		.training-cards {
			grid-template-columns: 1fr;
		}
	}
</style>
