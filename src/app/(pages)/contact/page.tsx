import type { Metadata } from "next";
import ContactPageForm from "@/components/ContactPageForm";
import { PageIntro } from "@/components/Editorial";
import { contactInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met S.A.C.C.S voor professionele schoonmaak in Suriname. Bel, mail, stuur een WhatsApp-bericht of vraag een offerte aan.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        label="Contact"
        title="Laten we uw ruimte bespreken."
        description="Een vraag, een periodieke opdracht of een eenmalige schoonmaak? Vertel ons wat u nodig heeft."
      />
      <section className="content-section">
        <div className="container contact-grid">
          <div>
            <h2>Direct contact.</h2>
            <div className="contact-method">
              <span>Telefoon</span>
              <a href={contactInfo.phone.href}>{contactInfo.phone.display}</a>
            </div>
            <div className="contact-method">
              <span>WhatsApp</span>
              <a
                href={contactInfo.phone.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                Stuur een bericht ↗
              </a>
            </div>
            <div className="contact-method">
              <span>E-mail</span>
              <a href={contactInfo.email.href}>{contactInfo.email.display}</a>
            </div>
            <div className="contact-method">
              <span>Directeur</span>
              <strong>{contactInfo.director.name}</strong>
            </div>
            <div className="contact-hours">
              <h3>Bereikbaarheid</h3>
              <p>Maandag – vrijdag · {contactInfo.businessHours.weekdays}</p>
              <p>Zaterdag · {contactInfo.businessHours.saturday}</p>
              <p>Zondag · {contactInfo.businessHours.sunday}</p>
            </div>
          </div>
          <div className="form-panel">
            <h2>Stuur uw aanvraag.</h2>
            <p>Vul het formulier in. U ontvangt een bevestiging per e-mail.</p>
            <ContactPageForm />
          </div>
        </div>
      </section>
      <section className="service-area">
        <div className="container">
          <h2>
            Gevestigd in Paramaribo.
            <br />
            Actief in Suriname.
          </h2>
          <p>
            Neem contact op om de mogelijkheden voor uw locatie te bespreken.
          </p>
        </div>
      </section>
    </>
  );
}
