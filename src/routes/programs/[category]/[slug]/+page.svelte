<script lang="ts">
	import { mailto } from '$lib/site';
	import Seo from '$lib/components/Seo.svelte';
	import { marked } from 'marked';

	let { data } = $props();
	let activeTestimonial = $state(0);

	const contentHtml = $derived(
		data.program.content ? marked.parse(data.program.content, { async: false }) : ''
	);
	const signupLink = $derived(data.program.signup?.link?.trim());
	const signupLabel = $derived(data.program.signup?.label ?? 'Sign up for this course');
	const courseContentsLink = $derived(data.program.courseContents?.link?.trim());
	const courseContentsLabel = $derived(
		data.program.courseContents?.label ?? 'View Course Contents'
	);

	function showPreviousTestimonial() {
		const count = data.program.testimonials?.length ?? 0;
		if (count) activeTestimonial = (activeTestimonial - 1 + count) % count;
	}

	function showNextTestimonial() {
		const count = data.program.testimonials?.length ?? 0;
		if (count) activeTestimonial = (activeTestimonial + 1) % count;
	}
</script>

<Seo title={data.program.title} description={data.program.description} />
<main class="program-detail">
	<header class="program-detail-hero container">
		<div>
			<p class="eyebrow">{data.program.tagline ?? 'Strategic Advisory & Training'}</p>
			<h1>{data.program.title}</h1>
			<p class="lead">{data.program.description}</p>
			<div class="button-row">
				{#if signupLink}
					<a class="button" href={signupLink}>{signupLabel}</a>
				{:else}
					<a class="button" href={mailto(data.program.title)}>Request a Proposal</a>
				{/if}
				<a class="button button-secondary" href="#curriculum">View Curriculum</a>
				{#if courseContentsLink}
					<a class="button button-secondary" href={courseContentsLink}>{courseContentsLabel}</a>
				{/if}
			</div>
		</div>
		{#if data.program.image}<img
				src={data.program.image}
				alt="Participants engaged in the program"
				width="600"
				height="600"
			/>{/if}
	</header>
	<section class="program-facts" aria-label="Program information">
		<div class="container">
			<div><span>Duration</span><strong>{data.program.duration}</strong></div>
			<div><span>Location</span><strong>{data.program.location}</strong></div>
			<div><span>Capacity</span><strong>{data.program.capacity ?? 'Tailored cohort'}</strong></div>
			<div><span>Level</span><strong>{data.program.level}</strong></div>
		</div>
	</section>
	<section class="section reading-width program-overview">
		<h2>Bridging Research & Implementation</h2>
		{#if contentHtml}
			<!-- eslint-disable-next-line svelte/no-at-html-tags -- build-time markdown from src/content, not user input -->
			<div class="prose">{@html contentHtml}</div>
		{:else}
			<div class="prose"><data.program.component /></div>
		{/if}
		{#if data.program.audience?.length}<aside>
				<h3>Who should attend?</h3>
				<ul>
					{#each data.program.audience as person (person)}<li><span>✓</span>{person}</li>{/each}
				</ul>
			</aside>{/if}
	</section>
	{#if data.program.modules?.length}<section class="section program-curriculum" id="curriculum">
			<div class="container">
				<div>
					<p class="eyebrow">The Curriculum</p>
					<h2>Core Learning Modules</h2>
				</div>
				<ol>
					{#each data.program.modules as module, index (module.title)}<li>
							<span>0{index + 1}</span>
							<div>
								<h3>{module.title}</h3>
								{#if Array.isArray(module.body)}
									<ul class="module-topics">
										{#each module.body as topic (topic)}
											<li>{topic}</li>
										{/each}
									</ul>
								{:else}
									<p>{module.body}</p>
								{/if}
							</div>
						</li>{/each}
				</ol>
			</div>
		</section>{/if}
	{#if data.program.outcomes?.length}<section class="section program-outcomes container">
			<div class="center-heading">
				<h2>Tangible Outcomes</h2>
				<p class="lead">Assets you will walk away with</p>
			</div>
			<div>
				{#each data.program.outcomes as outcome (outcome.title)}<article>
						<span aria-hidden="true">✓</span>
						<h3>{outcome.title}</h3>
						<p>{outcome.body}</p>
					</article>{/each}
			</div>
		</section>{/if}
	{#if data.program.content && data.program.hasAdditionalDetails}
		<section class="section reading-width program-additional-details">
			<h2>Additional Details</h2>
			<div class="prose"><data.program.component /></div>
		</section>
	{/if}
	{#if data.program.testimonials?.length}
		<section class="program-testimonial" aria-labelledby="testimonials-heading">
			<div class="reading-width">
				<p class="eyebrow" id="testimonials-heading">Participant testimonials</p>
				<div class="testimonial-slide" aria-live="polite">
					<span aria-hidden="true">“</span>
					<blockquote>{data.program.testimonials[activeTestimonial].quote}</blockquote>
					<p>
						— {data.program.testimonials[activeTestimonial]
							.author}{#if data.program.testimonials[activeTestimonial].role}, {data.program
								.testimonials[activeTestimonial].role}{/if}
					</p>
				</div>
				{#if data.program.testimonials.length > 1}
					<div class="testimonial-controls">
						<button
							type="button"
							onclick={showPreviousTestimonial}
							aria-label="Previous testimonial">←</button
						>
						<span>{activeTestimonial + 1} / {data.program.testimonials.length}</span>
						<button type="button" onclick={showNextTestimonial} aria-label="Next testimonial"
							>→</button
						>
					</div>
				{/if}
			</div>
		</section>
	{/if}
	<section class="section container">
		<div class="work-cta">
			<h2>{signupLink ? 'Ready to join the course?' : 'Ready to define your strategy?'}</h2>
			<p>
				{signupLink
					? 'Reserve your place and take the next step in your learning journey.'
					: 'Custom programs are typically scheduled four to six weeks in advance. Start the conversation today.'}
			</p>
			{#if signupLink}
				<a class="button" href={signupLink}>{signupLabel}</a>
			{:else}
				<a class="button" href={mailto(data.program.title)}>Book a Consultation</a>
			{/if}
		</div>
	</section>
</main>
