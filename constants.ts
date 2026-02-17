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
    url: "/project/nexus-flow",
    tech: ["Python", "OpenAI API", "Vector DB", "Docker"],
    status: "Beta",
    details: {
      problem: "Banyak bisnis kecil kesulitan follow-up lead dan buang waktu manual.",
      solution: "NexusFlow adalah sistem automation berbasis AI untuk klasifikasi lead dan drafting outreach.",
      features: [
        "Lead categorization logic",
        "Workflow automation UI",
        "Real-time activity logs",
        "Modular dashboard architecture"
      ],
      techStackDetails: ["React", "Vercel"],
      learned: "Belajar merancang sistem end-to-end, state management, dan UI untuk automation workflow."
    }
  },
  {
    id: "subly-saas",
    title: "Subly SaaS",
    category: "SaaS Framework",
    description: "A scalable MVP framework engineered for subscription management. Focuses on tenancy isolation, recurring billing abstraction, and rapid deployment cycles.",
    tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
    status: "Live",
    url: "/project/subly-saas",
    details: {
      problem: "Banyak creator / SaaS kecil kesulitan mengelola sistem langganan sederhana tanpa biaya besar.",
      solution: "Subly dirancang sebagai platform subscription management ringan untuk bisnis kecil.",
      features: [
        "Product flow design",
        "Subscription lifecycle modeling",
        "Frontend architecture planning"
      ],
      systemDesign: [
        "User → Subscribe → Billing cycle",
        "Role: Admin / Customer",
        "Subscription states (active, paused, cancelled)"
      ],
      statusText: "Product concept & early prototype (portfolio project)",
      techStackDetails: ["React", "Node.js", "Stripe API"]
    }
  },
  {
    id: "prism-system",
    title: "Prism System",
    category: "Design System",
    description: "Modular atomic design system optimized for high-conversion interfaces. Enforces strict consistency across distributed frontend architectures.",
    tech: ["TypeScript", "Tailwind", "Figma", "Storybook"],
    status: "Live",
    url: "/project/prism-system",
    details: {
      problem: "Content creation dan workflow manual bikin scaling lambat dan tidak konsisten.",
      solution: "Prism dirancang sebagai AI-assisted system untuk mengelola workflow konten dan ide.",
      features: [
        "Dashboard UI",
        "Workflow abstraction",
        "Automation-oriented UX"
      ],
      keyIdeas: [
        "Modular workflow",
        "AI-assisted generation (prompt-based)",
        "Centralized dashboard"
      ],
      statusText: "Concept & UI prototype for AI workflow system",
      techStackDetails: ["TypeScript", "Tailwind", "OpenAI Integration"]
    }
  },
  {
    id: "sentinel-platform",
    title: "Sentinel Platform",
    category: "Security Platform",
    description: "Advanced security monitoring and threat detection platform with real-time analytics. Provides comprehensive infrastructure oversight and automated incident response capabilities.",
    tech: ["Python", "React", "PostgreSQL", "Redis", "Docker"],
    status: "Beta",
    url: "/project/sentinel-platform",
    details: {
      problem: "Organizations struggle with real-time security monitoring and lack unified visibility across distributed systems.",
      solution: "Sentinel Platform provides centralized security monitoring with AI-powered threat detection and automated response workflows.",
      features: [
        "Real-time threat detection engine",
        "Automated incident response workflows",
        "Unified security dashboard",
        "Integration with existing security tools",
        "Anomaly detection using machine learning"
      ],
      techStackDetails: ["Python", "React", "PostgreSQL", "Redis", "Docker", "TensorFlow"],
      learned: "Developed expertise in security architecture, real-time data processing, and building scalable monitoring systems with ML integration.",
      statusText: "Active development with beta deployment for select clients"
    }
  }
];

export const AGENCY = {
  id: "prava-agency",
  title: "Prava Agency",
  category: "Web Agency",
  description: "A modern digital agency website showcasing AI & Blockchain solutions. Built with React, TypeScript, and Vite for optimal performance.",
  tech: ["React", "TypeScript", "Vite", "Tailwind"],
  status: "Live",
  url: "https://prava.asia"
};

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