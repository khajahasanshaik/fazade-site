"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const body = new FormData(form);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: body.get("name"),
          email: body.get("email"),
          message: body.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) setStatus("done");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>Contact</h1>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="page-content">
            <p>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
            <h2>Send a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required />
              </div>
              <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send"}
              </button>
              {status === "done" && <p style={{ marginTop: "1rem", color: "var(--color-accent)" }}>Message sent.</p>}
              {status === "error" && <p style={{ marginTop: "1rem", color: "#ef4444" }}>Something went wrong. Try again or email us directly.</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
