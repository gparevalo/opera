import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  dark?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = true,
  dark = false,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        dark ? "opera-glass-card-dark" : "opera-glass-card",
        hover && "opera-glass-card-hover",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
