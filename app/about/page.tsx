import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About | Julia",
  description:
    "Learn more about Julia, her journey from biology to coding, and her technical skill set.",
};

export default function AboutPage() {
  return <AboutContent />;
}