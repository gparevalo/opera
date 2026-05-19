import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { Link } from "wouter";
import { whatsappHref } from "@/lib/site";
import { ChevronDown, Calendar, Activity, Shield, Clock } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

function AmbientBlob({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        filter: "blur(80px)",
        animation: "blob-drift 14s ease-in-out infinite",
        ...style,
      }}
    />
  );
}

function GeometricOverlay() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <circle cx="1080" cy="380" r="340" fill="none" stroke="rgba(95,131,144,0.05)" strokeWidth="1" />
      <circle cx="1080" cy="380" r="210" fill="none" stroke="rgba(95,131,144,0.04)" strokeWidth="1" />
      <circle cx="1080" cy="380" r="100" fill="none" stroke="rgba(95,131,144,0.07)" strokeWidth="1" />
      <line x1="1080" y1="20" x2="1080" y2="260" stroke="rgba(95,131,144,0.04)" strokeWidth="0.5" />
      <line x1="1080" y1="490" x2="1080" y2="760" stroke="rgba(95,131,144,0.04)" strokeWidth="0.5" />
      <line x1="710" y1="380" x2="960" y2="380" stroke="rgba(95,131,144,0.04)" strokeWidth="0.5" />
      <line x1="1200" y1="380" x2="1420" y2="380" stroke="rgba(95,131,144,0.04)" strokeWidth="0.5" />
      <path d="M 48 60 L 48 120 L 100 120" fill="none" stroke="rgba(95,131,144,0.1)" strokeWidth="1" />
      <path d="M 1392 840 L 1392 780 L 1340 780" fill="none" stroke="rgba(95,131,144,0.1)" strokeWidth="1" />
    </svg>
  );
}

export function HeroSection() {
  const { language } = useLanguage();
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!bgRef.current || !sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: -8,
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
  const itemVisible = {
    hidden: { y: 20 },
    show: { y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
  };
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
      {/* Parallax background */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform" style={{ transform: "scale(1.06)" }}>
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse 75% 65% at 72% 50%, rgba(43,79,87,0.28) 0%, transparent 60%),
            radial-gradient(ellipse 55% 65% at 100% 0%, rgba(95,131,144,0.08) 0%, transparent 55%),
            radial-gradient(ellipse 65% 50% at 0% 100%, rgba(15,17,21,0.95) 0%, transparent 60%),
            linear-gradient(160deg, #0F1115 0%, #111418 40%, #0d1218 100%)
          `
        }} />
        {/* Ambient blobs */}
        <AmbientBlob style={{ width: 500, height: 500, top: "5%", right: "8%", background: "rgba(43,79,87,0.18)" }} />
        <AmbientBlob style={{ width: 300, height: 300, top: "55%", right: "30%", background: "rgba(148,98,81,0.08)", animationDelay: "5s" }} />
        <div className="grain-overlay" />
      </div>

      <GeometricOverlay />

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 amber-line" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-5 md:px-8 xl:px-12 py-32 md:py-44">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-8 items-center">

          {/* Left — editorial text */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-[820px]">

            <motion.div variants={itemVisible} className="mb-8">
              <span className="t-eyebrow">
                {language === "es" ? "Centro quirúrgico premium · Quito, Ecuador" : "Premium surgical center · Quito, Ecuador"}
              </span>
            </motion.div>

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

            <motion.p variants={itemVisible} className="t-lead mt-8 max-w-[600px]">
              {language === "es"
                ? "Transforma la experiencia de tus pacientes con instalaciones premium, soporte especializado y una operación quirúrgica sin fricción."
                : "Transform your patients' experience with premium facilities, specialized support, and a frictionless surgical operation."}
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              <Link href="/contacto">
                <span className="btn btn-amber btn-lg flex items-center gap-2.5">
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

            <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-7">
              {[
                { label: language === "es" ? "Quirófanos premium" : "Premium ORs" },
                { label: language === "es" ? "Soporte 360°" : "360° support" },
                { label: language === "es" ? "Coordinación dedicada" : "Dedicated coordination" },
              ].map(({ label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="amber-dot" />
                  <span className="text-[13px] font-medium" style={{ color: "rgba(206,207,207,0.5)" }}>{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — floating bento dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hidden xl:flex flex-col gap-3 w-[280px] shrink-0"
          >
            {/* Stat card 1 */}
            <div className="bento-card p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-well" style={{ width: 36, height: 36, borderRadius: "0.75rem" }}>
                  <Activity className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--op-mist)" }}>
                  {language === "es" ? "Especialidades" : "Specialties"}
                </span>
              </div>
              <p className="font-display font-bold text-4xl tracking-tight" style={{ color: "var(--op-white)" }}>5+</p>
              <p className="text-xs mt-1" style={{ color: "rgba(206,207,207,0.45)" }}>
                {language === "es" ? "Áreas cubiertas" : "Areas covered"}
              </p>
            </div>

            {/* Stat card 2 — warm copper accent */}
            <div className="bento-card p-5" style={{ borderColor: "rgba(148,98,81,0.18)", background: "linear-gradient(145deg, rgba(148,98,81,0.06) 0%, rgba(255,255,255,0.02) 100%)" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-well" style={{ width: 36, height: 36, borderRadius: "0.75rem", borderColor: "rgba(148,98,81,0.2)", background: "rgba(148,98,81,0.08)", color: "var(--op-warm)" }}>
                  <Clock className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--op-mist)" }}>
                  {language === "es" ? "Respuesta" : "Response"}
                </span>
              </div>
              <p className="font-display font-bold text-4xl tracking-tight" style={{ color: "var(--op-white)" }}>≤24h</p>
              <p className="text-xs mt-1" style={{ color: "rgba(206,207,207,0.45)" }}>
                {language === "es" ? "Coordinación garantizada" : "Guaranteed coordination"}
              </p>
            </div>

            {/* Stat card 3 */}
            <div className="bento-card p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="icon-well" style={{ width: 36, height: 36, borderRadius: "0.75rem" }}>
                  <Shield className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--op-mist)" }}>
                  {language === "es" ? "Soporte" : "Support"}
                </span>
              </div>
              <p className="font-display font-bold text-4xl tracking-tight" style={{ color: "var(--op-white)" }}>360°</p>
              <p className="text-xs mt-1" style={{ color: "rgba(206,207,207,0.45)" }}>
                {language === "es" ? "Perioperatorio completo" : "Full perioperative"}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
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
