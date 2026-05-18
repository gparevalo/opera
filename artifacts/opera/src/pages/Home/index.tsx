import { HelmetProvider, Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n";
import { Layout } from "@/layout/Layout";
import { HeroSection } from "./sections/HeroSection";
import { DifferentialsSection } from "./sections/DifferentialsSection";
import { SpecialistsWorkflowSection } from "./sections/SpecialistsWorkflowSection";
import { ProcessSection } from "./sections/ProcessSection";
import { InfraPreviewSection } from "./sections/InfraPreviewSection";
import { TrustSection } from "./sections/TrustSection";
import { FinalCtaSection } from "./sections/FinalCtaSection";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <HelmetProvider>
      <Helmet>
        <title>{t.metadata.base_title_suffix}</title>
        <meta name="description" content={t.metadata.default_description} />
        <meta property="og:title" content={t.metadata.base_title_suffix} />
        <meta property="og:description" content={t.metadata.default_description} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://operasurgicalcenter.com" />
      </Helmet>

      <Layout navTransparent>
        <HeroSection />
        <DifferentialsSection />
        <SpecialistsWorkflowSection />
        <ProcessSection />
        <InfraPreviewSection />
        <TrustSection />
        <FinalCtaSection />
      </Layout>
    </HelmetProvider>
  );
}
