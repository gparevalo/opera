import { HelmetProvider, Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n";
import { Layout } from "@/layout/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { motion } from "framer-motion";
import { Target, Eye, Columns3 } from "lucide-react";
import { Link } from "wouter";
import { CalendarDays } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();
  const pillars = t.about.pillars;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${t.about.title} · ${t.metadata.base_title_suffix}`}</title>
        <meta name="description" content={t.about.intro} />
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
              <p className="opera-eyebrow mb-4">Ópera Surgical Center</p>
              <h1 className="opera-display max-w-2xl">{t.about.title}</h1>
              <p className="opera-lead mt-5 max-w-2xl">{t.about.intro}</p>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="opera-section opera-section-midnight py-24 md:py-32">
          <div className="scene-glow" />
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12 grid gap-8 md:grid-cols-2">
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
                className="opera-glass-card-dark"
              >
                <div className="opera-icon-well-dark mb-4">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h2 className="font-heading font-bold text-opera-ivory text-xl mb-3">{title}</h2>
                <p className="opera-lead text-sm">{body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pillars */}
        <section
          className="opera-section py-24 md:py-32"
          style={{ background: "linear-gradient(160deg, #003a5c, #004875, #003050)" }}
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
            <SectionHeader
              eyebrow={t.about.pillars_title}
              title={t.about.pillars_title}
              light
              align="center"
              className="mb-14"
            />
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
                    className="opera-glass-card-dark text-center"
                  >
                    <Columns3 className="h-6 w-6 text-opera-amber mx-auto mb-4" aria-hidden />
                    <h3 className="font-heading font-bold text-opera-ivory text-base mb-2">{pillar.title}</h3>
                    <p className="text-sm leading-relaxed text-opera-ivory/55">{pillar.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="opera-section opera-section-midnight py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-5 md:px-8 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="opera-cta-panel"
            >
              <h2 className="opera-display">{t.home.final.title}</h2>
              <p className="opera-lead mt-4">{t.home.final.sub}</p>
              <div className="mt-8 flex justify-center">
                <Link href="/contacto">
                  <span className="opera-btn opera-btn-primary">
                    <CalendarDays className="h-4 w-4" aria-hidden />
                    {t.nav.visit}
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </HelmetProvider>
  );
}
