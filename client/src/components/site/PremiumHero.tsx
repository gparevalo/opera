import { motion } from "framer-motion";
import PremiumButtonRef from "./PremiumButtonRef";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  component?: React.ReactNode;
};

type PremiumHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: HeroAction[];
  image?: string; // 👈 OPCIONAL
  imageAlt?: string;
};

export function PremiumHero({
  eyebrow,
  title,
  description,
  actions,
  image,
  imageAlt = "hero image",
}: PremiumHeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--op-canvas)" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 65% 55% at 80% 10%, rgba(43,122,140,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 45% 40% at 10% 90%, rgba(148,98,81,0.05) 0%, transparent 55%)
          `,
        }}
      />

      <div className="grain-overlay" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            {eyebrow && <span className="t-eyebrow">{eyebrow}</span>}

            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95] tracking-tight text-primary">
              {title}
            </h1>

            {description && (
              <p className="t-lead mt-5 text-xl leading-snug tracking-tight sm:text-[2.3rem]">
                {description}
              </p>
            )}

            {actions && actions.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {actions.map((action, i) => {
                  if (action.component) return action.component;

                  return (
                    <PremiumButtonRef key={i} href={action.href}>
                      {action.label}
                    </PremiumButtonRef>
                  );
                })}
              </div>
            )}
          </motion.div>

          {/* RIGHT IMAGE (OPTIONAL) */}
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-[420px] md:h-[520px] object-cover"
                />

                {/* soft overlay for luxury feel */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.25), transparent)",
                  }}
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
