'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Calendar, Link as LinkIcon } from 'lucide-react';
import { ImageComparison } from '@/types';

export function ThenAndNowComparison({ comparison }: { comparison: ImageComparison }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPosition(Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (event: MouseEvent) => { event.preventDefault(); updatePosition(event.clientX); };
    const onTouchMove = (event: TouchEvent) => updatePosition(event.touches[0]?.clientX ?? 0);
    const onUp = () => setIsDragging(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onUp);
    };
  }, [isDragging, updatePosition]);

  return (
    <div className="border border-border rounded-sm overflow-hidden bg-card">
      <div className="hidden sm:block">
        <div
          ref={containerRef}
          className="then-now-slider aspect-[2/1] relative select-none"
          onMouseDown={(event) => { setIsDragging(true); updatePosition(event.clientX); }}
          onTouchStart={(event) => { setIsDragging(true); updatePosition(event.touches[0]?.clientX ?? 0); }}
          role="slider"
          aria-label={`Compare ${comparison.beforeLabel} and ${comparison.afterLabel}`}
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') setPosition((current) => Math.max(0, current - 2));
            if (event.key === 'ArrowRight') setPosition((current) => Math.min(100, current + 2));
          }}
        >
          <Image src={comparison.afterImage} alt={comparison.afterLabel} fill sizes="(min-width: 640px) 768px, 100vw" className="object-cover pointer-events-none" />
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
            <Image src={comparison.beforeImage} alt={comparison.beforeLabel} fill sizes="(min-width: 640px) 768px, 100vw" className="object-cover pointer-events-none" />
          </div>
          <div className="then-now-handle" style={{ left: `${position}%` }} />
          <div className="absolute bottom-3 left-3 text-[10px] font-mono bg-foreground/70 text-background px-1.5 py-0.5 rounded-sm">{comparison.beforeLabel}</div>
          <div className="absolute bottom-3 right-3 text-[10px] font-mono bg-foreground/70 text-background px-1.5 py-0.5 rounded-sm">{comparison.afterLabel}</div>
        </div>
      </div>

      <div className="sm:hidden">
        <div className="aspect-[3/2] relative"><Image src={comparison.beforeImage} alt={comparison.beforeLabel} fill sizes="100vw" className="object-cover" /><div className="absolute bottom-2 left-2 text-[10px] font-mono bg-foreground/70 text-background px-1.5 py-0.5 rounded-sm">{comparison.beforeLabel}</div></div>
        <div className="aspect-[3/2] relative"><Image src={comparison.afterImage} alt={comparison.afterLabel} fill sizes="100vw" className="object-cover" /><div className="absolute bottom-2 left-2 text-[10px] font-mono bg-foreground/70 text-background px-1.5 py-0.5 rounded-sm">{comparison.afterLabel}</div></div>
      </div>

      {(comparison.caption || comparison.beforeDate || comparison.afterDate || comparison.districtSlug || comparison.projectSlug) && (
        <div className="p-4 space-y-3">
          {comparison.caption && <p className="text-sm">{comparison.caption}</p>}
          {(comparison.beforeDate || comparison.afterDate) && <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted-foreground">{comparison.beforeDate && <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{comparison.beforeLabel}: {comparison.beforeDate}</span>}{comparison.afterDate && <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{comparison.afterLabel}: {comparison.afterDate}</span>}</div>}
          {(comparison.districtSlug || comparison.projectSlug) && <div className="flex gap-4 pt-2 border-t border-border text-xs text-muted-foreground">{comparison.districtSlug && <Link href={`/districts/${comparison.districtSlug}`} className="flex items-center gap-1 hover:text-foreground"><LinkIcon className="w-3 h-3" />District</Link>}{comparison.projectSlug && <Link href={`/projects/${comparison.projectSlug}`} className="flex items-center gap-1 hover:text-foreground"><LinkIcon className="w-3 h-3" />Project</Link>}</div>}
        </div>
      )}
    </div>
  );
}
