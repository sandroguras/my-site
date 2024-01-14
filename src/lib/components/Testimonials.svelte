<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import type {
		ReviewData as ReviewDataType,
		Client as ClientType
	} from '../../types/types';

	export let swiperId: string = '';
	export let sectionHeading: string = '';
	export let slides: (ReviewDataType | ClientType)[] = [];

	export let breakpoints: object = {};

	let sectionClass = swiperId === 'swiper-testimonials' ? 'testimonials' : 'clients';
</script>

<!-- Testimonials -->
<section class={sectionClass}>
	<h2 class="title title--h2 mt-3">{sectionHeading}</h2>
	<Carousel {swiperId} {slides} {breakpoints} />
</section>
