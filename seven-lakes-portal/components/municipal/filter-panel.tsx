'use client';

import { SlidersHorizontal } from 'lucide-react';

interface FilterGroup {
  label: string;
  options: string[];
}

export function FilterPanel({ filters, onFilterChange }: { filters: FilterGroup[]; onFilterChange?: (group: string, value: string) => void }) {
  return (
    <div className="border border-border rounded-sm p-4 bg-card">
      <div className="flex items-center gap-2 mb-4">
        <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Filters</h3>
      </div>
      <div className="space-y-4">
        {(filters ?? [])?.map((group: FilterGroup) => (
          <div key={group?.label}>
            <label className="block text-xs font-medium text-muted-foreground mb-1.5">{group?.label}</label>
            <select
              className="w-full text-sm border border-border rounded-sm px-3 py-1.5 bg-background text-foreground"
              onChange={(e: any) => onFilterChange?.(group?.label ?? '', e?.target?.value ?? '')}
              defaultValue=""
            >
              <option value="">All</option>
              {group?.options?.map((opt: string) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}
