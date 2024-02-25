<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import Modal from '$lib/components/Modal.svelte';
	import type { Testimonials as TestimonialsType, ReviewData as ReviewDataType, ClientData as ClientDataType } from '#types/Testimonials';

	export let swiperId: TestimonialsType['swiperId'] = '';
	export let slidesPerView: number | string = 'auto';
	export let spaceBetween: number = 30;
	export let speed: number = 500;
	export let grabCursor: boolean = true;
	export let pagination: object = {
		clickable: true
	};
	export let breakpoints: TestimonialsType['breakpoints'] = {};
	export let injectStylesUrls: string[] = ['/styles/swiper-pagination.css'];
	export let slides: (ReviewDataType | ClientDataType)[] = [];

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

{#if swiperId === 'swiper-clients'}
	<swiper-container id="swiper-clients" init="false">
		<!-- Client links -->
		{#each slides as slide}
			{#if 'logo' in slide}
				<!-- Check if the slide is a Client -->
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

	<style lang="scss">
		@import '../../styles/app/clients';
	</style>
{/if}

{#if swiperId === 'swiper-testimonials'}
	<swiper-container id="swiper-testimonials" init="false">
		<!-- Testimonials -->
		{#each slides as slide, i}
			{#if 'shortCopy' in slide}
				<!-- Check if the slide is a ReviewData -->
				<swiper-slide class="review-item box box-inner" on:click={() => openModal(i)}>
					<figure class="box box-avatar">
						<img src={slide.image} alt={slide.imageAlt} />
					</figure>
					<h4 class="title title--h3">{slide.name}</h4>
					<p class="review-item__caption">{slide.shortCopy}</p>
				</swiper-slide>
			{/if}
		{/each}
	</swiper-container>

	<style lang="scss">
		@import '../../styles/app/testimonials';
	</style>

	<Modal {modalData} {modalIndex} {showModal} {closeModal} />
{/if}
