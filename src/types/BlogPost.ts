interface TextBlock {
	type: 'text';
	subheading?: string;
	content: string;
}

interface ImageBlock {
	type: 'image';
	images: {
		src: string;
		alt: string;
	}[];
	imageCaption?: string;
}

interface QuoteBlock {
	type: 'quote';
	content: string;
	author: string;
}

type ContentBlock = TextBlock | ImageBlock | QuoteBlock;

export interface BlogPost {
	slug: string;
	listName: string;
	title: string;
	subtitle: string;
	coverImg: string;
	coverAlt: string;
	category: string;
	date: string;
	excerpt: string;
	content: ContentBlock[];
}
