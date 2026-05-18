import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { Link } from "wouter";
import { whatsappHref } from "@/lib/site";
import { CalendarDays, MessageCircle, ChevronDown } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TRUST_ICONS = [
  { icon: "🛡️", key: "trust1" },
  { icon: "🎯", key: "trust2" },
  { icon: "⚡", key: "trust3" },
] as const;

export function HeroSection() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  const whatsappMsg =
    language === "es"
      ? "Hola, me gustaría agendar una visita a Ópera Surgical Center."
      : "Hello, I'd like to book a tour at Ópera Surgical Center.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!mediaRef.current) return;
      gsap.to(mediaRef.current, {
        yPercent: -12,
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

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #021018 0%, #004875 45%, #021320 100%)" }}
    >
      {/* Background media - abstract surgical imagery */}
      <div
        ref={mediaRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: "scale(1.1)" }}
      >
        {/* Cinematic gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 70% 50%, rgba(0,72,117,0.6) 0%, transparent 65%),
              radial-gradient(ellipse 50% 80% at 0% 100%, rgba(0,30,50,0.85) 0%, transparent 60%),
              radial-gradient(ellipse 100% 40% at 50% 0%, rgba(0,0,0,0.5) 0%, transparent 70%)
            `,
          }}
        />
        {/* Geometric accents */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="1100" cy="250" r="360" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="1100" cy="250" r="280" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="1100" cy="250" r="200" fill="none" stroke="white" strokeWidth="0.25" />
          <line x1="0" y1="450" x2="1440" y2="450" stroke="white" strokeWidth="0.5" />
          <line x1="720" y1="0" x2="720" y2="900" stroke="white" strokeWidth="0.5" />
        </svg>
        {/* Amber glow */}
        <div
          className="absolute"
          style={{
            top: "30%",
            right: "15%",
            width: "480px",
            height: "480px",
            background: "radial-gradient(circle, rgba(174,147,56,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div className="hero-or-grain absolute inset-0" />
      </div>

      {/* Amber horizontal line */}
      <div className="absolute bottom-0 left-0 right-0 amber-line" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-5 md:px-8 lg:px-12 py-28 md:py-36">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="opera-eyebrow">{t.home.hero.eyebrow}</span>
            <div className="h-px w-12 bg-opera-amber/40" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-black text-opera-ivory leading-[1.04] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)" }}
          >
            {t.home.hero.headline}{" "}
            <span className="gradient-text-opera italic">{t.home.hero.headline2}</span>
          </motion.h1>

          {/* Lead */}
          <motion.p
            variants={itemVariants}
            className="opera-lead mt-6 max-w-2xl"
          >
            {t.home.hero.sub}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-3"
          >
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
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-4"
          >
            {TRUST_ICONS.map(({ icon, key }) => (
              <div
                key={key}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
              >
                <span className="text-base">{icon}</span>
                <span className="text-xs font-medium text-opera-ivory/75">
                  {t.home.hero[key as keyof typeof t.home.hero] as string}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Side metric cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4"
        >
          {[
            { metric: "98%", label: language === "es" ? "Satisfacción" : "Satisfaction" },
            { metric: "5+", label: language === "es" ? "Especialidades" : "Specialties" },
            { metric: "ISO", label: language === "es" ? "Protocolos" : "Protocols" },
          ].map(({ metric, label }) => (
            <div key={metric} className="opera-glass-card-dark text-center min-w-[96px]">
              <p className="font-heading font-black text-2xl text-opera-amber">{metric}</p>
              <p className="text-[11px] text-opera-ivory/50 font-medium uppercase tracking-wide mt-0.5">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="scene-number">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-opera-amber/50" aria-hidden />
        </motion.div>
      </motion.div>
    </section>
  );
}
