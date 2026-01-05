import { Project, RoadmapItem, TechItem, SocialLink } from './types';

export const PROFILE = {
  name: "Krisna Maulana Rahman",
  role: "AI Architect & Blockchain Researcher",
  location: "Surabaya, Indonesia",
  philosophy: "Bridging the gap between autonomous intelligence and decentralized systems.",
  coordinates: "7.2575° S, 112.7521° E"
};

export const PROJECTS: Project[] = [
  {
    id: "nexus-flow",
    title: "NexusFlow AI",
    category: "AI Architecture",
    description: "Autonomous logging and automation architecture designed for high-throughput AI agent systems. Features self-healing pipelines and real-time inference monitoring.",
    tech: ["Python", "OpenAI API", "Vector DB", "Docker"],
    status: "Beta"
  },
  {
    id: "subly-saas",
    title: "Subly SaaS",
    category: "SaaS Framework",
    description: "A scalable MVP framework engineered for subscription management. Focuses on tenancy isolation, recurring billing abstraction, and rapid deployment cycles.",
    tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
    status: "Live"
  },
  {
    id: "prism-system",
    title: "Prism System",
    category: "Design System",
    description: "Modular atomic design system optimized for high-conversion interfaces. Enforces strict consistency across distributed frontend architectures.",
    tech: ["TypeScript", "Tailwind", "Figma", "Storybook"],
    status: "Live"
  },
  {
    id: "prava-agency",
    title: "Prava Agency",
    category: "Web Agency",
    description: "A modern digital agency website showcasing AI & Blockchain solutions. Built with React, TypeScript, and Vite for optimal performance.",
    tech: ["React", "TypeScript", "Vite", "Tailwind"],
    status: "Live",
    url: "https://prava.asia"
  }
];

export const ROADMAP: RoadmapItem[] = [
  {
    year: "2024",
    quarter: "Q1-Q2",
    title: "AI Meta-Skills",
    description: "Developing recursive self-improvement loops for LLM agents. Focus on prompt engineering frameworks and context window optimization.",
    status: "In Progress"
  },
  {
    year: "2025",
    quarter: "Q3+",
    title: "Blockchain Convergence",
    description: "Integrating decentralized identity (DID) with AI agents. Researching on-chain verification for autonomous agent actions.",
    status: "Planned"
  }
];

export const TECH_STACK: TechItem[] = [
  {
    category: "Core",
    skills: ["TypeScript", "Python", "PHP", "Rust"]
  },
  {
    category: "Frontend",
    skills: ["React", "Tailwind CSS", "Next.js", "WebGL"]
  },
  {
    category: "AI & Data",
    skills: ["OpenAI API", "LangChain", "PyTorch", "Pinecone"]
  },
  {
    category: "Web3",
    skills: ["Solidity", "Ethers.js", "IPFS", "Hardhat"]
  }
];

export const SOCIALS: SocialLink[] = [
  { label: "GitHub", url: "https://github.com", icon: "Github" },
  { label: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
  { label: "PRAVA", url: "https://prava.com", icon: "Globe" }
];