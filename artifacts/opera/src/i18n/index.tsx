import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import es from "./translations/es.json";
import en from "./translations/en.json";

type Language = "en" | "es";
export const translations = { en, es } as const;
type Translations = typeof es;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("opera-lang");
      if (saved === "en" || saved === "es") setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("opera-lang", lang);
    document.documentElement.lang = lang;
  }, []);

  const t = translations[language] as Translations;

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useLanguage must be used within I18nProvider");
  return ctx;
}
