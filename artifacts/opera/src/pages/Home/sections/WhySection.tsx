import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";

const WHY_CARDS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ),
    titleEs: "Prestigio inmediato",
    titleEn: "Immediate prestige",
    bodyEs: "Recibe a tus pacientes en una infraestructura alineada con el nivel de tu práctica médica. El entorno comunica seriedad antes de decir una sola palabra.",
    bodyEn: "Welcome your patients to infrastructure aligned with the level of your practice. The environment signals seriousness before a single word is said.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6M9 12h6M9 15h4" />
      </svg>
    ),
    titleEs: "Infraestructura lista",
    titleEn: "Ready infrastructure",
    bodyEs: "Quirófanos equipados, recuperación y soporte operativo disponibles sin inversión inicial. Llega y opera.",
    bodyEn: "Equipped ORs, recovery, and operational support available with no upfront investment. Arrive and operate.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    titleEs: "Experiencia premium",
    titleEn: "Premium experience",
    bodyEs: "La percepción del entorno eleva la confianza y el valor percibido de tu práctica. Instalaciones que tus pacientes recordarán.",
    bodyEn: "The environment elevates confidence and the perceived value of your practice. Facilities your patients will remember.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    titleEs: "Flexibilidad operativa",
    titleEn: "Operational flexibility",
    bodyEs: "Opera por jornada, procedimiento o agenda recurrente. Escala tu práctica a tu ritmo sin compromisos fijos.",
    bodyEn: "Operate by session, procedure, or recurring schedule. Scale your practice at your own pace with no fixed commitments.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    titleEs: "Soporte especializado",
    titleEn: "Specialized support",
    bodyEs: "Equipo humano y protocolos diseñados para reducir fricción. Coordinación, enfermería y técnicos alineados a tu liderazgo.",
    bodyEn: "Human team and protocols designed to reduce friction. Coordination, nursing, and technicians aligned to your leadership.",
  },
];

export function WhySection() {
  const { language } = useLanguage();

  return (
    <section className="relative s-ink overflow-hidden py-28 md:py-36">
      <div className="scene-glow-dark" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 md:px-8 xl:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <span className="t-eyebrow">
            {language === "es" ? "Por qué Ópera" : "Why Ópera"}
          </span>
          <h2 className="t-display mt-5">
            {language === "es"
              ? "Infraestructura pensada para tu práctica."
              : "Infrastructure built for your practice."}
          </h2>
          <p className="t-lead mt-5">
            {language === "es"
              ? "No inviertas en construcción. Opera en un entorno ya diseñado para resultados predecibles y una experiencia premium para tus pacientes."
              : "Don't invest in construction. Operate in an environment already designed for predictable results and a premium patient experience."}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {WHY_CARDS.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.75, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="card-glass group p-6 flex flex-col gap-4"
            >
              {/* Icon well */}
              <div className="icon-well group-hover:border-[color:var(--op-amber)] group-hover:bg-[var(--op-amber-dim)] transition-all duration-400">
                {card.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="t-headline" style={{ fontSize: "1rem", letterSpacing: "-0.02em" }}>
                  {language === "es" ? card.titleEs : card.titleEn}
                </h3>
                <p className="t-body mt-2 leading-relaxed text-[13px]">
                  {language === "es" ? card.bodyEs : card.bodyEn}
                </p>
              </div>

              {/* Hover indicator */}
              <div className="mt-auto pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-full"
                  style={{ background: "var(--op-amber)" }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
