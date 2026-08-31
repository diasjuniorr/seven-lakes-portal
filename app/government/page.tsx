import { Metadata } from 'next';
import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { governmentTopics } from '@/data/government';

export const metadata: Metadata = { title: 'Government' };

export default function GovernmentPage() {
  return <div><MunicipalPageHeader title="Government" subtitle="Governance and planning principles that matter to the Seven Lakes story." /><div className="municipal-container py-10"><div className="prose-municipal max-w-3xl"><h2>Seven Lakes Metropolitan Municipality</h2><p>This page records the governance structures, policy doctrines and institutional turning points established through Seven Lakes gameplay and discussion.</p></div>{governmentTopics.length > 0 && <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">{governmentTopics.map((topic) => <article key={topic.id} className="border border-border rounded-sm p-5 bg-card"><h2 className="font-display font-semibold mb-2">{topic.title}</h2><p className="text-sm text-muted-foreground">{topic.description}</p></article>)}</div>}</div></div>;
}
