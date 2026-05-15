import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionTone = "ivory" | "deep" | "midnight" | "transparent";

interface CinematicSectionProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  tone?: SectionTone;
  id?: string;
  noPadding?: boolean;
}

const toneClasses: Record<SectionTone, string> = {
  ivory: "opera-section-ivory",
  deep: "opera-section-deep",
  midnight: "opera-section-midnight",
  transparent: "opera-section-transparent",
};

export function CinematicSection({
  children,
  className,
  innerClassName,
  tone = "ivory",
  id,
  noPadding,
}: CinematicSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "opera-section relative overflow-hidden",
        toneClasses[tone],
        className,
      )}
    >
      <motion.div
        className="opera-section-glow pointer-events-none absolute inset-0"
        aria-hidden
        animate={{ opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="opera-section-glow-amber pointer-events-none absolute inset-0"
        aria-hidden
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={cn(
          "relative z-10 mx-auto max-w-6xl px-5 lg:px-8",
          !noPadding && "py-20 lg:py-28",
          innerClassName,
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}
