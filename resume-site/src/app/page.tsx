// app/page.tsx
import Hero from './components/hero';
// import Skills from './components/skills'; // Uncomment to restore the original skills grid
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';
import BackToTop from './components/BackToTop';

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section
        id="about"
        className="py-12 md:py-20 relative bg-black/40 backdrop-blur-md border-y border-white/10 scroll-mt-20"
      >
        <About />
      </section>

      <section
        id="experience"
        className="py-12 md:py-20 relative bg-black/30 backdrop-blur-md border-y border-white/10 scroll-mt-20"
      >
        <Experience />
      </section>

      <section
        id="projects"
        className="py-12 md:py-20 relative bg-black/40 backdrop-blur-md border-y border-white/10 scroll-mt-20"
      >
        <Projects />
      </section>

      <section
        id="contact"
        className="py-12 md:py-20 relative bg-black/30 backdrop-blur-md border-y border-white/10 scroll-mt-20"
      >
        <Contact />
      </section>
      <BackToTop />
    </>
  );
}
