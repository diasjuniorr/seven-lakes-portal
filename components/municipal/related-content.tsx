import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface RelatedItem {
  title: string;
  href: string;
  type: string;
}

export function RelatedContent({ title, items }: { title: string; items: RelatedItem[] }) {
  if (!items?.length) return null;
  return (
    <div className="border border-border rounded-sm p-5 bg-card">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">{title}</h3>
      <ul className="space-y-2">
        {items?.map((item: RelatedItem, i: number) => (
          <li key={i}>
            <Link href={item?.href ?? '#'} className="flex items-center justify-between gap-2 text-sm hover:text-primary transition-colors group">
              <span>{item?.title}</span>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded-sm">{item?.type}</span>
                <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:text-primary" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
