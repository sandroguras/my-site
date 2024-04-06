import type { PortfolioProject } from '#types/PortfolioProject';

const mockData: PortfolioProject[] = [
	{
		slug: 'bullish',
		listName: 'BULLISH.COM',
		pageTitle:
			'<a href="https://bullish.com" target="_blank" rel="noopener noreferrer" aria-label="View bullish.com website">BULLISH.COM</a>',
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
		description:
			'<p>The <a href="https://bullish.com" target="_blank" rel="noopener noreferrer" aria-label="View bullish.com website">BULLISH.COM</a> website project was focused on developing a marketing platform for a cryptocurrency exchange. As the lead web developer, I spearheaded the project from its inception, taking charge of the architecture planning and initial code layout. The initial phase began with a simple content management system (CMS), which I helped scale into a more comprehensive web multi-system to meet the specialized needs of marketing a crypto exchange. I worked closely with the team to design a flexible system that allowed the marketing team to swiftly adapt content, launch new campaigns, and introduce pages that could engage and inform users about the exchange\'s features and benefits. This level of adaptability was crucial for staying competitive in the fast-paced world of cryptocurrency trading.</p>\n' +
			'\n' +
			'<p>I oversaw a team of six developers located in different regions. This setup presented unique challenges in terms of coordination and maintaining a cohesive workflow. Our key objectives were ensuring timely delivery, managing stakeholder expectations, and driving the development process forward while adhering to high coding standards. To meet these goals, I focused on efficient project management practices, such as using Jira for task tracking and fostering a culture of regular code reviews to maintain code quality and facilitate feature development.</p>\n' +
			'\n' +
			'<p>The security aspect of the site was particularly important, given the sensitive nature of the financial information and transactions associated with a crypto exchange. From the early stages of architecture planning, I prioritized the implementation of stringent security protocols, balancing these with the need for a high-performing website. This required a thoughtful approach to coding practices and a commitment to continuous testing and improvement. The project was not just about building a marketing site; it was about creating a secure, efficient platform that could effectively promote the crypto exchange and build trust with its users. Through teamwork and a commitment to best practices, we developed a site that not only met but exceeded these objectives.</p>'
	},
	{
		slug: 'eosio',
		listName: 'EOS.IO',
		pageTitle:
			'<a href="https://eos.io" target="_blank" rel="noopener noreferrer" aria-label="View eosio website">EOS.IO</a>',
		coverImage: '/images/portfolio/eosio/eosio-cover-image.webp',
		coverImageAlt: 'EOS.IO cover image',
		thumbnail: '/images/portfolio/eosio/eosio-thumb.webp',
		thumbnailAlt: 'EOS.IO thumbnail',
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
			'<p>As the lead web developer for the <a href="https://EOS.IO" target="_blank" rel="noopener noreferrer" aria-label="View eosio website">EOS.IO</a> website project, I oversaw the site\'s development and evolution throughout its lifecycle. The project aimed to create a robust marketing platform for the cutting-edge EOS blockchain, supporting enterprise-grade use cases and both public and private deployments.</p>\n' +
			'\n' +
			"<p>I led the team through three significant visual iterations, each optimizing user experience and aligning with the platform's evolving needs. We diligently supported ongoing marketing campaigns and site extensions to maintain competitiveness in the rapidly advancing blockchain technology world.</p>\n" +
			'\n' +
			'<p>Key features I directed included a powerful section constructor system, enabling swift scaffolding of new pages, and a 3-stage deployment system that allowed seamless deployments and staging of information, decreasing deploy speeds to mere seconds. These features ensured the site remained responsive and nimble in delivering pertinent content.</p>\n' +
			'\n' +
			"<p>Given the blockchain industry's delicate nature, security was paramount. I prioritized maintaining a robust security framework, implementing rigorous measures and conducting regular audits. We collaborated closely with the EOS.IO security team to ensure the highest standards of data protection and user privacy.</p>\n" +
			'\n' +
			'<p>The <a href="https://EOS.IO" target="_blank" rel="noopener noreferrer" aria-label="View eosio website">EOS.IO</a> website project demonstrated my ability to lead a team in delivering a high-performing, secure, and user-centric platform. By combining technical expertise with strong leadership skills, I successfully navigated complexities and delivered a website that effectively promoted the EOS.IO blockchain platform, positioning it as an industry leader.</p>'
	},
	{
		slug: 'blockone',
		listName: 'BLOCK.ONE',
		pageTitle:
			'<a href="https://b1.com" target="_blank" rel="noopener noreferrer" aria-label="View block.one website">BLOCK.ONE</a>',
		coverImage: '/images/portfolio/b1/b1-cover-image.webp',
		coverImageAlt: 'BLOCK.ONE cover image',
		thumbnail: '/images/portfolio/b1/b1-thumb.webp',
		thumbnailAlt: 'BLOCK.ONE thumbnail',
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
			}
		],
		description:
			'<p>As the laed web developer for the <a href="https://b1.com" target="_blank" rel="noopener noreferrer" aria-label="View BLOCK.ONE website">B1.COM</a> website project, I oversaw the site\'s development and managed two visual iterations. I implemented a 3-stage deployment system that enabled continuous development and rapid deployments.</p>\n' +
			'\n' +
			"<p>In the site's current iteration, I led a team that delivered the final product in just three days, collaborating with two outsourced agencies. This swift turnaround showcased my ability to effectively manage resources and maintain a high pace of development without compromising quality.</p>\n" +
			'\n' +
			"<p>Throughout the project, I provided ongoing support and maintenance to ensure the site's optimal performance and user experience. By combining my technical expertise with strong project management skills, I successfully delivered a website that met the client's requirements and positioned B1.com for success in its industry.</p>"
	},
	{
		slug: 'voice',
		listName: 'VOICE.COM',
		pageTitle:
			'<a href="https://voice.com" target="_blank" rel="noopener noreferrer" aria-label="View voice.com website">VOICE.COM</a>',
		coverImage: '/images/portfolio/voice/voice-cover-image.webp',
		coverImageAlt: 'VOICE.COM cover image',
		thumbnail: '/images/portfolio/voice/voice-thumb.webp',
		thumbnailAlt: 'VOICE.COM thumbnail',
		infoBlocks: [
			{
				icon: 'feathericon-user',
				title: 'Client',
				content: 'Block.one'
			},
			{
				icon: 'icon-calendar',
				title: 'Date',
				content: '2020-01-02'
			}
		],
		images: [
			{
				src: '/images/portfolio/voice/voice.com_screen_1.webp',
				alt: 'Voice.com beta subscription landing page'
			},
			{
				src: '/images/portfolio/voice/voice.com_screen_2.webp',
				alt: 'Voice.com beta subscription landing page Now the fun part section'
			},
			{
				src: '/images/portfolio/voice/voice.com_screen_3.webp',
				alt: 'Voice.com beta subscription landing page You pocket the reward section'
			},
			{
				src: '/images/portfolio/voice/voice.com_screen_4.webp',
				alt: 'Voice.com beta subscription landing page Collect you Voice section'
			},
			{
				src: '/images/portfolio/voice/voice.com_screen_5.webp',
				alt: 'Voice.com beta subscription Get posting page'
			},
			{
				src: '/images/portfolio/voice/voice.com_screen_6.webp',
				alt: 'Voice.com beta subscription Get to Know Voice page'
			},
			{
				src: '/images/portfolio/voice/voice.com_screen_7.webp',
				alt: 'Voice.com beta subscription Blog page'
			},
			{
				src: '/images/portfolio/voice/voice.com_screen_8.webp',
				alt: 'Voice.com beta subscription Blog page'
			}
		],
		description:
			'<p>As the web developer for the <a href="https://voice.com" target="_blank" rel="noopener noreferrer" aria-label="View VOICE.COM website">VOICE.COM</a> beta subscription website project, I oversaw the development and maintenance of the site.</p>\n' +
			'\n' +
			'<p>Throughout the project, I focused on ensuring the site\'s optimal performance, security, and user experience. I worked closely with the BLOCKONE\'s marketing team to implement necessary updates and enhancements to keep the website running smoothly.</p>\n' +
			'\n' +
			'<p>By leveraging my technical expertise and project management skills, I successfully delivered a stable and user-friendly website that supported product\'s online presence and goals. My role in the project demonstrated my ability to maintain and optimize a website to ensure its continued success.</p>'
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
