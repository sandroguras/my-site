<script lang="ts">
	import type { PortfolioItem as PortFolioItemType } from '#types/PortfolioItem';

	const portfolioItems: PortFolioItemType[] = [
		{
			name: 'Bullish Exchange Website',
			company: 'Bullish group',
			image: '/images/bullish-website.webp',
			imageAlt: 'Bullish Exchange Logo',
			slug: 'bullish-exchange-website'
		},
		{
			name: 'EOSIO Website',
			company: 'Block.one',
			image: '/images/eosio-website.webp',
			imageAlt: 'EOSIO Website Logo',
			slug: 'eosio-website'
		},
		{
			name: 'b1 Corporate Website',
			company: 'Block.one',
			image: '/images/b1-website.webp',
			imageAlt: 'b1 Website Logo',
			slug: 'b1-website'
		},
		{
			name: 'Voice.com Website',
			company: 'Block.one',
			image: '/images/voice-website.webp',
			imageAlt: 'Voice Website Logo',
			slug: 'voice-website'
		}
	];
</script>

<!-- Gallery -->
<h2 class="title title--h2">My Projects</h2>
<div class="gallery-grid">
	{#each portfolioItems as portfolioItem}
		<div class="gallery-grid__item">
			<a href={`/portfolio/${portfolioItem.slug}`}>
				<div class="gallery-grid__image-wrap">
					<img class="gallery-grid__image cover" src={portfolioItem.image} alt={portfolioItem.imageAlt} />
				</div>
				<div class="gallery-grid__caption">
					<h3 class="title gallery-grid__title">{portfolioItem.name}</h3>
					<span class="gallery-grid__client">{portfolioItem.company}</span>
				</div>
			</a>
		</div>
	{/each}
</div>

<style lang="scss">
  @import '#styles/app/portfolio';
</style>
