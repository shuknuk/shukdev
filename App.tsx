
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeProvider';
import { ThemeToggle } from './components/ThemeToggle';
import { Blog } from './components/Blog';
import { TechStack } from './components/TechStack';

import { CommandMenu } from './components/CommandMenu';
import { NavBar } from './components/ui/tubelight-navbar';
import { Typewriter } from './components/ui/typewriter';
import { Home, User, Briefcase, FileText, Code } from 'lucide-react';
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
    { name: 'Tech', url: '#tech', icon: Code },
    { name: 'Blog', url: '#blog', icon: FileText }
  ];

  const Hero: React.FC = () => {
    const [showSpotlight, setShowSpotlight] = useState(false);

    return (
      <section id="home" className="pt-20 pb-20 text-center">
        <h1 className={`text-6xl md:text-8xl font-extrabold mb-4 tracking-tight ${showSpotlight ? 'shiny-text' : ''}`}>
          <Typewriter
            text="Kinshuk Goel"
            speed={100}
            initialDelay={500}
            loop={false}
            showCursor={true}
            cursorChar="_"
            className="text-foreground"
            onComplete={() => {
              // Start spotlight animation after typing is complete
              setTimeout(() => setShowSpotlight(true), 300);
            }}
          />
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Full-Stack Developer & AI Systems Engineer | CS Student @ Rutgers University
          <br/>
          I build AI tools and full-stack applications that are simple, reliable, and easy to use.
        </p>
        <div className="flex justify-center items-center gap-4">
          <button 
            onClick={() => document.getElementById('work-timeline')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90"
          >
            View My Work
          </button>
          <button 
            onClick={() => setCommandMenuOpen(true)}
            className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-semibold hover:bg-muted"
          >
            Contact Me
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
          <div id="tech">
            <TechStack />
          </div>
          <div id="blog">
            <Blog />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
