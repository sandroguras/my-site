/**
 * Formats a date string into a more readable form.
 *
 * @param dateStr The date string to format.
 * @returns A formatted date string or a fallback message if the input is invalid.
 */
export function formatDate(dateStr: string): string {
	const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
	try {
		const date = new Date(dateStr);
		if (!isNaN(date.getTime())) {
			return new Intl.DateTimeFormat('en-US', options).format(date);
		} else {
			console.error(`Invalid date: ${dateStr}`);
			return 'Invalid date';
		}
	} catch (e) {
		console.error(`Error formatting date: ${dateStr}`, e);
		return 'Error formatting date';
	}
}

/**
 * Checks if a given string is a valid ISO date string.
 *
 * @param dateStr The date string to check.
 * @returns True if the string is a valid ISO date string, false otherwise.
 */
export function isValidISODateString(dateStr: string): boolean {
	const date = new Date(dateStr);
	return !isNaN(date.getTime());
}
