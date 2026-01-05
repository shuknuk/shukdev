
import React from 'react';
import { ThemeProvider } from './contexts/ThemeProvider';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { ThemeToggle } from './components/ThemeToggle';
import { Contact } from './components/Contact';
import { NavBar } from './components/ui/tubelight-navbar';
// Typewriter removed for new design
import { Home, User, Briefcase, Code } from 'lucide-react';
import { ICONS } from './constants';

const App: React.FC = () => {


  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'Tech', url: '#tech', icon: Code }
  ];

  const Hero: React.FC = () => {
    return (
      <section id="home" className="relative pt-24 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* Floating Doodles */}
        <div className="hero-doodle top-20 left-[10%] -rotate-12">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <path d="M20 10V20L25 25" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="hero-doodle bottom-40 right-[15%] rotate-12">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5L10 10M20 5L15 10M5 20L10 15M20 20L15 15" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="12.5" cy="12.5" r="2" fill="currentColor" />
          </svg>
        </div>
        <div className="hero-doodle top-1/2 left-[5%] opacity-10">
          <div className="pattern-dots w-20 h-20"></div>
        </div>

        <div className="section-container max-w-4xl mx-auto text-center relative z-10">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 border-dotted-accent text-sm font-medium text-primary mb-4">
              <span className="font-mono">// software engineer</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="text-gradient-purple">Kinshuk Goel</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground tracking-tight">
              <span className="text-foreground font-semibold">Full-Stack Software Engineer</span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Building reliable infrastructure and AI-native products. Specializing in Next.js, TypeScript, and Supabase.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-8">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all flex items-center gap-2 glow-accent-hover"
            >
              View Projects
              <ICONS.chevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-2.5 rounded-lg border-dotted-box bg-transparent text-foreground font-medium hover:bg-card/50 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </section>
    );
  };

  const About: React.FC = () => (
    <section id="about" className="py-16">
      <div className="section-container max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-px bg-primary/50"></div>
          <h2 className="text-sm font-mono text-primary uppercase tracking-wider">about-me</h2>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Who I Am</h3>
        <p className="max-w-3xl mx-auto text-muted-foreground">
          {/* I’m an 18-year-old programmer from New Jersey with a focus on AI systems engineering — building everything from LLM-powered agents to full-stack applications that integrate AI into real-world workflows. My background spans frontend/UI design, backend development, and cloud deployment, giving me the ability to take AI projects from research concept to production-ready system. */}
          I’m a CS student at Rutgers and a programmer from New Jersey. I like building AI tools and full-stack apps — stuff like LLM agents and platforms that actually get used in real workflows. I’ve worked across frontend, backend, and cloud, so I know how to take a project from an idea to something people can use.
        </p>
        <p className="max-w-3xl mx-auto text-muted-foreground mt-4">
          {/* Right now, I’m leveling up in machine learning theory, deep learning with PyTorch, and LLM fine-tuning, with the goal of engineering the next generation of intelligent, autonomous applications. */}
          Right now, I’m digging into ML theory, PyTorch, and LLM fine-tuning so I can build smarter, more autonomous systems.
        </p>
      </div>
    </section>
  );

  const Footer: React.FC = () => (
    <footer className="border-t border-dashed border-border py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()} <span className="text-foreground">Kinshuk Goel | All Rights Reserved</span>
          </p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/in/kinshukgoel2" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <ICONS.linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/shuknuk/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <ICONS.github className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground/70 italic font-mono">// make stuff. break it. build it again.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <ThemeProvider defaultTheme="dark" storageKey="kinshuk-portfolio-theme">
      <div className="text-foreground min-h-screen font-sans">
        <NavBar items={navItems} />

        <div className="fixed top-4 right-4 z-40 flex items-center gap-4">
          <ThemeToggle />
        </div>

        <main className="container mx-auto px-4">
          <Hero />
          <About />
          <Projects />
          <div id="tech">
            <TechStack />
          </div>
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
