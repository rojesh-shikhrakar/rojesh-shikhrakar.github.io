import { blogCategories, posts } from '$lib/blog';

export const load = () => ({ categories: blogCategories, posts });
