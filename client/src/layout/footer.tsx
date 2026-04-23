import { useLanguage } from "@/i18n";
import logo from "@assets/images/logo_header.png";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-10 px-6 lg:px-10 relative overflow-hidden">
      {/* cinematic separator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* ambient glow */}
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[90%] aspect-square bg-primary/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mb-10">
          {/* BRAND */}
          <motion.div
            className="lg:col-span-6 justify-self-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/" className="group mb-8 flex   gap-4">
              <img
                src={logo}
                alt="Logo"
                className="w-full h-[100px] object-contain"
              />
            </Link>

            <p className="text-white/50 max-w-md text-lg leading-relaxed font-light italic border-l border-primary/20 pl-6 mb-10">
              {t.footer.tagline}
            </p>

            <div className="flex items-center gap-3 px-5 py-2 border border-white/5 bg-white/[0.02] inline-flex">
              <ShieldCheck className="w-4 h-4 text-primary" />

              <span className="text-[9px] uppercase tracking-[0.35em] font-bold text-white/50">
                {t.footer.trusted_label}
              </span>
            </div>
          </motion.div>

          {/* NAVIGATION */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <h4 className="text-primary text-[10px] uppercase tracking-[0.6em] font-bold mb-8">
              {t.footer.architect_label}
            </h4>

            <div className="flex flex-col gap-5">
              {[{ href: "/", label: t.nav.home }].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-3 text-white/40 hover:text-white transition-all duration-500 text-[11px] uppercase tracking-[0.3em] font-bold"
                >
                  <span className="w-1.5 h-1.5 bg-primary/20 group-hover:bg-primary transition-colors" />
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h4 className="text-primary text-[10px] uppercase tracking-[0.6em] font-bold mb-8">
              {t.footer.ecosystem_label}
            </h4>

            <div className="flex flex-col gap-5">
              {["LinkedIn", "Instagram"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  target="_blank"
                  rel="noopener"
                  className="group flex items-center justify-between text-white/40 hover:text-white transition-all duration-500 text-[11px] uppercase tracking-[0.3em] font-bold"
                >
                  {platform}

                  <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </a>
              ))}

              <a
                href="#"
                className="group flex items-center justify-between text-white/40 hover:text-white transition-all duration-500 text-[11px] uppercase tracking-[0.3em] font-bold"
              >
                {t.footer.privacy_protocol}
                <ShieldCheck className="w-4 h-4 text-white/10" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* LEGAL */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-bold">
              © {new Date().getFullYear()} Mariángel Hernández —{" "}
              {t.footer.rights}
            </p>

            <p className="text-[9px] uppercase tracking-[0.35em] font-bold text-white/10 italic">
              Strategy / Innovation / Execution
            </p>
          </div>

          <div className="group flex items-center gap-4">
            <span className="text-white/10 text-[10px] uppercase tracking-[0.35em] font-bold group-hover:text-white/30 transition-colors">
              {t.footer.designed_by}
            </span>

            <div className="w-10 h-[1px] bg-white/5 group-hover:w-20 group-hover:bg-primary transition-all duration-700" />
          </div>
        </div>
      </div>
    </footer>
  );
}
