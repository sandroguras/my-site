<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { projects } = data;

</script>

<!-- Gallery -->
<h2 class="title title--h2">My Work</h2>
<div class="gallery-grid">
	{#each projects as project}
		<div class="gallery-grid__item">
			<a href={`/portfolio/${project.slug}`}>
				<div class="gallery-grid__image-wrap">
					<img class="gallery-grid__image cover" src={project.thumbnail} alt={project.thumbnailAlt} />
				</div>
				<div class="gallery-grid__caption">
					<h3 class="title gallery-grid__title">{project.name}</h3>
					<!--<span class="gallery-grid__client">{project.company}</span>-->
				</div>
			</a>
		</div>
	{/each}
</div>

<style lang="scss">
  @import '#styles/app/portfolio';
</style>
