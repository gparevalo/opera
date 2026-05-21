import { SeoHead } from "@/components/SeoHead";
import PremiumButtonRef from "@/components/site/PremiumButtonRef";
import { PremiumHero } from "@/components/site/PremiumHero";
import { useLanguage } from "@/i18n";
import { Layout } from "@/layout/Layout";
import { whatsappHref } from "@/lib/site";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CalendarDays,
  CheckCircle2,
  MessageCircle,
  Settings,
  Shield,
  Star,
} from "lucide-react";
import { Link } from "wouter";

const SECTION_ICONS = [Star, Settings, Shield, CalendarDays];

const SPECIALTY_KEYS = [
  "plastic",
  "derm",
  "gyn",
  "uro",
  "ent",
  "oph",
  "vascular",
  "maxilo",
] as const;

export default function SpecialtiesPage() {
  const { t, language } = useLanguage();
  const items = t.specialties_page.items;
  const sp = t.specialists_page;

  const SECTIONS = [
    {
      key: "why_title" as const,
      bodyKey: "why" as const,
      icon: SECTION_ICONS[0],
    },
    {
      key: "how_title" as const,
      bodyKey: "how" as const,
      icon: SECTION_ICONS[1],
    },
    {
      key: "back_title" as const,
      bodyKey: "back" as const,
      icon: SECTION_ICONS[2],
    },
    {
      key: "schedule_title" as const,
      bodyKey: "schedule" as const,
      icon: SECTION_ICONS[3],
    },
  ];

  const whatsappMsg =
    language === "es"
      ? "Hola, me gustaría consultar sobre una especialidad en Ópera Surgical Center."
      : "Hello, I'd like to ask about a specialty at Ópera Surgical Center.";

  return (
    <>
      <SeoHead
        title="Especialidades Médicas en Quito | Ópera Surgical Center"
        description="Cirugía plástica, traumatología, ginecología, urología y cirugía general en Quito. Infraestructura quirúrgica premium con soporte perioperatorio dedicado en Ópera Surgical Center."
        path="/especialidades"
        ogTitle="Especialidades Médicas · Ópera Surgical Center Quito"
        ogDescription="Cirugía plástica, traumatología, ginecología, urología y cirugía general. Quirófanos premium y soporte perioperatorio 360° en Quito, Ecuador."
      />

      <Layout>
        {/* ── Hero ── */}
        <PremiumHero
          eyebrow={t.home.b2b.eyebrow}
          title={sp.title}
          description={sp.intro}
          image="/clinica/med3.png"
          actions={[
            {
              label: t.nav.visit,
              href: "/contacto",
            },
          ]}
        />

        {/* ── Content ── */}
        <section
          className="relative overflow-hidden"
          style={{
            background: "var(--op-surface)",
            borderTop: "1px solid var(--op-border)",
            borderBottom: "1px solid var(--op-border)",
          }}
        >
          <div className="scene-glow-dark" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-24 md:py-36">
            {/* Centered header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-center md:text-center  mb-0 md:mb-10 w-max-3xl "
            >
              <span className="t-eyebrow mb-5 inline-flex">
                {language === "es" ? "Por qué Ópera" : "Why Ópera"}
              </span>
              <h2
                style={{ maxWidth: "70%" }}
                className=" mt-5 mx-auto 
                            font-display
                            text-5xl
                            md:text-7xl
                            leading-[0.95]
                            tracking-tight
                            text-primary"
              >
                {language === "es"
                  ? "El estándar operativo detrás de cada procedimiento."
                  : "El estándar operativo detrás de cada procedimiento"}
              </h2>
              <p className="t-lead mt-5 text-xl leading-snug tracking-tight ">
                {language === "es"
                  ? "La experiencia quirúrgica comienza mucho antes del procedimiento."
                  : "Don't invest in construction. Operate in an environment already designed for predictable results."}
              </p>
            </motion.div>
            <div className="grid gap-5 md:grid-cols-2">
              {SECTIONS.map(({ key, bodyKey, icon: Icon }, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.75,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="card-glass p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="icon-well shrink-0">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <h2
                        className="t-headline mb-3"
                        style={{ fontSize: "1.125rem" }}
                      >
                        {sp[key] as string}
                      </h2>
                      <p className="t-body text-sm leading-relaxed">
                        {sp[bodyKey] as string}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-16 text-center md:text-center  mb-0 md:mb-10 w-full ">
              <PremiumButtonRef href="/contacto">
                {language === "es"
                  ? "Consultar disponibilidad"
                  : "Check availability"}
              </PremiumButtonRef>
            </div>
          </div>
        </section>

        <section
          className="relative overflow-hidden"
          style={{
            background: "var(--op-surface)",
            borderTop: "1px solid var(--op-border)",
            borderBottom: "1px solid var(--op-border)",
          }}
        >
          <div className="scene-glow-dark" />

          <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-32 md:py-48">
            <div className="grid gap-16 lg:grid-cols-[1fr_1.6fr] lg:items-center">
              {/* Left — heading */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mb-8">
                  <span className="t-eyebrow">{t.home.b2b.eyebrow}</span>
                  <h2
                    className="mt-5 
                font-display
                text-5xl
                md:text-7xl
                leading-[0.95]
                tracking-tight
                text-primary"
                  >
                    {t.home.b2b.title}
                  </h2>
                </div>
              </motion.div>

              {/* Right — pill cloud */}
              <div className="flex flex-wrap gap-2.5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {Object.values(t.home.b2b.points).map((point) => (
                    <div key={point.title} className="flex items-start gap-3">
                      <CheckCircle2
                        className="h-5 w-5 shrink-0 mt-0.5"
                        style={{ color: "var(--op-amber)" }}
                        aria-hidden
                      />
                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: "var(--op-ink)" }}
                        >
                          {point.title}
                        </p>
                        <p
                          className="text-xs leading-relaxed mt-0.5"
                          style={{ color: "var(--op-mist)" }}
                        >
                          {point.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Specialty cards ── */}
        <section
          className="relative overflow-hidden"
          style={{
            background: "var(--op-surface)",
            borderTop: "1px solid var(--op-border)",
            borderBottom: "1px solid var(--op-border)",
          }}
        >
          <div className="scene-glow-dark" />
          <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-24 md:py-36">
            {/* Centered header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-center md:text-center  mb-0 md:mb-10 w-max-3xl "
            >
              <span className="t-eyebrow mb-5 inline-flex">
                {language === "es"
                  ? "Especialidades quirúrgicas"
                  : "Especialidades quirúrgicas"}
              </span>
              <h2
                style={{ maxWidth: "70%" }}
                className=" mt-5 mx-auto 
                            font-display
                            text-5xl
                            md:text-7xl
                            leading-[0.95]
                            tracking-tight
                            text-primary"
              >
                {language === "es"
                  ? "Trae tu práctica a un entorno diseñado para operar con precisión"
                  : "Trae tu práctica a un entorno diseñado para operar con precisión"}
              </h2>
              <p className="t-lead mt-5 text-xl leading-snug tracking-tight  px-20">
                {language === "es"
                  ? "Infraestructura, coordinación y soporte clínico diseñados para integrarse naturalmente a tu práctica quirúrgica."
                  : "Infraestructura, coordinación y soporte clínico diseñados para integrarse naturalmente a tu práctica quirúrgica."}
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {SPECIALTY_KEYS.map((key, i) => {
                const item = items[key];
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.09,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="card-glass group p-7 flex flex-col"
                  >
                    <div
                      className="h-px w-12 mb-6 transition-all duration-500 group-hover:w-full rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, var(--op-amber), var(--op-warm))",
                      }}
                    />
                    <h2
                      className="t-headline mb-3"
                      style={{ fontSize: "1.125rem" }}
                    >
                      {item.name}
                    </h2>
                    <p className="t-body text-sm leading-relaxed mb-6 flex-1">
                      {item.desc}
                    </p>
                    <a
                      href={whatsappHref(
                        language === "es"
                          ? `Hola, quiero información sobre ${item.name} en Ópera.`
                          : `Hello, I'd like info about ${item.name} at Ópera.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3 mt-auto"
                      style={{ color: "var(--op-amber)" }}
                    >
                      {language === "es"
                        ? "Consultar disponibilidad"
                        : "Check availability"}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="relative overflow-hidden"
          style={{
            background: "var(--op-canvas)",
            borderTop: "1px solid var(--op-border)",
          }}
        >
          <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-24 md:py-36">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="cta-panel-dark py-16 px-8 md:px-14 text-center"
            >
              <span
                className="t-eyebrow inline-flex"
                style={{
                  background: "rgba(43,122,140,0.12)",
                  borderColor: "rgba(43,122,140,0.25)",
                  color: "rgba(90,175,192,0.9)",
                }}
              >
                {language === "es" ? "Conversemos" : "Let's talk"}
              </span>
              <h2
                className="t-display mt-6 mx-auto max-w-2xl"
                style={{ color: "#FFFFFF" }}
              >
                {t.specialties_page.cta_title}
              </h2>
              <p
                className="mt-4 mx-auto max-w-lg"
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "rgba(155,185,195,0.75)",
                }}
              >
                {t.specialties_page.cta_body}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/contacto">
                  <span className="btn btn-white btn-lg flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    {t.nav.visit}
                  </span>
                </Link>
                <a
                  href={whatsappHref(whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg flex items-center gap-2"
                  style={{
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(200,220,225,0.85)",
                    borderRadius: "100px",
                    padding: "1.125rem 2.5rem",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                  }}
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
}
