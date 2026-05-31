// -----------------------------------------------------------------------------
// Site configuration — single source of truth for identity, canonical URL,
// SEO defaults, and external links.
//
// TODO: replace the placeholder social URLs below with the real profiles.
// These feed the footer, research links, and JSON-LD structured data.
// -----------------------------------------------------------------------------
export const site = {
	name: 'Rojesh Man Shikhrakar',
	jobTitle: 'AI Educator & ML Researcher',
	title: 'Rojesh Man Shikhrakar | AI Educator & ML Researcher',
	description:
		'Lead AI Educator at Fusemachines and Faculty at Kathmandu University. Expert in enterprise AI training, machine learning research, and organizational AI strategy.',
	// Canonical production origin (no trailing slash). Used for OG tags & sitemap.
	url: 'https://rojesh.com.np',
	ogImage: '/og-image.png',
	email: 'rojesh@fusemachines.com',
	social: {
		// TODO: real URLs
		github: 'https://github.com',
		linkedin: 'https://linkedin.com',
		scholar: 'https://scholar.google.com',
		arxiv: 'https://arxiv.org'
	}
};

// -----------------------------------------------------------------------------
// Giscus — GitHub Discussions-backed comments + reactions (likes) for blog posts.
//
// SETUP (one-time): https://giscus.app
//   1. Make the GitHub repo PUBLIC and enable the "Discussions" feature.
//   2. Install the giscus GitHub App on the repo: https://github.com/apps/giscus
//   3. Open https://giscus.app, enter `owner/repo`, pick the "Announcements"
//      category (recommended), and copy the four generated values below.
//
// The comment/reaction widget only renders once `repoId` is a real value
// (i.e. no longer starts with "PASTE_"). Until then a "coming soon" notice shows.
// -----------------------------------------------------------------------------
export const giscus = {
	repo: 'OWNER/REPO' as `${string}/${string}`,
	repoId: 'PASTE_REPO_ID',
	category: 'Announcements',
	categoryId: 'PASTE_CATEGORY_ID',
	// 'pathname' maps each blog post URL to its own GitHub Discussion thread.
	mapping: 'pathname',
	reactionsEnabled: '1',
	inputPosition: 'top' as 'top' | 'bottom',
	lang: 'en'
};

export const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/workshops', label: 'Workshops' },
	{ href: '/courses', label: 'Courses' },
	{ href: '/research', label: 'Research' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/gallery', label: 'Gallery' }
];

export const timeline = [
	{
		period: '2017 - Present',
		role: 'Director of AI Education and Talent Development',
		org: 'Fusemachines',
		location: 'Kathmandu',
		impact:
			'Trained 1500+ students across 12+ countries and 15+ cohorts, through fusemachines flagship AI Fellowship program. Checkout at www.fuse.ai',
		badge: 'Current'
	},
	{
		period: '2020 - Present',
		role: 'Adjunct Faculty - Dept of Computer Science & AI',
		org: 'Kathmandu University',
		location: 'Dhulikhel, Nepal',
		impact:
			'Designed and delivered Data Science and Data Engineering Courses to graduate and undergraduate students.',
		badge: 'Current'
	},
	{
		period: '2017 - 2019',
		role: 'Sr. ML Research Engineer',
		org: 'Fusemachines',
		location: 'Kathmandu, Nepal',
		impact:
			'Built production computer vision pipelines for Intelligent Character Recognition systems across multi-institution datasets.',
		badge: 'Research'
	},
	{
		period: '2016 - 2020',
		role: 'Co-Founder & Tech Lead',
		org: 'Airlift Technologies Pvt. Ltd.',
		location: 'Kathmandu, Nepal',
		impact:
			'Wide Range of Drone related applications including Aerial Surveying, Precision Agriculture, and Drone Delivery. Led the development of Airlift’s delivery drone, which successfully completed Proof of Concept for Drone Delivery.',
		badge: 'Research'
	},

];

export const carouselSlides = [
	{
		image: 'australia-awards',
		workshop: 'AI for Productivity Masterclass',
		client: 'Australia Awards Cohort',
		metric: '80 Executive Attendees'
	},
	{
		image: 'coding',
		workshop: 'Prompt Engineering Intensive',
		client: 'Enterprise',
		metric: '40 Corporate Professionals'
	},
	{
		image: 'computer-graph',
		workshop: 'Data Science',
		client: 'Kathmandu University',
		metric: '30 UnderGraduate Students'
	}
];

export const highlightedWorkshops = [
	{
		tag: 'Most Popular',
		slug: 'prompt-architecture',
		title: 'Prompt Architecture & Workflow Adaptation',
		duration: 'Half-day Intensive (4 hrs)',
		takeaway:
			'Equip your team to automate 5 hours of administrative work per week—securely, without sacrificing data governance.',
		tools: ['ChatGPT', 'Claude Projects', 'Custom GPTs', 'NotebookLM']
	},
	{
		tag: 'For Leadership',
		slug: 'enterprise-ai-strategy',
		title: 'Enterprise AI Deployment Strategy',
		duration: 'Full-day Workshop (8 hrs)',
		takeaway:
			'Build an organization-wide AI adoption roadmap your board can approve and your teams can execute in under 90 days.',
		tools: ['AI Risk Frameworks', 'ROI Modeling', 'Change Management']
	},
	{
		tag: 'For Institutions',
		slug: 'ai-for-research',
		title: 'AI for Research & Academic Excellence',
		duration: 'Two-day Program (16 hrs)',
		takeaway:
			'Transform your research workflow with AI tools that accelerate literature review, data analysis, and manuscript preparation.',
		tools: ['Perplexity', 'Elicit', 'ResearchRabbit', 'NotebookLM', 'Claude']
	}
];

// -----------------------------------------------------------------------------
// Past workshops, trainings & seminars delivered. Sourced from the teaching
// record at rojeshshikhrakar.com.np/teaching.
//
// `year` is used for newest-first sorting (use a high value for recurring/ongoing
// engagements so they surface at the top). `image` is optional — drop in a cover
// image path (e.g. under /static) when available; cards render a placeholder
// until then.
// -----------------------------------------------------------------------------
export interface PastEngagement {
	title: string;
	org: string;
	date: string;
	year: number;
	note?: string;
	image?: string;
}

export const pastWorkshops: PastEngagement[] = [
	{
		title: 'AI for Everyone & Gen AI for Everyone',
		org: 'Public Seminar Series',
		date: 'Ongoing',
		year: 9999,
		note: 'Recurring introductory sessions for general audiences'
	},
	{
		title: 'Faculty Development: Research-based Training in AI',
		org: 'PUFOST',
		date: 'Aug 12-18, 2024',
		year: 2024,
		note: 'University faculty cohort'
	},
	{
		title: 'Leveraging AI for Content Creators',
		org: 'Creator Mela · U.S. Embassy',
		date: 'Jul 26-27, 2024',
		year: 2024,
		note: 'Digital creators & media professionals'
	},
	{
		title: 'AI for Future Leaders',
		org: 'Hidden Treasures — Miss Nepal Contestants 2024',
		date: 'Jun 14, 2024',
		year: 2024
	},
	{
		title: 'AI & Misinformation (Panel)',
		org: 'First AI Conference for a Prosperous Nepal',
		date: 'Mar 3, 2024',
		year: 2024,
		note: 'Panel discussion'
	},
	{
		title: 'Maximizing Teaching Impact: Harnessing AI in Education',
		org: 'Uniglobe Secondary School',
		date: 'May 2024',
		year: 2024,
		note: '200 teachers from 180 schools'
	},
	{
		title: 'AI for Security & Defense',
		org: 'Armed Police Force Nepal — APF Academy',
		date: 'Feb 28 & Sep 25, 2024',
		year: 2024
	},
	{
		title: 'AI for Research',
		org: 'Research Organization',
		date: 'Feb 4, 2024',
		year: 2024
	},
	{
		title: 'Empowering Startups: Driving Business Growth with AI',
		org: 'CNIYEF — Nepal Startup Fest 2023',
		date: '2023',
		year: 2023,
		note: 'Founders & early-stage startups'
	},
	{
		title: 'AI for Work Productivity',
		org: 'LCCI Global Qualification',
		date: 'Nov 2023',
		year: 2023
	},
	{
		title: 'Master AI Tools for Work Productivity',
		org: 'Nepal Speakers Bureau',
		date: '2023',
		year: 2023
	},
	{
		title: 'Mathematics Applications to AI',
		org: 'Kathmandu University — Mathematics Department',
		date: '2023',
		year: 2023
	},
	{
		title: 'Artificial Intelligence for Mechanical Engineering',
		org: 'IOE Pulchowk Campus',
		date: '2019',
		year: 2019
	},
	{
		title: 'AI for Business',
		org: 'Thames Gabfest',
		date: '2019',
		year: 2019
	}
];

// NOTE: Courses are sourced dynamically from `src/content/courses/*.md` (frontmatter:
// title, institution, audience, level, format, duration, tags). The home and /courses
// pages load them via `listContent(import.meta.glob(...))` in their `+page.ts`.

export const research = [
	{
		slug: 'computer-vision-medical',
		technicalTitle: 'Computer Vision & Deep Learning for Medical Image Segmentation',
		businessContext:
			'Deep research in algorithm precision ensures AI safety, data accuracy, and near-zero hallucination in high-stakes diagnostic environments.',
		tags: ['Computer Vision', 'Medical AI', 'Deep Learning'],
		year: 2023,
		venue: 'IEEE Conference on Medical Imaging'
	},
	{
		slug: 'llm-hallucination',
		technicalTitle:
			'Structured Prompting Strategies for Reducing LLM Hallucination in Enterprise Applications',
		businessContext:
			'A practical playbook for deploying LLMs in regulated industries—finance, healthcare, and legal—with provably lower error rates.',
		tags: ['LLMs', 'Enterprise AI', 'Reliability'],
		year: 2024,
		venue: 'arXiv Preprint'
	},
	{
		slug: 'ml-predictive-analytics',
		technicalTitle: 'Ensemble ML Methods for Predictive Analytics in South Asian Market Contexts',
		businessContext:
			'Custom ML models outperform off-the-shelf solutions in emerging market settings—enabling more accurate demand forecasting and resource allocation.',
		tags: ['Predictive Analytics', 'Ensemble Methods', 'Emerging Markets'],
		year: 2022,
		venue: 'Asian Conference on Machine Learning'
	}
];
