import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { contentEntries, type MdsvexModule } from '$lib/content';

export const prerender = true;

const courses = import.meta.glob('/src/content/courses/*.md');

export const entries = async () => {
	return contentEntries(import.meta.glob('/src/content/courses/*.md', { eager: true }));
};

export const load: PageLoad = async ({ params }) => {
	const loader = courses[`/src/content/courses/${params.slug}.md`];
	if (!loader) throw error(404, 'Course not found');
	const module = (await loader()) as MdsvexModule;
	return {
		metadata: module.metadata,
		Content: module.default
	};
};
