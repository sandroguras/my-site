<script lang="ts">
	import type { Skillset as SkillsetType } from '#types/Skillset';

	let { skills = [] }: { skills?: SkillsetType['skills'] } = $props();
</script>

<div class="skillset__grid">
	{#each skills as skill (skill.name)}
		<span class="skillset__skill">{skill.name}</span>
	{/each}
</div>

<style lang="scss">
	@use 'styles/app/skillset';
</style>
