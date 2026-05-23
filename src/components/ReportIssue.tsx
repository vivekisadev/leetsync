"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquarePlus, X, Send } from "lucide-react";
import toast from "react-hot-toast";

export function ReportIssue() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [description, setDescription] = useState("");
  const [type, setType] = useState("bug");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          description,
          type,
          email,
          source: "web",
        }),
      });

      if (res.ok) {
        toast.success("Report submitted successfully!");
        setIsOpen(false);
        setDescription("");
        setEmail("");
      } else {
        toast.error("Failed to submit report");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg shadow-black/10 flex items-center justify-center bg-[var(--surface-elevated)] border border-[var(--border-glow)] text-[var(--text-primary)] hover:scale-105 transition-transform"
        onClick={() => setIsOpen(true)}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageSquarePlus size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[var(--surface-base)] border border-[var(--border-subtle)] w-full max-w-md p-6 rounded-[var(--radius-lg)] shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold font-space">Report an Issue</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-[var(--text-secondary)]">Issue Type</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-secondary)] transition-colors"
                  >
                    <option value="bug">Bug Report</option>
                    <option value="feedback">Feature Request / Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-[var(--text-secondary)]">Description (Optional)</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-secondary)] transition-colors min-h-[100px] resize-none"
                    placeholder="Tell us what happened..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-[var(--text-secondary)]">Email (Optional)</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-secondary)] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-[var(--text-primary)] text-[var(--background)] font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : (
                    <>
                      <Send size={18} /> Submit Report
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
