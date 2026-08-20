import type { Component } from 'svelte';

export const blogCategories = [
	{ slug: 'leadership', label: 'Leadership' },
	{ slug: 'philosophy-ethics', label: 'Philosophy & Ethics' },
	{ slug: 'ai-technology', label: 'AI & Technology' },
	{ slug: 'software-development', label: 'Software Development' },
	{ slug: 'entrepreneurship', label: 'Entrepreneurship' }
] as const;

export type BlogMetadata = {
	title: string;
	description: string;
	date: string;
	category: string;
	tag: string;
	author?: string;
	role?: string;
	image?: string;
	featured?: boolean;
	insights?: { title: string; body: string }[];
};

type MarkdownModule = { default: Component; metadata: BlogMetadata };

const modules = import.meta.glob('/src/content/blog/**/*.md', { eager: true }) as Record<
	string,
	MarkdownModule
>;

export type BlogPost = BlogMetadata & {
	slug: string;
	href: string;
	component: Component;
};

export const posts: BlogPost[] = Object.entries(modules)
	.map(([path, module]) => {
		const [, category, filename] = path.match(/\/blog\/([^/]+)\/([^/]+)\.md$/) ?? [];
		const slug = filename ?? '';
		return {
			...module.metadata,
			category,
			slug,
			href: `/insights/${category}/${slug}`,
			component: module.default
		};
	})
	.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

export function findPost(category: string, slug: string) {
	return posts.find((post) => post.category === category && post.slug === slug);
}

export function formatPostDate(date: string) {
	return new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: 'numeric' }).format(
		new Date(`${date}T00:00:00`)
	);
}
