import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { PublicationList } from '@/components/municipal/publication-list';
import { publications } from '@/data/publications';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Publications' };

export default function PublicationsPage() {
  return (
    <div>
      <MunicipalPageHeader
        title="Publications"
        subtitle="[Summary]"
      />
      <div className="municipal-container py-10">
        <div className="max-w-3xl">
          <PublicationList publications={publications ?? []} />
        </div>
      </div>
    </div>
  );
}
