<script lang="ts">
	//TODO need to improve wording and test out the meta tags
	import { page } from '$app/stores';

	$: siteURL = String($page.url);

	const title: string = 'David Guras | Precision Web Engineering';
	const description: string = 'David Guras, a Web Director, leads in crafting advanced web solutions and applications. Known for precision and team leadership, he delivers fast, responsive, and accessible projects on a large scale.';
</script>

<!-- Various meta tags and link elements -->
<title>{title}</title>
<meta name="description" content={description} />

<!-- OpenGraph meta tags -->
<meta property="og:title" content={title} />
<meta property="og:type" content="website" />
<meta property="og:image" content={`${siteURL}/opengraph.png`} />
<meta property="og:url" content={siteURL} />
<meta property="og:description" content={description} />


<!-- Twitter Card meta tags -->
<meta property="twitter:url" content={siteURL} />
<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={description} />
<meta property="twitter:image" content={`${siteURL}/opengraph.png`} />