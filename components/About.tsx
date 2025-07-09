
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';

const About = () => {
  return (
    <section id="about" className="w-full max-w-3xl">
      <Card className="bg-secondary/40 border-blue-500/20">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-blue-300">About Me</CardTitle>
        </CardHeader>
        <CardContent className="text-lg text-slate-300 space-y-4">
          <p>
            I'm an 18-year-old programmer from New Jersey who loves building things that are clean, fast, and actually *useful*. Whether it's designing websites for hackathons, contributing to open-source tools, or crafting visuals that actually don't suck, I like to explore all sides of tech.
          </p>
          <p>
            Currently leveling up in <span className="text-blue-400 font-semibold">data structures, concurrency, and backend development</span> — and working on side projects that blend design and functionality.
          </p>
          <p className="text-center pt-2">🎓 Incoming CS Student @ Rutgers University (Class of 2029)</p>
        </CardContent>
      </Card>
    </section>
  );
};

export default About;
