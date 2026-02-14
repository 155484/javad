"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

type Lang = "en" | "fa";

interface LanguageContextType {
  lang: Lang;
  dir: "ltr" | "rtl";
  toggleLanguage: () => void;
  isRTL: boolean;
  fontClass: string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "fa",
  dir: "rtl",
  toggleLanguage: () => {},
  isRTL: true,
  fontClass: "font-persian",
});

function detectSystemLanguage(): Lang | null {
  if (typeof navigator === "undefined") return null;
  const nav = (navigator.language || (navigator.languages && navigator.languages[0]) || "").toLowerCase();
  if (!nav) return null;
  if (nav.startsWith("fa")) return "fa";
  if (nav.startsWith("en")) return "en";
  return "en"; // system readable but not fa/en -> default to English
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = window.localStorage.getItem("lang");
        if (saved === "fa" || saved === "en") return saved as Lang;
      }
    } catch (e) {
      /* ignore */
    }

    const sys = detectSystemLanguage();
    if (sys) return sys;

    // system not readable -> default to Persian
    return "fa";
  });

  useEffect(() => {
    try {
      window.localStorage.setItem("lang", lang);
    } catch (e) {
      /* ignore */
    }
  }, [lang]);

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === "en" ? "fa" : "en"));
  }, []);

  const dir = lang === "fa" ? "rtl" : "ltr";
  const isRTL = lang === "fa";
  const fontClass = lang === "fa" ? "font-persian" : "font-sans";

  return (
    <LanguageContext.Provider
      value={{ lang, dir, toggleLanguage, isRTL, fontClass }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
