<script lang="ts">
	import type { TimelineEvent as TimelineEventType} from '#types/Timeline';
	export let institution: TimelineEventType['institution'] = '';
	export let position: TimelineEventType['position'] = '';
	export let period: TimelineEventType['period'] = '';
	export let description: TimelineEventType['description'] = '';
</script>

<article class="timeline__event">
	<h3 class="title title--h3 timeline__institution">{institution}</h3>
	<h4 class="title title--h4 timeline__position">{position}</h4>
	<span class="timeline__period">{period}</span>
	<p class="timeline__description">{description}</p>
</article>

<style lang="scss">
	@import '#styles/app/timeline-event';
</style>