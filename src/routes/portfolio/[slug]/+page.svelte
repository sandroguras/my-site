<script lang="ts">
	import type { InfoBlock as InfoBlockType } from '#types/InfoBlock';
	import type { Copy as CopyType } from '#types/Copy';
	import InfoBlock from '$lib/components/InfoBlock.svelte';
	import Copy from '$lib/components/Copy.svelte';
	import Carousel from '$lib/components/Carousel.svelte';

	const backButtonProps = {
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
	};

	const slides = [
		{
			src: '/images/560x340.jpg',
			alt: 'Testimonial 1'
		},
		{
			src: '/images/560x340.jpg',
			alt: 'Testimonial 2'
		},
		{
			src: '/images/560x340.jpg',
			alt: 'Testimonial 3'
		},
		{
			src: '/images/560x340.jpg',
			alt: 'Testimonial 4'
		}
	];
</script>

<article class="project">
	<a class="btn-back" href={backButtonProps.link}><i class={backButtonProps.glyph}></i>{backButtonProps.text}</a>

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

	<Carousel
		swiperId="swiper-gallery"
		heading=""
		slidesPerView='auto'
		slides={slides}
		centeredSlides={true}
		speed={300}
		breakpoints={{
			580: { slidesPerView: 'auto', spaceBetween: 20 },
		}}
	/>
</article>

<style lang="scss">
  @import "#styles/app/single-project";
</style>
