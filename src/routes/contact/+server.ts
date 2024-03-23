/*
import type { RequestHandler } from '@sveltejs/kit';
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

export const POST: RequestHandler = async ({ request }) => {
	const formData = await request.json();
	const { name, email, message, token } = formData

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
		return new Response(JSON.stringify({ message: 'hCaptcha secret key is missing' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
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

	// Use the type guard to check the verification result
	if (!isHCaptchaVerifyResponse(verificationResult)) {
		return new Response(JSON.stringify({ message: 'Invalid hCaptcha verification response' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	if (!verificationResult.success) {
		// Respond with an error if hCaptcha verification fails
		return new Response(JSON.stringify({ message: 'hCaptcha verification failed' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
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
		text: `
      Name: ${sanitizedName}
      Email: ${sanitizedEmail}
      Message: ${sanitizedMessage}
    `
	};

	try {
		// Send the email
		await transporter.sendMail(mailOptions);
		return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		console.error('Error sending email:', error);
		return new Response(JSON.stringify({ message: 'Error sending email' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
*/
