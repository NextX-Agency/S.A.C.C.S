"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { clients } from "@/lib/clients";

export default function ClientSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="client-section" aria-label="Een greep uit onze opdrachtgevers">
      <div className="container client-heading">
        <p>Een greep uit onze opdrachtgevers</p>
        <button type="button" onClick={() => setPaused((value) => !value)} aria-pressed={paused} aria-label={paused ? "Logo’s laten bewegen" : "Logo’s pauzeren"}>
          {paused ? "Afspelen" : "Pauzeren"}<span aria-hidden="true"> {paused ? "▶" : "Ⅱ"}</span>
        </button>
      </div>
      <div className="client-marquee">
        <div className={`client-track${paused || !visible ? " is-paused" : ""}`}>
          {[false, true].map((duplicate) => (
            <div className="client-group" aria-hidden={duplicate} key={String(duplicate)}>
              {clients.map((client) => (
                <div className={`client-logo client-logo-${client.name.split(" ")[0].toLowerCase()}`} key={client.name}>
                  <Image src={client.logo} alt={duplicate ? "" : client.name} fill sizes="(max-width: 760px) 28vw, 180px" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
