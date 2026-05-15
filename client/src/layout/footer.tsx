import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "wouter";

const paths = [
  { href: "/", key: "home" as const },
  { href: "/nosotros", key: "about" as const },
  { href: "/infraestructura", key: "infrastructure" as const },
  { href: "/especialidades", key: "specialties" as const },
  { href: "/para-especialistas", key: "specialists" as const },
  { href: "/contacto", key: "contact" as const },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="opera-footer text-opera-ivory">
      <div className="opera-footer-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
        <motion.div
          className="opera-separator mb-14"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.div
          className="grid gap-12 lg:grid-cols-12 lg:gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="lg:col-span-5">
            <p className="font-heading text-2xl font-semibold tracking-tight text-opera-ivory">
              Ópera Surgical Center
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-opera-warm/65">
              {t.footer.tagline}
            </p>
            <motion.div
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-wider text-opera-warm/80 backdrop-blur-sm"
              whileHover={{ borderColor: "rgba(174,147,56,0.4)" }}
            >
              <MapPin className="h-3.5 w-3.5 text-opera-amber" aria-hidden />
              {t.footer.address_line}
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.6 }}
          >
            <h2 className="opera-eyebrow opera-eyebrow-light">{t.footer.nav_label}</h2>
            <ul className="mt-5 space-y-3">
              {paths.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="group inline-flex items-center gap-2 text-sm text-opera-warm/65 transition-all duration-500 hover:text-opera-ivory"
                  >
                    <span className="h-px w-4 bg-opera-amber/40 transition-all group-hover:w-6 group-hover:bg-opera-amber" />
                    {t.nav[p.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h2 className="opera-eyebrow opera-eyebrow-light">{t.footer.contact_label}</h2>
            <p className="mt-5 text-sm leading-relaxed text-opera-warm/65">
              {t.contact_page.intro}
            </p>
            <Link
              href="/contacto"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-opera-ivory transition-all duration-500 hover:text-opera-amber"
            >
              {t.nav.contact}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>
        </motion.div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
          <p className="text-xs text-opera-warm/45">
            © {new Date().getFullYear()} Ópera Surgical Center — {t.footer.rights}
          </p>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-xs text-opera-warm/45"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span>{t.footer.legal_label}</span>
            <a href="#" className="transition-colors hover:text-opera-ivory">
              {t.footer.privacy}
            </a>
            <span className="text-white/20">·</span>
            <span>{t.footer.designed_by}</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
