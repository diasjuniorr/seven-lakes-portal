import Link from 'next/link';
import { Project } from '@/types';
import { StatusBadge } from './status-badge';
import { ArrowRight, MapPin } from 'lucide-react';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project?.slug}`} className="block group">
      <div className="border border-border rounded-sm p-5 bg-card hover:border-primary/30 transition-colors">
        <div className="flex items-start justify-between gap-3 mb-3">
          <StatusBadge status={project?.status ?? 'proposed'} />
          <span className="text-xs text-muted-foreground">{project?.category}</span>
        </div>
        <h3 className="font-display font-semibold text-base mb-2 group-hover:text-primary transition-colors">{project?.title}</h3>
        <p className="text-[13px] text-muted-foreground mb-3 line-clamp-2">{project?.summary}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span>{project?.department}</span>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </div>
    </Link>
  );
}
