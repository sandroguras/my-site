<script lang="ts">
	import type { NavLink as NavLinkType } from '#types/NavLink';
	import { page } from '$app/stores';

	export let links: NavLinkType[] = [];
</script>

<div class="nav-container">
	<ul class="nav">
		{#each links as link}
			<li class="nav__item"><a class:active={$page.url.pathname === link.path} href="{link.path}">{link.label}</a></li>
		{/each}
	</ul>
</div>

<style lang="scss">
  @import '#styles/app/navbar.scss';
</style>