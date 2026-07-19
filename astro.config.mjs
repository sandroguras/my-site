import { defineConfig } from 'astro/config';
import svelte, { vitePreprocess } from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
	site: 'https://davidguras.dev',
	adapter: vercel(),
	integrations: [svelte({ preprocess: vitePreprocess() }), sitemap()],
	markdown: {
		shikiConfig: {
			theme: 'one-dark-pro'
		}
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					loadPaths: ['src'],
					additionalData: '@use "global" as *;'
				}
			}
		}
	}
});
