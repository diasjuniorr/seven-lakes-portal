import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { ChartPlaceholder } from '@/components/municipal/chart-placeholder';
import { environmentIndicators } from '@/data/statistics';
import { Droplets, Wind, TreePine, Leaf, Recycle, TrendingDown, TrendingUp, Minus } from 'lucide-react';
import { Metadata } from 'next';
import type { EnvironmentIndicator } from '@/types';

export const metadata: Metadata = { title: 'Environment' };

const trendIcons = {
  improving: TrendingUp,
  stable: Minus,
  declining: TrendingDown,
};

const trendColors = {
  improving: 'text-emerald-600',
  stable: 'text-amber-600',
  declining: 'text-red-600',
};

const sections = [
  { title: 'Lakes & Water Quality', icon: Droplets, description: '[Summary]' },
  { title: 'Air Quality', icon: Wind, description: '[Summary]' },
  { title: 'Forests & Biodiversity', icon: TreePine, description: '[Summary]' },
  { title: 'Sustainability & Emissions', icon: Leaf, description: '[Summary]' },
  { title: 'Waste & Recycling', icon: Recycle, description: '[Summary]' },
];

export default function EnvironmentPage() {
  return (
    <div>
      <MunicipalPageHeader
        title="Environment"
        subtitle="[Summary]"
        department="[Department]"
      />
      <div className="municipal-container py-10">
        {/* Environmental indicators */}
        <section className="mb-12">
          <h2 className="text-lg font-display font-semibold mb-4">Environmental Indicators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(environmentIndicators ?? [])?.map((ind: EnvironmentIndicator) => {
              const TrendIcon = trendIcons?.[ind?.trend] ?? Minus;
              const trendColor = trendColors?.[ind?.trend] ?? 'text-muted-foreground';
              return (
                <div key={ind?.id} className="border border-border rounded-sm p-5 bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{ind?.category}</span>
                    <TrendIcon className={`w-4 h-4 ${trendColor}`} />
                  </div>
                  <div className="text-xl font-display font-bold">{ind?.value}{ind?.unit ? ` ${ind?.unit}` : ''}</div>
                  <div className="text-sm text-muted-foreground mt-1">{ind?.label}</div>
                  <div className="text-[11px] text-muted-foreground/60 mt-2">Last updated: {ind?.lastUpdated}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Topic sections */}
        {sections?.map((s: any) => {
          const Icon = s?.icon ?? Leaf;
          return (
            <section key={s?.title} className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Icon className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-display font-semibold">{s?.title}</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
                <div className="prose-municipal">
                  <p>{s?.description}</p>
                </div>
                <ChartPlaceholder label={`[${s?.title} data chart]`} height="h-48" />
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
