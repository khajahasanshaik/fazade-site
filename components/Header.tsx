"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo-link">
          <Image src="/logo.png" alt={siteConfig.name} width={140} height={44} priority className="logo-img" />
        </Link>
        <div className="header-contact">
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          {siteConfig.nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="nav-dropdown"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link href={item.href} className="nav-item" onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
                <ul className={`dropdown-menu ${servicesOpen ? "open" : ""}`}>
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={() => {
                          setMenuOpen(false);
                          setServicesOpen(false);
                        }}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="nav-item"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
