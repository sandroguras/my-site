import type { PageLoad } from './$types';
import { fetchBlogDataBySlug } from '$lib/data/blogData';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;

	const post = fetchBlogDataBySlug(slug);

	if (!post) {
		throw new Error('Invalid slug');
	}

	return { post };
};