import PremiumButtonRef from "@/components/site/PremiumButtonRef";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";

export function FinalCtaSection() {
  const { language } = useLanguage();

  const whatsappMsg =
    language === "es"
      ? "Hola, quisiera agendar un recorrido privado por Ópera Surgical Center."
      : "Hello, I'd like to book a private tour at Ópera Surgical Center.";

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "var(--op-surface)",
        borderTop: "1px solid var(--op-border)",
      }}
    >
      {/* Very subtle warm atmospheric glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background: `
          radial-gradient(ellipse 70% 60% at 50% 100%, rgba(43,122,140,0.06) 0%, transparent 65%),
          radial-gradient(ellipse 50% 50% at 80% 0%, rgba(148,98,81,0.04) 0%, transparent 55%)
        `,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-32 md:py-48">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="cta-panel-dark py-20 md:py-32 px-8 md:px-16 text-center"
        >
          {/* Architectural overlay on dark panel */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.025]"
            aria-hidden
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 1400 600"
              preserveAspectRatio="xMidYMid slice"
            >
              <circle
                cx="700"
                cy="300"
                r="420"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
              <circle
                cx="700"
                cy="300"
                r="260"
                fill="none"
                stroke="white"
                strokeWidth="0.75"
              />
              <circle
                cx="700"
                cy="300"
                r="130"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
              <line
                x1="0"
                y1="300"
                x2="1400"
                y2="300"
                stroke="white"
                strokeWidth="0.5"
              />
              <line
                x1="700"
                y1="0"
                x2="700"
                y2="600"
                stroke="white"
                strokeWidth="0.5"
              />
            </svg>
          </div>

          {/* Eyebrow */}
          <div className="relative flex justify-center mb-8">
            <span
              className="t-eyebrow"
              style={{
                background: "rgba(43,122,140,0.12)",
                borderColor: "rgba(43,122,140,0.25)",
                color: "rgba(90,175,192,0.9)",
              }}
            >
              {language === "es"
                ? "¿Listo para operar en Ópera?"
                : "Ready to operate at Ópera?"}
            </span>
          </div>

          {/* Giant headline */}
          <h2
            className="relative 
                font-display
                text-5xl
                md:text-5xl
                leading-[0.95]
                tracking-tight  leading-[0.97] tracking-tight mx-auto"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
              color: "#FFFFFF",
              maxWidth: "880px",
            }}
          >
            {language === "es" ? (
              <>
                Infraestructura quirúrgica lista. 
                <span className="text-secondary"> Todo preparado </span>
                para que solo te enfoques en operar.
              </>
            ) : (
              <>
                Don't build a clinic.
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(90,175,192,1) 0%, rgba(130,200,210,1) 45%, rgba(180,140,120,1) 80%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Operate in one already designed
                </span>
                <br />
                to grow with you.
              </>
            )}
          </h2>

          <p
            className="relative mt-8 mx-auto"
            style={{
              maxWidth: 520,
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "rgba(155,185,195,0.75)",
            }}
          >
            {language === "es"
              ? "Agenda una llamada o visita. Te mostramos el centro, los flujos y la coordinación — sin presión, con total transparencia."
              : "Book a call or visit. We'll show you the center, workflows, and coordination — no pressure, total transparency."}
          </p>

          {/* CTAs */}
          <div className="relative mt-12 flex flex-wrap items-center justify-center gap-4">
            <PremiumButtonRef href="/contacto">
              {language === "es" ? "Agendar recorrido" : "Book tour"}
            </PremiumButtonRef>
          </div>

          {/* Trust */}
          <div className="relative mt-12 flex flex-wrap justify-center gap-8">
            {[
              language === "es" ? "Sin compromisos" : "No commitments",
              language === "es" ? "Respuesta en 24h" : "24h response",
              language === "es" ? "Recorrido gratuito" : "Free tour",
            ].map((label) => (
              <div key={label} className="flex items-center gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "rgba(90,175,192,0.6)" }}
                />
                <span
                  className="text-[13px] font-medium"
                  style={{ color: "rgba(155,185,195,0.5)" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
