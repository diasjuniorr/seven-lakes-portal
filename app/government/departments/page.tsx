import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { departments } from '@/data/government';
import { Briefcase } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Departments' };

export default function DepartmentsPage() {
  return (
    <div>
      <MunicipalPageHeader
        title="Departments"
        subtitle="[Summary]"
      />
      <div className="municipal-container py-10">
        <div className="space-y-4">
          {(departments ?? [])?.map((dept: any) => (
            <div key={dept?.id} className="border border-border rounded-sm p-5 bg-card">
              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-semibold text-base mb-1">{dept?.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">Head: {dept?.head}</p>
                  <p className="text-[13px] text-muted-foreground mb-3">{dept?.description}</p>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground">Responsibilities:</span>
                    <ul className="mt-1 space-y-0.5">
                      {(dept?.responsibilities ?? [])?.map((r: string, i: number) => (
                        <li key={i} className="text-[13px] text-muted-foreground pl-3 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:rounded-full before:bg-muted-foreground/40">
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
