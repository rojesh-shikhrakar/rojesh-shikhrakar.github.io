<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	const tools = [
		{
			name: 'ODFIO.jl',
			type: 'Julia Package',
			description:
				'A high-performance Julia library for reading and writing Orientation Data Format files, designed for large crystallographic datasets with memory efficiency and strict type safety.',
			tech: ['Julia', 'Materials Science']
		},
		{
			name: 'Pluto2Jupyter.jl',
			type: 'Developer Utility',
			description:
				'Bi-directional conversion between reactive Pluto.jl notebooks and standard Jupyter formats with metadata and execution-state preservation.',
			tech: ['Julia', 'Jupyter']
		},
		{
			name: 'mdbook-jupyter',
			type: 'Documentation Tool',
			description:
				'A Rust-powered mdBook backend that executes Jupyter code blocks and produces statically rendered technical books with zero runtime overhead.',
			tech: ['Rust', 'Documentation'],
			dark: true
		},
		{
			name: 'GoogleNepaliCalendar',
			type: 'Calendar Integration',
			description:
				'A Python project supporting reliable Nepali calendar integration with Google Calendar.',
			tech: ['Python', 'Google APIs']
		}
	];
	const stack = [
		[
			'Core languages',
			'Primary languages for high-performance computing and systems architecture.',
			['Julia', 'Python', 'Rust', 'JavaScript']
		],
		[
			'Infrastructure',
			'Deployment patterns and interactive research environments.',
			['Jupyter', 'Docker', 'AWS', 'Google Cloud']
		],
		[
			'Domains',
			'Advanced computational and intelligent-system applications.',
			['Machine Learning', 'Computer Vision', 'NLP', 'Data Engineering']
		]
	];
</script>

<Seo
	title="Products & Tools"
	description="Open-source technical tools for Julia, Jupyter, documentation, and research workflows."
/>
<main class="work-page">
	<header class="work-hero container">
		<p class="eyebrow">Products & engineering</p>
		<h1>Technical Tools & <em>Open Source.</em></h1>
		<p class="lead">
			A collection of specialized tools developed for the Julia ecosystem and technical
			documentation workflows, emphasizing reproducibility and research efficiency.
		</p>
	</header>
	<section class="tool-grid container">
		{#each tools as tool, index (tool.name)}<article
				class:dark={tool.dark}
				class:wide={index === 0 || index === 2}
				class="tool-card"
			>
				<div class="tool-card-top">
					<span>{tool.type}</span><span aria-hidden="true">0{index + 1}</span>
				</div>
				<h2>{tool.name}</h2>
				<p>{tool.description}</p>
				<div class="tags">
					{#each tool.tech as item (item)}<span>{item}</span>{/each}
				</div>
				<a href="https://github.com/rojesh-shikhrakar" rel="noreferrer"
					>View source <span>↗</span></a
				>
			</article>{/each}
	</section>
	<section class="section stack-section">
		<div class="container">
			<div class="stack-heading">
				<div>
					<p class="eyebrow">Technical practice</p>
					<h2>The Expert Stack</h2>
				</div>
				<p>Engineering excellence through specialized, performant toolsets.</p>
			</div>
			<div class="stack-grid">
				{#each stack as group (group[0])}<article>
						<h3>{group[0]}</h3>
						<p>{group[1]}</p>
						<ul>
							{#each group[2] as item (item)}<li>{item}</li>{/each}
						</ul>
					</article>{/each}
			</div>
		</div>
	</section>
	<section class="section container">
		<div class="work-cta">
			<h2>Explore the code, research, and engineering foundations behind the teaching.</h2>
			<a class="button" href="https://github.com/rojesh-shikhrakar" rel="noreferrer">Visit GitHub</a
			>
		</div>
	</section>
</main>
