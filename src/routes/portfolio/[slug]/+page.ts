import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const slugs: string[] = ['bullish-exchange', 'eosio', 'b1-corporate', 'voice'];

	const { slug } = params;

	if (!slugs.includes(slug)) {
		throw new Error('Invalid slug');
	}

	return {};
};