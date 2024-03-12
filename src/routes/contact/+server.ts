import type { RequestHandler } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const POST: RequestHandler = async ({ request }) => {
	const formData = await request.json();
	const { name, email, message } = formData;

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