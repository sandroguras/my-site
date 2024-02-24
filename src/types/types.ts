export interface Expertise {
	heading: string;
	expertiseCases: ExpertiseCase[];
}

export interface ExpertiseCase {
	name: string;
	icon: string;
	iconAlt?: string;
	description: string; // Renamed from copy
}

export interface Testimonials {
	swiperId: string;
	heading: string;
	breakpoints: Breakpoint;
	slider: ReviewData[] | ClientData[];
}

interface Options {
	slidesPerView: number;
	spaceBetween?: number;
}

interface Breakpoint {
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
