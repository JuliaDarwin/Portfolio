"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutMore() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();
  const sectionId = "about-education-experience";

  return (
    <div className="mt-8 flex flex-col items-center">
      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        aria-expanded={isExpanded}
        aria-controls={sectionId}
        className="group inline-flex items-center gap-2.5 rounded-xl border border-violet-500/30 bg-violet-500/10 px-5 py-2.5 text-xs sm:text-sm font-semibold text-violet-200 backdrop-blur-sm transition-all duration-200 hover:border-violet-500/60 hover:bg-violet-500/20 hover:text-white hover:shadow-lg hover:shadow-violet-950/30 active:scale-95"
      >
        <span>{isExpanded ? t.about.showLess : t.about.readMore}</span>
        <svg
          className={`h-4 w-4 transition-transform duration-300 ${
            isExpanded
              ? "rotate-180 text-cyan-400"
              : "text-violet-400 group-hover:translate-y-0.5"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Expanded Simple Section: 1 column, 2 paragraphs */}
      {isExpanded && (
        <div
          id={sectionId}
          className="mt-8 w-full max-w-3xl rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 backdrop-blur-md animate-in fade-in slide-in-from-top-3 duration-300 text-left space-y-6"
        >
          <div>
            <p className="pb-5 text-base leading-relaxed text-zinc-300">
              {t.about.storyP1}
            </p>
            <p className="text-base leading-relaxed text-zinc-300">
              {t.about.storyP2}
            </p>
          </div>

          {/* Education */}
          <div className="border-t border-white/[0.06] pt-6">
            <h3 className="text-xl font-bold text-white tracking-tight">
              {t.about.educationTitle}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-zinc-300">
              {t.about.eduMaster}
            </p>
            <p className="mt-2 text-base leading-relaxed text-zinc-300">
              {t.about.eduCourse}
            </p>
            <p className="mt-2 text-base leading-relaxed text-zinc-300">
              {t.about.eduDegree}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
