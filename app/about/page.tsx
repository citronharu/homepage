import AboutPage from "@/components/AboutPage";
import { ABOUT_META } from "@/lib/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: ABOUT_META.title,
  description: ABOUT_META.description,
};

export default function About() {
  return <AboutPage />;
}
