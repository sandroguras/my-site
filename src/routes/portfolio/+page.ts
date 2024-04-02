import type { PageLoad } from './$types';
import { fetchAllProjects } from '$lib/data/portfolioData';

export const load: PageLoad = async () => {
	const allProjects = (await fetchAllProjects()) || [];

	// Map the full project objects to only include the properties needed by the component
	const projects = allProjects.map(({ slug, listName, thumb }) => ({
		slug,
		listName,
		thumb
	}));

	return { projects };
};
