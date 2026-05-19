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
    initials: "AM",
  },
  {
    quoteEs: "La coordinación es impecable. Llego y todo está listo. Menos fricción, más foco clínico. Así debe sentirse operar.",
    quoteEn: "The coordination is flawless. I arrive and everything is ready. Less friction, more clinical focus. That's what operating should feel like.",
    nameEs: "Dr. Carlos V.",
    nameEn: "Dr. Carlos V.",
    roleEs: "Traumatología",
    roleEn: "Orthopedic & trauma",
    initials: "CV",
  },
  {
    quoteEs: "Mis pacientes preguntan siempre dónde es la clínica. Ese reconocimiento vale más que cualquier campaña de marketing.",
    quoteEn: "My patients always ask where the facility is. That recognition is worth more than any marketing campaign.",
    nameEs: "Dra. Sofía L.",
    nameEn: "Dr. Sofía L.",
    roleEs: "Ginecología",
    roleEn: "Gynecology",
    initials: "SL",
  },
];

export function TestimonialsSection() {
  const { language } = useLanguage();

  return (
    <section className="relative overflow-hidden" style={{ background: "var(--op-canvas)" }}>
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
            {language === "es" ? "Lo que dicen" : "What they say"}
          </span>
          <h2 className="t-display mt-5 mx-auto" style={{ maxWidth: 600 }}>
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
              transition={{ duration: 0.85, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="testimonial-card flex flex-col gap-5"
            >
              {/* Large open quote */}
              <div className="font-display font-bold text-6xl leading-none select-none -mb-2"
                style={{ color: "var(--op-amber-pale)", fontFamily: "Georgia, serif" }}>
                "
              </div>

              {/* Quote */}
              <blockquote
                className="font-display font-medium leading-snug flex-1"
                style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)", color: "var(--op-ink-2)" }}
              >
                {language === "es" ? t.quoteEs : t.quoteEn}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3.5 pt-4" style={{ borderTop: "1px solid var(--op-border)" }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-sm"
                  style={{
                    border: "1px solid var(--op-border-teal)",
                    background: "var(--op-amber-dim)",
                    color: "var(--op-amber)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--op-ink)" }}>
                    {language === "es" ? t.nameEs : t.nameEn}
                  </p>
                  <p className="text-[11px] font-medium uppercase tracking-wide mt-0.5" style={{ color: "var(--op-amber)", opacity: 0.75 }}>
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
