import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { Building2 } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Administration' };

export default function AdministrationPage() {
  return (
    <div>
      <MunicipalPageHeader
        title="Administration"
        subtitle="[Summary]"
      />
      <div className="municipal-container py-10">
        <div className="prose-municipal max-w-3xl mb-10">
          <h2>Organizational Structure</h2>
          <p>[Summary]</p>
        </div>
        {/* Org chart placeholder */}
        <div className="border border-border rounded-sm p-8 bg-card mb-10">
          <div className="text-center">
            <div className="inline-block border border-border rounded-sm p-4 bg-background mb-4">
              <Building2 className="w-5 h-5 text-primary mx-auto mb-1" />
              <div className="text-sm font-medium">[Office holder]</div>
              <div className="text-[11px] text-muted-foreground">City Manager / Chief Executive</div>
            </div>
            <div className="w-px h-6 bg-border mx-auto" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
              {[1, 2, 3].map((i: number) => (
                <div key={i} className="border border-border rounded-sm p-3 bg-background">
                  <div className="text-sm font-medium">[Office holder]</div>
                  <div className="text-[11px] text-muted-foreground">[Department]</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="prose-municipal max-w-3xl">
          <h2>Administrative Divisions</h2>
          <p>[Summary]</p>
          <h2>Service Areas</h2>
          <p>[Summary]</p>
        </div>
      </div>
    </div>
  );
}
