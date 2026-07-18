<script lang="ts">
	import type { Spinner as SpinnerType } from '#types/Spinner';
	let {
		color = '#FFDB6E',
		unit = 'px',
		duration = '0.75s',
		size = '20',
		pause = false
	}: {
		color?: SpinnerType['color'];
		unit?: SpinnerType['unit'];
		duration?: SpinnerType['duration'];
		size?: SpinnerType['size'];
		pause?: SpinnerType['pause'];
	} = $props();
</script>

<div
	class="circle"
	class:pause-animation={pause}
	style="--size: {size}{unit}; --color: {color}; --duration: {duration}"
></div>

<style>
	.circle {
		display: inline-block;
		margin-right: 0.75rem;
		height: var(--size);
		width: var(--size);
		border-color: var(--color) transparent var(--color) var(--color);
		border-width: calc(var(--size) / 15);
		border-style: solid;
		border-image: initial;
		border-radius: 50%;
		animation: var(--duration) linear 0s infinite normal none running rotate;
	}
	.pause-animation {
		animation-play-state: paused;
	}
	@keyframes rotate {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
