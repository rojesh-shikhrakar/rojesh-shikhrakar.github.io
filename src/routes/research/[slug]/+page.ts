import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { contentEntries, type MdsvexModule } from '$lib/content';

export const prerender = true;

const papers = import.meta.glob('/src/content/research/*.md');

export const entries = async () => {
	return contentEntries(import.meta.glob('/src/content/research/*.md', { eager: true }));
};

export const load: PageLoad = async ({ params }) => {
	const loader = papers[`/src/content/research/${params.slug}.md`];
	if (!loader) throw error(404, 'Research paper not found');
	const module = (await loader()) as MdsvexModule;
	return {
		metadata: module.metadata,
		Content: module.default
	};
};
