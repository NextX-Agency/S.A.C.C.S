import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/content";
import { ClosingCTA, PageIntro, SectionLabel } from "@/components/Editorial";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Zakelijke en particuliere schoonmaak, evenementenservice en specialistische reiniging door S.A.C.C.S in Suriname.",
};

const serviceImages: Record<string, { src: string; alt: string }> = {
  b2b: {
    src: "/beeld/exterior.jpeg",
    alt: "S.A.C.C.S medewerker reinigt glazen deuren",
  },
  b2c: {
    src: "/beeld/about.jpg",
    alt: "S.A.C.C.S medewerker reinigt meubilair",
  },
  events: {
    src: "/beeld/hero.jpeg",
    alt: "S.A.C.C.S medewerker verzorgt buitenmeubilair",
  },
  specialist: {
    src: "/beeld/stallatie.jpeg",
    alt: "S.A.C.C.S reiniging op een overdekte locatie",
  },
};

export default function DienstenPage() {
  return (
    <>
      <PageIntro
        label="Diensten"
        title="De juiste zorg voor iedere ruimte."
        description="Voor bedrijven, huishoudens en evenementen. Bekijk wat wij doen en neem contact op om uw situatie te bespreken."
      />
      <section className="content-section">
        <div className="container">
          <div className="section-heading">
            <SectionLabel number="01">Onze diensten</SectionLabel>
            <h2>Wat kunnen wij voor u doen?</h2>
          </div>
          {services.map((service, index) => (
            <article
              className="service-detail"
              id={service.id}
              key={service.id}
            >
              <div>
                <SectionLabel number={`0${index + 1}`}>Schoonmaak</SectionLabel>
                <h2>{service.title.replace(/ \(B2[BC]\)/, "")}</h2>
                <div className="service-photo">
                  <Image
                    src={serviceImages[service.id].src}
                    alt={serviceImages[service.id].alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 35vw"
                  />
                </div>
              </div>
              <div>
                <p className="service-description">{service.description}</p>
                <p>{service.longDescription.trim()}</p>
                <h3>Werkzaamheden</h3>
                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link
                  className="text-link"
                  href={`/contact?dienst=${service.id}`}
                >
                  Bespreek deze dienst <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <ClosingCTA
        title="Vertel ons over uw ruimte."
        detail="Wij bespreken graag wat er nodig is en welke aanpak bij u past."
      />
    </>
  );
}
