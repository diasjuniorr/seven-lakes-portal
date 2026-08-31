import { Metadata } from 'next';
import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { ProjectCard } from '@/components/municipal/project-card';
import { projects } from '@/data/projects';

export const metadata: Metadata = { title: 'Projects' };

export default function ProjectsPage() {
  return <div><MunicipalPageHeader title="Projects" subtitle="Major developments documented through Seven Lakes gameplay." /><div className="municipal-container py-10">{projects.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div> : <p className="text-sm text-muted-foreground max-w-2xl">No projects have been added to the public record yet.</p>}</div></div>;
}
