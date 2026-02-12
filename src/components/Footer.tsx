"use client";

import { useLanguage } from "@/context/LanguageContext";
import portfolioData from "@/data/portfolio.json";

export default function Footer() {
  const { lang } = useLanguage();
  const data = portfolioData[lang as "en" | "fa"];
  const footer = data.footer;

  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-start">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {footer.copyright}
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
              {footer.tagline}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={portfolioData.profile.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
            >
              Google Scholar
            </a>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <a
              href={portfolioData.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <a
              href={portfolioData.profile.researchgate}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
            >
              ResearchGate
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
