import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { StatisticsGrid } from '@/components/municipal/statistics-grid';
import { ChartPlaceholder } from '@/components/municipal/chart-placeholder';
import { DataTable } from '@/components/municipal/data-table';
import { statistics } from '@/data/statistics';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Data & Statistics' };

const categories = [
  'Demographics', 'Economy', 'Housing', 'Transportation',
  'Environment', 'Municipal Finances', 'Infrastructure',
];

export default function DataPage() {
  return (
    <div>
      <MunicipalPageHeader
        title="Data & Statistics"
        subtitle="[Summary]"
        department="[Department]"
        lastUpdated="[Date]"
      />
      <div className="municipal-container py-10">
        {/* Headline indicators */}
        <section className="mb-12">
          <h2 className="text-lg font-display font-semibold mb-4">Key Indicators</h2>
          <StatisticsGrid stats={(statistics ?? [])?.slice(0, 8)} columns={4} />
        </section>

        {/* District comparison */}
        <section className="mb-12">
          <h2 className="text-lg font-display font-semibold mb-4">District Comparison</h2>
          <ChartPlaceholder label="[District comparison chart]" height="h-64" />
        </section>

        {/* Category sections */}
        {categories?.map((cat: string) => (
          <section key={cat} className="mb-12" id={cat?.toLowerCase?.()?.replace(/\s+/g, '-')}>
            <h2 className="text-lg font-display font-semibold mb-4">{cat}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartPlaceholder label={`[${cat} chart]`} height="h-48" />
              <DataTable
                headers={['Indicator', 'Value', 'Year', 'Source']}
                rows={[
                  ['[Indicator]', '[Statistic]', '[Year]', '[Source]'],
                  ['[Indicator]', '[Statistic]', '[Year]', '[Source]'],
                  ['[Indicator]', '[Statistic]', '[Year]', '[Source]'],
                ]}
                caption={cat}
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
