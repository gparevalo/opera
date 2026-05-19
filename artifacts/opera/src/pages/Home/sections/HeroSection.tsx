import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { Link } from "wouter";
import { whatsappHref } from "@/lib/site";
import { ChevronDown, Calendar } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

// ── Floating amber particle ───────────────────────────────────────────────────
function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full will-change-transform"
      style={{
        width: "2px",
        height: "2px",
        background: "rgba(201,168,76,0.7)",
        ...style,
      }}
    />
  );
}

// ── Geometric grid overlay ────────────────────────────────────────────────────
function GeometricOverlay() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {/* Main reticle */}
      <circle cx="1060" cy="360" r="280" fill="none" stroke="rgba(201,168,76,0.06)" strokeWidth="1" />
      <circle cx="1060" cy="360" r="180" fill="none" stroke="rgba(201,168,76,0.05)" strokeWidth="1" />
      <circle cx="1060" cy="360" r="80" fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="1" />
      {/* Crosshair */}
      <line x1="1060" y1="50" x2="1060" y2="310" stroke="rgba(201,168,76,0.06)" strokeWidth="0.5" />
      <line x1="1060" y1="410" x2="1060" y2="700" stroke="rgba(201,168,76,0.06)" strokeWidth="0.5" />
      <line x1="750" y1="360" x2="1010" y2="360" stroke="rgba(201,168,76,0.06)" strokeWidth="0.5" />
      <line x1="1110" y1="360" x2="1380" y2="360" stroke="rgba(201,168,76,0.06)" strokeWidth="0.5" />
      {/* Corner bracket top-left */}
      <path d="M 40 50 L 40 100 L 80 100" fill="none" stroke="rgba(201,168,76,0.12)" strokeWidth="1" />
      {/* Corner bracket bottom-right */}
      <path d="M 1400 850 L 1400 800 L 1360 800" fill="none" stroke="rgba(201,168,76,0.12)" strokeWidth="1" />
      {/* Horizontal rule */}
      <line x1="0" y1="840" x2="1440" y2="840" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
      {/* Fine grid dots */}
      {[0, 1, 2, 3, 4, 5].map((r) =>
        [0, 1, 2, 3, 4, 5, 6, 7].map((c) => (
          <circle key={`d${r}-${c}`}
            cx={c * 120 + 80} cy={r * 140 + 60}
            r="1" fill="rgba(201,168,76,0.06)"
          />
        ))
      )}
    </svg>
  );
}

export function HeroSection() {
  const { t, language } = useLanguage();
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!bgRef.current || !sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const whatsappMsg =
    language === "es"
      ? "Hola, quisiera solicitar un recorrido privado por Ópera Surgical Center."
      : "Hello, I'd like to request a private tour at Ópera Surgical Center.";

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  };
  // H1 and lead text: animate transform only — opacity stays 1 so LCP is immediate
  const itemVisible = {
    hidden: { y: 20 },
    show: { y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
  };
  // Secondary elements (CTAs, trust row): full fade+slide
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--op-ink)" }}
    >
      {/* ── Background layers ── */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform" style={{ transform: "scale(1.08)" }}>
        {/* Deep radial gradients */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse 80% 70% at 68% 50%, rgba(0,72,117,0.35) 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 100% 0%, rgba(201,168,76,0.07) 0%, transparent 55%),
            radial-gradient(ellipse 70% 50% at 0% 100%, rgba(7,9,12,0.9) 0%, transparent 60%),
            linear-gradient(155deg, #07090c 0%, #0a1019 40%, #071520 100%)
          `
        }} />
        {/* Floating particles */}
        <Particle style={{ left: "22%", top: "65%", animation: "float-up 8s ease-in-out 0s infinite" }} />
        <Particle style={{ left: "35%", top: "75%", animation: "float-up 11s ease-in-out 1.5s infinite" }} />
        <Particle style={{ left: "55%", top: "80%", animation: "float-up 9.5s ease-in-out 3s infinite" }} />
        <Particle style={{ left: "70%", top: "70%", animation: "float-up 12s ease-in-out 0.8s infinite" }} />
        <Particle style={{ left: "82%", top: "85%", animation: "float-up 10s ease-in-out 2.2s infinite" }} />
        {/* Grain */}
        <div className="grain-overlay" />
      </div>

      {/* Geometric SVG overlay */}
      <GeometricOverlay />

      {/* Bottom amber line */}
      <div className="absolute bottom-0 left-0 right-0 amber-line" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-[1380px] w-full px-5 md:px-8 xl:px-12 py-32 md:py-40">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-[780px]">

          {/* Eyebrow */}
          <motion.div variants={itemVisible} className="mb-8">
            <span className="t-eyebrow">
              {language === "es" ? "Centro quirúrgico premium · Quito, Ecuador" : "Premium surgical center · Quito, Ecuador"}
            </span>
          </motion.div>

          {/* Main headline — uses itemVisible so LCP element is never opacity:0 */}
          <motion.h1 variants={itemVisible} className="t-display-xl">
            {language === "es" ? (
              <>
                Opera en una<br />
                infraestructura<br />
                <span className="gradient-text-amber">quirúrgica diseñada</span><br />
                para especialistas.
              </>
            ) : (
              <>
                Operate in a<br />
                surgical infrastructure<br />
                <span className="gradient-text-amber">designed for</span><br />
                specialists.
              </>
            )}
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={itemVisible} className="t-lead mt-7 max-w-[640px]">
            {language === "es"
              ? "Transforma la experiencia de tus pacientes con instalaciones premium, soporte especializado y una operación quirúrgica sin fricción."
              : "Transform your patients' experience with premium facilities, specialized support, and a frictionless surgical operation."}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Link href="/contacto">
              <span className="btn btn-amber btn-lg flex items-center gap-2">
                <Calendar className="h-5 w-5" aria-hidden />
                {language === "es" ? "Solicitar recorrido privado" : "Request private tour"}
              </span>
            </Link>
            <Link href="/infraestructura">
              <span className="btn btn-ghost btn-lg">
                {language === "es" ? "Explorar instalaciones" : "Explore facilities"}
              </span>
            </Link>
          </motion.div>

          {/* Trust row */}
          <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-6">
            {[
              { label: language === "es" ? "Quirófanos premium" : "Premium ORs" },
              { label: language === "es" ? "Soporte 360°" : "360° support" },
              { label: language === "es" ? "Coordinación dedicada" : "Dedicated coordination" },
            ].map(({ label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div className="amber-dot" />
                <span className="text-[13px] font-medium" style={{ color: "rgba(196,200,204,0.6)" }}>{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Floating metric panel (right) ── */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3"
        >
          {[
            { value: "5+", label: language === "es" ? "Especialidades" : "Specialties" },
            { value: "≤24h", label: language === "es" ? "Respuesta" : "Response" },
            { value: "360°", label: language === "es" ? "Soporte" : "Support" },
          ].map(({ value, label }) => (
            <div key={value} className="card-glass px-5 py-4 text-center" style={{ minWidth: "120px" }}>
              <p className="font-display font-black text-2xl" style={{ color: "var(--op-amber)" }}>{value}</p>
              <p className="t-label mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="t-label" style={{ fontSize: "9px", letterSpacing: "0.4em" }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" style={{ color: "var(--op-amber)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
