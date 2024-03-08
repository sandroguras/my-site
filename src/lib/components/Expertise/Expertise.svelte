<script lang="ts">
	import type { Expertise as ExpertiseType } from '#types/Expertise';
	import ExpertiseCase from './ExpertiseCase.svelte';
	export let expertiseCases: ExpertiseType['expertiseCases'] = [];
</script>
<!-- Expertise -->
{#each expertiseCases as expertiseCase (expertiseCase['name'])}
	<ExpertiseCase {expertiseCase} />
{/each}