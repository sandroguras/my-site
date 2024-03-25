import type { PageLoad } from './$types';
import { fetchProjectDataBySlug } from '$lib/data/portfolioData';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;

	const project = fetchProjectDataBySlug(slug);

	if (!project) {
		throw new Error('Invalid slug');
	}

	return { project };
};