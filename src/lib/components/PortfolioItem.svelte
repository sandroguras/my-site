<script lang="ts">
	import type { PortfolioItem as PortfolioItemType } from '#types/PortfolioItem';

	export let portfolioItem: PortfolioItemType;
</script>

<div class="gallery-grid__item">
	<a href={portfolioItem.link}>
		<div class="gallery-grid__image-wrap">
			<img class="gallery-grid__image cover" src={portfolioItem.image} alt={portfolioItem.imageAlt} />
		</div>
		<div class="gallery-grid__caption">
			<h3 class="title gallery-grid__title">{portfolioItem.name}</h3>
			<span class="gallery-grid__client">{portfolioItem.company}</span>
		</div>
	</a>
</div>

<style lang="scss">
  @import "#styles/app/portfolio-item";
</style>