export type NavigationTab = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'sectors' 
  | 'insights' 
  | 'team' 
  | 'resources' 
  | 'contact' 
  | 'prompt-architect';

export type ServiceId = 
  | 'radiation-safety' 
  | 'environmental-remediation' 
  | 'lab-testing' 
  | 'geological-studies' 
  | 'mineral-extraction' 
  | 'metals-export';

export interface ServiceDetail {
  id: ServiceId;
  title: string;
  shortTitle: string;
  tagline: string;
  category: string;
  iconName: string;
  heroImage: string;
  overview: string;
  keyCapabilities: {
    title: string;
    description: string;
    metrics?: string;
  }[];
  instrumentation: string[];
  complianceStandards: string[];
  caseStudy: {
    title: string;
    clientSector: string;
    challenge: string;
    solution: string;
    outcome: string;
  };
  keyStats: {
    label: string;
    value: string;
  }[];
}

export interface SectorItem {
  id: string;
  title: string;
  tag: string;
  iconName: string;
  description: string;
  keySolutions: string[];
  certifiedProtocols: string[];
  impactMetric: string;
  caseSummary: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: 'Radiation Science' | 'Geological Physics' | 'Regulatory Compliance' | 'Metals Market' | 'Environmental Remediation';
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  featured?: boolean;
  content: {
    executiveSummary: string;
    sections: {
      heading: string;
      body: string;
      callout?: string;
    }[];
    keyTakeaways: string[];
    citations: string[];
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  division: 'Executive Board' | 'Nuclear Physics & Safety' | 'Geosciences & Exploration' | 'Materials & Metallurgy' | 'Regulatory & Ethics';
  credentials: string[];
  bio: string;
  image: string;
  publicationsCount: number;
  patentsCount: number;
  securityClearance: string;
  specialties: string[];
  email: string;
  linkedin: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  type: 'White Paper' | 'Safety Protocol' | 'Technical Standard' | 'Regulatory Guide';
  documentId: string;
  size: string;
  date: string;
  category: string;
  abstract: string;
  pages: number;
  securityLevel: 'Public Domain' | 'Controlled Industry Access' | 'IAEA Accredited';
}

export interface GlossaryTerm {
  term: string;
  acronym?: string;
  category: 'Nuclear Physics' | 'Radiation Safety' | 'Geology' | 'Environmental' | 'Metallurgy';
  definition: string;
  regulatoryBody: string;
  formula?: string;
}

export interface OfficeLocation {
  id: string;
  city: string;
  country: string;
  role: string;
  address: string;
  phone: string;
  emergencyPhone: string;
  email: string;
  timezone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  facilitySpecs: string[];
}

export interface OperationalImageItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  section: string;
  serviceId?: ServiceId;
  imageUrl: string;
  description: string;
  badge: string;
  telemetryTag: string;
  location: string;
  aspectRatio?: '16:9' | '4:3' | '3:2' | '1:1';
}

export interface InquiryFormData {
  stream: string;
  urgency: 'routine' | 'priority' | 'emergency-containment';
  siteType: string;
  sampleVolume: string;
  location: string;
  complianceNeed: string[];
  timeline: string;
  company: string;
  name: string;
  email: string;
  phone: string;
  details: string;
  ndaRequired: boolean;
}
