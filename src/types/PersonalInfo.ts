export interface Social {
	icon: string;
	link: string;
	target: string;
	ariaLabel: string;
}
export interface PersonalInfo {
	name: string;
	role: string;
	socials: Social[];
}