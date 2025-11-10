'use client';

export default function MeshGradient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient-animated opacity-40 dark:opacity-20" />
      {/* Base gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/80 dark:from-slate-950/80 dark:via-slate-950/60 dark:to-slate-950/80 backdrop-blur-sm" />
    </div>
  );
}

