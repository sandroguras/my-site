import type { PortfolioProject } from '#types/PortfolioProject';

const mockData: PortfolioProject[] = [
	{
		slug: 'bullish',
		listName: 'bullish.com',
		pageTitle: '<a href="https://bullish.com" target="_blank" rel="noopener noreferrer" aria-label="View bullish.com website">bullish.com</a>',
		coverImage: '/images/portfolio/bullish/bullish-cover-image.webp',
		coverImageAlt: 'bullish.com cover image',
		thumbnail: '/images/portfolio/bullish/bullish-thumb.webp',
		thumbnailAlt: 'bullish.com thumbnail',
		infoBlocks: [
			{
				icon: 'feathericon-user',
				title: 'Client',
				content: 'Bullish Exchange'
			},
			{
				icon: 'icon-calendar',
				title: 'Date',
				content: '2022-08-02'
			}
		],
		images: [
			{
				src: '/images/portfolio/bullish/bullish.com_screen_1.webp',
				alt: 'Bullish website landing page hero section'
			},
			{
				src: '/images/portfolio/bullish/bullish.com_screen_2.webp',
				alt: 'Bullish website spot trading section'
			},
			{
				src: '/images/portfolio/bullish/bullish.com_screen_3.webp',
				alt: 'Bullish website products page hero section'
			},
			{
				src: '/images/portfolio/bullish/bullish.com_screen_4.webp',
				alt: 'Bullish website global presence section'
			},
			{
				src: '/images/portfolio/bullish/bullish.com_screen_5.webp',
				alt: 'Bullish website largest markets section'
			},
			{
				src: '/images/portfolio/bullish/bullish.com_screen_6.webp',
				alt: 'Bullish website digital assets Bitcoin page'
			},
			{
				src: '/images/portfolio/bullish/bullish.com_screen_7.webp',
				alt: 'Bullish website global presence section'
			},
			{
				src: '/images/portfolio/bullish/bullish.com_screen_8.webp',
				alt: 'Bullish website top 5 trading venue section'
			}
		],
		description: "<p>The Bullish.com website project was focused on developing a marketing platform for a cryptocurrency exchange. As the web director, I spearheaded the project from its inception, taking charge of the architecture planning and initial code layout. The initial phase began with a simple content management system (CMS), which I helped scale into a more comprehensive web multi-system to meet the specialized needs of marketing a crypto exchange. I worked closely with the team to design a flexible system that allowed the marketing team to swiftly adapt content, launch new campaigns, and introduce pages that could engage and inform users about the exchange's features and benefits. This level of adaptability was crucial for staying competitive in the fast-paced world of cryptocurrency trading.</p>\n" +
			"\n" +
			"<p>In my role as the project lead, I oversaw a team of six developers located in different regions. This setup presented unique challenges in terms of coordination and maintaining a cohesive workflow. Our key objectives were ensuring timely delivery, managing stakeholder expectations, and driving thee development process forward while adhering to high coding standards. To meet these goals, I focused on efficient project management practices, such as using Jira for task tracking and fostering a culture of regular code reviews to maintain code quality and facilitate feature development.</p>\n" +
			"\n" +
			"<p>The security aspect of the site was particularly important, given the sensitive nature of the financial information and transactions associated with a crypto exchange. From the early stages of architecture planning, I prioritized the implementation of stringent security protocols, balancing these with the need for a high-performing website. This required a thoughtful approach to coding practices and a commitment to continuous testing and improvement. The project was not just about building a marketing site; it was about creating a secure, efficient platform that could effectively promote the crypto exchange and build trust with its users. Through teamwork and a commitment to best practices, we developed a site that not only met but exceeded these objectives.</p>"
	},
	{
		slug: 'eosio',
		listName: 'eos.io',
		pageTitle: '<a href="https://eos.io" target="_blank" rel="noopener noreferrer" aria-label="View eosio website">eos.io</a>',
		coverImage: '/images/portfolio/eosio/eosio-cover-image.webp',
		coverImageAlt: 'eos.io cover image',
		thumbnail: '/images/portfolio/eosio/eosio-thumb.webp',
		thumbnailAlt: 'eos.io thumbnail',
		infoBlocks: [
			{
				icon: 'feathericon-user',
				title: 'Client',
				content: 'Block.one'
			},
			{
				icon: 'icon-calendar',
				title: 'Date',
				content: '2021-02-02'
			}
		],
		images: [
			{
				src: '/images/portfolio/eosio/eos.io_screen_1.webp',
				alt: 'EOSIO website main hero'
			},
			{
				src: '/images/portfolio/eosio/eos.io_screen_2.webp',
				alt: 'EOSIO website mega menu'
			},
			{
				src: '/images/portfolio/eosio/eos.io_screen_3.webp',
				alt: 'EOSIO website Event page hero'
			},
			{
				src: '/images/portfolio/eosio/eos.io_screen_4.webp',
				alt: 'EOSIO website For Developers hero'
			},
			{
				src: '/images/portfolio/eosio/eos.io_screen_5.webp',
				alt: 'EOSIO website News page'
			},
			{
				src: '/images/portfolio/eosio/eos.io_screen_6.webp',
				alt: 'EOSIO website Training & Certification hero'
			},
			{
				src: '/images/portfolio/eosio/eos.io_screen_7.webp',
				alt: 'EOSIO website Info Blocks section'
			},
			{
				src: '/images/portfolio/eosio/eos.io_screen_8.webp',
				alt: 'EOSIO website Why EOSIO slider section'
			}
		],
		description:
			'<p>EOSIO is a blockchain protocol that enables horizontal scaling of decentralized applications, allowing developers to efficiently create high performance applications.</p>' +
			'<p>The website provides information about the protocol and its features.</p>'
	},
	{
		slug: 'blockone',
		listName: 'block.one',
		pageTitle: '<a href="https://b1.com" target="_blank" rel="noopener noreferrer" aria-label="View block.one website">b1.com</a>',
		coverImage: '/images/portfolio/b1/b1-cover-image.webp',
		coverImageAlt: 'block.one cover image',
		thumbnail: '/images/portfolio/b1/b1-thumb.webp',
		thumbnailAlt: 'block.one thumbnail',
		infoBlocks: [
			{
				icon: 'feathericon-user',
				title: 'Client',
				content: 'Block.one'
			},
			{
				icon: 'icon-calendar',
				title: 'Date',
				content: '2021-07-10'
			}
		],
		images: [
			{
				src: '/images/portfolio/b1/b1.com_screen_1.webp',
				alt: 'b1 website main hero'
			},
			{
				src: '/images/portfolio/b1/b1.com_screen_2.webp',
				alt: 'b1 website Architect Integrity section'
			},
			{
				src: '/images/portfolio/b1/b1.com_screen_3.webp',
				alt: 'b1 website leadership page'
			},
			{
				src: '/images/portfolio/b1/b1.com_screen_4.webp',
				alt: 'b1 website portfolio page'
			},
			{
				src: '/images/portfolio/b1/b1.com_screen_5.webp',
				alt: 'b1 website portfolio page item'
			},
			{
				src: '/images/portfolio/b1/b1.com_screen_6.webp',
				alt: 'b1 website contact page'
			},
		],
		description:
			'<p>Block.one is a software company specializing in high performance blockchain technologies.</p>' +
			'<p>The corporate website provides information about the company, its products and services.</p>'
	},
	{
		slug: 'voice',
		listName: 'voice.com',
		pageTitle: '<a href="https://voice.com" target="_blank" rel="noopener noreferrer" aria-label="View voice.com website">voice.com</a>',
		coverImage: '/images/portfolio/voice/voice-cover-image.webp',
		coverImageAlt: 'voice.com cover image',
		thumbnail: '/images/portfolio/voice/voice-thumb.webp',
		thumbnailAlt: 'voice.com thumbnail',
		infoBlocks: [
			{
				icon: 'feathericon-user',
				title: 'Client',
				content: 'Block.one'
			},
			{
				icon: 'icon-calendar',
				title: 'Date',
				content: '2021-04-01'
			}
		],
		images: [
			{
				src: '/images/portfolio/voice/voice.com_screen_1.webp',
				alt: 'Voice.com website'
			},
			{
				src: '/images/portfolio/voice/voice.com_screen_2.webp',
				alt: 'Voice.com website'
			},
			{
				src: '/images/portfolio/voice/voice.com_screen_3.webp',
				alt: 'Voice.com website'
			},
			{
				src: '/images/portfolio/voice/voice.com_screen_4.webp',
				alt: 'Voice.com website'
			},
			{
				src: '/images/portfolio/voice/voice.com_screen_5.webp',
				alt: 'Voice.com website'
			},
			{
				src: '/images/portfolio/voice/voice.com_screen_6.webp',
				alt: 'Voice.com website'
			},
			{
				src: '/images/portfolio/voice/voice.com_screen_7.webp',
				alt: 'Voice.com website'
			},
			{
				src: '/images/portfolio/voice/voice.com_screen_8.webp',
				alt: 'Voice.com website'
			},
		],
		description:
			'<p>Voice is a blockchain-based social media platform that redefines social media by putting control back into the hands of users. The website provides information about the platform and its features.</p>'
	}
];

// Fetch all projects for portfolio overview
export async function fetchAllProjects(): Promise<PortfolioProject[]> {
	// Here, you'd eventually replace mock data fetching with an API call
	return mockData;
}

// Fetch individual project data by slug
export function fetchProjectDataBySlug(slug: string): PortfolioProject | undefined {
	return mockData.find((project: PortfolioProject): boolean => project.slug === slug);
}
