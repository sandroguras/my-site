export interface Timeline {
	heading: string;
	logo: string;
	events: TimelineEvent[];
}

export interface TimelineEvent {
	id: number;
	institution: string;
	position: string;
	period: string;
	description: string;
}
