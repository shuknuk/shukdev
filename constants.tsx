
import React from 'react';
import { Project } from './types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'brhacks24',
    title: 'BRHacks 2024',
    category: 'Featured Work',
    rank: 'Gold',
    description: 'Designed and developed the full website for our second annual high school hackathon. Fully responsive, animated, and deployed on Vercel. ~100+ attendees used the site to register and access event info.',
    tech: ['Next.js', 'TailwindCSS', 'Framer Motion'],
    links: {
      github: 'https://github.com/shuknuk/brhacks24',
      live: 'https://brhacks24.vercel.app/',
    },
    caseStudy: {
      challenge: 'The primary challenge was to create a compelling, professional, and highly functional website for our second annual hackathon. It needed to not only attract and register over 100 high school students but also serve as a central hub for all event information, schedules, and announcements during the event. The design had to be engaging enough to build hype while maintaining clarity and ease of use.',
      solution: 'I single-handedly led the development, choosing a modern tech stack to meet the requirements. I used Next.js for its performance benefits and server-side rendering capabilities, ensuring a fast-loading experience for all users. TailwindCSS allowed for rapid, utility-first styling, enabling me to build a custom, responsive design efficiently. To elevate the user experience, I integrated Framer Motion for subtle, meaningful animations that guided users and added a layer of polish. The site was deployed on Vercel for seamless continuous integration and delivery.',
      learnings: 'This project was a deep dive into end-to-end project ownership. I honed my skills in UI/UX design, frontend development, and deployment. Managing the project solo taught me valuable lessons in time management and prioritization under a firm deadline. Seeing attendees actively use the site I built was incredibly rewarding and reinforced the importance of user-centric design in a live-event context.',
    },
  },
  {
    id: 'resume-analyzer',
    title: 'Intelligent Resume Analyzer',
    category: 'Featured Work',
    rank: 'In Progress',
    description: 'An AI agent that analyzes resumes, compares them to job descriptions, and uses live web data to provide deeply tailored feedback.',
    tech: ['Next.js (TS)', 'Python (FastAPI)', 'Gemini API', 'LangChain', 'Docker', 'Vercel'],
    links: {},
    caseStudy: {
      challenge: 'Job seekers often struggle to tailor their resumes effectively for each application. Generic advice falls short because it lacks context about the specific role and the latest industry trends. The challenge was to build a tool that could provide personalized, actionable, and data-driven feedback to give applicants a genuine competitive edge.',
      solution: 'The solution is a full-stack application leveraging the power of Large Language Models. A Python backend with FastAPI serves as the core, using the Gemini API and LangChain to create a sophisticated AI agent. This agent ingests a user\'s resume and a job description, analyzes the alignment, and grounds its feedback by searching for live web data on relevant skills and industry keywords. The frontend is built with Next.js and TypeScript, offering a clean, intuitive interface for users to upload documents and receive their detailed analysis.',
      learnings: 'This is an ongoing project that has been an incredible learning experience in system architecture and AI integration. It involves designing a robust API, managing asynchronous tasks, and orchestrating complex prompts with LangChain. A key lesson has been in understanding the nuances of LLM responses and designing prompts that yield consistently helpful and structured output. It is a practical application of my skills in both frontend and backend development to solve a real-world problem.',
    },
  },
  {
    id: 'brhacks23',
    title: 'BRHacks 2023',
    category: 'Featured Work',
    rank: 'Silver',
    description: 'Created the frontend and helped launch the first-ever BRHacks event site. Learned to collaborate with teammates under pressure and shipped a functional product in time for launch.',
    tech: ['Next.js', 'CSS'],
    links: {
      github: 'https://github.com/ethanw2457/2023BRHacksWebsite',
      live: 'https://2023-br-hacks-website.vercel.app/', 
    },
    caseStudy: {
      challenge: 'For the inaugural BRHacks, our team had no existing infrastructure. The challenge was to build a credible and functional web presence from the ground up under a tight deadline. We needed a site that would legitimize our new event, build trust with potential attendees and sponsors, and reliably handle registration for our first cohort of hackers.',
      solution: 'I took on a significant role in the frontend development and design. My primary responsibility was to translate our team\'s collective vision into a tangible, user-friendly interface using Next.js. I focused on building a clean, responsive layout with clear calls-to-action for registration. I worked closely with the backend developers to ensure seamless integration of the user-facing forms with their server-side logic, using version control (Git/GitHub) as our collaboration backbone.',
      learnings: 'This project was a masterclass in teamwork, communication, and shipping a minimum viable product (MVP). I learned how to effectively use Git for collaborative development, resolving merge conflicts and managing a team setting. It taught me the importance of clear communication to bridge the gap between frontend and backend requirements, and the art of making pragmatic decisions to ensure we launched a functional product on time.',
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
    },
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

export const ICONS = {
    sun: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
    ),
    moon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
    ),
    home: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    ),
    folder: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>
    ),
    user: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    ),
    copy: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
    ),
    linkedin: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    ),
    github: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
    ),
    externalLink: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
    ),
     x: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    ),
    medal: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"/></svg>
    ),
    progress: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
    ),
};