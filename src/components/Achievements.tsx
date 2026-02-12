"use client";

import { useLanguage } from "@/context/LanguageContext";
import portfolioData from "@/data/portfolio.json";
import { Award, BookMarked, Star } from "lucide-react";

export default function Achievements() {
  const { lang } = useLanguage();
  const data = portfolioData[lang as "en" | "fa"];
  const achievements = data.achievements;

  return (
    <section id="achievements" className="section-padding">
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="accent-dot" />
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-cyan-400">
              {achievements.sectionTitle}
            </span>
            <span className="accent-dot" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {achievements.sectionTitle}
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            {achievements.sectionSubtitle}
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {achievements.stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card p-6 md:p-8 text-center hover:shadow-lg hover:shadow-blue-600/5 dark:hover:shadow-cyan-500/5 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Publishers & Reviewer */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Published In */}
          <div className="glass-card p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-cyan-950/50 flex items-center justify-center">
                <BookMarked className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {achievements.publishers.title}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {achievements.publishers.items.map((pub, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  <Award className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
                  {pub}
                </div>
              ))}
            </div>
          </div>

          {/* Reviewer */}
          <div className="glass-card p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-cyan-950/50 flex items-center justify-center">
                <Star className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {achievements.reviewer.title}
              </h3>
            </div>
            <div className="space-y-2">
              {achievements.reviewer.items.map((journal, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 px-4 py-2.5 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span className="accent-dot mt-1.5 shrink-0" />
                  {journal}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
