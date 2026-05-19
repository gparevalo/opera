import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const STEPS_ES = [
  { num: "01", title: "Llegada del especialista", detail: "Acceso directo, parqueo reservado, recepción discreta sin colas." },
  { num: "02", title: "Recepción del paciente", detail: "Ambiente sereno, privacidad total y coordinación previa lista." },
  { num: "03", title: "Preparación preoperatoria", detail: "Área equipada, documentación validada, equipo alineado." },
  { num: "04", title: "Quirófano", detail: "Sala lista antes de tu llegada. Tecnología, esterilidad y silencio operativo." },
  { num: "05", title: "Recuperación", detail: "Área confortable, monitoring dedicado, comunicación con familiares." },
  { num: "06", title: "Post operatorio", detail: "Instrucciones estructuradas, seguimiento coordinado, cierre limpio." },
];

const STEPS_EN = [
  { num: "01", title: "Specialist arrival", detail: "Direct access, reserved parking, discreet reception with no queues." },
  { num: "02", title: "Patient reception", detail: "Serene environment, total privacy, and pre-aligned coordination." },
  { num: "03", title: "Pre-op preparation", detail: "Equipped area, validated documentation, team aligned." },
  { num: "04", title: "Operating room", detail: "Suite ready before you arrive. Technology, sterility, and operative silence." },
  { num: "05", title: "Recovery", detail: "Comfortable area, dedicated monitoring, family communication." },
  { num: "06", title: "Post-operative", detail: "Structured instructions, coordinated follow-up, clean closure." },
];

export function JourneySection() {
  const { language } = useLanguage();
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const steps = language === "es" ? STEPS_ES : STEPS_EN;

  useEffect(() => {
    if (!lineRef.current || !containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 55%",
            scrub: 1.2,
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative overflow-hidden py-28 md:py-40"
      style={{ background: "var(--op-graphite)" }}
    >
      <div className="scene-glow-dark" />
      <div className="grain-overlay" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12">

        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            <span className="t-eyebrow">
              {language === "es" ? "Recorrido quirúrgico" : "Surgical journey"}
            </span>
            <h2 className="t-display mt-5">
              {language === "es"
                ? "Cada etapa, diseñada con precisión."
                : "Every step, designed with precision."}
            </h2>
            <p className="t-lead mt-5">
              {language === "es"
                ? "Un flujo claro, controlado y premium — desde que llegas hasta que el paciente se va. Sin improviso. Sin fricción."
                : "A clear, controlled, premium flow — from the moment you arrive to when the patient leaves. No improvising. No friction."}
            </p>

            {/* Decorative stat */}
            <div className="mt-10 flex gap-8">
              {[
                { v: "6", l: language === "es" ? "Etapas claras" : "Clear stages" },
                { v: "0", l: language === "es" ? "Improvisación" : "Improvisation" },
              ].map(({ v, l }) => (
                <div key={l}>
                  <p className="font-display font-black text-5xl leading-none" style={{ color: "var(--op-amber)" }}>{v}</p>
                  <p className="t-label mt-2">{l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <div ref={containerRef} className="relative pl-10 md:pl-14">
            {/* Animated amber line */}
            <div className="absolute left-0 top-3 bottom-3 w-px" style={{ background: "rgba(255,255,255,0.05)" }}>
              <div
                ref={lineRef}
                className="absolute inset-0 origin-top"
                style={{ background: "linear-gradient(180deg, var(--op-amber) 0%, rgba(95,131,144,0.25) 100%)" }}
              />
            </div>

            <div className="flex flex-col">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pb-10 last:pb-0 group"
                >
                  {/* Node */}
                  <div
                    className="absolute left-[-40px] md:left-[-54px] top-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-400 group-hover:border-[color:var(--op-amber)]"
                    style={{
                      border: "1px solid rgba(95,131,144,0.25)",
                      background: "var(--op-graphite)",
                    }}
                  >
                    <span className="text-[10px] font-bold" style={{ color: "var(--op-amber)" }}>{step.num}</span>
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3
                      className="font-display font-bold text-base mb-2 transition-colors duration-300 group-hover:text-white"
                      style={{ color: "rgba(240,237,232,0.85)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="t-body text-[13px]">{step.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
