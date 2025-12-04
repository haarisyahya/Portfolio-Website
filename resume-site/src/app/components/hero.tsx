'use client';
import Image from 'next/image';
import {FiGithub, FiLinkedin, FiBriefcase} from 'react-icons/fi';
import Link from 'next/link';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset for navigation bar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative z-10">
      {/* Avatar */}
      <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-primary">
        <Image
          src="/avatar.JPG"
          alt="Haaris Yahya"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Name + tagline */}
      <h1 className="mt-6 text-4xl md:text-5xl font-bold text-white">
        Hi, I'm Haaris!
      </h1>
      <p className="mt-2 text-lg md:text-xl text-slate-300">
        Full‑Stack Engineer • Cloud Computing Enthusiast • Lifelong Learner
      </p>

      {/* Social / Contact buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="https://github.com/haarisyahya"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-white transition hover:bg-white/20 hover:scale-105"
        >
          <FiGithub />
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/haaris-yahya-398ba9195/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-md bg-blue-600/80 backdrop-blur-sm px-4 py-2 text-white transition hover:bg-blue-600 hover:scale-105"
        >
          <FiLinkedin />
          LinkedIn
        </Link>
        <Link
          href="/Haaris Yahya - resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-md bg-gradient-to-r from-purple-500/80 to-pink-500/80 border border-white/20 px-4 py-2 text-white transition hover:from-purple-500 hover:to-pink-500 hover:scale-105"
        >
          <FiBriefcase />
          Resumé
        </Link>
      </div>
    </section>
  );
}
