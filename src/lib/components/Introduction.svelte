<script lang="ts">
/*	import {onMount} from "svelte";*/

    export let copy: string = '';

/*    let ingroductionSafeHTML;
    onMount(async () => {
        if (typeof window !== 'undefined') {
            const DOMPurify = (await import('dompurify')).default;
            ingroductionSafeHTML = DOMPurify.sanitize(copy);
        }
    });*/
</script>

<!-- About -->
<section class="about">
	<div class="pb-0 pb-sm-2">
		{@html copy}
	</div>
</section>

<style lang="scss">
</style>
