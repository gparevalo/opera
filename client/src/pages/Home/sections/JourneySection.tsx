import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";

const STEPS_ES = [
  {
    num: "01",
    title: "Llegada del especialista",
    detail: "Acceso directo y coordinación lista.",
  },
  {
    num: "02",
    title: "Preparación quirúrgica",
    detail: "Equipo alineado antes de entrar a sala.",
  },
  {
    num: "03",
    title: "Recuperación premium",
    detail: "Confort, monitoring y seguimiento coordinado.",
  },
];

const LABELS_ES = [
  "Parqueo reservado",
  "Recepción privada",
  "Soporte 360°",
];

const STEPS_EN = [
  {
    num: "01",
    title: "Specialist arrival",
    detail: "Direct access and seamless coordination.",
  },
  {
    num: "02",
    title: "Surgical preparation",
    detail: "Everything aligned before entering the OR.",
  },
  {
    num: "03",
    title: "Premium recovery",
    detail: "Comfort, monitoring and coordinated follow-up.",
  },
];

const LABELS_EN = [
  "Reserved parking",
  "Private reception",
  "360° support",
];

export function JourneySection() {
  const { language } = useLanguage();

  const steps = language === "es" ? STEPS_ES : STEPS_EN;
  const labels = language === "es" ? LABELS_ES : LABELS_EN;

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[var(--op-canvas)]
        py-32
      "
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12">
        {/* HEADER */}
        <div className="max-w-[900px] mx-auto text-center mb-20">
          <span className="t-eyebrow inline-flex mb-6">
            {language === "es"
              ? "Experiencia quirúrgica"
              : "Surgical experience"}
          </span>

          <h2
            className="
              font-display
              text-5xl
              md:text-7xl
              leading-[0.95]
              tracking-tight
              text-primary
            "
          >
            {language === "es" ? (
              <>
                Diseñado para transmitir
                <span className="text-secondary"> calma</span>
                <br />
                en cada etapa.
              </>
            ) : (
              <>
                Designed to communicate
                <span className="text-secondary"> calmness</span>
                <br />
                at every stage.
              </>
            )}
          </h2>

          <p className="mt-8 max-w-[700px] mx-auto text-[17px] leading-relaxed text-slate-500">
            {language === "es"
              ? "Una experiencia quirúrgica premium diseñada para especialistas y pacientes."
              : "A premium surgical experience designed for specialists and patients."}
          </p>
        </div>

        {/* MAIN VISUAL */}
        <div className="relative rounded-[2.5rem] overflow-hidden min-h-[720px]">
          {/* IMAGE */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/clinica/operahero5.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* OVERLAY */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.12), rgba(0,0,0,0.45))",
            }}
          />

          {/* TOP GLOW */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px]"
            style={{
              background:
                "radial-gradient(circle, rgba(43,122,140,0.18), transparent 70%)",
              filter: "blur(80px)",
            }}
          />

          {/* FLOATING STEPS */}
          <div
            className="
              absolute
              left-6
              right-6
              bottom-6
              z-10
              grid
              md:grid-cols-3
              gap-4
            "
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border border-white/10
                  bg-white/[0.08]
                  backdrop-blur-2xl
                  p-6
                "
                style={{
                  boxShadow:
                    "0 10px 40px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                {/* BIG NUMBER */}
                <div
                  className="
                    absolute
                    right-4
                    top-2
                    font-display
                    text-[4rem]
                    leading-none
                    font-bold
                  "
                  style={{
                    color: "rgba(255,255,255,0.06)",
                  }}
                >
                  {step.num}
                </div>

                <div
                  className="
                    h-10
                    w-10
                    rounded-full
                    border border-white/10
                    bg-white/10
                    mb-5
                  "
                />

                <h3
                  className="
                    text-white
                    text-[1.2rem]
                    font-display
                    tracking-tight
                  "
                >
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {step.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MINI LABELS */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {labels.map((label) => (
            <div
              key={label}
              className="
                rounded-full
                border border-black/6
                bg-white
                px-5 py-2.5
                text-[13px]
                font-medium
                text-slate-600
              "
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}