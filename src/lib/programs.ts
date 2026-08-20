import type { Component } from 'svelte';

export const programCategories = [
	{ slug: 'courses', label: 'Courses' },
	{ slug: 'seminars', label: 'Seminars' },
	{ slug: 'workshops', label: 'Workshops' },
	{ slug: 'online-content', label: 'Resources', tabId: 'resources' }
] as const;

type ProgramItem = { title: string; body: string | string[] };
type ProgramTestimonial = { quote: string; author: string; role?: string };
type ProgramSignup = { link: string; label?: string };
type ProgramCourseContents = { link: string; label?: string };
export type ProgramMetadata = {
	title: string;
	description: string;
	category: string;
	tagline?: string;
	image?: string;
	duration: string;
	location: string;
	level: string;
	capacity?: string;
	audience?: string[];
	content?: string;
	modules?: ProgramItem[];
	outcomes?: ProgramItem[];
	testimonials?: ProgramTestimonial[];
	signup?: ProgramSignup;
	courseContents?: ProgramCourseContents;
};

type MarkdownModule = { default: Component; metadata: ProgramMetadata };
const modules = import.meta.glob('/src/content/programs/**/*.md', { eager: true }) as Record<
	string,
	MarkdownModule
>;
const rawModules = import.meta.glob('/src/content/programs/**/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
}) as Record<string, string>;

export type Program = ProgramMetadata & {
	slug: string;
	href: string;
	component: Component;
	hasAdditionalDetails: boolean;
};

function hasMarkdownBody(source: string) {
	return /^---\s*\r?\n[\s\S]*?\r?\n---\s*\r?\n([\s\S]*)$/.exec(source)?.[1].trim().length
		? true
		: false;
}

export const programs: Program[] = Object.entries(modules).map(([path, module]) => {
	const [, category, filename] = path.match(/\/programs\/([^/]+)\/([^/]+)\.md$/) ?? [];
	return {
		...module.metadata,
		category,
		slug: filename ?? '',
		href: `/programs/${category}/${filename}`,
		component: module.default,
		hasAdditionalDetails: hasMarkdownBody(rawModules[path] ?? '')
	};
});

export function findProgram(category: string, slug: string) {
	return programs.find((program) => program.category === category && program.slug === slug);
}
