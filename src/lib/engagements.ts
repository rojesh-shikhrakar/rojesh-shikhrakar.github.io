export type EngagementKind = 'Workshop' | 'Talk' | 'Panel' | 'Podcast' | 'Article' | 'Media';

export type PastEngagement = {
	title: string;
	kind: EngagementKind;
	org?: string;
	date?: string;
	year: number;
	note?: string;
	href?: string;
	image?: string;
};

export const pastEngagements: PastEngagement[] = [
	{
		title: 'AI for Everyone & Gen AI for Everyone',
		kind: 'Workshop',
		org: 'Public Seminar Series',
		date: 'Ongoing',
		year: 9999,
		note: 'Recurring introductory sessions for general audiences'
	},
	{
		title: 'Faculty Development: Research-based Training in AI',
		kind: 'Workshop',
		org: 'PUFOST',
		date: 'Aug 12–18, 2024',
		year: 2024,
		note: 'University faculty cohort'
	},
	{
		title: 'Leveraging AI for Content Creators',
		kind: 'Workshop',
		org: 'Creator Mela · U.S. Embassy',
		date: 'Jul 26–27, 2024',
		year: 2024,
		note: 'Digital creators & media professionals'
	},
	{
		title: 'AI for Future Leaders',
		kind: 'Workshop',
		org: 'Hidden Treasures — Miss Nepal Contestants 2024',
		date: 'Jun 14, 2024',
		year: 2024
	},
	{
		title: 'AI & Misinformation',
		kind: 'Panel',
		org: 'First AI Conference for a Prosperous Nepal',
		date: 'Mar 3, 2024',
		year: 2024,
		note: 'Panel discussion'
	},
	{
		title: 'Maximizing Teaching Impact: Harnessing AI in Education',
		kind: 'Workshop',
		org: 'Uniglobe Secondary School',
		date: 'May 2024',
		year: 2024,
		note: '200 teachers from 180 schools'
	},
	{
		title: 'AI for Security & Defense',
		kind: 'Workshop',
		org: 'Armed Police Force Nepal — APF Academy',
		date: 'Feb 28 & Sep 25, 2024',
		year: 2024
	},
	{
		title: 'AI for Research',
		kind: 'Workshop',
		org: 'Research Organization',
		date: 'Feb 4, 2024',
		year: 2024
	},
	{
		title: 'Empowering Startups: Driving Business Growth with AI',
		kind: 'Talk',
		org: 'CNIYEF — Nepal Startup Fest 2023',
		date: '2023',
		year: 2023,
		note: 'Founders & early-stage startups'
	},
	{
		title: 'AI for Work Productivity',
		kind: 'Workshop',
		org: 'LCCI Global Qualification',
		date: 'Nov 2023',
		year: 2023
	},
	{
		title: 'Master AI Tools for Work Productivity',
		kind: 'Workshop',
		org: 'Nepal Speakers Bureau',
		date: '2023',
		year: 2023
	},
	{
		title: 'Mathematics Applications to AI',
		kind: 'Talk',
		org: 'Kathmandu University — Mathematics Department',
		date: '2023',
		year: 2023
	},
	{
		title: 'Artificial Intelligence for Mechanical Engineering',
		kind: 'Talk',
		org: 'IOE Pulchowk Campus',
		date: '2019',
		year: 2019
	},
	{
		title: 'AI for Business',
		kind: 'Talk',
		org: 'Thames Gabfest',
		date: '2019',
		year: 2019
	},
	{
		title: 'Podcast conversation 01',
		kind: 'Podcast',
		year: 2024,
		href: 'https://www.youtube.com/watch?v=L37Yobck4Jc&t=638s'
	},
	{
		title: 'Podcast conversation 02',
		kind: 'Podcast',
		year: 2024,
		href: 'https://www.youtube.com/watch?v=atSi2kw4oqM'
	},
	{
		title: 'Podcast conversation 03',
		kind: 'Podcast',
		year: 2024,
		href: 'https://www.youtube.com/watch?v=59HSGgJQarg&t=248s'
	},
	{
		title: 'Empowering Educators: Enhancing Teaching With AI',
		kind: 'Article',
		org: 'Training Magazine',
		year: 2024,
		href: 'https://trainingmag.com/empowering-educators-enhancing-teaching-with-ai/'
	}
];

export const engagementKinds: Array<'All' | EngagementKind> = [
	'All',
	'Workshop',
	'Talk',
	'Panel',
	'Podcast',
	'Article',
	'Media'
];
