'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, ChevronDown, Globe, Accessibility } from 'lucide-react';

const navItems = [
  {
    label: 'Government',
    href: '/government',
    children: [
      { label: 'City Council', href: '/government/council' },
      { label: 'Executive Board', href: '/government/executive-board' },
      { label: 'Mayor', href: '/government/mayor' },
      { label: 'Administration', href: '/government/administration' },
      { label: 'Departments', href: '/government/departments' },
      { label: 'Budget', href: '/government/budget' },
      { label: 'Decisions', href: '/government/decisions' },
    ],
  },
  { label: 'Districts', href: '/districts' },
  { label: 'Projects', href: '/projects' },
  { label: 'Data & Statistics', href: '/data' },
  {
    label: 'Planning',
    href: '/planning',
  },
  { label: 'Environment', href: '/environment' },
  {
    label: 'Archive',
    href: '/archive',
  },
  {
    label: 'News',
    href: '/news',
    children: [
      { label: 'News & Updates', href: '/news' },
      { label: 'Publications', href: '/publications' },
    ],
  },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="municipal-container">
        <div className="flex h-14 items-center justify-between gap-4">
          {/* Identity */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xs">SL</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-semibold text-sm leading-tight">Seven Lakes</div>
              <div className="text-[11px] text-muted-foreground leading-tight">Metropolitan Municipality</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {navItems?.map((item: any) => (
              <div
                key={item?.label}
                className="relative"
                onMouseEnter={() => item?.children && setOpenDropdown(item?.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item?.href ?? '#'}
                  className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-foreground/80 hover:text-foreground transition-colors rounded-sm"
                >
                  {item?.label}
                  {item?.children && <ChevronDown className="w-3 h-3 opacity-50" />}
                </Link>
                {item?.children && openDropdown === item?.label && (
                  <div className="absolute top-full left-0 pt-1 z-50">
                    <div className="bg-popover border border-border rounded-sm shadow-md py-1 min-w-[200px]">
                      {item?.children?.map((child: any) => (
                        <Link
                          key={child?.href}
                          href={child?.href ?? '#'}
                          className="block px-4 py-2 text-[13px] text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
                        >
                          {child?.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <Link
              href="/search"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </Link>
            <button
              className="p-2 text-muted-foreground hover:text-foreground transition-colors hidden sm:flex"
              aria-label="Language"
            >
              <Globe className="w-4 h-4" />
            </button>
            <button
              className="p-2 text-muted-foreground hover:text-foreground transition-colors hidden sm:flex"
              aria-label="Accessibility"
            >
              <Accessibility className="w-4 h-4" />
            </button>
            <button
              className="p-2 text-muted-foreground hover:text-foreground lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-background" aria-label="Mobile navigation">
          <div className="municipal-container py-4 space-y-1">
            {navItems?.map((item: any) => (
              <div key={item?.label}>
                <Link
                  href={item?.href ?? '#'}
                  className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {item?.label}
                </Link>
                {item?.children?.map((child: any) => (
                  <Link
                    key={child?.href}
                    href={child?.href ?? '#'}
                    className="block pl-8 pr-3 py-1.5 text-sm text-muted-foreground hover:text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child?.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-3 border-t border-border flex gap-4 px-3">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>About</Link>
              <Link href="/search" className="text-sm text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>Search</Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
