import type { Component } from 'svelte';

export type TrainingCard = { title: string; body: string; href?: string };
export type TrainingSection =
	'content' | 'programs' | 'audiences' | 'approach' | 'evidence' | 'faq' | 'cta';

export type TrainingPageMetadata = {
	title: string;
	description: string;
	eyebrow: string;
	h1: string;
	intro: string;
	cta: string;
	navLabel: string;
	navOrder?: number;
	serviceType?: string;
	draft?: boolean;
	layout?: {
		hero?: 'portrait' | 'text';
		theme?: 'paper' | 'sand' | 'sage';
		width?: 'reading' | 'wide';
		sections?: TrainingSection[];
	};
	labels?: Partial<Record<TrainingSection | 'programsEyebrow' | 'approachEyebrow', string>>;
	audiences?: string[];
	programs?: TrainingCard[];
	approach?: TrainingCard[];
	faqs?: Array<{ question: string; answer: string }>;
};

type MarkdownModule = { default: Component; metadata: TrainingPageMetadata };

const modules = import.meta.glob('/src/content/training/*.md', { eager: true }) as Record<
	string,
	MarkdownModule
>;

export type TrainingPage = TrainingPageMetadata & {
	slug: string;
	href: string;
	component: Component;
};

export const trainingPages: TrainingPage[] = Object.entries(modules)
	.map(([path, module]) => {
		const slug = path.match(/\/([^/]+)\.md$/)?.[1] ?? '';
		return { ...module.metadata, slug, href: `/${slug}`, component: module.default };
	})
	.filter((page) => !page.draft)
	.sort((a, b) => (a.navOrder ?? 999) - (b.navOrder ?? 999));

export const findTrainingPage = (slug: string) => trainingPages.find((page) => page.slug === slug);
