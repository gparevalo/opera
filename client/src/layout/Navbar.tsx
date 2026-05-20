import PremiumButtonRef from "@/components/site/PremiumButtonRef";
import { useLanguage } from "@/i18n";
import { whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Calendar, Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

const NAV_ITEMS = [
  { key: "home", href: "/" },
  { key: "about", href: "/nosotros" },
  { key: "infrastructure", href: "/infraestructura" },
  { key: "specialties", href: "/especialidades" },
  { key: "contact", href: "/contacto" },
] as const;

type NavKey = (typeof NAV_ITEMS)[number]["key"];

export function Navbar({ transparent = false }: { transparent?: boolean }) {
  const { t, language, setLanguage } = useLanguage();
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const isTransparent = transparent && !scrolled && !mobileOpen;

  const whatsappMsg =
    language === "es"
      ? "Hola, quisiera solicitar un recorrido privado por Ópera Surgical Center."
      : "Hello, I'd like to request a private tour at Ópera Surgical Center.";

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[80] transition-all duration-500",
        isTransparent ? "nav-transparent" : "nav-glass",
      )}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 ">
        <div className="flex h-[80px] items-center justify-between gap-4">
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
                className="h-8 w-auto object-contain"
              />
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === "/"
                  ? location === "/"
                  : location.startsWith(item.href);
              return (
                <Link key={item.key} href={item.href}>
                  <span
                    className={cn(
                      "relative px-3.5 py-2 rounded-full text-md font-medium transition-all duration-300 cursor-pointer",
                      active
                        ? "text-primary"
                        : "text-[color:var(--op-mist)] hover:text-secondary",
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 "
                        style={{
                          borderBottom: "2px solid #ae9338",
                        }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                    <span className="relative">
                      {t.nav[item.key as NavKey]}
                    </span>
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium transition-all duration-300"
              style={{
                border: "1px solid var(--op-border)",
                color: "var(--op-mist)",
                background: "var(--op-surface)",
              }}
            >
              <Globe className="h-3.5 w-3.5" />
              {language === "es" ? "EN" : "ES"}
            </button>
            <PremiumButtonRef href="contacto">{t.nav.visit}</PremiumButtonRef>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full transition-colors"
            style={{
              border: "1px solid var(--op-border)",
              background: "var(--op-surface)",
              color: "var(--op-mist)",
            }}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
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
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden lg:hidden"
            style={{
              borderTop: "1px solid var(--op-border)",
              background: "rgba(242,246,249,0.98)",
              backdropFilter: "blur(32px)",
            }}
          >
            <div className="mx-auto max-w-[1440px] px-5 py-5 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const active = location.startsWith(item.href);
                return (
                  <Link key={item.key} href={item.href}>
                    <span
                      className={cn(
                        "flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-medium cursor-pointer transition-all",
                        active
                          ? "text-[color:var(--op-amber)]"
                          : "text-[color:var(--op-slate)]",
                      )}
                      style={
                        active
                          ? {
                              background: "var(--op-amber-dim)",
                              border: "1px solid var(--op-amber-line)",
                            }
                          : {}
                      }
                    >
                      {t.nav[item.key as NavKey]}
                      <ArrowRight className="h-4 w-4 opacity-40" />
                    </span>
                  </Link>
                );
              })}
              <div
                className="mt-3 pt-3 flex flex-col gap-2.5"
                style={{ borderTop: "1px solid var(--op-border)" }}
              >
                <a
                  href={whatsappHref(whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full justify-center"
                >
                  WhatsApp
                </a>
                <Link href="/contacto">
                  <span className="btn btn-amber w-full justify-center">
                    <Calendar className="h-4 w-4" />
                    {t.nav.visit}
                  </span>
                </Link>
                <button
                  onClick={() => setLanguage(language === "es" ? "en" : "es")}
                  className="btn btn-ghost w-full justify-center"
                >
                  <Globe className="h-4 w-4" />
                  {language === "es" ? "English" : "Español"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function OperaLogo() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden>
      <circle
        cx="17"
        cy="17"
        r="16"
        stroke="rgba(43,122,140,0.3)"
        strokeWidth="1"
      />
      <circle
        cx="17"
        cy="17"
        r="11"
        fill="rgba(43,122,140,0.06)"
        stroke="rgba(43,122,140,0.2)"
        strokeWidth="1"
      />
      <circle
        cx="17"
        cy="17"
        r="6"
        fill="none"
        stroke="rgba(43,122,140,0.35)"
        strokeWidth="1"
      />
      <circle cx="17" cy="17" r="2.5" fill="var(--op-amber)" />
      <line
        x1="17"
        y1="6"
        x2="17"
        y2="11"
        stroke="rgba(43,122,140,0.3)"
        strokeWidth="0.75"
      />
      <line
        x1="17"
        y1="23"
        x2="17"
        y2="28"
        stroke="rgba(43,122,140,0.3)"
        strokeWidth="0.75"
      />
      <line
        x1="6"
        y1="17"
        x2="11"
        y2="17"
        stroke="rgba(43,122,140,0.3)"
        strokeWidth="0.75"
      />
      <line
        x1="23"
        y1="17"
        x2="28"
        y2="17"
        stroke="rgba(43,122,140,0.3)"
        strokeWidth="0.75"
      />
    </svg>
  );
}
