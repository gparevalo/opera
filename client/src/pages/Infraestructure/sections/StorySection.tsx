import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

type Story = {
  num: string;
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
  image: string;
};

const STORIES_ES = [
  {
    num: "01",
    eyebrow: "Quirófanos",
    title: "Tecnología quirúrgica lista para operar con precisión",
    desc: "Espacios equipados para procedimientos de baja y mediana complejidad, diseñados bajo altos estándares de seguridad, eficiencia y control clínico.",
    bullets: [
      "Tecnología médica de vanguardia",
      "Protocolos de seguridad quirúrgica",
      "Flujos optimizados para cirugía ambulatoria",
      "Entorno diseñado para especialistas",
    ],
    image: "/clinica/operahero1.png",
  },

  {
    num: "02",
    eyebrow: "Recuperación",
    title: "Recuperación ambulatoria cómoda y monitorizada",
    desc: "Área postoperatoria preparada para acompañar al paciente con monitoreo profesional, confort y seguimiento inmediato después del procedimiento.",
    bullets: [
      "Monitoreo clínico continuo",
      "Atención de enfermería especializada",
      "Espacios tranquilos y privados",
      "Alta ambulatoria eficiente",
    ],
    image: "/clinica/operahero2.png",
  },

  {
    num: "03",
    eyebrow: "Hospitalización",
    title: "Habitaciones privadas diseñadas para el confort",
    desc: "Contamos con habitaciones individuales equipadas para brindar una experiencia más cómoda, tranquila y humana durante la recuperación.",
    bullets: [
      "6 habitaciones privadas",
      "TV, internet y teléfono",
      "Sofá para acompañantes",
      "Ambiente cómodo y silencioso",
    ],
    image: "/clinica/operahero3.png",
  },

  {
    num: "04",
    eyebrow: "Centro Gástrico",
    title: "Atención digestiva integral en un solo lugar",
    desc: "Un área especializada en diagnóstico, tratamiento y seguimiento de patologías gastrointestinales con enfoque clínico integral.",
    bullets: [
      "Evaluación digestiva especializada",
      "Seguimiento clínico continuo",
      "Atención personalizada",
      "Protocolos ambulatorios especializados",
    ],
    image: "/clinica/operahero4.png",
  },

  {
    num: "05",
    eyebrow: "Farmacia",
    title: "Farmacia interna para una experiencia sin fricciones",
    desc: "Disponemos de farmacia equipada dentro del centro médico para facilitar el acceso inmediato a tratamientos y recetas postoperatorias.",
    bullets: [
      "Amplio inventario médico",
      "Medicamentos postoperatorios",
      "Atención inmediata",
      "Mayor comodidad para el paciente",
    ],
    image: "/clinica/operahero5.png",
  },

  {
    num: "06",
    eyebrow: "Consulta Médica",
    title: "Más de 20 especialidades médicas disponibles",
    desc: "Un ecosistema médico diseñado para conectar distintas especialidades en un entorno moderno, coordinado y centrado en el paciente.",
    bullets: [
      "Más de 20 especialidades",
      "Atención médica integral",
      "Coordinación clínica eficiente",
      "Infraestructura moderna",
    ],
    image: "/clinica/operahero6.png",
  },
];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */

export function StorySection() {
  const { language } = useLanguage();

  const stories = STORIES_ES;

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-32">
          {stories.map((story, i) => {
            const isReverse = i % 2 !== 0;

            return (
              <div
                key={story.num}
                className={`
                  grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center
                  ${isReverse ? "lg:[&>*:first-child]:order-2" : ""}
                `}
              >
                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative group"
                >
                  <div
                    className="absolute inset-0 rounded-[32px] blur-3xl opacity-20 group-hover:opacity-30 transition-all duration-700"
                    style={{
                      background:
                        "linear-gradient(135deg, #004875 0%, #ae9338 100%)",
                    }}
                  />

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[32px]
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-sm
                    "
                    style={{
                      boxShadow:
                        "0 24px 80px rgba(0,72,117,0.12), 0 6px 24px rgba(0,0,0,0.08)",
                    }}
                  >
                    <img
                      src={story.image}
                      alt={story.title}
                      className="
                        w-full
                        h-[420px]
                        lg:h-[560px]
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-[1.03]
                      "
                    />

                    {/* overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.05))",
                      }}
                    />

                    {/* floating number */}
                    <div className="absolute top-6 left-6">
                      <div
                        className="
                          w-14
                          h-14
                          rounded-full
                          flex
                          items-center
                          justify-center
                          text-white
                          font-display
                          font-bold
                          text-lg
                          backdrop-blur-md
                        "
                        style={{
                          background: "rgba(255,255,255,0.12)",
                          border: "1px solid rgba(255,255,255,0.16)",
                        }}
                      >
                        {story.num}
                      </div>
                    </div>

                    {/* image label */}
                    <div className="absolute bottom-8 left-8 right-8">
                      <span
                        className="inline-flex mb-3"
                        style={{
                          color: "#ffffff",
                          fontSize: "12px",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          fontWeight: 700,
                        }}
                      >
                        {story.eyebrow}
                      </span>
 
                    </div>
                  </div>
                </motion.div>

                {/* CONTENT */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <span className="t-eyebrow inline-flex mb-5">
                    {story.eyebrow}
                  </span>

                  <h2
                    className="
                      font-display
                      tracking-tight
                      leading-[0.95]
                      mb-6
                    "
                    style={{
                      fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                      color: "var(--op-primary)",
                    }}
                  >
                    {story.title}
                  </h2>

                  <p
                    className="mb-8"
                    style={{
                      color: "var(--op-slate)",
                      fontSize: "1.05rem",
                      lineHeight: 1.9,
                      maxWidth: 560,
                    }}
                  >
                    {story.desc}
                  </p>

                  <ul className="flex flex-col gap-4 mb-10">
                    {story.bullets.map((bullet, j) => (
                      <motion.li
                        key={bullet}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.45,
                          delay: j * 0.06,
                        }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2
                          className="w-5 h-5 shrink-0"
                          style={{ color: "#004875" }}
                        />

                        <span
                          style={{
                            color: "var(--op-slate)",
                            fontSize: "0.97rem",
                          }}
                        >
                          {bullet}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {i === stories.length - 1 ? (
                    <Link href="/contacto">
                      <span className="btn btn-amber flex w-fit items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {language === "es"
                          ? "Agendar visita"
                          : "Schedule a visit"}
                      </span>
                    </Link>
                  ) : (
                    <button className="btn btn-ghost flex items-center gap-2">
                      {language === "es" ? "Conocer más" : "Learn more"}

                      <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
