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
