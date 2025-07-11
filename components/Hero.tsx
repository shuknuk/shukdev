import React from 'react';
import Button from './ui/Button';
import FadeInSection from './FadeInSection';
import { LinkedInIcon, MailIcon, GithubIcon } from './icons';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[75vh] flex items-center py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInSection className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4">
            Kinshuk Goel
          </h1>
          <p className="text-2xl md:text-3xl text-neutral-500 dark:text-neutral-400 mb-8">
            Developer | Designer | Full-stack Tinkerer
          </p>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-10">
            I'm an 18-year-old programmer from New Jersey who loves building things that are clean, fast, and actually useful.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Button asLink href="https://www.linkedin.com/in/kinshuk-goel-7137a1281/" variant="default">
              <LinkedInIcon className="mr-2 h-5 w-5" /> LinkedIn
            </Button>
            <Button asLink href="https://github.com/shuknuk" variant="outline">
               <GithubIcon className="mr-2 h-5 w-5" /> GitHub
            </Button>
            <Button asLink href="mailto:kinshukgoel2@gmail.com" variant="outline">
              <MailIcon className="mr-2 h-5 w-5" /> Email Me
            </Button>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Hero;
