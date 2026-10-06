import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact | Julia",
  description: "Get in touch with Julia, Full Stack Developer.",
};

export default function ContactPage() {
  return <ContactContent />;
}
