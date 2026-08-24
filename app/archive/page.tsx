import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { ArchiveRecordCard } from '@/components/municipal/archive-record-card';
import { archiveRecords } from '@/data/archive';
import { ArchiveFilter } from './archive-filter';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Archive' };

export default function ArchivePage() {
  return (
    <div>
      <MunicipalPageHeader
        title="Metropolitan Archive"
        subtitle="[Summary]"
        department="[Department]"
      />
      <div className="municipal-container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8">
          <aside>
            <ArchiveFilter />
          </aside>
          <div className="space-y-3">
            {(archiveRecords ?? [])?.map((r: any) => (
              <ArchiveRecordCard key={r?.id} record={r} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
