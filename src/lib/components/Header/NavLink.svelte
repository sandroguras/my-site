<script lang="ts">
	import { page } from '$app/stores';
	import type { NavLink as NavLinkType } from '#types/NavLink';
	export let href: NavLinkType['path'] = '';
	export let label: NavLinkType['label'] = '';
</script>

<li class="nav__item"><a class:active={$page.url.pathname === href} href="{href}">{label}</a></li>

<style lang="scss">
  @import '#styles/app/navlink.scss';
</style>