<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';

	const hCaptchaSiteKey = '0ac851b0-d0fb-4ecb-afa8-f83139f68766';
	let messageLength = 0;
	const maxMessageLength = 500;

	function handleMessageInput(event: Event) {
		const target = event.target as HTMLTextAreaElement;
		formData.message = target.value.slice(0, maxMessageLength);
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

		if (typeof window !== 'undefined' && window.hcaptcha) {
			// Get the hCaptcha response (token)
			const token = window.hcaptcha.getResponse();

			if (!token) {
				console.error('Please complete the hCaptcha challenge');
				return; // Early return if there's no token, indicating captcha was not solved
			}

			formData.token = token;

			// Your endpoint here
			const response = await fetch('/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
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
			</div>
			<div class="row align-items-center">
				<div class="col-12 col-md-6 order-1 order-md-1 text-center text-md-start">
					<div id="h-captcha" data-sitekey={hCaptchaSiteKey}></div>
				</div>
				<div class="col-12 col-md-6 order-2 order-md-2 text-end justify-content-center">
					<button type="submit" class="btn"><i class="font-icon icon-send"></i>Send Message</button>
				</div>
			</div>
		</form>
	</div>
	<style lang="scss">
    @import '#styles/app/form';
    .message-length {
      font-size: 0.8em;
      color: #888;
      text-align: right;
      margin-top: 0.25rem;
    }
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

    .thank-you-message {
      margin: 6rem auto;
      display: flex;
      justify-content: center;


      @media only screen and (max-width: $small) {
        margin: 3rem auto;
      }

      .portrait {
        font-size: rem(50px);
        text-align: center;

        @media only screen and (max-width: $small) {
          font-size: rem(40px);
        }
      }

    }
	</style>
{/if}