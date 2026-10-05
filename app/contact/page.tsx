import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Julia",
  description: "Get in touch with Julia, Full Stack Developer.",
};

export default function ContactPage() {
  return (
    <main className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
      {/* Background Decorative Ambient Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="absolute top-1/2 -right-40 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px]" />
      </div>

      <section id="contact" className="relative z-10 py-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 sm:p-12 text-center">
          <div className="pointer-events-none absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-violet-600/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 -ml-16 -mb-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

          {/* Heading */}
          
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-300">
            I am actively looking for developer opportunities, internships, or open-source collaboration. Send a message below or reach out directly!
          </p>

          {/* Contact Form with space for message & assumpte */}
          <div className="mt-10 text-left">
            <ContactForm />
          </div>

          {/* Direct Connect Buttons (Email & LinkedIn preserved) */}
          <div className="mt-10">
            <div className="flex items-center justify-center gap-3 text-xs font-mono uppercase tracking-wider text-zinc-500">
              <span className="h-px w-12 bg-white/10" />
              <span>Or reach out directly</span>
              <span className="h-px w-12 bg-white/10" />
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
      

              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/julia-elgueta-308b62201/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-[#0a66c2]/50 hover:bg-white/[0.08] hover:text-white active:scale-95"
              >
                <svg
                  className="h-4 w-4 text-[#0a66c2]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              {/* GitHub Button */}
              <a
                href="https://github.com/JuliaDarwin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-white/30 hover:bg-white/[0.08] hover:text-white active:scale-95"
              >
                <svg
                  className="h-4 w-4 text-zinc-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
