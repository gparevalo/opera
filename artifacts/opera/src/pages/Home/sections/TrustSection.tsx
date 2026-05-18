import { useLanguage } from "@/i18n";
import { SectionHeader } from "@/components/site/SectionHeader";
import { motion } from "framer-motion";
import { Shield, Users, CalendarCheck2, Star } from "lucide-react";

const BULLET_ICONS = [Shield, Users, CalendarCheck2, Star];

export function TrustSection() {
  const { t } = useLanguage();
  const bullets = Object.values(t.home.trust.bullets);

  return (
    <section
      className="opera-section py-24 md:py-32"
      style={{
        background: "linear-gradient(165deg, rgba(245,242,235,0.97) 0%, rgba(234,229,220,0.92) 50%, rgba(245,242,235,0.88) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="opera-eyebrow" style={{ color: "#ae9338" }}>
              {t.home.trust.eyebrow}
            </p>
            <h2
              className="font-heading font-black text-[#004875] leading-[1.08] tracking-[-0.03em] mt-3"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.65rem)" }}
            >
              {t.home.trust.title}
            </h2>
            <p
              className="mt-4 text-[1.05rem] leading-[1.75]"
              style={{ color: "rgba(0,72,117,0.65)" }}
            >
              {t.home.trust.subtitle}
            </p>
          </motion.div>

          {/* Right: bullet list */}
          <div className="flex flex-col gap-5">
            {bullets.map((bullet, i) => {
              const Icon = BULLET_ICONS[i % BULLET_ICONS.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 rounded-xl border border-[#004875]/10 bg-white/60 p-5 shadow-sm backdrop-blur-sm hover:border-[#ae9338]/25 hover:shadow-md transition-all duration-300"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "rgba(0,72,117,0.08)", border: "1px solid rgba(0,72,117,0.12)" }}
                  >
                    <Icon className="h-5 w-5" style={{ color: "#004875" }} aria-hidden />
                  </div>
                  <p className="text-sm leading-relaxed pt-1" style={{ color: "#1e1e1e" }}>
                    {bullet}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
