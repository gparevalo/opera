import { CinematicSection } from "@/components/site/CinematicSection";
import { GlassCard } from "@/components/site/GlassCard";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";
import {
  BedDouble,
  Building2,
  Clock3,
  HeartHandshake,
  ShieldCheck,
  Users,
} from "lucide-react";

const iconMap = {
  agility: Clock3,
  safety: ShieldCheck,
  team: Users,
  stay: BedDouble,
  infra: Building2,
  care: HeartHandshake,
} as const;

const keys = ["agility", "safety", "team", "stay", "infra", "care"] as const;

export function DifferentialsSection() {
  const { t } = useLanguage();
  return (
    <CinematicSection tone="ivory" id="diferenciales">
      <SectionHeader
        eyebrow="Ópera"
        title={t.home.diff.title}
        subtitle={t.home.diff.subtitle}
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {keys.map((key, i) => {
          const Icon = iconMap[key];
          const item = t.home.diff.items[key];
          return (
            <GlassCard
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <motion.div
                className="opera-icon-well"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <Icon className="h-5 w-5" aria-hidden />
              </motion.div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-[#1E1E1E]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#004875]/70">
                {item.body}
              </p>
            </GlassCard>
          );
        })}
      </div>
    </CinematicSection>
  );
}
