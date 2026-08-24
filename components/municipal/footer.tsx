import Link from 'next/link';
import { Building2 } from 'lucide-react';

const links = [
  { label: 'Districts', href: '/districts' }, { label: 'Timeline', href: '/timeline' },
  { label: 'Projects', href: '/projects' }, { label: 'Government', href: '/government' },
  { label: 'Gallery', href: '/gallery' }, { label: 'About', href: '/about' },
];

export function Footer() {
  return <footer className="border-t border-border bg-foreground text-background"><div className="municipal-container py-10"><div className="flex flex-col md:flex-row gap-8 justify-between"><div className="max-w-md"><div className="flex items-center gap-2 mb-3"><Building2 className="w-5 h-5 opacity-70" /><span className="font-display font-semibold text-sm">Seven Lakes Metropolitan Municipality</span></div><p className="text-sm opacity-60 leading-relaxed">A public record of a fictional Cities: Skylines region.</p></div><nav className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-2" aria-label="Footer navigation">{links.map((link) => <Link key={link.href} href={link.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">{link.label}</Link>)}</nav></div><div className="mt-10 pt-6 border-t border-background/10"><p className="text-xs opacity-40">Seven Lakes Metropolitan Municipality</p></div></div></footer>;
}
