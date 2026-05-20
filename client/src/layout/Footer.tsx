import { useLanguage } from "@/i18n";
import { OPERA_CONTACT_EMAIL, whatsappHref } from "@/lib/site";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Instagram, Linkedin, Youtube } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

const COLS = {
  es: [
    {
      title: "Centro",
      links: [
        { label: "Nosotros", href: "/nosotros" },
        { label: "Infraestructura", href: "/infraestructura" },
        { label: "Misión y valores", href: "/nosotros" },
        { label: "Nuestro equipo", href: "/nosotros" },
      ],
    },
    {
      title: "Servicios",
      links: [
        { label: "Especialidades", href: "/especialidades" },
        { label: "Quirófanos", href: "/infraestructura" },
        { label: "Coordinación", href: "/contacto" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "Proceso quirúrgico", href: "/especialidades" },
        { label: "Guía del especialista", href: "/especialidades" },
        { label: "Tecnología médica", href: "/infraestructura" },
        { label: "Preguntas frecuentes", href: "/contacto" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Contacto", href: "/contacto" },
        { label: "Agendar visita", href: "/contacto" },
        { label: "Quito, Ecuador", href: "/contacto" },
        { label: "Privacidad", href: "/" },
      ],
    },
  ],
  en: [
    {
      title: "Center",
      links: [
        { label: "About us", href: "/nosotros" },
        { label: "Infrastructure", href: "/infraestructura" },
        { label: "Mission & values", href: "/nosotros" },
        { label: "Our team", href: "/nosotros" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Specialties", href: "/especialidades" },
        { label: "Operating rooms", href: "/infraestructura" },
        { label: "Coordination", href: "/contacto" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Surgical process", href: "/especialidades" },
        { label: "Specialist guide", href: "/especialidades" },
        { label: "Medical technology", href: "/infraestructura" },
        { label: "FAQ", href: "/contacto" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Contact", href: "/contacto" },
        { label: "Schedule a visit", href: "/contacto" },
        { label: "Quito, Ecuador", href: "/contacto" },
        { label: "Privacy", href: "/" },
      ],
    },
  ],
};

const SOCIAL = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Footer() {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const year = new Date().getFullYear();
  const cols = language === "es" ? COLS.es : COLS.en;

  const whatsappMsg =
    language === "es"
      ? "Hola, me gustaría más información sobre Ópera Surgical Center."
      : "Hello, I would like more information about Ópera Surgical Center.";

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSent(true);
      setEmail("");
    }
  };

  return (
    <footer
      style={{
        background: "#fafaff",
        borderTop: "1px solid rgba(0,34,63,0.07)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 pt-20 pb-0">
        {/* 5-column grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] md:gap-8 xl:gap-12">
          {/* Column 1 — Brand + Newsletter + Social */}
          <motion.div
            className="flex flex-col gap-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            variants={fadeUp}
          >
            {/* Logo */}
            <div className="flex items-center gap-3">
              {/* Logo */}
              <Link href="/">
                <span
                  className="
      flex items-center justify-center
      rounded-full
      border border-white/20
      bg-white/80
      backdrop-blur-xl
      px-4 py-2
      shadow-[0_8px_30px_rgba(0,0,0,0.06)]
      transition-all duration-300
      hover:scale-[1.02]
      hover:bg-white
    "
                >
                  <img
                    src="/clinica/logo.png"
                    alt="Ópera Surgical Center"
                    className="h-20 w-auto object-contain"
                  />
                </span>
              </Link>
            </div>

            {/* Tagline */}
            <p
              className="text-sm leading-relaxed max-w-[280px]"
              style={{ color: "rgba(0,34,63,0.5)" }}
            >
              {language === "es"
                ? "Infraestructura quirúrgica premium para especialistas en Quito, Ecuador."
                : "Premium surgical infrastructure for specialists in Quito, Ecuador."}
            </p>

            {/* Newsletter */}
            <div>
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-3"
                style={{ color: "rgba(0,34,63,0.35)" }}
              >
                {language === "es" ? "Novedades" : "Newsletter"}
              </p>
              {sent ? (
                <p className="text-sm font-medium" style={{ color: "#2B7A8C" }}>
                  {language === "es"
                    ? "¡Gracias! Te contactaremos pronto."
                    : "Thanks! We'll be in touch soon."}
                </p>
              ) : (
                <form onSubmit={handleSubscribe}>
                  <div
                    className="flex items-center h-11 rounded-full overflow-hidden"
                    style={{
                      background: "#fff",
                      border: "1px solid rgba(0,34,63,0.1)",
                      boxShadow: "0 2px 8px rgba(0,34,63,0.05)",
                    }}
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={
                        language === "es" ? "Tu correo" : "Your email"
                      }
                      className="flex-1 h-full px-4 bg-transparent text-sm outline-none placeholder:text-[rgba(0,34,63,0.3)]"
                      style={{ color: "#004875" }}
                    />
                    <button
                      type="submit"
                      className="h-9 w-9 rounded-full flex items-center justify-center mr-1 transition-all duration-200 hover:scale-105"
                      style={{ background: "#004875" }}
                      aria-label={
                        language === "es" ? "Suscribirse" : "Subscribe"
                      }
                    >
                      <ArrowRight className="h-4 w-4 text-white" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Social */}
            <div className="flex items-center gap-2.5">
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center rounded-full transition-all duration-200"
                  style={{
                    width: 36,
                    height: 36,
                    background: "#fff",
                    border: "1px solid rgba(0,34,63,0.1)",
                    color: "rgba(0,34,63,0.45)",
                  }}
                  whileHover={{
                    scale: 1.08,
                    color: "#2B7A8C",
                    boxShadow: "0 0 0 3px rgba(43,122,140,0.12)",
                  }}
                  transition={{ duration: 0.18 }}
                >
                  <Icon className="h-3.5 w-3.5" />
                </motion.a>
              ))}
              {/* WhatsApp */}
              <motion.a
                href={whatsappHref(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center justify-center rounded-full transition-all duration-200"
                style={{
                  width: 36,
                  height: 36,
                  background: "#fff",
                  border: "1px solid rgba(0,34,63,0.1)",
                  color: "rgba(0,34,63,0.45)",
                }}
                whileHover={{
                  scale: 1.08,
                  color: "#25D366",
                  boxShadow: "0 0 0 3px rgba(37,211,102,0.12)",
                }}
                transition={{ duration: 0.18 }}
              >
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.118 1.522 5.852L0 24l6.338-1.498A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.804a9.776 9.776 0 01-4.993-1.373l-.358-.213-3.762.89.94-3.65-.234-.374A9.77 9.77 0 012.196 12C2.196 6.58 6.58 2.196 12 2.196c5.419 0 9.804 4.384 9.804 9.804S17.419 21.804 12 21.804z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Columns 2–5 — Link groups */}
          {cols.map((col, ci) => (
            <motion.div
              key={col.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={ci + 1}
              variants={fadeUp}
            >
              <p
                className="text-[12px] font-semibold mb-5"
                style={{ color: "#00223f" }}
              >
                {col.title}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <motion.span
                        className="text-sm cursor-pointer inline-block"
                        style={{ color: "rgba(0,34,63,0.45)" }}
                        whileHover={{ color: "#ae9338", x: 2 }}
                        transition={{ duration: 0.15 }}
                      >
                        {link.label}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: "1px solid rgba(0,34,63,0.07)" }}
        >
          <p className="text-[11px]" style={{ color: "rgba(0,34,63,0.3)" }}>
            © {year} Ópera Surgical Center · {t.footer.rights}
          </p>
          {/* PD AGENCIA */}
          <a
            href="https://pdagencia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              items-center
              gap-2 
              hover:text-white
              transition-all
            "
            style={{ color: "rgba(0,34,63,0.3)" }}
          >
            <span className="text-[11px] tracking-[0.12em]">Hecho con</span>

            <Heart
              className="
                w-3.5
                h-3.5
                text-primary
                fill-[#004875]
                group-hover:scale-110
                transition-transform
              "
            />

            <span className="text-[11px] tracking-[0.12em]">por</span>

            <span
              className="
                text-[11px]
                tracking-[0.18em]
                uppercase
                text-black/80
                group-hover:text-primary
                transition-colors
              "
            >
              PD Agencia
            </span>
          </a>
        </div>

        {/* Giant watermark */}
        <div
          className="overflow-hidden select-none pointer-events-none"
          aria-hidden
          style={{ marginLeft: "-20px", marginRight: "-20px" }}
        >
          <p
            className="font-display font-black text-center whitespace-nowrap leading-none"
            style={{
              fontSize: "clamp(5rem, 18vw, 12rem)",
              color: "rgba(43,122,140,0.07)",
              letterSpacing: "-0.02em",
              lineHeight: 0.85,
              paddingBottom: "0.1em",
            }}
          >
            ÓperaSurgical
          </p>
        </div>
      </div>
    </footer>
  );
}
