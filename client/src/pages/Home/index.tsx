import { SEO } from "@/components/seo";
import { BaseLayout } from "@/layout/base-layout";
import { DifferentialsSection } from "./sections/DifferentialsSection";
import { FinalCtaSection } from "./sections/FinalCtaSection";
import { HeroSection } from "./sections/HeroSection";
import { InfraPreviewSection } from "./sections/InfraPreviewSection";
import { ProcessSection } from "./sections/ProcessSection";
import { SpecialistsWorkflowSection } from "./sections/SpecialistsWorkflowSection";
import { TrustSection } from "./sections/TrustSection";

export default function Home() {
  return (
    <BaseLayout>
      <SEO
        canonicalPath="/"
        extraSchemas={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Ópera Surgical Center — Inicio",
            description:
              "Centro quirúrgico en Quito: infraestructura moderna, cirugía de mediana y baja complejidad, quirófanos para especialistas.",
            about: [
              "centro quirúrgico Quito",
              "cirugía ambulatoria Quito",
              "infraestructura quirúrgica",
              "quirófanos para especialistas",
              "centro quirúrgico privado Quito",
            ],
          },
        ]}
      />
      <HeroSection />
      <DifferentialsSection />
      <SpecialistsWorkflowSection />
      <ProcessSection />
      <InfraPreviewSection />
      <TrustSection />
      <FinalCtaSection />
    </BaseLayout>
  );
}
