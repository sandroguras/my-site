<script lang="ts">
	import type { PageData } from './$types';
	import { formatDate } from '$lib/utils/dateUtils';
	export let data: PageData;
	const { posts } = data;

</script>
<div class="news-grid">
	<!-- Post -->
	{#each posts as post}
		<article class="news-item box">
			<div class="news-item__image-wrap">
				<a class="news-item__link" href={`/blog/${post.slug}`} />
				<img class="cover" src={post.thumbnail} alt={post.thumbnailAlt} />
			</div>
			<div class="news-item__caption">
				<div class="news-item__date"><span>{post.category}</span>{formatDate(post.date)}</div>
				<h2 class="title title--h2"><a href={`/blog/${post.slug}`}>{post.listName}</a></h2>
				<p>{post.excerpt}</p>
			</div>
		</article>
	{/each}
</div>

<style lang="scss">
  @import "#styles/app/news";
</style>
