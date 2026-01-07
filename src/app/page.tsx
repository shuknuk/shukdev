"use client";

import { LaserBackground } from "@/components/ui/LaserBackground";
import { PROJECTS_DATA } from "@/constants";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
    // Top 3 flagship projects for "signal compression"
    const flagshipProjects = PROJECTS_DATA
        .filter(p => p.category === "Featured Work" && (p.rank === "Gold" || p.rank === "In Progress"))
        .slice(0, 3);

    return (
        <div className="min-h-screen">
            {/* Hero Section - WHO I AM in 15 seconds */}
            <LaserBackground containerClassName="min-h-[70vh] border-b border-neutral-200 dark:border-neutral-800">
                <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
                    {/* Name & Identity */}
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                        Kinshuk Goel
                    </h1>

                    {/* Clear Lane Statement - What I do */}
                    <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed mb-8">
                        CS student at <span className="text-neutral-900 dark:text-neutral-100 font-semibold">Rutgers</span>.
                        I build <span className="text-neutral-900 dark:text-neutral-100 font-semibold">AI tools</span> and
                        <span className="text-neutral-900 dark:text-neutral-100 font-semibold"> full-stack apps</span> that
                        actually get used in real workflows.
                    </p>

                    {/* Quick Links */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="https://github.com/shuknuk"
                            target="_blank"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-neutral-200 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            GitHub
                        </Link>
                        <Link
                            href="https://linkedin.com/in/kinshukgoel2"
                            target="_blank"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-neutral-200 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        >
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                        </Link>
                        <Link
                            href="mailto:kinshukgoel2@gmail.com"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-neutral-200 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            Email
                        </Link>
                    </div>
                </div>
            </LaserBackground>

            {/* About Section - Quick context */}
            <section className="border-b border-neutral-200 dark:border-neutral-800">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12">
                    <div className="md:col-span-7 p-8 md:p-12 md:border-r border-neutral-200 dark:border-neutral-800">
                        <span className="font-mono text-xs text-green-600 uppercase tracking-wider mb-4 block">
                            About
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">What I'm Working On</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            I'm an 18-year-old CS student at Rutgers building AI agents and full-stack platforms.
                            Right now I'm digging into ML theory, PyTorch, and LLM fine-tuning to build smarter,
                            more autonomous systems. I've shipped production apps used by real people—not just demos.
                        </p>
                    </div>

                    {/* Tech Focus - Quick scan */}
                    <div className="md:col-span-5 p-8 md:p-12 bg-neutral-50 dark:bg-neutral-900/50 border-t md:border-t-0 border-neutral-200 dark:border-neutral-800">
                        <span className="font-mono text-xs text-green-600 uppercase tracking-wider mb-4 block">
                            Stack
                        </span>
                        <div className="space-y-3 text-sm">
                            <div>
                                <span className="font-semibold">Languages:</span>{" "}
                                <span className="text-neutral-600 dark:text-neutral-400">TypeScript, Python, Java</span>
                            </div>
                            <div>
                                <span className="font-semibold">Frontend:</span>{" "}
                                <span className="text-neutral-600 dark:text-neutral-400">Next.js, React, TailwindCSS</span>
                            </div>
                            <div>
                                <span className="font-semibold">Backend:</span>{" "}
                                <span className="text-neutral-600 dark:text-neutral-400">FastAPI, Node.js, Docker</span>
                            </div>
                            <div>
                                <span className="font-semibold">AI/ML:</span>{" "}
                                <span className="text-neutral-600 dark:text-neutral-400">LangChain, Gemini, PyTorch</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section - The Evidence */}
            <section className="border-b border-neutral-200 dark:border-neutral-800">
                <div className="max-w-5xl mx-auto px-6 py-8 border-b border-neutral-200 dark:border-neutral-800">
                    <span className="font-mono text-xs text-green-600 uppercase tracking-wider mb-4 block">
                        Projects
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold">Flagship Work</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-2">
                        Production apps shipped to real users—not just localhost demos.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200 dark:divide-neutral-800">
                    {flagshipProjects.map((project, idx) => {
                        const href = project.links.live ||
                            (typeof project.links.github === 'string' ? project.links.github : project.links.github?.[0]?.url) ||
                            "#";

                        return (
                            <Link
                                key={project.id}
                                href={href}
                                target="_blank"
                                className="group p-6 md:p-8 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors flex flex-col h-full"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs font-mono text-neutral-400">
                                        {project.rank === "In Progress" ? "🚧 In Progress" : `✓ ${project.rank}`}
                                    </span>
                                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-green-600 transition-colors" />
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5 mt-auto">
                                    {project.tech.slice(0, 4).map((t) => (
                                        <span
                                            key={t}
                                            className="text-[10px] uppercase font-medium px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded text-neutral-500 dark:text-neutral-400"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* View All Projects Link */}
                <div className="max-w-5xl mx-auto px-6 py-6 border-t border-neutral-200 dark:border-neutral-800">
                    <Link
                        href="https://github.com/shuknuk?tab=repositories"
                        target="_blank"
                        className="text-sm font-medium text-green-600 hover:underline inline-flex items-center gap-1"
                    >
                        View all projects on GitHub <ArrowUpRight className="w-3 h-3" />
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 text-center text-neutral-500 text-sm">
                <p className="italic">"Make stuff. Break it. Build it again."</p>
            </footer>
        </div>
    );
}
