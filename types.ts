export interface Project {
  id: string;
  title: string;
  category: 'Social Impact' | 'AI/ML' | 'Web Dev' | 'Mentorship';
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  link?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: 'Hackathon' | 'Oratorical' | 'Academic' | 'Leadership';
  icon: 'trophy' | 'mic' | 'star' | 'certificate';
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  image: string;
  skills: string[];
  highlight?: boolean;
  elite?: boolean;
  link?: string;
  description?: string;
  meta?: { label: string; value: string }[];
}

export interface NavItem {
  label: string;
  path: string;
}