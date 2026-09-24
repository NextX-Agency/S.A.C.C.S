"use client";

import { FormEvent, useState } from "react";

export default function ContactPageForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("message") || "").trim().length < 10) {
      setError("Uw bericht moet minimaal 10 tekens bevatten.");
      return;
    }
    setError("");
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      const result = await response.json();
      if (!response.ok) {
        setError(
          result.error ||
            "Uw bericht kon niet worden verzonden. Probeer het opnieuw.",
        );
        setStatus("idle");
        return;
      }
      form.reset();
      setStatus("success");
    } catch {
      setError(
        "Verbinding mislukt. Controleer uw internetverbinding en probeer het opnieuw.",
      );
      setStatus("idle");
    }
  }

  if (status === "success")
    return (
      <div className="form-success" role="status">
        <h3>Uw bericht is verzonden.</h3>
        <p>
          Bedankt voor uw aanvraag. We nemen zo spoedig mogelijk contact met u
          op.
        </p>
        <button
          className="text-link"
          type="button"
          onClick={() => setStatus("idle")}
        >
          Nog een bericht sturen ↗
        </button>
      </div>
    );

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {error && (
        <div className="form-error" role="alert" id="form-error">
          {error}
        </div>
      )}
      <div className="form-field">
        <label htmlFor="contact-name">Naam *</label>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          required
          minLength={2}
          aria-describedby={error ? "form-error" : undefined}
        />
      </div>
      <div className="form-two">
        <div className="form-field">
          <label htmlFor="contact-email">E-mail *</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="contact-phone">Telefoon</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
          />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="contact-service">Dienst</label>
        <select id="contact-service" name="service" defaultValue="">
          <option value="">Kies een dienst</option>
          <option value="b2b">Zakelijke schoonmaak</option>
          <option value="b2c">Particuliere schoonmaak</option>
          <option value="events">Evenementenservice</option>
          <option value="specialist">Specialistische diensten</option>
          <option value="other">Anders</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="contact-subject">Onderwerp *</label>
        <input id="contact-subject" name="subject" required />
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">Uw bericht *</label>
        <textarea
          id="contact-message"
          name="message"
          minLength={10}
          required
          placeholder="Beschrijf uw ruimte en de gewenste werkzaamheden"
        />
      </div>
      <button
        className="button button-primary form-submit"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending"
          ? "Bericht wordt verzonden…"
          : "Verstuur uw aanvraag"}{" "}
        <span aria-hidden="true">↗</span>
      </button>
    </form>
  );
}
