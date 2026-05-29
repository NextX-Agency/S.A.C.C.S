'use client';

import { FormEvent, useState } from 'react';

export default function ContactPageForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          service: data.get('service'),
          subject: data.get('subject'),
          message: data.get('message'),
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error ?? 'Er is een fout opgetreden. Probeer het later opnieuw.');
        return;
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        form.reset();
      }, 5000);
    } catch {
      setError('Verbindingsfout. Controleer uw internetverbinding en probeer opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading text-xl font-bold text-saccs-text mb-2">
          Bedankt voor uw bericht!
        </h3>
        <p className="text-saccs-grey text-sm">
          We nemen zo spoedig mogelijk contact met u op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="cp-name" className="block text-sm font-medium text-saccs-text mb-1">
          Naam *
        </label>
        <input
          type="text"
          id="cp-name"
          name="name"
          required
          className="form-input"
          placeholder="Uw volledige naam"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cp-email" className="block text-sm font-medium text-saccs-text mb-1">
            E-mail *
          </label>
          <input
            type="email"
            id="cp-email"
            name="email"
            required
            className="form-input"
            placeholder="uw@email.com"
          />
        </div>
        <div>
          <label htmlFor="cp-phone" className="block text-sm font-medium text-saccs-text mb-1">
            Telefoon
          </label>
          <input
            type="tel"
            id="cp-phone"
            name="phone"
            className="form-input"
            placeholder="+597 ..."
          />
        </div>
      </div>

      <div>
        <label htmlFor="cp-service" className="block text-sm font-medium text-saccs-text mb-1">
          Dienst
        </label>
        <select id="cp-service" name="service" className="form-input">
          <option value="">Selecteer een dienst</option>
          <option value="b2b">Zakelijke Schoonmaak</option>
          <option value="b2c">Particuliere Schoonmaak</option>
          <option value="events">Evenementenservice</option>
          <option value="specialist">Specialistische Diensten</option>
          <option value="other">Anders</option>
        </select>
      </div>

      <div>
        <label htmlFor="cp-subject" className="block text-sm font-medium text-saccs-text mb-1">
          Onderwerp *
        </label>
        <input
          type="text"
          id="cp-subject"
          name="subject"
          required
          className="form-input"
          placeholder="Waar kunnen wij u mee helpen?"
        />
      </div>

      <div>
        <label htmlFor="cp-message" className="block text-sm font-medium text-saccs-text mb-1">
          Bericht *
        </label>
        <textarea
          id="cp-message"
          name="message"
          rows={4}
          required
          className="form-input resize-none"
          placeholder="Vertel ons meer over uw wensen..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Versturen...</span>
          </>
        ) : (
          <>
            <span>Verstuur Bericht</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
