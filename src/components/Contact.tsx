"use client";

import { useLanguage } from "@/context/LanguageContext";
import portfolioData from "@/data/portfolio.json";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mail,
  Phone,
  MapPin,
};

export default function Contact() {
  const { lang, isRTL } = useLanguage();
  const data = portfolioData[lang as "en" | "fa"];
  const contact = data.contact;
  const profile = portfolioData.profile;

  return (
    <section
      id="contact"
      className="section-padding bg-slate-50/50 dark:bg-slate-900/50"
    >
      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="accent-dot" />
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-cyan-400">
              {contact.sectionTitle}
            </span>
            <span className="accent-dot" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {contact.sectionTitle}
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            {contact.sectionSubtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Description */}
          <p className="text-center text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
            {contact.description}
          </p>

          {/* Info cards */}
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mb-12">
            {contact.infoCards.map((card, i) => {
              const Icon = iconMap[card.icon] || Mail;
              return (
                <div
                  key={i}
                  className="glass-card p-6 text-center hover:shadow-lg hover:shadow-blue-600/5 dark:hover:shadow-cyan-500/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-cyan-950/50 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                    {card.label}
                  </div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white break-all">
                    {card.value}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={`mailto:${profile.email}`}
              className="btn-primary w-full sm:w-auto justify-center"
            >
              <Mail className="w-4 h-4" />
              {contact.ctaEmail}
              <ArrowRight
                className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
              />
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="btn-secondary w-full sm:w-auto justify-center"
            >
              <Phone className="w-4 h-4" />
              {contact.ctaPhone}
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
              <ExternalLink className="w-3 h-3 opacity-50" />
            </a>
            <a
              href={profile.researchgate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300"
            >
              <GraduationCap className="w-4 h-4" />
              ResearchGate
              <ExternalLink className="w-3 h-3 opacity-50" />
            </a>
            <a
              href={profile.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300"
            >
              <BookIcon className="w-4 h-4" />
              Google Scholar
              <ExternalLink className="w-3 h-3 opacity-50" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}
