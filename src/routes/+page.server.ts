import { fail } from "@sveltejs/kit";
import nodemailer from "nodemailer";
import { env } from "$env/dynamic/private";
import type { Actions } from "./$types";

export const actions = {
	contact: async ({ request }: { request: Request }) => {
		const data = await request.formData();
		const name = data.get("name");
		const email = data.get("email");
		const message = data.get("message");

		if (!name || !email || !message) {
			return fail(400, { missing: true });
		}

		try {
			const transporter = nodemailer.createTransport({
				host: env.SMTP_HOST,
				port: Number(env.SMTP_PORT),
				secure: env.SMTP_SECURE === "true",
				auth: {
					user: env.SMTP_USER,
					pass: env.SMTP_PASS,
				},
			});

			await transporter.sendMail({
				from: env.SMTP_FROM,
				to: env.SMTP_TO,
				subject: `Neue Nachricht von ${name}`,
				text: `Name: ${name}\nEmail: ${email}\n\nNachricht:\n${message}`,
				html: `<p><strong>Name:</strong> ${name}</p>
					   <p><strong>Email:</strong> ${email}</p>
					   <p><strong>Nachricht:</strong><br>${message.toString().replace(/\n/g, "<br>")}</p>`,
			});

			return { success: true };
		} catch (error) {
			console.error("Email sending failed:", error);
			return fail(500, { error: "Failed to send email" });
		}
	},
} satisfies Actions;
