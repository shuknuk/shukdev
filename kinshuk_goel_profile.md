# Comprehensive User Profile: Kinshuk Goel

## 🧑‍💻 Overview & Biography
- **Name:** Kinshuk Goel
- **Current Status:** 18-year-old Computer Science student at **Rutgers University**.
- **Location:** New Jersey, USA.
- **Identity:** Software engineer specializing in web development, AI engineering, and open-source contributions.
- **Motto:** *"Make stuff. Break it. Build it again."*
- **Personal Mission:** Engineering AI agents and full-stack platforms that are simple, reliable, and built for the real world.

> "I’m a CS student at Rutgers and a programmer from New Jersey. I like building AI tools and full-stack apps — stuff like LLM agents and platforms that actually get used in real workflows. I’ve worked across frontend, backend, and cloud, so I know how to take a project from an idea to something people can use. Right now, I’m digging into ML theory, PyTorch, and LLM fine-tuning so I can build smarter, more autonomous systems."

---

## 🔗 Contact & Online Presence
- **Email:** [kinshukgoel2@gmail.com](mailto:kinshukgoel2@gmail.com)
- **LinkedIn:** [linkedin.com/in/kinshukgoel2](https://linkedin.com/in/kinshukgoel2)
- **GitHub:** [@shuknuk](https://github.com/shuknuk/)
- **Portfolio:** [kinshuk-goel.vercel.app](https://kinshuk-goel.vercel.app/)

---

## 🛠️ Exhaustive Technical Stack

### **Programming Languages**
- **TypeScript & JavaScript (ES6+):** Core languages for frontend and backend.
- **Python:** Primary language for AI/ML and backend services (FastAPI).
- **Java:** Academic and software engineering foundation.
- **Bash:** Scripting and automation for Linux environments.
- **HTML5 & CSS3:** Semantic structure and responsive styling.

### **AI & Machine Learning**
- **Frameworks:** PyTorch (In progress), LangChain, ReAct Framework.
- **LLMs & APIs:** Gemini 2.5 Pro/Flash, Hugging Face, Tavily Search API.
- **Knowledge Areas:** LLM Fine-tuning, Agentic Orchestration, Machine Learning Theory, Deep Learning.

### **Frontend & UI/UX**
- **Frameworks:** Next.js (13/14/15), React, Vite.
- **Styling:** TailwindCSS, Vanilla CSS, CSS-in-JS.
- **Components:** shadcn/ui.
- **Animation:** Framer Motion.
- **Design Tools:** Figma.
- **Principles:** Data Visualization, Responsive Design, Design Systems, Mobile Optimization, Theme-Aware Development (Light/Dark).

### **Backend & Infrastructure**
- **Frameworks:** FastAPI (Python), Node.js, Express.
- **Containers:** Docker.
- **Cloud Platforms:** Vercel, Render, Google Cloud Platform (GCP).
- **Tools:** Git, GitHub, npm/yarn/pnpm.
- **DevOps:** CI/CD Pipelines, Zero-Downtime Updates, Global CDN Caching, Automatic SSL.

---

## 🚀 Projects Index & Case Studies

### **1. Intelligent Resume Analyzer (Rank: Gold)**
*Production-grade AI agent delivering tailored resume feedback.*
- **Description:** Combines insights from resumes, job descriptions, and live company data. Designed for reliability and scale across multiple cloud providers with fully containerized deployment.
- **Tech Stack:** Next.js (TS), shadcn/ui, Python (FastAPI), Gemini 2.5 Flash, LangChain, Tavily Search API, Docker, Vercel, Render.
- **Word-for-Word Case Study:**
    - **Challenge:** "Most automated resume feedback is generic and doesn’t help candidates stand out. I set out to build a production AI system capable of analyzing resumes in context—tailoring advice not only to job descriptions, but also to specific company cultures and values. The system had to scale, give actionable results, and earn user trust by going far beyond simple keyword matching."
    - **Solution:** "I architected a full‑stack AI agent using a robust, enterprise‑grade architecture. The web frontend (Next.js with shadcn/ui) runs on Vercel with a global CDN for speed. The backend FastAPI service, containerized with Docker and deployed on Render, manages core inference and orchestration. LangChain stitches together <Google Gemini 2.5 Flash for reasoning and the Tavily Search API for real‑time company intel. When a user uploads a resume and job description, the agent actively gathers current company data, fuses it with the candidate’s materials, and generates actionable, personalized feedback. System reliability is enforced with health checks, auto‑scaling, robust error handling, and graceful degradation to support multiple concurrent users—even during upstream API limits or transient errors."
    - **Learnings:** "Delivering an AI product for real users (not just demos) pushed me to architect for scale and resilience. I built this system with AI at every step—architecture decisions, debugging CORS and rate limits, content quality, and code generation. The value wasn’t just speed: I turned AI output into a stable production service by adding defensive error handling, pinning container dependencies, and validating behavior under load. This project shows I can reliably use AI to ship and operate real systems."

### **2. BRHacks 2024 (Rank: Gold)**
*Live website for high school's second annual hackathon.*
- **Description:** Serving over 100 participants with real‑time registration and event updates. Used AI tools to speed development, and kept the site running smoothly with zero downtime on Vercel during the entire event.
- **Tech Stack:** Next.js, TailwindCSS, Framer Motion, AI-Assisted Development, ChatGPT, GitHub Copilot, Vercel.
- **Word-for-Word Case Study:**
    - **Challenge:** "We needed a site that 100+ high school students could use for registration, schedules, and announcements during BRHacks 2024. Because this was the primary source of live event info, reliability was non‑negotiable—if the site went down, the event itself would suffer. It also had to handle bursts of traffic during registration and throughout the day as participants checked updates."
    - **Solution:** "I built the site in Next.js with TailwindCSS and Framer Motion, using AI tools to speed up development without sacrificing quality. ChatGPT helped me audit accessibility, plan component architecture, and refine content, while GitHub Copilot accelerated coding for responsive layouts and JSON‑driven content sections. I deployed to Vercel with zero‑downtime updates, automatic SSL, and global CDN caching, making sure we could push changes instantly without interrupting service. During the event, the site stayed fast, stable, and fully available under peak load."
    - **Learnings:** "Leading this production deployment taught me how to build systems that real people depend on, not just demos that work on localhost. I learned to design for actual user load traffic, implement proper error handling, and ensure zero-downtime deployments. Orchestrating AI assistance within a production engineering workflow gave me hands‑on experience building reliable, AI‑powered applications where uptime and performance can't be compromised."

### **3. ZenTree Tabs (Browser Extension)**
*Chrome extension for hierarchical tab management.*
- **Description:** Features high stability, bookmark management, downloads management, and extensive theming options (background mesh, glassy tabs).
- **Tech Stack:** React, Web Extensions API, TailwindCSS.
- **Focus:** Fixing alignment and nesting behavior (regressions in Cmd+T vs. Ctrl+Click nesting) and ensuring tree stability over time.

### **4. KareBud (Recent Work)**
*Health Companion Application.*
- **Focus:** Branding update to "Steady Dawn" color palette. Implementing onboarding flows, vitals tracking (Weight, Height, Blood Pressure, Heart Rate), and "My Journey" features.
- **Tech Stack:** Next.js, TailwindCSS, Supabase, Lucide React.
- **Mission:** Contextually integrating "Today's Check-In" with voice recording into specific journeys.

### **5. CourseCrunch (Recent Work)**
*AI-driven lecture note extraction.*
- **Description:** Implements drag-and-drop upload for video lectures, processing with progress bars, and a results dashboard for key concepts, exam questions, and homework deadlines.
- **Tech Stack:** Next.js 15, TailwindCSS, Lucide React, Mock AI extraction (later integrated with Supabase/real extraction).

### **6. Portfolio Website (Rank: Gold)**
*Personal digital resume and experimental platform.*
- **Description:** Built from the ground up to showcase skills, projects, and technical interests.
- **Tech Stack:** Vite, Next.js (SSR), TailwindCSS, shadcn/ui, Framer Motion, Vercel.
- **Case Study Details:**
    - **Highlights:** Custom "My Work" section, Blog integration, Figma-to-code design flow, CI/CD via GitHub/Vercel.

### **7. BRHacks 2023 (Rank: Bronze)**
*First inaugural hackathon website.*
- **Description:** Shipped the frontend under tight deadlines for real attendees and sponsors.
- **Tech Stack:** Next.js, CSS, ChatGPT-3.5 (Brainstorming/Debugging partner).

### **8. 3pfs-in-1 (Creative Labs)**
*Command-line package search tool.*
- **Description:** Searches Snap, Flatpak, and Apt simultaneously on Linux.
- **Tech Stack:** Bash.

### **9. shuk-bot (Creative Labs)**
*Utility Discord bot.*
- **Description:** Fun utility bot with random commands and moderation tools.
- **Tech Stack:** JavaScript, Node.js, Discord.js.

### **10. GreenCoin (Creative Labs)**
*Interactive carbon footprint calculator.*
- **Description:** Uses aesthetic design and gamification to appeal to Gen Z.
- **Tech Stack:** JavaScript, HTML/CSS.

---

## 📈 Recent Activity & Trends
- **Current Focus:** Refactoring health application (KareBud) to improve associations between health logs and specific journey IDs.
- **Design Aesthetic:** Deep interest in high-end design, utilizing "Steady Dawn" (slate/teal/gold/amber/crimson) and glassmorphism in recent UI work.
- **Development Speed:** Heavy use of AI orchestration (ChatGPT, Copilot, Gemini) to accelerate building production-ready systems.
