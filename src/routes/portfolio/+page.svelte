<script lang="ts">
	import PortfolioItem from '$lib/components/PortfolioItem.svelte';
	import type { PortfolioItem as PortFolioItemType } from '#types/PortfolioItem';

	const portfolioItems: PortFolioItemType[] = [
		{
			name: 'Incredible Bronze Sausages',
			company: 'Bullish',
			image: '/images/280x204.jpg',
			imageAlt: 'violet',
			link: '/portfolio/incredible-bronze-sausages'
		},
		{
			name: 'Incredible Bronze Sausages',
			company: 'Bullish',
			image: '/images/280x204.jpg',
			imageAlt: 'violet',
			link: '/portfolio/incredible-bronze-sausages'
		},
		{
			name: 'Incredible Bronze Sausages',
			company: 'Bullish',
			image: '/images/280x204.jpg',
			imageAlt: 'violet',
			link: '/portfolio/incredible-bronze-sausages'
		},
		{
			name: 'Incredible Bronze Sausages',
			company: 'Bullish',
			image: '/images/280x204.jpg',
			imageAlt: 'violet',
			link: '/portfolio/incredible-bronze-sausages'
		},
		{
			name: 'Incredible Bronze Sausages',
			company: 'Bullish',
			image: '/images/280x204.jpg',
			imageAlt: 'violet',
			link: '/portfolio/incredible-bronze-sausages'
		},
		{
			name: 'Incredible Bronze Sausages',
			company: 'Bullish',
			image: '/images/280x204.jpg',
			imageAlt: 'violet',
			link: '/portfolio/incredible-bronze-sausages'
		},
		{
			name: 'Incredible Bronze Sausages',
			company: 'Bullish',
			image: '/images/280x204.jpg',
			imageAlt: 'violet',
			link: '/portfolio/incredible-bronze-sausages'
		},
		{
			name: 'Incredible Bronze Sausages',
			company: 'Bullish',
			image: '/images/280x204.jpg',
			imageAlt: 'violet',
			link: '/portfolio/incredible-bronze-sausages'
		},
		{
			name: 'Incredible Bronze Sausages',
			company: 'Bullish',
			image: '/images/280x204.jpg',
			imageAlt: 'violet',
			link: '/portfolio/incredible-bronze-sausages'
		},
		{
			name: 'Incredible Bronze Sausages',
			company: 'Bullish',
			image: '/images/280x204.jpg',
			imageAlt: 'violet',
			link: '/portfolio/incredible-bronze-sausages'
		}];
</script>

<!-- Gallery -->
<h2 class="title title--h2 mt-3">My Projects</h2>
<div class="gallery-grid">
	{#each portfolioItems as portfolioItem}
		<PortfolioItem {portfolioItem} />
	{/each}
</div>

<style lang="scss">
  @import '#styles/app/portfolio';
</style>
