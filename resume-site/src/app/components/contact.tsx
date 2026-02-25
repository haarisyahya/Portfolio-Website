// components/contact.tsx
import { FiMail, FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';
import Link from 'next/link';

export default function Contact() {
  return (
    <footer className="max-w-5xl mx-auto px-4 text-center py-8">
      <h2 className="text-2xl font-semibold mb-4 text-white">Get in Touch</h2>

      <div className="flex justify-center gap-6 mb-6 flex-wrap">
        
        <Link
          href="https://github.com/haarisyahya"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <FiGithub />
          <span className="text-white">GitHub</span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/haaris-y-398ba9195/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <FiLinkedin />
          <span className="text-white">LinkedIn</span>
        </Link>
      </div>

      <p className="text-sm text-slate-300">
        © {new Date().getFullYear()} Haaris Yahya. All rights reserved.
      </p>
    </footer>
  );
}
