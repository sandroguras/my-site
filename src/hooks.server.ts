// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const disabledPaths = ['']; // Paths to disable
	const cacheControlDisabledPaths = ['/contact']; // Paths to disable cache
	const { pathname } = event.url;

	if (disabledPaths.includes(pathname)) {
		// Redirect to a maintenance page or return a custom error
		throw redirect(307, '/');
	}

	const response = await resolve(event);

	// Set security headers
	response.headers.set('X-Frame-Options', 'SAMEORIGIN');
	response.headers.set('X-XSS-Protection', '1; mode=block');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
	response.headers.set('Permissions-Policy', 'geolocation=(), microphone=()');
	//response.headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
	response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');

	// Disable cache for specific paths
	if (cacheControlDisabledPaths.includes(pathname)) {
		response.headers.set('Cache-Control', 'no-store, max-age=0');
	}

	return response;
};

/*
The  disabledPaths  array contains the paths that you want to disable. If the current path is in the array, the hook will redirect the user to the  /maintenance  page.
You can also return a custom error instead of redirecting the user. To do that, you can use the  Response  constructor to create a custom error response.
The  redirect  function is used to redirect the user to the  /maintenance  page. The first argument is the status code (307 in this case), and the second argument is the URL to redirect to.
The  resolve  function is used to continue the request if the path is not in the  disabledPaths  array.
The  handle  function is an asynchronous function that takes an object with an  event  and a  resolve  function. The  event  object contains the request details, and the  resolve  function is used to continue the request.
The  handle  function returns a promise that resolves to a response.
The  handle  function is exported as  handle .
The  handle  function is the entry point for the hook. It is called for every request.
The hook is now ready to use.
To use the hook, you need to import it in the  src/hooks.ts  file and add it to the  server  array.
*/