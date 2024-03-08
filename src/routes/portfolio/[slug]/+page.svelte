<script lang="ts">
	import type { BackButton as BackButtonType } from '#types/BackButton';
	import type { InfoBlock as InfoBlockType } from '#types/InfoBlock';
	import type { Copy as CopyType } from '#types/Copy';
	import BackButton from '$lib/components/BackButton.svelte';
	import InfoBlock from '$lib/components/InfoBlock.svelte';
	import Copy from '$lib/components/Copy.svelte';

	const backButtonProps: BackButtonType = {
		link: '/portfolio',
		glyph: 'feathericon-arrow-left',
		text: 'Back to Portfolio'
	};

	const project = {
		title: 'Moonboard – Admin Dashboard & <br>UI Kit + Charts Kit',
		cover: '/images/280x204.jpg',
		coverAlt: '',
		client: 'ArtTemplate',
		date: '27 June, 2021',
		images: [
			'/images/560x340.jpg',
			'/images/560x340.jpg',
			'/images/560x340.jpg',
			'/images/560x340.jpg'
		]
	};

	const infoBlocks: InfoBlockType[] = [
		{
			icon: 'feathericon-user',
			title: 'ArtTemplate',
			content: 'Client'
		},
		{
			icon: 'icon-calendar',
			title: 'Date',
			content: '27 June, 2021'
		}
	];

	const projectDescription: CopyType = {
		copy: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, arcu tortor, feugiat in elit. Hendrerit sit\n' +
			'\t\t\tsuspendisse eget cras suspendisse aenean. Donec nunc quis sit augue malesuada nullam sit tincidunt. Dictum vel\n' +
			'\t\t\tegestas pellentesque ut nunc lorem ut tortor at.</p>\n' +
			'\t\t<p>Scelerisque ipsum pretium augue neque at. Bibendum semper ipsum arcu, nibh blandit facilisi. Quis dictum ornare\n' +
			'\t\t\tultricies porta lectus in metus, purus facilisi. Egestas amet, enim in maecenas ultrices. Ornare donec volutpat\n' +
			'\t\t\tenim at eget habitant eleifend. Enim, nisl porttitor egestas etiam a, magna neque.</p>'
	}
</script>

<article class="project">
	<BackButton {backButtonProps} />

	<header class="header-project">
		<h1 class="title title--h1">{@html project.title}</h1>
		<div class="header-project__image-wrap">
			<img class="cover" src={project.cover} alt={project.coverAlt} />
		</div>
	</header>

	<section class="infoblock">
		{#each infoBlocks as infoBlock}
			<InfoBlock {infoBlock} />
		{/each}
	</section>

	<section class="project-copy">
		<Copy>
			{@html projectDescription.copy}
		</Copy>
	</section>

	<section class="swiper-container js-carousel-project">
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
	</section><!-- /swiper-container -->
</article>

<style lang="scss">
  @import "#styles/app/single-project";
</style>
