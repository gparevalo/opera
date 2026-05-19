import { SeoHead } from "@/components/SeoHead";
import { Layout } from "@/layout/Layout";
import { FinalCtaSection } from "./sections/FinalCtaSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";
import { IncludesSection } from "./sections/IncludesSection";
import { JourneySection } from "./sections/JourneySection";
import { SpecialtiesSection } from "./sections/SpecialtiesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { WhySection } from "./sections/WhySection";

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
