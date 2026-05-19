import { Link } from "wouter";
import { useLanguage } from "@/i18n";
import { OPERA_CONTACT_EMAIL, whatsappHref } from "@/lib/site";
import { MessageCircle, Mail, MapPin } from "lucide-react";

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
    <footer className="footer-bg relative overflow-hidden">
      <div className="amber-line" />

      <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.8fr_1fr_1.2fr]">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden>
                <circle cx="17" cy="17" r="16" stroke="rgba(95,131,144,0.38)" strokeWidth="1" />
                <circle cx="17" cy="17" r="11" fill="rgba(95,131,144,0.05)" stroke="rgba(95,131,144,0.18)" strokeWidth="1" />
                <circle cx="17" cy="17" r="6" fill="none" stroke="rgba(95,131,144,0.38)" strokeWidth="1" />
                <circle cx="17" cy="17" r="2.5" fill="var(--op-amber)" />
                <line x1="17" y1="6" x2="17" y2="11" stroke="rgba(95,131,144,0.28)" strokeWidth="0.75" />
                <line x1="17" y1="23" x2="17" y2="28" stroke="rgba(95,131,144,0.28)" strokeWidth="0.75" />
                <line x1="6" y1="17" x2="11" y2="17" stroke="rgba(95,131,144,0.28)" strokeWidth="0.75" />
                <line x1="23" y1="17" x2="28" y2="17" stroke="rgba(95,131,144,0.28)" strokeWidth="0.75" />
              </svg>
              <div className="leading-none">
                <p className="font-display font-bold text-[16px] tracking-tight" style={{ color: "var(--op-white)" }}>ÓPERA</p>
                <p className="text-[9px] font-medium uppercase tracking-[0.22em] mt-0.5" style={{ color: "var(--op-amber)" }}>Surgical Center</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--op-mist)" }}>
              {t.footer.tagline}
            </p>
            <p className="mt-4 text-[10.5px] font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--op-amber)" }}>
              {t.footer.trusted_label}
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="t-label mb-5">{t.footer.nav_label}</p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span className="text-sm transition-colors cursor-pointer hover:text-white" style={{ color: "var(--op-mist)" }}>
                      {t.nav[item.key]}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="t-label mb-5">{t.footer.contact_label}</p>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a href={whatsappHref(whatsappMsg)} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm transition-colors hover:text-white"
                  style={{ color: "var(--op-mist)" }}>
                  <MessageCircle className="h-4 w-4 shrink-0" style={{ color: "#25D366" }} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${OPERA_CONTACT_EMAIL}`}
                  className="flex items-start gap-3 text-sm transition-colors hover:text-white break-all"
                  style={{ color: "var(--op-mist)" }}>
                  <Mail className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "var(--op-amber)" }} />
                  {OPERA_CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-sm" style={{ color: "rgba(122,132,144,0.5)" }}>
                  <MapPin className="h-4 w-4 shrink-0" style={{ color: "rgba(95,131,144,0.5)" }} />
                  {t.footer.address_line}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-xs" style={{ color: "rgba(122,132,144,0.4)" }}>
            © {year} Ópera Surgical Center · {t.footer.rights}
          </p>
          <p className="text-xs" style={{ color: "rgba(122,132,144,0.3)" }}>
            {t.footer.designed_by}
          </p>
        </div>
      </div>
    </footer>
  );
}
