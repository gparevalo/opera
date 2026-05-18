import { useLanguage } from "@/i18n";
import { Layout } from "@/layout/Layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="opera-page-hero min-h-[80vh] flex items-center">
        <div className="scene-glow" />
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-heading font-black text-[6rem] md:text-[8rem] leading-none text-opera-amber/20 select-none">
              404
            </p>
            <h1 className="opera-display mt-4">{t.notFound.title}</h1>
            <p className="opera-lead mt-4">{t.notFound.description}</p>
            <div className="mt-10 flex justify-center">
              <Link href="/">
                <span className="opera-btn opera-btn-primary">
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
