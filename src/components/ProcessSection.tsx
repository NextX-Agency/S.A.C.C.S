'use client';

import { useEffect, useRef, useState, FormEvent } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { contactInfo } from '@/lib/content';

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setFormError(result.error || 'Er is een fout opgetreden.');
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        (e.target as HTMLFormElement).reset();
      }, 5000);
    } catch {
      setFormError('Verbindingsfout. Controleer uw internet en probeer opnieuw.');
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="py-16 lg:py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section header */}
        <div className="mb-10 lg:mb-14">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Contact</p>
          <h2 className="font-heading text-3xl lg:text-4xl font-extrabold tracking-tight text-on-surface mb-2">
            Vraag een offerte aan
          </h2>
          <p className="text-on-surface-variant text-sm lg:text-base">
            Wij nemen binnen 24 uur contact met u op.
          </p>
        </div>

        {/* Card */}
        <div
          className={`bg-white rounded-xl border border-outline-variant/20 overflow-hidden grid grid-cols-1 lg:grid-cols-5 shadow-saccs-md transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left: Green sidebar — on-brand color */}
          <div className="lg:col-span-2 bg-primary p-8 lg:p-12 text-white">
            <h3 className="font-heading text-xl lg:text-2xl font-bold mb-2">Neem Contact Op</h3>
            <p className="text-white/75 text-sm leading-relaxed mb-8">
              Klaar om uw ruimte te transformeren? Neem vrijblijvend contact op
              voor een offerte op maat.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href={contactInfo.phone.href}
                  className="text-sm font-medium hover:text-white/80 transition-colors"
                >
                  {contactInfo.phone.display}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href={contactInfo.email.href}
                  className="text-sm font-medium hover:text-white/80 transition-colors break-all"
                >
                  {contactInfo.email.display}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">{contactInfo.address.full}</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 p-6 lg:p-12">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-7 h-7 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-on-surface mb-2">
                  Bedankt voor uw bericht!
                </h3>
                <p className="text-on-surface-variant text-sm">
                  Wij nemen zo spoedig mogelijk contact met u op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      Volledige Naam
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="form-input"
                      placeholder="Uw naam"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      E-mailadres
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="form-input"
                      placeholder="email@voorbeeld.nl"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Onderwerp
                  </label>
                  <select name="service" className="form-input">
                    <option>Zakelijke Schoonmaak</option>
                    <option>Particuliere Schoonmaak</option>
                    <option>Evenementenservice</option>
                    <option>Specialistische Dienst</option>
                    <option>Anders...</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Bericht
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="form-input resize-none"
                    placeholder="Hoe kunnen wij u helpen?"
                  />
                </div>

                {formError && (
                  <p className="text-red-600 text-sm bg-red-50 rounded-lg px-4 py-3">
                    {formError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-semibold py-3.5 rounded-full hover:bg-primary/90 transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[48px] touch-manipulation shadow-md shadow-primary/20"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Versturen...
                    </>
                  ) : (
                    'Verstuur Aanvraag'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
