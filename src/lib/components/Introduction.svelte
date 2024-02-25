<script lang="ts">
	import type { Introduction as IntroductionType } from '#types/Introduction';

	export let copy: IntroductionType['copy'] = '';
</script>

<!-- About -->
<section class="about">
	<div class="pb-0 pb-sm-2">
		{@html copy}
	</div>
</section>
