import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Metrics } from "@/components/portfolio/Metrics";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { TechStack } from "@/components/portfolio/TechStack";
import { Experience } from "@/components/portfolio/Experience";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alexies Iglesia — Developer · Designer · Maker" },
      {
        name: "description",
        content:
          "Portfolio of Alexies Iglesia — 15+ years building mobile and web apps, brand design, and 3D-printed prototypes from Hermosa, Bataan, Philippines.",
      },
      { property: "og:title", content: "Alexies Iglesia — Developer · Designer · Maker" },
      {
        property: "og:description",
        content:
          "Award-winning full-stack & mobile developer, designer, and 3D printing maker based in the Philippines.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <Services />
        <Projects />
        <TechStack />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
