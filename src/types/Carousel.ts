export interface Carousel {
	swiperId: string;
	heading: string;
	breakpoints: Breakpoints;
	slider: ReviewData[] | ClientData[];
}

interface Breakpoints {
	[key: number]: Options;
}

interface Options {
	slidesPerView: number | 'auto';
	spaceBetween?: number;
}

export interface ReviewData {
	name: string;
	image: string;
	imageWidth: number;
	imageHeight: number;
	imageAlt: string;
	shortCopy: string;
	copy: string;
	reviewDate: string;
}

export interface ClientData {
	link: string;
	logo: string;
	logoAlt: string;
}

export interface GalleryData {
	src: string;
	alt: string;
	thumb: string;
}
