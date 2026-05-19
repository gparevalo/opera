import { useLanguage } from "@/i18n";
import { Layout } from "@/layout/Layout";
import { SeoHead } from "@/components/SeoHead";
import { motion } from "framer-motion";
import { whatsappHref } from "@/lib/site";
import { CheckCircle2, MessageCircle, Calendar, Star, Settings, Shield, CalendarDays } from "lucide-react";
import { Link } from "wouter";

const SECTION_ICONS = [Star, Settings, Shield, CalendarDays];

export default function ForSpecialistsPage() {
  const { t, language } = useLanguage();
  const sp = t.specialists_page;

  const SECTIONS = [
    { key: "why_title" as const, bodyKey: "why" as const, icon: SECTION_ICONS[0] },
    { key: "how_title" as const, bodyKey: "how" as const, icon: SECTION_ICONS[1] },
    { key: "back_title" as const, bodyKey: "back" as const, icon: SECTION_ICONS[2] },
    { key: "schedule_title" as const, bodyKey: "schedule" as const, icon: SECTION_ICONS[3] },
  ];

  const whatsappMsg =
    language === "es"
      ? "Hola, soy especialista y me gustaría saber más sobre operar en Ópera Surgical Center."
      : "Hello, I'm a specialist and I'd like to learn about operating at Ópera Surgical Center.";

  return (
    <>
      <SeoHead
        title="Para Especialistas | Renta de Quirófanos en Quito · Ópera"
        description="Renta de quirófanos y coordinación quirúrgica premium para especialistas médicos en Quito. Sin inversión inicial, agenda flexible, soporte perioperatorio 360°. Ópera Surgical Center."
        path="/para-especialistas"
        ogTitle="Para Especialistas Médicos — Renta de Quirófanos · Quito"
        ogDescription="Quirófanos premium disponibles para especialistas en Quito. Sin inversión inicial, coordinación dedicada y soporte perioperatorio integral. Ópera Surgical Center."
      />

      <Layout>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden" style={{ background: "var(--op-canvas)" }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden style={{
            background: `
              radial-gradient(ellipse 65% 55% at 80% 10%, rgba(43,122,140,0.08) 0%, transparent 60%),
              radial-gradient(ellipse 45% 40% at 10% 90%, rgba(148,98,81,0.05) 0%, transparent 55%)
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
              <span className="t-eyebrow">{t.home.b2b.eyebrow}</span>
              <h1 className="t-display-xl mt-6">{sp.title}</h1>
              <p className="t-lead mt-6 max-w-2xl">{sp.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contacto">
                  <span className="btn btn-amber btn-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    {language === "es" ? "Agendar recorrido" : "Book tour"}
                  </span>
                </Link>
                <a href={whatsappHref(whatsappMsg)} target="_blank" rel="noopener noreferrer"
                  className="btn btn-ghost btn-lg flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Content ── */}
        <section className="relative overflow-hidden" style={{ background: "var(--op-surface)", borderTop: "1px solid var(--op-border)", borderBottom: "1px solid var(--op-border)" }}>
          <div className="scene-glow-dark" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-24 md:py-36">
            <div className="grid gap-5 md:grid-cols-2">
              {SECTIONS.map(({ key, bodyKey, icon: Icon }, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.75, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="card-glass p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="icon-well shrink-0">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <h2 className="t-headline mb-3" style={{ fontSize: "1.125rem" }}>
                        {sp[key] as string}
                      </h2>
                      <p className="t-body text-sm leading-relaxed">
                        {sp[bodyKey] as string}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 card-glass p-8"
            >
              <div className="mb-8">
                <span className="t-eyebrow">{t.home.b2b.eyebrow}</span>
                <h2 className="t-display mt-5">{t.home.b2b.title}</h2>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {Object.values(t.home.b2b.points).map((point) => (
                  <div key={point.title} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "var(--op-amber)" }} aria-hidden />
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "var(--op-ink)" }}>{point.title}</p>
                      <p className="text-xs leading-relaxed mt-0.5" style={{ color: "var(--op-mist)" }}>{point.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
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
                {language === "es" ? "Hablemos de tu práctica" : "Let's talk about your practice"}
              </span>
              <h2 className="t-display mt-6 mx-auto max-w-2xl" style={{ color: "#FFFFFF" }}>{t.home.final.title}</h2>
              <p className="mt-4 mx-auto max-w-lg" style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(155,185,195,0.75)" }}>{t.home.final.sub}</p>
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
