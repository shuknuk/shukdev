
import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeProvider';
import { ICONS } from '../constants';

interface CommandMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function CommandMenu({ open, setOpen }: CommandMenuProps) {
  const { setTheme, theme } = useTheme();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open, setOpen]);

  if (!open) {
    return null;
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kinshukgoel2@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const commandGroups = [
      {
          name: 'Navigation',
          commands: [
              { icon: <ICONS.home className="h-4 w-4 mr-2" />, text: 'Go to Home', action: () => scrollTo('home') },
              { icon: <ICONS.folder className="h-4 w-4 mr-2" />, text: 'Go to Projects', action: () => scrollTo('projects') },
              { icon: <ICONS.user className="h-4 w-4 mr-2" />, text: 'Go to About', action: () => scrollTo('about') },
          ]
      },
      {
          name: 'Contact & Links',
          commands: [
              { icon: <ICONS.copy className="h-4 w-4 mr-2" />, text: copied ? 'Email Copied!' : 'Copy Email', action: handleCopyEmail },
              { icon: <ICONS.linkedin className="h-4 w-4 mr-2" />, text: 'Open LinkedIn', action: () => window.open('https://www.linkedin.com/in/kinshuk-goel-7137a1281/', '_blank') },
          ]
      },
      {
          name: 'Actions',
          commands: [
              { icon: theme === 'dark' ? <ICONS.sun className="h-4 w-4 mr-2" /> : <ICONS.moon className="h-4 w-4 mr-2" />, text: 'Toggle Theme', action: () => setTheme(theme === 'dark' ? 'light' : 'dark') }
          ]
      }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-xl rounded-lg border border-border bg-popover text-popover-foreground shadow-lg"
      >
        <div className="flex items-center border-b px-3">
          <input
            placeholder="Type a command or search..."
            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="p-2">
            {commandGroups.map(group => (
                <div key={group.name} className="mb-2 last:mb-0">
                    <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">{group.name}</p>
                    {group.commands.map(cmd => (
                        <button 
                            key={cmd.text}
                            onClick={cmd.action}
                            className="w-full text-left flex items-center p-2 rounded-sm text-sm hover:bg-accent hover:text-accent-foreground cursor-pointer"
                        >
                            {cmd.icon}
                            {cmd.text}
                        </button>
                    ))}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
