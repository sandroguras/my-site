<script lang="ts">
	import Introduction from '$lib/components/Introduction.svelte';
	import Expertise from '$lib/components/Expertise/Expertise.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import type {
		Introduction as IntroductionType,
		Expertise as ExpertiseType,
		ReviewData as ReviewDataType,
		Client as ClientType
	} from '../types/types';

	const introduction: IntroductionType = {
		copy: "<p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p><p>My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>"
	};
	const expertise: ExpertiseType = {
		heading: 'My Expertise',
		expertiseCases: [
			{
				name: 'Web Development',
				icon: '/images/icons/icon-dev.svg',
				iconAlt: 'Web Development',
				description: 'Professional-grade website development.'
			},
			{
				name: 'Project Management',
				icon: '/images/icons/icon-design.svg',
				iconAlt: 'Project Management',
				description: 'Planning, organizing, executing, and fulfilling web projects.'
			},
			{
				name: 'Mobile Apps',
				icon: '/images/icons/icon-app.svg',
				iconAlt: 'Mobile Apps',
				description: 'Professional development of applications for iOS and Android.'
			},
			{
				name: 'Photography',
				icon: '/images/icons/icon-photo.svg',
				iconAlt: 'Photography',
				description: 'I make high-quality photos of any category at a professional level.'
			}
		]
	};
	const testimonials: ReviewDataType[] = [
		{
			name: 'Daniel Lewis',
			image: './images/avatar-1.png',
			image_alt: 'Daniel Lewis',
			short_copy:
				'Ricardo was hired to create a corporate identity. We were very pleased with the work done...',
			copy: 'Ricardo was hired to create a corporate identity. We were very pleased with the work done... Ricardo was hired to create a corporate identity. We were very pleased with the work done...',
			review_date: '2021-01-01'
		},
		{
			name: 'Aaron Cox',
			image: './images/avatar-2.png',
			image_alt: 'Daniel Lewis',
			short_copy:
				'Ricardo was hired to create a corporate identity. We were very pleased with the work done...',
			copy: 'Ricardo was hired to create a corporate identity. We were very pleased with the work done... Ricardo was hired to create a corporate identity. We were very pleased with the work done...',
			review_date: '2021-01-01'
		},
		{
			name: 'David Guras',
			image: './images/avatar-3.png',
			image_alt: 'Daniel Lewis',
			short_copy:
				'Ricardo was hired to create a corporate identity. We were very pleased with the work done...',
			copy: 'Ricardo was hired to create a corporate identity. We were very pleased with the work done... Ricardo was hired to create a corporate identity. We were very pleased with the work done...',
			review_date: '2021-01-01'
		},
		{
			name: 'Mara Mclean',
			image: './images/avatar-4.png',
			image_alt: 'Daniel Lewis',
			short_copy:
				'Ricardo was hired to create a corporate identity. We were very pleased with the work done...',
			copy: 'Ricardo was hired to create a corporate identity. We were very pleased with the work done... Ricardo was hired to create a corporate identity. We were very pleased with the work done...',
			review_date: '2021-01-01'
		}
	];
	const clients: ClientType[] = [
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
</script>

<!-- About -->
<Introduction copy={introduction.copy} />

<!-- Expertise -->
<Expertise heading={expertise.heading} expertiseCases={expertise.expertiseCases} />

<!-- Testimonials -->
<Testimonials
	sectionHeading="Testimonials"
	swiperId="swiper-testimonials"
	slides={testimonials}
	breakpoints={{
		580: { slidesPerView: 1, spaceBetween: 20 },
		991: { slidesPerView: 2 }
	}}
/>

<!-- Clients -->
<Testimonials
	sectionHeading="Clients"
	swiperId="swiper-clients"
	slides={clients}
	breakpoints={{
		320: { slidesPerView: 2, spaceBetween: 0 },
		580: { slidesPerView: 3, spaceBetween: 30 },
		991: { slidesPerView: 4, spaceBetween: 30 }
	}}
/>
