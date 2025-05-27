import type { RequestHandler } from '@sveltejs/kit';

/**
 * Handles the GET request and generates an XML sitemap for the website.
 * @param {Object} param - The parameter object.
 * @param {Request} param.request - The request object.
 * @returns {Response} - The response object containing the XML sitemap.
 */
export const GET: RequestHandler = async ({ request }: { request: Request }): Promise<Response> => {
	try {
		const protocol = import.meta.env.VITE_SITE_PROTOCOL || 'https';
		const host = request.headers.get('host') || import.meta.env.VITE_SITE_HOST || 'davidguras.dev';

		// ToDo Fetch paths dynamically
		//const dynamicPages = [];
		const pages: string[] = [
			'/',
			'/resume',
			'/portfolio',
			'/portfolio/bullish',
			'/portfolio/eosio',
			'/portfolio/blockone',
			'/portfolio/voice',
			'/blog',
			'/blog/sveltekit-installation-tutorial',
			'/contact'
		];

		const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) =>
			`<url>
  <loc>${protocol}://${host}${page}</loc>
  <changefreq>weekly</changefreq>
  <priority>0.7</priority>
</url>`
	)
	.join('\n')}
</urlset>`;

		return new Response(xmlContent, {
			headers: {
				'Content-Type': 'application/xml',
				'Cache-Control': 'public, max-age=86400' // Adjust caching as needed
			}
		});
	} catch (error) {
		console.error('Error generating sitemap:', error);
		// Return a basic error
		return new Response('Internal Server Error', { status: 500 });
	}
};
