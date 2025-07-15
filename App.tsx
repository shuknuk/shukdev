
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeProvider';
import { ThemeToggle } from './components/ThemeToggle';
import { Projects } from './components/Projects';
import { CommandMenu } from './components/CommandMenu';
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

  const Hero: React.FC = () => (
    <section id="home" className="pt-20 pb-20 text-center">
      <h1 className="shiny-text text-6xl md:text-8xl font-extrabold mb-4 tracking-tight">
        Kinshuk Goel
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
        Developer & Designer. Incoming CS Student @ Rutgers University. <br/>
        I build things that are clean, fast, and actually useful.
      </p>
      <div className="flex justify-center items-center gap-4">
        <button 
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
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

  const About: React.FC = () => (
    <section id="about" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="max-w-3xl mx-auto text-muted-foreground">
            I'm an 18-year-old programmer from New Jersey with a passion for building beautiful and functional applications. From designing hackathon websites to contributing to open-source tools, I love exploring the intersection of technology and design. I'm currently leveling up in data structures and backend development, always seeking new challenges that push my creative and technical boundaries.
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
        <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
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
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
