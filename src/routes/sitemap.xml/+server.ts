import { posts } from '$lib/blog';
import { programs } from '$lib/programs';
import { siteUrl } from '$lib/site';
import { indexableStaticPaths } from '$lib/seo/targets';
import { publishedCaseStudies } from '$lib/case-studies';
import { trainingPages } from '$lib/training-pages';

export const prerender = true;

export const GET = async () => {
	const paths = [
		...indexableStaticPaths,
		...posts.map((p) => p.href),
		...programs.map((p) => p.href),
		...trainingPages.map((page) => page.href),
		...publishedCaseStudies.map((item) => `/case-studies/${item.slug}`)
	];
	const urls = [...new Set(paths)].map((path) => `<url><loc>${siteUrl}${path}</loc></url>`);

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}</urlset>`,
		{ headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
	);
};
