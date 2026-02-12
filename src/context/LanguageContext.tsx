"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

type Lang = "en" | "fa";

interface LanguageContextType {
  lang: Lang;
  dir: "ltr" | "rtl";
  toggleLanguage: () => void;
  isRTL: boolean;
  fontClass: string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  dir: "ltr",
  toggleLanguage: () => {},
  isRTL: false,
  fontClass: "font-sans",
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

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
