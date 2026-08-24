import { archiveRecords } from '@/data/archive';
import { MunicipalPageHeader } from '@/components/municipal/municipal-page-header';
import { ArchiveMetadata } from '@/components/municipal/archive-metadata';
import { RelatedContent } from '@/components/municipal/related-content';
import { Camera } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export function generateStaticParams() {
  return (archiveRecords ?? [])?.map((r: any) => ({ recordId: r?.recordId ?? '' }));
}

export function generateMetadata({ params }: { params: { recordId: string } }): Metadata {
  const record = archiveRecords?.find((r: any) => r?.recordId === params?.recordId);
  return { title: record?.title ?? 'Archive Record' };
}

export default function ArchiveRecordPage({ params }: { params: { recordId: string } }) {
  const record = archiveRecords?.find((r: any) => r?.recordId === params?.recordId);
  if (!record) return notFound();

  return (
    <div>
      <MunicipalPageHeader
        title={record?.title ?? ''}
        subtitle={record?.description}
        department={record?.department}
      />
      <div className="municipal-container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          <div>
            <div className="aspect-[4/3] bg-muted rounded-sm border border-border flex items-center justify-center mb-8">
              <div className="text-center">
                <Camera className="w-10 h-10 text-muted-foreground/30 mx-auto mb-2" />
                <span className="text-xs text-muted-foreground">[Archival record image]</span>
              </div>
            </div>
            <div className="prose-municipal">
              <h2>Description</h2>
              <p>{record?.description}</p>
            </div>
          </div>
          <aside className="space-y-6">
            <div className="border border-border rounded-sm p-5 bg-card">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Record Metadata</h3>
              <ArchiveMetadata record={record} />
            </div>
            <RelatedContent
              title="Related Records"
              items={[
                { title: '[Record title]', href: '/archive', type: 'Archive' },
              ]}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
