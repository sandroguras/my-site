<script lang="ts">
	import type { BackButton as BackButtonType } from '#types/BackButton';

	export let backButtonProps: BackButtonType = {
		link: '/portfolio',
		glyph: 'feathericon-arrow-left',
		text: 'Back to Portfolio'
	};
</script>

<a class="btn-back" href={backButtonProps.link}><i class={backButtonProps.glyph}></i>{backButtonProps.text}</a>

<style lang="scss">
  @import "#styles/app/back-button";
</style>