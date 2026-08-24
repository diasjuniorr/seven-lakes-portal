import { Clock, CheckCircle2, Circle } from 'lucide-react';

interface TimelineItem {
  date: string;
  title: string;
  description?: string;
  completed?: boolean;
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-2 top-2 bottom-2 w-px bg-border" />
      {(items ?? [])?.map((item: TimelineItem, i: number) => (
        <div key={i} className="relative mb-6 last:mb-0">
          <div className="absolute -left-6 top-0.5">
            {item?.completed ? (
              <CheckCircle2 className="w-4 h-4 text-primary" />
            ) : (
              <Circle className="w-4 h-4 text-muted-foreground" />
            )}
          </div>
          <div className="flex items-center gap-2 mb-0.5">
            <Clock className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground font-mono">{item?.date}</span>
          </div>
          <h4 className="text-sm font-medium">{item?.title}</h4>
          {item?.description && <p className="text-[13px] text-muted-foreground mt-0.5">{item?.description}</p>}
        </div>
      ))}
    </div>
  );
}
