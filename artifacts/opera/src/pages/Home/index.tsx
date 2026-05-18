import { HelmetProvider, Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n";
import { Layout } from "@/layout/Layout";
import { HeroSection } from "./sections/HeroSection";
import { WhySection } from "./sections/WhySection";
import { JourneySection } from "./sections/JourneySection";
import { GallerySection } from "./sections/GallerySection";
import { IncludesSection } from "./sections/IncludesSection";
import { SpecialtiesSection } from "./sections/SpecialtiesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { FinalCtaSection } from "./sections/FinalCtaSection";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <HelmetProvider>
      <Helmet>
        <title>Ópera Surgical Center · Infraestructura quirúrgica premium · Quito</title>
        <meta name="description" content="Centro quirúrgico premium en Quito para especialistas médicos. Quirófanos listos, soporte 360°, coordinación dedicada. Sin inversión inicial. Agenda un recorrido privado." />
        <meta property="og:title" content="Ópera Surgical Center — Infraestructura quirúrgica premium" />
        <meta property="og:description" content="Opera en instalaciones de alto nivel. Sin construir. Sin fricción. Centro quirúrgico diseñado para especialistas." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://operasurgicalcenter.com" />
      </Helmet>

      <Layout navTransparent>
        <HeroSection />
        <WhySection />
        <JourneySection />
        <GallerySection />
        <IncludesSection />
        <SpecialtiesSection />
        <TestimonialsSection />
        <FinalCtaSection />
      </Layout>
    </HelmetProvider>
  );
}
