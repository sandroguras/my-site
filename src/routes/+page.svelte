<script lang="ts">
	import Copy from '$lib/components/Copy.svelte';
	import Expertise from '$lib/components/Expertise.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import type { Copy as CopyType } from '#types/Copy';
	import type { Expertise as ExpertiseType } from '../types/Expertise';
	import type {
		ReviewData as ReviewDataType,
		ClientData as ClientType
	} from '#types/Carousel';

	const Introduction: CopyType = {
		copy: '<p>With over a decade of experience as a Lead Web Developer, I guide a talented team in creating high-quality websites for clients across various industries. We aim to transform complex ideas into clean, user-friendly designs that engage audiences and drive results.</p>\n' +
			'<p>Based in Washington DC, I\'ve been assisting US businesses in establishing a robust online presence. With every project, I dedicate myself to crafting digital masterpieces that combine technical proficiency, creative flair, and a steadfast commitment to understanding my client\'s requirements.</p>\n' +
			'<p>I\'m passionate about staying up-to-date with the latest web development technologies and trends. This dedication to innovation and a desire to create smooth user experiences has been a key factor in my company\'s growth and success.</p>\n' +
			'<p>Together we take a comprehensive approach to each project, paying close attention to detail and working to translate clients\' visions into impactful online experiences effectively. We value building long-term relationships with our clients, built on a foundation of trust and a shared goal of achieving strong results in the digital space.</p>\n'
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
			image: './images/testimonials/Chris_B.webp',
			imageAlt: 'Chris Bartlett',
			shortCopy:
				'It has been an absolute pleasure in working for David at Bullishfor the last two years...',
			copy: 'It has been an absolute pleasure in working for David at Bullish (and Block.one) for the last two years. He is an exceptional manager in terms of web development knowledge, leadership skills, project and product management skills and also people skills.</p>\n' +
				'\n' +
				'<p>David is able to communicate at all levels from complex discussions with developers to distilling technical ideas and conveying them to non-technical C-level executives.</p>\n' +
				'\n' +
				'<p>David would liaise with all departments including security, procurement, design, product managers, sales and more and would ensure all our projects were not only delivered on time but to budget and to spec. He led the Web Development department of several developers and contractors to many successes, including but not limited to, the new Block.one site, the Full Marketing site for the Bullish exchange, the Investor Relations site and several other sites. David is comfortable working in multiple methodologies including waterfall, agile and in-between.</p>\n' +
				'\n' +
				'<p>David was instrumental in updating the tech stack of Bullish moving from just WordPress sites to decoupled WordPress CMS and React (Next,js), Typescript and GraphQL frontend, which vastly increased speed time for the end user by 390% and reducing deployment time from 30 minutes to just a few.</p>\n' +
				'\n' +
				'<p>Not only is David a great manager but David is still a great developer too and will often help out whenever we needed help and always keeps up to date with the latest technology.</p>\n' +
				'\n' +
				'<p>I would highly recommend David as Web Development Manager and hope our paths cross in future again. With David\'s abilities he would surely lead any team to success.</p>',
			reviewDate: '2023-03-09'
		},
		{
			name: 'Alex Radulescu',
			image: './images/testimonials/Alex_R.webp',
			imageAlt: 'Alex Radulescu',
			shortCopy:
				'It has been a pleasure working with David and I strongly recommend him....',
			copy: '<p>It has been a pleasure working with David and I strongly recommend him.\n' +
				'He joined my team with an open mind, took on the challenge of managing new people and thanks to him delivered on time multiple major web projects.</p>\n' +
				'\n' +
				'<p>He also successfully linked stakeholders and architected a robust and elegant top of the line headless wordpress setup with nextjs, graphql and typescript.\n' +
				'He continuously improved the system, bringing down release downtimes from 30-40 minutes to 0 seconds, faster loading time (390%) and smoother experience.</p>',
			reviewDate: '2023-03-09'
		},
		{
			name: 'Mike Dulik',
			image: './images/testimonials/Mike_D.webp',
			imageAlt: 'Mike Dulik',
			shortCopy:
				'I had the pleasure of working alongside Dave as a web developer at Grafik...',
			copy: '<p>I had the pleasure of working alongside Dave as a web developer at Grafik, a digital branding agency based in Alexandria. Dave exhibited many traits that are essential to the making of a great developer. His innovative nature helped to transform our dev practice, and many of his findings are still helping us to work better as a team. I would be very lucky to have the opportunity to collaborate with him again one day.</p>',
			reviewDate: '2019-04-30'
		},
		{
			name: 'Simion Nacu',
			image: './images/testimonials/Simion_N.webp',
			imageAlt: 'Simion Nacu',
			shortCopy:
				' I\'ve had the opportunity to work with David, for about six years...',
			copy: '<p>I\'ve had the opportunity to work with David, for about six years in both a professional and personal level. I have always felt confident that things would be handled in a timely manner and that he was willing to go up and above when necessary.</p>\n' +
				'\n' +
				'<p>He proved to be always eager for new knowledge and flexible enough to embrace new technologies and work flows. He will make a very good addition to any team looking for a strong creative professional.</p>',
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
			link: 'https://grafik.agency',
			logo: '/images/clients/grafik-color.svg',
			logoAlt: 'Grafik logo'
		}
	];
</script>

<!-- About -->
<section class="about">
	<Copy>
		{@html Introduction.copy}
	</Copy>
</section>

<!-- Expertise -->
<section class="expertise">
	<h2 class="title title--h2">{expertise.heading}</h2>
	<div class="row">
		<Expertise expertiseCases={expertise.expertiseCases} />
	</div>
</section>

<!-- Testimonials -->
<section class="swiper-testimonials">
	<h2 class="title title--h2">Testimonials</h2>
	<Carousel
		swiperId="swiper-testimonials"
		slides={testimonials}
		breakpoints={{
		580: { slidesPerView: 1, spaceBetween: 20 },
		991: { slidesPerView: 2 }
	}}
	/>
</section>

<!-- Clients -->
<section class="swiper-clients">
	<h2 class="title title--h2">Clients</h2>
<Carousel
	swiperId="swiper-clients"
	slides={clients}
	breakpoints={{
		320: { slidesPerView: 2, spaceBetween: 0 },
		580: { slidesPerView: 3, spaceBetween: 30 },
		991: { slidesPerView: 4, spaceBetween: 30 }
	}}
/>
</section>

<style lang="scss">
	.about {
    margin-bottom: 2.5rem;
	}
	.expertise {
		margin-bottom: 1rem;
	}
	.swiper-testimonials {
		margin-bottom: 1rem;
	}
</style>
