<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { scale } from 'svelte/transition'
	import { sineOut } from 'svelte/easing'
	import { formatDate } from '$lib/utils/dateUtils';
	import type { ReviewData as ReviewDataType } from '#types/Carousel';
	export let showModal: boolean = false;
	export let modalData: ReviewDataType;
	export let modalIndex: number;
	export let closeModal: () => void;
	let originalOverflow: string;

	function handleClickOutside(event: MouseEvent): void {
		// Close the modal if the click occurred outside the modal content
		if (event.target === event.currentTarget) {
			closeModal();
		}
	}

	onMount(() => {
		if (browser) {
			// Only run this code on the client side
			originalOverflow = document.body.style.overflow;
		}

		return () => {
			if (browser) {
				// Cleanup code for client side
				document.body.style.overflow = originalOverflow;
			}
		};
	});

	$: if (browser && showModal) {
		document.body.style.overflow = 'hidden';
	} else if (browser) {
		document.body.style.overflow = originalOverflow;
	}
</script>

{#if showModal}
	<!--TODO: Remove empty classes-->
	<div class="mfp-bg mfp-zoom-out mfp-ready"></div>
	<div
		class="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-zoom-out mfp-ready"
		tabindex="-1"
		style="overflow: hidden auto;"
	>
		<div class="mfp-container mfp-s-ready mfp-inline-holder" on:click={handleClickOutside}>
			<div class="mfp-content">
				<div transition:scale={{duration: 500, delay: 100, easing: sineOut}}>
					<div id="review-{modalIndex}" on:click|stopPropagation class="popup">
						<div class="row">
							<div class="col-12 col-sm-2 full-rewiew-con-avatar">
								<figure class="box box-avatar">
									<img src={modalData.image} alt={modalData.imageAlt} />
								</figure>
								<div class="review-icon-quote"></div>
							</div>
							<div class="col-12 col-sm-10 full-rewiew-con-text">
								<h2 class="title title--h2">{modalData.name}</h2>
								<span class="review-date">{formatDate(modalData.reviewDate)}</span>
								{modalData.copy}
							</div>
						</div>
						<button title="Close (Esc)" type="button" class="mfp-close" on:click={closeModal}
							>×</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	@import '#styles/app/popup';
	@import '#styles/app/testimonials';
</style>
