import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { MetadataList } from '@/components/municipal/metadata-list';
import { StatusBadge } from '@/components/municipal/status-badge';

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { return { title: projects.find(({ slug }) => slug === params.slug)?.title ?? 'Project' }; }

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(({ slug }) => slug === params.slug);
  if (!project) notFound();
  const details = [{ label: 'Category', value: project.category }, { label: 'Districts', value: project.districts.join(', ') || 'Region-wide' }];
  if (project.period) details.push({ label: 'Period', value: project.period });
  return <div><MunicipalPageHeader title={project.title} subtitle={project.summary} /><div className="municipal-container py-10"><div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10"><main><StatusBadge status={project.status} /><div className="prose-municipal mt-6"><h2>Overview</h2><p>{project.sections.overview}</p>{project.sections.currentProgress && <><h2>Current Progress</h2><p>{project.sections.currentProgress}</p></>}</div></main><aside><div className="border border-border rounded-sm p-5 bg-card"><h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Project Details</h2><MetadataList items={details} /></div></aside></div></div></div>;
}
