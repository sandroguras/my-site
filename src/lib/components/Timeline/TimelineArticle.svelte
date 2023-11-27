<script lang="ts">
	export let title: string = '';
	export let period: string = '';
	export let description: string = '';
</script>

<article class="timeline__item">
	<h5 class="title title--h4 timeline__title">{title}</h5>
	<span class="timeline__period">{period}</span>
	<p class="timeline__description">{description}</p>
</article>
