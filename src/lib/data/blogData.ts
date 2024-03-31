import type { BlogPost } from '#types/BlogPost';

const mockData: BlogPost[] = [
	{
		slug: 'bullish',
		listName: 'BULLISH.COM',
		pageTitle:
			'<a href="https://bullish.com" target="_blank" rel="noopener noreferrer" aria-label="View bullish.com website">BULLISH.COM</a>',
		coverImage: '/images/portfolio/bullish/bullish-cover-image.webp',
		coverImageAlt: 'bullish.com cover image',
		thumbnail: '/images/portfolio/bullish/bullish-thumb.webp',
		thumbnailAlt: 'bullish.com thumbnail',
		category: 'AI',
	  date: '2024-03-30',
		excerpt: 'Developing a marketing platform for a cryptocurrency exchange',
		copy:
			'<p>The <a href="https://bullish.com" target="_blank" rel="noopener noreferrer" aria-label="View bullish.com website">BULLISH.COM</a> website project was focused on developing a marketing platform for a cryptocurrency exchange. As the web director, I spearheaded the project from its inception, taking charge of the architecture planning and initial code layout. The initial phase began with a simple content management system (CMS), which I helped scale into a more comprehensive web multi-system to meet the specialized needs of marketing a crypto exchange. I worked closely with the team to design a flexible system that allowed the marketing team to swiftly adapt content, launch new campaigns, and introduce pages that could engage and inform users about the exchange\'s features and benefits. This level of adaptability was crucial for staying competitive in the fast-paced world of cryptocurrency trading.</p>\n' +
			'\n' +
			'<p>In my role as the project lead, I oversaw a team of six developers located in different regions. This setup presented unique challenges in terms of coordination and maintaining a cohesive workflow. Our key objectives were ensuring timely delivery, managing stakeholder expectations, and driving the development process forward while adhering to high coding standards. To meet these goals, I focused on efficient project management practices, such as using Jira for task tracking and fostering a culture of regular code reviews to maintain code quality and facilitate feature development.</p>\n' +
			'\n' +
			'<p>The security aspect of the site was particularly important, given the sensitive nature of the financial information and transactions associated with a crypto exchange. From the early stages of architecture planning, I prioritized the implementation of stringent security protocols, balancing these with the need for a high-performing website. This required a thoughtful approach to coding practices and a commitment to continuous testing and improvement. The project was not just about building a marketing site; it was about creating a secure, efficient platform that could effectively promote the crypto exchange and build trust with its users. Through teamwork and a commitment to best practices, we developed a site that not only met but exceeded these objectives.</p>',
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
		]
	}
];

// Fetch all projects for portfolio overview
export async function fetchAllPosts(): Promise<BlogPost[]> {
	// TODO: replace mock data fetching with an API call
	return mockData;
}

// Fetch individual project data by slug
export function fetchBlogDataBySlug(slug: string): BlogPost | undefined {
	return mockData.find((project: BlogPost): boolean => project.slug === slug);
}
