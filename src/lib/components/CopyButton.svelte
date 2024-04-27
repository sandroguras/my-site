<script lang="ts">
	export let textToCopy: string = '';
	let isCopied: boolean = false;

	async function copyToClipboard(): Promise<void> {
		if (textToCopy) {
			try {
				await navigator.clipboard.writeText(textToCopy);
				console.log('Copied!');
				isCopied = true;
				setTimeout(() => {
					isCopied = false;
				}, 3000);
			} catch (err) {
				console.error('Failed to copy:', err);
			}
		}
	}
</script>

<button class="copy-button" aria-label="Copy code" on:click={copyToClipboard}>
	{#if isCopied}
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
				 stroke-linecap="round" stroke-linejoin="round">
			<rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
			<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
			<path d="m9 14 2 2 4-4"></path>
		</svg>
	{:else}
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
				 stroke-linecap="round" stroke-linejoin="round">
			<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
			<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
		</svg>
	{/if}
</button>

<style lang="scss">
  @import "#styles/app/copy-button.scss";
</style>