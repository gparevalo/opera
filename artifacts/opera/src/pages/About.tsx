import { useLanguage } from "@/i18n";
import { Layout } from "@/layout/Layout";
import { SeoHead } from "@/components/SeoHead";
import { motion } from "framer-motion";
import { Target, Eye, Columns3, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function AboutPage() {
  const { t, language } = useLanguage();
  const pillars = t.about.pillars;

  return (
    <>
      <SeoHead
        title="Nosotros | Ópera Surgical Center · Quito, Ecuador"
        description="Conoce la visión, misión y pilares de Ópera Surgical Center: el centro quirúrgico privado de referencia en Ecuador para especialistas que exigen agilidad, seguridad y respaldo institucional."
        path="/nosotros"
        ogTitle="Nosotros — Ópera Surgical Center · Quito"
        ogDescription="Centro quirúrgico privado de referencia en Ecuador. Infraestructura moderna, coordinación disciplinada y acompañamiento perioperatorio para especialistas."
      />

      <Layout>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden" style={{ background: "var(--op-canvas)" }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden style={{
            background: `
              radial-gradient(ellipse 70% 60% at 90% 0%, rgba(43,122,140,0.07) 0%, transparent 65%),
              radial-gradient(ellipse 50% 45% at 10% 100%, rgba(148,98,81,0.04) 0%, transparent 55%)
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
              <span className="t-eyebrow">Ópera Surgical Center</span>
              <h1 className="t-display-xl mt-6">{t.about.title}</h1>
              <p className="t-lead mt-6 max-w-2xl">{t.about.intro}</p>
            </motion.div>
          </div>
        </section>

        {/* ── Vision & Mission ── */}
        <section className="relative overflow-hidden" style={{ background: "var(--op-surface)", borderTop: "1px solid var(--op-border)", borderBottom: "1px solid var(--op-border)" }}>
          <div className="scene-glow-dark" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-24 md:py-36">
            <div className="grid gap-5 md:grid-cols-2">
              {[
                { icon: Eye, title: t.about.vision_title, body: t.about.vision },
                { icon: Target, title: t.about.mission_title, body: t.about.mission },
              ].map(({ icon: Icon, title, body }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.75, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="card-glass p-8"
                >
                  <div className="icon-well mb-5">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h2 className="t-headline mb-4">{title}</h2>
                  <p className="t-body">{body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pillars ── */}
        <section className="relative overflow-hidden" style={{ background: "var(--op-canvas)" }}>
          <div className="scene-glow-blue" />
          <div className="grain-overlay" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-24 md:py-36">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-14"
            >
              <span className="t-eyebrow">{t.about.pillars_title}</span>
              <h2 className="t-display mt-5">{t.about.pillars_title}</h2>
            </motion.div>
            <div className="grid gap-5 sm:grid-cols-3">
              {(["excellence", "safety", "innovation"] as const).map((key, i) => {
                const pillar = pillars[key];
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="card-glass group p-7 text-center"
                  >
                    <div className="icon-well mx-auto mb-5 group-hover:bg-[var(--op-amber)] group-hover:text-white transition-all duration-400">
                      <Columns3 className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="t-headline mb-3" style={{ fontSize: "1rem" }}>{pillar.title}</h3>
                    <p className="t-body text-sm leading-relaxed">{pillar.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative overflow-hidden" style={{ background: "var(--op-surface)", borderTop: "1px solid var(--op-border)" }}>
          <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-24 md:py-36">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="cta-panel-dark py-16 px-8 md:px-14 text-center"
            >
              <span className="t-eyebrow inline-flex"
                style={{ background: "rgba(43,122,140,0.12)", borderColor: "rgba(43,122,140,0.25)", color: "rgba(90,175,192,0.9)" }}>
                {language === "es" ? "¿Listo para operar en Ópera?" : "Ready to operate at Ópera?"}
              </span>
              <h2 className="t-display mt-6 mx-auto max-w-2xl" style={{ color: "#FFFFFF" }}>{t.home.final.title}</h2>
              <p className="mt-4 mx-auto max-w-lg" style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(155,185,195,0.75)" }}>{t.home.final.sub}</p>
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
