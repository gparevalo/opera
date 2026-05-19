import { useLanguage } from "@/i18n";
import { Layout } from "@/layout/Layout";
import { SeoHead } from "@/components/SeoHead";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar } from "lucide-react";

const INFRA_AREAS = [
  { key: "or",        colClass: "lg:col-span-2", minH: 360,
    bg: "linear-gradient(145deg, #0c1a22 0%, #2B4F57 55%, #0a1318 100%)", pattern: "reticle" },
  { key: "rec",       colClass: "",             minH: 240,
    bg: "linear-gradient(155deg, #111418 0%, #1a2228 100%)", pattern: "dots" },
  { key: "short",     colClass: "",             minH: 240,
    bg: "linear-gradient(150deg, #0a1318 0%, #111c22 100%)", pattern: "grid" },
  { key: "equip",     colClass: "",             minH: 240,
    bg: "linear-gradient(145deg, #2B4F57 0%, #1e3840 100%)", pattern: "cross" },
  { key: "sterile",   colClass: "",             minH: 240,
    bg: "linear-gradient(160deg, #0a0e11 0%, #111820 100%)", pattern: "lines" },
  { key: "areas",     colClass: "lg:col-span-2", minH: 300,
    bg: "linear-gradient(145deg, #1e3840 0%, #2B4F57 100%)", pattern: "radial" },
  { key: "reception", colClass: "lg:col-span-3", minH: 280,
    bg: "linear-gradient(155deg, rgba(148,98,81,0.2), #111418 100%)", pattern: "grid" },
];

function PatternSvg({ type }: { type: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.06]"
      viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden>
      {type === "reticle" && (<>
        <circle cx="200" cy="150" r="120" fill="none" stroke="white" strokeWidth="1" />
        <circle cx="200" cy="150" r="70" fill="none" stroke="white" strokeWidth="0.75" />
        <circle cx="200" cy="150" r="30" fill="none" stroke="white" strokeWidth="0.5" />
        <line x1="200" y1="0" x2="200" y2="100" stroke="white" strokeWidth="0.5" />
        <line x1="200" y1="200" x2="200" y2="300" stroke="white" strokeWidth="0.5" />
        <line x1="0" y1="150" x2="140" y2="150" stroke="white" strokeWidth="0.5" />
        <line x1="260" y1="150" x2="400" y2="150" stroke="white" strokeWidth="0.5" />
      </>)}
      {type === "dots" && Array.from({ length: 6 }).map((_, r) =>
        Array.from({ length: 9 }).map((_, c) => (
          <circle key={`${r}-${c}`} cx={c * 50 + 25} cy={r * 55 + 27} r="1.5" fill="white" />
        ))
      )}
      {type === "grid" && (<>
        {Array.from({ length: 9 }).map((_, i) => (<line key={`v${i}`} x1={i*50} y1="0" x2={i*50} y2="300" stroke="white" strokeWidth="0.5" />))}
        {Array.from({ length: 7 }).map((_, i) => (<line key={`h${i}`} x1="0" y1={i*50} x2="400" y2={i*50} stroke="white" strokeWidth="0.5" />))}
      </>)}
      {type === "cross" && (<>
        <line x1="0" y1="150" x2="400" y2="150" stroke="white" strokeWidth="0.75" />
        <line x1="200" y1="0" x2="200" y2="300" stroke="white" strokeWidth="0.75" />
        <rect x="140" y="90" width="120" height="120" fill="none" stroke="white" strokeWidth="0.75" />
        <rect x="160" y="110" width="80" height="80" fill="none" stroke="white" strokeWidth="0.5" />
      </>)}
      {type === "lines" && Array.from({ length: 14 }).map((_, i) => (
        <line key={i} x1="0" y1={i * 24} x2="400" y2={i * 24} stroke="white" strokeWidth="0.5" />
      ))}
      {type === "radial" && Array.from({ length: 16 }).map((_, i) => {
        const a = (i * 22.5 * Math.PI) / 180;
        return <line key={i} x1="200" y1="150" x2={200 + 220 * Math.cos(a)} y2={150 + 220 * Math.sin(a)} stroke="white" strokeWidth="0.5" />;
      })}
    </svg>
  );
}

export default function InfrastructurePage() {
  const { t, language } = useLanguage();
  const labels = t.home.infra.labels;

  return (
    <>
      <SeoHead
        title="Infraestructura Quirúrgica en Quito | Ópera Surgical Center"
        description="Quirófanos modernos, área de recuperación, hospitalización corta y esterilización en Quito. Infraestructura premium para especialistas médicos con soporte perioperatorio 360°."
        path="/infraestructura"
        ogTitle="Infraestructura Quirúrgica Premium · Ópera Surgical Center Quito"
        ogDescription="Quirófanos, recuperación, hospitalización corta y esterilización. Infraestructura clínica premium diseñada para especialistas médicos en Quito, Ecuador."
      />

      <Layout>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden" style={{ background: "var(--op-canvas)" }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden style={{
            background: `
              radial-gradient(ellipse 70% 60% at 90% 0%, rgba(43,122,140,0.07) 0%, transparent 65%),
              radial-gradient(ellipse 50% 45% at 10% 100%, rgba(43,122,140,0.04) 0%, transparent 55%)
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
              <span className="t-eyebrow">{t.home.infra.eyebrow}</span>
              <h1 className="t-display-xl mt-6">{t.infrastructure_page.title}</h1>
              <p className="t-lead mt-6 max-w-2xl">{t.infrastructure_page.intro}</p>
            </motion.div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="relative overflow-hidden" style={{ background: "var(--op-surface)", borderTop: "1px solid var(--op-border)", borderBottom: "1px solid var(--op-border)" }}>
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-24 md:py-36">
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
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(43,122,140,0.07) 0%, transparent 65%)" }} />
                  <div className="gallery-card-label">
                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] mb-0.5" style={{ color: "var(--op-amber-light)" }}>
                      {labels[key as keyof typeof labels]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-[12px] italic mt-8" style={{ color: "var(--op-fog)" }}>
              {t.infrastructure_page.gallery_caption}
            </p>
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
                {language === "es" ? "¿Todo lo que necesitas?" : "Everything you need?"}
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
