
import React from 'react';
import { projectsData } from '../constants';
import { Project, ProjectRank } from '../types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/Card';
import Badge from './ui/Badge';
import MedalIcon from './icons/MedalIcon';
import GithubIcon from './icons/GithubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

const rankConfig = {
  [ProjectRank.Gold]: {
    color: 'text-yellow-400',
    label: 'Gold Project',
    borderColor: 'border-yellow-400/50 shadow-yellow-400/20'
  },
  [ProjectRank.Silver]: {
    color: 'text-gray-300',
    label: 'Silver Project',
    borderColor: 'border-gray-300/50 shadow-gray-300/20'
  },
  [ProjectRank.Bronze]: {
    color: 'text-yellow-700',
    label: 'Bronze Project',
    borderColor: 'border-yellow-700/50 shadow-yellow-800/20'
  },
  [ProjectRank.Current]: {
    color: 'text-blue-400 animate-pulse',
    label: 'Currently Building',
    borderColor: 'border-blue-400/50 shadow-blue-400/20'
  }
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const config = rankConfig[project.rank];

  return (
    <Card className={`flex flex-col h-full bg-secondary/30 border-blue-500/10 hover:${config.borderColor}`}>
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
          {project.rank !== ProjectRank.Current &&
            <div title={config.label} className={config.color}>
              <MedalIcon className="w-7 h-7" />
            </div>
          }
          {project.rank === ProjectRank.Current &&
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/20 px-2 py-1 rounded">
              Active
            </div>
          }
        </div>
        {project.role && (
          <CardDescription className="text-blue-400 font-semibold">{project.role}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{project.description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-2">
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <GithubIcon className="w-5 h-5" />
            Source
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ExternalLinkIcon className="w-5 h-5" />
              Live Site
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const sortedProjects = [...projectsData].sort((a, b) => {
    const order = { [ProjectRank.Current]: 0, [ProjectRank.Gold]: 1, [ProjectRank.Silver]: 2, [ProjectRank.Bronze]: 3 };
    return order[a.rank] - order[b.rank];
  });

  return (
    <section id="projects" className="w-full max-w-6xl text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-blue-300">Projects & Code</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
