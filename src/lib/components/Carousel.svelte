<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element';
	import { Pagination } from 'swiper/modules';
	import paginationStyles from 'swiper/element/css/pagination?raw';
	import type { SwiperContainer } from 'swiper/element';
	import Modal from '$lib/components/Modal.svelte';
	import type {
		Carousel as CarouselType,
		ReviewData as ReviewDataType,
		ClientData as ClientDataType,
		GalleryData as GalleryDataType
	} from '#types/Carousel';

	let {
		swiperId = '',
		slidesPerView = 'auto',
		spaceBetween = 30,
		centeredSlides = false,
		speed = 500,
		grabCursor = true,
		watchOverflow = true,
		pagination = { clickable: true },
		breakpoints = {},
		injectStylesUrls = ['/styles/swiper-pagination.css'],
		slides = []
	}: {
		swiperId?: CarouselType['swiperId'];
		slidesPerView?: number | 'auto';
		spaceBetween?: number;
		centeredSlides?: boolean;
		speed?: number;
		grabCursor?: boolean;
		watchOverflow?: boolean;
		pagination?: object;
		breakpoints?: CarouselType['breakpoints'];
		injectStylesUrls?: string[];
		slides?: (ReviewDataType | ClientDataType | GalleryDataType)[];
	} = $props();

	// Swiper initialization and custom style injection
	onMount(() => {
		register();
		const swiperEl = document.querySelector<SwiperContainer>(`#${swiperId}`);
		if (!swiperEl) return;
		const params = {
			modules: [Pagination],
			injectStyles: [paginationStyles],
			slidesPerView,
			spaceBetween,
			speed,
			grabCursor,
			centeredSlides,
			watchOverflow,
			pagination,
			breakpoints,
			injectStylesUrls,
			loop: true
		};
		Object.assign(swiperEl, params);
		swiperEl.initialize();
	});

	// Type guard function to check if a slide is of type ReviewDataType
	function isReviewData(
		slide: ReviewDataType | ClientDataType | GalleryDataType
	): slide is ReviewDataType {
		return 'shortCopy' in slide;
	}

	// Modal setup
	let showModal: boolean = $state(false); // Boolean to show/hide the modal
	let modalData: ReviewDataType = $state()!; // Object to hold data of the clicked carousel item
	let modalIndex: number = $state()!; // Index of the clicked carousel item

	function openModal(index: number): void {
		const slide = slides[index];
		if (isReviewData(slide)) {
			showModal = true;
			modalData = slide;
			modalIndex = index;
		}
	}

	function closeModal(): void {
		showModal = false;
	}
</script>

<swiper-container id={swiperId} init="false">
	{#each slides as slide, i (i)}
		{#if swiperId === 'swiper-clients' && 'logo' in slide}
			<swiper-slide class="js-carousel-clients">
				<figure class="swiper-slide">
					<a href={slide.link} target="_blank" rel="external">
						<img
							class="logo-client"
							src={slide.logo}
							alt={slide.logoAlt}
							width="200"
							height="130"
							loading="lazy"
						/>
					</a>
				</figure>
			</swiper-slide>
		{/if}

		{#if swiperId === 'swiper-testimonials' && 'shortCopy' in slide}
			<swiper-slide class="review-item box box-inner">
				<button type="button" class="review-item__trigger" onclick={() => openModal(i)}>
					<figure class="box box-avatar">
						<img
							src={slide.image}
							width={slide.imageWidth}
							height={slide.imageHeight}
							alt={slide.imageAlt}
						/>
					</figure>
					<h3 class="title title--h3">{slide.name}</h3>
					<p class="review-item__caption">{slide.shortCopy}</p>
				</button>
			</swiper-slide>
		{/if}

		{#if swiperId === 'swiper-gallery' && 'src' in slide}
			<swiper-slide class="swiper-slide-project">
				<figure class="swiper-slide">
					<a
						title="click to zoom-in"
						href={slide.src}
						data-pswp-width="1680"
						data-pswp-height="945"
						target="_blank"
						rel="noreferrer"
					>
						<img src={slide.thumb} alt={slide.alt} width="720" height="405" loading="lazy" />
					</a>
				</figure>
			</swiper-slide>
		{/if}
	{/each}
</swiper-container>

{#if swiperId === 'swiper-clients'}
	<style lang="scss">
		@use 'styles/app/carousel-clients';
	</style>
{/if}

{#if swiperId === 'swiper-testimonials'}
	<Modal {modalData} {modalIndex} {showModal} {closeModal} />
	<style lang="scss">
		@use 'styles/app/testimonials';
	</style>
{/if}

{#if swiperId === 'swiper-gallery'}
	<style lang="scss">
		@use 'styles/app/carousel-projects';
	</style>
{/if}
