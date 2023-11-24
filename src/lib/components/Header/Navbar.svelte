<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="nav-container">
	<ul class="nav">
		<li class="nav__item"><a class:active={$page.url.pathname === '/'} href="/">About</a></li>
		<li class="nav__item">
			<a class:active={$page.url.pathname === '/resume'} href="/resume">Resume</a>
		</li>
		<li class="nav__item">
			<a class:active={$page.url.pathname === '/portfolio'} href="/portfolio">Portfolio</a>
		</li>
		<li class="nav__item">
			<a class:active={$page.url.pathname === '/blog'} href="/blog">Blog</a>
		</li>
		<li class="nav__item">
			<a class:active={$page.url.pathname === '/contact'} href="/contact">Contact</a>
		</li>
	</ul>
</div>

<style lang="scss">
	@import '../../../styles/app/navbar';
</style>
