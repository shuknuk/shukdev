
import React from 'react';
import LinkedInIcon from './icons/LinkedInIcon';
import MailIcon from './icons/MailIcon';

const Footer = () => {
  return (
    <footer className="w-full max-w-3xl border-t border-blue-500/20 pt-8 mt-12">
      <div className="flex flex-col items-center text-center">
        <p className="italic text-muted-foreground">"Make stuff. Break it. Build it again."</p>
        <div className="flex items-center gap-6 mt-6">
          <a href="https://www.linkedin.com/in/kinshuk-goel-7137a1281/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-400 transition-colors" aria-label="LinkedIn">
            <LinkedInIcon className="h-7 w-7" />
          </a>
          <a href="mailto:kinshukgoel2@gmail.com" className="text-muted-foreground hover:text-blue-400 transition-colors" aria-label="Email">
            <MailIcon className="h-7 w-7" />
          </a>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Kinshuk Goel. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
