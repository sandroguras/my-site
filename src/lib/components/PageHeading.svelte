<script lang="ts">
	import { page } from '$app/stores';
	let pageHeading: string;
	$: {
		const url = $page.url.pathname;
		switch (url) {
			case '/':
				pageHeading = 'About Me';
				break;
			case '/resume':
				pageHeading = 'Resume';
				break;
			case '/portfolio':
				pageHeading = 'Portfolio';
				break;
			case '/blog':
				pageHeading = 'Blog';
				break;
			case '/contact':
				pageHeading = 'Contact Me';
				break;
			// Add more cases as needed
			default:
				pageHeading = '';
		}
	}
</script>

<div class="pb-3">
	<h1 class="title title--h1 title__separate">{pageHeading}</h1>
</div>
