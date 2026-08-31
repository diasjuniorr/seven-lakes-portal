'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' }, { label: 'Districts', href: '/districts' },
  { label: 'Timeline', href: '/timeline' }, { label: 'Projects', href: '/projects' },
  { label: 'Government', href: '/government' }, { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm"><div className="municipal-container"><div className="flex h-14 items-center justify-between gap-4"><Link href="/" className="flex items-center gap-3 shrink-0"><div className="w-8 h-8 rounded bg-primary flex items-center justify-center"><span className="text-primary-foreground font-display font-bold text-xs">SL</span></div><div className="hidden sm:block"><div className="font-display font-semibold text-sm leading-tight">Seven Lakes</div><div className="text-[11px] text-muted-foreground leading-tight">Metropolitan Municipality</div></div></Link><nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">{navItems.map((item) => <Link key={item.href} href={item.href} className="px-3 py-2 text-[13px] font-medium text-foreground/80 hover:text-foreground transition-colors rounded-sm">{item.label}</Link>)}</nav><button className="p-2 text-muted-foreground hover:text-foreground lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">{mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button></div></div>{mobileOpen && <nav className="lg:hidden border-t border-border bg-background" aria-label="Mobile navigation"><div className="municipal-container py-4 space-y-1">{navItems.map((item) => <Link key={item.href} href={item.href} className="block px-3 py-2 text-sm font-medium hover:bg-accent rounded-sm" onClick={() => setMobileOpen(false)}>{item.label}</Link>)}</div></nav>}</header>;
}
