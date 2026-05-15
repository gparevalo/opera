import { CinematicSection } from "@/components/site/CinematicSection";
import { GlassCard } from "@/components/site/GlassCard";
import { SectionHeader } from "@/components/site/SectionHeader";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Headphones,
  Layers,
  LineChart,
  Shield,
  Stethoscope,
} from "lucide-react";

const keys = ["admin", "coord", "backup", "speed", "safety", "ops"] as const;
const icons = [ClipboardList, Layers, Stethoscope, LineChart, Shield, Headphones];

export function SpecialistsWorkflowSection() {
  const { t } = useLanguage();
  return (
    <CinematicSection tone="midnight" id="especialistas">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <SectionHeader
          eyebrow={t.home.b2b.eyebrow}
          title={t.home.b2b.title}
          subtitle={t.home.b2b.lead}
          light
        />

        <div className="relative">
          <div
            className="absolute bottom-6 left-[21px] top-6 w-px bg-gradient-to-b from-opera-amber/50 via-white/15 to-transparent"
            aria-hidden
          />
          <ul className="space-y-5">
            {keys.map((key, i) => {
              const Icon = icons[i];
              const item = t.home.b2b.points[key];
              return (
                <motion.li
                  key={key}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative flex gap-5"
                >
                  <div className="opera-icon-well-dark relative z-10 shrink-0">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <GlassCard dark className="flex-1 !p-4" hover>
                    <p className="font-heading text-sm font-semibold text-opera-ivory">
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-opera-warm/70">
                      {item.body}
                    </p>
                  </GlassCard>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </CinematicSection>
  );
}
