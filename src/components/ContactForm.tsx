"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactSchema, type ContactFormData } from "@/lib/validators";

const inquiries = [
  "Product Availability",
  "Special Order",
  "Catering / Bulk Order",
  "Hours & Location",
  "General Question",
  "Other",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(ContactSchema) });

  async function onSubmit(data: ContactFormData) {
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us directly at (570) 730-4464.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ background: "var(--cream)", border: "1px solid var(--line)", padding: "44px 40px" }}
    >
      <div className="form-row">
        <Field label="Full Name *" error={errors.name?.message}>
          <input type="text" {...register("name")} placeholder="Jane Kowalski" disabled={submitted} />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input type="tel" {...register("phone")} placeholder="(570) 730-4464" disabled={submitted} />
        </Field>
      </div>

      <div className="form-row">
        <Field label="Email *" error={errors.email?.message}>
          <input type="email" {...register("email")} placeholder="you@example.com" disabled={submitted} />
        </Field>
        <Field label="Inquiry Type *" error={errors.service?.message}>
          <select {...register("service")} defaultValue="" disabled={submitted}>
            <option value="" disabled>Select a topic</option>
            {inquiries.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="form-row form-row--single">
        <Field label="Message *" error={errors.message?.message}>
          <textarea
            {...register("message")}
            placeholder="Ask us about a product, check availability, or place a special order request…"
            disabled={submitted}
          />
        </Field>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginTop: 12 }}>
        <span style={{ fontSize: 12, color: "var(--slate-2)" }}>
          {submitted
            ? "Thanks — we'll get back to you soon!"
            : error || "We respond as quickly as we can."}
        </span>
        <button
          type="submit"
          className="btn-ink"
          disabled={isSubmitting || submitted}
          style={submitted ? { background: "var(--red)", color: "var(--cream)" } : undefined}
        >
          {submitted ? "✓ Message sent" : isSubmitting ? "Sending..." : "Send Message →"}
        </button>
      </div>

      <style>{`
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .form-row.form-row--single { grid-template-columns: 1fr; }
        .field label { display: block; font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 500; color: var(--slate-2); margin-bottom: 8px; }
        .field input, .field select, .field textarea { width: 100%; padding: 14px 16px; background: var(--paper); border: 1px solid var(--line); border-radius: 2px; font-family: var(--font-ui), sans-serif; font-size: 15px; color: var(--ink); transition: border-color 0.2s, background 0.2s; }
        .field input:focus, .field select:focus, .field textarea:focus { outline: none; border-color: var(--red); background: #fff; }
        .field textarea { min-height: 140px; resize: vertical; }
        .field .err { margin-top: 6px; font-size: 11px; color: #b94545; letter-spacing: 0.04em; }
        @media (max-width: 720px) { .form-row { grid-template-columns: 1fr; } }
      `}</style>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="field">
      <label>{label}</label>
      {children}
      {error && <div className="err">{error}</div>}
    </div>
  );
}
