<script lang="ts">
	import type { Skill as SkillType } from '#types/skillset';
	export let name: SkillType = {
		name: ''
	};
</script>

<span class="skillset__skill">{name}</span>

<style lang="scss">
  @import '../../../styles/app/skill';
</style>