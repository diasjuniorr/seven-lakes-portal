import { Metadata } from 'next';
import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';

export const metadata: Metadata = { title: 'About Seven Lakes' };

export default function AboutPage() {
  return <div><MunicipalPageHeader title="About Seven Lakes" subtitle="A public diary and lore portal for a fictional Cities: Skylines region." /><div className="municipal-container py-10"><div className="prose-municipal max-w-3xl"><h2>The public record</h2><p>Seven Lakes is documented as it develops through gameplay and discussion. This site collects established district histories, regional milestones, major projects and images without filling gaps with invented statistics or administrative detail.</p><h2>How the record grows</h2><p>New material is added when it becomes part of the Seven Lakes story. Sections without confirmed content remain unpublished until there is something useful to record.</p></div></div></div>;
}
