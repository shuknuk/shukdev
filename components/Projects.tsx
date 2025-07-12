
import React, { useState, useRef, useEffect } from 'react';
import { Project } from '../types';
import { PROJECTS_DATA, ICONS, getTechIconComponent } from '../constants';

type Tab = 'Featured Work' | 'Creative Labs';

const rankColorMap = {
  Gold: 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30',
  Silver: 'bg-gray-400/20 text-gray-400 border-gray-400/30',
  Bronze: 'bg-yellow-600/20 text-yellow-600 border-yellow-600/30',
  'In Progress': 'bg-blue-400/20 text-blue-400 border-blue-400/30',
};

const CaseStudyDialog: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  if (!project.caseStudy) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl m-4 bg-card text-card-foreground rounded-lg border border-border shadow-lg p-6 relative fade-in-on-change"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-1 rounded-full hover:bg-muted">
          <ICONS.x className="h-5 w-5 text-muted-foreground" />
        </button>
        <h2 className="text-2xl font-bold text-foreground mb-2">{project.title}</h2>
        <div className="flex items-center space-x-2 mb-4">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
                <ICONS.github className="w-4 h-4 mr-1" /> GitHub
              </a>
            )}
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
                <ICONS.externalLink className="w-4 h-4 mr-1" /> Live Site
              </a>
            )}
        </div>
        <div className="space-y-4 text-muted-foreground max-h-[60vh] overflow-y-auto pr-2">
            <div>
                <h3 className="font-semibold text-lg text-foreground mb-1">Challenge</h3>
                <p dangerouslySetInnerHTML={{ __html: project.caseStudy.challenge }} />
            </div>
            <div>
                <h3 className="font-semibold text-lg text-foreground mb-1">Solution</h3>
                <p dangerouslySetInnerHTML={{ __html: project.caseStudy.solution }} />
            </div>
            <div>
                <h3 className="font-semibold text-lg text-foreground mb-1">Key Learnings</h3>
                <p dangerouslySetInnerHTML={{ __html: project.caseStudy.learnings }} />
            </div>
        </div>
      </div>
    </div>
  );
};

const ImagePreviewDialog: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  if (!project.image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-5xl m-4 bg-card text-card-foreground rounded-lg border border-border shadow-lg p-4 relative fade-in-on-change"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-3 right-3 p-1 rounded-full bg-black/30 text-white hover:bg-black/50 z-10 transition-colors">
          <ICONS.x className="h-5 w-5" />
        </button>
        <div className="relative aspect-video bg-black/10 rounded-md">
            <img src={project.image} alt={`Screenshot of ${project.title}`} className="w-full h-full object-contain" />
        </div>
        <h2 className="text-lg font-bold text-foreground mt-4 px-1">{project.title}</h2>
      </div>
    </div>
  );
};


const ProjectCard: React.FC<{ project: Project; onCaseStudyClick: () => void; onImagePreviewClick: () => void; }> = ({ project, onCaseStudyClick, onImagePreviewClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardRef.current.style.setProperty('--mouse-x', `${x}px`);
      cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className="spotlight-card p-6 bg-card rounded-lg border border-border flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-md">
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
          {project.rank && (
            <span className={`flex items-center gap-1 px-2 py-0.5 text-xs font-semibold rounded-full border ${rankColorMap[project.rank]}`}>
              {project.rank === 'In Progress' ? (
                <ICONS.progress className="w-3 h-3" />
              ) : (
                <ICONS.medal className="w-3 h-3" />
              )}
              <span>{project.rank}</span>
            </span>
          )}
        </div>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => {
            const IconComponent = getTechIconComponent(t);
            return (
              <div key={t} className="flex items-center gap-1.5 px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md">
                {IconComponent && <IconComponent className="w-3.5 h-3.5" />}
                <span>{t}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ICONS.github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ICONS.externalLink className="w-4 h-4" />
                <span>Live Site</span>
              </a>
            )}
          </div>
          <div className="flex items-center gap-4">
            {project.image && (
              <button onClick={onImagePreviewClick} className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                <ICONS.image className="w-4 h-4" />
                View Picture
              </button>
            )}
            {project.caseStudy && (
              <button onClick={onCaseStudyClick} className="text-sm font-semibold text-primary hover:underline">
                View Case Study
              </button>
            )}
          </div>
      </div>
    </div>
  );
};

export function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>('Featured Work');
  const [openModalId, setOpenModalId] = useState<string | null>(null);
  const [openImageId, setOpenImageId] = useState<string | null>(null);

  const filteredProjects = PROJECTS_DATA.filter(p => p.category === activeTab);

  const openCaseStudy = (projectId: string) => {
    setOpenModalId(projectId);
  };
  
  const closeCaseStudy = () => {
    setOpenModalId(null);
  };

  const openImagePreview = (projectId: string) => {
    setOpenImageId(projectId);
  };
  
  const closeImagePreview = () => {
    setOpenImageId(null);
  };
  
  const projectToDisplayInModal = PROJECTS_DATA.find(p => p.id === openModalId);
  const projectToDisplayInPreview = PROJECTS_DATA.find(p => p.id === openImageId);

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">My Work</h2>
      
      <div className="flex justify-center mb-8">
        <div className="p-1 bg-secondary rounded-lg">
          <button
            onClick={() => setActiveTab('Featured Work')}
            className={`px-6 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'Featured Work' ? 'bg-background shadow-sm text-primary' : 'text-muted-foreground hover:bg-muted/50'}`}
          >
            Featured Work
          </button>
          <button
            onClick={() => setActiveTab('Creative Labs')}
            className={`px-6 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'Creative Labs' ? 'bg-background shadow-sm text-primary' : 'text-muted-foreground hover:bg-muted/50'}`}
          >
            Creative Labs
          </button>
        </div>
      </div>

      <div 
        key={activeTab}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-on-change"
      >
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onCaseStudyClick={() => openCaseStudy(project.id)}
            onImagePreviewClick={() => openImagePreview(project.id)}
          />
        ))}
      </div>

      {openModalId && projectToDisplayInModal && (
        <CaseStudyDialog project={projectToDisplayInModal} onClose={closeCaseStudy} />
      )}
      {openImageId && projectToDisplayInPreview && (
        <ImagePreviewDialog project={projectToDisplayInPreview} onClose={closeImagePreview} />
      )}
    </section>
  );
}
