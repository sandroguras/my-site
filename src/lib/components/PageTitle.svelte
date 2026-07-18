<script lang="ts">
	import { page } from '$app/state';

	let pageTitle = $derived.by(() => {
		const rawUrl = page.url.pathname;
		const url = extractFirstPart(rawUrl);
		switch (url) {
			case '/':
				return 'About Me';
			case '/resume':
				return 'Resume';
			case '/portfolio':
				return 'Portfolio';
			case '/blog':
				return 'Blog';
			case '/contact':
				return 'Contact Me';
			// Add more cases as needed
			default:
				return '';
		}
	});

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

<div class="gutter-bottom--small">
	<h1 class="title title--h1 title__separate">{pageTitle}</h1>
</div>
