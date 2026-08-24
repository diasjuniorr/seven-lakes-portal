import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { DistrictCard } from '@/components/municipal/district-card';
import { districts } from '@/data/districts';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Districts' };

export default function DistrictsPage() {
  return (
    <div>
      <MunicipalPageHeader
        title="Districts"
        subtitle="[Summary]"
      />
      <div className="municipal-container py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(districts ?? [])?.map((d: any) => (
            <DistrictCard key={d?.id} district={d} />
          ))}
        </div>
      </div>
    </div>
  );
}
