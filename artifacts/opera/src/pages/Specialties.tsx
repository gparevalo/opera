import { useLanguage } from "@/i18n";
import { Layout } from "@/layout/Layout";
import { SeoHead } from "@/components/SeoHead";
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
    <>
      <SeoHead
        title="Especialidades Médicas en Quito | Ópera Surgical Center"
        description="Cirugía plástica, traumatología, ginecología, urología y cirugía general en Quito. Infraestructura quirúrgica premium con soporte perioperatorio dedicado en Ópera Surgical Center."
        path="/especialidades"
        ogTitle="Especialidades Médicas · Ópera Surgical Center Quito"
        ogDescription="Cirugía plástica, traumatología, ginecología, urología y cirugía general. Quirófanos premium y soporte perioperatorio 360° en Quito, Ecuador."
      />

      <Layout>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden" style={{ background: "var(--op-canvas)" }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden style={{
            background: `
              radial-gradient(ellipse 65% 55% at 80% 0%, rgba(43,122,140,0.07) 0%, transparent 60%),
              radial-gradient(ellipse 45% 40% at 15% 100%, rgba(148,98,81,0.04) 0%, transparent 55%)
            `
          }} />
          <div className="grain-overlay" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 pt-36 pb-24 md:pt-44 md:pb-32">
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
        <section className="relative overflow-hidden" style={{ background: "var(--op-surface)", borderTop: "1px solid var(--op-border)", borderBottom: "1px solid var(--op-border)" }}>
          <div className="scene-glow-dark" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-24 md:py-36">
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
                    <div className="h-px w-12 mb-6 transition-all duration-500 group-hover:w-full rounded-full"
                      style={{ background: "linear-gradient(90deg, var(--op-amber), var(--op-warm))" }} />
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
        <section className="relative overflow-hidden" style={{ background: "var(--op-canvas)", borderTop: "1px solid var(--op-border)" }}>
          <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-24 md:py-36">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="cta-panel-dark py-16 px-8 md:px-14 text-center"
            >
              <span className="t-eyebrow inline-flex"
                style={{ background: "rgba(43,122,140,0.12)", borderColor: "rgba(43,122,140,0.25)", color: "rgba(90,175,192,0.9)" }}>
                {language === "es" ? "Conversemos" : "Let's talk"}
              </span>
              <h2 className="t-display mt-6 mx-auto max-w-2xl" style={{ color: "#FFFFFF" }}>{t.specialties_page.cta_title}</h2>
              <p className="mt-4 mx-auto max-w-lg" style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(155,185,195,0.75)" }}>{t.specialties_page.cta_body}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/contacto">
                  <span className="btn btn-white btn-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    {t.nav.visit}
                  </span>
                </Link>
                <a href={whatsappHref(whatsappMsg)} target="_blank" rel="noopener noreferrer"
                  className="btn btn-lg flex items-center gap-2"
                  style={{
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(200,220,225,0.85)",
                    borderRadius: "100px",
                    padding: "1.125rem 2.5rem",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                  }}>
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
