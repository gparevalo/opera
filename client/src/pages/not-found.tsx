import { useLanguage } from "@/i18n";
import { Layout } from "@/layout/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="relative min-h-[80vh] flex items-center overflow-hidden" style={{ background: "var(--op-canvas)" }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(43,122,140,0.06) 0%, transparent 65%)"
        }} />
        <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-8 xl:px-12 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-display font-black leading-none select-none"
              style={{ fontSize: "clamp(5rem, 16vw, 10rem)", color: "var(--op-amber-pale)" }}>
              404
            </p>
            <h1 className="t-display mt-4">{t.notFound.title}</h1>
            <p className="t-lead mt-4 mx-auto" style={{ maxWidth: 440 }}>{t.notFound.description}</p>
            <div className="mt-10 flex justify-center">
              <Link href="/">
                <span className="btn btn-amber btn-lg flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" aria-hidden />
                  {t.notFound.button}
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
