import {
  OperaButtonAnchor,
  OperaButtonLink,
} from "@/components/site/OperaButton";
import { useLanguage } from "@/i18n";
import { whatsappHref } from "@/lib/site";
import { motion } from "framer-motion";
import { ArrowRight, Building2, CalendarDays, MessageSquare } from "lucide-react";
import { Link } from "wouter";

/** Cinematic-grade render; falls back to source OR if missing */
const HERO_IMAGE = "/images/opera-hero-cinematic.png";
const HERO_FALLBACK = "/images/opera1.png";

export function HeroSection() {
  const { t, language } = useLanguage();
  const advisorMsg =
    language === "es"
      ? "Hola, soy especialista y quiero hablar con un asesor de Ópera Surgical Center."
      : "Hello, I am a specialist and would like to speak with an advisor at Ópera Surgical Center.";

  return (
    <section className="hero-or-scene relative min-h-[94vh] overflow-hidden bg-[#1E1E1E]">
      {/* Cinematic background stack */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden
      >
        <img
          src={HERO_IMAGE}
          alt=""
          className="hero-or-media absolute inset-0 h-full w-full object-cover object-[center_42%]"
          fetchPriority="high"
          decoding="async"
          onError={(e) => {
            const img = e.currentTarget;
            if (img.src.includes("opera1")) return;
            img.src = HERO_FALLBACK;
          }}
        />

        <motion.div
          className="hero-or-bloom pointer-events-none absolute inset-0"
          animate={{ opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero-or-volumetric pointer-events-none absolute inset-0"
          animate={{ opacity: [0.7, 0.95, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 40% 25% at 50% 8%, rgba(174,147,56,0.22) 0%, transparent 70%)",
          }}
          animate={{ opacity: [0.5, 0.75, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 30% 20% at 18% 55%, rgba(0,72,117,0.35) 0%, transparent 65%)",
          }}
          animate={{ opacity: [0.6, 0.85, 0.6] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="hero-or-amber-rim pointer-events-none absolute inset-0"
          animate={{ opacity: [0.65, 0.9, 0.65] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="hero-or-cool-fill pointer-events-none absolute inset-0" />
        <motion.div
          className="hero-or-depth pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
        <div className="hero-or-vignette pointer-events-none absolute inset-0" />
        <div className="hero-or-grain pointer-events-none absolute inset-0" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative mx-auto flex min-h-[94vh] max-w-6xl flex-col justify-end px-5 pb-28 pt-36 lg:px-8 lg:pb-32 lg:pt-44"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-opera-amber/30 bg-opera-amber/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-opera-ivory backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-opera-amber shadow-[0_0_8px_rgba(174,147,56,0.8)]" />
          {t.home.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.42 }}
          className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[1.06] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] md:text-5xl lg:text-[3.35rem]"
        >
          {t.home.hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.5 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-opera-ivory/80 md:text-xl"
        >
          {t.home.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.58 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        >
          <OperaButtonLink href="/contacto" variant="secondary" className="w-full sm:w-auto">
            <CalendarDays className="h-4 w-4" aria-hidden />
            {t.nav.visit}
          </OperaButtonLink>
          <OperaButtonAnchor
            href={whatsappHref(advisorMsg)}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            className="w-full sm:w-auto"
          >
            <MessageSquare className="h-4 w-4" aria-hidden />
            {t.nav.advisor}
          </OperaButtonAnchor>
          <Link href="/infraestructura">
            <span className="opera-btn opera-btn-ghost w-full sm:w-auto">
              <Building2 className="h-4 w-4" aria-hidden />
              {t.nav.installations}
              <ArrowRight className="h-4 w-4 opacity-70" aria-hidden />
            </span>
          </Link>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.72 }}
          className="mt-14 flex flex-wrap gap-x-10 gap-y-3 border-t border-opera-ivory/15 pt-8 text-sm text-opera-warm/70"
        >
          {(
            [
              t.home.hero.trust1,
              t.home.hero.trust2,
              t.home.hero.trust3,
            ] as const
          ).map((label) => (
            <li key={label} className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-opera-amber shadow-[0_0_6px_rgba(174,147,56,0.6)]" />
              {label}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
