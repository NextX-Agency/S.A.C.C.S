import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, message } = body;

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ error: 'Naam is verplicht (minimaal 2 tekens).' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'Geldig e-mailadres is verplicht.' }, { status: 400 });
    }
    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json({ error: 'Bericht is verplicht (minimaal 10 tekens).' }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: 'S.A.C.C.S. Website <onboarding@resend.dev>',
      to: 'jahangier_s@hotmail.com',
      replyTo: email.trim(),
      subject: `Nieuwe aanvraag: ${service || 'Algemeen'} — ${name.trim()}`,
      html: `
        <h2>Nieuwe contactaanvraag via saccs.sr</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif">
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">Naam</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(name.trim())}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(email.trim())}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee">Onderwerp</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(service || 'Niet gespecificeerd')}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;vertical-align:top">Bericht</td><td style="padding:8px 12px;white-space:pre-wrap">${escapeHtml(message.trim())}</td></tr>
        </table>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Email kon niet worden verzonden. Probeer het later opnieuw.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Er is een fout opgetreden. Probeer het later opnieuw.' }, { status: 500 });
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
