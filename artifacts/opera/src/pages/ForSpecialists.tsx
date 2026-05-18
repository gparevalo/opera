import { HelmetProvider, Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n";
import { Layout } from "@/layout/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { motion } from "framer-motion";
import { whatsappHref } from "@/lib/site";
import { CheckCircle2, MessageCircle, CalendarDays } from "lucide-react";
import { Link } from "wouter";

const SECTIONS = [
  { key: "why_title", bodyKey: "why", icon: "🎯" },
  { key: "how_title", bodyKey: "how", icon: "⚙️" },
  { key: "back_title", bodyKey: "back", icon: "🛡️" },
  { key: "schedule_title", bodyKey: "schedule", icon: "📅" },
] as const;

export default function ForSpecialistsPage() {
  const { t, language } = useLanguage();
  const sp = t.specialists_page;

  const whatsappMsg =
    language === "es"
      ? "Hola, soy especialista y me gustaría saber más sobre operar en Ópera Surgical Center."
      : "Hello, I'm a specialist and I'd like to learn about operating at Ópera Surgical Center.";

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${sp.title} · ${t.metadata.base_title_suffix}`}</title>
        <meta name="description" content={sp.intro} />
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
              <p className="opera-eyebrow mb-4">{t.home.b2b.eyebrow}</p>
              <h1 className="opera-display max-w-2xl">{sp.title}</h1>
              <p className="opera-lead mt-5 max-w-2xl">{sp.intro}</p>
            </motion.div>
          </div>
        </section>

        {/* Content sections */}
        <section className="opera-section opera-section-midnight py-24 md:py-36">
          <div className="scene-glow" />
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
            <div className="grid gap-8 md:grid-cols-2">
              {SECTIONS.map(({ key, bodyKey, icon }, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.75, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="opera-glass-card-dark"
                >
                  <div className="flex items-start gap-4">
                    <div className="opera-icon-well-dark shrink-0 text-xl">{icon}</div>
                    <div>
                      <h2 className="font-heading font-bold text-opera-ivory text-lg mb-3">
                        {sp[key as keyof typeof sp] as string}
                      </h2>
                      <p className="text-sm leading-relaxed text-opera-ivory/55">
                        {sp[bodyKey as keyof typeof sp] as string}
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
              className="mt-12 opera-glass-card-dark"
            >
              <SectionHeader
                eyebrow={t.home.b2b.eyebrow}
                title={t.home.b2b.title}
                light
                className="mb-8"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                {Object.values(t.home.b2b.points).map((point) => (
                  <div key={point.title} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-opera-amber/70 shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <p className="text-sm font-semibold text-opera-ivory">{point.title}</p>
                      <p className="text-xs text-opera-ivory/45 mt-0.5">{point.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
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
              <h2 className="opera-display">{t.home.final.title}</h2>
              <p className="opera-lead mt-4">{t.home.final.sub}</p>
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
