"use client";

import { PROJECTS_DATA, getTechColor } from "@/constants";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export function CaseStudyModal({
  project,
  isOpen,
  onClose,
}: {
  project: (typeof PROJECTS_DATA)[0];
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!project.caseStudy) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-[--foreground]/20 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-[--background-secondary] border border-[--border] rounded-xl z-[60] overflow-hidden shadow-2xl flex flex-col"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-[--background-secondary] border-b border-[--border] p-4 md:p-6 flex justify-between items-start shrink-0">
              <div>
                <span className="text-xs font-mono text-accent uppercase tracking-wider mb-1 block">
                  Case Study
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[--foreground]">
                  {project.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-[--border] rounded-md transition-colors text-[--foreground]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 md:p-6 overflow-y-auto custom-scrollbar">
              <div className="max-w-3xl mx-auto space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-accent flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" /> The
                    Challenge
                  </h3>
                  <p
                    className="text-[--foreground]/90 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: project.caseStudy.challenge,
                    }}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-accent flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" /> The
                    Solution
                  </h3>
                  <p
                    className="text-[--foreground]/90 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: project.caseStudy.solution,
                    }}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-accent flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />{" "}
                    Learnings
                  </h3>
                  <p
                    className="text-[--foreground]/90 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: project.caseStudy.learnings,
                    }}
                  />
                </div>

                <div className="pt-6 border-t border-[--border]">
                  <h4 className="text-sm font-semibold mb-4 text-[--foreground-secondary]">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-xs font-medium px-2.5 py-1 rounded-md border ${getTechColor(t)}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
