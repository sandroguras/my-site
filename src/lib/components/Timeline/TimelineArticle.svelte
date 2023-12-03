<script lang="ts">
	export let institution: string = '';
	export let position: string = '';
	export let period: string = '';
	export let description: string = '';
</script>

<article class="timeline__item">
	<h3 class="title title--h3 timeline__institution">{institution}</h3>
	<h4 class="title title--h4 timeline__position">{position}</h4>
	<span class="timeline__period">{period}</span>
	<p class="timeline__description">{description}</p>
</article>
