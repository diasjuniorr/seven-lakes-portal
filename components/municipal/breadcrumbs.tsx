'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

const labelMap: Record<string, string> = {
  government: 'Government',
  council: 'City Council',
  'executive-board': 'Executive Board',
  mayor: 'Mayor',
  administration: 'Administration',
  departments: 'Departments',
  budget: 'Budget',
  decisions: 'Decisions',
  districts: 'Districts',
  projects: 'Projects',
  data: 'Data & Statistics',
  planning: 'Planning & Infrastructure',
  environment: 'Environment',
  archive: 'Archive',
  news: 'News & Updates',
  publications: 'Publications',
  about: 'About Seven Lakes',
  search: 'Search',
};

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = (pathname ?? '').split('/').filter(Boolean);

  if (segments?.length === 0) return null;

  const crumbs = segments?.map((seg: string, i: number) => ({
    label: labelMap[seg] ?? seg?.split('-')?.map((w: string) => (w?.[0]?.toUpperCase?.() ?? '') + (w?.slice?.(1) ?? ''))?.join(' '),
    href: '/' + segments?.slice(0, i + 1)?.join('/'),
  })) ?? [];

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center gap-1 text-sm text-muted-foreground flex-wrap">
        <li>
          <Link href="/" className="hover:text-foreground transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {crumbs?.map((crumb: any, i: number) => (
          <li key={crumb?.href} className="flex items-center gap-1">
            <ChevronRight className="w-3 h-3 opacity-40" />
            {i === (crumbs?.length ?? 0) - 1 ? (
              <span className="text-foreground font-medium">{crumb?.label}</span>
            ) : (
              <Link href={crumb?.href ?? '#'} className="hover:text-foreground transition-colors">
                {crumb?.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
