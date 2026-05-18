import { HelmetProvider, Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n";
import { Layout } from "@/layout/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { CalendarDays } from "lucide-react";

const INFRA_AREAS = [
  { key: "or", aspect: "3/2", size: "lg:col-span-2", height: 340 },
  { key: "rec", aspect: "3/2", size: "", height: 240 },
  { key: "short", aspect: "3/2", size: "", height: 240 },
  { key: "equip", aspect: "3/2", size: "", height: 240 },
  { key: "sterile", aspect: "3/2", size: "", height: 240 },
  { key: "areas", aspect: "3/2", size: "lg:col-span-2", height: 300 },
  { key: "reception", aspect: "3/2", size: "lg:col-span-3", height: 280 },
];

const AREA_COLORS: Record<string, string> = {
  or: "linear-gradient(160deg, #003a5c, #004875)",
  rec: "linear-gradient(145deg, #021a2c, #003a5c)",
  short: "linear-gradient(155deg, #0a1820, #003060)",
  equip: "linear-gradient(150deg, #004875, #006090)",
  sterile: "linear-gradient(160deg, #060e16, #002540)",
  areas: "linear-gradient(145deg, #003a5c, #004875)",
  reception: "linear-gradient(155deg, rgba(174,147,56,0.15), #003a5c)",
};

export default function InfrastructurePage() {
  const { t } = useLanguage();
  const labels = t.home.infra.labels;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${t.infrastructure_page.title} · ${t.metadata.base_title_suffix}`}</title>
        <meta name="description" content={t.infrastructure_page.intro} />
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
              <p className="opera-eyebrow mb-4">{t.home.infra.eyebrow}</p>
              <h1 className="opera-display max-w-2xl">{t.infrastructure_page.title}</h1>
              <p className="opera-lead mt-5 max-w-2xl">{t.infrastructure_page.intro}</p>
            </motion.div>
          </div>
        </section>

        {/* Gallery */}
        <section className="opera-section opera-section-midnight py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
            <div className="grid gap-4 lg:grid-cols-3">
              {INFRA_AREAS.map(({ key, size, height }, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.75, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className={`opera-image-frame group overflow-hidden ${size}`}
                  style={{ minHeight: `${height}px` }}
                >
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                    style={{ background: AREA_COLORS[key] }}
                  />
                  {/* Abstract pattern */}
                  <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
                    <circle cx="200" cy="150" r="100" fill="none" stroke="white" strokeWidth="1" />
                    <circle cx="200" cy="150" r="60" fill="none" stroke="white" strokeWidth="0.5" />
                    <line x1="0" y1="150" x2="400" y2="150" stroke="white" strokeWidth="0.5" />
                    <line x1="200" y1="0" x2="200" y2="300" stroke="white" strokeWidth="0.5" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <p className="text-opera-amber text-xs font-bold uppercase tracking-widest mb-1">
                      {labels[key as keyof typeof labels]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-sm text-opera-ivory/35 mt-6 italic">
              {t.infrastructure_page.gallery_caption}
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="opera-section py-20 md:py-28" style={{ background: "linear-gradient(160deg, #003a5c, #004875, #003050)" }}>
          <div className="mx-auto max-w-4xl px-5 md:px-8 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
