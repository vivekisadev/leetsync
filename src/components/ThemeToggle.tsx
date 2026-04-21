"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width: 40, height: 40 }} />; // placeholder
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        borderRadius: "12px",
        background: "var(--surface-elevated)",
        border: "1px solid var(--border-subtle)",
        color: "var(--text-primary)",
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
      aria-label="Toggle Theme"
      className="theme-toggle"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      <style jsx>{`
        .theme-toggle:hover {
          border-color: var(--border-glow);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </button>
  );
}
