import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { User, Landmark } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Metropolitan Mayor' };

export default function MayorPage() {
  return (
    <div>
      <MunicipalPageHeader
        title="Metropolitan Mayor"
        subtitle="[Summary]"
      />
      <div className="municipal-container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          <div>
            <div className="aspect-[3/4] bg-muted rounded-sm flex items-center justify-center border border-border">
              <User className="w-12 h-12 text-muted-foreground/30" />
            </div>
            <div className="mt-4 space-y-2">
              <div className="text-lg font-display font-semibold">[Office holder]</div>
              <div className="text-sm text-muted-foreground">Metropolitan Mayor</div>
              <div className="text-xs text-muted-foreground">[Term information]</div>
            </div>
          </div>
          <div className="prose-municipal">
            <h2>Role of the Metropolitan Mayor</h2>
            <p>[Summary]</p>
            <h2>Responsibilities</h2>
            <p>[Summary]</p>
            <h2>Current Priorities</h2>
            <p>[Summary]</p>
          </div>
        </div>
      </div>
    </div>
  );
}
