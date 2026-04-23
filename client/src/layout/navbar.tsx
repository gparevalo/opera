import { useLanguage } from "@/i18n";
import { cn } from "@/lib/utils";
import logo from "@assets/images/iniciales_logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [{ href: "/", label: t.nav.home }];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        scrolled
          ? "bg-black/60 backdrop-blur-2xl border-b border-white/5 py-5"
          : "bg-transparent border-b border-transparent py-10",
      )}
    >
      {/* Dynamic Stage Lighting Accent Line */}
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent transition-opacity duration-1000",
          scrolled ? "opacity-100" : "opacity-0",
        )}
      />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 flex items-center justify-between">
        <Link href="/" className="group relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <img src={logo} alt="Logo" className="w-30 h-8 object-contain" />
          </motion.div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-16">
          <div className="flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative group py-2 text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-500",
                  location === item.href
                    ? "text-primary"
                    : "text-white/30 hover:text-white",
                )}
              >
                {item.label}
                <motion.span
                  className={cn(
                    "absolute -bottom-1 left-0 w-full h-px bg-primary transform origin-right",
                    location === item.href
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100",
                  )}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <button
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] font-bold text-white/20 hover:text-white transition-all duration-500"
            >
              <Globe className="w-3.5 h-3.5 transition-transform group-hover:rotate-12" />
              <span>{language.toUpperCase()}</span>
            </button>

            <Link href="/agenda">
              <button className="px-8 py-3 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-primary transition-all duration-500">
                {t.nav.agendar}
              </button>
            </Link>
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden w-12 h-12 flex items-center justify-center text-white border border-white/5 hover:border-primary/40 transition-all group"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <X key="x" size={20} className="text-primary" />
            ) : (
              <Menu
                key="menu"
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* MOBILE NAV (Editorial Style) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-3xl z-40 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col h-full pt-40 px-12 pb-12 justify-between">
              <div className="flex flex-col gap-10">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "relative group flex items-center gap-6 text-5xl md:text-7xl font-bold uppercase tracking-[-0.05em] leading-none italic",
                        location === item.href
                          ? "text-primary"
                          : "text-white/40",
                      )}
                    >
                      <span className="text-xs font-mono text-white/10 group-hover:text-primary transition-colors">
                        0{idx + 1}
                      </span>
                      {item.label}
                      <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-12 border-t border-white/5 flex flex-col gap-8"
              >
                <button
                  onClick={() => setLanguage(language === "en" ? "es" : "en")}
                  className="flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] font-bold text-white/30"
                >
                  <Globe className="w-4 h-4 text-primary" />
                  {t.nav.language_toggle}
                </button>

                <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary/40 italic">
                  {t.nav.agendar}
                </p>
              </motion.div>
            </div>

            {/* Close Button Inside Menu */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-12 right-12 w-14 h-14 border border-white/10 flex items-center justify-center text-primary"
            >
              <X size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
