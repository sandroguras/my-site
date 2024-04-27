<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let scrollPercentage = 0;

	function updateScrollProgress() {
		if (typeof window !== 'undefined') {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight;
			const winHeight = window.innerHeight;
			scrollPercentage = (scrollTop / Math.max(1, docHeight - winHeight)) * 100;
		}
	}

	onMount(() => {
		if (typeof window !== 'undefined') {
			// Initial update in case of reloads at a scrolled position
			updateScrollProgress();
			window.addEventListener('scroll', updateScrollProgress);
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('scroll', updateScrollProgress);
		}
	});
</script>

<div class="scroll-indicator" style="width: {scrollPercentage}%"></div>

<style lang="scss">
  .scroll-indicator {
    background: var(--color-gradient);
    height: rem(3px);
    @include position(fixed, $top: 0);
    width: 0;
    z-index: 3;
  }
</style>