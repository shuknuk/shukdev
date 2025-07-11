import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import BackgroundParticles from './components/BackgroundParticles';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#f9f9f9] dark:bg-black">
      <BackgroundParticles />
      <div className="flex flex-col min-h-screen relative z-10 bg-transparent text-[#111111] dark:text-neutral-100">
        <ThemeToggle />
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
