<script lang="ts">
	let formData = {
		name: '',
		email: '',
		message: ''
	};

	async function handleSubmit() {
		const response = await fetch('/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		});

		if (response.ok) {
			console.log('Form submitted successfully');
			// Reset form data after successful submission
			formData = {
				name: '',
				email: '',
				message: ''
			};
			// Show success message
			console.log('Thank you for your message!');
		} else {
			console.error('Form submission failed');
		}
	}
</script>

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
			></textarea>
			<div class="help-block with-errors"></div>
		</div>
	</div>
	<div class="row">
		<div class="col-12 col-md-6 order-2 order-md-1 text-center text-md-start">
			<div id="validator-contact" class="hidden"></div>
		</div>
		<div class="col-12 col-md-6 order-1 order-md-2 text-end">
			<button type="submit" class="btn"><i class="font-icon icon-send"></i>Send Message</button>
		</div>
	</div>
</form>

<style lang="scss">
  @import '#styles/app/form';
</style>