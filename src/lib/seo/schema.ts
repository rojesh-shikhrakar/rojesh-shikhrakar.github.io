import { personDescription, personId, siteName, siteUrl, socialProfiles } from '$lib/site';

export type BreadcrumbItem = { name: string; path: string };

export const absoluteUrl = (path: string) =>
	path.startsWith('http') ? path : `${siteUrl}${path === '/' ? '/' : path.replace(/\/$/, '')}`;

export const personSchema = (image?: string) => ({
	'@type': 'Person',
	'@id': personId,
	name: siteName,
	alternateName: ['Rojesh Shikhrakar', 'Rojesh M. Shikhrakar'],
	url: siteUrl,
	...(image ? { image: absoluteUrl(image) } : {}),
	jobTitle: [
		'AI Trainer',
		'AI Expert',
		'AI Educator',
		'AI Consultant',
		'Machine Learning Engineer'
	],
	description: personDescription,
	address: { '@type': 'PostalAddress', addressLocality: 'Kathmandu', addressCountry: 'NP' },
	nationality: { '@type': 'Country', name: 'Nepal' },
	worksFor: { '@type': 'Organization', name: 'Fusemachines' },
	affiliation: { '@type': 'CollegeOrUniversity', name: 'Kathmandu University' },
	knowsAbout: [
		'Artificial Intelligence',
		'AI Training',
		'Generative AI',
		'Large Language Models',
		'Prompt Engineering',
		'Enterprise AI',
		'Organizational AI Adoption',
		'AI Productivity',
		'Responsible AI',
		'AI Governance',
		'Machine Learning'
	],
	sameAs: socialProfiles
});

export const websiteSchema = () => ({
	'@type': 'WebSite',
	'@id': `${siteUrl}/#website`,
	url: `${siteUrl}/`,
	name: siteName,
	publisher: { '@id': personId }
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
	'@type': 'FAQPage',
	mainEntity: faqs.map((faq) => ({
		'@type': 'Question',
		name: faq.question,
		acceptedAnswer: { '@type': 'Answer', text: faq.answer }
	}))
});

export const serviceSchema = (input: { path: string; name: string; description: string }) => ({
	'@type': 'Service',
	'@id': `${absoluteUrl(input.path)}#service`,
	name: input.name,
	description: input.description,
	serviceType: 'AI Training',
	provider: { '@id': personId },
	areaServed: [
		{ '@type': 'City', name: 'Kathmandu' },
		{ '@type': 'Country', name: 'Nepal' }
	],
	url: absoluteUrl(input.path)
});

export const breadcrumbSchema = (items: BreadcrumbItem[]) => ({
	'@type': 'BreadcrumbList',
	itemListElement: items.map((item, index) => ({
		'@type': 'ListItem',
		position: index + 1,
		name: item.name,
		item: absoluteUrl(item.path)
	}))
});

export const webPageSchema = (input: {
	path: string;
	name: string;
	description: string;
	breadcrumbs?: BreadcrumbItem[];
	extra?: Array<Record<string, unknown>>;
}) => ({
	'@context': 'https://schema.org',
	'@graph': [
		websiteSchema(),
		personSchema(),
		{
			'@type': 'WebPage',
			'@id': `${absoluteUrl(input.path)}#webpage`,
			url: absoluteUrl(input.path),
			name: input.name,
			description: input.description,
			isPartOf: { '@id': `${siteUrl}/#website` },
			about: { '@id': personId }
		},
		...(input.breadcrumbs ? [breadcrumbSchema(input.breadcrumbs)] : []),
		...(input.extra ?? [])
	]
});

export const articleSchema = (input: {
	path: string;
	title: string;
	description: string;
	datePublished: string;
	image?: string;
	breadcrumbs: BreadcrumbItem[];
}) => ({
	'@context': 'https://schema.org',
	'@graph': [
		websiteSchema(),
		personSchema(),
		breadcrumbSchema(input.breadcrumbs),
		{
			'@type': 'BlogPosting',
			'@id': `${absoluteUrl(input.path)}#article`,
			mainEntityOfPage: absoluteUrl(input.path),
			headline: input.title,
			description: input.description,
			datePublished: input.datePublished,
			...(input.image ? { image: absoluteUrl(input.image) } : {}),
			author: { '@id': personId },
			publisher: { '@id': personId }
		}
	]
});

export const eventSchema = (input: {
	name: string;
	description: string;
	startDate: string;
	location?: string;
	url?: string;
}) => ({
	'@type': 'Event',
	name: input.name,
	description: input.description,
	startDate: input.startDate,
	...(input.location
		? {
				location: {
					'@type': 'Place',
					name: input.location,
					address: { '@type': 'PostalAddress', addressCountry: 'NP' }
				}
			}
		: {}),
	...(input.url ? { url: absoluteUrl(input.url) } : {}),
	organizer: { '@id': personId }
});
