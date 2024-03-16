<script lang="ts">
	import type { Social as SocialType } from '#types/PersonalInfo';
	export let social: SocialType = {
		icon: '',
		link: '',
		target: '',
		ariaLabel: ''
	};
</script>

<a class="social__link" href={social.link} target={social.target} aria-label={social.ariaLabel} rel="noopener noreferrer">
	<i class={`feathericon-${social.icon}`} />
</a>

<style lang="scss">
  @import '#styles/app/social-link';
</style>