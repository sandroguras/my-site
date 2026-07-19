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
	{#each timelineEvents as timelineEvent (timelineEvent.id)}
		<article class="timeline__event">
			<h3 class="title title--h3 timeline__institution">
				{#if timelineEvent.institutionUrl}
					<a href={timelineEvent.institutionUrl} target="_blank" rel="noopener noreferrer"
						>{timelineEvent.institution}</a
					>
				{:else}
					{timelineEvent.institution}
				{/if}
			</h3>
			<h4 class="title title--h4 timeline__position">{timelineEvent.position}</h4>
			<span class="timeline__period">{timelineEvent.period}</span>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -- timelineEvent.description is rendered Markdown from src/content/timeline, not user input -->
			<div class="timeline__description">{@html timelineEvent.description}</div>
		</article>
	{/each}
</div>

<style lang="scss">
	@use 'styles/app/timeline';
</style>
