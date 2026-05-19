import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  action?: ReactNode;
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
  align = "left",
  action,
  light = false,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "max-w-2xl",
        centered && "mx-auto text-center",
        action && !centered && "md:flex md:items-end md:justify-between md:gap-8 md:max-w-none",
        className,
      )}
    >
      <motion.div className={cn(centered && "mx-auto", action && "md:max-w-2xl")}>
        {eyebrow && (
          <p className={cn("opera-eyebrow", light && "opera-eyebrow-light")}>
            {eyebrow}
          </p>
        )}
        <h2 className={cn("opera-display mt-3", light && "text-opera-ivory")}>
          {title}
        </h2>
        {subtitle && (
          <p className={cn("opera-lead mt-4", light && "text-opera-warm/75")}>
            {subtitle}
          </p>
        )}
      </motion.div>
      {action && <motion.div className="mt-6 shrink-0 md:mt-0">{action}</motion.div>}
    </motion.header>
  );
}
