import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { features } from "@/lib/features";

export const metadata = {
  title: `About | ${siteConfig.name}`,
  description: features.aboutBlurb,
};

export default function AboutPage() {
  return (
    <>
      <section className="page-head">
        <div className="container page-head-inner">
          <Image src="/logo.png" alt={siteConfig.name} width={120} height={38} className="page-head-logo" />
          <h1>About {siteConfig.name}</h1>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="page-content">
            <p>{features.aboutBlurb}</p>
          </div>
        </div>
      </section>
    </>
  );
}
