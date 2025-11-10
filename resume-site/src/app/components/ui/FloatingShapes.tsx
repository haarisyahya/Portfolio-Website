'use client';

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob dark:bg-purple-800 dark:mix-blend-soft-light" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 dark:bg-yellow-800 dark:mix-blend-soft-light" />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 dark:bg-pink-800 dark:mix-blend-soft-light" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-indigo-400/30 rotate-45 animate-float dark:border-indigo-600/30" />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-purple-400/30 rounded-full animate-float animation-delay-2000 dark:border-purple-600/30" />
      <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-pink-400/20 rotate-12 animate-float animation-delay-4000 dark:bg-pink-600/20" />
    </div>
  );
}

