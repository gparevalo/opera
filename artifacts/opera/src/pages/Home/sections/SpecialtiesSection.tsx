import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";

const SPECIALTIES = [
  { es: "Cirugía plástica", en: "Plastic surgery" },
  { es: "Cirugía bariátrica", en: "Bariatric surgery" },
  { es: "Traumatología", en: "Orthopedic & trauma" },
  { es: "Ginecología", en: "Gynecology" },
  { es: "Dermatología quirúrgica", en: "Surgical dermatology" },
  { es: "Urología", en: "Urology" },
  { es: "Cirugía general", en: "General surgery" },
  { es: "Cirugía laparoscópica", en: "Laparoscopic surgery" },
  { es: "Oftalmología", en: "Ophthalmology" },
  { es: "Otorrinolaringología", en: "ENT" },
  { es: "Cirugía de columna", en: "Spine surgery" },
  { es: "Cirugía oncológica", en: "Oncologic surgery" },
];

export function SpecialtiesSection() {
  const { language } = useLanguage();

  return (
    <section
      className="relative overflow-hidden py-28 md:py-40"
      style={{ background: "var(--op-ink)" }}
    >
      <div className="scene-glow-dark" />

      {/* Background architectural accent */}
      <div className="absolute right-0 top-0 bottom-0 w-[40%] pointer-events-none" aria-hidden>
        <svg viewBox="0 0 600 800" className="w-full h-full opacity-[0.025]" preserveAspectRatio="xMinYMid slice">
          <circle cx="300" cy="400" r="350" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="300" cy="400" r="250" fill="none" stroke="white" strokeWidth="0.75" />
          <circle cx="300" cy="400" r="150" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="300" cy="400" r="60" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12">

        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="t-eyebrow">
              {language === "es" ? "Especialidades" : "Specialties"}
            </span>
            <h2 className="t-display mt-5">
              {language === "es"
                ? "Infraestructura compatible con tu especialidad."
                : "Infrastructure compatible with your specialty."}
            </h2>
            <p className="t-lead mt-5">
              {language === "es"
                ? "Ópera está diseñada para procedimientos de mediana y baja complejidad. Si tienes dudas sobre compatibilidad, conversemos."
                : "Ópera is designed for medium and low-complexity procedures. If you have compatibility questions, let's talk."}
            </p>
            <div className="mt-8">
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); window.location.href = "/contacto"; }}
                className="btn btn-amber flex-inline"
              >
                {language === "es" ? "Consultar disponibilidad" : "Check availability"}
              </a>
            </div>
          </motion.div>

          {/* Specialty pills ecosystem */}
          <div className="flex flex-wrap gap-3">
            {SPECIALTIES.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="specialty-pill"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "var(--op-amber)" }}
                />
                {language === "es" ? spec.es : spec.en}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
