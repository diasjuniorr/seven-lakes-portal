import Link from 'next/link';
import { projects } from '@/data/projects';
import { districts } from '@/data/districts';
import { newsArticles } from '@/data/news';
import { publications } from '@/data/publications';
import { statistics } from '@/data/statistics';
import { ProjectCard } from '@/components/municipal/project-card';
import { DistrictCard } from '@/components/municipal/district-card';
import { StatisticsGrid } from '@/components/municipal/statistics-grid';
import { DocumentCard } from '@/components/municipal/document-card';
import { ThenAndNowComparison } from '@/components/municipal/then-and-now';
import {
  ArrowRight,
  Building2,
  Landmark,
  BarChart3,
  FolderOpen,
  Map,
  Archive,
  Newspaper,
  Search,
  FileText,
  TreePine,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Government Identity */}
      <section className="border-b border-border bg-card">
        <div className="municipal-container py-14 sm:py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded bg-primary flex items-center justify-center">
                <Landmark className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-3">
              Seven Lakes Metropolitan Municipality
            </h1>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              [Summary]
            </p>
          </div>
        </div>
      </section>

      {/* Current Priorities */}
      <section className="page-section border-b border-border">
        <div className="municipal-container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-display font-semibold">Current Priorities</h2>
            <Link href="/government" className="text-xs text-primary hover:underline flex items-center gap-1">
              Government overview <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i: number) => (
              <div key={i} className="border border-border rounded-sm p-5 bg-card">
                <div className="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center mb-3">
                  <Building2 className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold mb-1">[Priority title]</h3>
                <p className="text-[13px] text-muted-foreground">[Summary]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="page-section border-b border-border bg-card">
        <div className="municipal-container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-display font-semibold">Current Projects</h2>
            <Link href="/projects" className="text-xs text-primary hover:underline flex items-center gap-1">
              All projects <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(projects ?? [])?.slice(0, 3)?.map((p: any) => (
              <ProjectCard key={p?.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Publications */}
      <section className="page-section border-b border-border">
        <div className="municipal-container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-display font-semibold">Latest Publications</h2>
            <Link href="/publications" className="text-xs text-primary hover:underline flex items-center gap-1">
              All publications <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="max-w-3xl">
            {(publications ?? [])?.slice(0, 3)?.map((pub: any) => (
              <DocumentCard key={pub?.id} publication={pub} />
            ))}
          </div>
        </div>
      </section>

      {/* Seven Lakes in Numbers */}
      <section className="page-section border-b border-border bg-card">
        <div className="municipal-container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-display font-semibold">Seven Lakes in Numbers</h2>
            <Link href="/data" className="text-xs text-primary hover:underline flex items-center gap-1">
              Data & Statistics <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <StatisticsGrid stats={(statistics ?? [])?.slice(0, 4)} columns={4} />
        </div>
      </section>

      {/* Districts */}
      <section className="page-section border-b border-border">
        <div className="municipal-container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-display font-semibold">Districts</h2>
            <Link href="/districts" className="text-xs text-primary hover:underline flex items-center gap-1">
              All districts <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(districts ?? [])?.map((d: any) => (
              <DistrictCard key={d?.id} district={d} />
            ))}
          </div>
        </div>
      </section>

      {/* Historical Archive Feature */}
      <section className="page-section border-b border-border bg-card">
        <div className="municipal-container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-display font-semibold">From the Archive</h2>
            <Link href="/archive" className="text-xs text-primary hover:underline flex items-center gap-1">
              Full archive <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="max-w-3xl">
            <ThenAndNowComparison
              historicalLabel="[Historical date]"
              contemporaryLabel="[Contemporary date]"
              historicalDate="[Date]"
              contemporaryDate="[Date]"
              location="[Location]"
              historicalCaption="[Caption]"
              contemporaryCaption="[Caption]"
              archiveRef="SLM-A-0001"
              districtSlug="central-district"
            />
          </div>
        </div>
      </section>

      {/* News */}
      <section className="page-section border-b border-border">
        <div className="municipal-container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-display font-semibold">Municipal Updates</h2>
            <Link href="/news" className="text-xs text-primary hover:underline flex items-center gap-1">
              All news <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="space-y-3 max-w-3xl">
            {(newsArticles ?? [])?.map((article: any) => (
              <Link key={article?.id} href={`/news/${article?.slug}`} className="block group">
                <div className="flex items-start gap-3 py-3 border-b border-border hover:bg-accent/30 px-3 -mx-3 transition-colors">
                  <Newspaper className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-medium group-hover:text-primary transition-colors">{article?.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[11px] text-muted-foreground">{article?.publicationDate}</span>
                      <span className="text-[11px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded-sm">{article?.category}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="page-section">
        <div className="municipal-container">
          <h2 className="text-lg font-display font-semibold mb-6">Quick Access</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { label: 'Government', href: '/government', icon: Landmark },
              { label: 'Projects', href: '/projects', icon: FolderOpen },
              { label: 'Data', href: '/data', icon: BarChart3 },
              { label: 'Planning', href: '/planning', icon: Map },
              { label: 'Environment', href: '/environment', icon: TreePine },
              { label: 'Search', href: '/search', icon: Search },
            ].map((item: any) => {
              const Icon = item?.icon ?? FileText;
              return (
                <Link key={item?.href} href={item?.href ?? '#'} className="group">
                  <div className="border border-border rounded-sm p-4 text-center hover:border-primary/30 hover:bg-card transition-colors">
                    <Icon className="w-5 h-5 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-xs font-medium">{item?.label}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
