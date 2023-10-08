<script>
  import "../app.scss";
  import TopNav from "$lib/components/Header/TopNav.svelte";
  import Sidebar from "../lib/components/Sidebar.svelte";
</script>

<body>
	<main class="main">
		<div class="container gutter-top gutter-bottom">
			<div class="row sticky-parent">
				<Sidebar />
				<div class="col-12 col-md-12 col-xl-9">
					<div class="box-outer">
						<TopNav />
						<slot />
					</div>
				</div>
			</div>
		</div>
	</main>
</body>