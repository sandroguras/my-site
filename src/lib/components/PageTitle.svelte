<script lang="ts">
	import { page } from '$app/stores';

	let pageTitle: string;
	$: {
		const rawUrl = $page.url.pathname;
		const url = extractFirstPart(rawUrl);
		switch (url) {
			case '/':
				pageTitle = 'About Me';
				break;
			case '/resume':
				pageTitle = 'Resume';
				break;
			case '/portfolio':
				pageTitle = 'Portfolio';
				break;
			case '/blog':
				pageTitle = 'Blog';
				break;
			case '/contact':
				pageTitle = 'Contact Me';
				break;
			// Add more cases as needed
			default:
				pageTitle = '';
		}
	}

	function extractFirstPart(url: string): string {
		const urlWithoutProtocol = url.replace(/^(https?:\/\/)?/, '');

		const parts = urlWithoutProtocol.split('/', 2);

		// If there's no path after the domain, return '/'
		if (parts.length === 1) {
			return '/';
		}

		// Otherwise, return the first part of the path with a leading '/'
		return '/' + parts[1];
	}
</script>

<div class="pb-3">
	<h1 class="title title--h1 title__separate">{pageTitle}</h1>
</div>
