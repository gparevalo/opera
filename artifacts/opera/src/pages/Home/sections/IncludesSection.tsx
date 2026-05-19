import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";

const FEATURES_ES = [
  { icon: "⬡", title: "Quirófano equipado", detail: "Tecnología e instrumental listo para tu especialidad." },
  { icon: "⬡", title: "Área de recuperación", detail: "Camas, monitoring y equipo de enfermería dedicado." },
  { icon: "⬡", title: "Esterilización", detail: "Protocolos rigurosos y validación pre y post procedimiento." },
  { icon: "⬡", title: "Enfermería interna", detail: "Staff perioperatorio alineado a tu liderazgo médico." },
  { icon: "⬡", title: "Soporte técnico", detail: "Mantenimiento de equipos y disponibilidad de respaldo." },
  { icon: "⬡", title: "Recepción premium", detail: "Primera impresión alineada al nivel de tu práctica." },
  { icon: "⬡", title: "Coordinación", detail: "Un solo punto de contacto para toda la jornada quirúrgica." },
  { icon: "⬡", title: "Agenda programada", detail: "Bloques quirúrgicos predecibles, sin conflictos de horario." },
  { icon: "⬡", title: "Parqueo reservado", detail: "Acceso directo para especialista y pacientes." },
  { icon: "⬡", title: "Áreas médicas", detail: "Espacios de descanso y trabajo entre procedimientos." },
];

const FEATURES_EN = [
  { icon: "⬡", title: "Equipped OR", detail: "Technology and instrumentation ready for your specialty." },
  { icon: "⬡", title: "Recovery area", detail: "Beds, monitoring, and dedicated nursing staff." },
  { icon: "⬡", title: "Sterilization", detail: "Rigorous protocols and pre/post-procedure validation." },
  { icon: "⬡", title: "In-house nursing", detail: "Perioperative staff aligned to your medical leadership." },
  { icon: "⬡", title: "Technical support", detail: "Equipment maintenance and backup availability." },
  { icon: "⬡", title: "Premium reception", detail: "First impression aligned with the level of your practice." },
  { icon: "⬡", title: "Coordination", detail: "Single point of contact for the entire surgical day." },
  { icon: "⬡", title: "Scheduled agenda", detail: "Predictable surgical blocks, no schedule conflicts." },
  { icon: "⬡", title: "Reserved parking", detail: "Direct access for specialist and patients." },
  { icon: "⬡", title: "Medical areas", detail: "Rest and work spaces between procedures." },
];

export function IncludesSection() {
  const { language } = useLanguage();
  const features = language === "es" ? FEATURES_ES : FEATURES_EN;

  return (
    <section
      className="relative overflow-hidden py-28 md:py-40"
      style={{ background: "var(--op-graphite-2)" }}
    >
      <div className="scene-glow-blue" />
      <div className="grain-overlay" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 md:mb-20 max-w-2xl"
        >
          <span className="t-eyebrow">
            {language === "es" ? "Qué incluye" : "What's included"}
          </span>
          <h2 className="t-display mt-5">
            {language === "es"
              ? "Todo lo que necesitas. Nada que gestionar."
              : "Everything you need. Nothing to manage."}
          </h2>
          <p className="t-lead mt-5">
            {language === "es"
              ? "Cero fricciones. Cero sorpresas. Infraestructura completa para que el especialista se concentre en operar."
              : "Zero friction. Zero surprises. Complete infrastructure so the specialist can focus on operating."}
          </p>
        </motion.div>

        {/* Feature grid — dashboard style */}
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.65, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="feat-item group"
            >
              {/* Amber accent bar top */}
              <div
                className="absolute top-0 left-0 right-0 h-px rounded-t-xl opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                style={{ background: "var(--op-amber)" }}
              />
              <div className="relative flex flex-col gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black transition-all duration-400 group-hover:bg-[var(--op-amber)] group-hover:text-[var(--op-ink)]"
                  style={{
                    border: "1px solid rgba(95,131,144,0.2)",
                    background: "rgba(95,131,144,0.05)",
                    color: "var(--op-amber)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <p className="text-sm font-semibold leading-snug" style={{ color: "var(--op-fog)" }}>{feat.title}</p>
                  <p className="text-[12px] leading-relaxed mt-1.5" style={{ color: "var(--op-mist)", opacity: 0.7 }}>{feat.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 pt-10 flex flex-wrap gap-10 justify-center md:justify-start"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          {[
            { v: "10+", l: language === "es" ? "Servicios incluidos" : "Services included" },
            { v: "1", l: language === "es" ? "Punto de contacto" : "Contact point" },
            { v: "360°", l: language === "es" ? "Soporte perioperatorio" : "Perioperative support" },
          ].map(({ v, l }) => (
            <div key={l} className="text-center md:text-left">
              <p className="font-display font-black text-4xl leading-none" style={{ color: "var(--op-amber)" }}>{v}</p>
              <p className="t-label mt-2">{l}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
