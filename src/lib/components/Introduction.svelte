<script lang="ts">
	export let sectionHeading: string = '';
	export let pageCopy: string = '';
</script>

<!-- About -->
<section class="about">
	<div class="pb-0 pb-sm-2">
		<h1 class="title title--h1 title__separate">{sectionHeading}</h1>
		{@html pageCopy}
	</div>
</section>

<style lang="scss">
</style>
