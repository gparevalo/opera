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
    <section className="relative overflow-hidden" style={{ background: "var(--op-canvas)" }}>
      <div className="scene-glow-dark" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-32 md:py-48">

        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:items-start">

          {/* Left — sticky heading */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            <span className="t-eyebrow mb-5 inline-flex">
              {language === "es" ? "Recorrido quirúrgico" : "Surgical journey"}
            </span>
            <h2 className="t-display mt-5">
              {language === "es"
                ? "Cada etapa, diseñada con precisión."
                : "Every step, designed with precision."}
            </h2>
            <p className="t-lead mt-5">
              {language === "es"
                ? "Un flujo claro, controlado y premium — desde que llegas hasta que el paciente se va. Sin improviso."
                : "A clear, controlled, premium flow — from arrival to discharge. No improvising."}
            </p>

            <div className="mt-10 flex gap-10">
              {[
                { v: "6", l: language === "es" ? "Etapas claras" : "Clear stages" },
                { v: "0", l: language === "es" ? "Improvisación" : "Improvisation" },
              ].map(({ v, l }) => (
                <div key={l}>
                  <p className="font-display font-bold text-5xl leading-none" style={{ color: "var(--op-amber)" }}>{v}</p>
                  <p className="t-label mt-2">{l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — timeline */}
          <div ref={containerRef} className="relative pl-12 md:pl-14">
            {/* Animated line */}
            <div className="absolute left-0 top-3 bottom-3 w-px" style={{ background: "var(--op-border)" }}>
              <div
                ref={lineRef}
                className="absolute inset-0 origin-top"
                style={{ background: "linear-gradient(180deg, var(--op-amber) 0%, rgba(43,122,140,0.2) 100%)" }}
              />
            </div>

            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.75, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pb-10 last:pb-0 group"
                >
                  {/* Node */}
                  <div
                    className="absolute left-[-48px] md:left-[-56px] top-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-400"
                    style={{
                      border: "1px solid var(--op-border)",
                      background: "var(--op-surface)",
                      boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                    }}
                  >
                    <span className="text-[10px] font-bold" style={{ color: "var(--op-amber)" }}>{step.num}</span>
                  </div>

                  {/* Card */}
                  <div className="card p-5 group-hover:border-[color:var(--op-border-teal)]" style={{ borderRadius: "1.25rem" }}>
                    <h3 className="font-display font-semibold text-base mb-1.5" style={{ color: "var(--op-ink)" }}>
                      {step.title}
                    </h3>
                    <p className="t-body text-[13.5px]">{step.detail}</p>
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
