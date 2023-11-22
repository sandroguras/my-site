<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';

	const slidesPerView = 2;
	const spaceBetween = 30;
	const speed = 500;
	const grabCursor = true;
	const pagination = {
		clickable: true
	};
	const breakpoints = {
		580: { slidesPerView: 1, spaceBetween: 20 },
		991: { slidesPerView: 2 }
	};
	const injectStylesUrls = ['/styles/swiper-pagination.css'];
	const items = [
		{
			name: 'Daniel Lewis',
			image: './images/avatar-1.png',
			image_alt: 'Daniel Lewis',
			copy: 'Ricardo was hired to create a corporate identity. We were very pleased with the work done...'
		},
		{
			name: 'Daniel Lewis',
			image: './images/avatar-2.png',
			image_alt: 'Daniel Lewis',
			copy: 'Ricardo was hired to create a corporate identity. We were very pleased with the work done...'
		},
		{
			name: 'Daniel Lewis',
			image: './images/avatar-3.png',
			image_alt: 'Daniel Lewis',
			copy: 'Ricardo was hired to create a corporate identity. We were very pleased with the work done...'
		},
		{
			name: 'Daniel Lewis',
			image: './images/avatar-4.png',
			image_alt: 'Daniel Lewis',
			copy: 'Ricardo was hired to create a corporate identity. We were very pleased with the work done...'
		}
	];

	onMount(() => {
		register();

		const swiperEl = document.querySelector('#swiper-testimonials');

		const params = {
			slidesPerView,
			spaceBetween,
			speed,
			grabCursor,
			pagination,
			breakpoints,
			injectStylesUrls
		};


        Object.assign(swiperEl, params);
		swiperEl.initialize();
	});
</script>

<swiper-container id="swiper-testimonials" init="false">
	<!-- Testimonials -->
	{#each items as item}
		<swiper-slide class="review-item box box-inner">
			<figure class="box box-avatar">
				<img src={item.image} alt={item.image_alt} />
			</figure>
			<h4 class="title title--h3">{item.name}</h4>
			<p class="review-item__caption">{item.copy}</p>
		</swiper-slide>
	{/each}
</swiper-container>

<style lang="scss">
	@import '../../styles/app/testimonials';
</style>
