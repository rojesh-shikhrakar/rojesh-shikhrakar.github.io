export const siteName = 'Rojesh Man Shikhrakar';

// ponytail: one address for the whole site. Was split between
// rojesh@fusemachines.com (13 uses) and mail@rojeshshikhrakar.com.np (1).
export const contactEmail = 'rojesh@fusemachines.com';

export const mailto = (subject?: string) =>
	subject
		? `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`
		: `mailto:${contactEmail}`;

export const siteUrl = 'https://rojesh-shikhrakar.github.io';
