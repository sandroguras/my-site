import type { RequestHandler } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

interface ReCaptchaVerifyResponse {
	success: boolean;
	challenge_ts?: string;
	hostname?: string;
	score?: number;
	action?: string;
	errorCodes?: string[];
}

function isReCaptchaVerifyResponse(obj: any): obj is ReCaptchaVerifyResponse {
	return (
		'success' in obj &&
		typeof obj.success === 'boolean' &&
		(obj.errorCodes === undefined || Array.isArray(obj.errorCodes))
	);
}

export const POST: RequestHandler = async ({ request }) => {
	const formData = await request.json();
	const { name, email, message, token } = formData;

	const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
	});

	const json = await recaptchaResponse.json();

	if (!isReCaptchaVerifyResponse(json)) {
		throw new Error('Invalid reCAPTCHA verify response');
	}

// At this point, TypeScript knows json is of type ReCaptchaVerifyResponse
	const recaptchaResult = json; // json is now known to be ReCaptchaVerifyResponse

	if (!recaptchaResult.success) {
		return new Response(JSON.stringify({ message: 'reCAPTCHA verification failed' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' },
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
			pass: process.env.GMAIL_PASSWORD,
		},
	});

	// Setup email data
	const mailOptions = {
		from: process.env.GMAIL_USER,
		to: process.env.GMAIL_USER,
		replyTo: email,
		subject: `Contact Form Submission from ${name}`,
		text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
	};

	try {
		// Send the email
		await transporter.sendMail(mailOptions);
		return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		console.error('Error sending email:', error);
		return new Response(JSON.stringify({ message: 'Error sending email' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};