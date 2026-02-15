
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
}

export interface Socials {
  linkedin: string;
  github: string;
  twitter?: string;
  email: string;
}

export interface GroundingSource {
  title: string;
  uri: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  sources?: GroundingSource[];
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  skills: {
    category: string;
    items: string[];
  }[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  socials: Socials;
}
