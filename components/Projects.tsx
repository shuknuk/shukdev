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

const GithubLinksDropdown: React.FC<{ links: { label: string; url: string }[] | string; isDialog?: boolean }> = ({ links, isDialog = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!Array.isArray(links)) {
    return (
      <a href={links} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ICONS.github className="w-4 h-4" />
        <span>GitHub</span>
      </a>
    );
  }

  const baseClasses = "flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors";
  const dropdownMenuPosition = isDialog ? "top-full mt-2" : "bottom-full mb-2";

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className={baseClasses}>
        <ICONS.github className="w-4 h-4" />
        <span>GitHub</span>
        <ICONS.chevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className={`absolute ${dropdownMenuPosition} left-0 min-w-[150px] bg-popover border border-border rounded-md shadow-lg p-1 z-20 fade-in-on-change`}>
          {(links as { label: string; url: string }[]).map(link => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full text-left px-3 py-1.5 text-sm text-popover-foreground hover:bg-accent rounded-sm"
              onClick={() => setIsOpen(false)}
            >
              <ICONS.github className="w-4 h-4 mr-2" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};


const CaseStudyDialog: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  if (!project.caseStudy) return null;

  const contentRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    const contentEl = contentRef.current;
    if (!contentEl) return;

    const onFirstScroll = () => {
      setShowScrollIndicator(false);
      contentEl.removeEventListener('scroll', onFirstScroll);
    };

    const checkAndSetIndicator = () => {
      contentEl.removeEventListener('scroll', onFirstScroll);
      const isScrollable = contentEl.scrollHeight > contentEl.clientHeight;

      if (isScrollable && contentEl.scrollTop === 0) {
        setShowScrollIndicator(true);
        contentEl.addEventListener('scroll', onFirstScroll);
      } else {
        setShowScrollIndicator(false);
      }
    };

    const timeoutId = setTimeout(checkAndSetIndicator, 100);
    const resizeObserver = new ResizeObserver(checkAndSetIndicator);
    resizeObserver.observe(contentEl);

    return () => {
      clearTimeout(timeoutId);
      resizeObserver.disconnect();
      if (contentEl) {
        contentEl.removeEventListener('scroll', onFirstScroll);
      }
    };
  }, [project]);

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
        <div className="flex items-center space-x-4 mb-4">
          {project.links.github && <GithubLinksDropdown links={project.links.github} isDialog={true} />}
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
              <ICONS.externalLink className="w-4 h-4 mr-1" /> Live Site
            </a>
          )}
        </div>
        <div ref={contentRef} className="space-y-4 text-muted-foreground max-h-[60vh] overflow-y-auto pr-2 relative">
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
          {showScrollIndicator && (
            <div className="absolute bottom-0 right-2 left-0 h-20 bg-gradient-to-t from-card to-transparent pointer-events-none flex justify-center items-end pb-2">
              <ICONS.chevronDown className="w-6 h-6 text-muted-foreground animate-bounce opacity-75" />
            </div>
          )}
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


const ProjectCard: React.FC<{ project: Project; onCaseStudyClick: () => void; onImagePreviewClick: () => void; className?: string }> = ({ project, onCaseStudyClick, onImagePreviewClick, className }) => {
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
    <div ref={cardRef} className={`glass-card group relative flex flex-col justify-between overflow-hidden p-5 glow-accent-hover ${className}`}>
      {/* Background Glow Effect on Hover via CSS (assumed spotlight-card class handles this or we add it) */}

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-secondary/50 rounded-lg">
              {/* Placeholder or specific icon if available, otherwise generic folder */}
              <ICONS.folder className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground tracking-tight">{project.title}</h3>
          </div>
          {project.rank && (
            <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${rankColorMap[project.rank]} backdrop-blur-sm`}>
              {project.rank}
            </span>
          )}
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.slice(0, 5).map((t) => {
              const IconComponent = getTechIconComponent(t);
              return (
                <div key={t} className="flex items-center gap-1.5 px-2 py-1 text-[10px] uppercase tracking-wider font-semibold bg-secondary/60 text-secondary-foreground rounded-md border border-border/50">
                  {IconComponent && <IconComponent className="w-3 h-3" />}
                  <span>{t}</span>
                </div>
              );
            })}
            {project.tech.length > 5 && (
              <span className="text-[10px] py-1 text-muted-foreground">+ {project.tech.length - 5} more</span>
            )}
          </div>

          <div className="flex items-center justify-between border-t border-border/50 pt-4">
            <div className="flex items-center gap-3">
              {project.links.github && <GithubLinksDropdown links={project.links.github} />}
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  <ICONS.externalLink className="w-4 h-4" />
                  <span>Visit</span>
                </a>
              )}
            </div>

            <div className="flex gap-2">
              {project.image && (
                <button onClick={onImagePreviewClick} className="p-2 hover:bg-muted rounded-full transition-colors group/btn" title="View Preview">
                  <ICONS.image className="w-4 h-4 text-muted-foreground group-hover/btn:text-primary" />
                </button>
              )}
              {project.caseStudy && (
                <button onClick={onCaseStudyClick} className="flex items-center gap-1 text-xs font-semibold bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1.5 rounded-full transition-colors">
                  Case Study
                  <ICONS.chevronDown className="w-3 h-3 -rotate-90" />
                </button>
              )}
            </div>
          </div>
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
    <section id="projects" className="py-16">
      <div className="section-container mb-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-primary/50"></div>
              <span className="text-sm font-mono text-primary uppercase tracking-wider">/projects</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-foreground">Selected Work</h2>
            <p className="text-muted-foreground max-w-xl">
              A collection of projects where I've engineered AI systems, built full-stack platforms, and experimented with new interfaces.
            </p>
          </div>

          <div className="bg-secondary/50 p-1 rounded-lg border-dotted-box">
            {['Featured Work', 'Creative Labs'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as Tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${activeTab === tab
                  ? 'bg-primary/20 text-primary'
                  : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project, index) => {
          let spanClass = "";
          if (activeTab === 'Featured Work') {
            if (index === 0 || index === 3) {
              spanClass = "md:col-span-2";
            }
          }

          return (
            <ProjectCard
              key={project.id}
              project={project}
              className={spanClass}
              onCaseStudyClick={() => openCaseStudy(project.id)}
              onImagePreviewClick={() => openImagePreview(project.id)}
            />
          );
        })}
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