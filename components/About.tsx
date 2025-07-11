import React from 'react';
import FadeInSection from './FadeInSection';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-neutral-950">
      <FadeInSection className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-12">About Me</h2>
          <div className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 space-y-6 text-left md:text-center">
            <p>
              I'm an 18-year-old programmer from New Jersey who loves building things that are clean, fast, and actually useful. Whether it's designing websites for hackathons, contributing to open-source tools, or crafting visuals that actually don't suck, I like to explore all sides of tech.
            </p>
            <p>
              Currently leveling up in data structures, concurrency, and backend development — and working on side projects that blend design and functionality. I'm an incoming CS Student at Rutgers University (Class of 2029).
            </p>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default About;
