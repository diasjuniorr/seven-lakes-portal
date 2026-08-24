import { Map } from 'lucide-react';

export function MapPlaceholder({ label, height = 'h-64' }: { label?: string; height?: string }) {
  return (
    <div className={`${height} bg-muted border border-border rounded-sm flex flex-col items-center justify-center gap-2`}>
      <Map className="w-8 h-8 text-muted-foreground/30" />
      <span className="text-xs text-muted-foreground">{label ?? '[Map placeholder]'}</span>
    </div>
  );
}
