<script lang="ts">
	import NavLink from './NavLink.svelte';
	import type { NavLink as NavLinkType } from '#types/NavLink';

	export let links: NavLinkType[] = [];
</script>

<div class="nav-container">
	<ul class="nav">
		{#each links as link}
			<NavLink href={link.path} label={link.label}/>
		{/each}
	</ul>
</div>

<style lang="scss">
  @import '#styles/app/navbar.scss';
</style>