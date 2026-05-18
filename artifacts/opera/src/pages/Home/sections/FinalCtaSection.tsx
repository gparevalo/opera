import { motion } from "framer-motion";
import { useLanguage } from "@/i18n";
import { Link } from "wouter";
import { whatsappHref } from "@/lib/site";
import { Calendar } from "lucide-react";

export function FinalCtaSection() {
  const { language } = useLanguage();

  const whatsappMsg =
    language === "es"
      ? "Hola, quisiera agendar un recorrido privado por Ópera Surgical Center."
      : "Hello, I'd like to book a private tour at Ópera Surgical Center.";

  return (
    <section
      className="relative overflow-hidden py-28 md:py-40"
      style={{ background: "var(--op-ink)" }}
    >
      {/* Deep background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden style={{
        background: `
          radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 65%),
          radial-gradient(ellipse 60% 80% at 80% 20%, rgba(0,72,117,0.18) 0%, transparent 60%),
          radial-gradient(ellipse 50% 60% at 20% 80%, rgba(0,72,117,0.12) 0%, transparent 55%)
        `
      }} />

      {/* Architectural SVG */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <svg className="w-full h-full opacity-[0.03]" viewBox="0 0 1400 700" preserveAspectRatio="xMidYMid slice">
          <circle cx="700" cy="350" r="450" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="700" cy="350" r="300" fill="none" stroke="white" strokeWidth="0.75" />
          <circle cx="700" cy="350" r="160" fill="none" stroke="white" strokeWidth="0.5" />
          <line x1="0" y1="350" x2="1400" y2="350" stroke="white" strokeWidth="0.5" />
          <line x1="700" y1="0" x2="700" y2="700" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="grain-overlay" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-5 md:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="cta-panel-dark py-20 md:py-28 px-8 md:px-16 text-center"
        >
          {/* Eyebrow */}
          <span className="t-eyebrow justify-center">
            {language === "es" ? "¿Listo para operar en Ópera?" : "Ready to operate at Ópera?"}
          </span>

          {/* Headline — very large */}
          <h2
            className="font-display font-black leading-[1.0] tracking-tight mt-8 mx-auto max-w-4xl"
            style={{ fontSize: "clamp(2.25rem, 6vw, 5rem)", color: "var(--op-white)" }}
          >
            {language === "es" ? (
              <>
                No construyas una clínica.<br />
                <span className="gradient-text-amber">Opera en una ya diseñada</span><br />
                para crecer contigo.
              </>
            ) : (
              <>
                Don't build a clinic.<br />
                <span className="gradient-text-amber">Operate in one already designed</span><br />
                to grow with you.
              </>
            )}
          </h2>

          {/* Sub */}
          <p className="t-lead mt-8 mx-auto max-w-xl">
            {language === "es"
              ? "Agenda una llamada o visita. Te mostramos el centro, los flujos y la coordinación — sin presión, con total transparencia."
              : "Book a call or visit. We'll show you the center, workflows, and coordination — no pressure, total transparency."}
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contacto">
              <span className="btn btn-amber btn-lg flex items-center gap-2.5">
                <Calendar className="h-5 w-5" />
                {language === "es" ? "Agendar recorrido privado" : "Book private tour"}
              </span>
            </Link>
            <a
              href={whatsappHref(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-lg"
            >
              {language === "es" ? "WhatsApp directo" : "WhatsApp direct"}
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-14 flex flex-wrap justify-center gap-8">
            {[
              language === "es" ? "Sin compromisos" : "No commitments",
              language === "es" ? "Respuesta en 24h" : "24h response",
              language === "es" ? "Recorrido gratuito" : "Free tour",
            ].map((label) => (
              <div key={label} className="flex items-center gap-2">
                <div className="amber-dot" />
                <span className="text-[13px] font-medium" style={{ color: "rgba(196,200,204,0.5)" }}>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
