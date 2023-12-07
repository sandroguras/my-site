<script lang="ts">
	export let name: string = '';
	export let icon: string = '';
	export let icon_alt: string = '';
	export let copy: string = '';
</script>

<div class="col-12 col-lg-6">
	<div class="case-item box box-inner">
		<img class="case-item__icon" src={icon} alt={icon_alt} />
		<div>
			<h3 class="title title--h3">{name}</h3>
			<p class="case-item__caption">{copy}</p>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../../styles/app/cases';
</style>
