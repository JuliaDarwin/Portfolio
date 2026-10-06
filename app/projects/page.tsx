import type { Metadata } from "next";
import ProjectsContent from "@/components/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects | Julia",
  description:
    "Featured full stack projects built by Julia, including interactive web applications, dashboards, and APIs.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
