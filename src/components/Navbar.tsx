"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import portfolioData from "@/data/portfolio.json";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";

const navKeys = ["home", "about", "services", "achievements", "contact"] as const;
const sectionIds = ["hero", "about", "services", "achievements", "contact"];

export default function Navbar() {
  const { lang } = useLanguage();
  const data = portfolioData[lang as "en" | "fa"];
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm border-b border-slate-200/50 dark:border-slate-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("hero")}
            className="text-lg font-bold gradient-text"
          >
            {lang === "en" ? "J" : "ج"}.
            <span className="text-slate-400 dark:text-slate-500 font-light">
              {lang === "en" ? "HN" : "ح‌ن"}
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navKeys.map((key, i) => (
              <button
                key={key}
                onClick={() => handleNavClick(sectionIds[i])}
                className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-300"
              >
                {data.nav[key as keyof typeof data.nav]}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-1 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-800/50">
          {navKeys.map((key, i) => (
            <button
              key={key}
              onClick={() => handleNavClick(sectionIds[i])}
              className="block w-full text-start px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all"
            >
              {data.nav[key as keyof typeof data.nav]}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
