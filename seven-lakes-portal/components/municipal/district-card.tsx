import Link from 'next/link';
import { District } from '@/types';
import { ArrowRight, Users, MapPin } from 'lucide-react';

export function DistrictCard({ district }: { district: District }) {
  return (
    <Link href={`/districts/${district?.slug}`} className="block group">
      <div className="border border-border rounded-sm overflow-hidden bg-card hover:border-primary/30 transition-colors">
        <div className="aspect-[3/1] bg-muted relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <MapPin className="w-6 h-6 text-muted-foreground/40" />
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-display font-semibold text-base mb-1 group-hover:text-primary transition-colors">{district?.name}</h3>
          <p className="text-[13px] text-muted-foreground mb-3 line-clamp-2">{district?.description}</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {district?.population}</span>
            <span>{district?.area}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
