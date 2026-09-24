import Image from "next/image";
import Link from "next/link";
import { services, aboutContent, siteConfig, contactInfo } from "@/lib/content";
import { ClosingCTA, SectionLabel } from "@/components/Editorial";
import ClientSlider from "@/components/ClientSlider";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Image
          src="/beeld/saccs-commercial-interior-hero.webp"
          alt="Lichte, verzorgde commerciële ontvangstruimte"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="hero-kicker">
              S.A. Cleaning Consultancy Suriname · Sinds 2012
            </span>
            <h1>
              Een schone ruimte.
              <br />
              <em>Een sterke indruk.</em>
            </h1>
            <p>
              Professionele schoonmaak voor bedrijven, evenementen en woningen
              in Suriname. Zorgvuldig uitgevoerd, volgens afspraak.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">
                Vraag een offerte aan <span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link light" href="/diensten">
                Bekijk onze diensten <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <div className="hero-index" aria-hidden="true">
            <span>Paramaribo, Suriname</span>
          </div>
        </div>
      </section>
      <ClientSlider />
      <section className="section services-preview" id="diensten">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <SectionLabel number="01">Wat wij doen</SectionLabel>
              <h2>Schoonmaak die past bij uw ruimte.</h2>
            </div>
            <p>
              Van dagelijks onderhoud tot een eenmalige specialistische
              opdracht. Wij stemmen het werk af op uw omgeving en planning.
            </p>
          </div>
          <div className="service-list">
            {services.map((service, index) => (
              <Link
                className="service-row"
                href={`/diensten#${service.id}`}
                key={service.id}
              >
                <span className="service-number">0{index + 1}</span>
                <span className="service-row-main">
                  <strong>{service.title.replace(/ \(B2[BC]\)/, "")}</strong>
                  <small>{service.description}</small>
                </span>
                <span className="service-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
          <Link className="text-link" href="/diensten">
            Alle diensten bekijken <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section className="section story-section">
        <div className="container story-grid">
          <div className="story-images">
            <div className="story-image story-image-main">
              <Image
                src="/beeld/exterior.jpeg"
                alt="S.A.C.C.S medewerker reinigt glas bij een woning"
                fill
                sizes="(max-width: 760px) 75vw, 34vw"
              />
            </div>
            <div className="story-image story-image-small">
              <Image
                src="/beeld/about.jpg"
                alt="S.A.C.C.S medewerker reinigt een zitmeubel"
                fill
                sizes="(max-width: 760px) 44vw, 18vw"
              />
            </div>
          </div>
          <div className="story-copy">
            <SectionLabel number="02">Over S.A.C.C.S</SectionLabel>
            <h2>
              Wij doen wat
              <br />
              wij zeggen.
            </h2>
            <p className="lead">
              Sinds {siteConfig.foundedYear} werkt S.A.C.C.S aan schone en
              representatieve ruimtes voor organisaties en particulieren in
              Suriname.
            </p>
            <p>{aboutContent.history.content}</p>
            <div className="story-rule">
              <span>2012</span>
              <span>Oprichting in Suriname</span>
            </div>
            <Link className="text-link" href="/over-ons">
              Leer ons kennen <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="work-strip">
        <div className="container work-strip-inner">
          <SectionLabel number="03">In de praktijk</SectionLabel>
          <p>
            Van glasbewassing tot meubelreiniging: aandacht voor de details die
            uw ruimte goed laten functioneren.
          </p>
          <div className="work-strip-photo">
            <Image
              src="/beeld/hero.jpeg"
              alt="S.A.C.C.S medewerker reinigt buitenmeubilair"
              fill
              sizes="(max-width: 760px) 100vw, 42vw"
            />
          </div>
        </div>
      </section>
      <section className="section approach">
        <div className="container approach-grid">
          <div>
            <SectionLabel number="04">Onze aanpak</SectionLabel>
            <h2>Helder vanaf het eerste gesprek.</h2>
          </div>
          <div className="approach-steps">
            <div>
              <span>01</span>
              <h3>Vertel ons wat nodig is</h3>
              <p>
                Neem contact op over uw ruimte, uw planning en de werkzaamheden.
              </p>
            </div>
            <div>
              <span>02</span>
              <h3>Een passende afspraak</h3>
              <p>
                We bespreken de mogelijkheden en maken een schoonmaakplan op
                maat.
              </p>
            </div>
            <div>
              <span>03</span>
              <h3>Zorgvuldige uitvoering</h3>
              <p>
                Ons team voert het afgesproken werk uit met aandacht voor
                kwaliteit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ClosingCTA
        title="Een schone ruimte begint met een gesprek."
        detail={`Bel ${contactInfo.phone.display} of stuur ons uw vraag. We denken graag mee.`}
      />
    </>
  );
}
