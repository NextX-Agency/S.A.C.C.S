import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { siteConfig, contactInfo } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden - SACCS',
  description: 'Lees de algemene voorwaarden van SACCS voor informatie over onze dienstverlening, tarieven en verantwoordelijkheden.',
};

export default function VoorwaardenPage() {
  return (
    <>
      <PageHeader
        title="Algemene Voorwaarden"
        subtitle="Voorwaarden voor onze dienstverlening"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Algemene Voorwaarden', href: '/voorwaarden' },
        ]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-saccs-grey mb-8">
              Laatst bijgewerkt: December 2024
            </p>

            <h2 className="font-heading text-2xl font-bold text-saccs-text mt-12 mb-4">Artikel 1 - Definities</h2>
            <ul className="list-disc pl-6 text-saccs-grey space-y-2 mb-6">
              <li><strong>SACCS:</strong> {siteConfig.fullName}, gevestigd te Paramaribo, Suriname.</li>
              <li><strong>Opdrachtgever:</strong> de natuurlijke persoon of rechtspersoon die een overeenkomst aangaat met SACCS.</li>
              <li><strong>Diensten:</strong> alle schoonmaakdiensten en aanverwante werkzaamheden die SACCS aanbiedt.</li>
              <li><strong>Overeenkomst:</strong> de afspraak tussen SACCS en de Opdrachtgever betreffende de te leveren Diensten.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-saccs-text mt-12 mb-4">Artikel 2 - Toepasselijkheid</h2>
            <p className="text-saccs-grey mb-6">
              Deze algemene voorwaarden zijn van toepassing op alle offertes, aanbiedingen, overeenkomsten en diensten 
              van SACCS, tenzij schriftelijk anders is overeengekomen.
            </p>

            <h2 className="font-heading text-2xl font-bold text-saccs-text mt-12 mb-4">Artikel 3 - Offertes en Aanbiedingen</h2>
            <ul className="list-disc pl-6 text-saccs-grey space-y-2 mb-6">
              <li>Alle offertes zijn vrijblijvend, tenzij anders aangegeven.</li>
              <li>Een offerte is geldig voor 30 dagen na dagtekening.</li>
              <li>De in een offerte vermelde prijzen zijn inclusief BTW, tenzij anders vermeld.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-saccs-text mt-12 mb-4">Artikel 4 - Uitvoering van Diensten</h2>
            <ul className="list-disc pl-6 text-saccs-grey space-y-2 mb-6">
              <li>SACCS zal de overeengekomen diensten naar beste kunnen en met vakmanschap uitvoeren.</li>
              <li>De Opdrachtgever zorgt ervoor dat SACCS tijdig beschikt over alle benodigde gegevens en toegang.</li>
              <li>SACCS bepaalt de wijze waarop de opdracht wordt uitgevoerd, met inachtneming van de wensen van de Opdrachtgever.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-saccs-text mt-12 mb-4">Artikel 5 - Tarieven en Betaling</h2>
            <ul className="list-disc pl-6 text-saccs-grey space-y-2 mb-6">
              <li>De tarieven worden vooraf overeengekomen en vastgelegd in de offerte of overeenkomst.</li>
              <li>Betaling dient te geschieden binnen 14 dagen na factuurdatum, tenzij anders overeengekomen.</li>
              <li>Bij niet-tijdige betaling is de Opdrachtgever van rechtswege in verzuim en kunnen incassokosten in rekening worden gebracht.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-saccs-text mt-12 mb-4">Artikel 6 - Annulering en Wijziging</h2>
            <ul className="list-disc pl-6 text-saccs-grey space-y-2 mb-6">
              <li>Annulering dient minimaal 24 uur voor de geplande dienst te geschieden.</li>
              <li>Bij annulering binnen 24 uur kan 50% van de overeengekomen prijs in rekening worden gebracht.</li>
              <li>Wijzigingen in de opdracht dienen schriftelijk te worden bevestigd.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-saccs-text mt-12 mb-4">Artikel 7 - Aansprakelijkheid</h2>
            <ul className="list-disc pl-6 text-saccs-grey space-y-2 mb-6">
              <li>SACCS is verzekerd tegen aansprakelijkheid.</li>
              <li>Eventuele schade dient binnen 24 uur na ontdekking schriftelijk te worden gemeld.</li>
              <li>De aansprakelijkheid van SACCS is beperkt tot het bedrag dat door de verzekering wordt gedekt.</li>
              <li>SACCS is niet aansprakelijk voor schade ontstaan door nalatigheid van de Opdrachtgever.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-saccs-text mt-12 mb-4">Artikel 8 - Geheimhouding</h2>
            <p className="text-saccs-grey mb-6">
              Beide partijen zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die zij in het kader 
              van de overeenkomst van elkaar hebben verkregen.
            </p>

            <h2 className="font-heading text-2xl font-bold text-saccs-text mt-12 mb-4">Artikel 9 - Klachten</h2>
            <ul className="list-disc pl-6 text-saccs-grey space-y-2 mb-6">
              <li>Klachten over de uitgevoerde werkzaamheden dienen binnen 48 uur na uitvoering te worden gemeld.</li>
              <li>Bij gegronde klachten zal SACCS de werkzaamheden kosteloos opnieuw uitvoeren.</li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-saccs-text mt-12 mb-4">Artikel 10 - Toepasselijk Recht</h2>
            <p className="text-saccs-grey mb-6">
              Op alle overeenkomsten tussen SACCS en de Opdrachtgever is het Surinaams recht van toepassing. 
              Geschillen worden voorgelegd aan de bevoegde rechter te Paramaribo.
            </p>

            <h2 className="font-heading text-2xl font-bold text-saccs-text mt-12 mb-4">Artikel 11 - Contact</h2>
            <p className="text-saccs-grey mb-6">
              Voor vragen over deze algemene voorwaarden kunt u contact opnemen met:
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
