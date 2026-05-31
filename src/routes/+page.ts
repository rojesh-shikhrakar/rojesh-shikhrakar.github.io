import type { PageLoad } from './$types';
import { listContent } from '$lib/content';

export const prerender = true;

export const load: PageLoad = async () => {
	const modules = import.meta.glob('/src/content/courses/*.md', { eager: true });
	return { courses: listContent(modules) };
};
