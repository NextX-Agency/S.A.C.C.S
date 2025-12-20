import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import { aboutContent, stats, siteConfig } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Over Ons - SACCS Professionele Schoonmaakdiensten',
  description: 'Leer meer over SACCS - Sinds 2012 de betrouwbare partner voor professionele schoonmaakdiensten in Suriname. Ontdek onze missie, visie en geschiedenis.',
};

export default function OverOnsPage() {
  return (
    <>
      <PageHeader
        title="Over Ons"
        subtitle="Uw betrouwbare partner in professionele schoonmaak sinds 2012"
        backgroundImage="/beeld/beeld3.png"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Over Ons', href: '/over-ons' },
        ]}
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
                Sinds {siteConfig.foundedYear} actief
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-saccs-text mb-6">
                {siteConfig.fullName}
              </h2>
              <p className="text-saccs-grey leading-relaxed mb-6">
                {siteConfig.description}
              </p>
              <p className="text-saccs-grey leading-relaxed mb-8">
                {aboutContent.history.content}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/diensten"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300"
                >
                  Onze Diensten
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-saccs-light text-saccs-text font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-saccs-lg">
              <Image
                src="/beeld/beeld1.jpg"
                alt="SACCS Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-saccs-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-saccs-grey font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Missie & Visie</h2>
            <div className="title-underline" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-primary to-primary-dark p-8 rounded-2xl text-white">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">{aboutContent.mission.title}</h3>
              <p className="text-white/90 leading-relaxed">{aboutContent.mission.content}</p>
            </div>

            {/* Vision */}
            <div className="bg-saccs-light p-8 rounded-2xl">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center text-white mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-saccs-text mb-4">{aboutContent.vision.title}</h3>
              <p className="text-saccs-grey leading-relaxed">{aboutContent.vision.content}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-saccs-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Onze Kernwaarden</h2>
            <div className="title-underline" />
            <p className="section-subtitle">
              De principes die ons werk en onze relaties met klanten bepalen
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutContent.values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white p-6 rounded-2xl shadow-saccs-sm hover:shadow-saccs-md transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center text-white mb-4 font-heading font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="font-heading text-xl font-bold text-saccs-text mb-2">{value.title}</h3>
                <p className="text-saccs-grey text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Onze Geschiedenis</h2>
            <div className="title-underline" />
            <p className="section-subtitle">
              Een tijdlijn van onze groei en belangrijke mijlpalen
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary-light to-primary rounded-full" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {aboutContent.history.milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-saccs-md border border-gray-100">
                      <span className="font-heading text-2xl font-bold text-primary">{milestone.year}</span>
                      <p className="text-saccs-grey mt-2">{milestone.event}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-white shadow-md" />

                  {/* Empty space for other side */}
                  <div className="w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            &ldquo;{siteConfig.tagline}&rdquo;
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Ervaar zelf waarom toonaangevende bedrijven in Suriname voor SACCS kiezen.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <span>Neem contact op</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
