import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { contentEntries, type MdsvexModule } from '$lib/content';

export const prerender = true;

const workshops = import.meta.glob('/src/content/workshops/*.md');

export const entries = async () => {
	return contentEntries(import.meta.glob('/src/content/workshops/*.md', { eager: true }));
};

export const load: PageLoad = async ({ params }) => {
	const loader = workshops[`/src/content/workshops/${params.slug}.md`];
	if (!loader) throw error(404, 'Workshop not found');
	const module = (await loader()) as MdsvexModule;
	return {
		metadata: module.metadata,
		Content: module.default
	};
};
