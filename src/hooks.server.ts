// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const disabledPaths = ['/blog']; // Paths to disable
	const { pathname } = event.url;

	if (disabledPaths.includes(pathname)) {
		// Redirect to a maintenance page or return a custom error
		// Option 1: Redirect
		throw redirect(307, '/');

		// Option 2: Return a custom error (uncomment if you prefer this method)
		// return new Response('This page is temporarily unavailable', { status: 503 });
	}

	return await resolve(event);
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