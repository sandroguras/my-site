interface ImageDetails {
	alt: string;
	src: string;
}

export interface BlogPost {
	slug: string;
	listName: string;
	pageTitle: string;
	coverImage: string;
	coverImageAlt: string;
	thumbnail: string;
	thumbnailAlt: string;
	category: string;
	date: string;
	excerpt: string;
	copy: string;
	images: ImageDetails[];
}
