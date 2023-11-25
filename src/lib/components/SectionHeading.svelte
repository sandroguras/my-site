<script lang="ts">
	import { page } from '$app/stores';
	let sectionHeading: string;
	$: {
		const url = $page.url.pathname;
		switch (url) {
			case '/':
				sectionHeading = 'About Me';
				break;
			case '/resume':
				sectionHeading = 'Resume';
				break;
			case '/portfolio':
				sectionHeading = 'Portfolio';
				break;
			case '/blog':
				sectionHeading = 'Blog';
				break;
			case '/contact':
				sectionHeading = 'Contact Me';
				break;
			// Add more cases as needed
			default:
				sectionHeading = '';
		}
	}
</script>

<div class="pb-3">
	<h1 class="title title--h1 title__separate">{sectionHeading}</h1>
</div>
