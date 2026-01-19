"use client";

import {
    getTechColor,
    getTechIconComponent,
    TECH_CATEGORIES,
} from "@/constants";
import {
    ArrowUpRight,
    Github,
    Linkedin,
    Terminal,
    Cpu,
    Boxes,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { LaserBackground } from "@/components/ui/LaserBackground";
import { ProjectCard } from "@/components/home/ProjectCard";
import dynamic from "next/dynamic";
import { Project } from "@/types";

const CaseStudyModal = dynamic(
    () =>
        import("@/components/home/CaseStudyModal").then(
            (mod) => mod.CaseStudyModal,
        ),
    { ssr: false },
);

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

const techListVar = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
    },
};

const techBadgeVar = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

interface HomeClientProps {
    initialProjects: Project[];
}

export default function HomeClient({ initialProjects }: HomeClientProps) {
    const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

    const activeProject = initialProjects.find((p) => p.id === activeCaseStudy);

    // Split featured projects
    const featuredProjects = initialProjects.filter(
        (p) => p.category === "Featured Work",
    );
    const otherProjects = initialProjects.filter(
        (p) => p.category !== "Featured Work",
    );

    const mainFeatured = featuredProjects[0];
    const secondaryFeatured = featuredProjects.slice(1, 3);
    const tertiaryFeatured = featuredProjects.slice(3);

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
                {mainFeatured && (
                    <motion.div variants={itemVar} className="md:col-span-7">
                        <ProjectCard
                            project={mainFeatured}
                            onOpenCaseStudy={setActiveCaseStudy}
                            featured={true}
                        />
                    </motion.div>
                )}

                {/* 4. Skills Categories (Span 5) */}
                <motion.div
                    variants={itemVar}
                    className="md:col-span-5 bg-[--background-secondary]/30 border border-[--border] rounded-xl p-6 md:p-8 flex flex-col gap-6"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <Terminal className="w-5 h-5 text-accent" />
                        <h3 className="font-bold text-lg">Tech Stack</h3>
                    </div>

                    <motion.div variants={techListVar} className="space-y-6">
                        {Object.entries(TECH_CATEGORIES).map(([category, techs]) => (
                            <motion.div key={category} variants={itemVar}>
                                <h4 className="text-xs font-mono uppercase text-[--foreground-secondary] mb-3 tracking-wider font-semibold opacity-80">
                                    {category}
                                </h4>
                                <motion.div
                                    variants={techListVar}
                                    className="flex flex-wrap gap-2"
                                >
                                    {techs.map((tech) => {
                                        const Icon = getTechIconComponent(tech);
                                        return (
                                            <motion.span
                                                variants={techBadgeVar}
                                                key={tech}
                                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium border transition-transform hover:scale-105 cursor-default ${getTechColor(tech)}`}
                                            >
                                                {Icon && <Icon className="w-3 h-3" />}
                                                {tech}
                                            </motion.span>
                                        );
                                    })}
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
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
                {(tertiaryFeatured.length > 0 || otherProjects.length > 0) && (
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
                )}
            </div>

            {/* Footer Micro-Credits */}
            <motion.div
                variants={itemVar}
                className="mt-12 text-center opacity-40 hover:opacity-100 transition-opacity"
            >
                <p className="text-[10px] font-mono uppercase tracking-widest">
                    Designed in the Dark &bull; Powered by Supabase & Next.js &bull; &copy; 2026
                </p>
            </motion.div>
        </motion.div>
    );
}
