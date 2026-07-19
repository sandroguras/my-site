<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { scale } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';
	import { formatDate } from '$lib/utils/dateUtils';
	import type { ReviewData as ReviewDataType } from '#types/Carousel';

	let {
		showModal = false,
		modalData,
		modalIndex,
		closeModal
	}: {
		showModal?: boolean;
		modalData: ReviewDataType;
		modalIndex: number;
		closeModal: () => void;
	} = $props();

	let originalOverflow: string;
	let closeButtonEl: HTMLButtonElement | undefined = $state();
	let triggerEl: Element | null = null;

	function handleClickOutside(event: MouseEvent): void {
		// Close the modal if the click occurred outside the modal content
		if (event.target === event.currentTarget) {
			closeModal();
		}
	}

	function handleKeydown(event: KeyboardEvent): void {
		if (showModal && event.key === 'Escape') {
			closeModal();
		}
	}

	onMount(() => {
		originalOverflow = document.body.style.overflow;

		return () => {
			document.body.style.overflow = originalOverflow;
		};
	});

	$effect(() => {
		if (showModal) {
			document.body.style.overflow = 'hidden';
			triggerEl = document.activeElement;
			// closeButtonEl isn't bound until the {#if showModal} block finishes
			// mounting, which happens after this effect first runs
			tick().then(() => closeButtonEl?.focus());
		} else {
			document.body.style.overflow = originalOverflow;
			if (triggerEl instanceof HTMLElement) {
				triggerEl.focus();
			}
		}
	});
</script>

<svelte:window onkeydown={handleKeydown} />

{#if showModal}
	<!--TODO: Remove empty classes-->
	<div class="mfp-bg mfp-zoom-out mfp-ready"></div>
	<div
		class="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-zoom-out mfp-ready"
		tabindex="-1"
		style="overflow: hidden auto;"
	>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="mfp-container mfp-s-ready mfp-inline-holder" onclick={handleClickOutside}>
			<div class="mfp-content">
				<div transition:scale={{ duration: 500, delay: 100, easing: sineOut }}>
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<div
						id="review-{modalIndex}"
						role="dialog"
						aria-modal="true"
						aria-labelledby="review-name-{modalIndex}"
						tabindex="-1"
						onclick={(event) => event.stopPropagation()}
						class="popup"
					>
						<div class="row">
							<div class="col-12 col-sm-2 full-rewiew-con-avatar">
								<figure class="box box-avatar">
									<img
										src={modalData.image}
										width={modalData.imageWidth}
										height={modalData.imageHeight}
										alt={modalData.imageAlt}
										loading="lazy"
									/>
								</figure>
								<div class="review-icon-quote"></div>
							</div>
							<div class="col-12 col-sm-10 full-rewiew-con-text">
								<h2 id="review-name-{modalIndex}" class="title title--h2">{modalData.name}</h2>
								<span class="review-date">{formatDate(modalData.reviewDate)}</span>
								<!-- eslint-disable-next-line svelte/no-at-html-tags -- modalData.copy is rendered Markdown from src/content/testimonials, not user input -->
								{@html modalData.copy}
							</div>
						</div>
						<button
							bind:this={closeButtonEl}
							title="Close (Esc)"
							type="button"
							class="mfp-close"
							onclick={closeModal}>×</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	@use 'styles/app/popup';
	@use 'styles/app/testimonials';
</style>
