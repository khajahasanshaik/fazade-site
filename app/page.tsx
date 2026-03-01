import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { features } from "@/lib/features";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          className="hero-bg-img"
          priority
          sizes="100vw"
        />
        <div className="container hero-content">
          <h1 className="hero-title">{siteConfig.tagline}</h1>
          <Link href="/contact" className="btn btn-primary">
            Contact us
          </Link>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container section-with-img">
          <div className="section-text">
            <p className="hero-subtext">{features.aboutBlurb}</p>
            <Link href="/about" className="btn btn-primary">
              Know more
            </Link>
          </div>
          <div className="section-img-wrap">
            <Image src="/team-careers.png" alt="About Fazade" width={400} height={280} className="section-img" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Services</h2>
          <div className="card-grid">
            {features.services.slice(0, 4).map((s) => (
              <Link key={s.id} href={s.href} className="card card-link">
                <h3>{s.title}</h3>
                <p className="text-muted">{s.subtitle}</p>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
            <Link href="/services" className="btn btn-outline">
              View more services
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">About {siteConfig.name}</h2>
          <p className="about-intro">{features.aboutBlurb}</p>
          <Link href="/about" className="btn btn-primary">
            Know more
          </Link>
        </div>
      </section>

    </>
  );
}
