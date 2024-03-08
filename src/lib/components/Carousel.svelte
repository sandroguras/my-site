<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import Modal from '$lib/components/Modal.svelte';
	import type {
		Carousel as CarouselType,
		ReviewData as ReviewDataType,
		ClientData as ClientDataType
	} from '#types/Carousel';

	export let swiperId: CarouselType['swiperId'] = '';
	export let heading: CarouselType['heading'] = '';
	export let slidesPerView: number | string = 'auto';
	export let spaceBetween: number = 30;
	export let speed: number = 500;
	export let grabCursor: boolean = true;
	export let pagination: object = {
		clickable: true
	};
	export let breakpoints: CarouselType['breakpoints'] = {};
	export let injectStylesUrls: string[] = ['/styles/swiper-pagination.css'];
	export let slides: (ReviewDataType | ClientDataType)[] = [];

	// Extracted the section class determination logic to a function.
	function getSectionClass(id: string): string {
		return id === 'swiper-testimonials' ? 'testimonials' : 'clients';
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
			pagination,
			breakpoints,
			injectStylesUrls,
			loop: true
		};
		Object.assign(swiperEl, params);
		swiperEl.initialize();
	});

	// Type guard function to check if a slide is of type ReviewDataType
	function isReviewData(slide: ReviewDataType | ClientDataType): slide is ReviewDataType {
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

<section class={sectionClass}>
	<h2 class="title title--h2 mt-3">{heading}</h2>

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
				<swiper-slide class="review-item box box-inner" on:click={() => openModal(i)}>
					<figure class="box box-avatar">
						<img src={slide.image} alt={slide.imageAlt} />
					</figure>
					<h4 class="title title--h3">{slide.name}</h4>
					<p class="review-item__caption">{slide.shortCopy}</p>
				</swiper-slide>
			{/if}

			{#if swiperId === 'swiper-gallery' && 'logo' in slide}
				<swiper-slide class="js-carousel-clients">
					<figure class="swiper-slide">
						<a href={slide.link} target="_blank">
							<img class="logo-client" src={slide.logo} alt={slide.logoAlt} />
						</a>
					</figure>
				</swiper-slide>
			{/if}
		{/each}
	</swiper-container>

	{#if swiperId === 'swiper-testimonials'}
		<Modal {modalData} {modalIndex} {showModal} {closeModal} />
	{/if}
</section>

<style lang="scss">
  @import '#styles/app/clients';
  @import '#styles/app/testimonials';
</style>