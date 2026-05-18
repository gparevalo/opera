import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n";
import { whatsappHref } from "@/lib/site";
import { motion } from "framer-motion";

export function WhatsAppFab() {
  const { language } = useLanguage();
  const msg =
    language === "es"
      ? "Hola, quiero información sobre Ópera Surgical Center."
      : "Hello, I would like information about Ópera Surgical Center.";

  return (
    <motion.a
      href={whatsappHref(msg)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-5 z-[60] flex h-13 w-13 items-center justify-center rounded-full text-white md:bottom-8"
      style={{
        height: "52px", width: "52px",
        background: "#25D366",
        boxShadow: "0 8px 28px rgba(37,211,102,0.3), 0 0 0 1px rgba(37,211,102,0.2)",
      }}
      aria-label="WhatsApp"
      whileHover={{
        scale: 1.08,
        boxShadow: "0 12px 36px rgba(37,211,102,0.45), 0 0 0 1px rgba(37,211,102,0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  );
}
