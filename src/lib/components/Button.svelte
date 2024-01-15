<script lang="ts">
	export let text: string = '';
	export let href: string = '';
	export let iconClass: string = '';
</script>

<a {href} class="btn"><i class="font-icon {iconClass}"></i>{text}</a>

<style lang="scss">
	@import '../../styles/app/button';
</style>
