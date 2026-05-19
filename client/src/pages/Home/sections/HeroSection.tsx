import PremiumButtonRef from "@/components/site/PremiumButtonRef";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";
import { Activity, Calendar, Clock, Shield } from "lucide-react";
import { useRef } from "react";
import { Link } from "wouter";

function AtmosphericGlow() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden
    >
      {/* Primary teal glow — upper right */}
      <div
        className="absolute"
        style={{
          width: 800,
          height: 800,
          top: "-20%",
          right: "-10%",
          background:
            "radial-gradient(circle, rgba(43,122,140,0.09) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      {/* Warm copper glow — lower left */}
      <div
        className="absolute"
        style={{
          width: 500,
          height: 500,
          bottom: "-10%",
          left: "-5%",
          background:
            "radial-gradient(circle, rgba(148,98,81,0.06) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />
      {/* Subtle teal mid */}
      <div
        className="absolute"
        style={{
          width: 400,
          height: 400,
          top: "40%",
          left: "30%",
          background:
            "radial-gradient(circle, rgba(43,122,140,0.04) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}

export function HeroSection() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        delay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  const whatsappMsg =
    language === "es"
      ? "Hola, quisiera solicitar un recorrido privado por Ópera Surgical Center."
      : "Hello, I'd like to request a private tour at Ópera Surgical Center.";

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/clinica/operahero4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* White glow / diffusion */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div
          className="
        absolute
        left-0
        top-0
        h-full
        w-2/3
        bg-gradient-to-r
        from-[#f2f6f9]
        via-[#f2f6f9]/80
        to-transparent
        blur-7xl
      "
        />
      </div>

      {/* Main content — centered editorial */}
      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-5 md:px-8 xl:px-12 pt-32 pb-20">
        <div className="flex flex-col items-start text-left max-w-5xl">
          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="t-eyebrow">
              {language === "es"
                ? "Centro quirúrgico · premium"
                : "Premium surgical · center"}
            </span>
          </motion.div>

          {/* Giant editorial headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="t-display-xl text-primary  mb-7"
            style={{ maxWidth: "820px" }}
          >
            {language === "es" ? (
              <>
                Infraestructura quirúrgica
                <br />
                <span className=" text-[#ae9338]">diseñada para</span>
                <br />
                especialistas.
              </>
            ) : (
              <>
                Surgical infrastructure
                <br />
                <span className="gradient-text-amber">designed for</span>
                <br />
                specialists.
              </>
            )}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="t-lead max-w-[600px] mb-10"
          >
            {language === "es"
              ? "Opera en un entorno alineado con tu nivel. Quirófanos listos, soporte 360° y coordinación sin fricción — sin inversión inicial."
              : "Operate in an environment aligned with your level. Ready ORs, 360° support, and frictionless coordination — no upfront investment."}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Link href="/contacto">
              <span className="btn btn-amber btn-lg flex items-center gap-2.5">
                <Calendar className="h-5 w-5" />
                {language === "es"
                  ? "Solicitar recorrido privado"
                  : "Request private tour"}
              </span>
            </Link>

            <PremiumButtonRef href="/infraestructura">
              {language === "es" ? "Ver instalaciones" : "View facilities"}
            </PremiumButtonRef>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6"
          >
            {[
              language === "es"
                ? "Sin inversión inicial"
                : "No upfront investment",
              language === "es"
                ? "Soporte perioperatorio 360°"
                : "360° perioperative support",
              language === "es"
                ? "Coordinación dedicada"
                : "Dedicated coordination",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="amber-dot" />
                <span
                  className="text-[13px] font-medium"
                  style={{ color: "var(--op-fog)" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

       
      </div>

      {/* Bottom fade into next section */}
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
