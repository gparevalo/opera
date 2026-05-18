import { useRef, useEffect } from "react";
import { useLanguage } from "@/i18n";
import { SectionHeader } from "@/components/site/SectionHeader";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [1, 2, 3, 4, 5] as const;

export function ProcessSection() {
  const { t } = useLanguage();
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
            start: "top 70%",
            end: "bottom 60%",
            scrub: 1,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="opera-section opera-section-midnight py-24 md:py-36">
      <div className="scene-glow" />
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          {/* Left sticky header */}
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow={t.home.process.eyebrow}
              title={t.home.process.title}
              subtitle={t.home.process.subtitle}
              light
            />
            {/* Process visual accent */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-opera-amber/40 to-transparent" />
              <div className="h-2 w-2 rounded-full bg-opera-amber/60" />
            </div>
          </div>

          {/* Right: steps */}
          <div ref={containerRef} className="relative">
            {/* Animated vertical line */}
            <div
              className="absolute left-5 top-3 bottom-3 w-px origin-top"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <div
                ref={lineRef}
                className="absolute inset-0 origin-top"
                style={{
                  background: "linear-gradient(180deg, #ae9338 0%, rgba(174,147,56,0.2) 100%)",
                }}
              />
            </div>

            <div className="flex flex-col gap-0">
              {STEPS.map((step, i) => {
                const s = t.home.process.steps[String(step) as "1"];
                return (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative pl-14 pb-10 last:pb-0"
                  >
                    {/* Step dot */}
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-opera-amber/40 bg-[#0a1a24] text-opera-amber">
                      <span className="text-xs font-bold">{step}</span>
                    </div>

                    <div className="pt-1.5">
                      <h3 className="font-heading font-bold text-opera-ivory text-base mb-2">{s.title}</h3>
                      <p className="text-sm leading-relaxed text-opera-ivory/55">{s.body}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
