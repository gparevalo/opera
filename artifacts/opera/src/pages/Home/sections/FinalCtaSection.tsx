import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { whatsappHref } from "@/lib/site";
import { CalendarDays, MessageCircle } from "lucide-react";

export function FinalCtaSection() {
  const { t, language } = useLanguage();

  const whatsappMsg =
    language === "es"
      ? "Hola, me gustaría agendar una visita a Ópera Surgical Center."
      : "Hello, I'd like to book a tour at Ópera Surgical Center.";

  return (
    <section
      className="opera-section py-24 md:py-36"
      style={{
        background: "linear-gradient(180deg, #060e16 0%, #003a5c 40%, #060e16 100%)",
      }}
    >
      <div className="mx-auto max-w-4xl px-5 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="opera-cta-panel"
        >
          {/* Background rings */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 600 360">
              <circle cx="300" cy="180" r="200" fill="none" stroke="white" strokeWidth="1" />
              <circle cx="300" cy="180" r="140" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="300" cy="180" r="80" fill="none" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="relative z-10">
            <p className="opera-eyebrow opera-eyebrow-light mb-4">
              Ópera Surgical Center
            </p>
            <h2 className="opera-display max-w-2xl mx-auto text-center">
              {t.home.final.title}
            </h2>
            <p className="opera-lead mt-4 max-w-xl mx-auto text-center">
              {t.home.final.sub}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contacto">
                <span className="opera-btn opera-btn-primary text-[15px] px-7 py-4">
                  <CalendarDays className="h-5 w-5" aria-hidden />
                  {t.nav.visit}
                </span>
              </Link>
              <a
                href={whatsappHref(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="opera-btn opera-btn-whatsapp text-[15px] px-7 py-4"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
