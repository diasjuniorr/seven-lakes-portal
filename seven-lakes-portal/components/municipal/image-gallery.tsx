'use client';

import { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryImage {
  caption: string;
  date?: string;
}

export function ImageGallery({ images }: { images: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const safeImages = images ?? [];

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {safeImages?.map((img: GalleryImage, i: number) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="aspect-[4/3] bg-muted rounded-sm relative flex items-center justify-center hover:opacity-80 transition-opacity group"
            aria-label={`View image: ${img?.caption}`}
          >
            <Camera className="w-5 h-5 text-muted-foreground/30" />
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-[10px] text-background truncate">{img?.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4" onClick={() => setLightboxIndex(null)}>
          <button className="absolute top-4 right-4 text-background/80 hover:text-background" onClick={() => setLightboxIndex(null)} aria-label="Close">
            <X className="w-6 h-6" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-background/80 hover:text-background"
            onClick={(e: any) => { e?.stopPropagation?.(); setLightboxIndex(Math.max(0, (lightboxIndex ?? 0) - 1)); }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <div className="max-w-3xl w-full" onClick={(e: any) => e?.stopPropagation?.()}>
            <div className="aspect-[4/3] bg-muted rounded-sm flex items-center justify-center">
              <Camera className="w-12 h-12 text-muted-foreground/30" />
            </div>
            <p className="text-sm text-background/80 mt-3 text-center">{safeImages?.[lightboxIndex]?.caption}</p>
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-background/80 hover:text-background"
            onClick={(e: any) => { e?.stopPropagation?.(); setLightboxIndex(Math.min((safeImages?.length ?? 1) - 1, (lightboxIndex ?? 0) + 1)); }}
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </>
  );
}
