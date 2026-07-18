<script lang="ts">
	export let data: PageData;

	import Highlight from 'svelte-highlight';
	import CopyButton from '$lib/components/CopyButton.svelte';
	import typescript from 'svelte-highlight/languages/typescript';
	import bash from 'svelte-highlight/languages/bash';
	import 'svelte-highlight/styles/atom-one-dark-reasonable.css';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	const { post } = data;
	const urlToShare = $page.url.href;
	// Encoding the URL
	const encodedURL: string = encodeURIComponent(urlToShare);
	// Constructing the LinkedIn share link
	const linkedInShareLink: string = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedURL}`;
	const twitterShareLink: string = `https://twitter.com/intent/tweet?url=${encodedURL}`;
	const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`;

	function langSelect(language: string) {
		switch (language) {
			case 'typescript':
				return typescript;
			case 'bash':
				return bash;
			default:
				return typescript;
		}
	}
</script>

<section class="blogpost">
	<header class="header-post">
		<!-- eslint-disable svelte/no-at-html-tags -- post content is static, developer-authored data (src/lib/data/blogData.ts), not user input -->
		<h1 class="title title--h1">{@html post.title}</h1>
		<div class="caption-post">
			{@html post.subtitle}
		</div>
		<!-- eslint-enable svelte/no-at-html-tags -->
		<div class="header-post__image-wrap">
			<img class="cover" src={post.cover.src} alt={post.cover.alt} />
		</div>
	</header>
	<!-- eslint-disable svelte/no-at-html-tags -- post content is static, developer-authored data (src/lib/data/blogData.ts), not user input -->
	{#each post.content as block, i (i)}
		{#if block.type === 'text'}
			<div class="caption-post">
				{#if block.subheading}
					<h2 class="title title--h2">{block.subheading}</h2>
				{/if}
				{@html block.copy}
			</div>
		{:else if block.type === 'image'}
			<div class="gallery-post">
				{#each block.images as image (image.src)}
					<img class="gallery-post__item cover" src={image.src} data-zoom alt={image.alt} />
				{/each}
				{#if block.imageCaption}
					<div class="gallery-post__caption">{block.imageCaption}</div>
				{/if}
			</div>
		{:else if block.type === 'quote'}
			<div class="caption-post">
				<blockquote class="block-quote">
					{@html block.copy}
					<cite class="block-quote__author">{block.author}</cite>
				</blockquote>
			</div>
		{:else if block.type === 'code'}
			<div class="caption-post">
				<CopyButton textToCopy={block.code} />
				<Highlight language={langSelect(block.language)} code={block.code} />
			</div>
		{/if}
	{/each}
	<!-- eslint-enable svelte/no-at-html-tags -->
	<footer class="footer-post">
		<a class="footer-post__share" href={facebookShareLink} target="_blank" rel="noopener noreferrer"
			><i class="font-icon icon-facebook"></i><span>Facebook</span></a
		>
		<a class="footer-post__share" href={twitterShareLink} target="_blank" rel="noopener noreferrer"
			><i class="font-icon icon-twitter"></i><span>Twitter</span></a
		>
		<a class="footer-post__share" href={linkedInShareLink} target="_blank" rel="noopener noreferrer"
			><i class="font-icon icon-linkedin2"></i><span>Linkedin</span></a
		>
	</footer>
</section>

<style lang="scss">
	@use 'styles/app/single-post';
</style>
