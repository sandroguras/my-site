<script lang="ts">
	//TODO need to improve wording and test out the meta tags
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import { getBlogPostMetadata } from '$lib/data/blogData';


	const siteURL = 'https://davidguras.dev/';

	const defaultTitle: string = 'David Guras | Precision Web Engineering';
	const defaultSiteName: string = 'David Guras';
	const defaultDescription: string = 'David Guras: Expert Web Director, crafting large-scale, precise solutions. Ensures fast, responsive, accessible projects with unmatched quality.';
	const defaultImage = `${siteURL}images/opengraphs/default-og.jpg`;

	const defaultArticleAuthor: string = 'David Guras';
	const defaultArticleSection: string = 'Web Development';
	const defaultArticleTag: string = 'Web Development, Programming, Technology';

	const metadata = derived(page, $page => {
		switch ($page.url.pathname) {
			case '/resume':
				return {
					title: 'David Guras | My Resume',
					description: 'Discover the professional journey of David Guras. From innovative projects to technical expertise, explore a resume that showcases a commitment to excellence.',
					image: `${siteURL}images/opengraphs/resume-og.jpg`
				};
			case '/portfolio':
				return {
					title: 'David Guras | Portfolio',
					description: 'Explore the portfolio of David Guras, where each project is a testament to innovation, skill, and dedication in the field of web development and design.',
					image: `${siteURL}images/opengraphs/portfolio-og.jpg`
				};
			case '/blog':
				return {
					title: 'David Guras | Blog',
					description: 'Explore David Guras\'s insights into web development. Dive deep into trends, tips, and personal reflections in a blog crafted for the web professionals.',
					image: `${siteURL}images/opengraphs/blog-og.jpg`
				};
			case '/contact':
				return {
					title: 'David Guras | Contact Me',
					description: 'Interested in collaboration or have questions? Connect with David Guras to transform your ideas into unique and impactful web development solutions. Contact now!',
					image: `${siteURL}images/opengraphs/contact-og.jpg`
				};
			default:
				// Check if the current page is a blog post
				if ($page.url.pathname.startsWith('/blog/')) {
					// Extract the slug from the URL path
					const slug = $page.url.pathname.split('/').pop();

					// Check if slug is defined before calling getBlogPostMetadata
					if (slug) {
						// Get the metadata for the specific blog post
						const blogPostMetadata = getBlogPostMetadata(slug, siteURL);
						return {
							title: blogPostMetadata.title,
							description: blogPostMetadata.description,
							image: blogPostMetadata.image,
							articleAuthor: blogPostMetadata.articleAuthor,
							articlePublishedTime: blogPostMetadata.articlePublishedTime,
							articleSection: blogPostMetadata.articleSection,
							articleTag: blogPostMetadata.articleTag
						};
					} else {
						// Fallback metadata for blog posts with invalid slugs
						return {
							title: 'David Guras | Blog Post',
							description: 'Read David Guras\'s latest blog post, offering valuable insights and expert opinions on the latest trends and techniques in web development.',
							image: `${siteURL}images/opengraphs/blog-post-og.jpg`,
							articleAuthor: defaultArticleAuthor,
							articlePublishedTime: new Date().toISOString(),
							articleSection: defaultArticleSection,
							articleTag: defaultArticleTag
						};
					}
				} else {
					return {
						title: defaultTitle,
						description: defaultDescription,
						image: defaultImage,
						articleAuthor: defaultArticleAuthor,
						articlePublishedTime: new Date().toISOString(),
						articleSection: defaultArticleSection,
						articleTag: defaultArticleTag
					};
				}
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
<meta property="og:site_name" content={defaultSiteName} />
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

<!-- LinkedIn-specific Open Graph tags -->
<meta property="og:type" content="article" />
<meta property="article:author" content={$metadata.articleAuthor} />
<meta property="article:published_time" content={$metadata.articlePublishedTime} />
<meta property="article:section" content={$metadata.articleSection} />
<meta property="article:tag" content={$metadata.articleTag} />