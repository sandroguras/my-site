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
