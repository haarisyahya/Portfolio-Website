'use client';

export default function AnimatedGradient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-950 dark:via-indigo-950 dark:to-purple-950">
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-400 opacity-20 blur-3xl animate-blob dark:bg-purple-600" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-indigo-400 opacity-20 blur-3xl animate-blob animation-delay-2000 dark:bg-indigo-600" />
        <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400 opacity-20 blur-3xl animate-blob animation-delay-4000 dark:bg-pink-600" />
      </div>
    </div>
  );
}

