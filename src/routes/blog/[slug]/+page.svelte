<script lang="ts">
	import type { PageData } from './$types';
	import { formatDate, isValidISODateString } from '$lib/utils/dateUtils';

	export let data: PageData;
	const { post } = data;
</script>
<div class="pb-3">
	<header class="header-post">
		<h1 class="title title--h1">{post.fullName}</h1>
		<div class="caption-post">
			<p>{post.subheading}</p>
		</div>
		<div class="header-post__image-wrap">
			<img class="cover" src={post.coverImage} alt={post.coverImageAlt} />
		</div>
	</header>
	<div class="caption-post">
		{@html post.copy}
	</div>
	<div class="gallery-post">
		<img class="gallery-post__item cover" src="/images/400x550.jpg" data-zoom alt="" />
		<img class="gallery-post__item cover" src="/images/400x550.jpg" data-zoom alt="" />
		<div class="gallery-post__caption">Work by <a href="#">Colin Adams</a>, <a href="#">Mark Craig</a></div>
	</div>
	<div class="caption-post">
		<h2 class="title title--h2">If you’re not prepared to be wrong, you’ll never come up with anything original.</h2>
		<p>Here is one of the few effective keys to the design problem: the ability of the designer to recognize as many of the constraints as possible his willingness and enthusiasm for working within these constraints. The most profound technologies are those that disappear. They weave themselves into the fabric of everyday life until they are indistinguishable from it.</p>
		<blockquote class="block-quote">
			<p>The alternative to good design is always bad design. There is no such thing as no design.</p>
			<span class="block-quote__author">Adam Judge</span>
		</blockquote>
		<p>Above all, think of life as a prototype. We can conduct experiments, make discoveries, and change our perspectives. We can look for opportunities to turn processes into projects that have tangible outcomes.</p>
		<p>We can learn how to take joy in the things we create whether they take the form of a fleeting experience or an heirloom that will last for generations. We can learn that reward comes in creation and re-creation, no just in the consumption of the world around us. Active participation in the process of creation is our right and our privilege. We can learn to measure the success of our ideas not by our bank accounts by their impact on the world.</p>
	</div>
	<footer class="footer-post">
		<a class="footer-post__share" href="http://facebook.com"><i class="font-icon icon-facebook"></i><span>Facebook</span></a>
		<a class="footer-post__share" href="http://twitter.com"><i class="font-icon icon-twitter"></i><span>Twitter</span></a>
		<a class="footer-post__share" href="http://linkedin.com"><i class="font-icon icon-linkedin2"></i><span>Linkedin</span></a>
	</footer>
</div>

<style lang="scss">
	@import "#styles/app/single-post";
</style>