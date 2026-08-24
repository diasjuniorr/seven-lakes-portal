import Link from 'next/link';
import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { ArrowRight, Landmark, Users, UserCheck, Building2, Briefcase, Wallet, FileCheck } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Government' };

const sections = [
  { title: 'City Council', description: '[Summary]', href: '/government/council', icon: Users },
  { title: 'Executive Board', description: '[Summary]', href: '/government/executive-board', icon: UserCheck },
  { title: 'Metropolitan Mayor', description: '[Summary]', href: '/government/mayor', icon: Landmark },
  { title: 'Administration', description: '[Summary]', href: '/government/administration', icon: Building2 },
  { title: 'Departments', description: '[Summary]', href: '/government/departments', icon: Briefcase },
  { title: 'Budget', description: '[Summary]', href: '/government/budget', icon: Wallet },
  { title: 'Decisions', description: '[Summary]', href: '/government/decisions', icon: FileCheck },
];

export default function GovernmentPage() {
  return (
    <div>
      <MunicipalPageHeader
        title="Government"
        subtitle="[Summary]"
      />
      <div className="municipal-container py-10">
        <div className="prose-municipal max-w-3xl mb-10">
          <p>[Summary]</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections?.map((s: any) => {
            const Icon = s?.icon ?? Building2;
            return (
              <Link key={s?.href} href={s?.href ?? '#'} className="block group">
                <div className="border border-border rounded-sm p-5 bg-card hover:border-primary/30 transition-colors h-full">
                  <Icon className="w-5 h-5 text-primary mb-3" />
                  <h3 className="font-display font-semibold text-base mb-1 group-hover:text-primary transition-colors">{s?.title}</h3>
                  <p className="text-[13px] text-muted-foreground mb-3">{s?.description}</p>
                  <span className="text-xs text-primary flex items-center gap-1">View <ArrowRight className="w-3 h-3" /></span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
