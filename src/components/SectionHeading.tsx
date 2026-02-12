"use client";

import { useLanguage } from "@/context/LanguageContext";
import portfolioData from "@/data/portfolio.json";

interface SectionHeadingProps {
  titleKey: string;
  subtitleKey: string;
  section: string;
}

export default function SectionHeading({ section }: SectionHeadingProps) {
  const { lang } = useLanguage();
  const data = portfolioData[lang as keyof typeof portfolioData] as Record<string, any>;
  const sectionData = data[section];

  return (
    <div className="text-center mb-16 md:mb-20">
      <div className="inline-flex items-center gap-2 mb-4">
        <span className="accent-dot" />
        <span className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-cyan-400">
          {sectionData.sectionTitle}
        </span>
        <span className="accent-dot" />
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
        {sectionData.sectionTitle}
      </h2>
      <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
        {sectionData.sectionSubtitle}
      </p>
    </div>
  );
}
