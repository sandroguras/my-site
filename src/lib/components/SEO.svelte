<script lang="ts">
	//TODO need to improve wording and test out the meta tags
	import { page } from '$app/stores';

	const siteURL = "https://davidguras.dev";

	const title: string = 'David Guras | Precision Web Engineering';
	const description: string = 'David Guras: Expert Web Director, crafting large-scale, precise solutions. Ensures fast, responsive, accessible projects with unmatched quality.';
</script>

<!-- Various meta tags and link elements -->
<title>{title}</title>
<meta name="description" content={description} />

<!-- OpenGraph meta tags -->
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={siteURL} />
<meta property="og:type" content="website" />
<meta property="og:image" content={`${siteURL}/opengraph.jpg`} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="en_US" />
<meta property="og:site_name" content={title} />
<link rel="canonical" href="{$page.url.href}" />


<!-- Twitter Card meta tags -->
<!--<meta property="twitter:url" content={siteURL} />-->
<!--<meta property="twitter:title" content={title} />-->
<!--<meta property="twitter:description" content={description} />-->
<!--<meta property="twitter:image" content={`${siteURL}/opengraph.jpg`} />-->
<meta name="twitter:card" content="summary_large_image" />