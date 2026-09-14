export type CaseStudy = {
	slug: string;
	title: string;
	organization: string;
	industry: string;
	location?: string;
	date: string;
	year: number;
	audience: string;
	participants?: string;
	duration?: string;
	challenge?: string;
	objectives: string[];
	curriculum?: string[];
	topics: string[];
	methodology?: string[];
	deliveryFormat: string;
	outcomes?: string[];
	testimonial?: { quote: string; name: string; role?: string };
	images?: Array<{ src: string; alt: string }>;
	externalReferences?: Array<{ label: string; url: string }>;
	relatedProgram: string;
	status: 'draft' | 'published';
};

export const caseStudies: CaseStudy[] = [
	{
		slug: 'ai-training-security-defense-nepal',
		title: 'AI Training for Security and Defense Professionals in Nepal',
		organization: 'Armed Police Force Nepal — APF Academy',
		industry: 'Government and public security',
		location: 'Nepal',
		date: 'February 28 and September 25, 2024',
		year: 2024,
		audience: 'Security and defense professionals',
		objectives: [
			'Build practical understanding of artificial intelligence in a security and defense context'
		],
		topics: ['Artificial intelligence', 'Security and defense applications'],
		deliveryFormat: 'In-person workshop sessions',
		images: [
			{
				src: 'https://res.cloudinary.com/w6ej7kot/image/upload/AI4APF.jpg',
				alt: 'AI training session for security and defense professionals at APF Academy'
			}
		],
		relatedProgram: '/ai-training-government-ngos-nepal',
		status: 'published'
	},
	{
		slug: 'ai-training-teachers-nepal',
		title: 'AI Training for Teachers from 180 Schools in Nepal',
		organization: 'Uniglobe Secondary School',
		industry: 'Education',
		location: 'Nepal',
		date: 'May 2024',
		year: 2024,
		audience: 'School teachers',
		participants: '200 teachers from 180 schools',
		objectives: ['Explore how educators can enhance teaching with AI'],
		topics: ['AI in education', 'Teaching practice', '21st-century classrooms'],
		deliveryFormat: 'In-person workshop',
		images: [
			{
				src: 'https://res.cloudinary.com/w6ej7kot/image/upload/AI_4_Teachers.jpg',
				alt: 'Rojesh Shikhrakar delivering AI training for school teachers in Nepal'
			}
		],
		relatedProgram: '/ai-trainer-nepal',
		status: 'published'
	},
	{
		slug: 'ai-training-faculty-research-nepal',
		title: 'Research-Based AI Training for University Faculty',
		organization: 'PUFOST',
		industry: 'Higher education',
		location: 'Biratnagar, Nepal',
		date: 'August 12–18, 2024',
		year: 2024,
		audience: 'University faculty',
		duration: 'Seven days',
		objectives: ['Develop faculty capability through research-based training in AI'],
		topics: ['Artificial intelligence', 'Research methodology', 'Faculty development'],
		deliveryFormat: 'Faculty development workshop',
		images: [
			{
				src: 'https://res.cloudinary.com/w6ej7kot/image/upload/PUFost.jpg',
				alt: 'Research-based AI faculty development workshop at PUFOST in Biratnagar'
			}
		],
		relatedProgram: '/ai-trainer-nepal',
		status: 'published'
	}
];

export const publishedCaseStudies = caseStudies.filter((item) => item.status === 'published');
export const findCaseStudy = (slug: string) =>
	publishedCaseStudies.find((item) => item.slug === slug);
