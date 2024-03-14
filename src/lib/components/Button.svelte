<script lang="ts">
	export let text: string = '';
	export let link: string = '';
	export let icon: string = '';
	export let ariaLable: string = '';
</script>

<a href={link} download class="btn" aria-label={ariaLable}><i class="font-icon {icon}"></i>{text}</a>

<style lang="scss">
	@import '#styles/app/button';
</style>
