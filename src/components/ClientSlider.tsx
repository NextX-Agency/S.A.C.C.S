import Image from "next/image";
import { clients } from "@/lib/clients";

export default function ClientSlider() {
  return (
    <section className="client-section" aria-label="Klanten en partners van S.A.C.C.S">
      <div className="client-marquee">
        <div className="client-track">
          {[false, true].map((duplicate) => (
            <div className="client-group" aria-hidden={duplicate} key={String(duplicate)}>
              {clients.map((client) => (
                <div className={`client-logo client-logo-${client.name.split(" ")[0].toLowerCase()}`} key={client.name}>
                  {client.logo ? (
                    <Image src={client.logo} alt={duplicate ? "" : client.name} fill sizes="(max-width: 760px) 130px, 200px" />
                  ) : (
                    <span className="client-name">{client.name}</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
