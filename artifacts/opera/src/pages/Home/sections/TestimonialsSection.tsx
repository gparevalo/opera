import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";

const TESTIMONIALS = [
  {
    quoteEs: "Operar en Ópera cambió la percepción que mis pacientes tienen de mi práctica. La infraestructura comunica un nivel que pocos centros en Ecuador tienen.",
    quoteEn: "Operating at Ópera changed how my patients perceive my practice. The infrastructure communicates a level that few centers in Ecuador have.",
    nameEs: "Dr. Andrés M.",
    nameEn: "Dr. Andrés M.",
    roleEs: "Cirugía plástica",
    roleEn: "Plastic surgery",
  },
  {
    quoteEs: "La coordinación es impecable. Llego y todo está listo. Menos fricción, más foco clínico. Así debe sentirse operar.",
    quoteEn: "The coordination is flawless. I arrive and everything is ready. Less friction, more clinical focus. That's what operating should feel like.",
    nameEs: "Dr. Carlos V.",
    nameEn: "Dr. Carlos V.",
    roleEs: "Traumatología",
    roleEn: "Orthopedic & trauma",
  },
  {
    quoteEs: "Mis pacientes preguntan siempre dónde es la clínica. Ese reconocimiento vale más que cualquier campaña de marketing.",
    quoteEn: "My patients always ask where the facility is. That recognition is worth more than any marketing campaign.",
    nameEs: "Dra. Sofía L.",
    nameEn: "Dr. Sofía L.",
    roleEs: "Ginecología",
    roleEn: "Gynecology",
  },
];

export function TestimonialsSection() {
  const { language } = useLanguage();

  return (
    <section
      className="relative overflow-hidden py-28 md:py-40"
      style={{ background: "var(--op-graphite)" }}
    >
      <div className="scene-glow-dark" />
      <div className="grain-overlay" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 max-w-lg"
        >
          <span className="t-eyebrow">
            {language === "es" ? "Lo que dicen" : "What they say"}
          </span>
          <h2 className="t-display mt-5">
            {language === "es"
              ? "Especialistas que ya operan en Ópera."
              : "Specialists already operating at Ópera."}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="testimonial-card flex flex-col gap-6"
            >
              {/* Quotation mark */}
              <div className="font-display font-black text-6xl leading-none select-none" style={{ color: "rgba(95,131,144,0.22)" }}>
                "
              </div>

              {/* Quote */}
              <blockquote
                className="font-display font-medium leading-snug flex-1"
                style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)", color: "rgba(240,237,232,0.85)" }}
              >
                {language === "es" ? t.quoteEs : t.quoteEn}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3.5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                {/* Avatar placeholder — elegant monogram */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-display font-black text-sm"
                  style={{
                    border: "1px solid rgba(95,131,144,0.28)",
                    background: "rgba(95,131,144,0.07)",
                    color: "var(--op-amber)",
                  }}
                >
                  {(language === "es" ? t.nameEs : t.nameEn).slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--op-fog)" }}>
                    {language === "es" ? t.nameEs : t.nameEn}
                  </p>
                  <p className="text-[12px] font-medium uppercase tracking-wide mt-0.5" style={{ color: "var(--op-amber)", opacity: 0.7 }}>
                    {language === "es" ? t.roleEs : t.roleEn}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
