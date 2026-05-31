import type { PageLoad } from './$types';
import { listContent } from '$lib/content';

export const prerender = true;

export const load: PageLoad = () => {
	const modules = import.meta.glob('/src/content/workshops/*.md', { eager: true });
	return { workshops: listContent(modules) };
};
