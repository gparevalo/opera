import { SEO } from "@/components/seo";
import { BaseLayout } from "@/layout/base-layout";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageShellProps {
  title: string;
  description: string;
  canonicalPath: string;
  intro?: string;
  children: ReactNode;
  eyebrow?: string;
}

export function PageShell({
  title,
  description,
  canonicalPath,
  intro,
  children,
  eyebrow = "Ópera Surgical Center",
}: PageShellProps) {
  return (
    <BaseLayout>
      <SEO title={title} description={description} canonicalPath={canonicalPath} />
      <motion.div
        className="opera-page-hero relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="opera-page-hero-bg" aria-hidden />
        <div className="opera-page-hero-glow pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative z-10 mx-auto max-w-6xl px-5 pb-16 pt-32 lg:px-8 lg:pb-20 lg:pt-40">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="opera-eyebrow opera-eyebrow-light"
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="opera-display mt-4 max-w-3xl text-opera-ivory"
          >
            {title}
          </motion.h1>
          {intro && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="opera-lead mt-6 max-w-2xl text-opera-warm/75"
            >
              {intro}
            </motion.p>
          )}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={cn("relative z-10")}
      >
        {children}
      </motion.div>
    </BaseLayout>
  );
}
