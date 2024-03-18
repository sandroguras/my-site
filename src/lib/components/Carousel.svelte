<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import Modal from '$lib/components/Modal.svelte';
	import type {
		Carousel as CarouselType,
		ReviewData as ReviewDataType,
		ClientData as ClientDataType,
		GalleryData as GalleryDataType
	} from '#types/Carousel';

	export let swiperId: CarouselType['swiperId'] = '';
	export let slidesPerView: number | 'auto' = 'auto';
	export let spaceBetween: number = 30;
	export let centeredSlides: boolean = false;
	export let speed: number = 500;
	export let grabCursor: boolean = true;
	export let watchOverflow: boolean = true;
	export let pagination: object = {
		clickable: true
	};
	export let breakpoints: CarouselType['breakpoints'] = {};
	export let injectStylesUrls: string[] = ['/styles/swiper-pagination.css'];
	export let slides: (ReviewDataType | ClientDataType | GalleryDataType)[] = [];

	// Extracted the section class determination logic to a function.
	function getSectionClass(id: string): string {
		switch (id) {
			case 'swiper-testimonials':
				return 'testimonials';
			case 'swiper-clients':
				return 'clients';
			case 'swiper-gallery':
				return 'gallery';
			default:
				return 'unknown'; // default return in case id not matched
		}
	}

	let sectionClass = getSectionClass(swiperId);

	// Swiper initialization and custom style injection
	onMount(() => {
		register();
		const swiperEl = document.querySelector(`#${swiperId}`);
		const params = {
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
	function isReviewData(slide: ReviewDataType | ClientDataType | GalleryDataType): slide is ReviewDataType {
		return 'shortCopy' in slide;
	}

	// Modal setup
	let showModal: boolean = false; // Boolean to show/hide the modal
	let modalData: ReviewDataType; // Object to hold data of the clicked carousel item
	let modalIndex: number; // Index of the clicked carousel item

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
	{#each slides as slide, i}
		{#if swiperId === 'swiper-clients' && 'logo' in slide}
			<swiper-slide class="js-carousel-clients">
				<figure class="swiper-slide">
					<a href={slide.link} target="_blank">
						<img class="logo-client" src={slide.logo} alt={slide.logoAlt} />
					</a>
				</figure>
			</swiper-slide>
		{/if}

		{#if swiperId === 'swiper-testimonials' && 'shortCopy' in slide}
			<swiper-slide class="review-item box box-inner"
										on:click={() => openModal(i) }>
				<figure class="box box-avatar">
					<img src={slide.image} alt={slide.imageAlt} />
				</figure>
				<h3 class="title title--h3">{slide.name}</h3>
				<p class="review-item__caption">{slide.shortCopy}</p>
			</swiper-slide>
		{/if}

		{#if swiperId === 'swiper-gallery' && 'src' in slide}
			<swiper-slide class="swiper-slide-project">
				<figure class="swiper-slide">
					<a title="click to zoom-in" href={slide.src} data-size="1920x1080">
						<img src={slide.src} alt={slide.alt} />
					</a>
				</figure>
			</swiper-slide>
		{/if}
	{/each}
</swiper-container>

{#if swiperId === 'swiper-testimonials'}
	<Modal {modalData} {modalIndex} {showModal} {closeModal} />
{/if}

<style lang="scss">
  @import '#styles/app/carousel-clients';
  @import '#styles/app/carousel-projects';
  @import '#styles/app/testimonials';
</style>