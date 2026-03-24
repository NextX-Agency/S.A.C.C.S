'use client';

import { useEffect, useRef, useState, FormEvent } from 'react';
import { contactInfo } from '@/lib/content';

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 5000);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`bg-surface-container-lowest rounded-xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left: Green Sidebar */}
          <div className="lg:col-span-2 bg-primary p-12 text-white space-y-12">
            <div>
              <h2 className="text-3xl font-black mb-4">Neem Contact Op</h2>
              <p className="opacity-80">
                Klaar om de transformatie van uw ruimte te zien? Neem vrijblijvend contact op voor een offerte op maat.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined">call</span>
                <a href={contactInfo.phone.href} className="font-medium hover:underline">
                  {contactInfo.phone.display}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined">mail</span>
                <a href={contactInfo.email.href} className="font-medium hover:underline">
                  {contactInfo.email.display}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined">location_on</span>
                <span className="font-medium">{contactInfo.address.full}</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 p-12">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
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

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-black py-4 rounded-xl hover:shadow-xl transition-all uppercase tracking-widest text-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[48px] touch-manipulation"
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
