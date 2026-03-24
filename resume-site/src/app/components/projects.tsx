// components/projects.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string; 
  url?: string; 
  repo?: string;
};

const projects: Project[] = [
  {
    title: 'Transient Radio',
    description:
      'Architected a genre-agnostic music platform designed to bridge global sounds and local talent. Built with NextJS, TypeScript, Tailwind CSS, and Supabase. Leveraged Cloudflare R2 for scalable media storage and seamless global deployment.',
    tech: ['Next.js', 'JavaScript', 'TypeScript', 'Cloudflare R2', 'TailwindCSS', 'HTML', 'Supabase'],
    image: '/TR-Icon-Transparent.png',
    url:'transientradio.online',
    repo: 'https://github.com/haarisyahya/Transient-Radio',
  },
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio built with Next.js 14 App Router, TypeScript, and Tailwind. Fully static, deployed on Vercel.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS'],
    image: '/portfolio-website.png',
    url: 'https://haarisy.dev',
    repo: 'https://github.com/haarisyahya/Portfolio-Website',
  },
  {
    title: 'Location-Based Puzzle Web Application',
    description:
      'Developed a scavenger hunt website for my partner to propose to her. I developed this using React, CSS and JavaScript.',
    tech: ['JavaScript', 'React', 'HTML', 'CSS'],
    image: '/proposal-scav-hunt.png',
    url: 'https://ourjourneyof.love',
    repo: 'https://github.com/haarisyahya/Scavenger-Hunt-Proposal-App',

  },
  {
    title: 'Chess',
    description:
      'Implemented a Chess engine in Java using Minimax and Alpha-Beta pruning algorithms with multiple difficulty levels and GUI built in Java Swing.',
    tech: ['Java', 'Alpha-Beta Pruning', 'Minimax Algorithm', 'AI'],
    image: '/chess.png',
    repo: 'https://github.com/haarisyahya/Chess',
  },
  // ...add more
];

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center mb-12 text-white">Projects</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="group rounded-lg overflow-hidden border border-white/20 bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="relative h-48">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text */}
            <div className="p-4 bg-transparent">
              <h3 className="text-xl font-bold text-white">{proj.title}</h3>
              <p className="mt-2 text-sm text-slate-200">
                {proj.description}
              </p>

              {/* Tech tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-4 flex gap-3">
                {proj.url && (
                  <Link
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </Link>
                )}
                {proj.repo && (
                  <Link
                    href={proj.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    <FaGithub />
                    Code
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-10 text-sm text-slate-400 text-center">
        Want to see more? Explore the rest on my<a
          href="https://github.com/haarisyahya"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80"
        > GitHub
        </a>
        .
      </p>
    </div>
  );
}
