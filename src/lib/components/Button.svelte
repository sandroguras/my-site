<script lang="ts">
	import Spinner from '$lib/components/Spinner.svelte';
	import { asset } from '$app/paths';

	let {
		isButtonLink = false,
		text = '',
		link = '',
		icon = '',
		ariaLabel = '',
		btnDisbl = false
	}: {
		isButtonLink?: boolean;
		text?: string;
		link?: string;
		icon?: string;
		ariaLabel?: string;
		btnDisbl?: boolean;
	} = $props();
</script>

{#if isButtonLink}
	<a href={asset(link)} download class="btn" aria-label={ariaLabel}
		><i class="font-icon {icon}"></i>{text}</a
	>
{:else if btnDisbl}
	<button disabled={btnDisbl} type="submit" class="btn"><Spinner />{text}</button>
{:else}
	<button type="submit" class="btn"><i class="font-icon {icon}"></i>{text}</button>
{/if}

<style lang="scss">
	@use 'styles/app/button';
</style>
