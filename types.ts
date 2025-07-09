
export enum ProjectRank {
  Gold = 'Gold',
  Silver = 'Silver',
  Bronze = 'Bronze',
  Current = 'Current'
}

export interface Project {
  rank: ProjectRank;
  title: string;
  description: string;
  role?: string;
  tech: string[];
  liveUrl?: string;
  repoUrl: string;
}
