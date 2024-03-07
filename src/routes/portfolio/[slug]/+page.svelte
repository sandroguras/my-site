<script lang="ts">
	import type { BackButton as BackButtonType } from '#types/BackButton';
	import BackButton from '$lib/components/BackButton.svelte';

	const backButtonProps: BackButtonType = {
		link: '/portfolio',
		glyph: 'feathericon-arrow-left',
		text: 'Back to Portfolio'
	};
</script>

<BackButton {backButtonProps} />

<header class="header-project">
	<h1 class="title title--h1">Moonboard – Admin Dashboard & <br>UI Kit + Charts Kit</h1>
	<div class="header-project__image-wrap">
		<img class="cover" src='/images/280x204.jpg' alt="" />
	</div>
</header>

<ul class="details-info details-info--inline">
	<!-- Client -->
	<li class="details-info__item">
		<span class="box icon-box"><i class="font-icon feathericon-user"></i></span>
		<div class="details-info__info">
			<span class="overhead">Client</span>
			ArtTemplate
		</div>
	</li>
	<!-- Date -->
	<li class="details-info__item">
		<span class="box icon-box"><i class="font-icon icon-calendar"></i></span>
		<div class="details-info__info">
			<span class="overhead">Date</span>
			27 June, 2021
		</div>
	</li>
</ul>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, arcu tortor, feugiat in elit. Hendrerit sit
	suspendisse eget cras suspendisse aenean. Donec nunc quis sit augue malesuada nullam sit tincidunt. Dictum vel
	egestas pellentesque ut nunc lorem ut tortor at.</p>
<p>Scelerisque ipsum pretium augue neque at. Bibendum semper ipsum arcu, nibh blandit facilisi. Quis dictum ornare
	ultricies porta lectus in metus, purus facilisi. Egestas amet, enim in maecenas ultrices. Ornare donec volutpat
	enim at eget habitant eleifend. Enim, nisl porttitor egestas etiam a, magna neque.</p>

<div class="swiper-container js-carousel-project">
	<div class="swiper-wrapper project-gallery">
		<!-- Item -->
		<figure class="swiper-slide swiper-slide-project">
			<a id="first" title="click to zoom-in" href="assets/images/560x340.jpg" data-size="1920x1080">
				<img class="lazyload" src="assets/images/560x340.jpg" alt="" />
			</a>
		</figure>

		<!-- Item -->
		<figure class="swiper-slide swiper-slide-project">
			<a title="click to zoom-in" href="assets/images/560x340.jpg" data-size="1920x1080">
				<img class="lazyload" src="assets/images/560x340.jpg" alt="" />
			</a>
		</figure>

		<!-- Item -->
		<figure class="swiper-slide swiper-slide-project">
			<a title="click to zoom-in" href="assets/images/560x340.jpg" data-size="1920x1080">
				<img class="lazyload" src="assets/images/560x340.jpg" alt="" />
			</a>
		</figure>

		<!-- Item -->
		<figure class="swiper-slide swiper-slide-project">
			<a title="click to zoom-in" href="assets/images/560x340.jpg" data-size="1920x1080">
				<img class="lazyload" src="assets/images/560x340.jpg" alt="" />
			</a>
		</figure>
	</div>
	<div class="swiper-pagination"></div>
</div><!-- /swiper-container -->

<style lang="scss">
  @import "#styles/app/single-project";
</style>
