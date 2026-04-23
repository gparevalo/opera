import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/i18n";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <span className="font-heading text-8xl font-bold gradient-text">404</span>
        <h1 className="mt-4 text-4xl md:text-6xl font-bold text-foreground leading-tight tracking-tighter">
          {t.notFound.title}
        </h1>
          {t.notFound.description}
        <Link href="/" data-testid="link-404-home">
          <span className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-md bg-[#EF233C] text-white font-medium text-sm transition-all duration-300 hover:opacity-90 btn-glow">
            <ArrowLeft className="w-4 h-4" />
            {t.notFound.button}
          </span>
        </Link>
      </div>
    </div>
  );
}