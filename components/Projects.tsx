import React from 'react';
import type { Project, ProjectRank } from '../types';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/Card';
import Badge from './ui/Badge';
import Button from './ui/Button';
import FadeInSection from './FadeInSection';
import { GithubIcon, ExternalLinkIcon, CrownIcon, AwardIcon, MedalIcon } from './icons';

const projects: Project[] = [
  {
    rank: 'gold',
    title: 'Intelligent Resume Analyzer',
    description: "An AI agent that analyzes resumes, compares them to job descriptions, and uses live web data to provide deeply tailored feedback.",
    tech: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'Gemini API', 'LangChain', 'Docker'],
  },
  {
    rank: 'gold',
    title: 'BRHacks 2024',
    description: 'Designed and developed the full website for our second annual high school hackathon. Fully responsive, animated, and deployed on Vercel.',
    tech: ['Next.js', 'TailwindCSS', 'Framer Motion'],
    githubUrl: 'https://github.com/shuknuk/brhacks24',
    liveUrl: 'https://brhacks24.vercel.app/',
  },
  {
    rank: 'silver',
    title: 'BRHacks 2023',
    description: 'Created the frontend and helped launch the first-ever BRHacks event site. Learned to collaborate under pressure and shipped a functional product.',
    tech: ['Next.js', 'CSS'],
    githubUrl: 'https://github.com/ethanw2457/2023BRHacksWebsite',
  },
  {
    rank: 'silver',
    title: 'Environmental Careers Guide',
    description: 'Interactive website showcasing 10 environmental careers with quotes, icons, and real education links for an APES project.',
    tech: ['Next.js', 'TailwindCSS', 'React Hooks'],
    githubUrl: 'https://github.com/shuknuk/environmental-careers-guide',
  },
   {
    rank: 'bronze',
    title: 'GreenCoin',
    description: 'Carbon footprint calculator for teens. Uses aesthetic design + gamification to make tracking your digital carbon footprint more appealing.',
    tech: ['JavaScript', 'HTML/CSS'],
    githubUrl: 'https://github.com/shuknuk/GreenCoin',
  },
  {
    rank: 'bronze',
    title: '3pfs-in-1',
    description: 'A command-line tool that simplifies package search across Snap, Flatpak, and Apt for Linux power users.',
    tech: ['Bash'],
    githubUrl: 'https://github.com/shuknuk/3pfs-in-1',
  },
];

const RankIcon: React.FC<{ rank: ProjectRank }> = ({ rank }) => {
  const iconProps = { className: "h-6 w-6" };
  const rankStyles: Record<ProjectRank, { icon: React.ReactNode; color: string; text: string }> = {
    gold: { icon: <CrownIcon {...iconProps} />, color: 'text-yellow-500 dark:text-yellow-400', text: 'Gold Project' },
    silver: { icon: <AwardIcon {...iconProps} />, color: 'text-slate-500 dark:text-slate-400', text: 'Silver Project' },
    bronze: { icon: <MedalIcon {...iconProps} />, color: 'text-orange-500 dark:text-orange-400', text: 'Bronze Project' }
  };
  const { icon, color, text } = rankStyles[rank];
  return <div className={`flex items-center gap-2 text-base font-medium ${color}`}>{icon}<span>{text}</span></div>;
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <Card className="flex flex-col h-full">
    <CardHeader className="p-8">
      <div className="flex justify-between items-start mb-2">
        <CardTitle className="text-2xl">{project.title}</CardTitle>
        <RankIcon rank={project.rank} />
      </div>
    </CardHeader>
    <CardContent className="flex-grow p-8 pt-0">
      <p className="text-neutral-600 dark:text-neutral-400 text-base mb-6">{project.description}</p>
      <div className="flex flex-wrap gap-3">
        {project.tech.map(t => <Badge key={t}>{t}</Badge>)}
      </div>
    </CardContent>
    <CardFooter className="mt-auto p-8 pt-0">
      <div className="flex items-center gap-4">
        {project.githubUrl && (
          <Button asLink href={project.githubUrl} variant="outline" className="text-sm px-4 py-2 h-auto">
            <GithubIcon className="mr-2 h-4 w-4" /> GitHub
          </Button>
        )}
        {project.liveUrl && (
          <Button asLink href={project.liveUrl} variant="outline" className="text-sm px-4 py-2 h-auto">
            <ExternalLinkIcon className="mr-2 h-4 w-4" /> Live Site
          </Button>
        )}
      </div>
    </CardFooter>
  </Card>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-white dark:bg-neutral-950">
      <FadeInSection className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">Highlight Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Projects;
