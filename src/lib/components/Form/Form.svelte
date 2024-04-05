<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';
	import '@hcaptcha/types';
	import DOMPurify from 'dompurify';
	import Button from '$lib/components/Button.svelte';

	const hCaptchaSiteKey = '0ac851b0-d0fb-4ecb-afa8-f83139f68766';
	let messageLength = 0;
	const maxMessageLength = 500;

	function sanitize(dirty: string): string {
		return DOMPurify.sanitize(dirty);
	}

	function handleNameInput(event: Event) {
		const target = event.target as HTMLInputElement;
		let inputValue = target.value;

		// Check if the entire input is just spaces and there's no non-space character
		if (inputValue.trim().length === 0 && inputValue.length > 0) {
			// If there are only spaces (and possibly the input was spaces before),
			// keep the current value without adding more spaces.
			// This condition prevents adding more spaces if there's no non-space character yet.
			formData.name = formData.name.trimEnd();
		} else {
			// Sanitize the input value
			formData.name = sanitize(inputValue);
		}
	}

	function handleMessageInput(event: Event) {
		const target = event.target as HTMLTextAreaElement;
		let inputValue = target.value;

		// Check if the entire input is just spaces and there's no non-space character
		if (inputValue.trim().length === 0 && inputValue.length > 0) {
			// If there are only spaces (and possibly the input was spaces before),
			// keep the current value without adding more spaces.
			// This condition prevents adding more spaces if there's no non-space character yet.
			formData.message = formData.message.trimEnd();
		} else {
			// Allow the input if it's not only spaces or if there's at least one non-space character
			formData.message = sanitize(inputValue.slice(0, maxMessageLength)); // Sanitize the input value
		}

		messageLength = formData.message.length;
	}

	let formData = {
		name: '',
		email: '',
		message: '',
		token: ''
	};

	$: formSubmitted = false;

	// reCaptcha script for contact form
	onMount(() => {
		if (typeof window !== 'undefined') {
			let script = document.createElement('script');
			script.src = 'https://js.hcaptcha.com/1/api.js?render=explicit';
			script.async = true;
			script.defer = true;
			document.head.appendChild(script);
			script.onload = () => {
				// Initialize hCaptcha with your site key
				window.hcaptcha.render('h-captcha', { sitekey: hCaptchaSiteKey });
			};
		}

	});

	async function handleSubmit(event: Event) {
		event.preventDefault();

		formData.name = formData.name.trim();
		formData.message = formData.message.trim();

		// Check if the name or message is empty after trimming and handle it appropriately
		if (!formData.name) {
			console.error('The name cannot be empty.');
			return; // Prevent form submission if the name is empty
		}

		// Check if the message is empty after trimming and handle it appropriately
		if (!formData.message) {
			console.error('The message cannot be empty.');
			return; // Prevent form submission if the message is empty
		}

		if (typeof window !== 'undefined' && window.hcaptcha) {
			// Get the hCaptcha response (token)
			const token = window.hcaptcha.getResponse();

			if (!token) {
				console.error('Please complete the hCaptcha challenge');
				return; // Early return if there's no token, indicating captcha was not solved
			}

			formData.token = token;

			// Create a new FormData object
			const formDataToSend = new FormData();
			formDataToSend.append('name', formData.name);
			formDataToSend.append('email', formData.email);
			formDataToSend.append('message', formData.message);
			formDataToSend.append('token', formData.token);

			// Endpoint here for form submission
			const response = await fetch('/contact', {
				method: 'POST',
				body: formDataToSend
			});

			if (response.ok) {
				console.log('Form submitted successfully');
				console.log('Thank you for your message!');
				formSubmitted = true;
				// Reset form data or handle success as needed
				formData = { name: '', email: '', message: '', token: '' };
				// Reset hCaptcha for next submission
				window.hcaptcha.reset();
			} else {
				console.error('Form submission failed');
				// Handle failure as needed, possibly showing an error message to the user
			}
		} else {
			console.error('hCaptcha not loaded');
			// Handle the case where hCaptcha didn't load or initialize properly
		}
	}
</script>

{#if !formSubmitted}
	<div transition:slide={{duration: 250, delay: 50, easing: sineOut}}>
		<form id="contact-form" class="contact-form" on:submit|preventDefault={handleSubmit}>
			<div class="row">
				<div class="form-group col-12 col-md-6">
					<input
						type="text"
						class="input form-control"
						id="nameContact"
						name="nameContact"
						placeholder="Full name"
						required
						autocomplete="on"
						bind:value={formData.name}
						on:input={handleNameInput}
					/>
					<div class="help-block with-errors"></div>
				</div>
				<div class="form-group col-12 col-md-6">
					<input
						type="email"
						class="input form-control"
						id="emailContact"
						name="emailContact"
						placeholder="Email address"
						required
						autocomplete="on"
						bind:value={formData.email}
					/>
					<div class="help-block with-errors"></div>
				</div>
				<div class="form-group col-12 col-md-12">
					<textarea
						class="textarea form-control"
						id="messageContact"
						name="messageContact"
						placeholder="Your Message"
						rows="4"
						required
						bind:value={formData.message}
						on:input={handleMessageInput}
						maxlength={maxMessageLength}
					></textarea>
					<div class="help-block with-errors"></div>
					<div class="message-length">{messageLength}/{maxMessageLength}</div>
				</div>
				<div class="col-12 col-md">
					<div id="h-captcha" data-sitekey={hCaptchaSiteKey}></div>
				</div>
				<div class="col-12 col-md-4">
					<Button icon="icon-send" text="Send Message" />
				</div>
			</div>
		</form>
	</div>
	<style lang="scss">
    @import '#styles/app/form';
	</style>
{:else}
	<div transition:slide={{duration: 250, delay: 200, easing: sineOut}}>
		<div class="thank-you-message">
			<div class="review-item box box-inner">
				<figure class="box box-avatar">
					<p class="portrait">&#128236</p>
				</figure>
				<h4 class="title title--h3">Thank you!</h4>
				<p class="review-item__caption">Your message was sent. I will contact you shortly.</p>
			</div>
		</div>
	</div>

	<style lang="scss">
    @import '#styles/app/testimonials';
	</style>
{/if}