import '@hcaptcha/types';

// Injected by astro.config.mjs's vite.define — a per-build timestamp used
// to cache-bust static assets in public/ that Astro/Vite don't hash.
declare global {
	const __BUILD_TIME__: string;
}
