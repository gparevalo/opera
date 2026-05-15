import { CinematicSection } from "@/components/site/CinematicSection";
import {
  OperaButtonAnchor,
  OperaButtonLink,
} from "@/components/site/OperaButton";
import { useLanguage } from "@/i18n";
import { whatsappHref } from "@/lib/site";
import { motion } from "framer-motion";

export function FinalCtaSection() {
  const { t, language } = useLanguage();
  const msg =
    language === "es"
      ? "Hola, quiero agendar una visita a Ópera Surgical Center."
      : "Hello, I would like to book a tour at Ópera Surgical Center.";

  return (
    <CinematicSection tone="transparent" innerClassName="!py-20 lg:!py-28">
      <motion.div
        className="opera-cta-panel relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative z-10">
          <h2 className="mx-auto max-w-3xl font-heading text-2xl font-semibold leading-tight tracking-tight text-opera-ivory md:text-3xl">
            {t.home.final.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-opera-warm/75">{t.home.final.sub}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <OperaButtonAnchor
              href={whatsappHref(msg)}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              className="w-full min-w-[200px] sm:w-auto"
            >
              {t.cta.whatsapp}
            </OperaButtonAnchor>
            <OperaButtonLink
              href="/contacto"
              variant="secondary"
              className="w-full min-w-[200px] sm:w-auto"
            >
              {t.cta.schedule}
            </OperaButtonLink>
            <OperaButtonLink
              href="/contacto"
              variant="ghost"
              className="w-full min-w-[200px] sm:w-auto"
            >
              {t.cta.advisor}
            </OperaButtonLink>
          </div>
        </div>
      </motion.div>
    </CinematicSection>
  );
}
