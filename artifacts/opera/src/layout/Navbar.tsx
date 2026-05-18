import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/i18n";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Globe, Menu, X } from "lucide-react";
import { whatsappHref } from "@/lib/site";

interface NavItem {
  key: string;
  href: string;
  labelKey: keyof ReturnType<typeof useLanguage>["t"]["nav"];
}

const NAV_ITEMS: NavItem[] = [
  { key: "about", href: "/nosotros", labelKey: "about" },
  { key: "infra", href: "/infraestructura", labelKey: "infrastructure" },
  { key: "specialties", href: "/especialidades", labelKey: "specialties" },
  { key: "specialists", href: "/para-especialistas", labelKey: "specialists" },
  { key: "contact", href: "/contacto", labelKey: "contact" },
];

export function Navbar({ transparent = false }: { transparent?: boolean }) {
  const { t, language, setLanguage } = useLanguage();
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isTransparent = transparent && !scrolled && !mobileOpen;

  const whatsappMsg =
    language === "es"
      ? "Hola, quisiera más información sobre Ópera Surgical Center."
      : "Hello, I would like more information about Ópera Surgical Center.";

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[80] transition-all duration-500",
          isTransparent ? "opera-nav-hero" : "opera-nav-glass",
        )}
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
          <div className="flex h-14 items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/">
              <span className="flex items-center gap-2.5 cursor-pointer">
                <OperaLogoMark />
                <span className="font-heading text-[15px] font-700 tracking-tight text-opera-ivory leading-none">
                  <span className="font-black">Ópera</span>
                  <span className="opacity-60 text-xs ml-1 font-medium hidden sm:inline">Surgical Center</span>
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const active = location.startsWith(item.href);
                return (
                  <Link key={item.key} href={item.href}>
                    <span
                      className={cn(
                        "relative px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors duration-200 cursor-pointer",
                        active
                          ? "text-opera-ivory"
                          : "text-opera-ivory/65 hover:text-opera-ivory",
                      )}
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-md bg-white/10"
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        />
                      )}
                      <span className="relative">{t.nav[item.labelKey]}</span>
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={() => setLanguage(language === "es" ? "en" : "es")}
                className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-[12px] font-medium text-opera-ivory/65 hover:text-opera-ivory hover:border-white/20 transition-all duration-200"
              >
                <Globe className="h-3.5 w-3.5" aria-hidden />
                {language === "es" ? "EN" : "ES"}
              </button>
              <Link href="/contacto">
                <span className="opera-btn opera-btn-primary text-[13px] px-4 py-2">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                  {t.nav.visit}
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-md border border-white/10 bg-white/5 text-opera-ivory/80 hover:text-opera-ivory transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-white/10 bg-[#060e16]/95 backdrop-blur-xl lg:hidden"
            >
              <div className="px-5 py-5 flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const active = location.startsWith(item.href);
                  return (
                    <Link key={item.key} href={item.href}>
                      <span
                        className={cn(
                          "block px-3 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer",
                          active
                            ? "bg-white/10 text-opera-ivory"
                            : "text-opera-ivory/65 hover:bg-white/5 hover:text-opera-ivory",
                        )}
                      >
                        {t.nav[item.labelKey]}
                      </span>
                    </Link>
                  );
                })}
                <div className="mt-3 pt-3 border-t border-white/08 flex flex-col gap-2">
                  <a
                    href={whatsappHref(whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opera-btn opera-btn-whatsapp text-sm"
                  >
                    WhatsApp
                  </a>
                  <Link href="/contacto">
                    <span className="opera-btn opera-btn-primary text-sm w-full">{t.nav.visit}</span>
                  </Link>
                  <button
                    onClick={() => setLanguage(language === "es" ? "en" : "es")}
                    className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm font-medium text-opera-ivory/65"
                  >
                    <Globe className="h-4 w-4" aria-hidden />
                    {language === "es" ? "English" : "Español"}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

function OperaLogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <circle cx="14" cy="14" r="13.25" stroke="rgba(174,147,56,0.6)" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="9" fill="rgba(0,72,117,0.85)" />
      <path
        d="M14 8.5c3.038 0 5.5 2.462 5.5 5.5s-2.462 5.5-5.5 5.5-5.5-2.462-5.5-5.5 2.462-5.5 5.5-5.5z"
        fill="none"
        stroke="rgba(174,147,56,0.8)"
        strokeWidth="1"
      />
      <circle cx="14" cy="14" r="2.25" fill="rgba(174,147,56,0.95)" />
    </svg>
  );
}
