import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { features } from "@/lib/features";

export const metadata = {
  title: `Our Service | ${siteConfig.name}`,
  description: "IT solutions and services",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>Our Service</h1>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="card-grid">
            {features.services.map((s) => (
              <Link key={s.id} href={s.href} className="card card-link">
                <h3>{s.title}</h3>
                <p className="text-muted">{s.subtitle}</p>
                <span className="link-arrow">View more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
