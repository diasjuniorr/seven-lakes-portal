import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { DataTable } from '@/components/municipal/data-table';
import { Users } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'City Council' };

export default function CouncilPage() {
  return (
    <div>
      <MunicipalPageHeader
        title="City Council"
        subtitle="[Summary]"
        department="[Department]"
      />
      <div className="municipal-container py-10">
        <div className="prose-municipal max-w-3xl mb-10">
          <h2>Composition</h2>
          <p>[Summary]</p>
          <h2>Responsibilities</h2>
          <p>[Summary]</p>
        </div>
        <div className="mb-10">
          <h2 className="text-lg font-display font-semibold mb-4">Council Members</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i: number) => (
              <div key={i} className="border border-border rounded-sm p-4 bg-card">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mb-3">
                  <Users className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="text-sm font-medium">[Office holder]</div>
                <div className="text-[12px] text-muted-foreground">[Role]</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-display font-semibold mb-4">Recent Meetings</h2>
          <DataTable
            headers={['Date', 'Agenda', 'Status']}
            rows={[
              ['[Date]', '[Summary]', 'Scheduled'],
              ['[Date]', '[Summary]', 'Completed'],
              ['[Date]', '[Summary]', 'Completed'],
            ]}
          />
        </div>
      </div>
    </div>
  );
}
