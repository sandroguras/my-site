<script lang="ts">
	import Copy from '$lib/components/Copy.svelte';
	import Expertise from '$lib/components/Expertise/Expertise.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import type { Copy as CopyType } from '#types/Copy';
	import type { Expertise as ExpertiseType } from '../types/Expertise';
	import type {
		ReviewData as ReviewDataType,
		ClientData as ClientType
	} from '#types/Carousel';

	const Introduction: CopyType = {
		copy: '<p>I am a Web Director, leading a skilled team of developers and designers for over a decade. We have created exceptional websites for clients across diverse industries, transforming intricate concepts into sleek, user-friendly designs.</p>\n' +
			'<p>Based in Washington DC, I\'ve been assisting US businesses in establishing a robust online presence. With every project, I dedicate myself to crafting digital masterpieces that combine technical proficiency, creative flair, and a steadfast commitment to understanding my client\'s requirements.</p>\n' +
			'<p>My company\'s growth and evolution are fueled by my unyielding passion for developing websites that are both visually striking and effortlessly functional.</p>\n'
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
				name: 'Web Apps',
				icon: '/images/icons/icon-framework.svg',
				iconAlt: 'Web Apps',
				description: 'Web applications development with Laravel, Symfony and Ruby on Rails.'
			},
			{
				name: 'Cybersecurity',
				icon: '/images/icons/icon-security.svg',
				iconAlt: 'Cybersecurity',
				description: 'Securing, fortifying, testing, and hardening web applications.'
			}
		]
	};
	const testimonials: ReviewDataType[] = [
		{
			name: 'Chris Bartlett',
			image: './images/avatar-4.png',
			imageAlt: 'Chris Bartlett',
			shortCopy:
				'It has been an absolute pleasure in working for David at Bullishfor the last two years...',
			copy: 'It has been an absolute pleasure in working for David at Bullish (and Block.one) for the last two years. He is an exceptional manager in terms of web development knowledge, leadership skills, project and product management skills and also people skills.\n' +
				'\n' +
				'David is able to communicate at all levels from complex discussions with developers to distilling technical ideas and conveying them to non-technical C-level executives. \n' +
				'\n' +
				'David would liaise with all departments including security, procurement, design, product managers, sales and more and would ensure all our projects were not only delivered on time but to budget and to spec. He led the Web Development department of several developers and contractors to many successes, including but not limited to, the new Block.one site, the Full Marketing site for the Bullish exchange, the Investor Relations site and several other sites. David is comfortable working in multiple methodologies including waterfall, agile and in-between.\n' +
				'\n' +
				'David was instrumental in updating the tech stack of Bullish moving from just WordPress sites to decoupled WordPress CMS and React (Next,js), Typescript and GraphQL frontend, which vastly increased speed time for the end user by 390% and reducing deployment time from 30 minutes to just a few.\n' +
				'\n' +
				'Not only is David a great manager but David is still a great developer too and will often help out whenever we needed help and always keeps up to date with the latest technology.\n' +
				'\n' +
				'I would highly recommend David as Web Development Manager and hope our paths cross in future again. With David\'s abilities he would surely lead any team to success.',
			reviewDate: '2023-03-09'
		},
		{
			name: 'Alex Radulescu',
			image: './images/avatar-2.png',
			imageAlt: 'Alex Radulescu',
			shortCopy:
				'It has been a pleasure working with David and I strongly recommend him....',
			copy: 'It has been a pleasure working with David and I strongly recommend him.\n' +
				'He joined my team with an open mind, took on the challenge of managing new people and thanks to him delivered on time multiple major web projects.\n' +
				'He also successfully linked stakeholders and architected a robust and elegant top of the line headless wordpress setup with nextjs, graphql and typescript.\n' +
				'He continuously improved the system, bringing down release downtimes from 30-40 minutes to 0 seconds, faster loading time (390%) and smoother experience.',
			reviewDate: '2023-03-09'
		},
		{
			name: 'Mike Dulik',
			image: './images/avatar-3.png',
			imageAlt: 'Mike Dulik',
			shortCopy:
				'I had the pleasure of working alongside Dave as a web developer at Grafik...',
			copy: 'I had the pleasure of working alongside Dave as a web developer at Grafik, a digital branding agency based in Alexandria. Dave exhibited many traits that are essential to the making of a great developer. His innovative nature helped to transform our dev practice, and many of his findings are still helping us to work better as a team. I would be very lucky to have the opportunity to collaborate with him again one day. ',
			reviewDate: '2019-04-30'
		},
		{
			name: 'Simion Nacu',
			image: './images/avatar-4.png',
			imageAlt: 'Simion Nacu',
			shortCopy:
				' I\'ve had the opportunity to work with David, for about six years...',
			copy: 'I\'ve had the opportunity to work with David, for about six years in both a professional and personal level. I have always felt confident that things would be handled in a timely manner and that he was willing to go up and above when necessary. \n' +
				' He proved to be always eager for new knowledge and flexible enough to embrace new technologies and work flows. He will make a very good addition to any team looking for a strong creative professional.',
			reviewDate: '2021-01-01'
		}
	];
	const clients: ClientType[] = [
		{
			link: 'https://greymass.com/',
			logo: '/images/clients/greymass-color.svg',
			logoAlt: 'Greymass logo'
		},
		{
			link: 'https://bullish.com',
			logo: '/images/clients/bullish-color.svg',
			logoAlt: 'Bullish logo'
		},
		{
			link: 'https://b1.com',
			logo: '/images/clients/b1-color.svg',
			logoAlt: 'b1 logo'
		},
		{
			link: 'https://about.voice.com/company/',
			logo: '/images/clients/voice-color.svg',
			logoAlt: 'Voice logo'
		},
		{
			link: 'https://eos.io',
			logo: '/images/clients/eosio-color.svg',
			logoAlt: 'eosio logo'
		},
		{
			link: 'https://grafic.agency',
			logo: '/images/clients/grafik-color.svg',
			logoAlt: 'Grafic logo'
		}
	];
</script>

<!-- About -->
<section class="about">
	<div class="pb-0 pb-sm-2">
		<Copy>
			{@html Introduction.copy}
		</Copy>
	</div>
</section>

<!-- Expertise -->
<section class="expertise">
	<h2 class="title title--h2 mt-3">{expertise.heading}</h2>
	<div class="row">
		<Expertise expertiseCases={expertise.expertiseCases} />
	</div>
</section>

<!-- Testimonials -->
<Carousel
	heading="Testimonials"
	swiperId="swiper-testimonials"
	slides={testimonials}
	breakpoints={{
		580: { slidesPerView: 1, spaceBetween: 20 },
		991: { slidesPerView: 2 }
	}}
/>

<!-- Clients -->
<Carousel
	heading="Clients"
	swiperId="swiper-clients"
	slides={clients}
	breakpoints={{
		320: { slidesPerView: 2, spaceBetween: 0 },
		580: { slidesPerView: 3, spaceBetween: 30 },
		991: { slidesPerView: 4, spaceBetween: 30 }
	}}
/>
