import { cn } from "@/lib/utils";
import { Link } from "wouter";
import { type AnchorHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";

const variants: Record<Variant, string> = {
  primary: "opera-btn opera-btn-primary",
  secondary: "opera-btn opera-btn-secondary",
  ghost: "opera-btn opera-btn-ghost",
  whatsapp: "opera-btn opera-btn-whatsapp",
};

interface BaseProps {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}

export function OperaButtonLink({
  href,
  children,
  className,
  variant = "primary",
}: BaseProps & { href: string }) {
  return (
    <Link href={href}>
      <span className={cn(variants[variant], className)}>{children}</span>
    </Link>
  );
}

export function OperaButtonAnchor({
  href,
  children,
  className,
  variant = "primary",
  ...rest
}: BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} className={cn(variants[variant], className)} {...rest}>
      {children}
    </a>
  );
}
