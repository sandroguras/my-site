<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';

	export let swiperId: string;
    export let sectionHeading: string;
	export let slides: [];
</script>

<!-- Testimonials -->
<section class="testimonials">
		<h2 class="title title--h2 mt-3">{sectionHeading}</h2>
	<Carousel
		swiperId={swiperId}
		{slides}
		breakpoints={{
			580: { slidesPerView: 1, spaceBetween: 20 },
			991: { slidesPerView: 2 }
		}}
	/>
</section>
