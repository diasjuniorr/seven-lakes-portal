import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { ProjectCard } from '@/components/municipal/project-card';
import { projects } from '@/data/projects';
import { ProjectsFilter } from './projects-filter';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Projects' };

export default function ProjectsPage() {
  return (
    <div>
      <MunicipalPageHeader
        title="Projects"
        subtitle="[Summary]"
      />
      <div className="municipal-container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8">
          <aside>
            <ProjectsFilter />
          </aside>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(projects ?? [])?.map((p: any) => (
              <ProjectCard key={p?.id} project={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
