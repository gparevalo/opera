import { useLanguage } from "@/i18n";
import { whatsappHref } from "@/lib/site";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export function MobileCtaBar() {
  const { language } = useLanguage();
  const msg =
    language === "es"
      ? "Hola, quiero información sobre Ópera Surgical Center."
      : "Hello, I would like information about Ópera Surgical Center.";

  return (
    <div
      className="
    fixed bottom-0 left-0 right-0 z-[55]
    md:hidden
    px-4 pb-4 pt-3
  "
      style={{
        borderTop: "1px solid rgba(255,255,255,0.18)",
        background: "rgba(242,246,249,0.78)",
        backdropFilter: "blur(24px) saturate(1.8)",
        WebkitBackdropFilter: "blur(24px) saturate(1.8)",
        boxShadow: "0 -8px 30px rgba(0,0,0,0.04)",
      }}
    >
      <div className="flex items-center gap-3">
        {/* Main CTA */}
        <div className="flex-1">
          <Link href="/contacto">
            <span
              className="
            group
            flex w-full items-center justify-between
            rounded-full
            border border-[#c7dde2]
            bg-white
            pl-6 px-2 py-2
            text-sm font-medium
            text-[#004875]
            shadow-[0_4px_20px_rgba(43,123,140,0.08)]
            transition-all duration-300
            hover:bg-[#004875]
            hover:text-white
            hover:border-[#004875]
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
        </div>

        {/* WhatsApp */}
        <motion.a
          href={whatsappHref(msg)}
          target="_blank"
          rel="noopener noreferrer"
          className="
        flex h-[45px] w-[45px]
        shrink-0
        items-center justify-center
        rounded-full
        text-white 
      "
          style={{
            background: "#004875",
            boxShadow:
              "0 10px 28px rgba(37,211,102,0.32), 0 0 0 1px rgba(37,211,102,0.15)",
          }}
          aria-label="WhatsApp"
          whileHover={{
            scale: 1.05,
            y: -1,
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
