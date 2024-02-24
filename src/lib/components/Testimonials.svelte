<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import type {
		Testimonials as TestimonialsType,
		ReviewData as ReviewDataType,
		ClientData as ClientDataType
	} from '../../types/Testimonials';

	export let swiperId: TestimonialsType['swiperId'] = '';
	export let heading: TestimonialsType['heading'] = '';
	export let breakpoints: TestimonialsType['breakpoints'] = {};
	export let slides: (ReviewDataType | ClientDataType)[] = [];

	// Extracted the section class determination logic to a function.
	function getSectionClass(id: string): string {
		return id === 'swiper-testimonials' ? 'testimonials' : 'clients';
	}

	let sectionClass = getSectionClass(swiperId);
</script>

<section class={sectionClass}>
	<h2 class="title title--h2 mt-3">{heading}</h2>
	<Carousel {swiperId} {slides} {breakpoints} />
</section>