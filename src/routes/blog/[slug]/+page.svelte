<script lang="ts">
	import type { PageData } from './$types';
	import { formatDate, isValidISODateString } from '$lib/utils/dateUtils';

	export let data: PageData;
	const { post } = data;
</script>
<div class="pb-3">
	<header class="header-post">
		<h1 class="title title--h1">{post.title}</h1>
		<div class="caption-post">
			<p>{post.subtitle}</p>
		</div>
		<div class="header-post__image-wrap">
			<img class="cover" src={post.cover.src} alt={post.cover.alt} />
		</div>
	</header>
	{#each post.content as block}
		{#if block.type === 'text'}
			<div class="caption-post">
				{#if block.subheading}
					<h2 class="title title--h2">{block.subheading}</h2>
				{/if}
				<p>{@html block.copy}</p>
			</div>
		{:else if block.type === 'image'}
			<div class="gallery-post">
				{#each block.images as image}
					<img class="gallery-post__item cover" src={image.src} data-zoom alt={image.alt} />
				{/each}
				{#if block.imageCaption}
					<div class="gallery-post__caption">{block.imageCaption}</div>
				{/if}
			</div>
		{:else if block.type === 'quote'}
			<div class="caption-post">
				<blockquote class="block-quote">
					<p>{block.copy}</p>
					<cite class="block-quote__author">{block.author}</cite>
				</blockquote>
			</div>
		{/if}
	{/each}
	<footer class="footer-post">
		<a class="footer-post__share" href="http://facebook.com"><i
			class="font-icon icon-facebook"></i><span>Facebook</span></a>
		<a class="footer-post__share" href="http://twitter.com"><i
			class="font-icon icon-twitter"></i><span>Twitter</span></a>
		<a class="footer-post__share" href="http://linkedin.com"><i
			class="font-icon icon-linkedin2"></i><span>Linkedin</span></a>
	</footer>
</div>

<style lang="scss">
  @import "#styles/app/single-post";
</style>