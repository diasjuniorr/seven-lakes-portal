import { projects } from '@/data/projects';
import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { StatusBadge } from '@/components/municipal/status-badge';
import { MetadataList } from '@/components/municipal/metadata-list';
import { Timeline } from '@/components/municipal/timeline';
import { MapPlaceholder } from '@/components/municipal/map-placeholder';
import { ImageGallery } from '@/components/municipal/image-gallery';
import { ThenAndNowComparison } from '@/components/municipal/then-and-now';
import { RelatedContent } from '@/components/municipal/related-content';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export function generateStaticParams() {
  return (projects ?? [])?.map((p: any) => ({ slug: p?.slug ?? '' }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects?.find((p: any) => p?.slug === params?.slug);
  return { title: project?.title ?? 'Project' };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects?.find((p: any) => p?.slug === params?.slug);
  if (!project) return notFound();

  return (
    <div>
      <MunicipalPageHeader
        title={project?.title ?? ''}
        subtitle={project?.summary}
        department={project?.department}
      />
      <div className="municipal-container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <StatusBadge status={project?.status ?? 'proposed'} />
              <span className="text-xs text-muted-foreground">{project?.category}</span>
            </div>

            <div className="prose-municipal">
              <section id="objectives"><h2>Objectives</h2><p>{project?.sections?.objectives}</p></section>
              <section id="background"><h2>Background</h2><p>{project?.sections?.background}</p></section>
              <section id="scope"><h2>Scope</h2><p>{project?.sections?.scope}</p></section>
            </div>

            <section id="milestones" className="mt-10">
              <h2 className="text-lg font-display font-semibold mb-4">Milestones</h2>
              <Timeline items={[
                { date: '[Date]', title: '[Milestone]', description: '[Summary]', completed: true },
                { date: '[Date]', title: '[Milestone]', description: '[Summary]', completed: true },
                { date: '[Date]', title: '[Milestone]', description: '[Summary]' },
                { date: '[Date]', title: '[Milestone]', description: '[Summary]' },
              ]} />
            </section>

            <section id="map" className="mt-10">
              <h2 className="text-lg font-display font-semibold mb-4">Location</h2>
              <MapPlaceholder label="[Project location map]" height="h-64" />
            </section>

            <section id="progress" className="mt-10">
              <h2 className="text-lg font-display font-semibold mb-4">Current Progress</h2>
              <p className="text-[15px] text-muted-foreground">{project?.sections?.currentProgress}</p>
            </section>

            <section id="gallery" className="mt-10">
              <h2 className="text-lg font-display font-semibold mb-4">Image Gallery</h2>
              <ImageGallery images={[
                { caption: '[Project photograph]' },
                { caption: '[Project photograph]' },
              ]} />
            </section>

            <section id="comparison" className="mt-10">
              <h2 className="text-lg font-display font-semibold mb-4">Before & After</h2>
              <ThenAndNowComparison
                historicalLabel="Before"
                contemporaryLabel="After"
                historicalDate="[Date]"
                contemporaryDate="[Date]"
                location="[Location]"
                historicalCaption="[Caption]"
                contemporaryCaption="[Caption]"
              />
            </section>
          </div>

          <aside className="space-y-6">
            <div className="border border-border rounded-sm p-5 bg-card">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Project Details</h3>
              <MetadataList items={[
                { label: 'Status', value: project?.status ?? '' },
                { label: 'Responsible Authority', value: project?.responsibleAuthority ?? '' },
                { label: 'Start Date', value: project?.startDate ?? '' },
                { label: 'End Date', value: project?.endDate ?? '' },
                { label: 'Budget', value: project?.budget ?? '' },
                { label: 'Districts', value: (project?.districts ?? [])?.join(', ') },
                { label: 'Category', value: project?.category ?? '' },
              ]} />
            </div>
            <RelatedContent
              title="Related Projects"
              items={[
                { title: '[Project title]', href: '/projects', type: 'Project' },
              ]}
            />
            <RelatedContent
              title="Related Documents"
              items={[
                { title: '[Publication title]', href: '/publications', type: 'Publication' },
              ]}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
