export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  demo?: string;
  tags: string[];
  color: "purple" | "blue" | "cyan";
}

export interface Skill {
  name: string;
  level: number;
  category: "programming" | "data" | "tools";
}

export interface SkillCategory {
  label: string;
  icon: string;
  skills: Skill[];
}

export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  detail: string;
  type: "education" | "certification";
}
