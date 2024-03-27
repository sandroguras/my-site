import type { RequestHandler } from '@sveltejs/kit';

/**
 * Handles the GET request and generates an XML sitemap for the website.
 * @param {Object} param - The parameter object.
 * @param {Request} param.request - The request object.
 * @returns {Response} - The response object containing the XML sitemap.
 */
export const GET: RequestHandler = async ({ request }) => {
	const protocol = 'https';
	const host = request.headers.get('host') || 'davidguras.dev';

	// List of paths for website
	const pages: string[] = [
		'/',
		'/resume',
		'/portfolio',
		'/contact'
		// Add more page paths as needed
	];

	// Generate the XML content
	const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
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
			'Content-Type': 'application/xml'
		}
	});
};
