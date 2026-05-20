import PremiumButtonRef from "@/components/site/PremiumButtonRef";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";
import { Activity, Clock, Hospital, Shield } from "lucide-react";
import { useRef } from "react";
import { Link } from "wouter";

function AtmosphericGlow() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden
    >
      {/* Primary teal glow */}
      <div
        className="absolute"
        style={{
          width: 800,
          height: 800,
          top: "-20%",
          right: "-10%",
          background:
            "radial-gradient(circle, rgba(43,122,140,0.10) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      {/* Warm glow */}
      <div
        className="absolute"
        style={{
          width: 500,
          height: 500,
          bottom: "-10%",
          left: "-5%",
          background:
            "radial-gradient(circle, rgba(148,98,81,0.08) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />
    </div>
  );
}

export function HeroSection() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        h-[84vh]
        bg-white
        pt-20
        flex items-start
        justify-start
        mt-20
        mx-5
        md:mx-6
      "
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0 rounded-[2.5rem]"
        style={{
          backgroundImage: "url('/clinica/operahero8.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[1] rounded-[2rem]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.18), rgba(0,0,0,0.42))",
        }}
      />

      {/* Glow */}
      <AtmosphericGlow />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] px-5 md:px-8 xl:px-12   pb-32">
        {/* CENTER CONTENT */}
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-8"
          >
            <span className="t-eyebrow text-white/70">
              {language === "es"
                ? "Centro quirúrgico · premium"
                : "Premium surgical · center"}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              t-display-xl
              text-white
              mb-7
              max-w-[1100px]
            "
          >
            {language === "es" ? (
              <>
                Infraestructura quirúrgica{" "}
                <span className="text-primary">diseñada para</span>{" "}
                especialistas.
              </>
            ) : (
              <>
                Surgical infrastructure{" "}
                <span className="text-[#ae9338]">designed for</span>{" "}
                specialists.
              </>
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              t-lead
              max-w-[760px]
              text-white/80
              mb-10
            "
          >
            {language === "es"
              ? "Opera en un entorno alineado con tu nivel. Quirófanos listos, soporte 360° y coordinación sin fricción — sin inversión inicial."
              : "Operate in an environment aligned with your level. Ready ORs, 360° support, and frictionless coordination — no upfront investment."}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-center justify-center"
          >
            <Link href="/infraestructura">
              <span className="btn btn-blue btn-lg flex items-center gap-2.5 text-[#ae9338]">
                <Hospital className="h-5 w-5" />
                {language === "es" ? "Ver instalaciones" : "View facilities"}
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* FLOATING STATS */}
      <div className="hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            absolute
            bottom-10
            left-5
            md:left-8
            z-20
            flex
            flex-col
            sm:flex-row
            gap-4
          "
        >
          {[
            {
              icon: Activity,
              label: language === "es" ? "Especialidades" : "Specialties",
              value: "5+",
              sub: language === "es" ? "Áreas cubiertas" : "Areas covered",
            },
            {
              icon: Clock,
              label: language === "es" ? "Coordinación" : "Coordination",
              value: "≤24h",
              sub: language === "es" ? "Tiempo de respuesta" : "Response time",
              accent: true,
            },
            {
              icon: Shield,
              label: language === "es" ? "Soporte" : "Support",
              value: "360°",
              sub: language === "es" ? "Perioperatorio" : "Perioperative",
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.6 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
    group
    min-w-[190px]
    rounded-[1.6rem]
    border border-white/10
    bg-white/[0.08]
    backdrop-blur-2xl
    px-5 py-4
    transition-all duration-500
    hover:bg-white/[0.12]
    hover:border-white/20
    hover:-translate-y-1
  "
              style={{
                boxShadow:
                  "0 10px 40px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* top row */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="
        flex items-center justify-center
        rounded-full
        border border-white/10
        bg-white/[0.06]
      "
                  style={{
                    width: 38,
                    height: 38,
                  }}
                >
                  <stat.icon className="h-4 w-4 text-[#ae9338]" />
                </div>

                <span
                  className="
        text-[10px]
        font-semibold
        uppercase
        tracking-[0.18em]
        text-white/50
      "
                >
                  {stat.label}
                </span>
              </div>

              {/* big number */}
              <p
                className="
      font-display
      text-[2rem]
      leading-none
      tracking-tight
      text-white
    "
              >
                {stat.value}
              </p>

              {/* sub */}
              <p className="text-xs text-white/45 mt-2">{stat.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

  

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--op-canvas))",
        }}
      />
    </section>
  );
}
