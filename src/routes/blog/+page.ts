import type { PageLoad } from './$types';
import { fetchAllPosts } from '$lib/data/blogData';

export const load: PageLoad = async () => {
	const allPosts = (await fetchAllPosts()) || [];

	// Map the full project objects to only include the properties needed by the component
	const posts = allPosts.map(
		({ slug, listName, thumbnail, thumbnailAlt, category, date, excerpt }) => ({
			slug,
			listName,
			thumbnail,
			thumbnailAlt,
			category,
			date,
			excerpt
		})
	);

	return { posts };
};
