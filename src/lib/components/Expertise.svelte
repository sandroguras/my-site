<script lang="ts">
	import type { Expertise as ExpertiseType } from '#types/Expertise';
	export let expertiseCases: ExpertiseType['expertiseCases'] = [];
</script>

<!-- Expertise -->
{#each expertiseCases as expertiseCase (expertiseCase['name'])}
	<div class="col-12 col-lg-6">
		<div class="expertise box box-inner">
			<img
				class="expertise__icon"
				src={expertiseCase.icon}
				alt={expertiseCase.iconAlt}
				loading="lazy"
			/>
			<div>
				<h3 class="title title--h3">{expertiseCase.name}</h3>
				<p class="expertise__caption">{expertiseCase.description}</p>
			</div>
		</div>
	</div>
{/each}

<style lang="scss">
	@use 'styles/app/expertise';
</style>
