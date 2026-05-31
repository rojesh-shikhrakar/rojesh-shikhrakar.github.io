import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { contentEntries, type MdsvexModule } from '$lib/content';

export const prerender = true;

const posts = import.meta.glob('/src/content/blog/*.md');

export const entries = async () => {
	return contentEntries(import.meta.glob('/src/content/blog/*.md', { eager: true }));
};

export const load: PageLoad = async ({ params }) => {
	const loader = posts[`/src/content/blog/${params.slug}.md`];
	if (!loader) throw error(404, 'Post not found');
	const module = (await loader()) as MdsvexModule;
	return {
		metadata: module.metadata,
		Content: module.default
	};
};
