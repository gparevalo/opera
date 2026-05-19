import { useLanguage } from "@/i18n";
import { Link } from "wouter";
import { Calendar } from "lucide-react";

export function MobileCtaBar() {
  const { language } = useLanguage();
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[55] py-3 pl-4 pr-16 md:hidden"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        background: "rgba(15,17,21,0.94)",
        backdropFilter: "blur(24px)",
      }}
    >
      <Link href="/contacto">
        <span className="btn btn-amber w-full justify-center flex items-center gap-2">
          <Calendar className="h-4 w-4 shrink-0" />
          {language === "es" ? "Solicitar recorrido privado" : "Request private tour"}
        </span>
      </Link>
    </div>
  );
}
