'use client';

import { FilterPanel } from '@/components/municipal/filter-panel';

const filterGroups = [
  { label: 'Status', options: ['Proposed', 'Planning', 'Approved', 'In Progress', 'Completed', 'Suspended'] },
  { label: 'Category', options: ['Infrastructure', 'Environment', 'Transportation', 'Housing'] },
  { label: 'District', options: ['[District name]', '[District name]', '[District name]'] },
  { label: 'Department', options: ['[Department]', '[Department]'] },
];

export function ProjectsFilter() {
  return <FilterPanel filters={filterGroups} />;
}
