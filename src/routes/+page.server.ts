import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { env } from '$env/dynamic/private';

export const actions: Actions = {
	contact: async (event) => {
		const { request, fetch } = event;
		const data = await request.formData();
		const name = data.get('name')?.toString();
		const email = data.get('email')?.toString();
		const message = data.get('message')?.toString();
		const turnstileResponse = data.get('cf-turnstile-response')?.toString();

		// 1. Validierung der Pflichtfelder
		if (!name || !email || !message) {
			return fail(400, { error: 'Bitte füllen Sie alle Felder aus.' });
		}

		// 2. Turnstile Spamschutz Verifizierung
		if (!turnstileResponse) {
			return fail(400, {
				error:
					'Bitte bestätigen Sie den Spamschutz (Captcha). Falls es nicht erscheint, prüfen Sie Ihre AdBlocker-Einstellungen.'
			});
		}

		try {
			const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					secret: env.TURNSTILE_SECRET_KEY,
					response: turnstileResponse
				})
			});

			const verifyResult = (await verifyRes.json()) as { success: boolean };

			if (!verifyResult.success) {
				return fail(400, {
					error: 'Spamschutz-Validierung fehlgeschlagen. Bitte versuchen Sie es erneut.'
				});
			}

			// 3. E-Mail Versand via Resend
			if (env.RESEND_API_KEY && env.RESEND_API_KEY !== 'HIER_RESEND_KEY_EINTRAGEN') {
				const resendRes = await fetch('https://api.resend.com/emails', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${env.RESEND_API_KEY}`
					},
					body: JSON.stringify({
						from: 'Tim Gromeyer Website <kontakt@gromeyer-it.de>',
						to: ['kontakt@gromeyer-it.de'],
						reply_to: email,
						subject: `Neue Kontaktanfrage von ${name}`,
						html: `
							<div style="font-family: sans-serif; padding: 20px; color: #333; line-height: 1.6;">
								<h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">Neue Kontaktanfrage</h2>
								<div style="margin: 20px 0;">
									<p><strong>Name:</strong> ${name}</p>
									<p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
								</div>
								<p><strong>Nachricht:</strong></p>
								<div style="background: #f9fafb; padding: 20px; border-radius: 12px; border: 1px solid #e5e7eb; font-style: italic;">
									${message.replace(/\n/g, '<br>')}
								</div>
								<hr style="margin-top: 30px; border: 0; border-top: 1px solid #eee;">
								<p style="font-size: 12px; color: #999;">Tim Gromeyer - Full Stack Developer</p>
							</div>
						`
					})
				});

				if (!resendRes.ok) {
					const errorData = await resendRes.json();
					console.error('Resend API Fehler:', errorData);
				} else {
					console.log(' E-Mail erfolgreich via Resend versendet.');
				}
			} else {
				console.log(' RESEND_API_KEY fehlt oder ist Platzhalter. Keine E-Mail gesendet.');
			}

			return { success: true };
		} catch (err) {
			console.error('Server Fehler im Kontaktformular:', err);
			return fail(500, {
				error:
					'Ein technischer Fehler ist aufgetreten. Bitte senden Sie uns stattdessen direkt eine E-Mail an kontakt@gromeyer-it.de'
			});
		}
	}
};
