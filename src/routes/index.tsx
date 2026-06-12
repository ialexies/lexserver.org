import { Nav } from '@/components/portfolio/Nav';
import { Hero } from '@/components/portfolio/Hero';
import { Metrics } from '@/components/portfolio/Metrics';
import { Services } from '@/components/portfolio/Services';
import { Projects } from '@/components/portfolio/Projects';
import { TechStack } from '@/components/portfolio/TechStack';
import { Experience } from '@/components/portfolio/Experience';
import { About } from '@/components/portfolio/About';
import { Contact } from '@/components/portfolio/Contact';
import { Footer } from '@/components/portfolio/Footer';

export default function Index() {
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
