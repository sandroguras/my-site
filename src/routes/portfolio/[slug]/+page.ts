import type { PageLoad } from './$types';
import { fetchBlogDataBySlug } from '$lib/data/portfolioData';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;

	const project = fetchBlogDataBySlug(slug);

	if (!project) {
		throw new Error('Invalid slug');
	}

	return { project };
};