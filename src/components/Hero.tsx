"use client";

import { useLanguage } from "@/context/LanguageContext";
import portfolioData from "@/data/portfolio.json";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

export default function Hero() {
  const { lang, isRTL } = useLanguage();
  const data = portfolioData[lang as "en" | "fa"];
  const hero = data.hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center section-padding pt-28 md:pt-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 start-1/4 w-96 h-96 bg-blue-500/5 dark:bg-cyan-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 end-1/4 w-80 h-80 bg-purple-500/5 dark:bg-teal-500/5 rounded-full blur-3xl animate-float animate-delay-300" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-600/20 dark:via-cyan-500/20 to-transparent" />
      </div>

      <div className="container-narrow w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-cyan-950/50 border border-blue-200/50 dark:border-cyan-800/50 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-cyan-300">
              {hero.titles[2]}
            </span>
          </div>

          {/* Greeting */}
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-3 animate-fade-in animate-delay-100">
            {hero.greeting}
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-slide-up animate-delay-200">
            <span className="gradient-text">{hero.name}</span>
          </h1>

          {/* Titles */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8 animate-fade-in animate-delay-300">
            {hero.titles.slice(0, 2).map((title, i) => (
              <span
                key={i}
                className="px-4 py-1.5 text-sm md:text-base font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                {title}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in animate-delay-400">
            {hero.description}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animate-delay-500`}
          >
            <a href="#contact" className="btn-primary">
              {hero.ctaPrimary}
              <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
            </a>
            <a
              href={portfolioData.profile.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <BookOpen className="w-4 h-4" />
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-fade-in animate-delay-500">
          <div className="w-5 h-8 rounded-full border-2 border-slate-400 dark:border-slate-600 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-slate-400 dark:bg-slate-600 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
