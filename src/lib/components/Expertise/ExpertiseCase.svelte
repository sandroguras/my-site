<script lang="ts">
	import type { ExpertiseCase as ExpertiseCaseType } from '../../../types/Expertise';

	export let expertiseCase: ExpertiseCaseType = {
		name: '',
		icon: '',
		iconAlt: '',
		description: ''
	};
</script>

<div class="col-12 col-lg-6">
	<div class="case-item box box-inner">
		<img class="case-item__icon" src={expertiseCase.icon} alt={expertiseCase.iconAlt} />
		<div>
			<h3 class="title title--h3">{expertiseCase.name}</h3>
			<p class="case-item__caption">{expertiseCase.description}</p>
		</div>
	</div>
</div>

<style lang="scss">
  @import '../../../styles/app/cases';
</style>