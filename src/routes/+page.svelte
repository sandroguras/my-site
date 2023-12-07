<script>
	import Carousel from '$lib/components/Carousel.svelte';
	import Introduction from '$lib/components/Introduction.svelte';
	import Expertise from '$lib/components/Expertise/Expertise.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';

	const introduction = {
		copy: "<p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p><p>My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>"
	};
	const expertise = {
		sectionHeading: 'My Expertise',
		caseItems: [
			{
				name: 'Web Development',
				icon: '/images/icons/icon-dev.svg',
				icon_alt: 'Web Development',
				copy: 'Professional-grade website development.'
			},
			{
				name: 'Project Management',
				icon: '/images/icons/icon-design.svg',
				icon_alt: 'Project Management',
				copy: 'Planning, organizing, executing, and fulfilling web projects.'
			},
			{
				name: 'Mobile Apps',
				icon: '/images/icons/icon-app.svg',
				icon_alt: 'Mobile Apps',
				copy: 'Professional development of applications for iOS and Android.'
			},
			{
				name: 'Photography',
				icon: '/images/icons/icon-photo.svg',
				icon_alt: 'Photography',
				copy: 'I make high-quality photos of any category at a professional level.'
			}
		]
	};
	const testimonials = [
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
</script>

<!-- About -->
<Introduction copy={introduction.copy} />

<!-- Expertise -->
<Expertise sectionHeading={expertise.sectionHeading} caseItems={expertise.caseItems} />

<!-- Testimonials -->
<Testimonials sectionHeading="Testimonials" swiperId="swiper-testimonials" slides={testimonials} />

<!--TODO: refactor into Testimonials component-->
<!-- Clients -->
<section class="clients">
	<h2 class="title title--h2 mt-4">Clients</h2>
	<Carousel />
</section>
