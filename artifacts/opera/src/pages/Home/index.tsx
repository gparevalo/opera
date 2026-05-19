import { Layout } from "@/layout/Layout";
import { SeoHead } from "@/components/SeoHead";
import { HeroSection } from "./sections/HeroSection";
import { WhySection } from "./sections/WhySection";
import { JourneySection } from "./sections/JourneySection";
import { GallerySection } from "./sections/GallerySection";
import { IncludesSection } from "./sections/IncludesSection";
import { SpecialtiesSection } from "./sections/SpecialtiesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { FinalCtaSection } from "./sections/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      <SeoHead
        title="Ópera Surgical Center | Centro Quirúrgico Premium · Quito, Ecuador"
        description="Centro quirúrgico privado premium en Quito para especialistas médicos. Quirófanos listos, soporte perioperatorio 360° y coordinación dedicada. Sin inversión inicial. Agenda un recorrido privado."
        path="/"
        ogTitle="Ópera Surgical Center — Centro Quirúrgico Premium · Quito"
        ogDescription="Opera en instalaciones de alto nivel. Sin construir. Sin fricción. Centro quirúrgico privado diseñado para especialistas médicos en Ecuador."
      />

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
    </>
  );
}
