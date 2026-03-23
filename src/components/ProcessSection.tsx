'use client';

import { useEffect, useRef, useState, FormEvent } from 'react';

const steps = [
  {
    number: '01',
    title: 'Inventarisatie',
    description:
      'Inventarisatie/scannen van uw inventarisatie.',
  },
  {
    number: '02',
    title: 'Op Maat Gemaakt Plan',
    description:
      'Op basis Schappelijk Plan/plan youruiton enigmatitis en planuiteo.',
  },
  {
    number: '03',
    title: 'Uitvoering',
    description:
      'Ons professioneel team voert het plan uit met aandacht voor uitvoering.',
  },
  {
    number: '04',
    title: 'Kwaliteitscontrole',
    description:
      'Kwaliteitscontrole naised voor izendijk op.',
  },
];

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
    <section ref={sectionRef} id="werkwijze" className="py-16 md:py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Process Steps */}
          <div className="lg:pt-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-10">
              Onze Werkwijze
            </h2>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`flex gap-4 md:gap-5 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-11 h-11 bg-primary rounded-full flex items-center justify-center text-white font-heading font-bold text-sm flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Contact Form */}
          <div id="contact">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="font-heading text-2xl font-bold text-saccs-text mb-1">
                Neem Contact Op
              </h3>
              <p className="text-saccs-grey text-sm mb-6">
                Contact S.A. Cleaning Consultancy
              </p>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-heading text-xl font-bold text-saccs-text mb-2">
                    Bedankt voor uw bericht!
                  </h4>
                  <p className="text-saccs-grey text-sm">
                    We nemen zo spoedig mogelijk contact met u op.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        required
                        className="form-input"
                        placeholder="Naam"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        className="form-input"
                        placeholder="E-mail"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="form-input"
                        placeholder="Telefoon"
                      />
                    </div>
                    <div>
                      <select name="service" className="form-input">
                        <option value="">Type dienst</option>
                        <option value="b2b">Zakelijke Schoonmaak</option>
                        <option value="b2c">Particuliere Schoonmaak</option>
                        <option value="event">Evenementenservice</option>
                        <option value="special">Specialistische Diensten</option>
                        <option value="other">Anders</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      className="form-input resize-none"
                      placeholder="Bericht"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[48px] touch-manipulation"
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
                      <span>Verstuur Bericht</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
