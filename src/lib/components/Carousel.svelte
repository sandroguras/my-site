<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';

	export let swiperId: string = 'swiper-clients';
	export let slidesPerView: number | string = 'auto';
	export let spaceBetween: number = 30;
	export let speed: number = 500;
	export let grabCursor: boolean = true;
	export let pagination: object = {
		clickable: true
	};
	export let breakpoints: object = {
		320: { slidesPerView: 2, spaceBetween: 0 },
		580: { slidesPerView: 3, spaceBetween: 30 },
		991: { slidesPerView: 4, spaceBetween: 30 }
	};
	export let injectStylesUrls: string = ['/styles/swiper-pagination.css'];
	export let slides: object[] = [
		{
			link: 'https://greymass.com/',
			logo: '/images/clients/greymass-color.svg',
			logo_alt: 'Greymass logo'
		},
		{
			link: 'https://bullish.com',
			logo: '/images/clients/bullish-color.svg',
			logo_alt: 'Bullish logo'
		},
		{
			link: 'https://b1.com',
			logo: '/images/clients/b1-color.svg',
			logo_alt: 'b1 logo'
		},
		{
			link: 'https://about.voice.com/company/',
			logo: '/images/clients/voice-color.svg',
			logo_alt: 'Voice logo'
		},
		{
			link: 'https://eos.io',
			logo: '/images/clients/eosio-color.svg',
			logo_alt: 'eosio logo'
		},
		{
			link: 'https://grafic.agency',
			logo: '/images/clients/grafik-color.svg',
			logo_alt: 'Grafic logo'
		}
	];

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
			injectStylesUrls
		};

		Object.assign(swiperEl, params);
		swiperEl.initialize();
	});
</script>

{#if swiperId === 'swiper-clients'}
	<swiper-container id="swiper-clients" init="false">
		<!-- Client links -->
		{#each slides as slide}
			<swiper-slide class="js-carousel-clients">
				<figure class="swiper-slide">
					<a href={slide.link} target="_blank"
						><img class="logo-client" src={slide.logo} alt={slide.logo_alt} /></a
					>
				</figure>
			</swiper-slide>
		{/each}
	</swiper-container>
{/if}
{#if swiperId === 'swiper-testimonials'}
	<swiper-container id="swiper-testimonials" init="false">
		<!-- Testimonials -->
		{#each slides as slide}
			<swiper-slide class="review-item box box-inner">
				<figure class="box box-avatar">
					<img src={slide.image} alt={slide.image_alt} />
				</figure>
				<h4 class="title title--h3">{slide.name}</h4>
				<p class="review-item__caption">{slide.copy}</p>
			</swiper-slide>
		{/each}
	</swiper-container>
{/if}

<style lang="scss">
	@import '../../styles/app/clients';
	@import "../../styles/app/testimonials";
</style>
