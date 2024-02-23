export interface Introduction {
	copy: string;
}

export interface Testimonials {
	swiperId: string;
	heading: string;
	breakpoints: Breakpoints;
	slider: ReviewData[] | ClientData[];
}

interface Options {
	slidesPerView: number;
	spaceBetween?: number;
}

interface Breakpoints {
	[key: number]: Options;
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

export interface Timeline {
	heading: string;
	events: Event[];
}
