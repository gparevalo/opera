import { HelmetProvider, Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n";
import { Layout } from "@/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar } from "lucide-react";

const INFRA_AREAS = [
  { key: "or",        colClass: "lg:col-span-2", minH: 360,
    bg: "linear-gradient(145deg, #071826 0%, #004875 55%, #071520 100%)", pattern: "reticle" },
  { key: "rec",       colClass: "",             minH: 240,
    bg: "linear-gradient(155deg, #0d1117 0%, #1a2332 100%)", pattern: "dots" },
  { key: "short",     colClass: "",             minH: 240,
    bg: "linear-gradient(150deg, #071520 0%, #0e1c2a 100%)", pattern: "grid" },
  { key: "equip",     colClass: "",             minH: 240,
    bg: "linear-gradient(145deg, #004875 0%, #003a5c 100%)", pattern: "cross" },
  { key: "sterile",   colClass: "",             minH: 240,
    bg: "linear-gradient(160deg, #060a0e 0%, #0d1520 100%)", pattern: "lines" },
  { key: "areas",     colClass: "lg:col-span-2", minH: 300,
    bg: "linear-gradient(145deg, #003a5c 0%, #004875 100%)", pattern: "radial" },
  { key: "reception", colClass: "lg:col-span-3", minH: 280,
    bg: "linear-gradient(155deg, rgba(201,168,76,0.08) 0%, #0d1117 100%)", pattern: "grid" },
];

function PatternSvg({ type }: { type: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.06]"
      viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden>
      {type === "reticle" && (
        <>
          <circle cx="200" cy="150" r="120" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="200" cy="150" r="70" fill="none" stroke="white" strokeWidth="0.75" />
          <circle cx="200" cy="150" r="30" fill="none" stroke="white" strokeWidth="0.5" />
          <line x1="200" y1="0" x2="200" y2="100" stroke="white" strokeWidth="0.5" />
          <line x1="200" y1="200" x2="200" y2="300" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="150" x2="140" y2="150" stroke="white" strokeWidth="0.5" />
          <line x1="260" y1="150" x2="400" y2="150" stroke="white" strokeWidth="0.5" />
        </>
      )}
      {type === "dots" && Array.from({ length: 6 }).map((_, r) =>
        Array.from({ length: 9 }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={c * 50 + 25} cy={r * 55 + 27} r="1.5" fill="white" />
        ))
      )}
      {type === "grid" && (
        <>
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="300" stroke="white" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} stroke="white" strokeWidth="0.5" />
          ))}
        </>
      )}
      {type === "cross" && (
        <>
          <line x1="0" y1="150" x2="400" y2="150" stroke="white" strokeWidth="0.75" />
          <line x1="200" y1="0" x2="200" y2="300" stroke="white" strokeWidth="0.75" />
          <rect x="140" y="90" width="120" height="120" fill="none" stroke="white" strokeWidth="0.75" />
          <rect x="160" y="110" width="80" height="80" fill="none" stroke="white" strokeWidth="0.5" />
        </>
      )}
      {type === "lines" && Array.from({ length: 14 }).map((_, i) => (
        <line key={i} x1="0" y1={i * 24} x2="400" y2={i * 24} stroke="white" strokeWidth="0.5" />
      ))}
      {type === "radial" && Array.from({ length: 16 }).map((_, i) => {
        const a = (i * 22.5 * Math.PI) / 180;
        return (
          <line key={i} x1="200" y1="150" x2={200 + 220 * Math.cos(a)} y2={150 + 220 * Math.sin(a)}
            stroke="white" strokeWidth="0.5" />
        );
      })}
    </svg>
  );
}

export default function InfrastructurePage() {
  const { t, language } = useLanguage();
  const labels = t.home.infra.labels;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${t.infrastructure_page.title} · ${t.metadata.base_title_suffix}`}</title>
        <meta name="description" content={t.infrastructure_page.intro} />
      </Helmet>

      <Layout>
        {/* ── Hero ── */}
        <section className="relative s-ink overflow-hidden py-32 md:py-44">
          <div className="scene-glow-dark" />
          <div className="grain-overlay" />
          <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none" aria-hidden>
            <svg viewBox="0 0 600 700" className="w-full h-full opacity-[0.04]" preserveAspectRatio="xMinYMid slice">
              <circle cx="300" cy="350" r="320" fill="none" stroke="white" strokeWidth="1" />
              <circle cx="300" cy="350" r="180" fill="none" stroke="white" strokeWidth="0.75" />
              <circle cx="300" cy="350" r="80" fill="none" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>
          <div className="relative z-10 mx-auto max-w-[1380px] px-5 md:px-8 xl:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <span className="t-eyebrow">{t.home.infra.eyebrow}</span>
              <h1 className="t-display-xl mt-6">{t.infrastructure_page.title}</h1>
              <p className="t-lead mt-6 max-w-2xl">{t.infrastructure_page.intro}</p>
            </motion.div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="s-graphite py-24 md:py-36 overflow-hidden">
          <div className="mx-auto max-w-[1380px] px-5 md:px-8 xl:px-12">
            <div className="grid gap-4 lg:grid-cols-3">
              {INFRA_AREAS.map(({ key, colClass, minH, bg, pattern }, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.75, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className={`gallery-card ${colClass}`}
                  style={{ minHeight: `${minH}px` }}
                >
                  <div className="gallery-card-inner absolute inset-0" style={{ background: bg }} />
                  <PatternSvg type={pattern} />
                  {/* Amber glow */}
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,168,76,0.05) 0%, transparent 65%)" }} />
                  <div className="gallery-card-label">
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] mb-0.5"
                      style={{ color: "var(--op-amber)" }}>
                      {labels[key as keyof typeof labels]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-sm mt-8 italic" style={{ color: "rgba(138,144,153,0.4)" }}>
              {t.infrastructure_page.gallery_caption}
            </p>
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
                {language === "es" ? "¿Todo lo que necesitas?" : "Everything you need?"}
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
    </HelmetProvider>
  );
}
