import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { DataTable } from '@/components/municipal/data-table';
import { decisions } from '@/data/government';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Decisions' };

export default function DecisionsPage() {
  return (
    <div>
      <MunicipalPageHeader
        title="Decisions"
        subtitle="[Summary]"
      />
      <div className="municipal-container py-10">
        <div className="prose-municipal max-w-3xl mb-10">
          <p>[Summary]</p>
        </div>
        <DataTable
          headers={['Reference', 'Title', 'Body', 'Date', 'Status']}
          rows={(decisions ?? [])?.map((d: any) => [
            d?.reference ?? '',
            d?.title ?? '',
            d?.body ?? '',
            d?.date ?? '',
            d?.status ?? '',
          ])}
        />
      </div>
    </div>
  );
}
