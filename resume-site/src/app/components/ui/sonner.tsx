// components/ui/sonner.tsx
'use client';

import { Toaster as SonnerToaster, toast } from 'sonner';

export { toast }; // re-export for convenient import elsewhere

export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: 'var(--toast-bg, #1f2937)',
          color: 'var(--toast-fg, #f9fafb)',
        },
      }}
    />
  );
}
