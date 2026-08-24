import { Statistic } from '@/types';
import { BarChart3 } from 'lucide-react';

interface StatisticsGridProps {
  stats: Statistic[];
  columns?: 2 | 3 | 4;
}

export function StatisticsGrid({ stats, columns = 4 }: StatisticsGridProps) {
  const gridClass = columns === 2 ? 'sm:grid-cols-2' : columns === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4';
  return (
    <div className={`grid grid-cols-1 ${gridClass} gap-4`}>
      {stats?.map((stat: Statistic) => (
        <div key={stat?.id} className="bg-card border border-border rounded-sm p-5">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">{stat?.category}</span>
          </div>
          <div className="text-xl font-display font-bold text-foreground">
            {stat?.value}{stat?.unit ? ` ${stat?.unit}` : ''}
          </div>
          <div className="text-sm text-muted-foreground mt-1">{stat?.label}</div>
          {stat?.source && <div className="text-[11px] text-muted-foreground/60 mt-2">{stat?.source} · {stat?.year}</div>}
        </div>
      ))}
    </div>
  );
}
