
import React from 'react';
import Badge from './ui/Badge';
import { techStackData } from '../constants';

const TechStack = () => {
  return (
    <section id="tech" className="w-full max-w-3xl text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-blue-300">My Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {techStackData.map((tech) => (
          <Badge key={tech} className="py-2 px-4 text-sm md:text-base">
            {tech}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
