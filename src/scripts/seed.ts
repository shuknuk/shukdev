
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Missing Supabase environment variables");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const PROJECTS_DATA = [
    {
        id: "karebud",
        title: "KareBud",
        category: "Featured Work",
        rank: "In Progress",
        description:
            "AI-powered patient management system with speech-to-text automated records. Architected a relational database schema in Supabase for complex patient histories and built a visual timeline interface using React.",
        tech: [
            "Next.js",
            "Supabase",
            "TypeScript",
            "OpenAI API",
            "Postgres",
            "React",
        ],
        links: {
            github: "https://github.com/shuknuk/karebud",
        },
        caseStudy: {
            challenge:
                "Healthcare providers spend excessive time on manual documentation, reducing patient care quality. The challenge was building an AI-native platform that automates clinical note-taking while maintaining HIPAA-compliant data architecture and providing intuitive visualization of complex patient histories.",
            solution:
                "I architected a <strong>relational database schema in Supabase</strong> to model complex patient histories with nested relationships between encounters, diagnoses, medications, and clinical notes. The frontend uses <strong>React with TypeScript</strong> to render a visual timeline interface that surfaces relevant patient context instantly. <strong>OpenAI's speech-to-text API</strong> powers the automated records feature, transcribing doctor-patient conversations into structured clinical notes. The system uses <strong>Next.js</strong> for server-side rendering and API routes that securely communicate with the Supabase backend.",
            learnings:
                "This project deepened my understanding of relational database design at scale—modeling one-to-many and many-to-many relationships for real clinical workflows. Building the timeline visualization taught me advanced React patterns for rendering complex, nested data structures efficiently.",
        },
    },
    {
        id: "zentreetabs",
        title: "ZenTreeTabs",
        category: "Featured Work",
        rank: "Gold",
        description:
            "Vertical tab management extension optimizing browser memory and workflow. I engineered a recursive tree data structure to visualize tab hierarchy and implemented on device AI for semantic grouping. Published open source to provide an elegant solution for horizontal tab overload.",
        tech: [
            "JavaScript",
            "Chrome Side Panel API",
            "DOM Manipulation",
            "CSS3",
            "HTML5",
            "Transformers.js",
            "MiniLM",
        ],
        links: {
            github: "https://github.com/shuknuk/zentreetabs",
        },
        caseStudy: {
            challenge:
                "Browser tabs quickly spiral out of control during deep research sessions. Horizontal tab bars become unusable past 20 tabs which essentially destroys context and workflow. The challenge was engineering a performant tree visualization that preserves tab relationships while minimizing memory overhead. I needed a way to organize chaos without adding more manual work for the user.",
            solution:
                "I engineered a recursive tree data structure to model parent child relationships and nested tabs under their opener automatically. The extension uses the Chrome Side Panel API with vanilla JavaScript for zero dependency performance. For the intelligent grouping I implemented on device AI using MiniLM. This model provides semantic embeddings by computing cosine similarity between tab titles and domains to detect similar intents. Since MiniLM is purely for signals I built a deterministic logic engine on top to handle the reasoning. By using rules like time windows and session continuity I created a system that groups tabs by actual tasks with 100 percent predictability. This approach avoids the inconsistency of probabilistic LLMs while keeping everything local via Transformers.js. Your data never leaves the device and performance stays snappy because there is no server roundtrip.",
            learnings:
                "Building without frameworks forced me to deeply understand recursive data structures and event delegation patterns. Managing nested state while keeping the UI in sync was an interesting challenge in itself. I discovered that you do not always need a massive cloud model to achieve smart features. Combining lightweight embeddings with solid deterministic rules provides a perfectly predictable user experience. Plus keeping everything on device is a massive win for both privacy and latency. It turns out that well designed algorithms can often beat raw model power when you need precision and speed.",
        },
    },
    {
        id: "resume-analyzer",
        title: "Intelligent Resume Analyzer",
        category: "Featured Work",
        rank: "Gold",
        description:
            "Containerized AI agent for tailored resume feedback. Full-stack integration using a Dockerized backend and global CDN caching for reliability.",
        tech: [
            "FastAPI",
            "Docker",
            "LangChain",
            "Python",
            "Vercel",
            "Next.js",
            "TypeScript",
        ],
        links: {
            github: [
                {
                    label: "Frontend",
                    url: "https://github.com/shuknuk/resume-analyzer-frontend",
                },
                { label: "Backend", url: "https://github.com/shuknuk/resume-analyzer" },
            ],
            live: "https://ranalyzer.vercel.app/",
        },
        caseStudy: {
            challenge:
                "Most automated resume feedback is generic keyword matching. Building a production AI system that provides truly contextualized advice required solving for scale, reliability, and real-time company research—all while maintaining sub-10-second response times.",
            solution:
                "I built a <strong>full-stack integration</strong> with a <strong>Dockerized FastAPI backend</strong> deployed on Render and a <strong>Next.js frontend</strong> on Vercel with <strong>global CDN caching</strong>. <strong>LangChain</strong> orchestrates the AI agent, combining <strong>Gemini 2.5 Flash</strong> for reasoning with <strong>Tavily Search API</strong> for real-time company intelligence. The containerized architecture enables consistent deployments, health checks, and horizontal scaling. Implemented graceful degradation for upstream API failures.",
            learnings:
                "This project taught me container best practices—pinning dependencies, multi-stage builds, and health check endpoints. Debugging CORS across cloud providers and implementing rate limiting for LLM APIs gave me production AI operations experience.",
        },
    },
    {
        id: "portfolio-website",
        title: "This Portfolio Website",
        rank: "Silver",
        category: "Featured Work",
        description: `Personal portfolio showcasing full-stack capabilities with a custom design system, theme-aware UI, and CI/CD deployment pipeline.`,
        tech: [
            "Vite",
            "React",
            "TailwindCSS",
            "TypeScript",
            "Framer Motion",
            "Vercel",
        ],
        links: {
            github: "https://github.com/shuknuk/shukdev",
            live: "https://kinshuk-goel.vercel.app/",
        },
        caseStudy: {
            challenge:
                "Creating a portfolio that demonstrates engineering depth, not just design polish.",
            solution: `Architected with <strong>Vite + React + TypeScript</strong> for type-safe development. Custom design system with CSS variables enables seamless light/dark theming. <strong>Framer Motion</strong> powers micro-animations. CI/CD via GitHub + Vercel provides instant preview deployments.`,
            learnings: `Building my own design system reinforced component architecture best practices and accessibility considerations.`,
        },
    },
    {
        id: "brhacks24",
        title: "BRHacks 2024",
        category: "Featured Work",
        rank: "Bronze",
        description:
            "Production event website serving 100+ hackathon participants with real-time registration and zero downtime on Vercel.",
        tech: ["Next.js", "TailwindCSS", "Framer Motion", "Vercel"],
        links: {
            github: "https://github.com/shuknuk/brhacks24",
            live: "https://brhacks24.vercel.app/",
        },
        caseStudy: {
            challenge:
                "Building reliable infrastructure for a live event where downtime directly impacts 100+ attendees.",
            solution:
                "Deployed on <strong>Vercel</strong> with automatic SSL, global CDN, and zero-downtime updates. Built responsive layouts and JSON-driven content sections for rapid iteration.",
            learnings:
                "Learned to architect for real production load—not just localhost demos.",
        },
    },
    {
        id: "brhacks23",
        title: "BRHacks 2023",
        category: "Creative Labs",
        description:
            "First production website for inaugural high school hackathon—my introduction to shipping under deadline pressure.",
        tech: ["Next.js", "CSS"],
        links: {
            github: "https://github.com/ethanw2457/2023BRHacksWebsite",
            live: "https://2023-br-hacks-website.vercel.app/",
        },
    },
    {
        id: "env-careers",
        title: "Environmental Careers Guide",
        category: "Creative Labs",
        description:
            "Interactive careers explorer built for AP Environmental Science.",
        tech: ["Next.js", "TailwindCSS", "React Hooks"],
        links: {
            github: "https://github.com/shuknuk/environmental-careers-guide",
            live: "https://environmental-careers-guide.vercel.app/",
        },
    },
    {
        id: "shuk-bot",
        title: "shuk-bot",
        category: "Creative Labs",
        description: "Discord utility bot with moderation tools.",
        tech: ["JavaScript", "Node.js", "Discord.js"],
        links: {
            github: "https://github.com/shuknuk/shuk-bot",
        },
    },
    {
        id: "3pfs-in-1",
        title: "3pfs-in-1",
        category: "Creative Labs",
        description: "Bash script to search Snap, Flatpak, and Apt simultaneously.",
        tech: ["Bash"],
        links: {
            github: "https://github.com/shuknuk/3pfs-in-1",
        },
    },
];

async function seed() {
    console.log("Seeding projects...");

    for (const project of PROJECTS_DATA) {
        const { id, title, description, category, rank, tech, links, caseStudy } = project;

        const projectData = {
            id,
            title,
            description,
            category,
            rank,
            tech,
            links,
            case_study: caseStudy,
            is_hidden: false,
        };

        const { error } = await supabase.from("projects").upsert(projectData, { onConflict: "id" });

        if (error) {
            console.error(`Error inserting project ${id}:`, error);
        } else {
            console.log(`Inserted/Updated project: ${id}`);
        }
    }

    console.log("Seeding complete.");
}

seed();
