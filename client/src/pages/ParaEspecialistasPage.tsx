import { CinematicSection } from "@/components/site/CinematicSection";
import { GlassCard } from "@/components/site/GlassCard";
import {
  OperaButtonAnchor,
  OperaButtonLink,
} from "@/components/site/OperaButton";
import { PageShell } from "@/components/site/PageShell";
import { useLanguage } from "@/i18n";
import { whatsappHref } from "@/lib/site";
import { motion } from "framer-motion";

export default function ParaEspecialistasPage() {
  const { t, language } = useLanguage();
  const title = t.specialists_page.title;
  const description =
    language === "es"
      ? "Por qué operar en Ópera: respaldo quirúrgico para especialistas en Quito."
      : "Why operate at Ópera: surgical backing for specialists in Quito.";

  const msg =
    language === "es"
      ? "Hola, soy especialista y quiero información para operar en Ópera Surgical Center."
      : "Hello, I am a specialist and want information about operating at Ópera Surgical Center.";

  const blocks = [
    ["why_title", "why"],
    ["how_title", "how"],
    ["back_title", "back"],
    ["schedule_title", "schedule"],
  ] as const;

  return (
    <PageShell
      title={title}
      description={description}
      canonicalPath="/para-especialistas"
      intro={t.specialists_page.intro}
      eyebrow="B2B · Especialistas"
    >
      <CinematicSection tone="midnight" innerClassName="!pt-0">
        <motion.div
          className="mb-10 flex flex-col gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <OperaButtonLink href="/contacto" variant="secondary">
            {t.nav.visit}
          </OperaButtonLink>
          <OperaButtonAnchor
            href={whatsappHref(msg)}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
          >
            {t.cta.whatsapp}
          </OperaButtonAnchor>
        </motion.div>

        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {blocks.map(([hk, bk]) => (
            <motion.div
              key={hk}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <GlassCard dark className="h-full">
                <h2 className="font-heading text-lg font-semibold text-opera-ivory">
                  {t.specialists_page[hk]}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-opera-warm/75 md:text-base">
                  {t.specialists_page[bk]}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </CinematicSection>
    </PageShell>
  );
}
