'use client';

import { useState, useEffect } from 'react';
import { List } from 'lucide-react';

interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: any[]) => {
        const visible = entries?.find((e: any) => e?.isIntersecting);
        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    items?.forEach((item: TocItem) => {
      const el = document?.getElementById?.(item?.id ?? '');
      if (el) observer?.observe?.(el);
    });

    return () => observer?.disconnect?.();
  }, [items]);

  return (
    <nav className="sticky top-20" aria-label="Table of contents">
      <div className="flex items-center gap-2 mb-3">
        <List className="w-4 h-4 text-muted-foreground" />
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Contents</h3>
      </div>
      <ul className="space-y-0.5">
        {items?.map((item: TocItem) => (
          <li key={item?.id}>
            <a
              href={`#${item?.id}`}
              className={`block py-1 px-3 text-[13px] border-l-2 transition-colors ${
                activeId === item?.id
                  ? 'border-primary text-foreground font-medium'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
              }`}
            >
              {item?.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
