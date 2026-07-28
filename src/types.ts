export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface StatCard {
  id: string;
  number: string;
  label: string;
  iconName: string; // Lucide icon name
}

export interface CaseStudy {
  id: string;
  title: string;
  category: 'Retail' | 'Industrial' | 'Commercial';
  location: string;
  client: string;
  squareFootage: string;
  completionYear: string;
  status: 'COMPLETED' | 'ONGOING';
  image: string;
  problem: string;
  solution: string;
  highlights: string[];
}

export interface Affiliation {
  id: string;
  title: string;
  iconName: string;
}

export interface Accolade {
  id: string;
  text: string;
}

export interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  iconName: string;
  items: string[];
}

export interface ProjectUpdate {
  id: string;
  title: string;
  date: string;
  summary: string;
  status: 'Completed' | 'Ongoing';
  image?: string;
  isFeatured?: boolean;
}

export interface TestimonialItem {
  id: string;
  companyLogo: string; // Name or placeholder name to display elegantly
  companyName: string;
  quote: string;
  authorName: string;
  authorTitle: string;
}
