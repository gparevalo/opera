import { useLanguage } from "@/i18n";
import { Link } from "wouter";
import { CalendarDays } from "lucide-react";

export function MobileCtaBar() {
  const { t } = useLanguage();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[55] border-t border-white/10 bg-[#0a1218]/90 py-3 pl-4 pr-16 backdrop-blur-xl md:hidden">
      <Link href="/contacto" className="opera-btn opera-btn-primary block w-full text-center">
        <CalendarDays className="h-4 w-4 shrink-0" aria-hidden />
        {t.cta.mobile_bar}
      </Link>
    </div>
  );
}
