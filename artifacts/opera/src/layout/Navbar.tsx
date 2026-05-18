import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/i18n";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Globe, Menu, X, ArrowRight } from "lucide-react";
import { whatsappHref } from "@/lib/site";

const NAV_ITEMS = [
  { key: "about", href: "/nosotros" },
  { key: "infrastructure", href: "/infraestructura" },
  { key: "specialties", href: "/especialidades" },
  { key: "specialists", href: "/para-especialistas" },
  { key: "contact", href: "/contacto" },
] as const;

type NavKey = (typeof NAV_ITEMS)[number]["key"];

export function Navbar({ transparent = false }: { transparent?: boolean }) {
  const { t, language, setLanguage } = useLanguage();
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
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
      <div className="mx-auto max-w-[1380px] px-5 md:px-8 xl:px-12">
        <div className="flex h-[60px] items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/">
            <span className="flex items-center gap-3 cursor-pointer group">
              <OperaLogo />
              <div className="flex flex-col leading-none">
                <span className="font-display font-black text-[15px] tracking-tight" style={{ color: "var(--op-white)" }}>
                  ÓPERA
                </span>
                <span className="text-[9px] font-medium uppercase tracking-[0.22em]" style={{ color: "var(--op-amber)" }}>
                  Surgical Center
                </span>
              </div>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => {
              const active = location.startsWith(item.href);
              const label = t.nav[item.key as NavKey];
              return (
                <Link key={item.key} href={item.href}>
                  <span className={cn(
                    "relative px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-300 cursor-pointer",
                    active
                      ? "text-white"
                      : "text-[color:var(--op-mist)] hover:text-white",
                  )}>
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg"
                        style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                    <span className="relative">{label}</span>
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[12px] font-medium transition-all duration-300 hover:border-[color:var(--op-amber-line)] hover:text-white"
              style={{ borderColor: "rgba(255,255,255,0.1)", color: "var(--op-mist)", background: "rgba(255,255,255,0.03)" }}
            >
              <Globe className="h-3.5 w-3.5" aria-hidden />
              {language === "es" ? "EN" : "ES"}
            </button>
            <Link href="/contacto">
              <span className="btn btn-amber btn-sm flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" aria-hidden />
                {t.nav.visit}
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
            style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", color: "var(--op-fog)" }}
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
            className="overflow-hidden lg:hidden"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)", background: "rgba(7,9,12,0.97)", backdropFilter: "blur(32px)" }}
          >
            <div className="mx-auto max-w-[1380px] px-5 py-5 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const active = location.startsWith(item.href);
                return (
                  <Link key={item.key} href={item.href}>
                    <span className={cn(
                      "flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all cursor-pointer",
                      active
                        ? "text-white"
                        : "hover:text-white",
                    )}
                    style={active ? { background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)", color: "white" } : { color: "var(--op-mist)" }}
                    >
                      {t.nav[item.key as NavKey]}
                      <ArrowRight className="h-4 w-4 opacity-40" />
                    </span>
                  </Link>
                );
              })}
              <div className="mt-3 pt-3 flex flex-col gap-2.5" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <a href={whatsappHref(whatsappMsg)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-full justify-center">
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
      <circle cx="17" cy="17" r="16" stroke="rgba(201,168,76,0.5)" strokeWidth="1" />
      <circle cx="17" cy="17" r="11" fill="rgba(201,168,76,0.06)" stroke="rgba(201,168,76,0.25)" strokeWidth="1" />
      <circle cx="17" cy="17" r="6" fill="none" stroke="rgba(201,168,76,0.5)" strokeWidth="1" />
      <circle cx="17" cy="17" r="2.5" fill="var(--op-amber)" />
      {/* Cross reticle */}
      <line x1="17" y1="6" x2="17" y2="11" stroke="rgba(201,168,76,0.4)" strokeWidth="0.75" />
      <line x1="17" y1="23" x2="17" y2="28" stroke="rgba(201,168,76,0.4)" strokeWidth="0.75" />
      <line x1="6" y1="17" x2="11" y2="17" stroke="rgba(201,168,76,0.4)" strokeWidth="0.75" />
      <line x1="23" y1="17" x2="28" y2="17" stroke="rgba(201,168,76,0.4)" strokeWidth="0.75" />
    </svg>
  );
}
