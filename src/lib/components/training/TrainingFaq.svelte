<script lang="ts">
	let {
		title,
		faqs
	}: {
		title: string;
		faqs: Array<{ question: string; answer: string }>;
	} = $props();
</script>

<section class="section tint">
	<div class="reading-width">
		<p class="eyebrow">Frequently asked questions</p>
		<h2>{title}</h2>
		<div class="faq">
			{#each faqs as faq (faq.question)}
				<details>
					<summary>{faq.question}</summary>
					<p>{faq.answer}</p>
				</details>
			{/each}
		</div>
	</div>
</section>

<style>
	.tint {
		border-block: 1px solid var(--border);
		background: var(--training-tint, #f2ede6);
	}
	details {
		padding: 1.2rem 0;
		border-bottom: 1px solid var(--border);
	}
	summary {
		cursor: pointer;
		font-weight: 700;
	}
	p {
		color: var(--ink-soft);
	}
</style>
