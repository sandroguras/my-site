<script>
  import "../app.scss";
  import Seo from "$lib/components/Seo.svelte";
  import Navbar from "$lib/components/Header/Navbar.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import PageHeading from '$lib/components/PageHeading.svelte'
</script>

<Seo/>
<body>
	<main class="main">
		<div class="container gutter-top gutter-bottom">
			<div class="row sticky-parent">
				<Sidebar />
				<div class="col-12 col-md-12 col-xl-9">
					<div class="box-outer">
						<Navbar />
						<PageHeading />
						<slot />
					</div>
				</div>
			</div>
		</div>
	</main>
</body>