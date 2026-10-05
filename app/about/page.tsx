import type { Metadata } from "next";
import type { ReactNode } from "react";
import AboutMore from "@/components/AboutMore";

export const metadata: Metadata = {
  title: "About | Julia",
  description:
    "Learn more about Julia, her journey from biology to coding, and her technical skill set.",
};

interface SkillItem {
  name: string;
  icon: ReactNode;
}

const STRONG_SKILLS: SkillItem[] = [
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00d8ff" strokeWidth="1.5" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          transform="rotate(60 12 12)"
          stroke="#00d8ff"
          strokeWidth="1.5"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          transform="rotate(120 12 12)"
          stroke="#00d8ff"
          strokeWidth="1.5"
        />
        <circle cx="12" cy="12" r="1.8" fill="#00d8ff" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10C22 6.477 17.523 2 12 2zm3.84 14.85l-5.69-7.37v7.37H8.5V7.15h1.65l5.73 7.42V7.15h1.65v9.7h-1.69z" />
      </svg>
    ),
  },
  {
    name: "Java",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M7 19c3.5 1 7 1 10.5 0M8 21.5c2.5.7 5.5.7 8 0"
          stroke="#f89820"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14 2c-1.5 2-1 3.5 1 5s1 3.5-1 5M10.5 3.5c-1 1.5-.7 2.7.7 4s.7 2.7-.7 4"
          stroke="#5382a1"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M5 15.5c4 1 10 1 14 0"
          stroke="#f89820"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Spring Boot",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 2L3 7v10l9 5 9-5V7l-9-5z"
          stroke="#6db33f"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="#6db33f"
          fillOpacity="0.15"
        />
        <path
          d="M8.5 13.8c1.8-3.8 5.5-4.8 7.5-4.8-1 2.8-2.8 5.8-7.5 4.8z"
          fill="#6db33f"
        />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 rounded">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path
          d="M7 16.5c.5.8 1.2 1.3 2.1 1.3 1.1 0 1.9-.6 1.9-1.9v-5.4h-1.8v5.3c0 .5-.3.8-.8.8-.4 0-.7-.3-.9-.7l-.5.6zm7.2-.1c.6.9 1.4 1.4 2.5 1.4 1.4 0 2.3-.8 2.3-2 0-1.2-.8-1.7-1.8-2.1l-.6-.3c-.6-.3-.9-.5-.9-.9 0-.4.3-.8.9-.8.5 0 .9.2 1.2.7l1.3-.9c-.6-.9-1.4-1.3-2.5-1.3-1.4 0-2.3.8-2.3 2 0 1 .7 1.6 1.7 2l.6.3c.7.3 1 .6 1 1 0 .5-.4.9-1.1.9-.7 0-1.2-.4-1.5-1l-1.3.8z"
          fill="#000000"
        />
      </svg>
    ),
  },
  {
    name: "Angular",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M12 2L2 5.5l1.6 12.5L12 22l8.4-4L22 5.5 12 2z" fill="#DD0031" />
        <path d="M12 2v20l8.4-4L22 5.5 12 2z" fill="#C3002F" />
        <path
          d="M12 5.5L7 16.5h2.2l1-2.5h3.6l1 2.5H17L12 5.5zm1.3 7h-2.6l1.3-3.2 1.3 3.2z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M11.8 2c-3.1 0-2.9 1.3-2.9 1.3l.03 1.4h3v.4H6.2S4 4.8 4 8c0 3.1 1.9 3 1.9 3h1.1V9.5c0-1.6 1.4-1.5 1.4-1.5h3c1.4 0 1.4-1.4 1.4-1.4V3.4s.2-1.4-1-1.4zm-1.8 1.1c.3 0 .6.3.6.6s-.3.6-.6.6-.6-.3-.6-.6.3-.6.6-.6z"
          fill="#387EB8"
        />
        <path
          d="M12.2 22c3.1 0 2.9-1.3 2.9-1.3l-.03-1.4h-3v-.4h5.7s2.2.3 2.2-2.9c0-3.1-1.9-3-1.9-3h-1.1v1.5c0 1.6-1.4 1.5-1.4 1.5h-3c-1.4 0-1.4 1.4-1.4 1.4v3.2s-.2 1.5 1 1.5zm1.8-1.1c-.3 0-.6-.3-.6-.6s.3-.6.6-.6.6.3.6.6-.3.6-.6.6z"
          fill="#FFE052"
        />
      </svg>
    ),
  },
  {
    name: "Git",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M21.7 10.7l-8.4-8.4a1.8 1.8 0 0 0-2.6 0L8.3 4.7l3.3 3.3a2.2 2.2 0 0 1 2.8 2.8l3.2 3.2a2.2 2.2 0 1 1-1.3 1.2l-3-3v4.4a2.2 2.2 0 1 1-1.8 0v-5.8a2.2 2.2 0 0 1-1.2-2.9L6.8 6.4 2.3 10.9a1.8 1.8 0 0 0 0 2.6l8.4 8.4a1.8 1.8 0 0 0 2.6 0l8.4-8.4a1.8 1.8 0 0 0 0-2.8z"
          fill="#F05032"
        />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 rounded">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path
          d="M5 8h6v1.8H8.8v7.4H7V9.8H5V8zm8.2 5.5c.5.8 1.3 1.3 2.3 1.3 1 0 1.6-.5 1.6-1.2 0-.8-.7-1.1-1.7-1.5l-.6-.2c-1.4-.5-2.2-1.2-2.2-2.4 0-1.5 1.2-2.6 3.1-2.6 1.4 0 2.4.5 3 1.4l-1.3 1.1c-.4-.6-.9-.9-1.7-.9-.8 0-1.3.4-1.3 1 0 .6.5.9 1.4 1.3l.6.2c1.6.6 2.5 1.3 2.5 2.6 0 1.7-1.3 2.8-3.4 2.8-1.7 0-2.8-.7-3.6-1.7l1.4-1.2z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    name: "MySQL",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#00758F" strokeWidth="1.5" />
        <path
          d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6"
          stroke="#00758F"
          strokeWidth="1.5"
        />
        <path
          d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"
          stroke="#F29111"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 2C12 2 6 7 6 13.5c0 4.2 3.1 7.2 6 8.5 2.9-1.3 6-4.3 6-8.5C18 7 12 2 12 2z"
          fill="#47A248"
        />
        <path
          d="M12 2v20c-.3 0-.6-.1-.9-.2-2.5-1.2-5.1-3.9-5.1-8.3C6 7.5 11.5 2.3 12 2z"
          fill="#499D4A"
        />
        <path
          d="M12 17.5v-13C12.3 5 16 9.2 16 13.5c0 3.3-1.8 5.7-4 6.8v-2.8z"
          fill="#58AA50"
        />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M6.5 10c1.5-3 3.5-3.5 6-1.5 1.5 1.2 2.5 1.5 4 0 1.5-1.5 2-1 2.5.5-1.5 3-3.5 3.5-6 1.5-1.5-1.2-2.5-1.5-4 0-1.5 1.5-2 1-2.5-.5zM2 16c1.5-3 3.5-3.5 6-1.5 1.5 1.2 2.5 1.5 4 0 1.5-1.5 2-1 2.5.5-1.5 3-3.5 3.5-6 1.5-1.5-1.2-2.5-1.5-4 0-1.5 1.5-2 1-2.5-.5z"
          fill="#38BDF8"
        />
      </svg>
    ),
  },
  {
    name: "WebSocket",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M5 9h14M15 5l4 4-4 4M19 15H5M9 11l-4 4 4 4"
          stroke="#A855F7"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "HTML5",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M4 2l1.6 18 6.4 2 6.4-2 1.6-18H4z" fill="#E44D26" />
        <path d="M12 3.6v16.7l5.1-1.6 1.3-15.1H12z" fill="#F16529" />
        <path
          d="M8.27 7.7h7.46l-.23 2.58H10.7l.21 2.37h4.34l-.45 4.96L12 18.33l-2.8-.72-.18-2.06h1.79l.09.96 1.1.28 1.1-.28.14-1.57H8.05L8.27 7.7z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    name: "CSS3",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M4 2l1.6 18 6.4 2 6.4-2 1.6-18H4z" fill="#1572B6" />
        <path d="M12 3.6v16.7l5.1-1.6 1.3-15.1H12z" fill="#33A9DC" />
        <path
          d="M8 7.5h8l-.3 3.2H12v2.3h4.6l-.7 7.2L12 21.3l-4.1-1.1-.3-3.1h2.3l.1 1.4 2 .5 2-.5.2-2.5H8.7l-.2-2.3h7.9l.2-2.4H8V7.5z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
];

const BASIC_KNOWLEDGE: SkillItem[] = [
  {
    name: "Kotlin",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <defs>
          <linearGradient id="kotlin-grad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C757BC" />
            <stop offset="50%" stopColor="#7F52FF" />
            <stop offset="100%" stopColor="#0095D5" />
          </linearGradient>
        </defs>
        <path d="M24 24H0V0h24L12 12l12 12Z" fill="url(#kotlin-grad)" />
      </svg>
    ),
  },
  {
    name: "AWS Cloud",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M7 16c-2.8 0-5-2.2-5-5 0-2.5 1.8-4.5 4.2-4.9C7.1 3.5 9.4 1.5 12.2 1.5c3.2 0 5.8 2.4 6.2 5.5 2 .5 3.6 2.3 3.6 4.5 0 2.8-2.2 5-5 5H7z"
          stroke="#FF9900"
          strokeWidth="1.5"
          fill="#FF9900"
          fillOpacity="0.15"
        />
        <path
          d="M6 19.5c4 2 8 2 12 0"
          stroke="#FF9900"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M16 19l2 .5-1.5 1.5"
          stroke="#FF9900"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect x="2" y="11" width="3" height="2.5" rx="0.5" fill="#2496ED" />
        <rect x="6" y="11" width="3" height="2.5" rx="0.5" fill="#2496ED" />
        <rect x="10" y="11" width="3" height="2.5" rx="0.5" fill="#2496ED" />
        <rect x="6" y="7.5" width="3" height="2.5" rx="0.5" fill="#2496ED" />
        <rect x="10" y="7.5" width="3" height="2.5" rx="0.5" fill="#2496ED" />
        <rect x="10" y="4" width="3" height="2.5" rx="0.5" fill="#2496ED" />
        <path
          d="M2 13.5c1 4 4.5 7 9.5 7 6.5 0 10.5-4 10.5-8.5 0-.5 0-.9-.1-1.3-1 .5-2.2.8-3.4.8-2.5 0-4-1.5-4-3 0-.3.1-.7.2-1C13.2 7.7 12 8 11 8H2v5.5z"
          fill="#2496ED"
          fillOpacity="0.3"
          stroke="#2496ED"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2z"
          stroke="#5FA04E"
          strokeWidth="1.5"
          fill="#5FA04E"
          fillOpacity="0.15"
        />
        <path
          d="M12 6.5l5.5 3.2v6.4L12 19.3l-5.5-3.2V9.7L12 6.5z"
          stroke="#5FA04E"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    name: "PHP",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="6"
          stroke="#777BB4"
          strokeWidth="1.5"
          fill="#777BB4"
          fillOpacity="0.15"
        />
        <path
          d="M6 14V10h2.5a1.5 1.5 0 0 1 0 3H6zm6 0V10h2v4m-2-2h2m3 2V10h2.5a1.5 1.5 0 0 1 0 3H15"
          stroke="#777BB4"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
      {/* Background Decorative Ambient Glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 h-[500px] w-[500px] rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="absolute top-2/3 -right-40 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px]" />
      </div>

      <section id="about" className="relative z-10 py-8">
        {/* Header Bio */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-violet-400">
            About Me
          </span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From Biology to Code
          </h1>
          <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
            Coming from a background in Biology and Languages, I decided to follow my passion for coding and pivot my career towards it. I have been building personal projects as well as projects responding to other people/businesses needs. I love to be able to design myself a solution and build it from scratch!
          </p>
        </div>

        {/* Expandable Education & Experience */}
        <AboutMore />

        {/* ======================================================== */}
        {/* STRONG SKILLS SECTION                                    */}
        {/* ======================================================== */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Strong Skills
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {STRONG_SKILLS.map((skill) => (
              <div
                key={skill.name}
                className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 sm:p-3.5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-500/35 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-violet-950/20"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-900/90 border border-white/10 group-hover:border-violet-500/30 transition-colors">
                  {skill.icon}
                </div>
                <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* BASIC KNOWLEDGE SECTION                                  */}
        {/* ======================================================== */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Basic Knowledge
            </h2>
          </div>

          <div className="mx-auto max-w-4xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {BASIC_KNOWLEDGE.map((skill) => (
              <div
                key={skill.name}
                className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.015] p-3 sm:p-3.5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-500/35 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-cyan-950/20"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-900/90 border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                  {skill.icon}
                </div>
                <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}