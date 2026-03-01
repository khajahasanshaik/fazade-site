import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const flatNav = siteConfig.nav.flatMap((item) =>
    item.children
      ? [{ label: item.label, href: item.href }, ...item.children]
      : [item]
  );

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <Image src="/logo.png" alt={siteConfig.name} width={120} height={38} />
            </Link>
          </div>
          <div className="footer-offices">
            {siteConfig.offices.map((office) => (
              <div key={office.name} className="footer-office">
                <h3>{office.name}</h3>
                <p className="company">{office.company}</p>
                <p className="address">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-contact">
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
        <nav className="footer-nav">
          {flatNav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="footer-bottom">
          <Link href="/privacy">Privacy Policy</Link>
          <p>© {new Date().getFullYear()} {siteConfig.name} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
