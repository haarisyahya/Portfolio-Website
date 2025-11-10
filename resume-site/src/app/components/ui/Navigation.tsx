'use client';

import { useState, useEffect } from 'react';
import { FiUser, FiBriefcase, FiFolder, FiMessageCircle, FiHome } from 'react-icons/fi';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sections = ['about', 'experience', 'projects', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(sectionId);
              }
            });
          },
          {
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0,
          }
        );

        observer.observe(element);
        observers.push(observer);
      }
    });

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4">
      <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-lg">
        <button
          onClick={() => scrollToSection('home')}
          className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${
            activeSection === ''
              ? 'bg-primary text-white'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
          aria-label="Home"
        >
          <FiHome className="text-lg" />
        </button>

        <div className="w-px h-6 bg-white/20 mx-1" />

        <button
          onClick={() => scrollToSection('about')}
          className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
            activeSection === 'about'
              ? 'bg-primary text-white'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
          aria-label="About"
        >
          <FiUser className="text-sm" />
          <span className="text-sm hidden sm:inline">About</span>
        </button>

        <button
          onClick={() => scrollToSection('experience')}
          className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
            activeSection === 'experience'
              ? 'bg-primary text-white'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
          aria-label="Experience"
        >
          <FiBriefcase className="text-sm" />
          <span className="text-sm hidden sm:inline">Experience</span>
        </button>

        <button
          onClick={() => scrollToSection('projects')}
          className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
            activeSection === 'projects'
              ? 'bg-primary text-white'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
          aria-label="Projects"
        >
          <FiFolder className="text-sm" />
          <span className="text-sm hidden sm:inline">Projects</span>
        </button>

       
      </div>
    </nav>
  );
}
