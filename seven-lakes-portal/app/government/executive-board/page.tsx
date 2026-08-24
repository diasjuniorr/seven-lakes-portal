import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { Users } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Executive Board' };

export default function ExecutiveBoardPage() {
  return (
    <div>
      <MunicipalPageHeader
        title="Executive Board"
        subtitle="[Summary]"
        department="[Department]"
      />
      <div className="municipal-container py-10">
        <div className="prose-municipal max-w-3xl mb-10">
          <h2>Role and Function</h2>
          <p>[Summary]</p>
          <h2>Responsibilities</h2>
          <p>[Summary]</p>
        </div>
        <h2 className="text-lg font-display font-semibold mb-4">Board Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[1, 2, 3, 4, 5, 6].map((i: number) => (
            <div key={i} className="border border-border rounded-sm p-4 bg-card">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mb-3">
                <Users className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="text-sm font-medium">[Office holder]</div>
              <div className="text-[12px] text-muted-foreground">[Role]</div>
              <div className="text-[12px] text-muted-foreground">[Department]</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
