import { Link } from "wouter";
import { useLanguage } from "@/i18n";
import { OPERA_CONTACT_EMAIL, whatsappHref } from "@/lib/site";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const NAV_LINKS = [
  { href: "/", labelKey: "home" },
  { href: "/nosotros", labelKey: "about" },
  { href: "/infraestructura", labelKey: "infrastructure" },
  { href: "/especialidades", labelKey: "specialties" },
  { href: "/para-especialistas", labelKey: "specialists" },
  { href: "/contacto", labelKey: "contact" },
] as const;

export function Footer() {
  const { t, language } = useLanguage();
  const year = new Date().getFullYear();

  const whatsappMsg =
    language === "es"
      ? "Hola, me gustaría más información sobre Ópera."
      : "Hello, I would like information about Ópera.";

  return (
    <footer className="opera-footer">
      {/* Gradient top line */}
      <div className="amber-line" />

      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2 max-w-sm">
            <Link href="/">
              <span className="flex items-center gap-2.5 cursor-pointer mb-4">
                <svg width="32" height="32" viewBox="0 0 28 28" fill="none" aria-hidden>
                  <circle cx="14" cy="14" r="13.25" stroke="rgba(174,147,56,0.5)" strokeWidth="1.5" />
                  <circle cx="14" cy="14" r="9" fill="rgba(0,72,117,0.6)" />
                  <circle cx="14" cy="14" r="5.5" fill="none" stroke="rgba(174,147,56,0.65)" strokeWidth="1" />
                  <circle cx="14" cy="14" r="2.25" fill="rgba(174,147,56,0.9)" />
                </svg>
                <span className="font-heading text-base font-black text-opera-ivory tracking-tight">
                  Ópera <span className="font-medium opacity-60 text-sm">Surgical Center</span>
                </span>
              </span>
            </Link>
            <p className="text-sm text-opera-ivory/55 leading-relaxed">{t.footer.tagline}</p>
            <p className="mt-3 text-xs text-opera-amber/70 font-medium tracking-wide uppercase">{t.footer.trusted_label}</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-opera-ivory/40 mb-4">{t.footer.nav_label}</p>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span className="text-sm text-opera-ivory/60 hover:text-opera-ivory transition-colors cursor-pointer">
                      {t.nav[item.labelKey]}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-opera-ivory/40 mb-4">{t.footer.contact_label}</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={whatsappHref(whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-opera-ivory/60 hover:text-opera-ivory transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-400 shrink-0" aria-hidden />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${OPERA_CONTACT_EMAIL}`}
                  className="flex items-center gap-2.5 text-sm text-opera-ivory/60 hover:text-opera-ivory transition-colors break-all"
                >
                  <Mail className="h-4 w-4 text-opera-amber/70 shrink-0" aria-hidden />
                  {OPERA_CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2.5 text-sm text-opera-ivory/40">
                  <MapPin className="h-4 w-4 text-opera-amber/50 shrink-0" aria-hidden />
                  {t.footer.address_line}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/08 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-opera-ivory/30">
            © {year} Ópera Surgical Center. {t.footer.rights}
          </p>
          <p className="text-xs text-opera-ivory/25">{t.footer.designed_by}</p>
        </div>
      </div>
    </footer>
  );
}
