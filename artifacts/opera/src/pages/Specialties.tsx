import { HelmetProvider, Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n";
import { Layout } from "@/layout/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { motion } from "framer-motion";
import { whatsappHref } from "@/lib/site";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { CalendarDays } from "lucide-react";

const SPECIALTY_KEYS = ["plastic", "trauma", "gyn", "uro", "general"] as const;
const SPECIALTY_COLORS = {
  plastic: "#004875",
  trauma: "#003a5c",
  gyn: "#002d4a",
  uro: "#004060",
  general: "#003050",
};

export default function SpecialtiesPage() {
  const { t, language } = useLanguage();
  const items = t.specialties_page.items;

  const whatsappMsg =
    language === "es"
      ? "Hola, me gustaría consultar sobre una especialidad en Ópera Surgical Center."
      : "Hello, I'd like to ask about a specialty at Ópera Surgical Center.";

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${t.specialties_page.title} · ${t.metadata.base_title_suffix}`}</title>
        <meta name="description" content={t.specialties_page.intro} />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="opera-page-hero py-28 md:py-40">
          <div className="scene-glow" />
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="opera-eyebrow mb-4">{t.metadata.base_title_suffix}</p>
              <h1 className="opera-display max-w-2xl">{t.specialties_page.title}</h1>
              <p className="opera-lead mt-5 max-w-2xl">{t.specialties_page.intro}</p>
            </motion.div>
          </div>
        </section>

        {/* Specialty cards */}
        <section className="opera-section opera-section-midnight py-24 md:py-32">
          <div className="scene-glow" />
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {SPECIALTY_KEYS.map((key, i) => {
                const item = items[key];
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.7, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                    className="group opera-glass-card-dark overflow-hidden"
                  >
                    {/* Color accent top bar */}
                    <div
                      className="h-1.5 w-full rounded-full mb-5 opacity-80"
                      style={{ background: `linear-gradient(90deg, ${SPECIALTY_COLORS[key]}, #ae9338)` }}
                    />
                    <h2 className="font-heading font-bold text-opera-ivory text-xl mb-3">{item.name}</h2>
                    <p className="text-sm leading-relaxed text-opera-ivory/55 mb-5">{item.desc}</p>
                    <a
                      href={whatsappHref(`Hola, quiero información sobre ${item.name} en Ópera.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-opera-amber text-sm font-semibold hover:gap-3 transition-all duration-300"
                    >
                      {language === "es" ? "Consultar disponibilidad" : "Check availability"}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="opera-section py-24 md:py-32"
          style={{ background: "linear-gradient(160deg, #003a5c, #004875, #003050)" }}
        >
          <div className="mx-auto max-w-4xl px-5 md:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="opera-cta-panel"
            >
              <h2 className="opera-display">{t.specialties_page.cta_title}</h2>
              <p className="opera-lead mt-4">{t.specialties_page.cta_body}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/contacto">
                  <span className="opera-btn opera-btn-primary">
                    <CalendarDays className="h-4 w-4" aria-hidden />
                    {t.nav.visit}
                  </span>
                </Link>
                <a
                  href={whatsappHref(whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opera-btn opera-btn-whatsapp"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </HelmetProvider>
  );
}
