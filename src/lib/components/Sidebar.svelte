<script lang="ts">
	import avatar from '../../assets/images/my-avatar.png';
	import { slide, fade } from 'svelte/transition';
	import { cubicOut } from "svelte/easing";

	// Logic for toggling the visibility of the contacts block
	let isShown: boolean = true; // Start with the element hidden
	let displayClass: string;
	$: displayClass = isShown ? 'block' : 'hidden';
	function toggleVisibility(e: MouseEvent): void {
		e.preventDefault();
		isShown = !isShown;
	}
</script>

<style lang="scss">
    @import '../../styles/app/sidebar';
	.hidden {
		display: none;
	}
	.block {
		display: block;
	}
</style>

<aside class="col-12 col-md-12 col-xl-3">
	<div class="sidebar box-outer sticky-column">
		<!-- My photo -->
		<div class="sidebar__base-info">
			<figure class="avatar-box">
				<img src="{avatar}" alt="Sandro Guras">
			</figure>

			<div class="text-xl-center">
				<h3 class="title title--h3 sidebar__name">Sandro Guras</h3>
				<div class="badge">Web Developer</div>
				<!-- Social -->
				<div class="social">
					<a class="social__link" target="_blank" href="https://twitter.com/sandro_guras"><i class="feathericon-twitter"></i></a>
					<a class="social__link" href="https://www.linkedin.com/in/gurasan/" target="_blank"><i class="feathericon-linkedin"></i></a>
				</div>
			</div>

			<button on:click={toggleVisibility} class="btn btn--small btn--icon-right sidebar__btn js-btn-toggle"><span>Show Contacts</span><i class="feathericon-chevron-down"></i></button>
		</div>
		{#if isShown}
		<div class="sidebar__container" transition:fade={{ delay: 100, duration: 500, easing: cubicOut }}>
			<div class="{displayClass} sidebar__additional-info"
					 transition:slide={{ delay: 100, duration: 600, easing: cubicOut, axis: 'x' }}>
				<div class="separation"></div>
				<ul class="details-info">
					<!-- Email -->
					<li class="details-info__item">
						<span class="box icon-box"><i class="font-icon icon-envelope"></i></span>
						<div class="contacts-block__info">
							<span class="overhead">Email</span>
							<a class="text-overflow" href="mailto:ricardo@example.com" title="ricardo@example.com">ricardo@example.com</a>
						</div>
					</li>
					<!-- Phone -->
					<li class="details-info__item">
						<span class="box icon-box"><i class="font-icon icon-phone"></i></span>
						<div class="contacts-block__info">
							<span class="overhead">Phone</span>
							<span class="text-overflow" title="+1 (070) 123-4567">+1 (070) 123-4567</span>
						</div>
					</li>
					<!-- Birthday -->
					<li class="details-info__item">
						<span class="box icon-box"><i class="font-icon icon-calendar"></i></span>
						<div class="contacts-block__info">
							<span class="overhead">Birthday</span>
							<span class="text-overflow" title="March 12, 1995">March 12, 1995</span>
						</div>
					</li>
					<!-- Location -->
					<li class="details-info__item">
						<span class="box icon-box"><i class="font-icon icon-location"></i></span>
						<div class="contacts-block__info">
							<span class="overhead">Location</span>
							<span class="text-overflow" title="San-Francisco, USA">San-Francisco, USA</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
		{/if}
	</div>
</aside>