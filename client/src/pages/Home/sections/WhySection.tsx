import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { Star, Package, Shield, Zap, Users } from "lucide-react";

const WHY_CARDS = [
  {
    Icon: Star,
    titleEs: "Prestigio inmediato",
    titleEn: "Immediate prestige",
    bodyEs:
      "Recibe a tus pacientes en una infraestructura alineada con el nivel de tu práctica. El entorno comunica seriedad antes de decir una sola palabra.",
    bodyEn:
      "Welcome your patients to infrastructure aligned with the level of your practice. The environment signals seriousness before a single word is said.",
  },
  {
    Icon: Package,
    titleEs: "Infraestructura lista",
    titleEn: "Ready infrastructure",
    bodyEs:
      "Quirófanos equipados, recuperación y soporte disponibles sin inversión inicial. Llega y opera.",
    bodyEn:
      "Equipped ORs, recovery, and support available with no upfront investment. Arrive and operate.",
  },
  {
    Icon: Shield,
    titleEs: "Experiencia premium",
    titleEn: "Premium experience",
    bodyEs:
      "La percepción del entorno eleva la confianza y el valor percibido de tu práctica. Instalaciones que tus pacientes recordarán.",
    bodyEn:
      "The environment elevates confidence and the perceived value of your practice. Facilities your patients will remember.",
  },
  {
    Icon: Zap,
    titleEs: "Flexibilidad operativa",
    titleEn: "Operational flexibility",
    bodyEs:
      "Opera por jornada, procedimiento o agenda recurrente. Escala tu práctica a tu ritmo sin compromisos fijos.",
    bodyEn:
      "Operate by session, procedure, or recurring schedule. Scale your practice at your own pace.",
  },
  {
    Icon: Users,
    titleEs: "Soporte especializado",
    titleEn: "Specialized support",
    bodyEs:
      "Equipo humano y protocolos diseñados para reducir fricción. Coordinación, enfermería y técnicos alineados a tu liderazgo.",
    bodyEn:
      "Human team and protocols designed to reduce friction. Coordination, nursing, and technicians aligned to your leadership.",
  },
];

export function WhySection() {
  const { language } = useLanguage();

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "var(--op-surface)",
        borderTop: "1px solid var(--op-border)",
        borderBottom: "1px solid var(--op-border)",
      }}
    >
      <div className="scene-glow-dark" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-32 md:py-48">
        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center  mb-20 md:mb-24"
        >
          <span className="t-eyebrow mb-5 inline-flex">
            {language === "es" ? "Por qué Ópera" : "Why Ópera"}
          </span>
          <h2 className="t-display  text-primary mt-5 mx-auto">
            {language === "es"
              ? "Infraestructura pensada para tu práctica."
              : "Infrastructure built for your practice."}
          </h2>
          <p className="t-lead mt-5 mx-auto">
            {language === "es"
              ? "No inviertas en construcción. Opera en un entorno ya diseñado para resultados predecibles."
              : "Don't invest in construction. Operate in an environment already designed for predictable results."}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {WHY_CARDS.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="card-glass group p-7 flex flex-col gap-5"
            >
              <div className="flex items-start gap-4">
                <div className="icon-well group-hover:bg-[var(--op-amber)] group-hover:border-[color:var(--op-amber-mid)] group-hover:text-white transition-all duration-400">
                  <card.Icon className="h-5 w-5" aria-hidden />
                </div>

                <div className="flex-1">
                  <h3 className="font-display font-semibold text-[1rem] leading-snug tracking-tight mb-2.5 text-primary">
                    {language === "es" ? card.titleEs : card.titleEn}
                  </h3>
                </div>
              </div>

              <div className="flex-1">
                <p className="t-body text-[13.5px]">
                  {language === "es" ? card.bodyEs : card.bodyEn}
                </p>
              </div>

              <div
                className="pt-4"
                style={{ borderTop: "1px solid var(--op-border)" }}
              >
                <div
                  className="h-px w-0 rounded-full transition-all duration-500 group-hover:w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--op-amber), var(--op-warm))",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
