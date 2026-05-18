import { HelmetProvider, Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n";
import { Layout } from "@/layout/Layout";
import { motion } from "framer-motion";
import { whatsappHref } from "@/lib/site";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";
import { Link } from "wouter";

const SPECIALTY_KEYS = ["plastic", "trauma", "gyn", "uro", "general"] as const;

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
        {/* ── Hero ── */}
        <section className="relative s-ink overflow-hidden py-32 md:py-44">
          <div className="scene-glow-dark" />
          <div className="grain-overlay" />
          <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none" aria-hidden>
            <svg viewBox="0 0 600 700" className="w-full h-full opacity-[0.035]" preserveAspectRatio="xMinYMid slice">
              <circle cx="300" cy="350" r="280" fill="none" stroke="white" strokeWidth="1" />
              <circle cx="300" cy="350" r="180" fill="none" stroke="white" strokeWidth="0.75" />
              <circle cx="300" cy="350" r="90" fill="none" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="relative z-10 mx-auto max-w-[1380px] px-5 md:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <span className="t-eyebrow">{t.metadata.base_title_suffix}</span>
              <h1 className="t-display-xl mt-6">{t.specialties_page.title}</h1>
              <p className="t-lead mt-6 max-w-2xl">{t.specialties_page.intro}</p>
            </motion.div>
          </div>
        </section>

        {/* ── Specialty cards ── */}
        <section className="s-graphite py-24 md:py-36">
          <div className="mx-auto max-w-[1380px] px-5 md:px-8 xl:px-12">
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
                    className="card-glass group p-7 flex flex-col"
                  >
                    {/* Amber accent top */}
                    <div className="h-px w-12 mb-6 transition-all duration-500 group-hover:w-full"
                      style={{ background: "var(--op-amber)" }} />
                    <h2 className="t-headline mb-3" style={{ fontSize: "1.125rem" }}>{item.name}</h2>
                    <p className="t-body text-sm leading-relaxed mb-6 flex-1">{item.desc}</p>
                    <a
                      href={whatsappHref(
                        language === "es"
                          ? `Hola, quiero información sobre ${item.name} en Ópera.`
                          : `Hello, I'd like info about ${item.name} at Ópera.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3 mt-auto"
                      style={{ color: "var(--op-amber)" }}
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

        {/* ── CTA ── */}
        <section className="s-ink py-24 md:py-36 overflow-hidden relative">
          <div className="scene-glow-dark" />
          <div className="relative z-10 mx-auto max-w-[1380px] px-5 md:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="cta-panel-dark py-16 px-8 md:px-14 text-center"
            >
              <span className="t-eyebrow justify-center">
                {language === "es" ? "Conversemos" : "Let's talk"}
              </span>
              <h2 className="t-display mt-6 mx-auto max-w-2xl">{t.specialties_page.cta_title}</h2>
              <p className="t-lead mt-4 mx-auto max-w-lg">{t.specialties_page.cta_body}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/contacto">
                  <span className="btn btn-amber btn-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    {t.nav.visit}
                  </span>
                </Link>
                <a href={whatsappHref(whatsappMsg)} target="_blank" rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
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
