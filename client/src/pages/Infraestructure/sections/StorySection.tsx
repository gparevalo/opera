import { useLanguage } from "@/i18n";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  VisualEquipment,
  VisualOR,
  VisualRecovery,
  VisualSteril,
} from "./VistasSection";

/* ─── Data ──────────────────────────────────────────────────────── */
type FloatCard = {
  label: string;
  value: string;
  x: string;
  y: string;
  delay: number;
};
type Story = {
  num: string;
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
  floats: FloatCard[];
  visualKey: string;
};

const STORIES_ES: Story[] = [
  {
    num: "01",
    eyebrow: "Quirófanos",
    title: "Salas quirúrgicas de clase mundial",
    desc: "Tres quirófanos ISO 7 / Clase C equipados con tecnología de punta para procedimientos de mediana y baja complejidad, con turnover predecible.",
    bullets: [
      "Equipamiento Stryker y Karl Storz",
      "Iluminación LED quirúrgica fría",
      "Mesas operatorias eléctricas",
      "Monitoreo multiparamétrico continuo",
    ],
    floats: [
      {
        label: "Clasificación",
        value: "ISO 7 · Clase C",
        x: "60%",
        y: "10%",
        delay: 0,
      },
      {
        label: "Quirófanos activos",
        value: "3",
        x: "5%",
        y: "55%",
        delay: 0.12,
      },
      {
        label: "Control térmico",
        value: "±0.5 °C",
        x: "62%",
        y: "73%",
        delay: 0.22,
      },
    ],
    visualKey: "or",
  },
  {
    num: "02",
    eyebrow: "Recuperación PACU",
    title: "Recuperación monitorizada",
    desc: "Área post-anestésica con ratio enfermera/paciente 1:2, monitoreo ECG continuo y protocolos de alta temprana segura.",
    bullets: [
      "Monitoreo ECG + SpO₂ permanente",
      "Ratio 1:2 enfermera / paciente",
      "Alta temprana promedio ≤ 4 h",
      "Comunicación directa con el médico",
    ],
    floats: [
      { label: "Satisfacción", value: "≥ 98%", x: "58%", y: "8%", delay: 0 },
      {
        label: "Alta promedio",
        value: "< 4 horas",
        x: "6%",
        y: "60%",
        delay: 0.14,
      },
      { label: "Monitoreo", value: "24 / 7", x: "60%", y: "74%", delay: 0.24 },
    ],
    visualKey: "rec",
  },
  {
    num: "03",
    eyebrow: "Esterilización",
    title: "Esterilización certificada",
    desc: "Ciclo cerrado de esterilización centralizada con trazabilidad total por lote, indicadores biológicos y certificación ARCSA.",
    bullets: [
      "Autoclave clase B con ciclos validados",
      "Indicadores biológicos por ciclo",
      "Trazabilidad completa por lote",
      "Norma ISO 13485 e INEN",
    ],
    floats: [
      {
        label: "Duración del ciclo",
        value: "< 30 min",
        x: "56%",
        y: "9%",
        delay: 0,
      },
      { label: "Trazabilidad", value: "100%", x: "6%", y: "58%", delay: 0.15 },
      { label: "Norma", value: "ISO 13485", x: "58%", y: "73%", delay: 0.25 },
    ],
    visualKey: "steril",
  },
  {
    num: "04",
    eyebrow: "Equipamiento",
    title: "Tecnología médica avanzada",
    desc: "Equipamiento quirúrgico de marcas líderes mundiales disponible para todos los especialistas sin inversión inicial.",
    bullets: [
      "Torres laparoscópicas 4K Karl Storz",
      "Fluoroscopía con arco en C",
      "Electrobisturí bipolar avanzado",
      "Ultrasonido intraoperatorio",
    ],
    floats: [
      {
        label: "Marca líder",
        value: "Karl Storz · Stryker",
        x: "48%",
        y: "8%",
        delay: 0,
      },
      {
        label: "Soporte técnico",
        value: "24 / 7",
        x: "5%",
        y: "58%",
        delay: 0.14,
      },
      {
        label: "Inversión inicial",
        value: "$ 0",
        x: "60%",
        y: "74%",
        delay: 0.22,
      },
    ],
    visualKey: "equip",
  },
];

const STORIES_EN: Story[] = [
  {
    num: "01",
    eyebrow: "Operating Suites",
    title: "World-class operating rooms",
    desc: "Three ISO 7 / Class C operating rooms equipped with cutting-edge technology for medium and low complexity procedures, with predictable turnover.",
    bullets: [
      "Stryker & Karl Storz equipment",
      "Cold LED surgical lighting",
      "Electric operating tables",
      "Continuous multiparameter monitoring",
    ],
    floats: [
      {
        label: "Classification",
        value: "ISO 7 · Class C",
        x: "60%",
        y: "10%",
        delay: 0,
      },
      { label: "Active ORs", value: "3", x: "5%", y: "55%", delay: 0.12 },
      {
        label: "Thermal control",
        value: "±0.5 °C",
        x: "62%",
        y: "73%",
        delay: 0.22,
      },
    ],
    visualKey: "or",
  },
  {
    num: "02",
    eyebrow: "PACU Recovery",
    title: "Monitored recovery",
    desc: "Post-anesthesia care unit with 1:2 nurse/patient ratio, continuous ECG monitoring and safe early discharge protocols.",
    bullets: [
      "Continuous ECG + SpO₂ monitoring",
      "1:2 nurse / patient ratio",
      "Average early discharge ≤ 4 h",
      "Direct communication with the physician",
    ],
    floats: [
      { label: "Satisfaction", value: "≥ 98%", x: "58%", y: "8%", delay: 0 },
      {
        label: "Average discharge",
        value: "< 4 hours",
        x: "6%",
        y: "60%",
        delay: 0.14,
      },
      { label: "Monitoring", value: "24 / 7", x: "60%", y: "74%", delay: 0.24 },
    ],
    visualKey: "rec",
  },
  {
    num: "03",
    eyebrow: "Sterilization",
    title: "Certified sterilization",
    desc: "Closed-loop centralized sterilization with full lot traceability, biological indicators, and ARCSA certification.",
    bullets: [
      "Class B autoclave with validated cycles",
      "Biological indicators per cycle",
      "Full lot traceability",
      "ISO 13485 & INEN standard",
    ],
    floats: [
      {
        label: "Cycle duration",
        value: "< 30 min",
        x: "56%",
        y: "9%",
        delay: 0,
      },
      { label: "Traceability", value: "100%", x: "6%", y: "58%", delay: 0.15 },
      {
        label: "Standard",
        value: "ISO 13485",
        x: "58%",
        y: "73%",
        delay: 0.25,
      },
    ],
    visualKey: "steril",
  },
  {
    num: "04",
    eyebrow: "Equipment",
    title: "Advanced medical technology",
    desc: "World-leading surgical equipment available for all specialists with zero upfront investment.",
    bullets: [
      "4K Karl Storz laparoscopic towers",
      "C-arm fluoroscopy",
      "Advanced bipolar electrosurgery",
      "Intraoperative ultrasound",
    ],
    floats: [
      {
        label: "Leading brand",
        value: "Karl Storz · Stryker",
        x: "48%",
        y: "8%",
        delay: 0,
      },
      {
        label: "Tech support",
        value: "24 / 7",
        x: "5%",
        y: "58%",
        delay: 0.14,
      },
      { label: "Upfront cost", value: "$ 0", x: "60%", y: "74%", delay: 0.22 },
    ],
    visualKey: "equip",
  },
];

/* ─── Abstract SVG Visuals ─────────────────────────────────────── */
const VISUALS: Record<string, () => JSX.Element> = {
  or: VisualOR,
  rec: VisualRecovery,
  steril: VisualSteril,
  equip: VisualEquipment,
};

/* ─── Floating Glass Card ──────────────────────────────────────── */
function FloatCard({ card }: { card: FloatCard }) {
  const y = useMotionValue(0);
  const springY = useSpring(y, { stiffness: 60, damping: 12 });
  useEffect(() => {
    let frame: number;
    const t0 = Date.now() + card.delay * 1000;
    const tick = () => {
      const t = (Date.now() - t0) / 1000;
      y.set(Math.sin(t * 0.9) * 5);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [card.delay, y]);

  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{ left: card.x, top: card.y, y: springY }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{
        duration: 0.55,
        delay: card.delay + 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.78)",
          backdropFilter: "blur(16px) saturate(1.6)",
          WebkitBackdropFilter: "blur(16px) saturate(1.6)",
          border: "1px solid rgba(43,122,140,0.14)",
          borderRadius: "12px",
          padding: "8px 14px",
          boxShadow:
            "0 4px 20px rgba(43,122,140,0.1), 0 1px 3px rgba(0,0,0,0.06)",
          whiteSpace: "nowrap",
        }}
      >
        <p
          style={{
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(43,122,140,0.7)",
            marginBottom: 2,
          }}
        >
          {card.label}
        </p>
        <p
          style={{
            fontSize: "13px",
            fontWeight: 700,
            color: "#0B0E12",
            lineHeight: 1.2,
          }}
        >
          {card.value}
        </p>
      </div>
    </motion.div>
  );
}

export function StorySection() {
  const { language } = useLanguage();
  const stories = language === "es" ? STORIES_ES : STORIES_EN;
  const [active, setActive] = useState(0);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollColRef = useRef<HTMLDivElement | null>(null);
  const VisualComponent = VISUALS[stories[active].visualKey];

  /* Scroll-position based active tracking — more reliable than IO alone */
  useEffect(() => {
    const onScroll = () => {
      const refs = blockRefs.current.filter(Boolean) as HTMLDivElement[];
      const vpMid = window.scrollY + window.innerHeight * 0.5;
      let best = 0;
      refs.forEach((el, i) => {
        const top = el.getBoundingClientRect().top + window.scrollY;
        const bottom = top + el.offsetHeight;
        if (vpMid >= top && vpMid <= bottom) best = i;
      });
      setActive(best);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [stories]);

  const scrollTo = (i: number) =>
    blockRefs.current[i]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

  /* ───────────────────────────────
     OPTIONAL: sync active with scroll
     ─────────────────────────────── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActive(index);
          }
        });
      },
      {
        root: null,
        threshold: 0.55,
      },
    );

    blockRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [blockRefs, setActive]);

  return (
    <div className="relative w-full overflow-visible">
      {/* ── Storytelling layout: sticky-left + scroll-right ── */}
      {/* On desktop: flex-row. Left = ONE unified sticky panel (timeline + visual). Right = tall scroll column. */}
      <div
        className="flex flex-col lg:flex-row lg:gap-16"
        style={{ alignItems: "flex-start" }}
      >
        {/* ════ UNIFIED STICKY PANEL (desktop only) ════ */}
        <div
          className="hidden lg:flex flex-row gap-8 shrink-0"
          style={{
            position: "sticky",
            top: "88px",
            alignSelf: "flex-start",
            width: 540,
          }}
        >
          {/* Numbered timeline */}
          <div
            className="flex flex-col items-center pt-1"
            style={{ width: 40 }}
          >
            {stories.map((s, i) => (
              <button
                key={s.num}
                onClick={() => scrollTo(i)}
                className="flex flex-col items-center"
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
              >
                <motion.span
                  animate={{
                    color: active === i ? "#2B7A8C" : "rgba(0,34,63,0.18)",
                    scale: active === i ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display font-bold tabular-nums"
                  style={{
                    fontSize: "13px",
                    letterSpacing: "0.05em",
                    lineHeight: 1,
                    display: "block",
                  }}
                >
                  {s.num}
                </motion.span>
                {i < stories.length - 1 && (
                  <div
                    style={{
                      width: 1,
                      height: 88,
                      position: "relative",
                      margin: "8px 0",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,34,63,0.07)",
                      }}
                    />
                    <motion.div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        background: "#2B7A8C",
                        transformOrigin: "top",
                      }}
                      animate={{ scaleY: active > i ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Visual panel */}
          <div style={{ flex: 1, position: "relative" }}>
            <div
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid var(--op-border)",
                boxShadow:
                  "0 24px 64px rgba(43,122,140,0.12), 0 4px 16px rgba(0,0,0,0.05)",
                background: "var(--op-canvas)",
                aspectRatio: "520 / 420",
                position: "relative",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={stories[active].visualKey}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.04, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <VisualComponent />
                </motion.div>
              </AnimatePresence>

              {/* Floating glass cards */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`fc-${stories[active].visualKey}`}
                  className="absolute inset-0 pointer-events-none"
                >
                  {stories[active].floats.map((fc) => (
                    <FloatCard key={fc.label} card={fc} />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot progress bar */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {stories.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => scrollTo(i)}
                  animate={{
                    width: active === i ? 28 : 7,
                    background:
                      active === i ? "#2B7A8C" : "rgba(43,122,140,0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    height: 4,
                    borderRadius: 99,
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                  aria-label={stories[i].num}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ════ MOBILE: horizontal stepper ════ */}
        <div className="flex lg:hidden items-center justify-center gap-3 mb-8">
          {stories.map((s, i) => (
            <button
              key={s.num}
              onClick={() => scrollTo(i)}
              className="flex items-center gap-2"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <motion.span
                animate={{
                  color: active === i ? "#2B7A8C" : "rgba(0,34,63,0.25)",
                }}
                style={{ fontWeight: active === i ? 700 : 500 }}
                className="text-sm font-display tabular-nums"
              >
                {s.num}
              </motion.span>
              {i < stories.length - 1 && (
                <span
                  style={{
                    width: 20,
                    height: 1,
                    background: "rgba(0,34,63,0.1)",
                    display: "block",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* ════ SCROLL CONTENT COLUMN ════ */}
        <div ref={scrollColRef} className="flex-1 flex flex-col">
          {stories.map((story, i) => (
            <div
              key={story.num}
              ref={(el) => {
                blockRefs.current[i] = el;
              }}
              className="flex flex-col justify-center"
              style={{
                minHeight: "85vh",
                paddingTop: "6vh",
                paddingBottom: "6vh",
              }}
            >
              {/* Mobile: visual above text */}
              <div
                className="flex lg:hidden mb-8 rounded-2xl overflow-hidden relative"
                style={{
                  border: "1px solid var(--op-border)",
                  boxShadow: "0 8px 32px rgba(43,122,140,0.08)",
                  background: "var(--op-canvas)",
                  aspectRatio: "520/420",
                }}
              >
                {(() => {
                  const V = VISUALS[story.visualKey];
                  return <V />;
                })()}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-15% 0px -15% 0px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="t-eyebrow mb-4 inline-flex">
                  {story.eyebrow}
                </span>
                <h3
                  className="t-headline mt-4 mb-5"
                  style={{ maxWidth: "440" }}
                >
                  {story.title}
                </h3>
                <p
                  className="t-body mb-8"
                  style={{ maxWidth: 420, lineHeight: 1.8 }}
                >
                  {story.desc}
                </p>

                <ul className="flex flex-col gap-3.5 mb-10">
                  {story.bullets.map((b, j) => (
                    <motion.li
                      key={b}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: "var(--op-slate)" }}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-15% 0px -15% 0px" }}
                      transition={{
                        duration: 0.45,
                        delay: j * 0.07,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <CheckCircle2
                        className="h-4 w-4 shrink-0"
                        style={{ color: "#2B7A8C" }}
                      />
                      {b}
                    </motion.li>
                  ))}
                </ul>

                {i === stories.length - 1 ? (
                  <Link href="/contacto">
                    <span className="btn btn-amber flex w-fit items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {language === "es"
                        ? "Agendar visita"
                        : "Schedule a visit"}
                    </span>
                  </Link>
                ) : (
                  <button
                    onClick={() => scrollTo(i + 1)}
                    className="btn btn-ghost flex w-fit items-center gap-2"
                  >
                    {language === "es" ? "Siguiente área" : "Next area"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
