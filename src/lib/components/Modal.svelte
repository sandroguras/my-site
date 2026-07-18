<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { browser } from '$app/environment';
	import { scale } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';
	import { formatDate } from '$lib/utils/dateUtils';
	import type { ReviewData as ReviewDataType } from '#types/Carousel';
	export let showModal: boolean = false;
	export let modalData: ReviewDataType;
	export let modalIndex: number;
	export let closeModal: () => void;
	let originalOverflow: string;
	let closeButtonEl: HTMLButtonElement;
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
		triggerEl = document.activeElement;
		// closeButtonEl isn't bound until the {#if showModal} block finishes
		// mounting, which happens after this reactive statement runs
		tick().then(() => closeButtonEl?.focus());
	} else if (browser) {
		document.body.style.overflow = originalOverflow;
		if (triggerEl instanceof HTMLElement) {
			triggerEl.focus();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

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
		<div class="mfp-container mfp-s-ready mfp-inline-holder" on:click={handleClickOutside}>
			<div class="mfp-content">
				<div transition:scale={{ duration: 500, delay: 100, easing: sineOut }}>
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<div
						id="review-{modalIndex}"
						role="dialog"
						aria-modal="true"
						aria-labelledby="review-name-{modalIndex}"
						tabindex="-1"
						on:click|stopPropagation
						class="popup"
					>
						<div class="row">
							<div class="col-12 col-sm-2 full-rewiew-con-avatar">
								<figure class="box box-avatar">
									<img src={modalData.image} alt={modalData.imageAlt} loading="lazy" />
								</figure>
								<div class="review-icon-quote"></div>
							</div>
							<div class="col-12 col-sm-10 full-rewiew-con-text">
								<h2 id="review-name-{modalIndex}" class="title title--h2">{modalData.name}</h2>
								<span class="review-date">{formatDate(modalData.reviewDate)}</span>
								<!-- eslint-disable-next-line svelte/no-at-html-tags -- modalData.copy is static, developer-authored testimonial data (src/routes/+page.svelte), not user input -->
								{@html modalData.copy}
							</div>
						</div>
						<button
							bind:this={closeButtonEl}
							title="Close (Esc)"
							type="button"
							class="mfp-close"
							on:click={closeModal}>×</button
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
