import { NextResponse } from 'next/server';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, subject, message } = body;

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Naam is verplicht (minimaal 2 tekens).' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'Geldig e-mailadres is verplicht.' }, { status: 400 });
    }
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json({ error: 'Bericht is verplicht (minimaal 10 tekens).' }, { status: 400 });
    }

    const apiToken = process.env.MAILERSEND_API_TOKEN;
    if (!apiToken) {
      console.warn('MAILERSEND_API_TOKEN not configured. Message received:', { name, email, service });
      return NextResponse.json({ success: true });
    }

    const { MailerSend, EmailParams, Sender, Recipient } = await import('mailersend');
    const mailerSend = new MailerSend({ apiKey: apiToken });

    const fromEmail = process.env.MAILERSEND_FROM_EMAIL ?? 'noreply@saccs.sr';
    const fromName = process.env.MAILERSEND_FROM_NAME ?? 'SACCS Website';

    const emailParams = new EmailParams()
      .setFrom(new Sender(fromEmail, fromName))
      .setTo([new Recipient('jahangier_s@hotmail.com', 'Safiek Jahangier')])
      .setReplyTo(new Recipient(email.trim(), name.trim()))
      .setSubject(`Nieuwe aanvraag: ${subject || service || 'Algemeen'} — ${name.trim()}`)
      .setHtml(`
        <h2 style="font-family:sans-serif;color:#1a1a2e">Nieuwe contactaanvraag via saccs.sr</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif">
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;width:120px">Naam</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(name.trim())}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">E-mail</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(email.trim())}</td></tr>
          ${phone ? `<tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">Telefoon</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(String(phone))}</td></tr>` : ''}
          ${service ? `<tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">Dienst</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(String(service))}</td></tr>` : ''}
          ${subject ? `<tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">Onderwerp</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(String(subject))}</td></tr>` : ''}
          <tr><td style="padding:8px 12px;font-weight:bold;vertical-align:top">Bericht</td><td style="padding:8px 12px;white-space:pre-wrap">${escapeHtml(message.trim())}</td></tr>
        </table>
      `);

    await mailerSend.email.send(emailParams);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('MailerSend error:', err);
    return NextResponse.json({ error: 'Email kon niet worden verzonden. Probeer het later opnieuw.' }, { status: 500 });
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
