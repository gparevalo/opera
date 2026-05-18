import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n";
import { whatsappHref } from "@/lib/site";
import { motion } from "framer-motion";

export function WhatsAppFab() {
  const { t, language } = useLanguage();
  const msg =
    language === "es"
      ? "Hola, quiero información sobre Ópera Surgical Center."
      : "Hello, I would like information about Ópera Surgical Center.";

  return (
    <motion.a
      href={whatsappHref(msg)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/30 bg-[#25D366] text-white shadow-[0_8px_32px_rgba(37,211,102,0.35)] backdrop-blur-sm md:bottom-8"
      aria-label={t.cta.whatsapp}
      whileHover={{ scale: 1.08, boxShadow: "0 12px 40px rgba(37,211,102,0.5)" }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </motion.a>
  );
}
