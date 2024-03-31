interface ImageDetails {
	alt: string;
	src: string;
}

export interface BlogPost {
	slug: string;
	listName: string;
	fullName: string;
	coverImage: string;
	coverImageAlt: string;
	thumbnail: string;
	thumbnailAlt: string;
	category: string;
	date: string;
	excerpt: string;
	subheading: string;
	copy: string;
	images: ImageDetails[];
}
