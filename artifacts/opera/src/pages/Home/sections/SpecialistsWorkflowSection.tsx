import { useLanguage } from "@/i18n";
import { SectionHeader } from "@/components/site/SectionHeader";
import { motion } from "framer-motion";
import {
  ClipboardList, GitBranch, Users2, ShieldCheck, Clock, Handshake,
} from "lucide-react";

const POINT_ICONS = {
  admin: ClipboardList,
  coord: GitBranch,
  backup: Users2,
  speed: Clock,
  safety: ShieldCheck,
  ops: Handshake,
};

type PointKey = keyof typeof POINT_ICONS;

export function SpecialistsWorkflowSection() {
  const { t } = useLanguage();
  const points = t.home.b2b.points;

  return (
    <section
      className="opera-section py-24 md:py-36"
      style={{
        background: "linear-gradient(160deg, #003a5c 0%, #004875 50%, #003050 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: header + lead */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeader
              eyebrow={t.home.b2b.eyebrow}
              title={t.home.b2b.title}
              light
            />
            <p className="opera-lead mt-4">{t.home.b2b.lead}</p>

            {/* Decorative stat */}
            <div className="mt-10 flex gap-6">
              {[
                { value: "5+", label: "Especialidades" },
                { value: "≤24h", label: "Respuesta" },
                { value: "360°", label: "Soporte" },
              ].map(({ value, label }) => (
                <div key={value}>
                  <p className="font-heading font-black text-3xl text-opera-amber leading-none">{value}</p>
                  <p className="text-xs text-opera-ivory/45 font-medium uppercase tracking-wider mt-1">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: points grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {(Object.keys(POINT_ICONS) as PointKey[]).map((key, i) => {
              const Icon = POINT_ICONS[key];
              const point = points[key];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="group rounded-xl border border-white/10 bg-white/05 p-5 backdrop-blur-sm hover:border-opera-amber/20 hover:bg-white/08 transition-all duration-400"
                >
                  <Icon className="h-5 w-5 text-opera-amber/80 mb-3" aria-hidden />
                  <h3 className="font-heading font-bold text-opera-ivory text-sm mb-1.5">{point.title}</h3>
                  <p className="text-[13px] leading-relaxed text-opera-ivory/50">{point.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
