<script lang="ts">
	import type { PastEngagement } from '$lib/engagements';

	let {
		engagement,
		dialog = $bindable()
	}: {
		engagement: PastEngagement | null;
		dialog?: HTMLDialogElement;
	} = $props();

	const hasDetailedEvidence = $derived(
		engagement &&
			(engagement.challenge ||
				engagement.objectives?.length ||
				engagement.curriculum?.length ||
				engagement.methodology?.length ||
				engagement.outcomes?.length ||
				engagement.testimonial ||
				engagement.externalReferences?.length)
	);
	const sourceUrl = $derived(engagement?.href ?? engagement?.link);
	const youtubeEmbedUrl = $derived(sourceUrl ? getYouTubeEmbedUrl(sourceUrl) : null);

	function formatEngagementDate(date: string, year: number) {
		return date.includes(String(year)) ? date : `${date}, ${year}`;
	}

	function getYouTubeEmbedUrl(url: string) {
		try {
			const parsedUrl = new URL(url);
			let videoId: string | null = null;

			if (parsedUrl.hostname === 'youtu.be') {
				videoId = parsedUrl.pathname.split('/').filter(Boolean)[0] ?? null;
			} else if (
				parsedUrl.hostname === 'youtube.com' ||
				parsedUrl.hostname.endsWith('.youtube.com')
			) {
				videoId =
					parsedUrl.searchParams.get('v') ??
					parsedUrl.pathname.match(/^\/(?:embed|shorts)\/([^/]+)/)?.[1] ??
					null;
			}

			return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : null;
		} catch {
			return null;
		}
	}

	function dismissOnBackdrop(event: MouseEvent) {
		if (event.target === dialog) dialog?.close();
	}
</script>

<dialog
	bind:this={dialog}
	class="engagement-dialog"
	aria-labelledby="dialog-title"
	onclick={dismissOnBackdrop}
>
	{#if engagement}
		<article class="dialog-panel">
			<header>
				<div>
					<p class="eyebrow">{engagement.kind} · {engagement.year}</p>
					<h2 id="dialog-title">{engagement.title}</h2>
				</div>
				<form method="dialog">
					<button class="close-button" aria-label="Close workshop details">×</button>
				</form>
			</header>

			{#if engagement.image}
				<img src={engagement.image} alt="{engagement.title} engagement" width="760" height="430" />
			{/if}

			{#if youtubeEmbedUrl}
				<div class="video-embed">
					<iframe
						src={youtubeEmbedUrl}
						title={`Video source for ${engagement.title}`}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</div>
			{/if}

			<div class="dialog-content">
				<dl class="facts">
					{#if engagement.org}<div>
							<dt>Organization</dt>
							<dd>{engagement.org}</dd>
						</div>{/if}
					{#if engagement.industry}<div>
							<dt>Industry</dt>
							<dd>{engagement.industry}</dd>
						</div>{/if}
					{#if engagement.date}<div>
							<dt>Date</dt>
							<dd>{formatEngagementDate(engagement.date, engagement.year)}</dd>
						</div>{/if}
					{#if engagement.location}<div>
							<dt>Location</dt>
							<dd>{engagement.location}</dd>
						</div>{/if}
					{#if engagement.audience}<div>
							<dt>Audience</dt>
							<dd>{engagement.audience}</dd>
						</div>{/if}
					{#if engagement.participants}<div>
							<dt>Participants</dt>
							<dd>{engagement.participants}</dd>
						</div>{/if}
					{#if engagement.duration}<div>
							<dt>Duration</dt>
							<dd>{engagement.duration}</dd>
						</div>{/if}
				</dl>

				{#if engagement.challenge}<section>
						<h3>Context and challenge</h3>
						<p>{engagement.challenge}</p>
					</section>{/if}
				{#if engagement.objectives?.length}<section>
						<h3>Training objectives</h3>
						<ul>
							{#each engagement.objectives as item (item)}<li>{item}</li>{/each}
						</ul>
					</section>{/if}
				{#if engagement.curriculum?.length}<section>
						<h3>Curriculum</h3>
						<ul>
							{#each engagement.curriculum as item (item)}<li>{item}</li>{/each}
						</ul>
					</section>{/if}
				{#if engagement.methodology?.length}<section>
						<h3>Delivery approach</h3>
						<ul>
							{#each engagement.methodology as item (item)}<li>{item}</li>{/each}
						</ul>
					</section>{/if}
				{#if engagement.outcomes?.length}<section>
						<h3>Documented outcomes</h3>
						<ul>
							{#each engagement.outcomes as item (item)}<li>{item}</li>{/each}
						</ul>
					</section>{/if}
				{#if engagement.testimonial?.approved}<figure class="testimonial">
						<blockquote>“{engagement.testimonial.quote}”</blockquote>
						<figcaption>
							{engagement.testimonial.name}{engagement.testimonial.role
								? ` · ${engagement.testimonial.role}`
								: ''}
						</figcaption>
					</figure>{/if}
				{#if engagement.externalReferences?.length}<section>
						<h3>External evidence</h3>
						<ul>
							{#each engagement.externalReferences as reference (reference.url)}<li>
									<a href={reference.url} target="_blank" rel="noreferrer"
										>{reference.label} <span aria-hidden="true">↗</span></a
									>
								</li>{/each}
						</ul>
					</section>{/if}

				{#if sourceUrl}<section class="source-section">
						<h3>Source</h3>
						<a href={sourceUrl} target="_blank" rel="noreferrer">
							{sourceUrl} <span aria-hidden="true">↗</span>
						</a>
					</section>{/if}

				{#if !hasDetailedEvidence && engagement.note}<section>
						<h3>Engagement note</h3>
						<p>{Array.isArray(engagement.note) ? engagement.note.join(' · ') : engagement.note}</p>
					</section>{/if}
			</div>
		</article>
	{/if}
</dialog>

<style>
	.engagement-dialog {
		position: fixed;
		inset: 0;
		width: min(50rem, calc(100% - 2rem));
		max-height: min(52rem, calc(100dvh - 2rem));
		margin: auto;
		padding: 0;
		border: 0;
		border-radius: 1.25rem;
		background: var(--surface);
		color: var(--ink-deep);
		box-shadow: 0 24px 80px rgba(15, 31, 29, 0.3);
	}
	.engagement-dialog::backdrop {
		background: rgba(15, 31, 29, 0.72);
		backdrop-filter: blur(5px);
	}
	.dialog-panel {
		overflow: auto;
		max-height: inherit;
	}
	header {
		position: sticky;
		z-index: 2;
		top: 0;
		display: flex;
		justify-content: space-between;
		gap: 2rem;
		align-items: start;
		padding: 1.5rem;
		border-bottom: 1px solid var(--border);
		background: color-mix(in srgb, var(--surface) 94%, transparent);
		backdrop-filter: blur(12px);
	}
	header > div {
		min-width: 0;
		flex: 1;
	}
	header h2 {
		width: 100%;
		max-width: none;
		margin: 0.25rem 0 0;
		font-size: clamp(1.5rem, 4vw, 2.35rem);
	}
	.close-button {
		width: 2.75rem;
		height: 2.75rem;
		flex: 0 0 auto;
		border: 1px solid var(--border);
		border-radius: 50%;
		background: transparent;
		color: var(--ink-deep);
		cursor: pointer;
		font: inherit;
		font-size: 1.6rem;
		line-height: 1;
	}
	.close-button:hover {
		background: #f2ede6;
	}
	.close-button:focus-visible {
		outline: 3px solid var(--bronze);
		outline-offset: 2px;
	}
	.dialog-panel > img {
		width: 100%;
		max-height: 24rem;
		object-fit: cover;
	}
	.video-embed {
		aspect-ratio: 16 / 9;
		background: #000;
	}
	.video-embed iframe {
		display: block;
		width: 100%;
		height: 100%;
		border: 0;
	}
	.dialog-content {
		padding: clamp(1.25rem, 4vw, 2.25rem);
	}
	.facts {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0;
		margin: 0 0 2rem;
		border: 1px solid var(--border);
		border-radius: 0.9rem;
		overflow: hidden;
	}
	.facts div {
		padding: 1rem;
		border-bottom: 1px solid var(--border);
	}
	.facts div:nth-child(odd) {
		border-right: 1px solid var(--border);
	}
	dt {
		margin-bottom: 0.25rem;
		color: var(--teal);
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}
	dd {
		margin: 0;
		font-weight: 600;
		overflow-wrap: anywhere;
	}
	section {
		margin-top: 2rem;
	}
	section h3 {
		margin-bottom: 0.65rem;
	}
	section p,
	section ul {
		color: var(--ink-soft);
	}
	section ul {
		padding-left: 1.25rem;
	}
	section li + li {
		margin-top: 0.45rem;
	}
	.source-section a {
		display: inline-flex;
		gap: 0.35rem;
		max-width: 100%;
		color: var(--teal);
		font-weight: 700;
		overflow-wrap: anywhere;
	}
	.testimonial {
		margin: 2rem 0 0;
		padding: 1.5rem;
		border-left: 4px solid var(--bronze);
		background: #f2ede6;
	}
	.testimonial blockquote {
		margin: 0 0 0.75rem;
		font-family: var(--serif);
		font-size: 1.25rem;
	}
	.testimonial figcaption {
		color: var(--ink-soft);
		font-size: 0.85rem;
		font-weight: 700;
	}
	@media (max-width: 560px) {
		.engagement-dialog {
			width: calc(100% - 1rem);
			max-height: calc(100dvh - 1rem);
		}
		header {
			padding: 1.1rem;
		}
		.dialog-content {
			padding: 1rem;
		}
		.facts {
			grid-template-columns: 1fr;
		}
		.facts div:nth-child(odd) {
			border-right: 0;
		}
	}
	@media (prefers-reduced-motion: no-preference) {
		.engagement-dialog[open] {
			animation: enter 180ms ease-out;
		}
		@keyframes enter {
			from {
				opacity: 0;
				transform: translateY(12px) scale(0.985);
			}
		}
	}
</style>
