<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import avatar from '#images/my-avatar.webp';
	import type { PersonalInfo as PersonalInfoType } from '#types/PersonalInfo';

	export let personalInfo: PersonalInfoType = {
		name: 'David Guras',
		role: 'Web Director',
		socials: [
			{
				icon: 'linkedin',
				link: 'https://www.linkedin.com/in/gurasan/',
				target: '_blank',
				ariaLabel: 'View David\'s LinkedIn profile'
			},
			{
				icon: 'at-sign',
				link: '/contact',
				target: '_self',
				ariaLabel: 'Submit a contact form to David'
			}]
	};
</script>

<aside class="aside col-12 col-md-12 col-xl-3">
	<div class="sidebar box-outer sticky-column">
		<!-- My photo -->
		<div class="sidebar__base-info">
			<figure class="avatar-box">
				<img src={avatar} alt={personalInfo.name} />
			</figure>

			<div class="text-xl-center">
				<h3 class="title title--h3 sidebar__name">{personalInfo.name}</h3>
				<div class="badge">{personalInfo.role}</div>
				<!-- Social -->
				<div class="social">
					{#each personalInfo.socials as social}
						<a class="social__link" href={social.link} target={social.target} aria-label={social.ariaLabel}
							 rel="noopener noreferrer">
							<i class={`feathericon-${social.icon}`} />
						</a>
					{/each}
				</div>
			</div>
		</div>
		<div class="separation"></div>
		<Button isButtonLink={true}
						link="/contact"
						icon="icon-download"
						text="Download CV"
						ariaLabel="Download David's resume PDF, 266KB" />
	</div>
</aside>

<style lang="scss">
  @import '#styles/app/sidebar';
</style>
