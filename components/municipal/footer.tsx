import Link from 'next/link';
import { Building2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="municipal-container py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 opacity-70" />
              <span className="font-display font-semibold text-sm">Seven Lakes Metropolitan Municipality</span>
            </div>
            <p className="text-sm opacity-60 leading-relaxed">[Contact information]</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-background/50 mb-3">Government</h4>
            <ul className="space-y-1.5">
              <li><Link href="/government" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Government Overview</Link></li>
              <li><Link href="/government/council" className="text-sm opacity-70 hover:opacity-100 transition-opacity">City Council</Link></li>
              <li><Link href="/government/decisions" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Decisions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-background/50 mb-3">Services</h4>
            <ul className="space-y-1.5">
              <li><Link href="/projects" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Projects</Link></li>
              <li><Link href="/data" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Data & Statistics</Link></li>
              <li><Link href="/planning" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Planning</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-background/50 mb-3">Information</h4>
            <ul className="space-y-1.5">
              <li><Link href="/about" className="text-sm opacity-70 hover:opacity-100 transition-opacity">About Seven Lakes</Link></li>
              <li><Link href="/archive" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Archive</Link></li>
              <li><Link href="/search" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Search</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs opacity-40">© Seven Lakes Metropolitan Municipality</p>
          <p className="text-xs opacity-40">Accessibility Statement</p>
        </div>
      </div>
    </footer>
  );
}
