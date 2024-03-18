<script lang="ts">
  import "../app.scss";
	import type { NavLink as NavLinkType } from '#types/NavLink';
  import SEO from "$lib/components/SEO.svelte";
  import NavBar from "$lib/components/NavBar.svelte";
  import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";
  import PageTitle from '$lib/components/PageTitle.svelte'

	let links: NavLinkType[] = [
		{ path: '/', label: 'About'},
		{ path: '/resume', label: 'Resume'},
		{ path: '/portfolio', label: 'Portfolio'},
/*		{ path: '/blog', label: 'Blog'},*/
		{ path: '/contact', label: 'Contact'},
	]
</script>
<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">
	<SEO />
</svelte:head>
<body>
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