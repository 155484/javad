"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Languages } from "lucide-react";

export default function LanguageSwitcher() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 text-sm font-medium"
      aria-label="Switch language"
    >
      <Languages className="w-4 h-4" />
      <span className="min-w-[2ch] text-center">
        {lang === "en" ? "فا" : "EN"}
      </span>
    </button>
  );
}
