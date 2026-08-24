import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { MapPlaceholder } from '@/components/municipal/map-placeholder';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'About Seven Lakes' };

const sections = [
  'Overview', 'Geography', 'History', 'Government', 'Population',
  'Economy', 'Environment', 'Transportation', 'Districts', 'Maps',
];

export default function AboutPage() {
  return (
    <div>
      <MunicipalPageHeader
        title="About Seven Lakes"
        subtitle="[Summary]"
      />
      <div className="municipal-container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-10">
          <div className="prose-municipal">
            {sections?.map((section: string) => (
              <div key={section} id={section?.toLowerCase?.()?.replace(/\s+/g, '-')}>
                <h2>{section}</h2>
                <p>[Summary]</p>
                {section === 'Geography' && (
                  <div className="my-4">
                    <MapPlaceholder label="[Geographic map]" height="h-56" />
                  </div>
                )}
                {section === 'Maps' && (
                  <div className="my-4">
                    <MapPlaceholder label="[Metropolitan area map]" height="h-72" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <aside className="hidden lg:block">
            <div className="sticky top-20 border border-border rounded-sm p-4 bg-card">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Sections</h3>
              <ul className="space-y-1">
                {sections?.map((s: string) => (
                  <li key={s}>
                    <a href={`#${s?.toLowerCase?.()?.replace(/\s+/g, '-')}`} className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
