<script lang="ts">
	//TODO need to improve wording and test out the meta tags
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';


	const siteURL = "https://davidguras.dev/";

	const defaultTitle: string = 'David Guras | Precision Web Engineering';
	const defatulSiteName: string = 'David Guras';
	const defaultDescription: string = 'David Guras: Expert Web Director, crafting large-scale, precise solutions. Ensures fast, responsive, accessible projects with unmatched quality.';
	const defaultImage = `${siteURL}images/opengraphs/default-og.jpg`;

	const metadata = derived(page, $page => {
		switch ($page.url.pathname) {
			case '/resume':
				return {
					title: 'David Guras | My Resume',
					description: 'View my professional resume and career accomplishments.',
					image: `${siteURL}images/opengraphs/resume-og.jpg`
				};
			case '/portfolio':
				return {
					title: 'David Guras | Portfolio',
					description: 'Explore my portfolio of web development projects.',
					image: `${siteURL}images/opengraphs/portfolio-og.jpg`
				};
			case '/blog':
				return {
					title: 'David Guras | Blog',
					description: 'Dive into the latest trends, tips, and personal insights in web development and engineering. Stay updated with David Guras\'s blog.',
					image: `${siteURL}images/opengraphs/blog-og.jpg`
				};
			case '/contact':
				return {
					title: 'David Guras | Contact Me',
					description: 'Have questions, project ideas, or want to say hello? Don’t hesitate to get in touch. I’m always here to discuss new opportunities and collaborations.',
					image: `${siteURL}images/opengraphs/blog-og.jpg`
				};
			default:
				return {
					title: defaultTitle,
					description: defaultDescription,
					image: defaultImage
				};
		}
	});
</script>

<!-- Various meta tags and link elements -->
<title>{$metadata.title}</title>
<meta name="description" content={$metadata.description} />

<!-- OpenGraph meta tags -->
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:url" content={siteURL} />
<meta property="og:title" content={$metadata.title} />
<meta property="og:site_name" content={defatulSiteName} />
<meta property="og:description" content={$metadata.description} />
<meta property="og:image" content={$metadata.image} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<link rel="canonical" href="{$page.url.href}" />


<!-- Twitter Card meta tags -->
<!--<meta property="twitter:url" content={siteURL} />-->
<!--<meta property="twitter:title" content={title} />-->
<!--<meta property="twitter:description" content={description} />-->
<!--<meta property="twitter:image" content={`${siteURL}/opengraph.jpg`} />-->
<meta name="twitter:card" content="summary_large_image" />