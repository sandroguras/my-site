import type { PortfolioProject } from '#types/PortfolioProject';

const mockData: PortfolioProject[] = [
	{
		name: 'Bullish Exchange',
		slug: 'bullish-exchange',
		company: 'Bullish group',
		thumbnail: '/images/bullish-website.webp',
		thumbnailAlt: 'Bullish Exchange logo',
		date: '2021-07-01',
		images: [
			{
				src: '/images/bullish-website.webp',
				alt: 'Bullish Exchange website logo '
			}
		],
		description:
			'Bullish is a new cryptocurrency exchange platform that leverages the EOSIO blockchain technology. The website is built using modern web technologies and is optimized for performance and user experience.'
	},
	{
		name: 'EOSIO',
		slug: 'eosio',
		company: 'Block.one',
		thumbnail: '/images/eosio-website.webp',
		thumbnailAlt: 'EOSIO website logo',
		date: '2021-06-01',
		images: [
			{
				src: '/images/eosio-website.webp',
				alt: 'EOSIO website'
			}
		],
		description:
			'EOSIO is a blockchain protocol that enables horizontal scaling of decentralized applications, allowing developers to efficiently create high performance applications. The website provides information about the protocol and its features.'
	},
	{
		name: 'b1 Corporate',
		slug: 'b1-corporate-site',
		company: 'Block.one',
		thumbnail: '/images/b1-website.webp',
		thumbnailAlt: 'b1 website logo',
		date: '2021-05-01',
		images: [
			{
				src: '/images/b1-website.webp',
				alt: 'b1 Corporate website'
			}
		],
		description:
			'Block.one is a software company specializing in high performance blockchain technologies. The corporate website provides information about the company, its products and services.'
	},
	{
		name: 'Voice.com',
		slug: 'voice',
		company: 'Block.one',
		thumbnail: '/images/voice-website.webp',
		thumbnailAlt: 'Voice website logo',
		date: '2021-04-01',
		images: [
			{
				src: '/images/voice-website.webp',
				alt: 'Voice.com website'
			}
		],
		description:
			'Voice is a blockchain-based social media platform that redefines social media by putting control back into the hands of users. The website provides information about the platform and its features.'
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
