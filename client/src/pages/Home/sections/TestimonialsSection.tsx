import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";
import { TestimonialsColumn } from "./TestimonialsColumn";

const testimonials = [
  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TESTIMONIALS = [
  {
    quoteEs:
      "Operar en Ópera cambió la percepción que mis pacientes tienen de mi práctica. La infraestructura comunica un nivel que pocos centros en Ecuador tienen.",
    quoteEn:
      "Operating at Ópera changed how my patients perceive my practice. The infrastructure communicates a level that few centers in Ecuador have.",
    nameEs: "Dr. Andrés M.",
    nameEn: "Dr. Andrés M.",
    roleEs: "Cirugía plástica",
    roleEn: "Plastic surgery",
    initials: "AM",
  },
  {
    quoteEs:
      "La coordinación es impecable. Llego y todo está listo. Menos fricción, más foco clínico. Así debe sentirse operar.",
    quoteEn:
      "The coordination is flawless. I arrive and everything is ready. Less friction, more clinical focus. That's what operating should feel like.",
    nameEs: "Dr. Carlos V.",
    nameEn: "Dr. Carlos V.",
    roleEs: "Traumatología",
    roleEn: "Orthopedic & trauma",
    initials: "CV",
  },
  {
    quoteEs:
      "Mis pacientes preguntan siempre dónde es la clínica. Ese reconocimiento vale más que cualquier campaña de marketing.",
    quoteEn:
      "My patients always ask where the facility is. That recognition is worth more than any marketing campaign.",
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
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--op-canvas)" }}
    >
      <div className="scene-glow-dark" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-32 md:py-48">
        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20 
                font-display
                text-5xl
                md:text-7xl
                leading-[0.95]
                tracking-tight
                text-primary"
        >
          <span className="t-eyebrow mb-5 inline-flex">
            {language === "es" ? "Lo que dicen" : "What they say"}
          </span>
          <h2 className=" mt-5 mx-auto" style={{ maxWidth: 600 }}>
            {language === "es"
              ? "Especialistas que ya operan en Ópera."
              : "Specialists already operating at Ópera."}
          </h2>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
