<script lang="ts">
	import type { Skillset as SkillsetType } from '#types/Skillset';

	export let skills: SkillsetType['skills'] = [];
</script>


<div class="skillset__grid">
	{#each skills as skill}
		<span class="skillset__skill">{skill.name}</span>
	{/each}
</div>


<style lang="scss">
  @import '#styles/app/skillset';
</style>
