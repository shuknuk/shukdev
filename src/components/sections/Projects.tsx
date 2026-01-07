"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, X, ChevronRight } from "lucide-react";
import { PROJECTS_DATA, type Project } from "@/data/projects";

// Flagship projects (first 3 featured)
const FLAGSHIP_IDS = ["zentree-tabs", "resume-analyzer", "brhacks24"];

function GitHubLink({ links }: { links: string | { label: string; url: string }[] }) {
    if (typeof links === "string") {
        return (
            <Link
                href={links}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
                <Github className="w-4 h-4" />
                Code
            </Link>
        );
    }

    return (
        <div className="flex items-center gap-3">
            {links.map((link) => (
                <Link
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    <Github className="w-4 h-4" />
                    {link.label}
                </Link>
            ))}
        </div>
    );
}

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
    if (!project.caseStudy) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-2xl bg-background border border-border rounded-lg shadow-2xl p-6 relative max-h-[85vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-1 rounded-full hover:bg-muted transition-colors"
                >
                    <X className="h-5 w-5 text-muted-foreground" />
                </button>

                <h2 className="text-xl font-bold mb-4 pr-8">{project.title}</h2>

                <div className="space-y-4 text-sm text-muted-foreground overflow-y-auto">
                    <div>
                        <h3 className="font-semibold text-foreground mb-1">Challenge</h3>
                        <p dangerouslySetInnerHTML={{ __html: project.caseStudy.challenge }} />
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground mb-1">Solution</h3>
                        <p dangerouslySetInnerHTML={{ __html: project.caseStudy.solution }} />
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground mb-1">Key Learnings</h3>
                        <p dangerouslySetInnerHTML={{ __html: project.caseStudy.learnings }} />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

function FlagshipProject({ project, onCaseStudy }: { project: Project; onCaseStudy: () => void }) {
    return (
        <article className="grid md:grid-cols-2 gap-6 py-8 border-b border-border">
            {/* Screenshot */}
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden border border-border">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                        Screenshot coming soon
                    </div>
                )}
            </div>

            {/* Info */}
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 4).map((t) => (
                        <span
                            key={t}
                            className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground rounded"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto">
                    {project.links.live && (
                        <Link
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                        </Link>
                    )}
                    {project.links.github && <GitHubLink links={project.links.github} />}
                    {project.caseStudy && (
                        <button
                            onClick={onCaseStudy}
                            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Case Study
                            <ChevronRight className="w-3 h-3" />
                        </button>
                    )}
                </div>
            </div>
        </article>
    );
}

function OtherProject({ project, onCaseStudy }: { project: Project; onCaseStudy: () => void }) {
    return (
        <div className="py-4 border-b border-border last:border-0">
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm">{project.title}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                        {project.description}
                    </p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                    {project.links.live && (
                        <Link
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                        </Link>
                    )}
                    {project.links.github && (
                        <Link
                            href={typeof project.links.github === "string" ? project.links.github : project.links.github[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Github className="w-4 h-4" />
                        </Link>
                    )}
                    {project.caseStudy && (
                        <button
                            onClick={onCaseStudy}
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Details →
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export function Projects() {
    const [modalProject, setModalProject] = useState<Project | null>(null);

    const flagshipProjects = PROJECTS_DATA.filter((p) => FLAGSHIP_IDS.includes(p.id));
    const otherProjects = PROJECTS_DATA.filter((p) => !FLAGSHIP_IDS.includes(p.id));

    return (
        <section id="projects" className="px-6 md:px-10 py-12">
            {/* Flagship Projects */}
            <div className="mb-12">
                <h2 className="text-xs font-medium uppercase tracking-wider text-primary mb-8">
                    01 // Featured Work
                </h2>

                <div>
                    {flagshipProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        >
                            <FlagshipProject
                                project={project}
                                onCaseStudy={() => setModalProject(project)}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Other Projects */}
            <div>
                <h2 className="text-xs font-medium uppercase tracking-wider text-primary mb-6">
                    02 // Other Projects
                </h2>

                <div className="border-t border-border">
                    {otherProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                        >
                            <OtherProject
                                project={project}
                                onCaseStudy={() => setModalProject(project)}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Case Study Modal */}
            <AnimatePresence>
                {modalProject && (
                    <CaseStudyModal
                        project={modalProject}
                        onClose={() => setModalProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
