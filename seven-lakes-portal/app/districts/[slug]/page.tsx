import { districts } from '@/data/districts';
import { projects } from '@/data/projects';
import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { MetadataList } from '@/components/municipal/metadata-list';
import { MapPlaceholder } from '@/components/municipal/map-placeholder';
import { ProjectCard } from '@/components/municipal/project-card';
import { TableOfContents } from '@/components/municipal/table-of-contents';
import { ImageGallery } from '@/components/municipal/image-gallery';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export function generateStaticParams() {
  return (districts ?? [])?.map((d: any) => ({ slug: d?.slug ?? '' }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const district = districts?.find((d: any) => d?.slug === params?.slug);
  return { title: district?.name ?? 'District' };
}

const tocItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'geography', label: 'Geography' },
  { id: 'history', label: 'History' },
  { id: 'economy', label: 'Economy' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'transportation', label: 'Transportation' },
  { id: 'environment', label: 'Environment' },
  { id: 'demographics', label: 'Demographics' },
  { id: 'land-use', label: 'Land Use' },
  { id: 'notable-places', label: 'Notable Places' },
  { id: 'current-projects', label: 'Current Projects' },
  { id: 'gallery', label: 'Historical Gallery' },
];

export default function DistrictPage({ params }: { params: { slug: string } }) {
  const district = districts?.find((d: any) => d?.slug === params?.slug);
  if (!district) return notFound();

  const districtProjects = (projects ?? [])?.filter((p: any) => (p?.districts ?? [])?.includes(district?.slug));

  return (
    <div>
      <MunicipalPageHeader
        title={district?.name ?? ''}
        subtitle={district?.description}
        department={district?.administrativeUnit}
      />
      <div className="municipal-container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-10">
          <div>
            {/* Key facts */}
            <div className="border border-border rounded-sm p-5 bg-card mb-8">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Key Facts</h3>
              <MetadataList
                items={[
                  { label: 'Population', value: district?.population ?? '' },
                  { label: 'Area', value: district?.area ?? '' },
                  { label: 'Density', value: district?.density ?? '' },
                  { label: 'Established', value: district?.established ?? '' },
                  { label: 'Administrative Unit', value: district?.administrativeUnit ?? '' },
                ]}
              />
            </div>

            <MapPlaceholder label="[District map]" height="h-56" />

            <div className="prose-municipal mt-8">
              <section id="overview"><h2>Overview</h2><p>{district?.sections?.overview}</p></section>
              <section id="geography"><h2>Geography</h2><p>{district?.sections?.geography}</p></section>
              <section id="history"><h2>History</h2><p>{district?.sections?.history}</p></section>
              <section id="economy"><h2>Economy</h2><p>{district?.sections?.economy}</p></section>
              <section id="infrastructure"><h2>Infrastructure</h2><p>{district?.sections?.infrastructure}</p></section>
              <section id="transportation"><h2>Transportation</h2><p>{district?.sections?.transportation}</p></section>
              <section id="environment"><h2>Environment</h2><p>{district?.sections?.environment}</p></section>
              <section id="demographics"><h2>Demographics</h2><p>{district?.sections?.demographics}</p></section>
              <section id="land-use"><h2>Land Use</h2><p>{district?.sections?.landUse}</p></section>
              <section id="notable-places"><h2>Notable Places</h2><p>{district?.sections?.notablePlaces}</p></section>
            </div>

            {(districtProjects?.length ?? 0) > 0 && (
              <section id="current-projects" className="mt-10">
                <h2 className="text-lg font-display font-semibold mb-4">Current Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {districtProjects?.map((p: any) => (
                    <ProjectCard key={p?.id} project={p} />
                  ))}
                </div>
              </section>
            )}

            <section id="gallery" className="mt-10">
              <h2 className="text-lg font-display font-semibold mb-4">Historical Gallery</h2>
              <ImageGallery images={[
                { caption: '[Historical photograph]' },
                { caption: '[Historical photograph]' },
                { caption: '[Historical photograph]' },
              ]} />
            </section>
          </div>

          <aside className="hidden lg:block">
            <TableOfContents items={tocItems} />
          </aside>
        </div>
      </div>
    </div>
  );
}
