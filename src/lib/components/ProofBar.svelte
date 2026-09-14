<script lang="ts">
	import { professionalStats } from '$lib/professional';
</script>

<section class="proof" aria-label="Professional evidence">
	<div class="proof-grid container">
		{#each professionalStats as metric (metric.label)}
			<div><strong>{metric.value}</strong><span>{metric.label}</span></div>
		{/each}
		<div>
			<strong>Fusemachines & Kathmandu University</strong><span>Industry and academic roles</span>
		</div>
	</div>
</section>
