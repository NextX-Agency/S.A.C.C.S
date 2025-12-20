import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { siteConfig, contactInfo } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Privacybeleid - SACCS',
  description: 'Lees ons privacybeleid om te begrijpen hoe SACCS uw persoonlijke gegevens verzamelt, gebruikt en beschermt.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacybeleid"
        subtitle="Hoe wij omgaan met uw persoonlijke gegevens"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Privacybeleid', href: '/privacy' },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-saccs-grey mb-8">
              Laatst bijgewerkt: December 2024
            </p>

            <h2 className="font-heading text-2xl font-bold text-saccs-text mt-12 mb-4">1. Inleiding</h2>
            <p className="text-saccs-grey mb-6">
              {siteConfig.fullName} (&ldquo;SACCS&rdquo;, &ldquo;wij&rdquo;, &ldquo;ons&rdquo;) respecteert uw privacy en zet zich in voor de bescherming 
              van uw persoonlijke gegevens. Dit privacybeleid legt uit hoe wij uw persoonlijke informatie verzamelen, 
              gebruiken en beschermen wanneer u onze website bezoekt of gebruik maakt van onze diensten.
            </p>

            <h2 className="font-heading text-2xl font-bold text-saccs-text mt-12 mb-4">2. Welke gegevens verzamelen wij?</h2>
            <p className="text-saccs-grey mb-4">Wij kunnen de volgende categorieën persoonlijke gegevens verzamelen:</p>
            <ul className="list-disc pl-6 text-saccs-grey space-y-2 mb-6">
              <li><strong>Contactgegevens:</strong> naam, e-mailadres, telefoonnummer, adres</li>
              <li><strong>Bedrijfsgegevens:</strong> bedrijfsnaam, functie (indien van toepassing)</li>
              <li><strong>Communicatiegegevens:</strong> inhoud van berichten die u ons stuurt</li>
              <li><strong>Technische gegevens:</strong> IP-adres, browsertype, apparaatinformatie</li>
              <li><strong>Gebruiksgegevens:</strong> hoe u onze website gebruikt en navigeert</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-saccs-text mt-12 mb-4">3. Hoe gebruiken wij uw gegevens?</h2>
            <p className="text-saccs-grey mb-4">Wij gebruiken uw persoonlijke gegevens voor de volgende doeleinden:</p>
            <ul className="list-disc pl-6 text-saccs-grey space-y-2 mb-6">
              <li>Het verwerken van uw aanvragen en offertes</li>
              <li>Het leveren van onze schoonmaakdiensten</li>
              <li>Communicatie over onze diensten en afspraken</li>
              <li>Het verbeteren van onze website en dienstverlening</li>
              <li>Het voldoen aan wettelijke verplichtingen</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-saccs-text mt-12 mb-4">4. Delen van gegevens</h2>
            <p className="text-saccs-grey mb-6">
              Wij verkopen of verhuren uw persoonlijke gegevens niet aan derden. Wij kunnen uw gegevens alleen delen met:
            </p>
            <ul className="list-disc pl-6 text-saccs-grey space-y-2 mb-6">
              <li>Dienstverleners die ons helpen bij onze bedrijfsvoering</li>
              <li>Overheidsinstanties indien wettelijk vereist</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-saccs-text mt-12 mb-4">5. Beveiliging</h2>
            <p className="text-saccs-grey mb-6">
              Wij nemen passende technische en organisatorische maatregelen om uw persoonlijke gegevens te beschermen 
              tegen ongeautoriseerde toegang, verlies of misbruik.
            </p>

            <h2 className="font-heading text-2xl font-bold text-saccs-text mt-12 mb-4">6. Uw rechten</h2>
            <p className="text-saccs-grey mb-4">U heeft het recht om:</p>
            <ul className="list-disc pl-6 text-saccs-grey space-y-2 mb-6">
              <li>Inzage te vragen in uw persoonlijke gegevens</li>
              <li>Correctie of verwijdering van uw gegevens te verzoeken</li>
              <li>Bezwaar te maken tegen de verwerking van uw gegevens</li>
              <li>Uw toestemming in te trekken</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-saccs-text mt-12 mb-4">7. Cookies</h2>
            <p className="text-saccs-grey mb-6">
              Onze website kan cookies gebruiken om uw ervaring te verbeteren. Cookies zijn kleine tekstbestanden 
              die op uw apparaat worden opgeslagen. U kunt uw browserinstellingen aanpassen om cookies te weigeren.
            </p>

            <h2 className="font-heading text-2xl font-bold text-saccs-text mt-12 mb-4">8. Wijzigingen</h2>
            <p className="text-saccs-grey mb-6">
              Wij behouden ons het recht voor om dit privacybeleid te wijzigen. Wijzigingen worden op deze pagina gepubliceerd.
            </p>

            <h2 className="font-heading text-2xl font-bold text-saccs-text mt-12 mb-4">9. Contact</h2>
            <p className="text-saccs-grey mb-6">
              Heeft u vragen over dit privacybeleid? Neem contact met ons op:
            </p>
            <div className="bg-saccs-light p-6 rounded-xl">
              <p className="text-saccs-text font-semibold">{siteConfig.fullName}</p>
              <p className="text-saccs-grey">E-mail: {contactInfo.email.display}</p>
              <p className="text-saccs-grey">Telefoon: {contactInfo.phone.display}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
