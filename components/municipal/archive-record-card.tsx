import Link from 'next/link';
import { ArchiveRecord } from '@/types';
import { FileText, Calendar, Tag } from 'lucide-react';

export function ArchiveRecordCard({ record }: { record: ArchiveRecord }) {
  return (
    <Link href={`/archive/${record?.recordId}`} className="block group">
      <div className="border border-border rounded-sm p-4 bg-card hover:border-primary/30 transition-colors">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-sm bg-muted flex items-center justify-center shrink-0 mt-0.5">
            <FileText className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-mono text-muted-foreground">{record?.recordId}</span>
              <span className="text-[11px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded-sm">{record?.recordType}</span>
            </div>
            <h3 className="font-medium text-sm mb-1 group-hover:text-primary transition-colors">{record?.title}</h3>
            <p className="text-[13px] text-muted-foreground line-clamp-2">{record?.description}</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" /> {record?.date}
              </span>
              {record?.tags?.slice(0, 2)?.map((tag: string, i: number) => (
                <span key={i} className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Tag className="w-3 h-3" /> {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
