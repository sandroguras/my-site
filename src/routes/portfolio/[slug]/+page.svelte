<script lang="ts">
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	import type { PageData } from './$types';
	import Copy from '$lib/components/Copy.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import { formatDate, isValidISODateString } from '$lib/utils/dateUtils';

	export let data: PageData;
	const { project } = data;

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#swiper-gallery',
			children: 'a',
			showHideAnimationType: 'fade',
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();
	});
</script>

<article class="project">
	<a class="btn-back" href="/portfolio"><i class="feathericon-arrow-left"></i>Back to Portfolio</a>

	<header class="header-project">
		<h1 class="title title--h1">{@html project.pageTitle}</h1>
		<div class="header-project__image-wrap">
			<img class="cover" src={project.cover.src} alt={project.cover.alt} />
		</div>
	</header>

	<section class="details-info details-info--inline">
		{#each project.infoBlocks as infoBlock}
			<li class="details-info__item">
				<span class="box icon-box"><i class="font-icon {infoBlock.icon}"></i></span>
				<div class="details-info__info">
					<span class="overhead">{infoBlock.title}</span>
					{#if (isValidISODateString(infoBlock.content))}
						<span>{formatDate(infoBlock.content)}</span>
					{:else}
						<span>{infoBlock.content}</span>
					{/if}
				</div>
			</li>
		{/each}
	</section>

	<section class="carousel">
		<Carousel
			swiperId="swiper-gallery"
			slidesPerView='auto'
			slides={project.images}
			centeredSlides={true}
			speed={300}
			breakpoints={{
			580: { slidesPerView: 'auto', spaceBetween: 20 }
		}}
		/>
	</section>

	<section class="project-copy">
		<Copy>
			{@html project.description}
		</Copy>
	</section>

</article>

<style lang="scss">
  @import "#styles/app/single-project";

  .details-info {
    margin-bottom: 1.5rem;
    @media only screen and (max-width: $small) {
      margin-bottom: 1rem;
    }
  }

  .carousel {
    margin-bottom: 2rem;
    @media only screen and (max-width: $small) {
      margin-bottom: 1rem;
    }
  }
</style>
