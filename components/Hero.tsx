
import React from 'react';
import Button from './ui/Button';
import LinkedInIcon from './icons/LinkedInIcon';
import MailIcon from './icons/MailIcon';

const Hero = () => {
  return (
    <section id="home" className="w-full max-w-4xl text-center flex flex-col items-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300">
        Kinshuk Goel
      </h1>
      <p className="mt-4 text-lg sm:text-xl md:text-2xl text-muted-foreground">
        Developer | Designer | Full-stack Tinkerer
      </p>
      <p className="mt-6 max-w-xl text-center text-lg text-slate-300">
        I'm an 18-year-old programmer who loves building things that are clean, fast, and actually useful. Violinist by day, JavaScript nerd by night.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a href="https://www.linkedin.com/in/kinshuk-goel-7137a1281/" target="_blank" rel="noopener noreferrer">
          <Button variant="default" className="w-full sm:w-auto px-6 py-3 text-base">
            <LinkedInIcon className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
        </a>
        <a href="mailto:kinshukgoel2@gmail.com">
          <Button variant="outline" className="w-full sm:w-auto px-6 py-3 text-base">
            <MailIcon className="mr-2 h-5 w-5" />
            Email Me
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
