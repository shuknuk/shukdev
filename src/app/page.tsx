"use client";

import { PROJECTS_DATA, getTechColor, getTechIconComponent } from "@/constants";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  BookOpen,
  X,
  Code,
  Terminal,
  Cpu,
  Database,
  Cloud,
  Boxes,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { LaserBackground } from "@/components/ui/LaserBackground";

// Animation variants
const containerVar = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVar = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

// --- Sub-Components ---

function CaseStudyModal({
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-white dark:bg-[--background] border border-[--border] rounded-xl z-[60] overflow-hidden shadow-2xl flex flex-col"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-gray-50/80 dark:bg-[--background-secondary]/50 border-b border-[--border] p-4 md:p-6 flex justify-between items-start shrink-0">
              <div>
                <span className="text-xs font-mono text-accent uppercase tracking-wider mb-1 block">
                  Case Study
                </span>
                <h2 className="text-2xl md:text-3xl font-bold">
                  {project.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-[--background-secondary] rounded-md transition-colors"
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
                    className="text-gray-700 dark:text-[--foreground-secondary] leading-relaxed"
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
                    className="text-gray-700 dark:text-[--foreground-secondary] leading-relaxed"
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
                    className="text-gray-700 dark:text-[--foreground-secondary] leading-relaxed"
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

function ProjectCard({
  project,
  onOpenCaseStudy,
  featured = false,
}: {
  project: (typeof PROJECTS_DATA)[0];
  onOpenCaseStudy: (id: string) => void;
  featured?: boolean;
}) {
  const href =
    project.links.live ||
    (typeof project.links.github === "string"
      ? project.links.github
      : project.links.github?.[0]?.url) ||
    "#";

  return (
    <div
      className={`group relative h-full flex flex-col p-5 md:p-6 bg-[--background-secondary]/30 hover:bg-[--background-secondary]/60 border border-[--border] rounded-xl transition-all duration-300 ${featured ? "md:p-8" : ""}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          {project.rank === "In Progress" ? (
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold bg-yellow-500/10 text-yellow-600 border border-yellow-500/20">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-yellow-500"></span>
              </span>
              Building
            </span>
          ) : (
            <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold bg-[--background] text-[--foreground-secondary] border border-[--border]">
              {project.category === "Featured Work"
                ? "Featured"
                : project.category}
            </span>
          )}
        </div>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Link
            href={href}
            target="_blank"
            className="p-1.5 hover:bg-[--background] rounded-md text-[--foreground-secondary] hover:text-[--foreground] transition-colors"
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <h3
        className={`font-bold mb-2 group-hover:text-accent transition-colors ${featured ? "text-2xl" : "text-lg"}`}
      >
        {project.title}
      </h3>

      <p className="text-[--foreground-secondary] text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
        {project.description}
      </p>

      <div className="flex flex-col gap-4 mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, featured ? 6 : 4).map((t) => {
            const Icon = getTechIconComponent(t);
            return (
              <span
                key={t}
                className={`inline-flex items-center gap-1.5 text-[10px] font-medium px-2 py-1 rounded border ${getTechColor(t)} bg-opacity-50`}
              >
                {Icon && <Icon className="w-3 h-3" />}
                {t}
              </span>
            );
          })}
          {project.tech.length > (featured ? 6 : 4) && (
            <span className="text-[10px] px-2 py-1 text-[--foreground-secondary]">
              +more
            </span>
          )}
        </div>

        {project.caseStudy && (
          <button
            onClick={() => onOpenCaseStudy(project.id)}
            className="w-full mt-2 py-2 flex items-center justify-center gap-2 text-xs font-semibold bg-[--background] border border-[--border] hover:border-accent/50 hover:text-accent rounded-lg transition-all group-hover:shadow-sm"
          >
            <BookOpen className="w-3 h-3" />
            Read Case Study
          </button>
        )}
      </div>
    </div>
  );
}

// --- Main Page Component ---

export default function Home() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

  const featuredProjects = PROJECTS_DATA.filter(
    (p) => p.category === "Featured Work",
  );
  const otherProjects = PROJECTS_DATA.filter(
    (p) => p.category !== "Featured Work",
  );

  // Split featured into main highlight and secondary
  const mainFeatured = featuredProjects[0]; // Usually "In Progress" or top ranked
  const secondaryFeatured = featuredProjects.slice(1, 3);
  const tertiaryFeatured = featuredProjects.slice(3);

  const activeProject = PROJECTS_DATA.find((p) => p.id === activeCaseStudy);

  // Collect all unique tech for the skills card
  const allTech = Array.from(new Set(PROJECTS_DATA.flatMap((p) => p.tech)));
  // Prioritize specific tech for display
  const priorityTech = [
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
    "Docker",
    "TailwindCSS",
    "Supabase",
    "Gemini",
  ];
  const displayTech = [
    ...priorityTech,
    ...allTech.filter((t) => !priorityTech.includes(t)),
  ].slice(0, 15);

  return (
    <motion.div
      className="min-h-[calc(100vh-80px)] p-4 md:p-6 lg:p-8"
      initial="hidden"
      animate="visible"
      variants={containerVar}
    >
      {activeProject && (
        <CaseStudyModal
          project={activeProject}
          isOpen={!!activeCaseStudy}
          onClose={() => setActiveCaseStudy(null)}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 max-w-[1400px] mx-auto">
        {/* 1. Profile Hero (Span 8) */}
        <motion.div
          variants={itemVar}
          className="md:col-span-8 lg:col-span-8 relative group rounded-2xl overflow-hidden border border-[--border] min-h-[300px]"
        >
          <LaserBackground containerClassName="absolute inset-0">
            <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
              <span className="flex items-center gap-2 px-3 py-1 text-[10px] font-mono uppercase border border-success/30 text-success bg-success/5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                Available for hire
              </span>
            </div>
            <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-center">
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
                KINSHUK GOEL
              </h1>
              <p className="text-xl md:text-2xl text-[--foreground-secondary] max-w-xl leading-relaxed mb-6">
                Full-stack engineer building{" "}
                <span className="text-[--foreground] font-semibold">
                  AI agents
                </span>{" "}
                and{" "}
                <span className="text-[--foreground] font-semibold">
                  production platforms
                </span>
                .
              </p>
              <div className="flex gap-4">
                <Link
                  href="mailto:kinshukgoel2@gmail.com"
                  className="px-5 py-2.5 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors flex items-center gap-2 text-sm"
                >
                  Let's Build <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </LaserBackground>
        </motion.div>

        {/* 2. Stats & Socials (Span 4) */}
        <motion.div
          variants={itemVar}
          className="md:col-span-4 flex flex-col gap-4"
        >
          <div className="flex-1 bg-[--background-secondary]/30 border border-[--border] rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden group hover:border-accent/30 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu className="w-24 h-24" />
            </div>
            <div className="relative z-10">
              <span className="text-xs font-mono text-accent uppercase mb-1 block">
                Current Status
              </span>
              <div className="text-lg font-medium text-[--foreground-secondary]">
                CS Student at{" "}
                <span className="text-[--foreground] font-bold">Rutgers</span>.
                <br />
                Obsessed with LLMs & System Design.
              </div>
            </div>
          </div>
          <div className="flex gap-4 h-16">
            <Link
              href="https://github.com/shuknuk"
              target="_blank"
              className="flex-1 bg-[--background-secondary]/30 hover:bg-[--background-secondary] border border-[--border] rounded-xl flex items-center justify-center text-[--foreground-secondary] hover:text-[--foreground] transition-all hover:scale-[1.02]"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/kinshukgoel2"
              target="_blank"
              className="flex-1 bg-[--background-secondary]/30 hover:bg-[--background-secondary] border border-[--border] rounded-xl flex items-center justify-center text-[--foreground-secondary] hover:text-[--foreground] transition-all hover:scale-[1.02]"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </motion.div>

        {/* 3. Main Featured Project (Span 7) */}
        <motion.div variants={itemVar} className="md:col-span-7">
          <ProjectCard
            project={mainFeatured}
            onOpenCaseStudy={setActiveCaseStudy}
            featured={true}
          />
        </motion.div>

        {/* 4. Skills Cloud (Span 5) */}
        <motion.div
          variants={itemVar}
          className="md:col-span-5 bg-[--background-secondary]/30 border border-[--border] rounded-xl p-6 md:p-8 flex flex-col"
        >
          <div className="flex items-center gap-2 mb-6">
            <Terminal className="w-5 h-5 text-accent" />
            <h3 className="font-bold text-lg">Tech Stack</h3>
          </div>
          <div className="flex flex-wrap gap-2 content-start">
            {displayTech.map((tech) => {
              const Icon = getTechIconComponent(tech);
              return (
                <span
                  key={tech}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-transform hover:scale-105 cursor-default ${getTechColor(tech)}`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  {tech}
                </span>
              );
            })}
          </div>
        </motion.div>

        {/* 5. Secondary Featured Projects (Span 6 each) */}
        {secondaryFeatured.map((project) => (
          <motion.div
            variants={itemVar}
            key={project.id}
            className="md:col-span-6"
          >
            <ProjectCard
              project={project}
              onOpenCaseStudy={setActiveCaseStudy}
            />
          </motion.div>
        ))}

        {/* 6. Other Projects List (Span 12) */}
        <motion.div
          variants={itemVar}
          className="md:col-span-12 bg-[--background-secondary]/20 border border-[--border] rounded-xl p-6 md:p-8 mt-2"
        >
          <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
            <Boxes className="w-5 h-5 text-accent" />
            Project Archive
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...tertiaryFeatured, ...otherProjects].map((project) => {
              const href =
                project.links.live ||
                (typeof project.links.github === "string"
                  ? project.links.github
                  : project.links.github?.[0]?.url) ||
                "#";
              return (
                <div
                  key={project.id}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-[--background-secondary]/40 transition-colors group"
                >
                  <div className="mt-1 text-[--foreground-secondary] group-hover:text-accent transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Link
                        href={href}
                        target="_blank"
                        className="font-semibold text-sm hover:underline decoration-accent/50 underline-offset-2"
                      >
                        {project.title}
                      </Link>
                      {project.caseStudy && (
                        <button
                          onClick={() => setActiveCaseStudy(project.id)}
                          className="text-[10px] uppercase font-bold text-accent hover:underline"
                        >
                          [Study]
                        </button>
                      )}
                    </div>
                    <p className="text-xs text-[--foreground-secondary] line-clamp-1">
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Footer Micro-Credits */}
      <motion.div
        variants={itemVar}
        className="mt-12 text-center opacity-40 hover:opacity-100 transition-opacity"
      >
        <p className="text-[10px] font-mono uppercase tracking-widest">
          Designed in the Dark &bull; Built with Next.js &bull; &copy; 2026
        </p>
      </motion.div>
    </motion.div>
  );
}
