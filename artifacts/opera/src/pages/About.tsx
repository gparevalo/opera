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
        <section className="relative s-ink overflow-hidden py-32 md:py-44">
          <div className="scene-glow-dark" />
          <div className="grain-overlay" />
          <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none" aria-hidden>
            <svg viewBox="0 0 600 700" className="w-full h-full opacity-[0.04]" preserveAspectRatio="xMinYMid slice">
              <circle cx="300" cy="350" r="320" fill="none" stroke="white" strokeWidth="1" />
              <circle cx="300" cy="350" r="200" fill="none" stroke="white" strokeWidth="0.75" />
              <circle cx="300" cy="350" r="100" fill="none" stroke="white" strokeWidth="0.5" />
              <line x1="300" y1="0" x2="300" y2="700" stroke="white" strokeWidth="0.5" />
              <line x1="0" y1="350" x2="600" y2="350" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="relative z-10 mx-auto max-w-[1380px] px-5 md:px-8 xl:px-12">
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
        <section className="relative s-graphite py-24 md:py-36 overflow-hidden">
          <div className="scene-glow-dark" />
          <div className="relative z-10 mx-auto max-w-[1380px] px-5 md:px-8 xl:px-12">
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
                  <p className="t-lead text-sm">{body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pillars ── */}
        <section className="relative s-graphite-2 py-24 md:py-36 overflow-hidden">
          <div className="scene-glow-blue" />
          <div className="grain-overlay" />
          <div className="relative z-10 mx-auto max-w-[1380px] px-5 md:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-14 max-w-xl"
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
                    <div className="icon-well mx-auto mb-5 group-hover:border-[color:var(--op-amber)] transition-all duration-400">
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
        <section className="s-ink py-24 md:py-36 overflow-hidden relative">
          <div className="scene-glow-dark" />
          <div className="relative z-10 mx-auto max-w-[1380px] px-5 md:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="cta-panel-dark py-16 px-8 md:px-14 text-center"
            >
              <span className="t-eyebrow justify-center">
                {language === "es" ? "¿Listo para operar en Ópera?" : "Ready to operate at Ópera?"}
              </span>
              <h2 className="t-display mt-6 mx-auto max-w-2xl">{t.home.final.title}</h2>
              <p className="t-lead mt-4 mx-auto max-w-lg">{t.home.final.sub}</p>
              <div className="mt-8 flex justify-center">
                <Link href="/contacto">
                  <span className="btn btn-amber btn-lg flex items-center gap-2">
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
