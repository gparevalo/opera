import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface UnifiedSectionBlackProps {
  children: ReactNode;
  className?: string;
  id?: string;
  withGrid?: boolean;
  withGlow?: boolean;
  dark?: boolean;
}

export function UnifiedSectionBlack({
  children,
  className,
  id,
  withGrid = true,
  withGlow = true,
  dark = true,
}: UnifiedSectionBlackProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-32 md:py-40 overflow-hidden",
        dark ? "bg-[#030303] text-white" : "bg-white text-black",
        className,
      )}
    >
      {/* Cinematic Depth Layer (Volumetric Stage Lighting) */}
      {dark && withGlow && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Side Accents */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 0.4, x: 0 }}
            transition={{ duration: 3, delay: 0.5 }}
            className="absolute top-[20%] right-[-10%] w-[40%] h-[80%] bg-primary/[0.05] rounded-full blur-[140px]"
          />
        </div>
      )}

      {/* Content Container */}
      <div className="mx-auto max-w-[1440px] px-8 lg:px-16 relative z-20">
        {children}
      </div>

      {/* Grid Architecture */}
      {withGrid && (
        <>
          {/* Light Mode Grid (Subtle Magazine Style) */}
          <div
            className="absolute block dark:hidden inset-0 z-0 pointer-events-none opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #000 1px, transparent 1px),
                linear-gradient(to bottom, #000 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              maskImage:
                "radial-gradient(ellipse 80% 50% at 50% 50%, #000 30%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 50% at 50% 50%, #000 30%, transparent 100%)",
            }}
          />

          {/* Dark Mode Grid (Stage Floor Strategy) */}
          <div
            className="absolute hidden dark:block inset-0 z-0 pointer-events-none opacity-[0.035]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
              maskImage:
                "radial-gradient(ellipse 70% 70% at 50% 50%, #000 10%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 70% at 50% 50%, #000 10%, transparent 100%)",
            }}
          />

          {/* Horizon Line (Subtle Stage Edge) */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        </>
      )}

      {/* Cinematic Grain / Noise Texture */}
      {dark && (
        <div
          className="absolute inset-0 z-[1] pointer-events-none opacity-[0.25] mix-blend-soft-light"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      )}
    </section>
  );
}
