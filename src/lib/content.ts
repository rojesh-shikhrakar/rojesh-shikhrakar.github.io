import type { Component } from 'svelte';

/** Frontmatter shared by all MDSvex content (blog posts & workshops). */
export interface ContentMeta {
	title: string;
	tags?: string[];
	// Blog
	date?: string;
	author?: string;
	excerpt?: string;
	readTime?: string;
	// Workshops & Courses
	duration?: string;
	tag?: string;
	tools?: string[];
	prerequisites?: string;
	maxParticipants?: number;
	signupLink?: string;
	takeaway?: string;
	// Courses
	institution?: string;
	audience?: string;
	level?: string;
	format?: string;
	// Research
	businessContext?: string;
	year?: number;
	venue?: string;
	status?: string;
}

/** Shape of a compiled MDSvex module. */
export interface MdsvexModule {
	default: Component;
	metadata: ContentMeta;
}

/** A content list entry: slug + frontmatter. */
export type ContentSummary = ContentMeta & { slug: string };

const slugOf = (path: string) => path.split('/').pop()!.replace('.md', '');

/**
 * Build a date-sorted (newest first) summary list from an eager glob of MDSvex
 * modules. Pass `import.meta.glob('/src/content/<dir>/*.md', { eager: true })`.
 */
export function listContent(modules: Record<string, unknown>): ContentSummary[] {
	return Object.entries(modules)
		.map(([path, mod]) => ({
			slug: slugOf(path),
			...(mod as MdsvexModule).metadata
		}))
		.sort((a, b) => {
			if (!a.date || !b.date) return 0;
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		});
}

/** Enumerate slugs from an eager glob — for SvelteKit prerender `entries()`. */
export function contentEntries(modules: Record<string, unknown>): { slug: string }[] {
	return Object.keys(modules).map((path) => ({ slug: slugOf(path) }));
}
