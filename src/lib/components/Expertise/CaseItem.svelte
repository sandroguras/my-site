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
	.case-item {
		@include flex();
		height: calc(100% - #{rem(20px)});
		padding-bottom: rem(20px);
		position: relative;

		@media only screen and (max-width: $small) {
			@include flex($align: center, $direction: column);
			text-align: center;
		}

		&__icon {
			$size: rem(40px);
			margin-right: rem(16px);
			height: $size;
			width: $size;

			@media only screen and (max-width: $small) {
				margin-right: 0;
				margin-bottom: rem(13px);
			}
		}

		div {
			flex: 1;
		}

		&__caption:last-child {
			margin-bottom: 0;
		}
	}
</style>
