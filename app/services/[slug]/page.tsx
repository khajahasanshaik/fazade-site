import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { features } from "@/lib/features";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return features.services.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = features.services.find((s) => s.id === slug);
  if (!service) return { title: `Services | ${siteConfig.name}` };
  return {
    title: `${service.title} | ${siteConfig.name}`,
    description: service.subtitle,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = features.services.find((s) => s.id === slug);
  if (!service) notFound();

  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>{service.title}</h1>
          <p className="text-muted" style={{ marginTop: "0.5rem" }}>
            {service.subtitle}
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="page-content">
            <p>
              {siteConfig.name} delivers {service.title.toLowerCase()} to help
              businesses achieve their goals. Add more content for this service
              in <code>lib/features.ts</code> or via the API.
            </p>
            <Link href="/services" className="btn btn-outline">
              ← All services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
