import { CinematicSection } from "@/components/site/CinematicSection";
import { GlassCard } from "@/components/site/GlassCard";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const bullets = ["protocols", "staff", "support", "modern"] as const;

export function TrustSection() {
  const { t } = useLanguage();
  return (
    <CinematicSection tone="deep" id="confianza">
      <motion.div
        className="grid gap-12 lg:grid-cols-2 lg:gap-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader
          eyebrow={t.nav.about}
          title={t.home.trust.title}
          subtitle={t.home.trust.subtitle}
          light
        />
        <ul className="space-y-4">
          {bullets.map((key, i) => (
            <motion.li
              key={key}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <GlassCard dark className="flex gap-4 !p-5" hover>
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-opera-amber"
                  aria-hidden
                />
                <p className="text-sm leading-relaxed text-opera-ivory/90">
                  {t.home.trust.bullets[key]}
                </p>
              </GlassCard>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </CinematicSection>
  );
}
