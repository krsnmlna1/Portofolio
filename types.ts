export interface ProjectDetails {
  problem: string;
  solution: string;
  features: string[]; // Maps to "What I Worked On" / "What I Built"
  techStackDetails?: string[];
  learned?: string;
  systemDesign?: string[]; // For Subly
  keyIdeas?: string[]; // For Prism
  statusText?: string; // For explicit status description
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'AI Architecture' | 'SaaS Framework' | 'Design System' | 'Web Agency';
  tech: string[];
  status: 'Live' | 'Beta' | 'Prototype';
  url?: string;
  details?: ProjectDetails;
}

export interface RoadmapItem {
  year: string;
  quarter: string;
  title: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Planned';
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface TechItem {
  category: string;
  skills: string[];
}