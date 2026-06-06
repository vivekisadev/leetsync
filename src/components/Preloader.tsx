"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextShimmer } from "./TextShimmer";

export function Preloader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 1.8 seconds for a premium feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader-bg"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "var(--background)",
              zIndex: 99998,
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {loading && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 99999,
              pointerEvents: "none",
            }}
          >
            <motion.div
              layoutId="logo-text"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <TextShimmer className="display-font" style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", fontWeight: "bold", margin: 0, letterSpacing: "-0.03em" }}>
                Codeship
              </TextShimmer>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: loading ? 0 : 1, y: loading ? 15 : 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
      >
        {children}
      </motion.div>
    </>
  );
}
