'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { Calendar, MapPin, Archive, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

interface ThenAndNowProps {
  historicalLabel: string;
  contemporaryLabel: string;
  historicalDate: string;
  contemporaryDate: string;
  location: string;
  historicalCaption: string;
  contemporaryCaption: string;
  archiveRef?: string;
  districtSlug?: string;
  projectSlug?: string;
}

export function ThenAndNowComparison({
  historicalLabel,
  contemporaryLabel,
  historicalDate,
  contemporaryDate,
  location,
  historicalCaption,
  contemporaryCaption,
  archiveRef,
  districtSlug,
  projectSlug,
}: ThenAndNowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef?.current?.getBoundingClientRect?.();
    if (!rect) return;
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e: MouseEvent) => { e?.preventDefault?.(); updatePosition(e?.clientX ?? 0); };
    const onTouchMove = (e: TouchEvent) => { updatePosition(e?.touches?.[0]?.clientX ?? 0); };
    const onUp = () => setIsDragging(false);
    window?.addEventListener?.('mousemove', onMove);
    window?.addEventListener?.('mouseup', onUp);
    window?.addEventListener?.('touchmove', onTouchMove);
    window?.addEventListener?.('touchend', onUp);
    return () => {
      window?.removeEventListener?.('mousemove', onMove);
      window?.removeEventListener?.('mouseup', onUp);
      window?.removeEventListener?.('touchmove', onTouchMove);
      window?.removeEventListener?.('touchend', onUp);
    };
  }, [isDragging, updatePosition]);

  return (
    <div className="border border-border rounded-sm overflow-hidden bg-card">
      {/* Desktop: side-by-side slider */}
      <div className="hidden sm:block">
        <div
          ref={containerRef}
          className="then-now-slider aspect-[2/1] relative"
          onMouseDown={(e: any) => { setIsDragging(true); updatePosition(e?.clientX ?? 0); }}
          onTouchStart={(e: any) => { setIsDragging(true); updatePosition(e?.touches?.[0]?.clientX ?? 0); }}
          role="slider"
          aria-label="Compare historical and contemporary view"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onKeyDown={(e: any) => {
            if (e?.key === 'ArrowLeft') setPosition((p: number) => Math.max(0, (p ?? 50) - 2));
            if (e?.key === 'ArrowRight') setPosition((p: number) => Math.min(100, (p ?? 50) + 2));
          }}
        >
          {/* Contemporary (full) */}
          <div className="absolute inset-0 bg-muted flex items-center justify-center">
            <span className="text-xs text-muted-foreground">[Contemporary photograph]</span>
          </div>
          {/* Historical (clipped) */}
          <div className="absolute inset-0 bg-accent flex items-center justify-center" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
            <span className="text-xs text-muted-foreground">[Historical photograph]</span>
          </div>
          {/* Handle */}
          <div className="then-now-handle" style={{ left: `${position}%` }} />
          {/* Labels */}
          <div className="absolute bottom-3 left-3 text-[10px] font-mono bg-foreground/70 text-background px-1.5 py-0.5 rounded-sm">
            {historicalLabel}
          </div>
          <div className="absolute bottom-3 right-3 text-[10px] font-mono bg-foreground/70 text-background px-1.5 py-0.5 rounded-sm">
            {contemporaryLabel}
          </div>
        </div>
      </div>

      {/* Mobile: stacked */}
      <div className="sm:hidden">
        <div className="aspect-[3/2] bg-accent flex items-center justify-center relative">
          <span className="text-xs text-muted-foreground">[Historical photograph]</span>
          <div className="absolute bottom-2 left-2 text-[10px] font-mono bg-foreground/70 text-background px-1.5 py-0.5 rounded-sm">{historicalLabel}</div>
        </div>
        <div className="aspect-[3/2] bg-muted flex items-center justify-center relative">
          <span className="text-xs text-muted-foreground">[Contemporary photograph]</span>
          <div className="absolute bottom-2 left-2 text-[10px] font-mono bg-foreground/70 text-background px-1.5 py-0.5 rounded-sm">{contemporaryLabel}</div>
        </div>
      </div>

      {/* Metadata */}
      <div className="p-4 space-y-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Historical</p>
            <p className="text-sm">{historicalCaption}</p>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1"><Calendar className="w-3 h-3" /> {historicalDate}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Contemporary</p>
            <p className="text-sm">{contemporaryCaption}</p>
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1"><Calendar className="w-3 h-3" /> {contemporaryDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border">
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {location}</span>
          {archiveRef && <span className="flex items-center gap-1"><Archive className="w-3 h-3" /> {archiveRef}</span>}
          {districtSlug && <Link href={`/districts/${districtSlug}`} className="flex items-center gap-1 hover:text-foreground"><LinkIcon className="w-3 h-3" /> District</Link>}
          {projectSlug && <Link href={`/projects/${projectSlug}`} className="flex items-center gap-1 hover:text-foreground"><LinkIcon className="w-3 h-3" /> Project</Link>}
        </div>
      </div>
    </div>
  );
}
