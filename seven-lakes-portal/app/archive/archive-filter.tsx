'use client';

import { FilterPanel } from '@/components/municipal/filter-panel';
import { Search } from 'lucide-react';
import { useState } from 'react';

const filterGroups = [
  { label: 'Record Type', options: ['Photograph', 'Document', 'Map', 'Drawing', 'Film'] },
  { label: 'Period', options: ['[Period]', '[Period]', '[Period]'] },
  { label: 'District', options: ['[District name]', '[District name]', '[District name]'] },
  { label: 'Collection', options: ['[Collection]', '[Collection]'] },
  { label: 'Department', options: ['[Department]', '[Department]'] },
];

export function ArchiveFilter() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="search"
          value={searchQuery}
          onChange={(e: any) => setSearchQuery(e?.target?.value ?? '')}
          placeholder="Search archive..."
          className="w-full pl-9 pr-3 py-2 text-sm border border-border rounded-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        />
      </div>
      <FilterPanel filters={filterGroups} />
    </div>
  );
}
