import type { Action } from 'svelte/action';

interface RevealOptions {
	/** Stagger delay in milliseconds, applied as transition-delay. */
	delay?: number;
	/** Fraction of the element that must be visible before revealing. */
	threshold?: number;
}

/**
 * Fade/slide an element into view as it enters the viewport.
 * Respects `prefers-reduced-motion`: when set, the element is shown immediately
 * with no animation (handled via the `.reveal-init` rule in global.css).
 */
export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options) => {
	const reduceMotion =
		typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (reduceMotion) {
		node.classList.add('reveal-init', 'reveal-visible');
		return;
	}

	const { delay = 0, threshold = 0.15 } = options ?? {};
	node.classList.add('reveal-init');
	if (delay) node.style.transitionDelay = `${delay}ms`;

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('reveal-visible');
					observer.unobserve(node);
				}
			}
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
