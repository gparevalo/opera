import { useLanguage } from "@/i18n";
import { SectionHeader } from "@/components/site/SectionHeader";
import { motion } from "framer-motion";
import { Zap, Shield, Users, Bed, Building2, Heart } from "lucide-react";

const ICONS = {
  agility: Zap,
  safety: Shield,
  team: Users,
  stay: Bed,
  infra: Building2,
  care: Heart,
};

type DiffKey = keyof typeof ICONS;

export function DifferentialsSection() {
  const { t } = useLanguage();
  const items = t.home.diff.items;

  return (
    <section className="opera-section opera-section-midnight py-24 md:py-32">
      <div className="scene-glow" />
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <SectionHeader
          eyebrow={t.home.diff.eyebrow}
          title={t.home.diff.title}
          subtitle={t.home.diff.subtitle}
          light
          align="center"
          className="mb-16"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {(Object.keys(ICONS) as DiffKey[]).map((key, i) => {
            const Icon = ICONS[key];
            const item = items[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="opera-glass-card-dark group"
              >
                <div className="opera-icon-well-dark mb-4 group-hover:border-opera-amber/30 transition-colors duration-300">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-heading font-bold text-opera-ivory text-[1.05rem] mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-opera-ivory/55">{item.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
