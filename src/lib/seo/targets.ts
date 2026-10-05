export const seoTargets = {
	'/ai-trainer-nepal': 'ai trainer nepal',
	'/ai-consultant-nepal': 'ai consultant nepal',
	'/ai-keynote-speaker-nepal': 'ai keynote speaker nepal',
	'/corporate-ai-training-nepal': 'corporate ai training nepal',
	'/enterprise-ai-training-nepal': 'enterprise ai training nepal',
	'/ai-training-government-ngos-nepal': 'government ngo ai training nepal',
	'/ai-productivity-training-nepal': 'ai productivity training nepal',
	'/ai-governance-training-nepal': 'ai governance training nepal'
} as const;

export const indexableStaticPaths = [
	'',
	'/about',
	'/programs',
	'/workshops',
	'/engagements',
	'/case-studies',
	'/media',
	'/insights',
	'/research',
	'/books',
	'/products',
	...Object.keys(seoTargets)
];
