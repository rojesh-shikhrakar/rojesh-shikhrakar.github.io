export const siteName = 'Rojesh Man Shikhrakar';

// ponytail: one address for the whole site. Was split between
// rojesh@fusemachines.com (13 uses) and mail@rojeshshikhrakar.com.np (1).
export const contactEmail = 'mail@rojeshshikhrakar.com.np';

export const mailto = (subject?: string) =>
	subject
		? `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`
		: `mailto:${contactEmail}`;

export const siteUrl = 'https://rojeshshikhrakar.com.np';

export const personId = `${siteUrl}/#rojesh-shikhrakar`;

export const personDescription =
	'Rojesh Man Shikhrakar is an AI trainer, AI expert and AI consultant based in Kathmandu, Nepal — Director of AI Education & Talent Development at Fusemachines and visiting faculty at Kathmandu University — specializing in organizational AI adoption, AI strategy, AI productivity, responsible AI and AI capability development.';

// ponytail: stable, non-hashed URLs so search engines and LLMs see one image across builds
export const profileImage = '/rojesh-man-shikhrakar.jpg';
export const ogImage = '/og-rojesh-man-shikhrakar.jpg';

// sameAs: every profile that is unambiguously this person. More links = stronger entity resolution.
export const socialProfiles = [
	'https://www.linkedin.com/in/rojeshshikhrakar/',
	'https://github.com/rojesh-shikhrakar',
	'https://scholar.google.com/citations?user=lL164CgAAAAJ',
	'https://www.researchgate.net/profile/Rojesh-Shikhrakar',
	'https://www.semanticscholar.org/author/51283647',
	'https://nepalspeakers.com/rojesh-man-shikhrakar/',
	'https://rojeshikhrakar.wordpress.com/'
];
