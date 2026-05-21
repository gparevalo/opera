import { useLanguage } from "@/i18n";
import { motion } from "motion/react";
import { GaleryColumn } from "./GaleryColumn";

const testimonials = [
  {
    image: "/clinica/operahero1.png",
    name: "Quirófano Principal",
  },
  {
    image: "/clinica/operahero2.png",
    name: "Recepción Premium",
  },
  {
    image: "/clinica/operahero3.png",
    name: "Área Recuperación",
  },
  {
    image: "/clinica/operahero4.png",
    name: "Hospitalización Privada",
  },
  {
    image: "/clinica/operahero5.png",
    name: "Centro Gástrico",
  },
  {
    image: "/clinica/operahero6.png",
    name: "Consulta Médica",
  },
  {
    image: "/clinica/operahero7.png",
    name: "Sala Espera",
  },
  {
    image: "/clinica/operahero8.png",
    name: "Farmacia Interna",
  },
  {
    image: "/clinica/operahero9.png",
    name: "Ingreso Principal",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function GalerySection() {
  const { t, language } = useLanguage();
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center md:text-center  mb-0 md:mb-10 w-max-3xl "
        >
          <span className="t-eyebrow mb-5 inline-flex">
            {language === "es" ? "Explora Ópera" : "Explora Ópera"}
          </span>
          <h2
            style={{ maxWidth: "80%" }}
            className=" mt-5 mx-auto 
                            font-display
                            text-5xl
                            md:text-7xl
                            leading-[0.95]
                            tracking-tight
                            text-primary"
          >
            {language === "es"
              ? "Cada espacio diseñado para transmitir confianza antes del procedimiento."
              : "Cada espacio diseñado para transmitir confianza antes del procedimiento."}
          </h2>
          <p className="t-lead mt-5 text-xl leading-snug tracking-tight ">
            {language === "es"
              ? "Recorre la infraestructura, detalles y experiencia del centro quirúrgico a través de una galería pensada para reflejar el nivel de atención, precisión y confort que viven médicos y pacientes en cada visita."
              : "Recorre la infraestructura, detalles y experiencia del centro quirúrgico a través de una galería pensada para reflejar el nivel de atención, precisión y confort que viven médicos y pacientes en cada visita."}
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <GaleryColumn testimonials={firstColumn} duration={15} />
          <GaleryColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <GaleryColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
