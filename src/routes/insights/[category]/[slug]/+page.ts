import { error } from '@sveltejs/kit';
import { findPost, posts } from '$lib/blog';

export const entries = () => posts.map(({ category, slug }) => ({ category, slug }));

export const load = ({ params }) => {
	const post = findPost(params.category, params.slug);
	if (!post) error(404, 'Article not found');
	return { post, related: posts.filter((item) => item.slug !== post.slug).slice(0, 3) };
};
