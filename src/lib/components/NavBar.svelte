<script lang="ts">
	import type { NavLink as NavLinkType } from '#types/NavLink';
	import { page } from '$app/stores';

	export let links: NavLinkType[] = [];

	// Function to determine if the link is active
	// considering only the first-degree path segment
	function isActiveLink(currentPath: string, linkPath: string): boolean {
		// Split the paths into segments
		const currentSegments = currentPath.split('/').filter(Boolean);
		const linkSegments = linkPath.split('/').filter(Boolean);

		// Check if the first segment of the current path matches the first segment of the link path
		return linkSegments.length === 0 ? currentPath === linkPath : currentSegments[0] === linkSegments[0];
	}
</script>

<div class="nav-container">
	<ul class="nav">
		{#each links as link}
			<li class="nav__item">
				<a class:active={isActiveLink($page.url.pathname, link.path)} href="{link.path}">{link.label}</a>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
  @import '#styles/app/navbar';
</style>