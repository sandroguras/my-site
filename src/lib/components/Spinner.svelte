<script lang="ts">
	import type { Spinner as SpinnerType } from '#types/Spinner';
	export let color: SpinnerType['color'] = '#FFDB6E';
	export let unit: SpinnerType['unit'] = 'px';
	export let duration: SpinnerType['duration'] = '0.75s';
	export let size: SpinnerType['size'] = '20';
	export let pause: SpinnerType['pause'] = false;
</script>

<div
	class="circle"
	class:pause-animation={pause}
	style="--size: {size}{unit}; --color: {color}; --duration: {duration}"
/>

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