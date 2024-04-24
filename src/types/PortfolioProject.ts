import type { Image } from './Image';

interface ImageDetails {
	alt: string;
	src: string;
	thumb: string;
}

export interface InfoBlock {
	icon: string;
	title: string;
	content: string;
}

export interface PortfolioProject {
	slug: string;
	listName: string;
	pageTitle: string;
	cover: Image;
	thumb: Image;
	infoBlocks: InfoBlock[];
	images: ImageDetails[];
	description: string;
}