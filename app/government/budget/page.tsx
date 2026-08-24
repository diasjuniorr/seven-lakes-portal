import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { ChartPlaceholder } from '@/components/municipal/chart-placeholder';
import { DataTable } from '@/components/municipal/data-table';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Budget' };

export default function BudgetPage() {
  return (
    <div>
      <MunicipalPageHeader
        title="Municipal Budget"
        subtitle="[Summary]"
        department="[Department]"
        lastUpdated="[Date]"
      />
      <div className="municipal-container py-10">
        <div className="prose-municipal max-w-3xl mb-10">
          <h2>Budget Overview</h2>
          <p>[Summary]</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <ChartPlaceholder label="[Revenue breakdown chart]" height="h-64" />
          <ChartPlaceholder label="[Expenditure breakdown chart]" height="h-64" />
        </div>
        <div className="mb-10">
          <h2 className="text-lg font-display font-semibold mb-4">Budget by Department</h2>
          <DataTable
            headers={['Department', 'Allocation', 'Expenditure', 'Variance']}
            rows={[
              ['[Department]', '[Statistic]', '[Statistic]', '[Statistic]'],
              ['[Department]', '[Statistic]', '[Statistic]', '[Statistic]'],
              ['[Department]', '[Statistic]', '[Statistic]', '[Statistic]'],
              ['[Department]', '[Statistic]', '[Statistic]', '[Statistic]'],
            ]}
          />
        </div>
        <div className="prose-municipal max-w-3xl">
          <h2>Budget Documents</h2>
          <p>[Summary]</p>
        </div>
      </div>
    </div>
  );
}
