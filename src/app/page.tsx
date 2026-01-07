"use client";

import { PROJECTS_DATA } from "@/constants";
import { ArrowUpRight, Github, Linkedin, Mail, BookOpen, X, Code, Cpu, Database, Cloud, Terminal, Boxes } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LaserBackground } from "@/components/ui/LaserBackground";

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const stagger = {
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

// Floating background icons component
function FloatingIcons() {
    const icons = [
        { Icon: Code, x: "10%", y: "20%", size: 24, delay: 0 },
        { Icon: Cpu, x: "85%", y: "15%", size: 20, delay: 0.5 },
        { Icon: Database, x: "75%", y: "60%", size: 22, delay: 1 },
        { Icon: Cloud, x: "15%", y: "70%", size: 26, delay: 1.5 },
        { Icon: Terminal, x: "90%", y: "80%", size: 18, delay: 2 },
        { Icon: Boxes, x: "5%", y: "45%", size: 20, delay: 2.5 },
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {icons.map(({ Icon, x, y, size, delay }, idx) => (
                <motion.div
                    key={idx}
                    className="absolute text-[--border] opacity-30"
                    style={{ left: x, top: y }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: 0.2,
                        scale: 1,
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 4,
                        delay,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                >
                    <Icon size={size} strokeWidth={1} />
                </motion.div>
            ))}
        </div>
    );
}

// Nord Mountain SVG for footer
function NordMountains() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg
                className="absolute bottom-0 left-0 w-full"
                style={{ height: '180px' }}
                viewBox="0 0 1440 200"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Back mountain range - lightest */}
                <path
                    d="M0,200 L0,120 L200,60 L400,100 L600,40 L800,80 L1000,30 L1200,70 L1440,50 L1440,200 Z"
                    fill="#4C566A"
                    fillOpacity="0.15"
                />
                {/* Middle mountain range */}
                <path
                    d="M0,200 L0,140 L150,90 L350,120 L500,70 L700,110 L900,60 L1100,100 L1300,80 L1440,100 L1440,200 Z"
                    fill="#4C566A"
                    fillOpacity="0.25"
                />
                {/* Front mountain range - darkest */}
                <path
                    d="M0,200 L0,160 L100,130 L250,150 L400,110 L600,140 L800,100 L1000,130 L1200,120 L1440,140 L1440,200 Z"
                    fill="#4C566A"
                    fillOpacity="0.35"
                />

                {/* Snow caps */}
                <path d="M598,42 L600,40 L602,42 Z" fill="white" fillOpacity="0.3" />
                <path d="M998,32 L1000,30 L1002,32 Z" fill="white" fillOpacity="0.3" />
                <path d="M198,62 L200,60 L202,62 Z" fill="white" fillOpacity="0.3" />
            </svg>

            {/* Aurora glow at top */}
            <div
                className="absolute top-0 left-1/4 right-1/4 h-16 rounded-full blur-3xl"
                style={{
                    background: 'linear-gradient(90deg, rgba(136,192,208,0.1), rgba(163,190,140,0.08), rgba(136,192,208,0.1))'
                }}
            />
        </div>
    );
}

// Case Study Modal Component
function CaseStudyModal({
    project,
    isOpen,
    onClose
}: {
    project: typeof PROJECTS_DATA[0];
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
                        className="fixed inset-4 md:inset-10 lg:inset-20 bg-[--background] border border-[--border] rounded-lg z-50 overflow-auto shadow-2xl"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="sticky top-0 bg-[--background] border-b border-[--border] p-4 md:p-6 flex justify-between items-start">
                            <div>
                                <span className="text-xs font-mono text-accent uppercase tracking-wider mb-2 block">
                                    Case Study
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-[--background-secondary] rounded-md transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-4 md:p-6 space-y-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-accent">The Challenge</h3>
                                <p
                                    className="text-[--foreground-secondary] leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: project.caseStudy.challenge }}
                                />
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-accent">The Solution</h3>
                                <p
                                    className="text-[--foreground-secondary] leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: project.caseStudy.solution }}
                                />
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-3 text-accent">Learnings</h3>
                                <p
                                    className="text-[--foreground-secondary] leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: project.caseStudy.learnings }}
                                />
                            </div>

                            <div className="pt-4 border-t border-[--border]">
                                <h4 className="text-sm font-semibold mb-3">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs font-medium px-3 py-1 bg-[--background-secondary] rounded-full text-[--foreground-secondary]"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export default function Home() {
    const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

    const flagshipProjects = PROJECTS_DATA
        .filter(p => p.category === "Featured Work" && (p.rank === "Gold" || p.rank === "In Progress"))
        .slice(0, 3);

    const otherProjects = PROJECTS_DATA.filter(
        p => !flagshipProjects.find(fp => fp.id === p.id)
    );

    const activeProject = PROJECTS_DATA.find(p => p.id === activeCaseStudy);

    return (
        <div className="min-h-screen">
            {activeProject && (
                <CaseStudyModal
                    project={activeProject}
                    isOpen={!!activeCaseStudy}
                    onClose={() => setActiveCaseStudy(null)}
                />
            )}

            {/* Hero Section with floating icons */}
            <LaserBackground containerClassName="min-h-[70vh] border-b border-[--border] relative">
                <FloatingIcons />
                <motion.div
                    className="max-w-5xl mx-auto px-6 py-16 md:py-24 relative z-10"
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                >
                    <motion.h1
                        className="text-5xl md:text-7xl font-black tracking-tight mb-6"
                        variants={fadeIn}
                        transition={{ duration: 0.5 }}
                    >
                        Kinshuk Goel
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-[--foreground-secondary] max-w-2xl leading-relaxed mb-8"
                        variants={fadeIn}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        CS student at <span className="text-[--foreground] font-semibold">Rutgers</span>.
                        I build <span className="text-[--foreground] font-semibold">AI tools</span> and
                        <span className="text-[--foreground] font-semibold"> full-stack apps</span> that
                        actually get used in real workflows.
                    </motion.p>

                    <motion.div
                        className="flex items-center gap-4"
                        variants={fadeIn}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link
                            href="https://github.com/shuknuk"
                            target="_blank"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-[--border] rounded-md hover:bg-[--background-secondary] transition-all duration-200 hover:scale-105"
                        >
                            <Github className="w-4 h-4" />
                            GitHub
                        </Link>
                        <Link
                            href="https://linkedin.com/in/kinshukgoel2"
                            target="_blank"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-[--border] rounded-md hover:bg-[--background-secondary] transition-all duration-200 hover:scale-105"
                        >
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                        </Link>
                        <Link
                            href="mailto:kinshukgoel2@gmail.com"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-[--border] rounded-md hover:bg-[--background-secondary] transition-all duration-200 hover:scale-105"
                        >
                            <Mail className="w-4 h-4" />
                            Email
                        </Link>
                    </motion.div>
                </motion.div>
            </LaserBackground>

            {/* About Section */}
            <motion.section
                className="border-b border-[--border]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12">
                    <motion.div
                        className="md:col-span-7 p-8 md:p-12 md:border-r border-[--border]"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <span className="font-mono text-xs text-accent uppercase tracking-wider mb-4 block">
                            About
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">What I'm Working On</h2>
                        <p className="text-[--foreground-secondary] leading-relaxed">
                            I'm an 18-year-old CS student at Rutgers building AI agents and full-stack platforms.
                            Right now I'm digging into ML theory, PyTorch, and LLM fine-tuning to build smarter,
                            more autonomous systems. I've shipped production apps used by real people—not just demos.
                        </p>
                    </motion.div>

                    <motion.div
                        className="md:col-span-5 p-8 md:p-12 bg-[--background-secondary] border-t md:border-t-0 border-[--border] relative overflow-hidden"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {/* Subtle tech icon in corner */}
                        <Cpu className="absolute -right-4 -bottom-4 w-24 h-24 text-[--border] opacity-20" strokeWidth={0.5} />

                        <span className="font-mono text-xs text-accent uppercase tracking-wider mb-4 block relative z-10">
                            Stack
                        </span>
                        <div className="space-y-3 text-sm relative z-10">
                            <div>
                                <span className="font-semibold">Languages:</span>{" "}
                                <span className="text-[--foreground-secondary]">TypeScript, Python, Java</span>
                            </div>
                            <div>
                                <span className="font-semibold">Frontend:</span>{" "}
                                <span className="text-[--foreground-secondary]">Next.js, React, TailwindCSS</span>
                            </div>
                            <div>
                                <span className="font-semibold">Backend:</span>{" "}
                                <span className="text-[--foreground-secondary]">FastAPI, Node.js, Docker</span>
                            </div>
                            <div>
                                <span className="font-semibold">AI/ML:</span>{" "}
                                <span className="text-[--foreground-secondary]">LangChain, Gemini, PyTorch</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Flagship Projects Section */}
            <section id="projects" className="border-b border-[--border]">
                <motion.div
                    className="max-w-5xl mx-auto px-6 py-8 border-b border-[--border]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="font-mono text-xs text-accent uppercase tracking-wider mb-4 block">
                        Projects
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold">Flagship Work</h2>
                    <p className="text-[--foreground-secondary] mt-2">
                        Production apps shipped to real users—not just localhost demos.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[--border]">
                    {flagshipProjects.map((project, idx) => {
                        const href = project.links.live ||
                            (typeof project.links.github === 'string' ? project.links.github : project.links.github?.[0]?.url) ||
                            "#";

                        return (
                            <motion.div
                                key={project.id}
                                className="p-6 md:p-8 flex flex-col h-full"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs font-mono text-[--foreground-secondary]">
                                        {project.rank === "In Progress" ? "🚧 In Progress" : `✓ ${project.rank}`}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                                <p className="text-[--foreground-secondary] text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.tech.slice(0, 3).map((t) => (
                                        <span
                                            key={t}
                                            className="text-[10px] uppercase font-medium px-2 py-0.5 bg-[--background-secondary] rounded text-[--foreground-secondary]"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-2 mt-auto">
                                    <Link
                                        href={href}
                                        target="_blank"
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-[--border] rounded hover:bg-[--background-secondary] transition-colors"
                                    >
                                        View Project <ArrowUpRight className="w-3 h-3" />
                                    </Link>
                                    {project.caseStudy && (
                                        <button
                                            onClick={() => setActiveCaseStudy(project.id)}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-accent text-white rounded hover:opacity-90 transition-opacity"
                                        >
                                            <BookOpen className="w-3 h-3" />
                                            Case Study
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Other Projects Section */}
            <section className="border-b border-[--border]">
                <motion.div
                    className="max-w-5xl mx-auto px-6 py-8 border-b border-[--border]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="font-mono text-xs text-accent uppercase tracking-wider mb-4 block">
                        More Work
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold">Other Projects</h2>
                    <p className="text-[--foreground-secondary] mt-2">
                        Side projects, experiments, and creative explorations.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto divide-y divide-[--border]">
                    {otherProjects.map((project, idx) => {
                        const href = project.links.live ||
                            (typeof project.links.github === 'string' ? project.links.github : project.links.github?.[0]?.url) ||
                            "#";

                        return (
                            <motion.div
                                key={project.id}
                                className="px-6 py-4 flex flex-col md:flex-row md:items-center gap-4 hover:bg-[--background-secondary] transition-colors"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                            >
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-1">
                                        <h3 className="font-semibold">{project.title}</h3>
                                        <span className="text-[10px] font-mono text-[--foreground-secondary] uppercase">
                                            {project.category}
                                        </span>
                                    </div>
                                    <p className="text-sm text-[--foreground-secondary] line-clamp-1">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                    {project.caseStudy && (
                                        <button
                                            onClick={() => setActiveCaseStudy(project.id)}
                                            className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-accent hover:underline"
                                        >
                                            <BookOpen className="w-3 h-3" />
                                            Case Study
                                        </button>
                                    )}
                                    <Link
                                        href={href}
                                        target="_blank"
                                        className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-[--foreground-secondary] hover:text-[--foreground] transition-colors"
                                    >
                                        View <ArrowUpRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Footer with Nord Mountains */}
            <motion.footer
                className="relative py-24 px-6 text-center overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <NordMountains />
                <p className="italic text-[--foreground-secondary] text-sm relative z-10">
                    "Make stuff. Break it. Build it again."
                </p>
                <p className="text-xs text-[--foreground-secondary] mt-4 opacity-60 relative z-10">
                    Built with Next.js, TailwindCSS & Nord
                </p>
            </motion.footer>
        </div>
    );
}
