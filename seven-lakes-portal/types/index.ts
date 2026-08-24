export interface District {
  id: string;
  slug: string;
  name: string;
  description: string;
  population: string;
  area: string;
  density: string;
  established: string;
  administrativeUnit: string;
  imageUrl: string;
  sections: {
    overview: string;
    geography: string;
    history: string;
    economy: string;
    infrastructure: string;
    transportation: string;
    environment: string;
    demographics: string;
    landUse: string;
    notablePlaces: string;
  };
}

export type ProjectStatusType = 'proposed' | 'planning' | 'approved' | 'in-progress' | 'completed' | 'suspended';

export interface Project {
  id: string;
  slug: string;
  title: string;
  status: ProjectStatusType;
  summary: string;
  department: string;
  responsibleAuthority: string;
  startDate: string;
  endDate: string;
  budget: string;
  districts: string[];
  category: string;
  imageUrl: string;
  sections: {
    objectives: string;
    background: string;
    scope: string;
    milestones: string;
    currentProgress: string;
  };
}

export interface ArchiveRecord {
  id: string;
  recordId: string;
  title: string;
  date: string;
  period: string;
  description: string;
  creator: string;
  source: string;
  collection: string;
  location: string;
  district: string;
  rights: string;
  tags: string[];
  recordType: string;
  department: string;
  imageUrl: string;
}

export interface HistoricalPhotoData {
  id: string;
  imageUrl: string;
  date: string;
  location: string;
  caption: string;
  archiveId: string;
  photographer: string;
  collection: string;
  relatedRecords: string[];
}

export interface Publication {
  id: string;
  slug: string;
  title: string;
  publishingAuthority: string;
  publicationDate: string;
  documentType: string;
  summary: string;
  department: string;
  relatedPublications: string[];
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  publicationDate: string;
  summary: string;
  department: string;
  category: string;
  content: string;
}

export interface GovernmentBody {
  id: string;
  name: string;
  type: string;
  description: string;
  members: number;
  chairperson: string;
  responsibilities: string;
}

export interface Statistic {
  id: string;
  label: string;
  value: string;
  unit: string;
  category: string;
  source: string;
  year: string;
}

export interface PlanningDocument {
  id: string;
  title: string;
  category: string;
  status: string;
  department: string;
  date: string;
  summary: string;
}

export interface Department {
  id: string;
  name: string;
  head: string;
  description: string;
  responsibilities: string[];
}

export interface Meeting {
  id: string;
  body: string;
  date: string;
  agenda: string;
  status: string;
}

export interface Decision {
  id: string;
  title: string;
  body: string;
  date: string;
  status: string;
  reference: string;
}

export interface EnvironmentIndicator {
  id: string;
  label: string;
  value: string;
  unit: string;
  trend: 'improving' | 'stable' | 'declining';
  category: string;
  lastUpdated: string;
}
