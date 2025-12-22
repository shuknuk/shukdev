
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeProvider';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { ThemeToggle } from './components/ThemeToggle';
import { CommandMenu } from './components/CommandMenu';
import { NavBar } from './components/ui/tubelight-navbar';
import { Typewriter } from './components/ui/typewriter';
import { Home, User, Briefcase, Code } from 'lucide-react';
import { ICONS } from './constants';

const App: React.FC = () => {
  const [isCommandMenuOpen, setCommandMenuOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setCommandMenuOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'Tech', url: '#tech', icon: Code }
  ];

  const Hero: React.FC = () => {
    return (
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 text-center overflow-visible">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="space-y-6">
          <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter shiny-text">
            <Typewriter
              text="Kinshuk Goel"
              speed={80}
              initialDelay={100}
              loop={false}
              showCursor={false}
              className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50"
            />
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground tracking-tight">
            Building <span className="text-foreground font-semibold">Intelligent Systems</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
            I engineer AI agents and full-stack platforms that are simple, reliable, and built for the real world.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-3 rounded-full bg-foreground text-background font-semibold hover:opacity-90 transition-all flex items-center gap-2"
          >
            View Projects
            <ICONS.chevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
          <button
            onClick={() => setCommandMenuOpen(true)}
            className="px-8 py-3 rounded-full border border-border bg-background text-foreground font-semibold hover:bg-secondary/50 transition-colors"
          >
            Contact
          </button>
        </div>
      </section>
    );
  };

  const About: React.FC = () => (
    <section id="about" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="max-w-3xl mx-auto text-muted-foreground">
        {/* I’m an 18-year-old programmer from New Jersey with a focus on AI systems engineering — building everything from LLM-powered agents to full-stack applications that integrate AI into real-world workflows. My background spans frontend/UI design, backend development, and cloud deployment, giving me the ability to take AI projects from research concept to production-ready system. */}
        I’m a CS student at Rutgers and a programmer from New Jersey. I like building AI tools and full-stack apps — stuff like LLM agents and platforms that actually get used in real workflows. I’ve worked across frontend, backend, and cloud, so I know how to take a project from an idea to something people can use.
      </p>
      <p className="max-w-3xl mx-auto text-muted-foreground mt-4">
        {/* Right now, I’m leveling up in machine learning theory, deep learning with PyTorch, and LLM fine-tuning, with the goal of engineering the next generation of intelligent, autonomous applications. */}
        Right now, I’m digging into ML theory, PyTorch, and LLM fine-tuning so I can build smarter, more autonomous systems.
      </p>
    </section>
  );

  const Footer: React.FC = () => (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://www.linkedin.com/in/kinshuk-goel-7137a1281/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            <ICONS.linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/shuknuk" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            <ICONS.github className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Kinshuk Goel. All rights reserved.</p>
        <p className="text-xs mt-2 italic">"Make stuff. Break it. Build it again."</p>
      </div>
    </footer>
  );

  return (
    <ThemeProvider defaultTheme="light" storageKey="kinshuk-portfolio-theme">
      <div className="text-foreground min-h-screen font-sans">
        <NavBar items={navItems} />

        <div className="fixed top-4 right-4 z-40 flex items-center gap-4">
          <button
            onClick={() => setCommandMenuOpen(true)}
            className="text-sm text-muted-foreground bg-secondary px-3 py-1.5 rounded-md border border-border flex items-center gap-2 hover:bg-muted"
          >
            <span>Cmd + K</span>
          </button>
          <ThemeToggle />
        </div>

        <CommandMenu open={isCommandMenuOpen} setOpen={setCommandMenuOpen} />
        <main className="container mx-auto px-4">
          <Hero />
          <About />
          <Projects />
          <div id="tech">
            <TechStack />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
