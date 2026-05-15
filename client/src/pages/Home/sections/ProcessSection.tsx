import { CinematicSection } from "@/components/site/CinematicSection";
import { GlassCard } from "@/components/site/GlassCard";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";

const stepKeys = ["1", "2", "3", "4", "5"] as const;

export function ProcessSection() {
  const { t } = useLanguage();
  return (
    <CinematicSection tone="ivory" id="proceso">
      <SectionHeader
        eyebrow="Workflow"
        title={t.home.process.title}
        subtitle={t.home.process.subtitle}
      />
      <motion.div
        className="opera-separator mt-10"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {stepKeys.map((key, i) => {
          const step = t.home.process.steps[key];
          return (
            <motion.div
              key={key}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard className="flex h-full flex-col !p-5">
                <span className="font-mono text-xs font-bold text-opera-amber">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-heading text-sm font-semibold leading-snug text-[#1E1E1E]">
                  {step.title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-[#004875]/65">
                  {step.body}
                </p>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>
    </CinematicSection>
  );
}
