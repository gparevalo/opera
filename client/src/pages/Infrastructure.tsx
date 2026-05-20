import { SeoHead } from "@/components/SeoHead";
import { InfraStorySection } from "@/pages/Infraestructure/sections/InfraStorySection";
import { PremiumHero } from "@/components/site/PremiumHero";
import { useLanguage } from "@/i18n";
import { Layout } from "@/layout/Layout";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Link } from "wouter";
import HeroHome from "./Home/sections/HeroHome";

export default function InfrastructurePage() {
  const { t, language } = useLanguage();

  return (
    <>
      <SeoHead
        title="Infraestructura Quirúrgica en Quito | Ópera Surgical Center"
        description="Quirófanos modernos, área de recuperación, hospitalización corta y esterilización en Quito. Infraestructura premium para especialistas médicos con soporte perioperatorio 360°."
        path="/infraestructura"
        ogTitle="Infraestructura Quirúrgica Premium · Ópera Surgical Center Quito"
        ogDescription="Quirófanos, recuperación, hospitalización corta y esterilización. Infraestructura clínica premium diseñada para especialistas médicos en Quito, Ecuador."
      />

      <HeroHome />
      <Layout>
        {/* ── Hero ── */}
        <PremiumHero
          eyebrow={t.home.infra.eyebrow}
          title={t.infrastructure_page.title}
          description={t.infrastructure_page.intro}
          image="/clinica/operahero4.png"
          actions={[
            {
              label: t.nav.visit,
              href: "/contacto",
            },
          ]}
        />

        {/* ── Scroll storytelling section ── */}
        <InfraStorySection />

        {/* ── CTA ── */}
        <section
          className="relative overflow-hidden"
          style={{
            background: "var(--op-canvas)",
            borderTop: "1px solid var(--op-border)",
          }}
        >
          <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-24 md:py-36">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="cta-panel-dark py-16 px-8 md:px-14 text-center"
            >
              <span
                className="t-eyebrow inline-flex"
                style={{
                  background: "rgba(43,122,140,0.12)",
                  borderColor: "rgba(43,122,140,0.25)",
                  color: "rgba(90,175,192,0.9)",
                }}
              >
                {language === "es"
                  ? "¿Todo lo que necesitas?"
                  : "Everything you need?"}
              </span>
              <h2
                className="t-display mt-6 mx-auto max-w-2xl"
                style={{ color: "#FFFFFF" }}
              >
                {t.home.final.title}
              </h2>
              <p
                className="mt-4 mx-auto max-w-lg"
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "rgba(155,185,195,0.75)",
                }}
              >
                {t.home.final.sub}
              </p>
              <div className="mt-8 flex justify-center">
                <Link href="/contacto">
                  <span className="btn btn-white btn-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    {t.nav.visit}
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
