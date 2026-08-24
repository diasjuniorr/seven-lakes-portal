import Link from 'next/link';
import { Publication } from '@/types';
import { FileText, Calendar, Building2 } from 'lucide-react';

export function DocumentCard({ publication }: { publication: Publication }) {
  return (
    <Link href={`/publications/${publication?.slug}`} className="block group">
      <div className="flex items-start gap-3 py-3 border-b border-border hover:bg-accent/30 px-3 -mx-3 transition-colors">
        <div className="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
          <FileText className="w-4 h-4 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium group-hover:text-primary transition-colors">{publication?.title}</h3>
          <p className="text-[13px] text-muted-foreground mt-0.5 line-clamp-1">{publication?.summary}</p>
          <div className="flex items-center gap-3 mt-1.5">
            <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <Calendar className="w-3 h-3" /> {publication?.publicationDate}
            </span>
            <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <Building2 className="w-3 h-3" /> {publication?.publishingAuthority}
            </span>
            <span className="text-[11px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded-sm">{publication?.documentType}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
