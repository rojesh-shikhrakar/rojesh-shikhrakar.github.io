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
	'Rojesh Man Shikhrakar is an AI trainer, AI expert and educator based in Kathmandu, Nepal — Director of AI Education at Fusemachines and visiting faculty at Kathmandu University — specializing in organizational AI adoption, AI productivity, responsible AI and AI capability development.';

export const socialProfiles = [
	'https://www.linkedin.com/in/rojeshshikhrakar/',
	'https://github.com/rojesh-shikhrakar'
];
