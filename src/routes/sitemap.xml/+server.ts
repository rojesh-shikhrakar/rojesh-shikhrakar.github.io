import { site } from '$lib/data/site';
import { contentEntries } from '$lib/content';

export const prerender = true;

const staticPaths = ['/', '/workshops', '/courses', '/research', '/blog', '/gallery'];

export function GET() {
	const blog = contentEntries(import.meta.glob('/src/content/blog/*.md', { eager: true }));
	const workshops = contentEntries(
		import.meta.glob('/src/content/workshops/*.md', { eager: true })
	);
	const courses = contentEntries(import.meta.glob('/src/content/courses/*.md', { eager: true }));
	const research = contentEntries(import.meta.glob('/src/content/research/*.md', { eager: true }));

	const urls = [
		...staticPaths,
		...blog.map((p) => `/blog/${p.slug}`),
		...workshops.map((p) => `/workshops/${p.slug}`),
		...courses.map((p) => `/courses/${p.slug}`),
		...research.map((p) => `/research/${p.slug}`)
	];

	const body = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `\t<url><loc>${site.url}${path}</loc></url>`).join('\n')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}
