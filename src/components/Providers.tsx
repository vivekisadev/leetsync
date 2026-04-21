"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
      <SessionProvider>
        {children}
        <Toaster 
          position="top-center"
          toastOptions={{
            style: {
              background: 'var(--surface-elevated)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-subtle)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              borderRadius: '12px',
            },
          }}
        />
      </SessionProvider>
    </ThemeProvider>
  );
}
