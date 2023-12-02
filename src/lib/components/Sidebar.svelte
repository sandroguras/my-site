<script lang="ts">
    import Button from "$lib/components/Button.svelte";
</script>

<aside class="aside col-12 col-md-12 col-xl-3">
	<div class="sidebar box-outer sticky-column">
		<!-- My photo -->
		<div class="sidebar__base-info">
			<figure class="avatar-box">
				<img src="/images/my-avatar.png" alt="David Guras">
			</figure>

			<div class="text-xl-center">
				<h3 class="title title--h3 sidebar__name">David Guras</h3>
				<div class="badge">Web Director</div>
				<!-- Social -->
				<div class="social">
					<a class="social__link" target="_blank" href="https://twitter.com/sandro_guras"><i class="feathericon-twitter"></i></a>
					<a class="social__link" href="https://www.linkedin.com/in/gurasan/" target="_blank"><i class="feathericon-linkedin"></i></a>
				</div>
			</div>

		</div>
		<div class="sidebar__container">
			<div class="sidebar__additional-info">
				<div class="separation"></div>
				<ul class="details-info">
					<!-- Location -->
					<li class="details-info__item">
						<span class="box icon-box"><i class="font-icon icon-location"></i></span>
						<div class="contacts-block__info">
							<span class="overhead">Location</span>
							<span class="text-overflow" title="San-Francisco, USA">Washington, D.C.</span>
						</div>
					</li>
					<li class="details-info__item">
						<Button href="/contact" iconClass="icon-download" text="Download CV" />
					</li>
				</ul>
			</div>
		</div>
	</div>
</aside>

<style lang="scss">
    @import '../../styles/app/sidebar';
</style>