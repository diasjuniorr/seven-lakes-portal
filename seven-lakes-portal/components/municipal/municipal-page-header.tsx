import { Breadcrumbs } from './breadcrumbs';

interface MunicipalPageHeaderProps {
  title: string;
  subtitle?: string;
  department?: string;
  lastUpdated?: string;
  showBreadcrumbs?: boolean;
}

export function MunicipalPageHeader({ title, subtitle, department, lastUpdated, showBreadcrumbs = true }: MunicipalPageHeaderProps) {
  return (
    <div className="border-b border-border bg-card">
      <div className="municipal-container py-8">
        {showBreadcrumbs && <Breadcrumbs />}
        <h1 className="text-2xl sm:text-3xl font-display font-bold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-2 text-[15px] text-muted-foreground max-w-2xl leading-relaxed">{subtitle}</p>}
        <div className="flex items-center gap-4 mt-3">
          {department && (
            <span className="text-xs text-muted-foreground">{department}</span>
          )}
          {lastUpdated && (
            <span className="text-xs text-muted-foreground">Last updated: {lastUpdated}</span>
          )}
        </div>
      </div>
    </div>
  );
}
