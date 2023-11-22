<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';

	const slidesPerView = 'auto';
	const spaceBetween = 30;
	const speed = 500;
	const grabCursor = true;
	const pagination = {
		clickable: true
	};
	const breakpoints = {
		320: { slidesPerView: 2, spaceBetween: 0 },
		580: { slidesPerView: 3, spaceBetween: 30 },
		991: { slidesPerView: 4, spaceBetween: 30 }
	};
	const injectStylesUrls = ['/styles/swiper-pagination.css'];
	const clients = [
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

	onMount(() => {
		register();

		const swiperEl = document.querySelector('#swiper-clients');

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

<swiper-container id="swiper-clients" init="false">
	<!-- Client links -->
	{#each clients as client}
		<swiper-slide class="js-carousel-clients">
			<figure class="swiper-slide">
				<a href={client.link} target="_blank"
					><img class="logo-client" src={client.logo} alt={client.logo_alt} /></a
				>
			</figure>
		</swiper-slide>
	{/each}
</swiper-container>

<style lang="scss">
	@import '../../styles/app/clients';
</style>
