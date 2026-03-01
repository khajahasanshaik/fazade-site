/**
 * Central site configuration. Add new features and content here.
 * Used by layout (nav/footer), pages, and API.
 */
export const siteConfig = {
  name: "Fazade",
  tagline: "Empowering Businesses Through Technology",
  email: "info@fazade.com",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Our Service",
      href: "/services",
      children: [
        { label: "Cloud Adoption", href: "/services/cloud-adoption" },
        { label: "Artificial Intelligence", href: "/services/artificial-intelligence" },
        { label: "Application Modernisation", href: "/services/application-modernisation" },
        { label: "Data Analytics", href: "/services/data-analytics" },
        { label: "Low Code No Code", href: "/services/low-code-no-code" },
        { label: "SRE DevOps", href: "/services/sre-devops" },
        { label: "Quality Assurance", href: "/services/quality-assurance" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ],
  offices: [
    {
      name: "UK Office",
      company: "Fazade Consultant Service Ltd",
      address: "48 worple way, HA29SP, United Kingdom",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
