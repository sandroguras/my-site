<script lang="ts">
	import '../app.scss';
	import { page } from '$app/stores';
	import type { NavLink as NavLinkType } from '#types/NavLink';
	import SEO from '$lib/components/SEO.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import ScrollIndicator from '$lib/components/ScrollIndicator.svelte';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	inject({ mode: dev ? 'development' : 'production' });

	// Vercel speed insights script
	injectSpeedInsights();

	let links: NavLinkType[] = [
		{ path: '/', label: 'About' },
		{ path: '/resume', label: 'Resume' },
		{ path: '/portfolio', label: 'Portfolio' },
		{ path: '/blog', label: 'Blog' },
		{ path: '/contact', label: 'Contact' }
	];

	$: isBlogSubpage = $page.url.pathname.startsWith('/blog/');

</script>
<svelte:head>
	<SEO />
</svelte:head>
<body>
{#if isBlogSubpage}
	<ScrollIndicator />
{/if}
<main class="main">
	<div class="container gutter-top gutter-bottom">
		<div class="row sticky-parent">
			<Sidebar />
			<div class="col-12 col-md-12 col-xl-9">
				<div class="box-outer">
					<NavBar {links} />
					<PageTitle />
					<slot />
				</div>
			</div>
		</div>
	</div>
</main>
</body>