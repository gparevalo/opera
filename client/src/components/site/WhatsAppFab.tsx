import { MessageCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n";
import { whatsappHref } from "@/lib/site";
import { motion } from "framer-motion";
import { Link } from "wouter";

export function WhatsAppFab() {
  const { language } = useLanguage();

  const msg =
    language === "es"
      ? "Hola, quiero información sobre Ópera Surgical Center."
      : "Hello, I would like information about Ópera Surgical Center.";

  return (
    <div className="hidden md:block">
      <div className="fixed bottom-6 right-8 z-[60] flex items-center gap-2 bg-[]">
        {/* CTA Button */}
        <Link href="/contacto">
          <span
            className="
              group
              flex items-center justify-between
              gap-4
              rounded-full
              border border-[#c7dde2]
              bg-white/90
              backdrop-blur-xl 
          pl-6 px-2 py-2 
              text-sm font-medium
              text-[#004875]
              shadow-[0_8px_30px_rgba(43,123,140,0.10)]
              transition-all duration-300
              hover:bg-[#004875]
              hover:text-white
              hover:border-[#004875]
              hover:-translate-y-0.5
            "
          >
            <span>
              {language === "es" ? "Solicitar recorrido" : "Request tour"}
            </span>

            <span
              className="
                flex h-8 w-8 items-center justify-center
                rounded-full
                bg-[#004875]
                transition-all duration-300
                group-hover:bg-white
              "
            >
              <ArrowRight
                className="
                  h-4 w-4
                  text-white
                  transition-colors duration-300
                  group-hover:text-[#004875]
                "
              />
            </span>
          </span>
        </Link>
        {/* WhatsApp */}
        <motion.a
          href={whatsappHref(msg)}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex h-[45px] w-[45px]
            items-center justify-center
            rounded-full
            text-white
            shrink-0
          "
          style={{
            background: "#004875",
            boxShadow:
              "0 10px 30px rgba(37,211,102,0.35), 0 0 0 1px rgba(37,211,102,0.18)",
          }}
          aria-label="WhatsApp"
          whileHover={{
            scale: 1.06,
            y: -1,
            boxShadow:
              "0 14px 40px rgba(37,211,102,0.45), 0 0 0 1px rgba(37,211,102,0.28)",
          }}
          whileTap={{ scale: 0.94 }}
          transition={{
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <MessageCircle className="h-5 w-5" />
        </motion.a>
      </div>
    </div>
  );
}
