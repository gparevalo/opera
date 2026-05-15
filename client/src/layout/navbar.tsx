import { useLanguage } from "@/i18n";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

const paths = {
  home: "/",
  about: "/nosotros",
  infrastructure: "/infraestructura",
  specialties: "/especialidades",
  specialists: "/para-especialistas",
  contact: "/contacto",
} as const;

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { href: paths.home, label: t.nav.home },
    { href: paths.about, label: t.nav.about },
    { href: paths.infrastructure, label: t.nav.infrastructure },
    { href: paths.specialties, label: t.nav.specialties },
    { href: paths.specialists, label: t.nav.specialists },
    { href: paths.contact, label: t.nav.contact },
  ];

  const onHero = location === "/" && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        onHero ? "opera-nav-hero" : "opera-nav-glass",
      )}
    >
      <motion.div
        className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-opera-amber/40 to-transparent"
        animate={{ opacity: scrolled ? 1 : 0.4 }}
        transition={{ duration: 0.5 }}
        aria-hidden
      />

      <motion.div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 transition-[padding] duration-500 lg:px-8",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <Link href="/" className="group flex shrink-0 flex-col leading-none">
          <span className="font-heading text-xl font-semibold tracking-tight text-opera-ivory transition-colors group-hover:text-white">
            Ópera
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-opera-warm/55 transition-colors group-hover:text-opera-amber/80">
            Surgical Center
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-all duration-500",
                  location === item.href
                    ? "bg-white/12 text-opera-ivory shadow-[inset_0_0_0_1px_rgba(174,147,56,0.25)]"
                    : "text-opera-warm/70 hover:bg-white/8 hover:text-opera-ivory",
                )}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <motion.div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-opera-warm/70 backdrop-blur-sm transition-all duration-500 hover:border-opera-amber/30 hover:text-opera-ivory"
          >
            <Globe className="h-3.5 w-3.5" aria-hidden />
            {language.toUpperCase()}
          </button>
          <Link href="/contacto">
            <span className="opera-btn opera-btn-secondary !py-2.5 !text-xs">
              {t.nav.visit}
            </span>
          </Link>
        </motion.div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-opera-ivory backdrop-blur-sm transition-all hover:border-opera-amber/35 lg:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-white/10 bg-[#0a1218]/95 backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex max-h-[70vh] flex-col gap-1 overflow-y-auto px-5 py-4" aria-label="Móvil">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                  <span
                    className={cn(
                      "block rounded-lg px-3 py-3 text-base font-medium transition-colors",
                      location === item.href
                        ? "bg-white/10 text-opera-ivory"
                        : "text-opera-warm/75 hover:bg-white/5 hover:text-opera-ivory",
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <button
                type="button"
                className="mt-2 flex items-center gap-2 rounded-lg px-3 py-3 text-left text-sm font-semibold uppercase tracking-wider text-opera-warm/60"
                onClick={() => setLanguage(language === "en" ? "es" : "en")}
              >
                <Globe className="h-4 w-4" />
                {t.nav.language_toggle}
              </button>
              <Link href="/contacto" onClick={() => setIsOpen(false)}>
                <span className="opera-btn opera-btn-primary mt-2 block w-full text-center">
                  {t.nav.visit}
                </span>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
