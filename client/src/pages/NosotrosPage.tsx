import { CinematicSection } from "@/components/site/CinematicSection";
import { GlassCard } from "@/components/site/GlassCard";
import { PageShell } from "@/components/site/PageShell";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";

const pillars = ["excellence", "safety", "innovation"] as const;

export default function NosotrosPage() {
  const { t, language } = useLanguage();
  const title = t.about.title;
  const description =
    language === "es"
      ? "Visión, misión y pilares de Ópera Surgical Center en Quito."
      : "Vision, mission, and pillars of Ópera Surgical Center in Quito.";

  return (
    <PageShell
      title={title}
      description={description}
      canonicalPath="/nosotros"
      intro={t.about.intro}
    >
      <CinematicSection tone="ivory" innerClassName="!pt-0">
        <div className="space-y-16 pb-4">
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="opera-eyebrow">{t.about.vision_title}</h2>
            <p className="opera-lead mt-4 max-w-3xl">{t.about.vision}</p>
          </motion.section>
          <motion.div className="opera-separator" />
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="opera-eyebrow">{t.about.mission_title}</h2>
            <p className="opera-lead mt-4 max-w-3xl">{t.about.mission}</p>
          </motion.section>
          <motion.div className="opera-separator" />
          <section>
            <h2 className="opera-display">{t.about.pillars_title}</h2>
            <ul className="mt-10 grid gap-5 md:grid-cols-3">
              {pillars.map((key, i) => {
                const p = t.about.pillars[key];
                return (
                  <GlassCard
                    key={key}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <h3 className="font-heading text-lg font-semibold text-[#1E1E1E]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#004875]/70">
                      {p.body}
                    </p>
                  </GlassCard>
                );
              })}
            </ul>
          </section>
        </div>
      </CinematicSection>
    </PageShell>
  );
}
