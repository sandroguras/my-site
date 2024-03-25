interface ImageDetails {
	alt: string;
	src: string;
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
	coverImage: string;
	coverImageAlt: string;
	thumbnail: string;
	thumbnailAlt: string;
	infoBlocks: InfoBlock[];
	images: ImageDetails[];
	description: string;
}
