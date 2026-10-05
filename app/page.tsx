import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08090e] text-zinc-100 overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full bg-indigo-600/15 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ======================================================== */}
        {/* HERO SECTION                                             */}
        {/* ======================================================== */}
        <section
          id="home"
          className="flex min-h-[calc(100vh-4rem)] flex-col justify-center pt-24 pb-16 lg:pt-28 lg:pb-20"
        >
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Title & Junior Developer Description */}
            <div className="flex flex-col items-start lg:col-span-7">
              {/* Status Pill Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3.5 py-1.5 text-xs font-medium text-violet-300 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>Open for Junior Roles &amp; Opportunities</span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
                Hey, I&apos;m{" "}
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                  Julia
                </span>
              </h1>

              {/* Junior Developer Description */}
              <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg sm:leading-relaxed">
                I am a passionate <strong className="font-semibold text-white">Full Stack Developer</strong>. In my free time you&apos;ll find me building new coding projects, bouldering, or enjoying a good Napolitan pizza!
              </p>

              {/* Tech Stack Pills */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {["React", "Next.js", "JavaScript", "Angular", "Java","Spring Boot"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs font-mono text-zinc-300 backdrop-blur-sm transition hover:border-violet-500/30 hover:bg-violet-500/5 hover:text-white"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all duration-200 hover:from-violet-500 hover:to-indigo-500 hover:shadow-violet-600/40 active:scale-95"
                >
                  <span>View My Projects</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-zinc-200 backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-white/[0.08] hover:text-white active:scale-95"
                >
                  <span>Contact Me</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Image space for Julia */}
            <div className="flex justify-center lg:col-span-5">
              <div className="group relative w-full max-w-sm sm:max-w-md">
                {/* Ambient glow behind image card */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-600/30 via-fuchsia-600/20 to-cyan-500/30 blur-2xl transition duration-500 group-hover:opacity-75" />

                {/* Main Image Container / Card */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 p-3 shadow-2xl backdrop-blur-md">
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-zinc-950/80">
                    <Image
                      src="/julia.jpg"
                      alt="Julia - Junior Web Developer"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.07] bg-[#07080c] py-8 text-center text-xs text-zinc-500">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Julia. Crafted with React &amp; Next.js.</p>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-zinc-300 transition">Back to Top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
