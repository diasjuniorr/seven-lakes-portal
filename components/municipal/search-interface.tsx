'use client';

import { useState } from 'react';
import { Search, FileText, Building2, MapPin, Archive, BookOpen, Newspaper } from 'lucide-react';

const resultTypes = [
  { key: 'all', label: 'All', icon: Search },
  { key: 'pages', label: 'Pages', icon: FileText },
  { key: 'projects', label: 'Projects', icon: Building2 },
  { key: 'districts', label: 'Districts', icon: MapPin },
  { key: 'archive', label: 'Archive', icon: Archive },
  { key: 'publications', label: 'Publications', icon: BookOpen },
  { key: 'news', label: 'News', icon: Newspaper },
];

export function SearchInterface() {
  const [query, setQuery] = useState('');
  const [activeType, setActiveType] = useState('all');

  return (
    <div>
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="search"
          value={query}
          onChange={(e: any) => setQuery(e?.target?.value ?? '')}
          placeholder="Search the municipal portal..."
          className="w-full pl-11 pr-4 py-3 text-base border border-border rounded-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          aria-label="Search"
        />
      </div>
      <div className="flex flex-wrap gap-1 mb-8">
        {resultTypes?.map((type: any) => {
          const Icon = type?.icon ?? Search;
          return (
            <button
              key={type?.key}
              onClick={() => setActiveType(type?.key ?? 'all')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-sm border transition-colors ${
                activeType === type?.key
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card text-muted-foreground border-border hover:border-primary/30'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {type?.label}
            </button>
          );
        })}
      </div>
      {query ? (
        <div className="text-center py-16">
          <Search className="w-8 h-8 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">Search results will appear here</p>
        </div>
      ) : (
        <div className="text-center py-16">
          <Search className="w-8 h-8 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">Enter a search term to find records across the municipal portal</p>
        </div>
      )}
    </div>
  );
}
