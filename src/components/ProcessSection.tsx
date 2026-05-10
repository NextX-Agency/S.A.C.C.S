'use client';

import { useEffect, useRef, useState, FormEvent } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { contactInfo } from '@/lib/content';

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

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
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          {/* Centered bubble trio */}
          <div className="flex items-center justify-center mb-4" aria-hidden="true">
            <div className="w-3 h-3 rounded-full bg-on-primary-container" />
            <div className="w-4 h-4 rounded-full bg-primary -ml-1.5" />
            <div className="w-3 h-3 rounded-full bg-primary-container -ml-1.5" />
          </div>
          <h2 className="font-heading text-3xl lg:text-4xl font-extrabold tracking-tight text-on-surface">
            Ready voor de S.A.C.C.S Standaard?
          </h2>
          <p className="text-on-surface-variant text-sm lg:text-base mt-3 max-w-lg mx-auto">
            Vraag vrijblijvend een offerte aan en ontdek wat wij voor uw ruimte kunnen betekenen.
          </p>
        </div>

        {/* Card */}
        <div
          className={`bg-surface-container-lowest rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left: Green sidebar with bubble decorations */}
          <div className="lg:col-span-2 bg-primary p-8 lg:p-12 text-white space-y-8 lg:space-y-12 relative overflow-hidden">
            {/* Bubble trio decorations on green sidebar */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-white/8 animate-saccs-a" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/6 animate-saccs-b" />
              <div className="absolute top-1/2 -right-8 w-32 h-32 rounded-full bg-white/5 animate-saccs-c" />
            </div>

            <div className="relative z-10">
              <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">Neem Contact Op</h2>
              <p className="opacity-80 text-sm lg:text-base">
                Klaar om de transformatie van uw ruimte te zien? Neem vrijblijvend contact op voor een offerte op maat.
              </p>
            </div>

            <div className="space-y-5 relative z-10">
              <a href={contactInfo.phone.href} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium text-sm hover:underline">{contactInfo.phone.display}</span>
              </a>
              <a href={contactInfo.email.href} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium text-sm hover:underline">{contactInfo.email.display}</span>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-medium text-sm">{contactInfo.address.full}</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 p-6 lg:p-12">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  {/* Bubble trio success animation */}
                  <div className="absolute inset-0 rounded-full bg-primary-container/30 animate-saccs-a" />
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center relative z-10">
                    <svg className="w-9 h-9 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-on-surface mb-2">
                  Bedankt voor uw bericht!
                </h3>
                <p className="text-on-surface-variant text-sm">
                  We nemen zo spoedig mogelijk contact met u op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
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
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                      Email Adres
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

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Onderwerp
                  </label>
                  <select name="service" className="form-input">
                    <option>Zakelijke Schoonmaak</option>
                    <option>Particuliere Schoonmaak</option>
                    <option>Specialistische Dienst</option>
                    <option>Anders...</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                    Bericht
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="form-input resize-none"
                    placeholder="Hoe kunnen we u helpen?"
                  />
                </div>

                {formError && (
                  <p className="text-red-500 text-sm text-center bg-red-50 rounded-xl px-4 py-3">{formError}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-black py-4 rounded-full hover:shadow-xl hover:scale-[1.02] transition-all uppercase tracking-widest text-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[52px] touch-manipulation"
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
                    <span>Verstuur Aanvraag</span>
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
