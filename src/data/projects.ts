export interface Project {
    id: string;
    title: string;
    category: "Featured Work" | "Creative Labs";
    rank?: "Gold" | "Silver" | "Bronze" | "In Progress";
    description: string;
    tech: string[];
    links: {
        github?: string | { label: string; url: string }[];
        live?: string;
    };
    caseStudy?: {
        challenge: string;
        solution: string;
        learnings: string;
    };
    image?: string;
}

export const PROJECTS_DATA: Project[] = [
    {
        id: "zentree-tabs",
        title: "ZenTree Tabs",
        category: "Featured Work",
        rank: "Gold",
        description:
            "A Chrome extension for hierarchical tab management featuring tree-based organization, bookmark management, downloads tracking, and extensive theming options including glassmorphism effects.",
        tech: ["React", "TypeScript", "Web Extensions API", "TailwindCSS", "Chrome APIs"],
        links: {
            github: "https://github.com/shuknuk/zentree-tabs",
            live: "https://chromewebstore.google.com/detail/zentree-tabs",
        },
        caseStudy: {
            challenge:
                "Browser tabs quickly become unmanageable when working on multiple projects. Traditional flat tab lists don't reflect how we actually think about related tasks. I wanted to build a tool that organizes tabs hierarchically—like a tree—so context is preserved and navigation is intuitive.",
            solution:
                "I built ZenTree Tabs as a Chrome extension using <strong>React</strong> and <strong>TypeScript</strong> with the Web Extensions API. The extension features tree-based tab hierarchy where child tabs inherit context from parents, bookmark and downloads management panels, and extensive theming options including glassmorphism effects and background mesh patterns. Special attention was paid to stability during complex nesting operations.",
            learnings:
                "Building a browser extension taught me the unique constraints of extension development—sandboxed environments, message passing between content scripts and background workers, and working within Chrome's security model. I gained experience in state management for complex tree structures and ensuring stability across edge cases.",
        },
    },
    {
        id: "brhacks24",
        title: "BRHacks 2024",
        category: "Featured Work",
        rank: "Gold",
        description:
            "Built and deployed the live website for our high school's second annual BRHacks, serving over 100 participants with real‑time registration and event updates. Used AI tools to speed development, and kept the site running smoothly with zero downtime on Vercel during the entire event.",
        tech: [
            "Next.js",
            "TailwindCSS",
            "Framer Motion",
            "AI-Assisted Development",
            "ChatGPT",
            "GitHub Copilot",
            "Vercel",
        ],
        links: {
            github: "https://github.com/shuknuk/brhacks24",
            live: "https://brhacks24.vercel.app/",
        },
        caseStudy: {
            challenge:
                "We needed a site that 100+ high school students could use for registration, schedules, and announcements during BRHacks 2024. Because this was the primary source of live event info, reliability was non‑negotiable—if the site went down, the event itself would suffer. It also had to handle bursts of traffic during registration and throughout the day as participants checked updates.",
            solution:
                "I built the site in <strong>Next.js</strong> with <strong>TailwindCSS</strong> and <strong>Framer Motion</strong>, using AI tools to speed up development without sacrificing quality. <strong>ChatGPT</strong> helped me audit accessibility, plan component architecture, and refine content, while <strong>GitHub Copilot</strong> accelerated coding for responsive layouts and JSON‑driven content sections. I deployed to Vercel with <strong>zero‑downtime updates</strong>, <strong>automatic SSL</strong>, and <strong>global CDN caching</strong>, making sure we could push changes instantly without interrupting service. During the event, the site stayed fast, stable, and fully available under peak load.",
            learnings:
                "Leading this production deployment taught me how to build systems that real people depend on, not just demos that work on localhost. I learned to design for actual user load traffic, implement proper error handling, and ensure zero-downtime deployments. Orchestrating AI assistance within a production engineering workflow gave me hands‑on experience building reliable, AI‑powered applications where uptime and performance can't be compromised.",
        },
    },
    {
        id: "portfolio-website",
        title: "This Portfolio Website",
        rank: "Gold",
        category: "Featured Work",
        description:
            "A personal portfolio website designed and developed from the ground up to showcase my skills, projects, and technical interests. Built with Next.js, TailwindCSS, and deployed on Vercel, it serves as both my digital resume and a platform to experiment with new frontend frameworks.",
        tech: ["Next.js", "TailwindCSS", "MDX", "Framer Motion", "Vercel"],
        links: {
            github: "https://github.com/shuknuk/shukdev",
            live: "https://kinshuk-goel.vercel.app/",
        },
        caseStudy: {
            challenge: "Overview of the project and goals.",
            solution:
                'This site is more than just a digital resume — it\'s a hands-on demo of my full-stack capabilities and design process. I architected it using Next.js for SSR and performance, styled with TailwindCSS for rapid UI development. The entire site is fully responsive, mobile-optimized, and theme-aware (light/dark). Key highlights include: Custom "My Work" section, Blog integration with MDX, CI/CD with GitHub and Vercel.',
            learnings:
                "This project reflects my commitment to both functional engineering and polished design, always pushing for the intersection of usability and technical rigor.",
        },
    },
    {
        id: "resume-analyzer",
        title: "Intelligent Resume Analyzer",
        category: "Featured Work",
        rank: "Gold",
        description:
            "Built and deployed a production‑grade AI agent that delivers tailored resume feedback by combining insights from resumes, job descriptions, and live company data. Designed for reliability and scale across multiple cloud providers with fully containerized deployment.",
        tech: [
            "Next.js (TS)",
            "shadcn/ui",
            "Python (FastAPI)",
            "Gemini 2.5 Flash",
            "LangChain",
            "Tavily Search API",
            "Docker",
            "Vercel",
            "Render",
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
                "Most automated resume feedback is generic and doesn't help candidates stand out. I set out to build a production AI system capable of analyzing resumes in context—tailoring advice not only to job descriptions, but also to specific company cultures and values. The system had to scale, give actionable results, and earn user trust by going far beyond simple keyword matching.",
            solution:
                "I architected a full‑stack AI agent using a robust, enterprise‑grade architecture. The web frontend <strong>(Next.js with shadcn/ui)</strong> runs on Vercel with a global CDN for speed. The backend <strong>FastAPI</strong> service, containerized with <strong>Docker</strong> and deployed on <strong>Render</strong>, manages core inference and orchestration. <strong>LangChain</strong> stitches together Google Gemini 2.5 Flash for reasoning and the <strong>Tavily Search API</strong> for real‑time company intel. When a user uploads a resume and job description, the agent actively gathers current company data, fuses it with the candidate's materials, and generates actionable, personalized feedback.",
            learnings:
                "Delivering an AI product for real users (not just demos) pushed me to architect for scale and resilience. I built this system with AI at every step—architecture decisions, debugging CORS and rate limits, content quality, and code generation. The value wasn't just speed: I turned AI output into a stable production service by adding defensive error handling, pinning container dependencies, and validating behavior under load. This project shows I can reliably use AI to ship and operate real systems.",
        },
    },
    {
        id: "brhacks23",
        title: "BRHacks 2023",
        category: "Featured Work",
        rank: "Bronze",
        description:
            "Shipped the frontend for my high school's first inaugural hackathon under tight deadlines, creating the first production web presence that real attendees and sponsors depended on for event information and registration.",
        tech: ["Next.js", "CSS"],
        links: {
            github: "https://github.com/ethanw2457/2023BRHacksWebsite",
            live: "https://2023-br-hacks-website.vercel.app/",
        },
        caseStudy: {
            challenge:
                "For my high school's inaugural BRHacks hackathon, we had zero existing infrastructure and tight deadlines. The challenge was to build a credible, production-ready web presence that would handle real attendees and sponsors. This site would not just showcase our brand, but it also served as our primary registration system, so there was no room for downtime or errors.",
            solution:
                "I designed and built the entire full‑stack site in <strong>Next.js</strong>, focusing on a responsive layout, clear navigation, and registration flows that were easy to use on any device. I took on both the visual design and the backend logic, setting up secure user registration, managing dynamic content, and tuning performance. Throughout the build, I used ChatGPT‑3.5 as a brainstorming and debugging partner, but I made all final architectural decisions and handled deployment, testing, and optimizations myself to ensure the site felt polished and reliable for our audience.",
            learnings:
                "This project was a crash course in <strong>shipping under pressure with real stakes</strong>. I learned that building for real users is fundamentally different from building demos. Every bug impacts real people, every design decision affects user conversion, and every deployment needs to be bulletproof. The experience of collaborating through Git while maintaining production quality taught me how to balance speed with reliability, a crucial skill for any production engineering role.",
        },
    },
    {
        id: "env-careers",
        title: "Environmental Careers Guide",
        category: "Creative Labs",
        description:
            "Interactive website showcasing 10 environmental careers with quotes, icons, and real education links. An AP Environmental Science final project.",
        tech: ["Next.js", "TailwindCSS", "React Hooks"],
        links: {
            github: "https://github.com/shuknuk/environmental-careers-guide",
            live: "https://environmental-careers-guide.vercel.app/",
        },
        image: "/images/envCguides.png",
    },
    {
        id: "forher",
        title: "forHer--",
        category: "Creative Labs",
        description:
            "A Valentine's site — sentimental and personal. Shows early experimentation with frontend animation and interactivity.",
        tech: ["HTML", "CSS", "JavaScript"],
        links: {
            github: "https://github.com/shuknuk/forHer--",
        },
        image: "/images/forher--.png",
    },
    {
        id: "audiblesmiles",
        title: "AudibleSmiles",
        category: "Creative Labs",
        description:
            "Nonprofit site for a small student group (now inactive). Created from scratch to help a school-founded nonprofit get online.",
        tech: ["HTML", "CSS", "JavaScript"],
        links: {
            github: "https://github.com/shuknuk/audibleSmiles",
        },
        image: "/images/audSmil.png",
    },
    {
        id: "greencoin",
        title: "GreenCoin",
        category: "Creative Labs",
        description:
            "Carbon footprint calculator for teens. Uses aesthetic design + gamification to make tracking your digital carbon footprint more appealing to Gen Z.",
        tech: ["JavaScript", "HTML/CSS"],
        links: {
            github: "https://github.com/shuknuk/GreenCoin",
        },
    },
    {
        id: "shuk-bot",
        title: "shuk-bot",
        category: "Creative Labs",
        description:
            "A Discord bot written in JavaScript. Fun utility bot with random commands and moderation tools.",
        tech: ["JavaScript", "Node.js", "Discord.js"],
        links: {
            github: "https://github.com/shuknuk/shuk-bot",
        },
        image: "/images/dashukbot.png",
    },
    {
        id: "3pfs-in-1",
        title: "3pfs-in-1",
        category: "Creative Labs",
        description:
            "Command-line tool to search Snap, Flatpak, and Apt simultaneously. A Bash script that simplifies package search across Linux distros.",
        tech: ["Bash"],
        links: {
            github: "https://github.com/shuknuk/3pfs-in-1",
        },
    },
];
