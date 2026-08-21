export type EngagementKind = 'Workshop' | 'Talk' | 'Panel' | 'Podcast' | 'Article' | 'Media';

export type PastEngagement = {
	title: string;
	kind: EngagementKind;
	org?: string;
	location?: string;
	date?: string;
	year: number;
	note?: string | string[];
	href?: string;
	link?: string;
	image?: string;
};

export const pastEngagements: PastEngagement[] = [
	{
		title:
			'Promoting academia-industry collaboration for higher education innovation in South Asia - 2026 Leadership Policy Dialogue in South Asia',
		kind: 'Panel',
		org: 'UNESCO, TU, ADB & UNESCO-ICHEI',
		date: '20ᵗʰ May',
		year: 2026,
		location: 'Everest Hotel, Kathmandu, Nepal',
		note: [
			'Mr. Adesh Khadka, Joint Secretary, Ministry of Communication and Information Technology, Nepal',
			'Dr. Uzma Quraishi, Vice Chancellor, Lahore College forWomen University, Lahore',
			'Ms. Sunaina Pandey, President, Federation of Computer Association Nepal',
			'Moderated by Dr. Kaushal Kumar Bhagat, IIT Kharagpur, India'
		],
		image: 'https://res.cloudinary.com/w6ej7kot/image/upload/UNESCOPanel.jpg'
	},
	{
		title: 'AI and Diplomacy: Prospects and Challenges',
		kind: 'Panel',
		org: 'Centre for Social Innovation and Foreign Policy (CESIF)',
		date: '27ᵗʰ February',
		year: 2025,
		location: 'Basera Boutique Hotel, Kathmandu, Nepal',
		note: [
			'Amb. Dinesh Bhattarai, Former Foreign Affairs Advisor to the Prime Minister of Nepal',
			'Dr. Rajib Subba, Cyber Security Expert',
			'Dr. Bal Krishna Bal, Associate Dean, School of Engineering, Kathmandu University',
			'Moderated by Ms. Sajana Baral, Journalist',
			'Feedback provided on CESIF’s AI and Diplomacy Policy Brief'
		],
		image: 'https://res.cloudinary.com/w6ej7kot/image/upload/AI_in_Diplomacy.jpg',
		link: 'https://www.youtube.com/watch?v=7qFmUhCpbDQ'
	},
	{
		title: 'AI for Everyone & Gen AI for Everyone',
		kind: 'Workshop',
		org: 'Public Seminar Series',
		date: 'Ongoing',
		year: 2023,
		note: 'Recurring introductory sessions for general audiences'
	},
	{
		title: 'Faculty Development: Research-based Training in AI',
		kind: 'Workshop',
		org: 'PUFOST',
		date: 'Aug 12–18, 2024',
		year: 2024,
		location: 'PUFOST, Biratnagar, Nepal',
		note: 'University faculty cohort',
		image: 'https://res.cloudinary.com/w6ej7kot/image/upload/PUFost.jpg'
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
		note: 'Panel discussion',
		image: 'https://res.cloudinary.com/w6ej7kot/image/upload/Misinformation_AI.jpg'
	},
	{
		title: 'AI Adoption in Nepalese Industries: Opportunities and Challenges',
		kind: 'Panel',
		org: 'KU IT MEET 2023',
		date: '24 November',
		year: 2023,
		location: 'Kathmandu University, Dulikhel, Nepal',
		note: 'Panel discussion'
	},
	{
		title: 'How to Leverage AI for Social Media Success',
		kind: 'Panel',
		org: 'US Embassy, Kathmandu',
		date: '25 July',
		year: 2024,
		location: 'Aloft, Kathmandu, Nepal',
		note: 'Key Note Talk & Panel discussion on AI for Social Media Success'
	},
	{
		title:
			'Exploring the Future of Artificial Intelligence, Data Science, and Cyber Security - TechTrends 2023',
		kind: 'Panel',
		org: 'Kathmandu Business Campus (KBC)',
		date: '9 September',
		year: 2023,
		location: 'Kathmandu Business Campus, Kathmandu, Nepal',
		note: [
			'Mr. Eugene Shrestha, Managing Director. Frost & Sullivan',
			'Er. Yogesh Aryal, MoEST',
			'Moderated by Er. Bikash Gurung, President, Robotics Association of Nepal'
		],
		image: 'https://res.cloudinary.com/w6ej7kot/image/upload/KBC_panel.jpg'
	},
	{
		title:
			'Maximizing Teaching Impact: Harnessing AI in Education- Transformative Teacher’s Learning for 21st Century Classrooms',
		kind: 'Workshop',
		org: 'Uniglobe Secondary School',
		date: 'May 2024',
		year: 2024,
		note: 'Trained 200 teachers from 180 schools',
		image: 'https://res.cloudinary.com/w6ej7kot/image/upload/AI_4_Teachers.jpg'
	},
	{
		title: 'AI for Security & Defense',
		kind: 'Workshop',
		org: 'Armed Police Force Nepal — APF Academy',
		date: 'Feb 28 & Sep 25, 2024',
		year: 2024,
		image: 'https://res.cloudinary.com/w6ej7kot/image/upload/AI4APF.jpg'
	},
	{
		title: 'AI for Research',
		kind: 'Workshop',
		org: 'Research Organization',
		date: 'Feb 4, 2024',
		year: 2024
	},
	{
		title:
			'Empowering Startups: Accelerating Productivity and Driving Business Growth with AI Solutions - CNIYEF Nepal Startup Fest 2023',
		kind: 'Talk',
		org: 'CNIYEF - Nepal Startup Fest 2023',
		date: '2023',
		year: 2023,
		note: 'Discussed on Practical Applications for Founders & early-stage startups',
		image: 'https://res.cloudinary.com/w6ej7kot/image/upload/CNIYEF.jpg'
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
		title: 'Drones and Its areas of Development - LOCUS 2020,',
		kind: 'Panel',
		org: 'IOE LOCUS 2020',
		date: '13 January',
		year: 2020,
		location: 'IOE, Pulchowk, Nepal',
		note: 'Panel discussion'
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
		title: 'Podcast with IID Committee Leaders',
		kind: 'Podcast',
		year: 2026,
		href: 'https://www.youtube.com/watch?v=L37Yobck4Jc&t=638s'
	},
	{
		title: 'Podcast with IID Committee Leaders2',
		kind: 'Podcast',
		year: 2026,
		href: 'https://www.youtube.com/watch?v=atSi2kw4oqM'
	},
	{
		title: 'Podcast  with Anup Ghimire',
		kind: 'Podcast',
		org: 'Doers Global',
		year: 2026,
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
