import { CinematicSection } from "@/components/site/CinematicSection";
import { GlassCard } from "@/components/site/GlassCard";
import { OperaButtonLink } from "@/components/site/OperaButton";
import { PageShell } from "@/components/site/PageShell";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";

const keys = ["plastic", "trauma", "gyn", "uro", "general"] as const;

export default function EspecialidadesPage() {
  const { t, language } = useLanguage();
  const title = t.specialties_page.title;
  const description =
    language === "es"
      ? "Especialidades quirúrgicas en Ópera Surgical Center, Quito."
      : "Surgical specialties at Ópera Surgical Center, Quito.";

  return (
    <PageShell
      title={title}
      description={description}
      canonicalPath="/especialidades"
      intro={t.specialties_page.intro}
    >
      <CinematicSection tone="ivory" innerClassName="!pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          {keys.map((key, i) => {
            const item = t.specialties_page.items[key];
            return (
              <GlassCard
                key={key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col"
              >
                <h2 className="font-heading text-xl font-semibold text-[#1E1E1E]">
                  {item.name}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#004875]/70">
                  {item.desc}
                </p>
                <ul className="mt-6 space-y-2 border-t border-opera-blue/10 pt-5 text-sm text-[#004875]/60">
                  <li className="flex gap-2">
                    <span className="text-opera-amber">·</span>
                    {language === "es"
                      ? "Protocolos y soporte perioperatorio alineados al especialista."
                      : "Protocols and perioperative support aligned with the specialist."}
                  </li>
                  <li className="flex gap-2">
                    <span className="text-opera-amber">·</span>
                    {language === "es"
                      ? "Infraestructura pensada para flujo y seguridad."
                      : "Infrastructure designed for flow and safety."}
                  </li>
                </ul>
              </GlassCard>
            );
          })}
        </div>
      </CinematicSection>

      <CinematicSection tone="deep">
        <motion.div
          className="opera-cta-panel !py-10 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-2xl font-semibold text-opera-ivory">
            {t.specialties_page.cta_title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-opera-warm/75">
            {t.specialties_page.cta_body}
          </p>
          <OperaButtonLink href="/contacto" variant="secondary" className="mt-8">
            {t.nav.contact}
          </OperaButtonLink>
        </motion.div>
      </CinematicSection>
    </PageShell>
  );
}
