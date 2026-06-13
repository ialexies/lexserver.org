import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Metrics } from "@/components/portfolio/Metrics";
import { Services } from "@/components/portfolio/Services";
import { Process } from "@/components/portfolio/Process";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { TechStack } from "@/components/portfolio/TechStack";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Pricing } from "@/components/portfolio/Pricing";
import { About } from "@/components/portfolio/About";
import { BlogPreview } from "@/components/portfolio/BlogPreview";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
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
        <Process />
        <Portfolio />
        <TechStack />
        <Testimonials />
        <Pricing />
        <About />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
