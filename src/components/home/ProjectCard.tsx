"use client";

import { PROJECTS_DATA, getTechColor, getTechIconComponent } from "@/constants";
import { ArrowUpRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

export function ProjectCard({
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
    <motion.div
      whileHover={{ y: -5 }}
      className={`group relative h-full flex flex-col p-5 md:p-6 bg-[--background-secondary]/30 hover:bg-[--background-secondary]/60 border border-[--border] rounded-xl transition-colors duration-300 ${featured ? "md:p-8" : ""}`}
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
    </motion.div>
  );
}
