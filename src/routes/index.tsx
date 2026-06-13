import { createFileRoute } from '@tanstack/react-router';
import { Nav } from '@/components/portfolio/Nav';
import { Hero } from '@/components/portfolio/Hero';
import { Metrics } from '@/components/portfolio/Metrics';
import { Services } from '@/components/portfolio/Services';
import { Projects } from '@/components/portfolio/Projects';
import { TechStack } from '@/components/portfolio/TechStack';
import { Contact } from '@/components/portfolio/Contact';
import { Footer } from '@/components/portfolio/Footer';

export const Route = createFileRoute('/')({
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
