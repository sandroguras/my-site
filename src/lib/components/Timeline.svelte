<script lang="ts">
	import type {
		Timeline as TimelineType,
		TimelineEvent as TimelineEventType
	} from '#types/Timeline';
	let {
		heading = '',
		logo = '',
		timelineEvents = []
	}: {
		heading?: TimelineType['heading'];
		logo?: TimelineType['logo'];
		timelineEvents?: TimelineEventType[];
	} = $props();
</script>

<h2 class="title title--h2">
	<span class="box icon-box"><i class="font-icon {logo}"></i></span>{heading}
</h2>
<div class="timeline">
	<!-- Item -->
	<!-- eslint-disable svelte/no-at-html-tags -- timelineEvent fields are static, developer-authored data (src/routes/resume/+page.svelte), not user input -->
	{#each timelineEvents as timelineEvent (timelineEvent.id)}
		<article class="timeline__event">
			<h3 class="title title--h3 timeline__institution">{@html timelineEvent.institution}</h3>
			<h4 class="title title--h4 timeline__position">{timelineEvent.position}</h4>
			<span class="timeline__period">{timelineEvent.period}</span>
			<p class="timeline__description">{@html timelineEvent.description}</p>
		</article>
	{/each}
	<!-- eslint-enable svelte/no-at-html-tags -->
</div>

<style lang="scss">
	@use 'styles/app/timeline';
</style>
