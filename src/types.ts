
export type Theme = 'dark' | 'light' | 'system';

export interface Project {
  id: string;
  title: string;
  category: 'Featured Work' | 'Creative Labs';
  rank?: 'Gold' | 'Silver' | 'Bronze' | 'In Progress';
  description: string;
  tech: string[];
  links: {
    github?: string | { label: string; url: string }[];
    live?: string;
  };
  caseStudy?: {
    challenge: string;
    solution: string;
    learnings: string;
  };
  image?: string;
  is_hidden?: boolean;
}