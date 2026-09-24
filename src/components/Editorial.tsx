import Image from "next/image";
import Link from "next/link";

export function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="section-label">
      <span>{number}</span>
      {children}
    </p>
  );
}

const clients = [
  { src: "/carousel/torarica.jpg", alt: "Torarica Resort" },
  { src: "/carousel/hardrock.png", alt: "Hard Rock Cafe" },
  { src: "/carousel/azplogo.jpg", alt: "Academisch Ziekenhuis Paramaribo" },
];

export function ClientWall() {
  return (
    <section className="client-section" aria-label="Opdrachtgevers">
      <div className="container client-layout">
        <p>Een greep uit onze opdrachtgevers</p>
        <div className="client-logos">
          {clients.map((client) => (
            <div className="client-logo" key={client.alt}>
              <Image
                src={client.src}
                alt={client.alt}
                fill
                sizes="(max-width: 760px) 28vw, 140px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClosingCTA({
  title,
  detail,
}: {
  title: string;
  detail: string;
}) {
  return (
    <section className="closing-cta">
      <div className="container closing-inner">
        <div>
          <SectionLabel number="→">Contact</SectionLabel>
          <h2>{title}</h2>
          <p>{detail}</p>
        </div>
        <Link className="button button-primary" href="/contact">
          Neem contact op <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}

export function PageIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <header className="page-intro">
      <div className="container">
        <p className="page-overline">S.A.C.C.S / {label}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  );
}
