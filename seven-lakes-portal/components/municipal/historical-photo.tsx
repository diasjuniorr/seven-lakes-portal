import { Camera, Calendar, MapPin, Archive, User, FolderOpen } from 'lucide-react';
import { HistoricalPhotoData } from '@/types';

export function HistoricalPhoto({ photo }: { photo: HistoricalPhotoData }) {
  return (
    <figure className="border border-border rounded-sm overflow-hidden bg-card">
      <div className="aspect-[4/3] bg-muted relative flex items-center justify-center">
        <Camera className="w-8 h-8 text-muted-foreground/30" />
        <span className="absolute bottom-2 left-2 text-[10px] font-mono bg-foreground/70 text-background px-1.5 py-0.5 rounded-sm">
          [Historical photograph]
        </span>
      </div>
      <figcaption className="p-4 space-y-2">
        <p className="text-sm font-medium">{photo?.caption}</p>
        <div className="grid grid-cols-2 gap-2 text-[12px] text-muted-foreground">
          <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {photo?.date}</span>
          <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> {photo?.location}</span>
          <span className="flex items-center gap-1.5"><User className="w-3 h-3" /> {photo?.photographer}</span>
          <span className="flex items-center gap-1.5"><Archive className="w-3 h-3" /> {photo?.archiveId}</span>
          <span className="flex items-center gap-1.5 col-span-2"><FolderOpen className="w-3 h-3" /> {photo?.collection}</span>
        </div>
      </figcaption>
    </figure>
  );
}
