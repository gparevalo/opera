import PremiumButtonRef from "@/components/site/PremiumButtonRef";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";

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
      className="relative overflow-hidden"
      style={{
        background: "var(--op-surface)",
        borderTop: "1px solid var(--op-border)",
        borderBottom: "1px solid var(--op-border)",
      }}
    >
      <div className="scene-glow-warm" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-32 md:py-48">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.6fr] lg:items-center">
          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="t-eyebrow mb-5 inline-flex">
              {language === "es" ? "Especialidades" : "Specialties"}
            </span>
            <h2
              className=" mt-5 
                font-display
                text-5xl
                md:text-7xl
                leading-[0.95]
                tracking-tight
                text-primary"
            >
              {language === "es"
                ? "Compatible con tu especialidad."
                : "Compatible with your specialty."}
            </h2>
            <p className="t-lead mt-5 text-lg leading-snug tracking-tight  ">
              {language === "es"
                ? "Ópera está diseñada para procedimientos de mediana y baja complejidad. Conversemos si tienes dudas sobre compatibilidad."
                : "Ópera is designed for medium and low-complexity procedures. Let's talk if you have compatibility questions."}
            </p>
            <div className="mt-8">
              <PremiumButtonRef href="/contacto">
                {language === "es"
                  ? "Consultar disponibilidad"
                  : "Check availability"}
              </PremiumButtonRef>
            </div>
          </motion.div>

          {/* Right — pill cloud */}
          <div className="flex flex-wrap gap-2.5">
            {SPECIALTIES.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
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
