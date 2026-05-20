import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";

const FEATURES_ES = [
  {
    title: "Quirófano equipado",
    detail: "Tecnología e instrumental listo para tu especialidad.",
  },
  {
    title: "Área de recuperación",
    detail: "Camas, monitoring y equipo de enfermería dedicado.",
  },
  {
    title: "Esterilización",
    detail: "Protocolos rigurosos y validación pre y post procedimiento.",
  },
  {
    title: "Enfermería interna",
    detail: "Staff perioperatorio alineado a tu liderazgo médico.",
  },
  {
    title: "Soporte técnico",
    detail: "Mantenimiento de equipos y disponibilidad de respaldo.",
  },
  {
    title: "Recepción premium",
    detail: "Primera impresión alineada al nivel de tu práctica.",
  },
  {
    title: "Coordinación",
    detail: "Un solo punto de contacto para toda la jornada quirúrgica.",
  },
  {
    title: "Agenda programada",
    detail: "Bloques quirúrgicos predecibles, sin conflictos de horario.",
  },
  {
    title: "Parqueo reservado",
    detail: "Acceso directo para especialista y pacientes.",
  },
  {
    title: "Áreas médicas",
    detail: "Espacios de descanso y trabajo entre procedimientos.",
  },
];

const FEATURES_EN = [
  {
    title: "Equipped OR",
    detail: "Technology and instrumentation ready for your specialty.",
  },
  {
    title: "Recovery area",
    detail: "Beds, monitoring, and dedicated nursing staff.",
  },
  {
    title: "Sterilization",
    detail: "Rigorous protocols and pre/post-procedure validation.",
  },
  {
    title: "In-house nursing",
    detail: "Perioperative staff aligned to your medical leadership.",
  },
  {
    title: "Technical support",
    detail: "Equipment maintenance and backup availability.",
  },
  {
    title: "Premium reception",
    detail: "First impression aligned with the level of your practice.",
  },
  {
    title: "Coordination",
    detail: "Single point of contact for the entire surgical day.",
  },
  {
    title: "Scheduled agenda",
    detail: "Predictable surgical blocks, no schedule conflicts.",
  },
  {
    title: "Reserved parking",
    detail: "Direct access for specialist and patients.",
  },
  {
    title: "Medical areas",
    detail: "Rest and work spaces between procedures.",
  },
];

export function IncludesSection() {
  const { language } = useLanguage();
  const features = language === "es" ? FEATURES_ES : FEATURES_EN;

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
          className="text-center mb-16 md:mb-20"
        >
          <span className="t-eyebrow mb-5 inline-flex">
            {language === "es" ? "Qué incluye" : "What's included"}
          </span>
          <h2
            className="
              font-display
              text-5xl
              md:text-7xl
              leading-[0.95]
              tracking-tight
              text-primary mt-5 mx-auto"
            style={{ maxWidth: 640 }}
          >
            {language === "es"
              ? "Todo lo que necesitas. Nada que gestionar."
              : "Everything you need. Nothing to manage."}
          </h2>
          <p className="t-lead mt-5 mx-auto" style={{ maxWidth: 520 }}>
            {language === "es"
              ? "Cero fricciones. Cero sorpresas. Infraestructura completa para que el especialista se concentre en operar."
              : "Zero friction. Zero surprises. Complete infrastructure so you can focus on operating."}
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="feat-item group"
            >
              <div className="relative flex flex-col gap-2.5 w-full">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-[11px] font-bold transition-all duration-400 group-hover:bg-[var(--op-amber)] group-hover:text-white group-hover:border-[color:var(--op-amber-mid)]"
                  style={{
                    border: "1px solid var(--op-amber-line)",
                    background: "var(--op-amber-dim)",
                    color: "var(--op-amber)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <p
                    className="text-sm font-semibold leading-snug"
                    style={{ color: "var(--op-ink)" }}
                  >
                    {feat.title}
                  </p>
                  <p
                    className="text-[12.5px] leading-relaxed mt-1"
                    style={{ color: "var(--op-fog)" }}
                  >
                    {feat.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-16 pt-10 flex flex-wrap gap-12 justify-center"
          style={{ borderTop: "1px solid var(--op-border)" }}
        >
          {[
            {
              v: "10+",
              l:
                language === "es" ? "Servicios incluidos" : "Services included",
            },
            {
              v: "1",
              l: language === "es" ? "Punto de contacto" : "Contact point",
            },
            {
              v: "360°",
              l:
                language === "es"
                  ? "Soporte perioperatorio"
                  : "Perioperative support",
            },
          ].map(({ v, l }) => (
            <div key={l} className="text-center">
              <p
                className="font-display font-bold text-4xl leading-none"
                style={{ color: "var(--op-amber)" }}
              >
                {v}
              </p>
              <p className="t-label mt-2">{l}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
