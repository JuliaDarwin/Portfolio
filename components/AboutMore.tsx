"use client";

import { useState } from "react";

export default function AboutMore() {
  const [isExpanded, setIsExpanded] = useState(false);
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
        <span>{isExpanded ? "Show less" : "Read more about me"}</span>
        <svg
          className={`h-4 w-4 transition-transform duration-300 ${
            isExpanded ? "rotate-180 text-cyan-400" : "text-violet-400 group-hover:translate-y-0.5"
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
            <p className="pb-5">I studied Biology in University of Barcelona and I worked as a biologist for a few years before pivoting to languages, another of my passions. I spent 6 years teaching Spanish and Catalan to foreginers and I was able to grow a stable personal business with it.</p>
             <p> Eventually I decided to pivot again to another of my interests: coding. I started learning on my own with FreeCodeCamp and other free resources and found it to be very entertaining and useful. After successsfully completing a Master's Degree in Full Stack Development, here I am looking forward to start growing professionally!
            </p>

          </div>
          {/* Education */}
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Education
            </h3>
            <p className="mt-2 text-base leading-relaxed text-zinc-300">
Masters Degree in Full Stack Development, Escuela Grupo Atrium. Oct 2025-Sept 2026            </p>
<p className="mt-2 text-base leading-relaxed text-zinc-300">
University Course on Teaching Spanish as a Foreign Language, European University Miguel de Cervantes.  2020 </p>
            <p className="mt-2 text-base leading-relaxed text-zinc-300">
Bachelors Degree in Biology, University of Barcelona. 2013-2018            </p>


          </div>

        </div>
      )}
    </div>
  );
}
