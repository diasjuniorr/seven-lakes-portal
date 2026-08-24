import { BarChart3 } from 'lucide-react';

export function ChartPlaceholder({ label, height = 'h-48' }: { label?: string; height?: string }) {
  return (
    <div className={`${height} bg-muted border border-border rounded-sm flex flex-col items-center justify-center gap-2`}>
      <BarChart3 className="w-8 h-8 text-muted-foreground/30" />
      <span className="text-xs text-muted-foreground">{label ?? '[Chart placeholder]'}</span>
    </div>
  );
}
