// src/routes/sitemap.xml.ts

import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ request }) => {
	const protocol = 'https';
	const host = request.headers.get('host') || 'davidguras.dev';

	// List of paths for website
	const pages = [
		'/',
		'/about',
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
