import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { MapPlaceholder } from '@/components/municipal/map-placeholder';
import { ChartPlaceholder } from '@/components/municipal/chart-placeholder';
import { ArrowRight, Map, Train, Car, Building2, Zap, Layers } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Planning & Infrastructure' };

const areas = [
  { title: 'City Planning', icon: Map, description: '[Summary]' },
  { title: 'Zoning', icon: Layers, description: '[Summary]' },
  { title: 'Public Transportation', icon: Train, description: '[Summary]' },
  { title: 'Roads & Highways', icon: Car, description: '[Summary]' },
  { title: 'Utilities & Services', icon: Zap, description: '[Summary]' },
  { title: 'Major Development Areas', icon: Building2, description: '[Summary]' },
];

export default function PlanningPage() {
  return (
    <div>
      <MunicipalPageHeader
        title="Planning & Infrastructure"
        subtitle="[Summary]"
        department="[Department]"
      />
      <div className="municipal-container py-10">
        <div className="prose-municipal max-w-3xl mb-10">
          <p>[Summary]</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {areas?.map((area: any) => {
            const Icon = area?.icon ?? Map;
            return (
              <div key={area?.title} className="border border-border rounded-sm p-5 bg-card">
                <Icon className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-display font-semibold text-base mb-1">{area?.title}</h3>
                <p className="text-[13px] text-muted-foreground">{area?.description}</p>
              </div>
            );
          })}
        </div>

        <section className="mb-12">
          <h2 className="text-lg font-display font-semibold mb-4">Metropolitan Area Plan</h2>
          <MapPlaceholder label="[Metropolitan planning map]" height="h-80" />
        </section>

        <section className="mb-12">
          <h2 className="text-lg font-display font-semibold mb-4">Infrastructure Modernization</h2>
          <div className="prose-municipal max-w-3xl">
            <p>[Summary]</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <ChartPlaceholder label="[Infrastructure investment chart]" height="h-48" />
            <ChartPlaceholder label="[Project timeline chart]" height="h-48" />
          </div>
        </section>

        <section>
          <h2 className="text-lg font-display font-semibold mb-4">Planning Documents</h2>
          <div className="prose-municipal max-w-3xl">
            <p>[Summary]</p>
          </div>
          <Link href="/publications" className="inline-flex items-center gap-1 text-sm text-primary mt-3 hover:underline">
            View publications <ArrowRight className="w-3 h-3" />
          </Link>
        </section>
      </div>
    </div>
  );
}
