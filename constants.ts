
import { Project, ProjectRank } from './types';

export const techStackData: string[] = [
  "Java", "Python", "JavaScript", "HTML5", "CSS3",
  "Next.js", "Node.js", "TailwindCSS", "Figma", "Git", "GitHub", "pnpm", "npm", "Warp", "Visual Studio Code"
];

export const projectsData: Project[] = [
  {
    rank: ProjectRank.Current,
    title: "Intelligent Resume Analyzer",
    description: "An AI agent that analyzes resumes, compares them to job descriptions, and uses live web data to provide deeply tailored feedback.",
    tech: ["Next.js (TypeScript)", "Python (FastAPI)", "Gemini API", "LangChain", "Docker", "Vercel"],
    repoUrl: "#", // No repo link provided in README for this
  },
  {
    rank: ProjectRank.Gold,
    title: "BRHacks 2024",
    role: "Lead Developer",
    description: "Designed and developed the full website for our second annual high school hackathon. Fully responsive, animated, and deployed on Vercel. ~100+ attendees used the site to register and access event info.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    liveUrl: "https://brhacks24.vercel.app/",
    repoUrl: "https://github.com/shuknuk/brhacks24",
  },
  {
    rank: ProjectRank.Silver,
    title: "BRHacks 2023",
    role: "Frontend & Design",
    description: "Created the frontend and helped launch the first-ever BRHacks event site. Learned to collaborate with teammates under pressure and shipped a functional product in time for launch.",
    tech: ["Next.js", "CSS"],
    repoUrl: "https://github.com/ethanw2457/2023BRHacksWebsite",
  },
  {
    rank: ProjectRank.Silver,
    title: "Environmental Careers Guide",
    description: "Interactive website showcasing 10 environmental careers with quotes, icons, and real education links. AP Environmental Science final project.",
    tech: ["Next.js", "TailwindCSS", "React Hooks"],
    repoUrl: "https://github.com/shuknuk/environmental-careers-guide",
  },
  {
    rank: ProjectRank.Bronze,
    title: "forHer--",
    description: "A Valentine’s site — sentimental and personal. Not active anymore, but was built with ❤️. Shows early experimentation with frontend animation and interactivity.",
    tech: ["HTML/CSS", "JavaScript"],
    repoUrl: "https://github.com/shuknuk/forHer--",
  },
  {
    rank: ProjectRank.Bronze,
    title: "AudibleSmiles",
    description: "Nonprofit site for a small student group (now inactive). Created from scratch to help a school-founded nonprofit get online.",
    tech: ["HTML/CSS", "JavaScript"],
    repoUrl: "https://github.com/shuknuk/audibleSmiles",
  },
  {
    rank: ProjectRank.Bronze,
    title: "GreenCoin",
    description: "Carbon footprint calculator for teens. Uses aesthetic design + gamification to make tracking your digital carbon footprint more appealing to Gen Z.",
    tech: ["JavaScript", "HTML/CSS"],
    repoUrl: "https://github.com/shuknuk/GreenCoin",
  },
  {
    rank: ProjectRank.Bronze,
    title: "shuk-bot",
    description: "A Discord bot written in JavaScript. Fun utility bot with random commands and moderation tools.",
    tech: ["JavaScript"],
    repoUrl: "https://github.com/shuknuk/shuk-bot",
  },
  {
    rank: ProjectRank.Bronze,
    title: "3pfs-in-1",
    description: "Command-line tool to search Snap, Flatpak, and Apt simultaneously. Bash script that simplifies package search across Linux distros.",
    tech: ["Bash"],
    repoUrl: "https://github.com/shuknuk/3pfs-in-1",
  },
];
