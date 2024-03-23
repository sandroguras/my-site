import { error, json } from '@sveltejs/kit';
import type { Actions } from './$types';
import sanitizeHtml from 'sanitize-html';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const maxMessageLength: number = 500;

interface HCaptchaVerifyResponse {
	success: boolean;
	challenge_ts?: string; // Timestamp of the challenge
	hostname?: string; // The site where the hCaptcha was solved
	credit?: boolean; // Optional: Indicates if credit to the site owner will be given
	'error-codes'?: string[]; // Optional: Error codes
}

// Type guard to check if an object is an HCaptchaVerifyResponse
function isHCaptchaVerifyResponse(obj: any): obj is HCaptchaVerifyResponse {
	return (
		typeof obj.success === 'boolean' &&
		(typeof obj['error-codes'] === 'undefined' || Array.isArray(obj['error-codes']))
	);
}

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');
		const message = formData.get('message');
		const token = formData.get('token');

		if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string' || typeof token !== 'string') {
			throw error(400, { message: 'Form data validation failed' });
		}

		// Truncate message if it exceeds the maximum allowed length
		let truncatedMessage = message;
		if (message.length > maxMessageLength) {
			truncatedMessage = message.slice(0, maxMessageLength);
		}

		// Sanitize user input
		const sanitizedName = sanitizeHtml(name);
		const sanitizedEmail = sanitizeHtml(email);
		const sanitizedMessage = sanitizeHtml(truncatedMessage);

		const secretKey = process.env.HCAPTCHA_SECRET_KEY;
		if (!secretKey) {
			throw error(500, { message: 'hCaptcha secret key is missing' });
		}

		const verificationResponse = await fetch('https://hcaptcha.com/siteverify', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams({
				secret: secretKey,
				response: token
			}).toString()
		});

		const verificationResult = await verificationResponse.json();

		if (!isHCaptchaVerifyResponse(verificationResult)) {
			throw error(500, { message: 'Invalid hCaptcha verification response' });
		}

		if (!verificationResult.success) {
			// Respond with an error if hCaptcha verification fails
			return json({ message: 'hCaptcha verification failed' }, { status: 400 });
		}

		// Configure Gmail SMTP server details
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			host: 'smtp.gmail.com',
			port: 587,
			secure: false,
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_PASSWORD
			}
		});

		// Setup email data
		const mailOptions = {
			from: process.env.GMAIL_USER,
			to: process.env.GMAIL_USER,
			replyTo: sanitizedEmail,
			subject: `Contact Form Submission from ${sanitizedName}`,
			text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\nMessage: ${sanitizedMessage}`
		};

		try {
			// Send the email
			await transporter.sendMail(mailOptions);
			return json({ message: 'Email sent successfully' });
		} catch (err) {
			console.error('Error sending email:', err);
			throw error(500, { message: 'Error sending email' });
		}
	}
};