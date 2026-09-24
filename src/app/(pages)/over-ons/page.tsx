import type { Metadata } from "next";
import Image from "next/image";
import { aboutContent, siteConfig } from "@/lib/content";
import { ClosingCTA, PageIntro, SectionLabel } from "@/components/Editorial";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Maak kennis met S.A.C.C.S, sinds 2012 actief in professionele schoonmaak in Suriname.",
};

export default function OverOnsPage() {
  return (
    <>
      <PageIntro
        label="Over ons"
        title="Wij doen wat wij zeggen."
        description="S.A. Cleaning Consultancy Suriname is sinds 2012 actief in professionele schoonmaak voor organisaties en particulieren."
      />
      <section className="content-section about-story">
        <div className="container intro-grid">
          <div>
            <SectionLabel number="01">Ons verhaal</SectionLabel>
            <h2>Werk dat u kunt zien.</h2>
          </div>
          <div>
            <p>{aboutContent.history.content}</p>
            <p>
              Van zakelijke ruimtes tot particuliere woningen: onze aandacht
              ligt bij een schone omgeving en duidelijke afspraken.
            </p>
          </div>
        </div>
        <div className="container" style={{ marginTop: 60 }}>
          <div className="about-photo">
            <Image
              src="/beeld/exterior.jpeg"
              alt="S.A.C.C.S medewerker aan het werk bij een woning"
              fill
              sizes="(max-width: 760px) 100vw, 90vw"
            />
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="container">
          <SectionLabel number="02">Waar wij voor staan</SectionLabel>
          <h2>Onze waarden in het dagelijks werk.</h2>
          <div className="values-list">
            {aboutContent.values.map((value) => (
              <div key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
          <div className="mission-grid">
            <div>
              <h3>{aboutContent.mission.title}</h3>
              <p>{aboutContent.mission.content}</p>
            </div>
            <div>
              <h3>{aboutContent.vision.title}</h3>
              <p>{aboutContent.vision.content}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="content-section about-story">
        <div className="container">
          <SectionLabel number="03">
            Sinds {siteConfig.foundedYear}
          </SectionLabel>
          <h2>Schoonmaak met aandacht voor uw ruimte.</h2>
          <div className="timeline">
            <div>
              <strong>{siteConfig.foundedYear}</strong>
              <p>Oprichting van S.A.C.C.S in Suriname.</p>
            </div>
            <div>
              <strong>Vandaag</strong>
              <p>Werk voor organisaties en particulieren, afgestemd op de opdracht.</p>
            </div>
          </div>
        </div>
      </section>
      <ClosingCTA
        title="Kennismaken met S.A.C.C.S?"
        detail="Neem contact op voor een vraag of een vrijblijvende offerte."
      />
    </>
  );
}
