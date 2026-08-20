import { posts } from '$lib/blog';
import { programs } from '$lib/programs';
import { siteUrl } from '$lib/site';

export const prerender = true;

const staticPaths = [
	'',
	'/about',
	'/programs',
	'/engagements',
	'/insights',
	'/research',
	'/books',
	'/products'
];

export const GET = async () => {
	const urls = [...staticPaths, ...posts.map((p) => p.href), ...programs.map((p) => p.href)].map(
		(path) => `<url><loc>${siteUrl}${path}</loc></url>`
	);

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}</urlset>`,
		{ headers: { 'Content-Type': 'application/xml' } }
	);
};
