export type EvidenceMetric = {
	label: string;
	value: string;
	asOf: string;
	evidence?: string;
};

export type ProfessionalRole = {
	organization: string;
	title: string;
	period?: string;
	summary?: string;
};

export const professionalStats: EvidenceMetric[] = [
	{
		label: 'AI engineers trained',
		value: '1,500+',
		asOf: '2026-09',
		evidence: 'Fusemachines AI Fellowship'
	},
	{
		label: 'Countries reached',
		value: '15+',
		asOf: '2026-09',
		evidence: 'Fusemachines AI programs'
	},
	{ label: 'Years in AI engineering and education', value: '10', asOf: '2026-09' }
];

export const professionalRoles: ProfessionalRole[] = [
	{
		organization: 'Fusemachines Inc.',
		title: 'Director of AI Education & Talent Development',
		period: '2017 — Present',
		summary:
			'I lead AI education programs and curriculum development for engineers and working professionals.'
	},
	{
		organization: 'Kathmandu University',
		title: 'Subject Committee Member and Visiting Faculty',
		period: '2020 — Present',
		summary:
			'I teach machine learning and help connect academic programs with current engineering practice.'
	},
	{
		organization: 'Industry Integrated Degree (IID by NASIT–NOU)',
		title: 'Subject Committee Member'
	},
	{
		organization: 'Australia Awards',
		title: 'Capability Building Programs'
	}
];
