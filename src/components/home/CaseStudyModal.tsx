"use client";

import { getTechColor } from "@/constants";
import { Project } from "@/types";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import ReactMarkdown from "react-markdown";

export function CaseStudyModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!project.caseStudy) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-[#0a0a0b] text-white border border-white/10 rounded-xl z-[60] overflow-hidden shadow-2xl flex flex-col dark"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-[#0a0a0b] border-b border-white/10 p-4 md:p-6 flex justify-between items-start shrink-0">
              <div>
                <span className="text-xs font-mono text-accent uppercase tracking-wider mb-1 block">
                  Case Study
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {project.title}
                </h2>
              </div>
              <div className="flex items-center gap-2">
                {project.links.github && (
                  <a
                    href={
                      typeof project.links.github === "string"
                        ? project.links.github
                        : project.links.github[0].url
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-white/10 rounded-md transition-colors text-white/70 hover:text-white"
                    title="View Source on GitHub"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-white/10 rounded-md transition-colors text-white/70 hover:text-white"
                    title="Visit Live Project"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-md transition-colors text-white/70 hover:text-white"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-4 md:p-6 overflow-y-auto custom-scrollbar">
              <div className="max-w-3xl mx-auto space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-accent flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" /> The
                    Challenge
                  </h3>
                  <div className="text-white/90 leading-relaxed prose prose-invert prose-sm max-w-none">
                    <ReactMarkdown>{project.caseStudy.challenge}</ReactMarkdown>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-accent flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" /> The
                    Solution
                  </h3>
                  <div className="text-white/90 leading-relaxed prose prose-invert prose-sm max-w-none">
                    <ReactMarkdown>{project.caseStudy.solution}</ReactMarkdown>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-accent flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />{" "}
                    Learnings
                  </h3>
                  <div className="text-white/90 leading-relaxed prose prose-invert prose-sm max-w-none">
                    <ReactMarkdown>{project.caseStudy.learnings}</ReactMarkdown>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <h4 className="text-sm font-semibold mb-4 text-white/50">
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
