interface ImageDetails {
	alt: string;
	src: string;
}

export interface PortfolioProject {
	slug: string;
	name: string;
	company: string;
	thumbnail: string;
	thumbnailAlt: string;
	date: string;
	images: ImageDetails[];
	description: string;
}
