import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const slugs: string[] = ['bullish-exchange-website', 'eosio-website', 'b1-website', 'voice-website'];

	const { slug } = params;

	if (!slugs.includes(slug)) {
		throw new Error('Invalid slug');
	}

	return {};
};