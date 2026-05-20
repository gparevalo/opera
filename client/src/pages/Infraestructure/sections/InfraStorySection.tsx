import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";
import { StorySection } from "./StorySection";

/* ─── Main component ───────────────────────────────────────────── */
export function InfraStorySection() {
  const { language } = useLanguage();
  return (
    <section
      style={{
        background: "var(--op-surface)",
        borderTop: "1px solid var(--op-border)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-24 md:py-40">
        {/* Section header */}
        <motion.div
          className="text-center mb-20 md:mb-28"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="t-eyebrow mb-5 inline-flex">
            {language === "es" ? "Infraestructura" : "Infrastructure"}
          </span>
          <h2
            className=" mt-5 mx-auto 
                font-display
                text-5xl
                md:text-7xl
                leading-[0.95]
                tracking-tight
                text-primary"
            style={{ maxWidth: "70%" }}
          >
            {language === "es"
              ? "Infraestructura pensada para tu práctica"
              : "Infrastructure built for your practice"}
          </h2>
          <p className="t-lead mt-5 mx-auto">
            {language === "es"
              ? "Cada área diseñada con precisión para simplificar tu jornada quirúrgica."
              : "Every area designed with precision to simplify your surgical day."}
          </p>
        </motion.div>

        <StorySection />
      </div>
    </section>
  );
}
