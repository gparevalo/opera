import { OperaButtonLink } from "@/components/site/OperaButton";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <div className="opera-canvas flex min-h-screen items-center justify-center px-6">
      <motion.div
        className="relative text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="pointer-events-none absolute -inset-24 rounded-full bg-opera-blue/20 blur-3xl"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity }}
          aria-hidden
        />
        <span className="relative font-heading text-8xl font-bold gradient-text-opera">
          404
        </span>
        <h1 className="relative mt-4 font-heading text-3xl font-semibold text-opera-ivory md:text-4xl">
          {t.notFound.title}
        </h1>
        <p className="relative mx-auto mt-3 max-w-md text-opera-warm/65">
          {t.notFound.description}
        </p>
        <OperaButtonLink href="/" variant="secondary" className="relative mt-8">
          <ArrowLeft className="h-4 w-4" aria-hidden />
          {t.notFound.button}
        </OperaButtonLink>
      </motion.div>
    </div>
  );
}
