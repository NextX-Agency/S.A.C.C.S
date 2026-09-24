import Image from "next/image";
import Link from "next/link";
import { contactInfo } from "@/lib/content";

export default function SiteFooterNew() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link href="/" className="footer-brand">
              <Image
                src="/logo/barelogo-removebg-preview.png"
                alt=""
                width={54}
                height={54}
              />
              <span>S.A.C.C.S</span>
            </Link>
            <p>
              Professionele schoonmaak in Suriname.
              <br />
              Wij doen wat wij zeggen.
            </p>
          </div>
          <div className="footer-contact">
            <span>Een vraag of offerte?</span>
            <a href={contactInfo.phone.href}>{contactInfo.phone.display}</a>
            <a href={contactInfo.email.href}>{contactInfo.email.display}</a>
            <a href={contactInfo.phone.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} S.A. Cleaning Consultancy Suriname
          </span>
          <nav aria-label="Footernavigatie">
            <Link href="/diensten">Diensten</Link>
            <Link href="/over-ons">Over ons</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/voorwaarden">Voorwaarden</Link>
          </nav>
          <span>Paramaribo · Suriname</span>
        </div>
      </div>
    </footer>
  );
}
