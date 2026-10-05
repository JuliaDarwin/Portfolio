"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = `technical-details-${project.id}`;

  return (
    <article className="group w-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-violet-500/30 hover:bg-white/[0.035] hover:shadow-2xl hover:shadow-violet-950/20">
      {/* ======================================================== */}
      {/* TOP SECTION: TEXT (LEFT) & PICTURE (RIGHT)               */}
      {/* ======================================================== */}
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
        {/* LEFT COLUMN: TITLE, DESCRIPTION, TECH, LINKS, TOGGLE */}
        <div className="flex flex-col lg:col-span-7">
          {/* Title */}
          <h2 className="text-2xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-violet-200 sm:text-3xl">
            {project.title}
          </h2>

          {/* Brief Description */}
          <p className="mt-3 text-base leading-relaxed text-zinc-300 sm:text-lg">
            {project.description}
          </p>

          {/* Technologies Used */}
          <div className="mt-6">
            <h3 className="text-xl font-mono font-semibold uppercase text-violet-400">
              Technologies used
            </h3>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-mono text-zinc-300 transition-colors hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="mt-6">
            <h3 className="text-xl font-mono font-semibold uppercase text-violet-400">
              Links
            </h3>
            <div className="mt-2.5 flex flex-wrap items-center gap-3">
              {/* Deployed Link */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-violet-600/25 transition-all duration-200 hover:from-violet-500 hover:to-indigo-500 hover:shadow-violet-600/40 active:scale-95"
              >
                <span>Live Deployment</span>
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              {/* GitHub Repo */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-zinc-200 backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-white/[0.08] hover:text-white active:scale-95"
              >
                <svg
                  className="h-3.5 w-3.5 fill-current text-zinc-300 transition-colors group-hover/btn:text-white"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>GitHub Repo</span>
              </a>
            </div>
          </div>

          {/* Details Toggle Button */}
          <div className="mt-7">
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              aria-expanded={isExpanded}
              aria-controls={detailsId}
              className="inline-flex items-center gap-2.5 rounded-xl border border-violet-500/25 bg-violet-500/10 px-4 py-2.5 text-xs font-semibold text-violet-200 transition-all duration-200 hover:border-violet-500/50 hover:bg-violet-500/20 hover:text-white active:scale-95"
            >
              <svg
                className={`h-4 w-4 transition-colors ${
                  isExpanded ? "text-cyan-400" : "text-violet-400"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <span>
                {isExpanded
                  ? "Hide technical details"
                  : "More technical details about the project"}
              </span>
              <svg
                className={`h-4 w-4 transition-transform duration-300 ${
                  isExpanded ? "rotate-180 text-cyan-400" : "text-violet-400"
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
          </div>
        </div>

        {/* RIGHT COLUMN: PREVIEW PICTURE SPACE (NICELY SIZED) */}
        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-zinc-950/70 shadow-xl transition-all duration-300 group-hover:border-violet-500/30">
            {/* Mockup Top Window Bar */}
            <div className="flex h-7 items-center justify-between border-b border-white/[0.06] bg-zinc-900/80 px-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-500/80" />
                <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
              </div>
              <span className="truncate max-w-[180px] text-[10px] font-mono text-zinc-500">
                {project.id}.demo
              </span>
              <div className="w-8" />
            </div>

            {/* Preview Image Frame */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900/90">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} Preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-mono font-medium text-zinc-400">
                    Preview Space
                  </span>
                  <span className="mt-0.5 text-[10px] text-zinc-600">
                    Add image in public/projects/
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* EXPANDABLE SECTION: FULL-WIDTH TECHNICAL DETAILS         */}
      {/* Occupies the entire width of the card when open          */}
      {/* ======================================================== */}
      {isExpanded && (
        <div
          id={detailsId}
          className="mt-8 border-t border-white/[0.08] pt-6 animate-in fade-in slide-in-from-top-3 duration-300"
        >
          <div className="flex flex-col gap-4 rounded-2xl border border-violet-500/20 bg-violet-950/20 p-5 sm:p-7 backdrop-blur-md">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/[0.06] pb-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/20 text-violet-300">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Technical Details
                </h4>
              </div>
             
            </div>

            {/* Architecture Overview Paragraph */}
            <p className="text-sm sm:text-base leading-relaxed text-zinc-200">
              {project.technicalDetails.summary}
            </p>

            {/* Highlights Grid (Spans full width across 2 columns on desktop) */}
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
              {project.technicalDetails.highlights.map((highlight, index) => {
                const [title, ...descParts] = highlight.split(":");
                const desc = descParts.join(":");

                return (
                  <div
                    key={index}
                    className="flex flex-col rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition hover:border-violet-500/30 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="h-2 w-2 rounded-full bg-cyan-400" />
                      <span className="text-sm font-semibold text-white">
                        {title}
                      </span>
                    </div>
                    {desc && (
                      <p className="text-xs sm:text-sm leading-relaxed text-zinc-300">
                        {desc.trim()}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick Collapse Footer
            <div className="mt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-violet-300 transition-colors"
              >
                <span>Collapse technical details</span>
                <svg
                  className="h-3.5 w-3.5 rotate-180"
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
            </div> */}
          </div>
        </div>
      )}
    </article>
  );
}
