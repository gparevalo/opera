import {
  OperaButtonAnchor,
  OperaButtonLink,
} from "@/components/site/OperaButton";
import { useLanguage } from "@/i18n";
import { whatsappHref } from "@/lib/site";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  MessageSquare,
} from "lucide-react";
import { Link } from "wouter";

/** Cinematic-grade render */
const HERO_IMAGE = "/images/opera-hero-cinematic.png";
const HERO_FALLBACK = "/images/opera1.png";

export function HeroSection() {
  const { t, language } = useLanguage();

  const advisorMsg =
    language === "es"
      ? "Hola, soy especialista y quiero hablar con un asesor de Ópera Surgical Center."
      : "Hello, I am a specialist and would like to speak with an advisor at Ópera Surgical Center.";

  return (
    <section className="relative min-h-[94vh] overflow-hidden bg-[#06131d]">
      {/* BACKGROUND */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden
      >
        {/* IMAGE */}
        <img
          src={HERO_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[72%_center] scale-[1.02]"
          fetchPriority="high"
          decoding="async"
          onError={(e) => {
            const img = e.currentTarget;

            if (img.src.includes("opera1")) return;

            img.src = HERO_FALLBACK;
          }}
        />

        {/* MAIN CINEMATIC OVERLAY */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: `
              linear-gradient(
                90deg,
                rgba(0,18,32,0.97) 0%,
                rgba(0,26,42,0.95) 18%,
                rgba(0,72,117,0.72) 42%,
                rgba(0,0,0,0.22) 72%,
                rgba(0,0,0,0.08) 100%
              )
            `,
          }}
        />

        {/* LEFT BLUE GLOW */}
        <motion.div
          className="absolute inset-0 z-[2]"
          animate={{ opacity: [0.6, 0.9, 0.6] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: `
              radial-gradient(
                circle at 18% 48%,
                rgba(0,72,117,0.30),
                transparent 42%
              )
            `,
          }}
        />

        {/* AMBER LIGHT */}
        <motion.div
          className="absolute inset-0 z-[2]"
          animate={{ opacity: [0.45, 0.7, 0.45] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: `
              radial-gradient(
                circle at 78% 35%,
                rgba(174,147,56,0.18),
                transparent 26%
              )
            `,
          }}
        />

        {/* TOP LIGHT */}
        <motion.div
          className="absolute inset-0 z-[2]"
          animate={{ opacity: [0.65, 1, 0.65] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: `
              radial-gradient(
                ellipse at top,
                rgba(255,255,255,0.10),
                transparent 60%
              )
            `,
          }}
        />

        {/* DEPTH */}
        <div
          className="absolute inset-0 z-[3]"
          style={{
            background: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,0.02),
                rgba(0,0,0,0.38)
              )
            `,
          }}
        />

        {/* VIGNETTE */}
        <div
          className="absolute inset-0 z-[4]"
          style={{
            background: `
              radial-gradient(
                ellipse at center,
                transparent 42%,
                rgba(0,0,0,0.50) 100%
              )
            `,
          }}
        />

        {/* GRAIN */}
        <div className="pointer-events-none absolute inset-0 z-[5] opacity-[0.08] mix-blend-soft-light">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "url('https://grainy-gradients.vercel.app/noise.svg')",
            }}
          />
        </div>
      </motion.div>

      {/* CONTENT */}
      <motion.div
        className="
          relative z-20 mx-auto flex min-h-[94vh] max-w-7xl
          flex-col justify-center
          px-6 py-28
          lg:px-10
        "
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.25,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {/* EYEBROW */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="
            inline-flex w-fit items-center gap-2
            rounded-full
            border border-[#ae9338]/30
            bg-white/[0.04]
            px-4 py-1.5
            backdrop-blur-xl
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#d6bb67] shadow-[0_0_12px_rgba(174,147,56,0.9)]" />

          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f5f2eb]/84">
            {t.home.hero.eyebrow}
          </span>
        </motion.div>

        {/* HEADLINE BLOCK */}
        <div className="mt-8 flex items-start gap-6">
          {/* GOLD LINE */}
          <div className="hidden lg:block">
            <div className="h-32 w-px bg-gradient-to-b from-[#ae9338] via-[#d6bb67] to-transparent shadow-[0_0_18px_rgba(174,147,56,0.45)]" />
          </div>

          <div>
            {/* SMALL TITLE */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="
                mb-4
                text-sm
                font-medium
                uppercase
                tracking-[0.32em]
                text-white/72
              "
            >
              {t.home.hero.headline}
            </motion.p>

            {/* BIG GOLD TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.48 }}
              className="
                max-w-5xl
                font-heading
                text-[3.6rem]
                font-[600]
                leading-[0.92]
                tracking-[-0.05em]
                text-[#d6bb67]
                lg:text-[6.4rem]
              "
              style={{
                textShadow: `
                  0 6px 40px rgba(0,0,0,0.42),
                  0 0 60px rgba(174,147,56,0.16)
                `,
              }}
            >
              {t.home.hero.headline2}
            </motion.h1>
          </div>
        </div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.58 }}
          className="
            mt-8
            max-w-2xl
            text-[1.02rem]
            leading-[1.9]
            text-[#f5f2eb]/78
            lg:text-[1.16rem]
          "
        >
          {t.home.hero.sub}
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.68 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
        >
          {/* PRIMARY */}
          <OperaButtonLink
            href="/contacto"
            variant="secondary"
            className="
              w-full sm:w-auto
              border border-[#ae9338]/40
              bg-[#004875]
              text-white
              backdrop-blur-xl
              shadow-[0_10px_40px_rgba(0,72,117,0.35)]
              transition-all duration-500
              hover:-translate-y-[2px]
              hover:bg-[#0b5f96]
              hover:shadow-[0_12px_60px_rgba(0,72,117,0.45)]
            "
          >
            <CalendarDays className="h-4 w-4" aria-hidden />
            {t.nav.visit}
          </OperaButtonLink>

          {/* GHOST */}
          <OperaButtonAnchor
            href={whatsappHref(advisorMsg)}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            className="
              w-full sm:w-auto
              border border-white/12
              bg-white/[0.04]
              text-white
              backdrop-blur-2xl
              shadow-[0_10px_40px_rgba(0,0,0,0.24)]
              transition-all duration-500
              hover:border-[#ae9338]/45
              hover:bg-white/[0.08]
              hover:-translate-y-[2px]
            "
          >
            <MessageSquare className="h-4 w-4" aria-hidden />
            {t.nav.advisor}
          </OperaButtonAnchor>

          {/* LINK */}
          <Link href="/infraestructura">
            <span
              className="
                inline-flex h-12 items-center justify-center gap-2
                rounded-xl
                px-6
                text-sm font-medium
                text-white/84
                transition-all duration-300
                hover:bg-white/[0.05]
                hover:text-white
              "
            >
              <Building2 className="h-4 w-4" aria-hidden />
              {t.nav.installations}
              <ArrowRight className="h-4 w-4 opacity-70" aria-hidden />
            </span>
          </Link>
        </motion.div>

        {/* TRUST BLOCKS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="
            mt-20
            grid
            gap-4
            border-t border-white/10
            pt-8
            sm:grid-cols-3
          "
        >
          {[
            {
              icon: CalendarDays,
              label: t.home.hero.trust1,
            },
            {
              icon: Building2,
              label: t.home.hero.trust2,
            },
            {
              icon: MessageSquare,
              label: t.home.hero.trust3,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
                  flex items-center gap-4
                  rounded-2xl
                  border border-white/8
                  bg-white/[0.03]
                  px-5 py-4
                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    flex h-11 w-11 items-center justify-center
                    rounded-full
                    border border-[#ae9338]/30
                    bg-[#ae9338]/10
                    text-[#d6bb67]
                    shadow-[0_0_24px_rgba(174,147,56,0.15)]
                  "
                >
                  <Icon className="h-5 w-5" />
                </div>

                <p className="text-sm leading-relaxed text-[#f5f2eb]/72">
                  {item.label}
                </p>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}