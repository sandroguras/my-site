<script>
  import { register } from 'swiper/element/bundle';

  register();

  const spaceBetween = 30;
  const speed = 500;

  const skills = [
	{
	  name: "Web Development",
	  icon: "./../../src/assets/icons/icon-dev.svg",
	  icon_alt: "Web Development",
	  copy: "Professional-grade website development."
	},
	{
	  name: "Project Management",
	  icon: "./../../src/assets/icons/icon-design.svg",
	  icon_alt: "Project Management",
	  copy: "Planning, organizing, executing, and fulfilling web projects."
	},
	{
	  name: "Mobile Apps",
	  icon: "./../../src/assets/icons/icon-app.svg",
	  icon_alt: "Mobile Apps",
	  copy: "Professional development of applications for iOS and Android."
	},
	{
	  name: "Photography",
	  icon: "./../../src/assets/icons/icon-photo.svg",
	  icon_alt: "Photography",
	  copy: "I make high-quality photos of any category at a professional level."
	}
  ]
  const reviews = [
    {
      name: "Daniel Lewis",
	  image: "./src/assets/images/avatar-1.png",
	  image_alt: "Daniel Lewis",
      copy: "Ricardo was hired to create a corporate identity. We were very pleased with the work done..."
    },
    {
      name: "Daniel Lewis",
      image: "./src/assets/images/avatar-1.png",
      image_alt: "Daniel Lewis",
      copy: "Ricardo was hired to create a corporate identity. We were very pleased with the work done..."
    },
    {
      name: "Daniel Lewis",
      image: "./src/assets/images/avatar-1.png",
      image_alt: "Daniel Lewis",
      copy: "Ricardo was hired to create a corporate identity. We were very pleased with the work done..."
    },
    {
      name: "Daniel Lewis",
      image: "./src/assets/images/avatar-1.png",
      image_alt: "Daniel Lewis",
      copy: "Ricardo was hired to create a corporate identity. We were very pleased with the work done..."
    }
  ];
  const clients =[
    {
      link: "https://greymass.com/",
      logo: "./src/assets/images/clients/greymass-color.svg",
      logo_alt: 'Greymass logo'
	},
    {
      link: "https://bullish.com",
      logo: "./src/assets/images/clients/bullish-color.svg",
      logo_alt: 'Bullish logo'
    },
    {
      link: "https://b1.com",
      logo: "./src/assets/images/clients/b1-color.svg",
      logo_alt: 'b1 logo'
    },
    {
      link: "https://about.voice.com/company/",
      logo: "./src/assets/images/clients/voice-color.svg",
      logo_alt: 'Voice logo'
    },
    {
      link: "https://eos.io",
      logo: "./src/assets/images/clients/eosio-color.svg",
      logo_alt: 'eosio logo'
    },
    {
      link: "https://grafic.agency",
      logo: "./src/assets/images/clients/grafik-color.svg",
      logo_alt: 'Grafic logo'
    },
  ]

  //TODO add stylized pagination

</script>
<!-- About -->
<section class="about">
	<div class="pb-0 pb-sm-2">
		<h1 class="title title--h1 title__separate">About Me</h1>
		<p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
		<p>My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
	</div>
</section>

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

	<swiper-container
		slides-per-view={2}
		space-between={spaceBetween}
		speed={speed}
		grab-cursor={true}
		pagination={{ clickable: true }}
		breakpoints={{
			580: {slidesPerView: 1, spaceBetween: 20},
			991: {slidesPerView: 2}
		}}
	>
		<!-- Item review -->
		{#each reviews as review}
			<swiper-slide class="review-item box box-inner">
				<figure class="box box-avatar">
					<img src={review.image} alt={review.image_alt}>
				</figure>
				<h4 class="title title--h3">{review.name}</h4>
				<p class="review-item__caption">{review.copy}</p>
			</swiper-slide>
		{/each}

	</swiper-container>
</section>

<!-- Clients -->
<section class="clients">
	<h2 class="title title--h2 mt-4">Clients</h2>

	<swiper-container
		slides-per-view="auto"
		space-between={spaceBetween}
		speed={speed}
		grab-cursor={true}
		pagination={{ clickable: true }}
		breakpoints={{
			320: {
                    slidesPerView: 2,
                    spaceBetween: 0
                },
                580: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                991: {
                    slidesPerView: 4,
                    spaceBetween: 30
                }
		}}
	>
		<!-- Item client -->
		{#each clients as client}
			<swiper-slide class="js-carousel-clients">
				<figure class="swiper-slide">
					<a href={client.link} target="_blank"><img class="logo-client" src={client.logo} alt={client.logo_alt} /></a>
				</figure>
			</swiper-slide>
		{/each}
	</swiper-container>
</section>