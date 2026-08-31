import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { districts } from '@/data/districts';
import { projects } from '@/data/projects';
import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { MetadataList } from '@/components/municipal/metadata-list';
import { ProjectCard } from '@/components/municipal/project-card';
import { TableOfContents } from '@/components/municipal/table-of-contents';
import { ThenAndNowComparison } from '@/components/municipal/then-and-now';

export function generateStaticParams() { return districts.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { return { title: districts.find(({ slug }) => slug === params.slug)?.name ?? 'District' }; }

const tocItems = [
  { id: 'overview', label: 'Overview' }, { id: 'history', label: 'History' },
  { id: 'geography-environment', label: 'Geography & Environment' }, { id: 'economy-role', label: 'Economy & Role' },
  { id: 'infrastructure-mobility', label: 'Infrastructure & Mobility' }, { id: 'character-development', label: 'Character & Development' },
  { id: 'notable-places', label: 'Notable Places' }, { id: 'current-projects', label: 'Current Projects' },
  { id: 'visual-history', label: 'Then & Now' },
];

export default function DistrictPage({ params }: { params: { slug: string } }) {
  const district = districts.find(({ slug }) => slug === params.slug);
  if (!district) notFound();
  const districtProjects = projects.filter((project) => project.districts.includes(district.slug));
  const comparisons = district.comparisons ?? [];
  const facts = [{ label: 'Origins / Established', value: district.established }, { label: 'Character', value: district.character }, { label: 'Primary Role', value: district.primaryRole }];
  if (district.population) facts.push({ label: 'Population', value: district.population });
  return <div><MunicipalPageHeader title={district.name} subtitle={district.description} /><div className="municipal-container py-10"><div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-10"><main><div className="border border-border rounded-sm p-5 bg-card mb-8"><h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Key Facts</h2><MetadataList items={facts} /></div><div className="prose-municipal"><section id="overview"><h2>Overview</h2><p>{district.sections.overview}</p></section><section id="history"><h2>History</h2><p>{district.sections.history}</p></section><section id="geography-environment"><h2>Geography &amp; Environment</h2><p>{district.sections.geographyEnvironment}</p></section><section id="economy-role"><h2>Economy &amp; Role</h2><p>{district.sections.economy}</p></section><section id="infrastructure-mobility"><h2>Infrastructure &amp; Mobility</h2><p>{district.sections.infrastructureMobility}</p></section><section id="character-development"><h2>Character &amp; Development</h2><p>{district.sections.characterDevelopment}</p></section><section id="notable-places"><h2>Notable Places</h2><p>{district.sections.notablePlaces}</p></section></div>{districtProjects.length > 0 && <section id="current-projects" className="mt-10"><h2 className="text-lg font-display font-semibold mb-4">Current Projects</h2><div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{districtProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div></section>}{comparisons.length > 0 && <section id="visual-history" className="mt-10"><h2 className="text-lg font-display font-semibold mb-4">Then &amp; Now</h2><div className="space-y-6">{comparisons.map((comparison) => <ThenAndNowComparison key={comparison.id} comparison={comparison} />)}</div></section>}</main><aside className="hidden lg:block"><TableOfContents items={tocItems.filter((item) => (item.id !== 'current-projects' || districtProjects.length > 0) && (item.id !== 'visual-history' || comparisons.length > 0))} /></aside></div></div></div>;
}
