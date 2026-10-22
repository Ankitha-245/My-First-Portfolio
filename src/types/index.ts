export interface ProfileInfo {
  name: string;
  role: string;
  headline: string;
  subheadline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  availability: string;
  bioIntro: string;
  aboutStory: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  location: string;
  period: string;
  grade: string;
  gradeType: 'CGPA' | 'Percentage';
  highlights: string[];
}

export interface SkillItem {
  name: string;
  context: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  objective: string;
  methodology: string[];
  keyLearnings: string[];
  category: string;
  githubUrl?: string;
  demoUrl?: string;
  statusText: string;
  metrics?: { label: string; value: string }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  provider: string;
  badge?: string;
  category: string;
}

export interface LanguageItem {
  name: string;
  proficiency: 'Native' | 'Fluent' | 'Conversational';
  type: string;
}

export interface NavItem {
  label: string;
  href: string;
}
