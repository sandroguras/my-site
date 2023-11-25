<script lang="ts">
	import CaseItem from './CaseItem.svelte';

	export let sectionHeading: string = '';
	export let caseItems: CaseItem[] = [];
</script>

<!-- Expertise -->
<section class="expertise">
	<h2 class="title title--h2 mt-3">{sectionHeading}</h2>
	<div class="row">
		{#each caseItems as caseItem}
			<CaseItem
				name={caseItem.name}
				icon={caseItem.icon}
				icon_alt={caseItem.icon_alt}
				copy={caseItem.copy}
			/>
		{/each}
	</div>
</section>
