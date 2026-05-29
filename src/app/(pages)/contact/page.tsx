import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ContactPageForm from '@/components/ContactPageForm';
import { contactInfo, whyChooseUs } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact - SACCS Professionele Schoonmaakdiensten',
  description: 'Neem contact op met SACCS voor een vrijblijvende offerte. Bereikbaar via telefoon, e-mail of WhatsApp. Wij reageren binnen 24 uur.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="Wij staan klaar om uw vragen te beantwoorden"
        backgroundImage="/beeld/beeld4.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-saccs-text mb-6">
                Neem Contact Met Ons Op
              </h2>
              <p className="text-saccs-grey mb-8">
                Heeft u vragen over onze diensten of wilt u een vrijblijvende offerte aanvragen? 
                Neem gerust contact met ons op. Wij reageren binnen 24 uur.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-10">
                {/* Director */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-saccs-grey font-medium">{contactInfo.director.title}</p>
                    <p className="font-heading font-bold text-saccs-text">{contactInfo.director.name}</p>
                  </div>
                </div>

                {/* Phone */}
                <a 
                  href={contactInfo.phone.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-saccs-grey font-medium">Telefoon</p>
                    <p className="font-heading font-bold text-saccs-text group-hover:text-primary transition-colors">{contactInfo.phone.display}</p>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href={contactInfo.email.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-saccs-grey font-medium">E-mail</p>
                    <p className="font-heading font-bold text-saccs-text group-hover:text-primary transition-colors">{contactInfo.email.display}</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a 
                  href={contactInfo.phone.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-saccs-grey font-medium">WhatsApp</p>
                    <p className="font-heading font-bold text-saccs-text group-hover:text-[#25D366] transition-colors">Direct chatten</p>
                  </div>
                </a>
              </div>

              {/* Why Choose Us */}
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="font-heading text-xl font-bold text-saccs-text mb-4">Waarom SACCS kiezen?</h3>
                <ul className="space-y-3">
                  {whyChooseUs.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-saccs-grey">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business Hours */}
              <div className="mt-8 p-5 bg-saccs-light rounded-lg">
                <h3 className="font-heading text-lg font-bold text-saccs-text mb-4">Openingstijden</h3>
                <div className="space-y-2 text-saccs-grey">
                  <div className="flex justify-between">
                    <span>Maandag - Vrijdag</span>
                    <span className="font-medium text-saccs-text">{contactInfo.businessHours.weekdays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Zaterdag</span>
                    <span className="font-medium text-saccs-text">{contactInfo.businessHours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Zondag</span>
                    <span className="font-medium text-saccs-text">{contactInfo.businessHours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="corporate-card p-6 md:p-8">
                <h3 className="font-heading text-2xl font-bold text-saccs-text mb-6">
                  Stuur ons een bericht
                </h3>
                <ContactPageForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-[300px] bg-saccs-light relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold text-saccs-text mb-2">Paramaribo, Suriname</h3>
            <p className="text-saccs-grey">Wij zijn actief in heel Suriname</p>
          </div>
        </div>
      </section>
    </>
  );
}
