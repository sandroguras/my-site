<script lang="ts">
	import ExpertiseCase from './ExpertiseCase.svelte';
	import type { Expertise as ExpertiseType } from '../../../types/Expertise';

	export let heading: ExpertiseType['heading'] = '';
	export let expertiseCases: ExpertiseType['expertiseCases'] = [];
</script>
<!-- Expertise -->
<section class="expertise">
	<h2 class="title title--h2 mt-3">{heading}</h2>
	<div class="row">
		{#each expertiseCases as expertiseCase (expertiseCase['name'])}
			<ExpertiseCase {expertiseCase} />
		{/each}
	</div>
</section>