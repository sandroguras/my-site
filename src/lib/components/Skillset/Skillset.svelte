<script lang="ts">
	import type { Skillset as SkillsetType } from '#types/skillset';
	import Skill from './Skill.svelte';

	export let skills: SkillsetType['skills'] = [];
</script>

<div class="row">
	<div class="col-12">
		<div class="skillset__grid">
			{#each skills as skill}
				<Skill name={skill.name} />
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
  @import '#styles/app/skillset';
</style>
