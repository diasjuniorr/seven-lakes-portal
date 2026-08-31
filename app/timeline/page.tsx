import { Metadata } from 'next';
import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { timeline } from '@/data/timeline';

export const metadata: Metadata = { title: 'Timeline' };

export default function TimelinePage() {
  return <div><MunicipalPageHeader title="Timeline" subtitle="Major milestones in the recorded history of Seven Lakes." /><div className="municipal-container py-10 max-w-3xl"><div className="space-y-8">{timeline.map((item) => <article key={item.id} className="grid sm:grid-cols-[140px_1fr] gap-2 sm:gap-6"><p className="text-xs font-semibold text-primary uppercase tracking-wider pt-1">{item.period}</p><div className="border-l-2 border-border pl-5"><h2 className="font-display font-semibold text-lg mb-2">{item.title}</h2><p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p></div></article>)}</div></div></div>;
}
