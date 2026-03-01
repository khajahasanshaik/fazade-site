import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>Privacy Policy</h1>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="page-content">
            <p>
              This is a placeholder. Add your privacy policy content here or
              load it dynamically from your backend/CMS.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
