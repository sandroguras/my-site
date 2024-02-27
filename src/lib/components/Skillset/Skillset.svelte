<script lang="ts">
	import type { Skillset as SkillsetType } from '#types/skillset';
	import Skill from './Skill.svelte';
	export let heading: SkillsetType['heading'] = 'My Skills';
	export let skills: SkillsetType['skills'] = [];
</script>

<section class="skillset">
	<h2 class="title title--h2 mt-3">{heading}</h2>
	<div class="row">
		<div class="col-12">
			<div class="skillset__grid">
				{#each skills as skill}
					<Skill name={skill.name} />
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '#styles/app/skillset';
</style>
