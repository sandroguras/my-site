export interface Testimonials {
	swiperId: string;
	heading: string;
	breakpoints: Breakpoints;
	slider: ReviewData[] | ClientData[];
}

interface Breakpoints {
	[key: number]: Options;
}

interface Options {
	slidesPerView: number;
	spaceBetween?: number;
}

export interface ReviewData {
	name: string;
	image: string;
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
