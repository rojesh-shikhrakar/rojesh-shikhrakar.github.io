import { describe, expect, it } from 'vitest';
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from './schema';
import { seoTargets } from './targets';
import { siteUrl } from '$lib/site';

describe('SEO architecture', () => {
	it('assigns one unique primary query to each landing page', () => {
		const targets = Object.values(seoTargets);
		expect(new Set(targets).size).toBe(targets.length);
	});

	it('creates absolute, ordered breadcrumbs', () => {
		const schema = breadcrumbSchema([
			{ name: 'Home', path: '/' },
			{ name: 'Training', path: '/ai-trainer-nepal' }
		]);
		expect(schema.itemListElement).toHaveLength(2);
		expect(schema.itemListElement[1]).toMatchObject({ position: 2, name: 'Training' });
		expect(schema.itemListElement[1].item).toMatch(/^https:\/\//);
	});

	it('builds a valid WebPage graph with a canonical URL', () => {
		const schema = webPageSchema({ path: '/about', name: 'About', description: 'About Rojesh' });
		expect(schema['@context']).toBe('https://schema.org');
		expect(schema['@graph'].find((node) => node['@type'] === 'WebPage')).toMatchObject({
			url: `${siteUrl}/about`
		});
	});
});

describe('training page rich results', () => {
	it('adds FAQ and Service nodes to the WebPage graph', () => {
		const schema = webPageSchema({
			path: '/ai-trainer-nepal',
			name: 'AI Trainer',
			description: 'd',
			extra: [
				serviceSchema({ path: '/ai-trainer-nepal', name: 'AI Trainer', description: 'd' }),
				faqSchema([{ question: 'Q?', answer: 'A.' }])
			]
		});
		const types = schema['@graph'].map((node) => node['@type']);
		expect(types).toEqual(expect.arrayContaining(['Service', 'FAQPage']));
	});
});
