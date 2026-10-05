import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Julia",
  description:
    "Featured full stack projects built by Julia, including interactive web applications, dashboards, and APIs.",
};

export default function ProjectsPage() {
  return (
    <main className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
      {/* Background Decorative Ambient Glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="absolute top-2/3 -left-40 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px]" />
      </div>

      <section id="projects" className="relative z-10 py-8">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-violet-400">
              Portfolio
            </span>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Featured Projects
            </h1>
          </div>
        </div>

        {/* Projects List: Full-width stacked layout */}
        <div className="mt-12 flex flex-col gap-10 sm:gap-12">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
