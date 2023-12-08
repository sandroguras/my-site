<script lang="ts">
	import TimelineItem from './TimelineItem.svelte';
	export let name: string = '';
    export let logo: string = '';
    export let timelineItems: TimelineItems[] = [];
</script>

<h2 class="title title--h2"><span class="box icon-box"><i class="font-icon {logo}"></i></span>{name}</h2>
	<div class="timeline">
	<!-- Item -->
	{#each timelineItems as timelineItem}
		<TimelineItem institution={timelineItem.institution} position={timelineItem.position} period={timelineItem.period} description={timelineItem.description}/>
	{/each}
</div>

<style lang="scss">
    @import '../../../styles/app/timeline';
</style>