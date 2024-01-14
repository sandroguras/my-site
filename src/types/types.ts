export interface Introduction {
	copy: string;
}

export interface Expertise {
	sectionHeading: string;
	caseItems: CaseItem[];
}

export interface CaseItem {
	name: string;
	icon: string;
	icon_alt: string;
	copy: string;
}

export interface ReviewData {
	name: string;
	image: string;
	image_alt: string;
	short_copy: string;
	copy: string;
	review_date: string;
}

export interface Client {
	link: string;
	logo: string;
	logo_alt: string;
}