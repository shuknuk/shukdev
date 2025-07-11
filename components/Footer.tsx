import React from 'react';
import { LinkedInIcon, MailIcon, GithubIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 md:px-6 text-center text-neutral-500 dark:text-neutral-400">
        <div className="flex justify-center items-center gap-8 mb-8">
          <a
            href="https://www.linkedin.com/in/kinshuk-goel-7137a1281/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-7 w-7" />
          </a>
          <a
            href="https://github.com/shuknuk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="h-7 w-7" />
          </a>
          <a
            href="mailto:kinshukgoel2@gmail.com"
            className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
            aria-label="Email"
          >
            <MailIcon className="h-7 w-7" />
          </a>
        </div>
        <p className="italic text-base">"Make stuff. Break it. Build it again."</p>
        <p className="text-sm mt-6">© {new Date().getFullYear()} Kinshuk Goel. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
