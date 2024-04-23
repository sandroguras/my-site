import type { BlogPost } from '#types/BlogPost';

const mockData: BlogPost[] = [
	{
		slug: 'bullish',
		listName: 'BULLISH.COM',
		title: 'Web Design Weekly #38',
		subtitle:
			'Above all, think of life as a prototype. We can conduct experiments, make discoveries, and change our perspectives. We can look for opportunities to turn processes into projects that have tangible outcomes.',
		cover: {
			src: '/images/portfolio/bullish/bullish-cover-image.webp',
			alt: 'bullish.com cover image'
		},
		thumb: { src: '/images/portfolio/bullish/bullish-thumb.webp', alt: 'bullish.com thumbnail' },
		category: 'AI',
		date: '2024-03-30',
		excerpt: 'Developing a marketing platform for a cryptocurrency exchange',
		content: [
			{
				type: 'text',
				copy:
					'<p>We can learn how to take joy in the things we create whether they take the form of a fleeting experience or an heirloom that will last for generations. We can learn that reward comes in creation and re-creation.</p>\n' +
					'\n' +
					'<p>It is not enough that we build products that function, that are understandable and usable, we also need to build products that bring joy and excitement, pleasure and fun, and, yes, beauty to people’s lives. Creativity is to discover a question that has never been asked.</p>'
			},
			{
				type: 'image',
				images: [
					{
						src: '/images/portfolio/bullish/bullish.com_screen_1.webp',
						alt: 'Bullish website landing page hero section'
					},
					{
						src: '/images/portfolio/bullish/bullish.com_screen_2.webp',
						alt: 'Bullish website spot trading section'
					}
				],
				imageCaption: 'Bullish.com website screens'
			},
			{
				type: 'text',
				subheading:
					'If you’re not prepared to be wrong, you’ll never come up with anything original.',
				copy:
					'<p>Here is one of the few effective keys to the design problem: the ability of the designer to recognize as many of the constraints as possible his willingness and enthusiasm for working within these constraints. The most profound technologies are those that disappear. They weave themselves into the fabric of everyday life until they are indistinguishable from it.</p>'
			},
			{
				type: 'quote',
				copy:
					'<p>If you’re not prepared to be wrong, you’ll never come up with anything original.</p>',
				author: 'Ken Robinson'
			},
			{
				type: 'code',
				language: 'typescript',
				code: "interface User {\n" +
					"  name: string;\n" +
					"  id: number;\n" +
					"}\n" +
					" \n" +
					"class UserAccount {\n" +
					"  name: string;\n" +
					"  id: number;\n" +
					" \n" +
					"  constructor(name: string, id: number) {\n" +
					"    this.name = name;\n" +
					"    this.id = id;\n" +
					"  }\n" +
					"}\n" +
					" \n" +
					"const user: User = new UserAccount(\"Murphy\", 1);"
			},
			{
				type: 'text',
				copy:
					'<p>Above all, think of life as a prototype. We can conduct experiments, make discoveries, and change our perspectives. We can look for opportunities to turn processes into projects that have tangible outcomes.</p>\n' +
					'\n' +
					'<p>We can learn how to take joy in the things we create whether they take the form of a fleeting experience or an heirloom that will last for generations. We can learn that reward comes in creation and re-creation, no just in the consumption of the world around us. Active participation in the process of creation is our right and our privilege. We can learn to measure the success of our ideas not by our bank accounts by their impact on the world.</p>'
			},
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
