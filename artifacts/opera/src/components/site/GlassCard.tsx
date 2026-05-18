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
        hover && "transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_56px_rgba(174,147,56,0.12),0_8px_32px_rgba(0,72,117,0.12)]",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
