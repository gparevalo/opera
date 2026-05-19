import { Link } from "wouter";
import { useLanguage } from "@/i18n";
import { OPERA_CONTACT_EMAIL, whatsappHref } from "@/lib/site";
import { MessageCircle, Mail, MapPin, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/", key: "home" },
  { href: "/nosotros", key: "about" },
  { href: "/infraestructura", key: "infrastructure" },
  { href: "/especialidades", key: "specialties" },
  { href: "/para-especialistas", key: "specialists" },
  { href: "/contacto", key: "contact" },
] as const;

export function Footer() {
  const { t, language } = useLanguage();
  const year = new Date().getFullYear();

  const whatsappMsg =
    language === "es"
      ? "Hola, me gustaría más información sobre Ópera Surgical Center."
      : "Hello, I would like more information about Ópera Surgical Center.";

  return (
    <footer style={{ background: "var(--op-ink)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.8fr_1fr_1.2fr]">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden>
                <circle cx="17" cy="17" r="16" stroke="rgba(43,122,140,0.3)" strokeWidth="1" />
                <circle cx="17" cy="17" r="11" fill="rgba(43,122,140,0.06)" stroke="rgba(43,122,140,0.15)" strokeWidth="1" />
                <circle cx="17" cy="17" r="6" fill="none" stroke="rgba(43,122,140,0.28)" strokeWidth="1" />
                <circle cx="17" cy="17" r="2.5" fill="var(--op-amber)" />
                <line x1="17" y1="6" x2="17" y2="11" stroke="rgba(43,122,140,0.22)" strokeWidth="0.75" />
                <line x1="17" y1="23" x2="17" y2="28" stroke="rgba(43,122,140,0.22)" strokeWidth="0.75" />
                <line x1="6" y1="17" x2="11" y2="17" stroke="rgba(43,122,140,0.22)" strokeWidth="0.75" />
                <line x1="23" y1="17" x2="28" y2="17" stroke="rgba(43,122,140,0.22)" strokeWidth="0.75" />
              </svg>
              <div>
                <p className="font-display font-bold text-[15px] tracking-tight text-white">ÓPERA</p>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] mt-0.5" style={{ color: "var(--op-amber)" }}>Surgical Center</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(155,170,184,0.7)" }}>
              {t.footer.tagline}
            </p>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--op-amber)" }}>
              {t.footer.trusted_label}
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: "rgba(155,170,184,0.4)" }}>
              {t.footer.nav_label}
            </p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span className="text-sm transition-colors cursor-pointer hover:text-white" style={{ color: "rgba(155,170,184,0.55)" }}>
                      {t.nav[item.key]}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-5" style={{ color: "rgba(155,170,184,0.4)" }}>
              {t.footer.contact_label}
            </p>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a href={whatsappHref(whatsappMsg)} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm transition-colors hover:text-white group"
                  style={{ color: "rgba(155,170,184,0.55)" }}>
                  <MessageCircle className="h-4 w-4 shrink-0" style={{ color: "#25D366" }} />
                  <span>WhatsApp</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-40 transition-opacity" />
                </a>
              </li>
              <li>
                <a href={`mailto:${OPERA_CONTACT_EMAIL}`}
                  className="flex items-start gap-3 text-sm transition-colors hover:text-white break-all"
                  style={{ color: "rgba(155,170,184,0.55)" }}>
                  <Mail className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "var(--op-amber)" }} />
                  {OPERA_CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-sm" style={{ color: "rgba(155,170,184,0.35)" }}>
                  <MapPin className="h-4 w-4 shrink-0" style={{ color: "rgba(43,122,140,0.4)" }} />
                  {t.footer.address_line}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-xs" style={{ color: "rgba(155,170,184,0.3)" }}>
            © {year} Ópera Surgical Center · {t.footer.rights}
          </p>
          <p className="text-xs" style={{ color: "rgba(155,170,184,0.2)" }}>
            {t.footer.designed_by}
          </p>
        </div>
      </div>
    </footer>
  );
}
