
export type ProjectRank = 'gold' | 'silver' | 'bronze';

export interface Project {
  rank: ProjectRank;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}
