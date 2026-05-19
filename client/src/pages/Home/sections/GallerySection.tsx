import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const GALLERY_ITEMS = [
  {
    keyEs: "Quirófanos",
    keyEn: "Operating suites",
    col: "lg:col-span-2",
    height: "min-h-[380px]",
    bg: "linear-gradient(145deg, #0c1a22 0%, #2B4F57 55%, #0a1318 100%)",
    pattern: "reticle",
  },
  {
    keyEs: "Recuperación",
    keyEn: "Recovery",
    col: "",
    height: "min-h-[220px]",
    bg: "linear-gradient(155deg, #111418 0%, #1a2228 100%)",
    pattern: "dots",
  },
  {
    keyEs: "Áreas médicas",
    keyEn: "Clinical areas",
    col: "",
    height: "min-h-[220px]",
    bg: "linear-gradient(150deg, #0a1318 0%, #111c22 100%)",
    pattern: "grid",
  },
  {
    keyEs: "Zona de descanso",
    keyEn: "Rest area",
    col: "row-span-2",
    height: "min-h-[440px]",
    bg: "linear-gradient(170deg, #0d1014 0%, #15191D 100%)",
    pattern: "lines",
  },
  {
    keyEs: "Esterilización",
    keyEn: "Sterilization",
    col: "",
    height: "min-h-[220px]",
    bg: "linear-gradient(145deg, #0a0e11 0%, #111820 100%)",
    pattern: "cross",
  },
  {
    keyEs: "Recepción",
    keyEn: "Reception",
    col: "",
    height: "min-h-[220px]",
    bg: "linear-gradient(150deg, rgba(148,98,81,0.18), #111418)",
    pattern: "radial",
  },
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
      {type === "lines" && Array.from({ length: 14 }).map((_, i) => (
        <line key={i} x1="0" y1={i*24} x2="400" y2={i*24} stroke="white" strokeWidth="0.5" />
      ))}
      {type === "cross" && (<>
        <line x1="0" y1="150" x2="400" y2="150" stroke="white" strokeWidth="0.75" />
        <line x1="200" y1="0" x2="200" y2="300" stroke="white" strokeWidth="0.75" />
        <rect x="140" y="90" width="120" height="120" fill="none" stroke="white" strokeWidth="0.75" />
      </>)}
      {type === "radial" && Array.from({ length: 16 }).map((_, i) => {
        const a = (i * 22.5 * Math.PI) / 180;
        return <line key={i} x1="200" y1="150" x2={200 + 220 * Math.cos(a)} y2={150 + 220 * Math.sin(a)} stroke="white" strokeWidth="0.5" />;
      })}
    </svg>
  );
}

export function GallerySection() {
  const { language } = useLanguage();

  return (
    <section className="relative overflow-hidden" style={{ background: "var(--op-surface)", borderTop: "1px solid var(--op-border)", borderBottom: "1px solid var(--op-border)" }}>
      <div className="scene-glow-dark" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-32 md:py-48">

        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="t-eyebrow mb-5 inline-flex">{language === "es" ? "Instalaciones" : "Facilities"}</span>
          <h2 className="t-display mt-5 mx-auto" style={{ maxWidth: 640 }}>
            {language === "es" ? "Arquitectura médica premium." : "Premium medical architecture."}
          </h2>
          <p className="t-lead mt-5 mx-auto" style={{ maxWidth: 500 }}>
            {language === "es"
              ? "Espacios diseñados para esterilidad, calma y precisión — sin el cliché del hospital tradicional."
              : "Spaces designed for sterility, calm, and precision — without the traditional hospital cliché."}
          </p>
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`gallery-card ${item.col} ${item.height}`}
            >
              <div className="gallery-card-inner absolute inset-0" style={{ background: item.bg }} />
              <PatternSvg type={item.pattern} />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(43,122,140,0.08) 0%, transparent 65%)" }} />
              <div className="gallery-card-label">
                <p className="text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: "var(--op-amber-light)" }}>
                  {language === "es" ? item.keyEs : item.keyEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <Link href="/infraestructura">
            <span className="btn btn-ghost flex items-center gap-2">
              {language === "es" ? "Ver todas las instalaciones" : "See all facilities"}
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
