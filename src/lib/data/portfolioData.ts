import type { PortfolioProject } from '#types/PortfolioProject';

const mockData: PortfolioProject[] = [
	{
		slug: 'bullish-exchange',
		listName: 'bullish.com',
		pageTitle: '<a href="https://bullish.com" target="_blank" rel="noopener noreferrer" aria-label="View Bullish Exchange website">bullish.com</a>',
		coverImage: '/images/portfolio/bullish/bullish-cover-image.webp',
		coverImageAlt: 'Bullish Exchange website',
		thumbnail: '/images/portfolio/bullish/bullish-thumb.webp',
		thumbnailAlt: 'Bullish Exchange logo',
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
		description:
			'<p>Bullish is a new cryptocurrency exchange platform that leverages the EOSIO blockchain technology.</p>' +
			'<p>The website is built using modern web technologies and is optimized for performance and user experience.</p>'
	},
	{
		slug: 'eosio',
		listName: 'eos.io',
		pageTitle: '<a href="https://eos.io" target="_blank" rel="noopener noreferrer" aria-label="View EOSIO website">eos.io</a>',
		coverImage: '/images/portfolio/eosio/eos.io_screen_1.webp',
		coverImageAlt: 'EOSIO website',
		thumbnail: '/images/portfolio/eosio/eosio-thumb.webp',
		thumbnailAlt: 'EOSIO website logo',
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
		slug: 'b1',
		listName: 'b1.com',
		pageTitle: '<a href="https://b1.com" target="_blank" rel="noopener noreferrer" aria-label="View EOSIO website">b1.com</a>',
		coverImage: '/images/portfolio/b1/b1-cover-image.webp',
		coverImageAlt: 'Block.one corporate website',
		thumbnail: '/images/portfolio/b1/b1-thumb.webp',
		thumbnailAlt: 'b1 website logo',
		infoBlocks: [
			{
				icon: 'feathericon-user',
				title: 'Client',
				content: 'Block.one'
			},
			{
				icon: 'icon-calendar',
				title: 'Date',
				content: '2021-05-01'
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
		listName: 'Voice.com',
		pageTitle: 'Voice.com | Portfolio | Web Development | Web Design',
		coverImage: '/images/voice-website.webp',
		coverImageAlt: 'Voice.com Website',
		thumbnail: '/images/voice-website.webp',
		thumbnailAlt: 'Voice website logo',
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
				src: '/images/voice-website.webp',
				alt: 'Voice.com website'
			},
			{
				src: '/images/voice-website.webp',
				alt: 'Voice.com website'
			},
			{
				src: '/images/voice-website.webp',
				alt: 'Voice.com website'
			}
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
