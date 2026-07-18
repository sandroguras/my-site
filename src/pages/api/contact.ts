import type { APIRoute } from 'astro';
import sanitizeHtml from 'sanitize-html';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const prerender = false;

const maxMessageLength = 500;

interface HCaptchaVerifyResponse {
	success: boolean;
	challenge_ts?: string;
	hostname?: string;
	credit?: boolean;
	'error-codes'?: string[];
}

function isHCaptchaVerifyResponse(obj: unknown): obj is HCaptchaVerifyResponse {
	return (
		typeof obj === 'object' &&
		obj !== null &&
		typeof (obj as HCaptchaVerifyResponse).success === 'boolean' &&
		(typeof (obj as HCaptchaVerifyResponse)['error-codes'] === 'undefined' ||
			Array.isArray((obj as HCaptchaVerifyResponse)['error-codes']))
	);
}

export const POST: APIRoute = async ({ request }) => {
	const formData = await request.formData();
	const name = formData.get('name');
	const email = formData.get('email');
	const message = formData.get('message');
	const token = formData.get('token');

	if (
		typeof name !== 'string' ||
		typeof email !== 'string' ||
		typeof message !== 'string' ||
		typeof token !== 'string'
	) {
		return new Response(JSON.stringify({ message: 'Form data validation failed' }), {
			status: 400
		});
	}

	let truncatedMessage = message;
	if (message.length > maxMessageLength) {
		truncatedMessage = message.slice(0, maxMessageLength);
	}

	const sanitizedName = sanitizeHtml(name);
	const sanitizedEmail = sanitizeHtml(email);
	const sanitizedMessage = sanitizeHtml(truncatedMessage);

	const secretKey = process.env.HCAPTCHA_SECRET_KEY;
	if (!secretKey) {
		return new Response(JSON.stringify({ message: 'hCaptcha secret key is missing' }), {
			status: 500
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

	if (!isHCaptchaVerifyResponse(verificationResult)) {
		return new Response(JSON.stringify({ message: 'Invalid hCaptcha verification response' }), {
			status: 500
		});
	}

	if (!verificationResult.success) {
		return new Response(JSON.stringify({ message: 'hCaptcha verification failed' }), {
			status: 400
		});
	}

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

	const mailOptions = {
		from: process.env.GMAIL_USER,
		to: process.env.GMAIL_USER,
		replyTo: sanitizedEmail,
		subject: `Contact Form Submission from ${sanitizedName}`,
		text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\nMessage: ${sanitizedMessage}`
	};

	try {
		await transporter.sendMail(mailOptions);
		return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
	} catch (err) {
		console.error('Error sending email:', err);
		return new Response(JSON.stringify({ message: 'Error sending email' }), { status: 500 });
	}
};
