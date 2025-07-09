
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-950/50 via-slate-900/50 to-background"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <main className="flex flex-col items-center py-12 md:py-24 space-y-24 md:space-y-32">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
