<script lang="ts">
	import TimelineItem from './TimelineEvent.svelte';
	import type { Timeline as TimelineType, TimelineEvent as TimelineEventType } from '#types/Timeline';
	export let heading: TimelineType['heading'] = '';
    export let logo: TimelineType['logo'] = '';
    export let timelineEvents: TimelineEventType[] = [];
</script>

<h2 class="title title--h2"><span class="box icon-box"><i class="font-icon {logo}"></i></span>{heading}</h2>
	<div class="timeline">
	<!-- Item -->
	{#each timelineEvents as timelineEvent (timelineEvent.id)}
		<TimelineItem institution={timelineEvent.institution} position={timelineEvent.position} period={timelineEvent.period} description={timelineEvent.description}/>
	{/each}
</div>

<style lang="scss">
    @import '../../../styles/app/timeline';
</style>