<script lang="ts">
	import TimelineArticle from './TimelineArticle.svelte';
	export let name: string = '';
    export let logo: string = '';
    export let timelineArticles: TimelineArticle[] = [];
</script>

<h2 class="title title--h2"><span class="box icon-box"><i class="font-icon {logo}"></i></span>{name}</h2>
	<div class="timeline">
	<!-- Item -->
	{#each timelineArticles as timelineArticle}
		<TimelineArticle institution={timelineArticle.institution} position={timelineArticle.position} period={timelineArticle.period} description={timelineArticle.description}/>
	{/each}
</div>

<style lang="scss">
    @import '../../../styles/app/timeline';
</style>