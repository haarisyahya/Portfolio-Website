// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import ThemeProvider from './components/ui/ThemeProvider';
import { Toaster } from './components/ui/sonner';
import GalaxyBackground from './components/ui/GalaxyBackground';
import Navigation from './components/ui/Navigation';
// import AnimatedGradient from './components/ui/AnimatedGradient';
// import ParticleBackground from './components/ui/ParticleBackground';
// import MeshGradient from './components/ui/MeshGradient';
// import FloatingShapes from './components/ui/FloatingShapes';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Haaris Yahya – Full‑Stack Engineer',
  description:
    'Personal résumé site built with Next.js, TypeScript and Tailwind CSS.',
  openGraph: {
    title: 'Your Name – Résumé',
    description: 'Software Engineer, cybersecurity enthusiast, lifelong learner.',
    url: 'https://haarisy.dev',
    type: 'website',
    images: [{ url: '/og-image.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={quicksand.className}>
      <body className="text-slate-100 min-h-screen relative bg-transparent">
        <GalaxyBackground />
        <Navigation />
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
