<script lang="ts">
	let formData = {
		name: '',
		email: ''
	};

	async function handleSubmit(event) {
		event.preventDefault(); // Prevents the form from submitting traditionally

		const response = await fetch('/api/submit-form', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		});

		if (response.ok) {
			// Handle success
			console.log('Form submitted successfully');
		} else {
			// Handle error
			console.error('Form submission failed');
		}
	}
</script>

<form id="contact-form" class="contact-form" data-toggle="validator">
	<div class="row">
		<div class="form-group col-12 col-md-6">
			<input
				type="text"
				class="input form-control"
				id="nameContact"
				name="nameContact"
				placeholder="Full name"
				required="required"
				autocomplete="on"
				oninvalid="setCustomValidity('Fill in the field')"
				onkeyup="setCustomValidity('')"
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
				required="required"
				autocomplete="on"
				oninvalid="setCustomValidity('Email is incorrect')"
				onkeyup="setCustomValidity('')"
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
				required="required"
				oninvalid="setCustomValidity('Fill in the field')"
				onkeyup="setCustomValidity('')"
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