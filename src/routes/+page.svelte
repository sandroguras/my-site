<script>
  	import DOMPurify from 'dompurify';
	import Carousel from '$lib/components/Carousel.svelte';
	import Introduction from '$lib/components/Introduction.svelte';

	const skills = [
		{
			name: 'Web Development',
			icon: '/images/icon-dev.svg',
			icon_alt: 'Web Development',
			copy: 'Professional-grade website development.'
		},
		{
			name: 'Project Management',
			icon: '/images/icon-design.svg',
			icon_alt: 'Project Management',
			copy: 'Planning, organizing, executing, and fulfilling web projects.'
		},
		{
			name: 'Mobile Apps',
			icon: '/images/icon-app.svg',
			icon_alt: 'Mobile Apps',
			copy: 'Professional development of applications for iOS and Android.'
		},
		{
			name: 'Photography',
			icon: '/images/icon-photo.svg',
			icon_alt: 'Photography',
			copy: 'I make high-quality photos of any category at a professional level.'
		}
	];
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
	const introduction = {
		pageHeading: 'About Me',
		pageCopy:
			"<p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p><p>My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>"
	};

    $: ingroductionSafeHTML = DOMPurify.sanitize(introduction.pageCopy);
</script>

<!-- About -->
<Introduction pageHeading={introduction.pageHeading} pageCopy={ingroductionSafeHTML} />

<!-- What I'm Doing -->
<section class="skills">
	<h2 class="title title--h2 mt-3">What I'm Doing</h2>
	<div class="row">
		<!-- Case Item -->
		{#each skills as skill}
			<div class="col-12 col-lg-6">
				<div class="case-item box box-inner">
					<img class="case-item__icon" src={skill.icon} alt={skill.icon_alt} />
					<div>
						<h3 class="title title--h3">{skill.name}</h3>
						<p class="case-item__caption">{skill.copy}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- Testimonials -->
<section class="testimonials">
	<h2 class="title title--h2 mt-3">Testimonials</h2>
	<Carousel
		swiperId="swiper-testimonials"
		{items}
		breakpoints={{
			580: { slidesPerView: 1, spaceBetween: 20 },
			991: { slidesPerView: 2 }
		}}
	/>
</section>

<!-- Clients -->
<section class="clients">
	<h2 class="title title--h2 mt-4">Clients</h2>
	<Carousel />
</section>
