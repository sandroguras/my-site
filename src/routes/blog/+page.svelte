<script lang="ts">
	import type { PageData } from './$types';
	import { formatDate } from '$lib/utils/dateUtils';
	import { resolve } from '$app/paths';
	export let data: PageData;
	const { posts } = data;
</script>

<div class="news-grid">
	<!-- Post -->
	{#each posts as post (post.slug)}
		<article class="news-item box">
			<div class="news-item__image-wrap">
				<a class="news-item__link" href={resolve('/blog/[slug]', { slug: post.slug })}>
					<img class="cover" src={post.thumb.src} alt={post.thumb.alt} loading="lazy" />
				</a>
			</div>
			<div class="news-item__caption">
				<div class="news-item__date"><span>{post.category}</span>{formatDate(post.date)}</div>
				<h2 class="title title--h2">
					<a href={resolve('/blog/[slug]', { slug: post.slug })}>{post.listName}</a>
				</h2>
				<p>{post.excerpt}</p>
			</div>
		</article>
	{/each}
</div>

<style lang="scss">
	@use 'styles/app/news';
</style>
