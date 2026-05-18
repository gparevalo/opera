import { useLanguage } from "@/i18n";
import { SectionHeader } from "@/components/site/SectionHeader";
import { OperaButtonLink } from "@/components/site/OperaButton";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const INFRA_BLOCKS = [
  { key: "or", accentColor: "rgba(0,72,117,0.9)", pattern: "cross" },
  { key: "rec", accentColor: "rgba(174,147,56,0.15)", pattern: "dots" },
  { key: "short", accentColor: "rgba(0,40,80,0.85)", pattern: "lines" },
  { key: "equip", accentColor: "rgba(0,72,117,0.7)", pattern: "circle" },
  { key: "sterile", accentColor: "rgba(20,20,40,0.9)", pattern: "grid" },
  { key: "reception", accentColor: "rgba(174,147,56,0.1)", pattern: "radial" },
];

export function InfraPreviewSection() {
  const { t } = useLanguage();
  const labels = t.home.infra.labels;

  return (
    <section
      className="opera-section py-24 md:py-36"
      style={{
        background: "linear-gradient(160deg, #060e16 0%, #0a1a28 50%, #004875 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <SectionHeader
          eyebrow={t.home.infra.eyebrow}
          title={t.home.infra.title}
          subtitle={t.home.infra.subtitle}
          light
          action={
            <OperaButtonLink href="/infraestructura" variant="ghost">
              {t.home.infra.link}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </OperaButtonLink>
          }
          className="mb-14"
        />

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {INFRA_BLOCKS.map(({ key, accentColor, pattern }, i) => {
            const label = labels[key as keyof typeof labels];
            const tall = i === 0 || i === 4;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.75, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`opera-image-frame group overflow-hidden ${tall ? "row-span-2" : ""}`}
                style={{ minHeight: tall ? "380px" : "175px" }}
              >
                {/* Abstract surgical space representation */}
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{ background: accentColor }}
                />
                <InfraPattern pattern={pattern} />
                {/* Label overlay */}
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="rounded-md border border-white/15 bg-black/40 px-3 py-1.5 text-xs font-semibold text-opera-ivory/90 backdrop-blur-sm">
                    {label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function InfraPattern({ pattern }: { pattern: string }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.07]"
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
    >
      {pattern === "cross" && (
        <>
          <line x1="200" y1="0" x2="200" y2="300" stroke="white" strokeWidth="0.75" />
          <line x1="0" y1="150" x2="400" y2="150" stroke="white" strokeWidth="0.75" />
          <circle cx="200" cy="150" r="60" fill="none" stroke="white" strokeWidth="0.75" />
          <circle cx="200" cy="150" r="30" fill="none" stroke="white" strokeWidth="0.5" />
        </>
      )}
      {pattern === "dots" && (
        <>
          {Array.from({ length: 8 }).map((_, r) =>
            Array.from({ length: 10 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={c * 50 + 25} cy={r * 40 + 20} r="1.5" fill="white" />
            )),
          )}
        </>
      )}
      {pattern === "lines" && (
        <>
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={i} x1="0" y1={i * 28} x2="400" y2={i * 28} stroke="white" strokeWidth="0.5" />
          ))}
        </>
      )}
      {pattern === "circle" && (
        <>
          <circle cx="200" cy="150" r="120" fill="none" stroke="white" strokeWidth="0.75" />
          <circle cx="200" cy="150" r="80" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="200" cy="150" r="40" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="200" cy="150" r="10" fill="white" opacity="0.4" />
        </>
      )}
      {pattern === "grid" && (
        <>
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 45} y1="0" x2={i * 45} y2="300" stroke="white" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 40} x2="400" y2={i * 40} stroke="white" strokeWidth="0.5" />
          ))}
        </>
      )}
      {pattern === "radial" && (
        <>
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1="200"
                y1="150"
                x2={200 + 200 * Math.cos(angle)}
                y2={150 + 200 * Math.sin(angle)}
                stroke="white"
                strokeWidth="0.5"
              />
            );
          })}
          <circle cx="200" cy="150" r="20" fill="none" stroke="white" strokeWidth="1" />
        </>
      )}
    </svg>
  );
}
