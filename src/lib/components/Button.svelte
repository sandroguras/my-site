<script lang="ts">
	export let isButtonLink: boolean = false;
	export let text: string = '';
	export let link: string = '';
	export let icon: string = '';
	export let ariaLabel: string = '';
</script>

{#if isButtonLink}
	<a href={link} download class="btn" aria-label={ariaLabel}><i class="font-icon {icon}"></i>{text}</a>
{:else}
	<button type="submit" class="btn"><i class="font-icon {icon}"></i>{text}</button>
{/if}
<style lang="scss">
  @import '#styles/app/button';
</style>
