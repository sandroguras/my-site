<!-- Contact -->
<script lang="ts">
	import Form from '$lib/components/Form.svelte';
	import Copy from '$lib/components/Copy.svelte';
	import type { Copy as CopyType } from '#types/Copy';

	const Conclusion: CopyType = {
		copy: '<p>If you have any questions, ideas, or would like to explore the possibility of collaborating on a project, please don\'t hesitate to reach out by filling out the form below. I\'m always eager to connect with like-minded individuals, discuss potential opportunities, and find ways to work together towards common goals.</p>\n' +
			'<p>Whether you need assistance, have a proposal in mind, or simply want to start a conversation, I\'m here to listen and respond promptly. Your input is valuable to me, and I look forward to the chance to learn more about your thoughts and see how we can combine our skills and expertise to create something remarkable.</p>\n'
	};

</script>

<!-- About -->
<section class="copy">
	<Copy>
		{@html Conclusion.copy}
	</Copy>
</section>

<Form />

<style lang="scss">
  .copy {
    margin-bottom: 2.5rem;
  }
</style>