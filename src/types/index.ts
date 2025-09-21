// Global types for the portfolio application

export interface SkillCategory {
  name: string;
  description: string;
  skills: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export interface Skill {
  name: string;
  category: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'ml' | 'frontend' | 'fullstack';
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  stats: {
    accuracy?: string;
    performance?: string;
    users?: string;
    downloads?: string;
  };
}

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  href: string;
  description: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface AnimationConfig {
  initial: Record<string, string | number | boolean>;
  animate: Record<string, string | number | boolean>;
  transition: Record<string, string | number | boolean>;
  viewport?: Record<string, string | number | boolean>;
}

// Theme types
export type Theme = 'light' | 'dark' | 'system';

// Common component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface MotionComponentProps extends BaseComponentProps {
  delay?: number;
  duration?: number;
  once?: boolean;
}