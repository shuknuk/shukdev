
import React from 'react';
import { Project } from './types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'brhacks24',
    title: 'BRHacks 2024',
    category: 'Featured Work',
    rank: 'Gold',
    description: 'Built and deployed the live website for our high school\'s second annual BRHacks, serving over 100 participants with real‑time registration and event updates. Used AI tools to speed development, and kept the site running smoothly with zero downtime on Vercel during the entire event.',
    tech: ['Next.js', 'TailwindCSS', 'Framer Motion', 'AI-Assisted Development', 'ChatGPT', 'GitHub Copilot', 'Vercel'],
    links: {
      github: 'https://github.com/shuknuk/brhacks24',
      live: 'https://brhacks24.vercel.app/',
    },
    caseStudy: {
      challenge: 'We needed a site that 100+ high school students could use for registration, schedules, and announcements during BRHacks 2024. Because this was the primary source of live event info, reliability was non‑negotiable—if the site went down, the event itself would suffer. It also had to handle bursts of traffic during registration and throughout the day as participants checked updates.',
      solution: 'I built the site in <strong>Next.js</strong> with <strong>TailwindCSS</strong> and <strong>Framer Motion</strong>, using AI tools to speed up development without sacrificing quality. <strong>ChatGPT</strong> helped me audit accessibility, plan component architecture, and refine content, while <strong>GitHub Copilot</strong> accelerated coding for responsive layouts and JSON‑driven content sections. I deployed to Vercel with <strong>zero‑downtime updates</strong>, <strong>automatic SSL</strong>, and <strong>global CDN caching</strong>, making sure we could push changes instantly without interrupting service. During the event, the site stayed fast, stable, and fully available under peak load.',
      learnings: 'Leading this production deployment taught me how to build systems that real people depend on, not just demos that work on localhost. I learned to design for actual user load traffic, implement proper error handling, and ensure zero-downtime deployments. Orchestrating AI assistance within a production engineering workflow gave me hands‑on experience building reliable, AI‑powered applications where uptime and performance can\'t be compromised.',
    },
  },
  {
    id: 'portfolio-website',
    title: 'This Portfolio Website',
    rank: 'Gold',
    category: 'Featured Work',
    description: `A personal portfolio website designed and developed from the ground up to showcase my skills, projects, and technical interests. Built with Next.js, TailwindCSS, and deployed on Vercel, it serves as both my digital resume and a platform to experiment with new frontend frameworks.`,
    tech: ['Vite', 'TailwindCSS', 'shadcn/ui', 'Framer Motion', 'Vercel'],
    links: {
      github: 'https://github.com/shuknuk/shukdev',
      live: 'https://kinshuk-goel.vercel.app/',
    },
    caseStudy: {
      // We'll place the detailed "Read More" content in the `solution` field so it shows up under the "Solution" heading in the dialog
      challenge: 'Overview of the project and goals.',
      solution: `This site is more than just a digital resume — it’s a hands-on demo of my full-stack capabilities and design process. I architected it using Next.js for SSR and performance, styled with TailwindCSS for rapid UI development, and utilized shadcn/ui for accessible components. The entire site is fully responsive, mobile-optimized, and theme-aware (light/dark).<br/><br/>Key highlights:<ul><li>Custom “My Work” section to chronicle personal and collaborative projects.</li><li>Blog integration to share insights on AI engineering, coding, and university life.</li><li>Designed and iterated in Figma before development, focusing on visual clarity and user experience.</li><li>CI/CD and instant deployment using GitHub and Vercel, with automated builds & previews for every update.</li></ul>`,
      learnings: `This project reflects my commitment to both functional engineering and polished design, always pushing for the intersection of usability and technical rigor.`,
    },
  },
  {
    id: 'zentreetabs',
    title: 'ZenTree Tabs',
    category: 'Featured Work',
    rank: 'Silver',
    description: 'A modern Chrome Extension that organizes tabs into a vertical tree structure in the Side Panel. Features automatic nesting, native tab group integration, multi-select, drag & drop, and a glassmorphic "Arc-inspired" UI with 5 custom themes—all built with vanilla JavaScript.',
    tech: ['JavaScript', 'CSS3', 'HTML5', 'Chrome Extensions', 'Manifest V3'],
    links: {
      github: 'https://github.com/shuknuk/zentreetabs',
    },
    caseStudy: {
      challenge: 'Browser tabs quickly spiral out of control during deep research sessions. I wanted a better way to visualize tab relationships and context without switching to an entirely different browser. The challenge was building a polished, production-ready Chrome extension that felt native, performant, and minimalist—while handling complex UI interactions like drag-and-drop reordering and multi-select.',
      solution: 'I built <strong>ZenTree Tabs</strong> entirely in <strong>vanilla JavaScript, CSS3, and HTML5</strong>—no frameworks, no heavy dependencies. The extension uses <strong>Manifest V3</strong> and Chrome\'s Side Panel API to display tabs in an intuitive vertical tree. Tabs automatically nest under their "opener" to preserve research context. Native <strong>Tab Groups</strong> render as collapsible folders. I implemented full <strong>drag-and-drop</strong> (HTML5 API), <strong>multi-select</strong> (Ctrl/Shift + click), and local <strong>tab renaming</strong>. The UI features glassmorphism, smooth hover effects, a background mesh toggle, and <strong>5 themes</strong> (Ocean, Sunset, Forest, Berry, Monochrome). I also integrated a <strong>Bookmarks Manager</strong> and <strong>Downloads Manager</strong> directly into the panel for a unified workspace experience.',
      learnings: 'This project taught me how to build browser extensions the right way—lightweight, performant, and compliant with modern Manifest V3 standards. Working without a framework forced me to deeply understand the DOM, event delegation, and Chrome\'s extension APIs. Designing a cohesive, themeable UI from scratch strengthened my CSS skills and appreciation for design systems. Shipping a usable product that I actually use every day has been incredibly rewarding.',
    },
  },
  // {
  //   id: 'energy-price-tracker',
  //   title: 'Energy Price Tracker',
  //   category: 'Featured Work',
  //   rank: 'Silver',
  //   description:
  //     'Interactive AI-powered app that visualizes synthetic hourly energy prices and recommends optimal appliance usage times via Google Gemini analysis.',
  //   tech: ['React', 'TypeScript', 'TailwindCSS', 'Recharts', 'Gemini API'],
  //   links: {
  //     github: 'https://github.com/shuknuk/Energy-Price-Tracker',
  //     live: '',
  //   },
  //   image: 'enPrCk.png',
  //   caseStudy: {
  //     challenge:
  //       'Design a dynamic tool to visualize historical electricity pricing and help users determine the cheapest hours to run appliances—using only AI-generated data without real-time utility inputs.',
  //     solution:
  //       'Built an AI-first frontend using <strong>React + TypeScript</strong>, <strong>Tailwind CSS</strong>, and <strong>Recharts</strong> for an intuitive UI. On each page load, the app queries <strong>Google Gemini API</strong> (via `@google/genai`) with structured prompts to generate a realistic 7‑day hourly price dataset. Users can enter appliance wattage and run-time to compute the optimal window using a sliding‑window cost algorithm. Gemini then analyzes its own generated dataset to supply a summary of trends, peak/off‑peak times, and actionable savings tips.',
  //     learnings:
  //       'This project taught me how to fuse <strong>AI-generated data with client-side logic</strong> to build a realistic simulator experience. I got hands-on with prompting strategies—prompting Gemini to generate JSON‑formatted price history and then separate analysis prompts. I also sharpened skills in frontend data modeling, charting logic, and algorithmic cost calculation, while maintaining a seamless and polished UI/UX.',
  //   },
  // }, 
  {
    id: 'resume-analyzer',
    title: 'Intelligent Resume Analyzer',
    category: 'Featured Work',
    rank: 'Gold',
    description: 'Built and deployed a production‑grade AI agent that delivers tailored resume feedback by combining insights from resumes, job descriptions, and live company data. Designed for reliability and scale across multiple cloud providers with fully containerized deployment.',
    tech: ['Next.js (TS)', 'shadcn/ui', 'Python (FastAPI)', 'Gemini 2.5 Flash', 'LangChain', 'Tavily Search API', 'Docker', 'Vercel', 'Render'],
    links: {
      github: [
        { label: 'Frontend', url: 'https://github.com/shuknuk/resume-analyzer-frontend' },
        { label: 'Backend', url: 'https://github.com/shuknuk/resume-analyzer' },
      ],
      live: 'https://ranalyzer.vercel.app/',
    },
    caseStudy: {
      challenge: 'Most automated resume feedback is generic and doesn’t help candidates stand out. I set out to build a production AI system capable of analyzing resumes in context—tailoring advice not only to job descriptions, but also to specific company cultures and values. The system had to scale, give actionable results, and earn user trust by going far beyond simple keyword matching.',
      solution: "I architected a full‑stack AI agent using a robust, enterprise‑grade architecture. The web frontend <strong>(Next.js with shadcn/ui)</strong> runs on Vercel with a global CDN for speed. The backend <strong>FastAPI</strong> service, containerized with <strong>Docker</strong> and deployed on <strong>Render</strong>, manages core inference and orchestration. <strong>LangChain</strong> stitches together <Google Gemini 2.5 Flash</strong> for reasoning and the <strong>Tavily Search API</strong> for real‑time company intel. When a user uploads a resume and job description, the agent actively gathers current company data, fuses it with the candidate’s materials, and generates actionable, personalized feedback. System reliability is enforced with health checks, auto‑scaling, robust error handling, and graceful degradation to support multiple concurrent users—even during upstream API limits or transient errors.",
      learnings: 'Delivering an AI product for real users (not just demos) pushed me to architect for scale and resilience. I built this system with AI at every step—architecture decisions, debugging CORS and rate limits, content quality, and code generation. The value wasn’t just speed: I turned AI output into a stable production service by adding defensive error handling, pinning container dependencies, and validating behavior under load. This project shows I can reliably use AI to ship and operate real systems.',
    },
  },
  {
    id: 'brhacks23',
    title: 'BRHacks 2023',
    category: 'Featured Work',
    rank: 'Bronze',
    description: 'Shipped the frontend for my high school\'s first inaugural hackathon under tight deadlines, creating the first production web presence that real attendees and sponsors depended on for event information and registration.',
    tech: ['Next.js', 'CSS'],
    links: {
      github: 'https://github.com/ethanw2457/2023BRHacksWebsite',
      live: 'https://2023-br-hacks-website.vercel.app/',
    },
    caseStudy: {
      challenge: 'For my high school\'s inaugural BRHacks hackathon, we had zero existing infrastructure and tight deadlines. The challenge was to build a credible, production-ready web presence that would handle real attendees and sponsors. This side would not just showcase our brand, but it also served as our primary registeration system, so there was no room for downtime or errors.',
      solution: 'I designed and built the entire full‑stack site in <strong>Next.js</strong>, focusing on a responsive layout, clear navigation, and registration flows that were easy to use on any device. I took on both the visual design and the backend logic, setting up secure user registration, managing dynamic content, and tuning performance. Throughout the build, I used ChatGPT‑3.5 as a brainstorming and debugging partner, but I made all final architectural decisions and handled deployment, testing, and optimizations myself to ensure the site felt polished and reliable for our audience.',
      learnings: 'This project was a crash course in <strong>shipping under pressure with real stakes</strong>. I learned that building for real users is fundamentally different from building demos. Every bug impacts real people, every design decision affects user conversion, and every deployment needs to be bulletproof. The experience of collaborating through Git while maintaining production quality taught me how to balance speed with reliability, a crucial skill for any production engineering role.',
    },
  },
  {
    id: 'env-careers',
    title: 'Environmental Careers Guide',
    category: 'Creative Labs',
    description: 'Interactive website showcasing 10 environmental careers with quotes, icons, and real education links. An AP Environmental Science final project.',
    tech: ['Next.js', 'TailwindCSS', 'React Hooks'],
    links: {
      github: 'https://github.com/shuknuk/environmental-careers-guide',
      live: 'https://environmental-careers-guide.vercel.app/',
    },
    image: 'envCguides.png',
  },
  {
    id: 'forher',
    title: 'forHer--',
    category: 'Creative Labs',
    description: 'A Valentine’s site — sentimental and personal. Shows early experimentation with frontend animation and interactivity.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    links: {
      github: 'https://github.com/shuknuk/forHer--',
    },
    image: 'forher--.png',
  },
  {
    id: 'audiblesmiles',
    title: 'AudibleSmiles',
    category: 'Creative Labs',
    description: 'Nonprofit site for a small student group (now inactive). Created from scratch to help a school-founded nonprofit get online.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    links: {
      github: 'https://github.com/shuknuk/audibleSmiles',
    },
    image: 'audSmil.png',
  },
  {
    id: 'greencoin',
    title: 'GreenCoin',
    category: 'Creative Labs',
    description: 'Carbon footprint calculator for teens. Uses aesthetic design + gamification to make tracking your digital carbon footprint more appealing to Gen Z.',
    tech: ['JavaScript', 'HTML/CSS'],
    links: {
      github: 'https://github.com/shuknuk/GreenCoin',
    },
  },
  {
    id: 'shuk-bot',
    title: 'shuk-bot',
    category: 'Creative Labs',
    description: 'A Discord bot written in JavaScript. Fun utility bot with random commands and moderation tools.',
    tech: ['JavaScript', 'Node.js', 'Discord.js'],
    links: {
      github: 'https://github.com/shuknuk/shuk-bot',
    },
    image: 'dashukbot.png',
  },
  {
    id: '3pfs-in-1',
    title: '3pfs-in-1',
    category: 'Creative Labs',
    description: 'Command-line tool to search Snap, Flatpak, and Apt simultaneously. A Bash script that simplifies package search across Linux distros.',
    tech: ['Bash'],
    links: {
      github: 'https://github.com/shuknuk/3pfs-in-1',
    },
  },
];

export const TECH_ICONS: { [key: string]: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement } = {
  nextjs: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.18 15.41L12 8.88v8.53h-1.85V6.59h1.9l4.22 8.53V6.59h1.83v10.82h-1.82z" />
    </svg>
  ),
  tailwindcss: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.001,4.5C7.228,4.5,3.5,5.645,3.5,7.563c0,1.917,3.728,3.062,8.501,3.062 c4.771,0,8.5-1.145,8.5-3.062C20.5,5.645,16.772,4.5,12.001,4.5z M12.001,13.5c-4.773,0-8.5,1.145-8.5,3.063 c0,1.917,3.727,3.062,8.5,3.062c4.771,0,8.5-1.145,8.5-3.062C20.5,14.645,16.772,13.5,12.001,13.5z" />
    </svg>
  ),
  'framer-motion': (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 12h8l-4 8V4l8 8H8" />
    </svg>
  ),
  python: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.5 11H14v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1H7.5c-1.1 0-2 .9-2 2v1c0 1.1.9 2 2 2h3v1c0 1.1.9 2 2 2s2-.9 2-2v-1h2.5c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2zM12 1.5c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5 10.5-4.71 10.5-10.5S17.79 1.5 12 1.5zm0 19c-4.68 0-8.5-3.82-8.5-8.5S7.32 3.5 12 3.5s8.5 3.82 8.5 8.5-3.82 8.5-8.5 8.5z" />
    </svg>
  ),
  fastapi: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M7 2v11h3v9l7-12h-4l4-8z" /></svg>
  ),
  gemini: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5l1.5 4l4 1.5l-4 1.5l-1.5 4l-1.5-4l-4-1.5l4-1.5l1.5-4M12 21.5l-1.5-4l-4-1.5l4-1.5l1.5-4l1.5 4l4 1.5l-4 1.5l-1.5 4M4.5 9.5l-1-2.5l-2.5-1l2.5-1l1-2.5l1 2.5l2.5 1l-2.5 1l-1 2.5z" />
    </svg>
  ),
  langchain: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
    </svg>
  ),
  docker: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22.12,10.64a1.86,1.86,0,0,0-1.87-1.59H18.73V8.81a1.86,1.86,0,0,0-1.87-1.59H15.34V7a1.86,1.86,0,0,0-1.87-1.59H12.6V5.15A1.86,1.86,0,0,0,10.73,3.56H8.59A1.86,1.86,0,0,0,6.72,5.15V8.18H5.15A1.86,1.86,0,0,0,3.28,9.77v4.6a1.86,1.86,0,0,0,1.87,1.59H6.2v.32a2.38,2.38,0,0,0,2.39,2.44,2.5,2.5,0,0,0,2.3-.92.83.83,0,0,0,.15-.2,2.83,2.83,0,0,0,3.31,0,.83.83,0,0,0,.15.2,2.5,2.5,0,0,0,2.3.92,2.38,2.38,0,0,0,2.39-2.44v-.32h1.43a1.86,1.86,0,0,0,1.87-1.59V12.23A1.86,1.86,0,0,0,22.12,10.64ZM8.84,8.81V6.5h1.74V8.81ZM11.1,8.81V6.5h1.74V8.81ZM13.36,8.81V6.5h1.74V8.81Z" />
    </svg>
  ),
  vercel: (props) => (<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2L2 22h20L12 2z" /></svg>),
  css: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>
    </svg>
  ),
  html: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  ),
  javascript: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="2" ry="2" />
      <path fill="hsl(var(--background))" d="M9.04,15.5H7.5V9.25h1.54V15.5z M14.6,12.64c0,1.44-0.81,2.25-2.03,2.25c-0.81,0-1.44-0.41-1.67-0.99h-0.05l-0.09,0.84H9.2V9.25h1.54v0.84h0.05c0.23-0.58,0.86-0.99,1.67-0.99C13.79,9.1,14.6,9.91,14.6,11.35V12.64z M13.06,12.5c0-0.72-0.36-1.22-0.95-1.22s-0.95,0.5,0.95-1.22v1.26c0,0.72,0.36,1.22,0.95,1.22s0.95-0.5,0.95-1.22V12.5z" />
    </svg>
  ),
  nodejs: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12,2.62L3.18,7.09v8.83L12,20.38l8.82-4.47V7.09Zm-.14,1.86,6.13,3.11L16,8.74,13.31,10.1l-2.45-1.28-2.69,1.38,1.4-2.81ZM5.11,8.34l5.36,2.77L8,12.39,5.55,11Zm8.34,5.43-1.42,2.83-2.69-1.38L11.8,13l2.65,1.36Zm-7.23-2L8,10.42l2.55,1.31,1.52-3.08Z" />
    </svg>
  ),
  discordjs: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.317 4.369a1.913 1.913 0 00-2.475-.221c-.73.434-1.356.924-1.92 1.464a13.32 13.32 0 00-3.324-1.028 12.33 12.33 0 00-1.18-.088 11.8 11.8 0 00-1.18.088 13.32 13.32 0 00-3.324 1.028 12.42 12.42 0 00-1.92-1.464 1.913 1.913 0 00-2.475.221 1.89 1.89 0 00-.387 2.656c.39.684.9 1.31 1.49 1.868a12.18 12.18 0 00-2.227 3.784 1.9 1.9 0 00.73 2.226 1.93 1.93 0 002.313.111c.42-.258.82-.55 1.188-.868a10.45 10.45 0 001.986 1.25c.5.29.98.56 1.45.82a1.86 1.86 0 002.083 0c.47-.26.95-.53 1.45-.82a10.45 10.45 0 001.986-1.25c.368.318.768.61 1.188.868a1.93 1.93 0 002.313-.111 1.9 1.9 0 00.73-2.226 12.18 12.18 0 00-2.227-3.784c.59-.558 1.1-1.184 1.49-1.868a1.89 1.89 0 00-.387-2.656zm-9.31 7.237c-.89 0-1.61-.83-1.61-1.854 0-1.025.72-1.854 1.61-1.854.89 0 1.61.83 1.61 1.854 0 1.025-.72 1.854-1.61 1.854zm5.32 0c-.89 0-1.61-.83-1.61-1.854 0-1.025.72-1.854 1.61-1.854.89 0 1.61.83 1.61 1.854 0 1.025-.72 1.854-1.61 1.854z" />
    </svg>
  ),
  bash: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  ),
  react: (props) => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1" {...props}>
      <circle cx="0" cy="0" r="2.05" fill="currentColor"></circle>
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"></ellipse>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  ),
  vite: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
      <path d="M12 6.5v9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  typescript: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="2" ry="2" />
      <path fill="hsl(var(--background))" d="M14.5 9.5v1.25h-2v6.75h-1.5v-6.75h-2V9.5h5.5z" />
    </svg>
  ),
  shadcn: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 3 2 12h3v8h14v-8h3L12 3z" />
    </svg>
  ),
  tavily: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  ),
  render: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path fill="hsl(var(--background))" d="M12 6v6l4 2" />
    </svg>
  ),
  git: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
    </svg>
  ),
  github: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  chrome: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
};

// Centralized tech color mapping for consistent styling across the website
export const getTechColor = (tech: string): string => {
  const techLower = tech.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove special chars for matching

  const colorMap: { [key: string]: string } = {
    // Programming Languages
    'java': 'bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-400/30',
    'python': 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-400/30',
    'javascript': 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-400/30',
    'typescript': 'bg-blue-100 dark:bg-blue-600/20 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-300/30',
    'html': 'bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 border-red-300 dark:border-red-400/30',
    'html5': 'bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 border-red-300 dark:border-red-400/30',
    'css': 'bg-blue-100 dark:bg-blue-400/20 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-300/30',
    'css3': 'bg-blue-100 dark:bg-blue-400/20 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-300/30',
    'bash': 'bg-gray-100 dark:bg-gray-500/20 text-gray-700 dark:text-gray-400 border-gray-300 dark:border-gray-400/30',

    // Frameworks & Libraries
    'nextjs': 'bg-gray-100 dark:bg-gray-800/20 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-300/30',
    'nodejs': 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border-green-300 dark:border-green-400/30',
    'fastapi': 'bg-teal-100 dark:bg-teal-500/20 text-teal-700 dark:text-teal-400 border-teal-300 dark:border-teal-400/30',
    'tailwindcss': 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-400/30',
    'tailwind': 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-400/30',
    'react': 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-400/30',
    'reactjs': 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-400/30',
    'framermotion': 'bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-400 border-violet-300 dark:border-violet-400/30',
    'shadcnui': 'bg-slate-100 dark:bg-slate-500/20 text-slate-700 dark:text-slate-400 border-slate-300 dark:border-slate-400/30',
    'pytorch': 'bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-400/30',
    'pytorchinprogress': 'bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-400/30',

    // AI & ML Tools
    'langchain': 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-400/30',
    'huggingface': 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-400/30',
    'gemini': 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-400/30',
    'gemini25pro': 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-400/30',
    'reactframework': 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border-green-300 dark:border-green-400/30',
    'tavilysearchapi': 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 border-indigo-300 dark:border-indigo-400/30',
    'tavily': 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 border-indigo-300 dark:border-indigo-400/30',

    // DevOps & Deployment
    'docker': 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-400/30',
    'vercel': 'bg-gray-100 dark:bg-gray-800/20 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-300/30',
    'render': 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-400/30',
    'git': 'bg-orange-100 dark:bg-orange-600/20 text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-400/30',
    'github': 'bg-gray-100 dark:bg-gray-700/20 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-300/30',
    'cicdpipelines': 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border-green-300 dark:border-green-400/30',

    // Design & Visualization
    'figma': 'bg-pink-100 dark:bg-pink-500/20 text-pink-700 dark:text-pink-400 border-pink-300 dark:border-pink-400/30',
    'uiuxdesign': 'bg-pink-100 dark:bg-pink-500/20 text-pink-700 dark:text-pink-400 border-pink-300 dark:border-pink-400/30',
    'responsivedesign': 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-400/30',
    'designsystems': 'bg-slate-100 dark:bg-slate-500/20 text-slate-700 dark:text-slate-400 border-slate-300 dark:border-slate-400/30',
    'datavisualizationprinciples': 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-400/30',

    // Vite
    'vite': 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-400/30',

    // Additional project-specific technologies
    'recharts': 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 border-indigo-300 dark:border-indigo-400/30',
    'geminiapi': 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-400/30',
    'discordjs': 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 border-indigo-300 dark:border-indigo-400/30',
    'webdevelopment': 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-400/30',
    'hackathons': 'bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 border-orange-300 dark:border-orange-400/30',
    'ai': 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-400/30',
    'fullstack': 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border-green-300 dark:border-green-400/30',
    'chromeextensions': 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-400/30',
    'manifestv3': 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-400/30',
  };

  // Check for exact matches first, then partial matches for flexibility
  for (const [key, color] of Object.entries(colorMap)) {
    if (techLower === key || techLower.includes(key)) {
      return color;
    }
  }

  return colorMap[techLower] || 'bg-muted/50 text-muted-foreground border-border/50'; // Default fallback
};

export const getTechIconComponent = (tech: string): ((props: React.SVGProps<SVGSVGElement>) => React.ReactElement) | null => {
  const lowerCaseTech = tech.toLowerCase();

  // Comprehensive tech to icon mapping
  const techMap: { [key: string]: string } = {
    // Frameworks
    'next.js': 'nextjs',
    'nextjs': 'nextjs',
    'react': 'react',
    'vite': 'vite',

    // Languages
    'python': 'python',
    'javascript': 'javascript',
    'typescript': 'typescript',
    'html': 'html',
    'html5': 'html',
    'css': 'css',
    'css3': 'css',
    'bash': 'bash',

    // Styling
    'tailwind': 'tailwindcss',
    'tailwindcss': 'tailwindcss',
    'framer motion': 'framer-motion',
    'framer': 'framer-motion',

    // Backend
    'fastapi': 'fastapi',
    'node': 'nodejs',
    'node.js': 'nodejs',

    // AI/ML
    'gemini': 'gemini',
    'langchain': 'langchain',
    'tavily': 'tavily',

    // DevOps
    'docker': 'docker',
    'vercel': 'vercel',
    'render': 'render',
    'git': 'git',
    'github': 'github',

    // UI Libraries
    'shadcn': 'shadcn',
    'shadcn/ui': 'shadcn',

    // Discord
    'discord': 'discordjs',
    'discord.js': 'discordjs',

    // Browser Extensions
    'chrome': 'chrome',
    'manifest': 'chrome',
  };

  for (const key in techMap) {
    if (lowerCaseTech.includes(key)) {
      return TECH_ICONS[techMap[key]] || null;
    }
  }

  return null;
}

export const ICONS = {
  sun: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
  ),
  moon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
  ),
  home: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
  ),
  folder: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" /></svg>
  ),
  user: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
  ),
  copy: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
  ),
  linkedin: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
  ),
  github: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
  ),
  externalLink: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
  ),
  x: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
  ),
  medal: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88" /></svg>
  ),
  progress: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
  ),
  image: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
  ),
  chevronDown: (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 9 6 6 6-6" /></svg>
  ),
};
