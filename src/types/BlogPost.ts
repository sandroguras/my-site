import type { Image } from '#types/Image';

interface TextBlock {
	type: 'text';
	subheading?: string;
	copy: string;
}

interface ImageBlock {
	type: 'image';
	images: Image[];
	imageCaption?: string;
}

interface QuoteBlock {
	type: 'quote';
	copy: string;
	author: string;
}

interface CodeBlock {
	type: 'code';
	language: string;
	code: string;
	filename?: string;        // Optional filename for the code snippet
	highlights?: number[];    // Optional line numbers to highlight
}

type ContentBlock = TextBlock | ImageBlock | QuoteBlock | CodeBlock;

export interface BlogPost {
	slug: string;
	listName: string;
	title: string;
	subtitle: string;
	cover: Image;
	thumb: Image;
	category: string;
	date: string;
	excerpt: string;
	content: ContentBlock[];
}
