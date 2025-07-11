import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import BackgroundParticles from './components/BackgroundParticles';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
      return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="relative min-h-screen bg-[#f9f9f9] dark:bg-black">
      <BackgroundParticles />
      <div className="flex flex-col min-h-screen relative z-10 bg-transparent text-[#111111] dark:text-neutral-100">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow">
          <Hero />
          <About />
          <TechStack />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
